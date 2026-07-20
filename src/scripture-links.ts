import { findReferencesInText } from "./references";
import type { ParsedReference } from "./types";

export function jwLibraryUrl(reference: ParsedReference): string {
  const book = String(reference.bookOrder + 1).padStart(2, "0");
  const chapter = String(reference.chapter).padStart(3, "0");
  const verse = String(reference.verse).padStart(3, "0");
  return `jwlibrary:///finder?wtlocale=T&bible=${book}${chapter}${verse}`;
}

function shouldIgnore(node: Text): boolean {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest(
    "a, code, pre, script, style, textarea, .bri-root, .metadata-container, .frontmatter"
  ));
}

export function linkBibleReferences(container: HTMLElement): void {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    if (current.instanceOf(Text) && !shouldIgnore(current)) nodes.push(current);
    current = walker.nextNode();
  }

  for (const node of nodes) {
    const text = node.data;
    const locations = findReferencesInText(text);
    if (locations.length === 0) continue;
    const fragment = createFragment();
    let cursor = 0;
    for (const location of locations) {
      if (location.start < cursor) continue;
      fragment.append(text.slice(cursor, location.start));
      const link = createEl("a");
      link.className = "bri-scripture-link";
      link.href = jwLibraryUrl(location.reference);
      link.textContent = text.slice(location.start, location.end);
      link.title = `Abrir ${location.reference.display} no JW Library`;
      fragment.append(link);
      cursor = location.end;
    }
    fragment.append(text.slice(cursor));
    node.replaceWith(fragment);
  }
}
