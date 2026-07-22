import { Modal, Notice, requestUrl, type App } from "obsidian";
import { findReferencesInText } from "./references";
import type { ParsedReference } from "./types";

interface CachedVerse {
  html: string;
  citation: string;
  expires: number;
}

const verseCache = new Map<string, CachedVerse>();
const ONE_HOUR = 60 * 60 * 1000;

function bcv(reference: ParsedReference): string {
  return `${String(reference.bookOrder + 1).padStart(2, "0")}${String(reference.chapter).padStart(3, "0")}${String(reference.verse).padStart(3, "0")}`;
}

export function bibleAppUrl(reference: ParsedReference): string {
  return `jwlibrary:///finder?wtlocale=T&bible=${bcv(reference)}`;
}

async function fetchVerse(reference: ParsedReference): Promise<CachedVerse | null> {
  const code = bcv(reference);
  const cached = verseCache.get(code);
  if (cached && cached.expires > Date.now()) return cached;
  try {
    const apiCode = code.replace(/^0+/, "");
    const response = await requestUrl({ url: `https://www.jw.org/pt/json/html/${apiCode}` });
    const data = response.json as { ranges?: Record<string, { html?: string; citation?: string }> };
    const range = data.ranges?.[apiCode] ?? Object.values(data.ranges ?? {})[0];
    if (!range?.html) return null;
    const result = {
      html: range.html.replace(/<a[^>]*>/g, "").replace(/<\/a>/g, ""),
      citation: range.citation?.replace(/&nbsp;/g, " ") || reference.display,
      expires: Date.now() + ONE_HOUR
    };
    verseCache.set(code, result);
    return result;
  } catch {
    return null;
  }
}

class VersePreviewModal extends Modal {
  constructor(app: App, private readonly reference: ParsedReference) {
    super(app);
  }

  onOpen(): void {
    this.titleEl.setText(this.reference.display);
    const body = this.contentEl.createDiv({ cls: "indice-nights-verse-preview" });
    body.createEl("p", { text: "Carregando o texto…", cls: "indice-nights-verse-loading" });
    void fetchVerse(this.reference).then((verse) => {
      body.empty();
      if (verse) {
        const verseEl = body.createDiv({ cls: "indice-nights-verse-text" });
        const parsed = new DOMParser().parseFromString(verse.html, "text/html");
        for (const child of Array.from(parsed.body.childNodes)) {
          verseEl.appendChild(activeDocument.importNode(child, true));
        }
        body.createEl("small", { text: verse.citation, cls: "indice-nights-verse-citation" });
      } else {
        body.createEl("p", { text: "Não foi possível carregar o texto agora." });
      }
      const actions = body.createDiv({ cls: "indice-nights-verse-actions" });
      actions.createEl("button", { text: "Copiar referência" }).addEventListener("click", () => {
        void navigator.clipboard.writeText(this.reference.display);
        new Notice("Referência copiada.");
      });
      actions.createEl("a", {
        text: "Abrir no aplicativo",
        href: bibleAppUrl(this.reference),
        cls: "mod-cta"
      });
    });
  }
}

function shouldSkip(node: Text): boolean {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest(
    "a, code, pre, .frontmatter, .metadata-container, .callout[data-callout='bible-index'], .indice-nights-verse-preview"
  ));
}

export function linkBibleReferences(container: HTMLElement, app: App): void {
  const walker = activeDocument.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  for (const node of nodes) {
    if (shouldSkip(node)) continue;
    const text = node.nodeValue ?? "";
    const locations = findReferencesInText(text);
    if (locations.length === 0) continue;
    const fragment = activeDocument.createDocumentFragment();
    let cursor = 0;
    for (const location of locations) {
      fragment.append(text.slice(cursor, location.start));
      const link = activeDocument.createElement("a");
      link.className = "indice-nights-scripture-link";
      link.textContent = text.slice(location.start, location.end);
      link.dataset.tooltipPosition = "top";
      link.setAttribute("aria-label", "Ver texto bíblico");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        new VersePreviewModal(app, location.reference).open();
      });
      fragment.append(link);
      cursor = location.end;
    }
    fragment.append(text.slice(cursor));
    node.replaceWith(fragment);
  }
}
