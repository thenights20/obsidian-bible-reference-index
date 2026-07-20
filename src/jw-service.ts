import { normalizePath, Notice, requestUrl, type App, TFile, TFolder } from "obsidian";
import type { JwMediaItem, PluginSettings } from "./types";
import { criarNotaTranscricao, idJw, nomeArquivoSeguro } from "./transcript";
import { JW_SUPPORTED_CATEGORIES } from "./jw-categories";

const API_BASE = "https://b.jw-cdn.org/apis/mediator/v1";
const LOCALE_PT_BR = "T";
const GENERAL_INDEX_FOLDER = "00 - Índice Geral";
const LEGACY_GENERAL_INDEX_FOLDER = "Índice Geral";
const GENERAL_INDEX_FILENAME = "Índice Geral de Textos Bíblicos.md";
interface ApiCategory {
  key: string;
  name: string;
  type: "container" | "ondemand";
  media?: JwMediaItem[];
}

interface ApiCategoryResponse {
  category: ApiCategory;
  pagination?: {
    limit: number;
    offset: number;
    totalCount: number;
  };
}

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

async function getCategory(key: string, limit = 50, offset = 0): Promise<ApiCategoryResponse> {
  const params = new URLSearchParams({ clientType: "www", limit: String(limit), offset: String(offset) });
  const response = await requestUrl({
    url: `${API_BASE}/categories/${LOCALE_PT_BR}/${encodeURIComponent(key)}?${params.toString()}`,
    method: "GET"
  });
  return response.json as ApiCategoryResponse;
}

function cleanFolder(value: string): string {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? normalizePath(trimmed) : "";
}

async function ensureFolder(app: App, folder: string): Promise<void> {
  const parts = cleanFolder(folder).split("/").filter(Boolean);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current)) await app.vault.createFolder(current);
  }
}

function subtitleUrl(media: JwMediaItem): string | null {
  return media.files.find((file) => file.subtitles?.url)?.subtitles?.url ?? null;
}

export class JwTranscriptService {
  private downloading = false;

  constructor(
    private readonly app: App,
    private readonly settings: PluginSettings,
    private readonly syncNote: (file: TFile) => Promise<boolean>
  ) {}

  async downloadEnabled(): Promise<void> {
    if (this.downloading) {
      new Notice("Já existe uma atualização de transcrições em andamento.");
      return;
    }
    const selected = JW_SUPPORTED_CATEGORIES.filter((item) => {
      const config = this.settings.jwCategorySettings[item.key];
      return config?.enabled;
    });
    if (selected.length === 0) {
      new Notice("Ative pelo menos uma coleção de transcrições.");
      return;
    }

    this.downloading = true;
    const progress = new Notice("Verificando novas transcrições…", 0);
    let created = 0;
    let skipped = 0;
    let withoutSubtitle = 0;
    let errors = 0;
    let updatedMiniIndexes = 0;
    try {
      const existing = this.existingNotes();
      for (const [categoryIndex, category] of selected.entries()) {
        progress.setMessage(`Verificando ${category.name} (${categoryIndex + 1}/${selected.length})…`);
        const chosenFolder = cleanFolder(this.settings.jwCategorySettings[category.key]!.folder);
        const folder = chosenFolder || category.defaultFolder;
        await ensureFolder(this.app, folder);
        const mediaItems = await this.allMedia(category.key);
        for (const [mediaIndex, media] of mediaItems.entries()) {
          const id = idJw(media);
          progress.setMessage(`${category.name}: ${mediaIndex + 1}/${mediaItems.length} — ${media.title}`);
          const existingFile = existing.get(id);
          if (existingFile) {
            if (await this.syncNote(existingFile)) updatedMiniIndexes += 1;
            skipped += 1;
            continue;
          }
          const url = subtitleUrl(media);
          if (!url) {
            withoutSubtitle += 1;
            continue;
          }
          try {
            const vtt = (await requestUrl({ url, method: "GET" })).text;
            const note = criarNotaTranscricao(media, vtt);
            const filePath = await this.availablePath(folder, nomeArquivoSeguro(media.title));
            const file = await this.app.vault.create(filePath, note);
            existing.set(id, file);
            created += 1;
          } catch {
            errors += 1;
          }
          await wait(180);
        }
      }
    } finally {
      progress.hide();
      this.downloading = false;
    }

    const details = [
      `${created} nova(s)`,
      `${skipped} já existente(s)`,
      `${updatedMiniIndexes} mini-índice(s) atualizado(s)`,
      `${withoutSubtitle} sem transcrição`,
      `${errors} erro(s)`
    ].join("; ");
    new Notice(`Atualização concluída: ${details}.`, 12000);
  }

  async ensureGeneralIndex(showNotice = false, openAfter = false): Promise<void> {
    const folder = GENERAL_INDEX_FOLDER;
    const path = `${folder}/${GENERAL_INDEX_FILENAME}`;
    await this.migrateGeneralIndex();
    await ensureFolder(this.app, folder);
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (!existing) {
      const content = [
        "# 📚 Índice Geral de Textos Bíblicos",
        "",
        "> Este índice reúne automaticamente as referências das notas armazenadas na pasta Discursos.",
        "",
        "```indice-biblico",
        "pasta: Discursos",
        "propriedade: textos",
        "quantidade: 150",
        "```",
        ""
      ].join("\n");
      await this.app.vault.create(path, content);
      if (showNotice) new Notice("Índice geral criado e pronto para uso.");
    } else if (showNotice) {
      new Notice("O índice geral já existe.");
    }
    if (openAfter) await this.app.workspace.openLinkText(path, "", false);
  }

  private async migrateGeneralIndex(): Promise<void> {
    const oldFolder = this.app.vault.getAbstractFileByPath(LEGACY_GENERAL_INDEX_FOLDER);
    const newFolder = this.app.vault.getAbstractFileByPath(GENERAL_INDEX_FOLDER);
    if (oldFolder instanceof TFolder && !newFolder) {
      await this.app.vault.rename(oldFolder, GENERAL_INDEX_FOLDER);
      return;
    }

    const oldPath = `${LEGACY_GENERAL_INDEX_FOLDER}/${GENERAL_INDEX_FILENAME}`;
    const newPath = `${GENERAL_INDEX_FOLDER}/${GENERAL_INDEX_FILENAME}`;
    const oldFile = this.app.vault.getAbstractFileByPath(oldPath);
    const newFile = this.app.vault.getAbstractFileByPath(newPath);
    if (oldFile instanceof TFile && !newFile) {
      await ensureFolder(this.app, GENERAL_INDEX_FOLDER);
      await this.app.vault.rename(oldFile, newPath);
    }
  }

  private async allMedia(categoryKey: string): Promise<JwMediaItem[]> {
    const media: JwMediaItem[] = [];
    const limit = 50;
    let offset = 0;
    let total = 1;
    while (offset < total) {
      const response = await getCategory(categoryKey, limit, offset);
      media.push(...(response.category.media ?? []));
      total = response.pagination?.totalCount ?? media.length;
      offset += limit;
      if (offset < total) await wait(220);
    }
    return media;
  }

  private existingNotes(): Map<string, TFile> {
    const notes = new Map<string, TFile>();
    for (const file of this.app.vault.getMarkdownFiles()) {
      const value = this.app.metadataCache.getFileCache(file)?.frontmatter?.id_jw as unknown;
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
