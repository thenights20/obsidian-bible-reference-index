import { describe, expect, it } from "vitest";
import {
  adicionarMiniIndiceEmNota,
  criarNotaTranscricao,
  identificarOrador,
  nomeArquivoSeguro,
  synchronizeMiniIndex,
  vttParaParagrafos
} from "../src/transcript";
import type { SourceMediaItem } from "../src/types";

const media: SourceMediaItem = {
  naturalKey: "pub-video-139_T_2_VIDEO",
  languageAgnosticNaturalKey: "pub-video-139_2_VIDEO",
  title: "Robert Luccioni: Você Sabe Que Caminho Seguir?",
  firstPublished: "2026-07-07T14:39:24.349Z",
  files: []
};

describe("formatação de transcrições", () => {
  it("remove elementos técnicos do VTT sem reescrever a fala", () => {
    const vtt = `WEBVTT\n\n00:00:01.000 --> 00:00:03.000\nA Bíblia contém bons conselhos.\n\n00:00:03.000 --> 00:00:05.000\nEles são úteis.`;
    expect(vttParaParagrafos(vtt).join(" ")).toBe("A Bíblia contém bons conselhos. Eles são úteis.");
  });

  it("gera nome de arquivo compatível com Windows e OneDrive", () => {
    expect(nomeArquivoSeguro(media.title)).toBe("Robert Luccioni- Você Sabe Que Caminho Seguir-");
  });

  it("identifica o orador somente quando o título oferece um nome seguro", () => {
    expect(identificarOrador(media.title)).toBe("Robert Luccioni");
    expect(identificarOrador("Programa mensal — julho de 2026")).toBeNull();
  });

  it("cria propriedades e conserva o título original dentro da nota", () => {
    const note = criarNotaTranscricao(
      media,
      "WEBVTT\n\n00:00:01.000 --> 00:00:03.000\nLeia João 3:16."
    );
    expect(note).toContain('id_origem: "video-139_T_2"');
    expect(note).toContain('orador: "Robert Luccioni"');
    expect(note).toContain("data_publicacao: 2026-07-07");
    expect(note).toContain('  - "João 3:16"');
    expect(note).toContain(`# ${media.title}`);
    expect(note).toContain("> [!bible-index] Textos bíblicos citados");
    expect(note).toContain("[[#^citacao-002|J\u2060oão 3:16]]");
    expect(note).toContain("^citacao-002");
    expect(note).not.toContain("categoria:");
    expect(note).not.toContain("subcategoria:");
    expect(note).not.toContain("## Transcrição");
  });

  it("acrescenta mini-índice às notas antigas sem reescrever a transcrição", () => {
    const oldNote = `---\nid_origem: "teste"\ntextos:\n  - "Isaías 33:22"\n---\n\n# Título\n\nLeia Isaías 33:22. Estas palavras continuam iguais.\n`;
    const updated = adicionarMiniIndiceEmNota(oldNote);
    expect(updated).toContain("[[#^citacao-002|I\u2060saías 33:22]]");
    expect(updated).toContain(
      "Leia [Isaías 33:22](jwlibrary:///finder?wtlocale=T&bible=23033022). Estas palavras continuam iguais.\n^citacao-002"
    );
    expect(adicionarMiniIndiceEmNota(updated!)).toBeNull();
  });

  it("recria o mini-índice quando uma nova referência é escrita na nota", () => {
    const initial = "# Nota\n\nUm comentário sobre João 3:16.";
    const first = synchronizeMiniIndex(initial);
    const edited = first.content.replace(
      ".\n^citacao-002",
      " e Mateus 5:3.\n^citacao-002"
    );
    const second = synchronizeMiniIndex(edited);
    expect(second.references.map((reference) => reference.display)).toEqual(["Mateus 5:3", "João 3:16"]);
    expect(second.content).toContain(
      "[[#^citacao-002|M\u2060ateus 5:3]]  ·  [[#^citacao-002|J\u2060oão 3:16]]"
    );
    expect(second.content.match(/\[!bible-index\]/g)).toHaveLength(1);
  });
});
