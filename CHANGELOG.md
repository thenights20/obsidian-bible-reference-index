import { describe, expect, it } from "vitest";
import { searchReferences } from "../src/search";
import type { ReferenceEntry } from "../src/types";

function reference(display: string, book: string, section: string, title: string): ReferenceEntry {
  return {
    display,
    key: display,
    book,
    bookOrder: 0,
    chapter: 1,
    verse: 1,
    notes: new Map([[title, { path: `Discursos/${section}/${title}.md`, section, title }]])
  };
}

describe("searchReferences", () => {
  const references = [
    reference("Rute 1:16", "Rute", "Congressos", "Demonstre amor leal"),
    reference("João 3:16", "João", "Estudo matinal", "A Bíblia é útil")
  ];

  it("searches references across different books", () => {
    expect(searchReferences(references, "Rute").map((item) => item.reference.display)).toEqual(["Rute 1:16"]);
  });

  it("searches note titles and folders without requiring accents", () => {
    expect(searchReferences(references, "estudo").map((item) => item.reference.display)).toEqual(["João 3:16"]);
    expect(searchReferences(references, "amor leal").map((item) => item.reference.display)).toEqual(["Rute 1:16"]);
  });
});
