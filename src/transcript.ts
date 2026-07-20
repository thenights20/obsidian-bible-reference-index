import { extractReferences, findReferencesInText } from "./references";
import { jwLibraryUrl } from "./scripture-links";
import type { JwMediaItem } from "./types";

const INVALID_FILE_CHARS = /[<>:"/\\|?*]/g;
const RESERVED_NAMES = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i;

function decodeEntities(value: string): string {
  const named: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "\""
  };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return named[code.toLocaleLowerCase("pt-BR")] ?? entity;
  });
}

function cueText(lines: readonly string[]): string {
  return decodeEntities(lines.join(" ")
    .replace(/<\/?(?:c(?:\.[^ >]+)?|i|b|u|ruby|rt|v(?:\s+[^>]*)?|lang(?:\s+[^>]*)?)>/gi, "")
    .replace(/\s+/g, " ")
    .trim());
}

export function vttParaParagrafos(vtt: string): string[] {
  const cues: string[] = [];
  let current: string[] = [];

  const flush = (): void => {
    const text = cueText(current);
    current = [];
    if (text && cues.at(-1) !== text) cues.push(text);
  };

  for (const rawLine of vtt.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      flush();
      continue;
    }
    if (/^(WEBVTT|NOTE|STYLE|REGION)(?:\s|$)/i.test(line)) continue;
    if (/^\d+$/.test(line) && current.length === 0) continue;
    if (/^\d{1,2}:\d{2}(?::\d{2})?[.,]\d{3}\s+-->/.test(line)) continue;
    current.push(line);
  }
  flush();

  const paragraphs: string[] = [];
  let paragraph = "";
  for (const cue of cues) {
    const beginsNewThought = /^(Primeiro|Segundo|Terceiro|Por fim|Agora|Vamos|Então|Mas|Assim|Qual|Como|O que)\b/i.test(cue);
    if (paragraph && ((beginsNewThought && paragraph.length >= 220) || paragraph.length + cue.length >= 620)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
    paragraph += `${paragraph ? " " : ""}${cue}`;
    if (paragraph.length >= 360 && /[.!?…][”'’"]?$/.test(cue)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
  }
  if (paragraph.trim()) paragraphs.push(paragraph.trim());
  return paragraphs;
}

export function nomeArquivoSeguro(title: string): string {
  let safe = title
    .replace(/\p{Cc}/gu, "-")
    .replace(INVALID_FILE_CHARS, "-")
    .replace(/\s+/g, " ")
    .replace(/\.+$/g, "")
    .trim();
  if (!safe) safe = "Transcrição sem título";
  if (RESERVED_NAMES.test(safe)) safe = `Nota - ${safe}`;
  return safe.slice(0, 150).trim();
}

export function idJw(media: JwMediaItem): string {
  return media.naturalKey.replace(/^pub-/, "").replace(/_(?:VIDEO|AUDIO)$/i, "");
}

export function identificarOrador(title: string): string | null {
  const prefix = title.split(":", 1)[0]?.trim() ?? "";
  if (!prefix || prefix === title.trim() || prefix.length > 70) return null;
  if (/^(jw|programa|discurso|notícias|boletim|relatório|congresso|assembleia)\b/i.test(prefix)) return null;
  const words = prefix.split(/\s+/);
  if (words.length < 2 || words.length > 6) return null;
  if (!words.every((word) => /^[A-ZÁÀÂÃÉÊÍÓÔÕÚÜÇ][\p{L}'’.-]*$/u.test(word))) return null;
  return prefix;
}

export interface SyncedMiniIndex {
  readonly content: string;
  readonly references: ReturnType<typeof extractReferences>;
}

function withoutExistingMiniIndex(body: string): string {
  return body
    .replace(/\n?<!-- mini-indice-inicio -->[\s\S]*?<!-- mini-indice-fim -->\n?/g, "\n")
    .replace(/\n?> \[!bible-index\][^\n]*\n>[^\n]*(?:\n|$)/g, "\n")
    .replace(/\n?## 📖 Mini-índice de textos\s*\n+[\s\S]*?(?=\n{2,})\n{2,}/g, "\n\n")
    .replace(/^\^citacao-\d+\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function canContainSpokenReference(block: string): boolean {
  const trimmed = block.trim();
  return Boolean(trimmed) &&
    !/^#{1,6}\s/.test(trimmed) &&
    !/^\[▶ Assistir no JW\.ORG\]/.test(trimmed) &&
    !/^> \[!bible-index\]/.test(trimmed) &&
    !/^```/.test(trimmed) &&
    !/^<!--/.test(trimmed);
}

function protectedMiniIndexLabel(display: string): string {
  return display.replace(/^((?:[123]\s+)?\p{L})/u, "$1\u2060");
}

function linkReferencesInMarkdown(block: string): string {
  const protectedRanges = [...block.matchAll(/\[[^\]]+\]\([^)]+\)|\[\[[^\]]+\]\]|`[^`]*`/g)]
    .filter((match) => match.index != null)
    .map((match) => ({ start: match.index, end: match.index + match[0].length }));
  const locations = findReferencesInText(block);
  if (locations.length === 0) return block;

  let output = "";
  let cursor = 0;
  for (const location of locations) {
    const alreadyLinked = protectedRanges.some((range) => location.start >= range.start && location.end <= range.end);
    if (alreadyLinked || location.start < cursor) continue;
    output += block.slice(cursor, location.start);
    const original = block.slice(location.start, location.end);
    output += `[${original}](${jwLibraryUrl(location.reference)})`;
    cursor = location.end;
  }
  if (cursor === 0) return block;
  return output + block.slice(cursor);
}

export function synchronizeMiniIndex(content: string): SyncedMiniIndex {
  const frontmatterMatch = /^---\s*\n[\s\S]*?\n---\s*\n?/.exec(content);
  const frontmatter = frontmatterMatch?.[0].trimEnd() ?? "";
  const rawBody = content.slice(frontmatterMatch?.[0].length ?? 0);
  const cleanBody = withoutExistingMiniIndex(rawBody);
  const blocks = cleanBody ? cleanBody.split(/\n{2,}/) : [];
  const referenceTargets = new Map<string, string>();
  const allReferenceValues: string[] = [];

  const renderedBlocks = blocks.map((block, index) => {
    if (!canContainSpokenReference(block)) return block.trim();
    const references = extractReferences(block);
    if (references.length === 0) return block.trim();
    allReferenceValues.push(block);
    const blockId = `citacao-${String(index + 1).padStart(3, "0")}`;
    for (const reference of references) {
      if (!referenceTargets.has(reference.key)) referenceTargets.set(reference.key, blockId);
    }
    return `${linkReferencesInMarkdown(block.trim())}\n^${blockId}`;
  });

  const references = extractReferences(allReferenceValues);
  if (references.length > 0) {
    const links = references.map((reference) => {
      const target = referenceTargets.get(reference.key);
      const label = protectedMiniIndexLabel(reference.display);
      return target ? `[[#^${target}|${label}]]` : label;
    }).join("  ·  ");
    const miniIndex = [
      "> [!bible-index] Textos bíblicos citados",
      `> ${links}`
    ].join("\n");
    const sourceIndex = renderedBlocks.findIndex((block) => /^\[▶ Assistir no JW\.ORG\]/.test(block));
    const titleIndex = renderedBlocks.findIndex((block) => /^#\s/.test(block));
    const insertionIndex = sourceIndex >= 0 ? sourceIndex + 1 : titleIndex >= 0 ? titleIndex + 1 : 0;
    renderedBlocks.splice(insertionIndex, 0, miniIndex);
  }

  const output = [frontmatter, renderedBlocks.join("\n\n")].filter(Boolean).join("\n\n").trimEnd() + "\n";
  return { content: output, references };
}

function yamlString(value: string): string {
  return JSON.stringify(value);
}

export function criarNotaTranscricao(
  media: JwMediaItem,
  vtt: string
): string {
  const paragraphs = vttParaParagrafos(vtt);
  const transcript = paragraphs.join("\n\n");
  const references = extractReferences(transcript);
  const speaker = identificarOrador(media.title);
  const date = /^\d{4}-\d{2}-\d{2}/.exec(media.firstPublished ?? "")?.[0] ?? null;
  const source = `https://www.jw.org/finder?srcid=share&wtlocale=T&lank=${encodeURIComponent(media.naturalKey)}`;

  const yaml = [
    "---",
    `id_jw: ${yamlString(idJw(media))}`,
    ...(speaker ? [`orador: ${yamlString(speaker)}`] : []),
    ...(date ? [`data_publicacao: ${date}`] : []),
    ...(references.length
      ? ["textos:", ...references.map((reference) => `  - ${yamlString(reference.display)}`)]
      : ["textos: []"]),
    "---"
  ];

  const base = [
    ...yaml,
    "",
    `# ${media.title}`,
    "",
    `[▶ Assistir no JW.ORG](${source})`,
    "",
    ...paragraphs.flatMap((paragraph) => [paragraph, ""])
  ].join("\n").trimEnd() + "\n";
  return synchronizeMiniIndex(base).content;
}

export function adicionarMiniIndiceEmNota(content: string): string | null {
  const synchronized = synchronizeMiniIndex(content).content;
  return synchronized === content ? null : synchronized;
}
