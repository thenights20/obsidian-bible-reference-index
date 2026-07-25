import { describe, expect, it } from "vitest";
import { BIBLE_BOOKS } from "../src/books";
import { extractReferences, findReferencesInText } from "../src/references";

describe("extractReferences", () => {
  it("recognizes full Portuguese book names", () => {
    const refs = extractReferences(["Êxodo 23:1", "Provérbios 28:26", "1 Tessalonicenses 5:21"]);
    expect(refs.map((ref) => ref.display)).toEqual([
      "Êxodo 23:1",
      "Provérbios 28:26",
      "1 Tessalonicenses 5:21"
    ]);
  });

  it("normalizes common aliases", () => {
    const refs = extractReferences(["Sal. 119:160", "Atos 2:42", "Revelação 21:4"]);
    expect(refs.map((ref) => ref.display)).toEqual([
      "Salmos 119:160",
      "Atos dos Apóstolos 2:42",
      "Apocalipse 21:4"
    ]);
  });

  it("preserves ranges and removes duplicates", () => {
    const refs = extractReferences(["João 3:16-18", "João 3:16–18", "Tiago 2:8, 9"]);
    expect(refs.map((ref) => ref.display)).toEqual(["João 3:16–18", "Tiago 2:8, 9"]);
  });

  it("extracts multiple references from one string", () => {
    const refs = extractReferences("Miqueias 2:12 | João 10:16 | Efésios 4:1-3");
    expect(refs.map((ref) => ref.display)).toEqual([
      "Miqueias 2:12",
      "João 10:16",
      "Efésios 4:1–3"
    ]);
  });

  it("recognizes every canonical book name", () => {
    for (const book of BIBLE_BOOKS) {
      const refs = extractReferences(`${book.name} 1:1`);
      expect(refs[0]?.book, book.name).toBe(book.name);
    }
  });

  it("recognizes common publication abbreviations", () => {
    const refs = extractReferences(["Gên. 1:1", "Êxo. 2:2", "Leví. 3:3", "Filêm. 4"]);
    expect(refs.map((ref) => ref.display)).toEqual([
      "Gênesis 1:1",
      "Êxodo 2:2",
      "Levítico 3:3",
      "Filêmon 4"
    ]);
  });

  it("recognizes verse-only references in single-chapter books", () => {
    const refs = extractReferences(["Obadias 3", "2 João 5", "Judas 3-5"]);
    expect(refs.map((ref) => ref.display)).toEqual(["Obadias 3", "2 João 5", "Judas 3–5"]);
  });

  it("localiza exatamente o trecho que deve se tornar link", () => {
    const text = "Leia João 3:16 e depois continue.";
    const location = findReferencesInText(text)[0];
    expect(text.slice(location?.start, location?.end)).toBe("João 3:16");
    expect(location?.reference.bookOrder).toBe(42);
  });
});
