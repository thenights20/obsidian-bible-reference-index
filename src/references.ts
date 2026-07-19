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

export function extractReferences(value: unknown): ParsedReference[] {
  const values: string[] = [];
  flattenValues(value, values);
  const found = new Map<string, ParsedReference>();

  for (const rawValue of values) {
    REFERENCE_PATTERN.lastIndex = 0;
    for (const match of rawValue.matchAll(REFERENCE_PATTERN)) {
      const rawBook = match[1];
      const firstNumber = match[2];
      const secondNumber = match[3];
      if (!rawBook || !firstNumber) continue;

      const book = BOOK_BY_NORMALIZED_NAME.get(normalizeText(rawBook));
      if (!book) continue;

      if (!secondNumber && !SINGLE_CHAPTER_BOOKS.has(book.name)) continue;
      const chapter = secondNumber ? Number.parseInt(firstNumber, 10) : 1;
      const verse = Number.parseInt(secondNumber ?? firstNumber, 10);
      if (!Number.isFinite(chapter) || !Number.isFinite(verse) || chapter < 1 || verse < 1) continue;

      const suffix = normalizeSuffix(match[4] ?? "");
      const display = secondNumber
        ? `${book.name} ${chapter}:${verse}${suffix}`
        : `${book.name} ${verse}${suffix}`;
      const key = normalizeText(display).replace(/\s/g, "");

      found.set(key, {
        display,
        key,
        book: book.name,
        bookOrder: book.order,
        chapter,
        verse
      });
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
