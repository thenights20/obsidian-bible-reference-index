import { describe, expect, it } from "vitest";
import {
  createRemoteTranscriptNote,
  isSupportedRemoteTranscript,
  parsePublicDriveFolderHtml,
  parsePublicDriveFolderLink,
  remoteDriveOriginalUrl,
  type RemoteDriveTranscript
} from "../src/remote-drive-content";

const remoteFile: RemoteDriveTranscript = {
  id: "1AbCdEfGhIjKlMnOp",
  name: "Alex Reinmueller: Fortaleça sua fé.txt",
  type: "file",
  resourceKey: "0-exemplo",
  relativeFolder: "Congressos/2022"
};

describe("importação de pasta pública do Google Drive", () => {
  it("extrai o identificador e a chave de um link público de pasta", () => {
    expect(parsePublicDriveFolderLink(
      "https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOp?usp=sharing&resourcekey=0-chave"
    )).toEqual({ folderId: "1AbCdEfGhIjKlMnOp", resourceKey: "0-chave" });
  });

  it("recusa endereços que não sejam uma pasta do Google Drive", () => {
    expect(() => parsePublicDriveFolderLink("https://example.com/pasta")).toThrow("drive.google.com");
    expect(() => parsePublicDriveFolderLink("https://drive.google.com/file/d/1AbCdEfGhIjKlMnOp/view"))
      .toThrow("link de pasta");
  });

  it("lê arquivos, subpastas e Documentos Google da página pública", () => {
    const html = `
      <a href="https://drive.google.com/file/d/1TxtFileAbCdEfGh/view?resourcekey=0-txt">Discurso.txt</a>
      <a href="https://drive.google.com/drive/folders/1FolderAbCdEfGhIj?resourcekey=0-folder"><b>Congresso 2022</b></a>
      <a href="https://docs.google.com/document/d/1GoogleDocAbCdEf/edit">Transcrição no Docs</a>
      <a href="https://drive.google.com/file/d/1PdfFileAbCdEfGh/view">Material.pdf</a>`;
    const entries = parsePublicDriveFolderHtml(html);
    expect(entries.map((entry) => [entry.name, entry.type])).toEqual([
      ["Discurso.txt", "file"],
      ["Congresso 2022", "folder"],
      ["Transcrição no Docs", "google-doc"],
      ["Material.pdf", "file"]
    ]);
    expect(entries.filter(isSupportedRemoteTranscript).map((entry) => entry.name)).toEqual([
      "Discurso.txt",
      "Transcrição no Docs"
    ]);
  });

  it("cria uma nota identificável sem alterar as palavras da transcrição", () => {
    const original = "Leia João 3:16. Estas palavras permanecem exatamente iguais.";
    const note = createRemoteTranscriptNote(remoteFile, original);
    expect(note).toContain('id_remoto: "google-drive:1AbCdEfGhIjKlMnOp"');
    expect(note).toContain('orador: "Alex Reinmueller"');
    expect(note).toContain('  - "João 3:16"');
    expect(note).toContain("Estas palavras permanecem exatamente iguais.");
    expect(note).toContain("[↗ Abrir arquivo original no Google Drive]");
    expect(note).toContain("> [!bible-index] Textos bíblicos citados");
  });

  it("inclui a chave pública no endereço do arquivo original", () => {
    expect(remoteDriveOriginalUrl(remoteFile)).toContain("resourcekey=0-exemplo");
  });
});
