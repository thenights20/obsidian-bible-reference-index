import { normalizePath, Notice, requestUrl, type App, TFile } from "obsidian";
import type { PluginSettings } from "./types";
import {
  createRemoteTranscriptNote,
  isSupportedRemoteTranscript,
  parsePublicDriveFolderHtml,
  parsePublicDriveFolderLink,
  type PublicDriveEntry,
  type RemoteDriveTranscript
} from "./remote-drive-content";
import { nomeArquivoSeguro } from "./transcript";

const DEFAULT_FOLDER = "Discursos/Importados";
const MAX_FOLDERS = 100;
const MAX_FILES = 1000;
const MAX_DEPTH = 12;

function cleanFolder(value: string): string {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");
  return trimmed ? normalizePath(trimmed) : "";
}

function safeFolderName(value: string): string {
  return nomeArquivoSeguro(value).replace(/\.+$/g, "").trim() || "Pasta sem nome";
}

async function ensureFolder(app: App, folder: string): Promise<void> {
  const parts = cleanFolder(folder).split("/").filter(Boolean);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current)) await app.vault.createFolder(current);
  }
}

function embeddedFolderUrl(folderId: string, resourceKey: string | null): string {
  const params = new URLSearchParams({ id: folderId });
  if (resourceKey) params.set("resourcekey", resourceKey);
  return `https://drive.google.com/embeddedfolderview?${params.toString()}#list`;
}

function downloadUrl(file: RemoteDriveTranscript): string {
  const params = new URLSearchParams();
  if (file.resourceKey) params.set("resourcekey", file.resourceKey);
  if (file.type === "google-doc") {
    const query = params.toString();
    return `https://docs.google.com/document/d/${file.id}/export?format=txt${query ? `&${query}` : ""}`;
  }
  params.set("export", "download");
  params.set("id", file.id);
  return `https://drive.google.com/uc?${params.toString()}`;
}

function looksLikeGooglePage(contentType: string, text: string): boolean {
  const beginning = text.slice(0, 800).toLocaleLowerCase("pt-BR");
  return contentType.toLocaleLowerCase("pt-BR").includes("text/html") ||
    /<!doctype html|<html\b/.test(beginning);
}

export class RemoteDriveTranscriptService {
  private downloading = false;

  constructor(
    private readonly app: App,
    private readonly settings: PluginSettings,
    private readonly syncNote: (file: TFile) => Promise<boolean>
  ) {}

  async downloadNew(): Promise<void> {
    if (this.downloading) {
      new Notice("Já existe uma importação da pasta pública em andamento.");
      return;
    }

    let root: ReturnType<typeof parsePublicDriveFolderLink>;
    try {
      root = parsePublicDriveFolderLink(this.settings.remoteDriveUrl);
    } catch (error) {
      new Notice(error instanceof Error ? error.message : "O link da pasta pública é inválido.", 9000);
      return;
    }

    this.downloading = true;
    const progress = new Notice("Lendo a pasta pública do Google Drive…", 0);
    let created = 0;
    let skipped = 0;
    let synchronized = 0;
    let errors = 0;
    try {
      const files = await this.collectFiles(root.folderId, root.resourceKey, progress);
      const existing = this.existingNotes();
      const destination = cleanFolder(this.settings.remoteDriveFolder) || DEFAULT_FOLDER;
      for (const [index, file] of files.entries()) {
        progress.setMessage(`Importando ${index + 1}/${files.length}: ${file.name}`);
        const remoteId = `google-drive:${file.id}`;
        const existingFile = existing.get(remoteId);
        if (existingFile) {
          if (await this.syncNote(existingFile)) synchronized += 1;
          skipped += 1;
          continue;
        }
        try {
          const response = await requestUrl({ url: downloadUrl(file), method: "GET" });
          const contentType = response.headers["content-type"] ?? "";
          if (looksLikeGooglePage(contentType, response.text)) {
            throw new Error("O Google Drive não entregou o arquivo como texto.");
          }
          const folder = cleanFolder([destination, file.relativeFolder].filter(Boolean).join("/"));
          await ensureFolder(this.app, folder);
          const basename = nomeArquivoSeguro(file.name.replace(/\.(?:txt|md|markdown)$/i, ""));
          const path = await this.availablePath(folder, basename);
          const note = createRemoteTranscriptNote(file, response.text);
          const createdFile = await this.app.vault.create(path, note);
          existing.set(remoteId, createdFile);
          created += 1;
        } catch {
          errors += 1;
        }
      }
      new Notice(
        `Importação concluída: ${created} nova(s), ${skipped} já existente(s), ` +
        `${synchronized} mini-índice(s) atualizado(s), ${errors} erro(s).`,
        12000
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não foi possível ler a pasta pública.";
      new Notice(`Importação interrompida: ${message}`, 12000);
    } finally {
      progress.hide();
      this.downloading = false;
    }
  }

  private async collectFiles(
    rootId: string,
    resourceKey: string | null,
    progress: Notice
  ): Promise<RemoteDriveTranscript[]> {
    const files: RemoteDriveTranscript[] = [];
    const visited = new Set<string>();
    const pending: Array<{ id: string; resourceKey: string | null; path: string; depth: number }> = [
      { id: rootId, resourceKey, path: "", depth: 0 }
    ];

    while (pending.length > 0) {
      const folder = pending.shift();
      if (!folder || visited.has(folder.id)) continue;
      if (folder.depth > MAX_DEPTH) throw new Error(`A pasta excedeu o limite de ${MAX_DEPTH} níveis.`);
      visited.add(folder.id);
      if (visited.size > MAX_FOLDERS) throw new Error(`A pasta excedeu o limite de ${MAX_FOLDERS} subpastas.`);
      progress.setMessage(`Lendo pasta pública ${visited.size}…`);
      const response = await requestUrl({
        url: embeddedFolderUrl(folder.id, folder.resourceKey),
        method: "GET"
      });
      const entries = parsePublicDriveFolderHtml(response.text);
      if (entries.length === 0 && visited.size === 1) {
        throw new Error("A pasta está vazia, não é pública ou o Google alterou a página de compartilhamento.");
      }

      for (const entry of entries) {
        if (entry.type === "folder") {
          pending.push({
            id: entry.id,
            resourceKey: entry.resourceKey,
            path: [folder.path, safeFolderName(entry.name)].filter(Boolean).join("/"),
            depth: folder.depth + 1
          });
          continue;
        }
        if (!isSupportedRemoteTranscript(entry)) continue;
        files.push(this.toTranscript(entry, folder.path));
        if (files.length > MAX_FILES) throw new Error(`A pasta excedeu o limite de ${MAX_FILES} arquivos.`);
      }
    }
    return files;
  }

  private toTranscript(entry: PublicDriveEntry, relativeFolder: string): RemoteDriveTranscript {
    if (entry.type === "folder") throw new Error("Uma pasta não pode ser importada como transcrição.");
    return { ...entry, type: entry.type, relativeFolder };
  }

  private existingNotes(): Map<string, TFile> {
    const notes = new Map<string, TFile>();
    for (const file of this.app.vault.getMarkdownFiles()) {
      const value = this.app.metadataCache.getFileCache(file)?.frontmatter?.id_remoto as unknown;
      if (typeof value === "string" && value.trim()) notes.set(value.trim(), file);
    }
    return notes;
  }

  private async availablePath(folder: string, basename: string): Promise<string> {
    let counter = 1;
    let path = `${folder}/${basename}.md`;
    while (this.app.vault.getAbstractFileByPath(path)) {
      counter += 1;
      path = `${folder}/${basename} (${counter}).md`;
    }
    return path;
  }
}
