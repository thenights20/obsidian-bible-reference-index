import { BIBLE_BOOKS, BOOK_BY_NORMALIZED_NAME, normalizeText } from "./books";
import type { ParsedReference } from "./types";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const aliases = BIBLE_BOOKS
  .flatMap((book) => book.aliases)
  .sort((a, b) => b.length - a.length)
  .map(escapeRegExp)
  .join("|");

const REFERENCE_PATTERN = new RegExp(
  `(?:^|[\\s\\[("'“‘|])(${aliases})\\.?\\s+(\\d{1,3})(?:\\s*[:.]\\s*(\\d{1,3}))?` +
  `((?:\\s*(?:[-–—,]\\s*(?:\\d{1,3}\\s*[:.]\\s*)?\\d{1,3}|;\\s*(?:\\d{1,3}\\s*[:.]\\s*)?\\d{1,3}))*)`,
  "giu"
);

const SINGLE_CHAPTER_BOOKS = new Set(["Obadias", "Filêmon", "2 João", "3 João", "Judas"]);

export interface LocatedReference {
  readonly reference: ParsedReference;
  readonly start: number;
  readonly end: number;
}

function flattenValues(value: unknown, output: string[], depth = 0): void {
  if (value == null || depth > 4) return;
  if (typeof value === "string" || typeof value === "number") {
    output.push(String(value));
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) flattenValues(item, output, depth + 1);
  }
}

function normalizeSuffix(value: string): string {
  return value
    .replace(/\s*([:.,;])\s*/g, "$1")
    .replace(/\s*[-–—]\s*/g, "–")
    .replace(/,(?=\d)/g, ", ")
    .replace(/;(?=\d)/g, "; ")
    .trim();
}

function parseMatch(match: RegExpMatchArray): ParsedReference | null {
  const rawBook = match[1];
  const firstNumber = match[2];
  const secondNumber = match[3];
  if (!rawBook || !firstNumber) return null;

  const book = BOOK_BY_NORMALIZED_NAME.get(normalizeText(rawBook));
  if (!book) return null;
  if (!secondNumber && !SINGLE_CHAPTER_BOOKS.has(book.name)) return null;

  const chapter = secondNumber ? Number.parseInt(firstNumber, 10) : 1;
  const verse = Number.parseInt(secondNumber ?? firstNumber, 10);
  if (!Number.isFinite(chapter) || !Number.isFinite(verse) || chapter < 1 || verse < 1) return null;

  const suffix = normalizeSuffix(match[4] ?? "");
  const display = secondNumber
    ? `${book.name} ${chapter}:${verse}${suffix}`
    : `${book.name} ${verse}${suffix}`;
  const key = normalizeText(display).replace(/\s/g, "");
  return { display, key, book: book.name, bookOrder: book.order, chapter, verse };
}

export function findReferencesInText(text: string): LocatedReference[] {
  const locations: LocatedReference[] = [];
  REFERENCE_PATTERN.lastIndex = 0;
  for (const match of text.matchAll(REFERENCE_PATTERN)) {
    const reference = parseMatch(match);
    const rawBook = match[1];
    if (!reference || !rawBook || match.index == null) continue;
    const relativeStart = match[0].indexOf(rawBook);
    if (relativeStart < 0) continue;
    locations.push({
      reference,
      start: match.index + relativeStart,
      end: match.index + match[0].length
    });
  }
  return locations;
}

export function extractReferences(value: unknown): ParsedReference[] {
  const values: string[] = [];
  flattenValues(value, values);
  const found = new Map<string, ParsedReference>();

  for (const rawValue of values) {
    for (const location of findReferencesInText(rawValue)) {
      found.set(location.reference.key, location.reference);
    }
  }

  return [...found.values()].sort(compareReferences);
}

export function compareReferences(a: ParsedReference, b: ParsedReference): number {
  return a.bookOrder - b.bookOrder ||
    a.chapter - b.chapter ||
    a.verse - b.verse ||
    a.display.localeCompare(b.display, "pt-BR");
}
