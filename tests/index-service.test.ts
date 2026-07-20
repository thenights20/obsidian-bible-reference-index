import { beforeAll, describe, expect, it, vi } from "vitest";
import type { App, TFile } from "obsidian";
import { BibleIndexManager } from "../src/index-service";

beforeAll(() => {
  vi.stubGlobal("window", { setTimeout, clearTimeout });
});

interface FakeNote {
  file: TFile;
  frontmatter: Record<string, unknown>;
  content: string;
}

function fakeNote(path: string, textos?: unknown, content = ""): FakeNote {
  const basename = path.split("/").at(-1)?.replace(/\.md$/i, "") ?? path;
  return {
    file: { path, basename } as TFile,
    frontmatter: textos === undefined ? {} : { textos },
    content
  };
}

function fakeApp(notes: FakeNote[]): App {
  return {
    vault: {
      getMarkdownFiles: () => notes.map((note) => note.file),
      cachedRead: (file: TFile) => Promise.resolve(notes.find((note) => note.file.path === file.path)?.content ?? "")
    },
    metadataCache: {
      getFileCache: (file: TFile) => {
        const note = notes.find((item) => item.file.path === file.path);
        return note ? { frontmatter: note.frontmatter } : null;
      }
    }
  } as unknown as App;
}

describe("BibleIndexManager", () => {
  it("indexes only the configured folder and keeps note links grouped", () => {
    const notes = [
      fakeNote("Discursos/Adoração/A.md", ["Sal. 119:160", "João 3:16"]),
      fakeNote("Discursos/Congressos/B.md", ["João 3:16", "João 10:16"]),
      fakeNote("Discursos/Sem referências.md"),
      fakeNote("Outros/Ignorada.md", ["João 1:1"])
    ];
    const manager = new BibleIndexManager(fakeApp(notes));
    const index = manager.get({ folder: "Discursos", property: "textos" });
    const snapshot = index.snapshot("João");

    expect(snapshot.totalNotes).toBe(3);
    expect(snapshot.totalReferences).toBe(3);
    expect(snapshot.references.map((reference) => reference.display)).toEqual(["João 3:16", "João 10:16"]);
    expect([...snapshot.references[0]!.notes.values()].map((note) => note.section)).toEqual(["Adoração", "Congressos"]);
    expect(index.snapshotAll().references.map((reference) => reference.display)).toEqual([
      "Salmos 119:160",
      "João 3:16",
      "João 10:16"
    ]);
  });

  it("updates a changed note without rebuilding unrelated notes", () => {
    const note = fakeNote("Discursos/Programas/A.md", ["Rute 1:1"]);
    const notes = [note];
    const manager = new BibleIndexManager(fakeApp(notes));
    const index = manager.get({ folder: "Discursos", property: "textos" });

    expect(index.snapshot("Rute").references).toHaveLength(1);
    note.frontmatter.textos = ["Rute 2:2"];
    manager.updateFile(note.file);
    expect(index.snapshot("Rute").references.map((reference) => reference.display)).toEqual(["Rute 2:2"]);
  });

  it("pesquisa dentro das notas e retorna somente uma frase de contexto", async () => {
    const notes = [
      fakeNote(
        "Discursos/Adoração/A.md",
        ["João 3:16"],
        "# Discurso\n\nA primeira frase não interessa. Jesus demonstrou profundo amor pelas pessoas. Esta é outra frase."
      )
    ];
    const manager = new BibleIndexManager(fakeApp(notes));
    const index = manager.get({ folder: "Discursos", property: "textos" });
    const matches = await index.searchNoteContents("profundo amor");
    expect(matches).toHaveLength(1);
    expect(matches[0]?.sentence).toBe("Jesus demonstrou profundo amor pelas pessoas.");
  });
});
