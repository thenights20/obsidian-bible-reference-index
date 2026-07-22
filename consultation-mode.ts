import { Plugin, TFile } from "obsidian";
import { DEFAULT_SETTINGS, parseBlockConfig } from "./config";
import { BibleIndexManager } from "./index-service";
import { BibleIndexView, type SelectionStore } from "./index-view";
import { IndiceNightsSettingTab } from "./settings";
import { SourceTranscriptService } from "./transcript-source-service";
import { NoteSyncService } from "./note-sync";
import { RemoteDriveTranscriptService } from "./remote-drive";
import { linkBibleReferences } from "./scripture-links";
import type { PluginSettings } from "./types";
import { ConsultationModeController } from "./consultation-mode";

const STORAGE_PREFIX = "indice-nights:selection:";
const LEGACY_STORAGE_PREFIX = "bible-reference-index:selection:";

class DeviceSelectionStore implements SelectionStore {
  private readonly fallback = new Map<string, string>();

  get(key: string): string | null {
    try {
      return window.localStorage.getItem(`${STORAGE_PREFIX}${key}`) ??
        window.localStorage.getItem(`${LEGACY_STORAGE_PREFIX}${key}`) ??
        this.fallback.get(key) ?? null;
    } catch {
      return this.fallback.get(key) ?? null;
    }
  }

  set(key: string, value: string): void {
    this.fallback.set(key, value);
    try {
      window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
    } catch {
      // The in-memory fallback keeps the menu usable when local storage is unavailable.
    }
  }
}

export default class IndiceNightsPlugin extends Plugin {
  settings: PluginSettings = { ...DEFAULT_SETTINGS };
  private indexManager!: BibleIndexManager;
  transcriptService!: SourceTranscriptService;
  remoteDriveService!: RemoteDriveTranscriptService;
  private noteSyncService!: NoteSyncService;
  private consultationMode!: ConsultationModeController;
  private previousFile: TFile | null = null;
  private readonly selections = new DeviceSelectionStore();

  async onload(): Promise<void> {
    await this.loadSettings();
    this.indexManager = new BibleIndexManager(this.app);
    this.noteSyncService = new NoteSyncService(this.app);
    this.transcriptService = new SourceTranscriptService(
      this.app,
      this.settings,
      (file) => this.noteSyncService.syncFile(file)
    );
    this.remoteDriveService = new RemoteDriveTranscriptService(
      this.app,
      this.settings,
      (file) => this.noteSyncService.syncFile(file)
    );
    this.consultationMode = new ConsultationModeController(
      this.app,
      () => this.settings.consultationMode,
      (file) => this.noteSyncService.syncFile(file)
    );
    this.addSettingTab(new IndiceNightsSettingTab(this.app, this));
    await this.transcriptService.ensureGeneralIndex();

    this.addCommand({
      id: "baixar-novas-transcricoes",
      name: "Baixar novas transcrições selecionadas",
      callback: () => {
        void this.transcriptService.downloadEnabled();
      }
    });

    this.addCommand({
      id: "baixar-transcricoes-pasta-publica",
      name: "Baixar novas transcrições da pasta pública",
      callback: () => {
        void this.remoteDriveService.downloadNew();
      }
    });

    this.registerMarkdownCodeBlockProcessor("indice-biblico", (source, el, context) => {
      const config = parseBlockConfig(source, this.settings);
      const section = context.getSectionInfo(el);
      const location = section?.lineStart ?? 0;
      const selectionKey = encodeURIComponent(`${this.app.vault.getName()}|${context.sourcePath}|${location}`);
      const index = this.indexManager.get(config);
      context.addChild(new BibleIndexView(
        el,
        this.app,
        context.sourcePath,
        index,
        config,
        this.selections,
        selectionKey
      ));
    });

    this.registerMarkdownPostProcessor((element) => {
      linkBibleReferences(element, this.app);
    });

    this.registerEvent(this.app.metadataCache.on("changed", (file) => {
      this.indexManager.updateFile(file);
    }));

    this.registerEvent(this.app.vault.on("modify", (file) => {
      if (file instanceof TFile) this.noteSyncService.schedule(file);
    }));

    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (file instanceof TFile) this.indexManager.removePath(file.path);
    }));

    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (file instanceof TFile) this.indexManager.renameFile(file, oldPath);
    }));

    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      const previous = this.previousFile;
      this.previousFile = file;
      void this.consultationMode.leaveCurrent(previous).then(() => this.consultationMode.refresh());
      if (file) this.noteSyncService.schedule(file);
    }));

    this.registerEvent(this.app.workspace.on("layout-change", () => {
      this.consultationMode.refresh();
    }));

    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile) this.noteSyncService.schedule(activeFile);
    this.previousFile = activeFile;
    this.consultationMode.refresh();
  }

  onunload(): void {
    this.noteSyncService?.unload();
    this.consultationMode?.unload();
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  refreshConsultationMode(): void {
    this.consultationMode.refresh();
  }

  private async loadSettings(): Promise<void> {
    const saved = await this.loadData() as (Partial<PluginSettings> & Record<string, unknown>) | null;
    const legacyCategories = saved?.jwCategorySettings;
    const categorySettings = saved?.categorySettings ??
      (typeof legacyCategories === "object" && legacyCategories !== null
        ? legacyCategories as PluginSettings["categorySettings"]
        : DEFAULT_SETTINGS.categorySettings);
    this.settings = { ...DEFAULT_SETTINGS, ...(saved ?? {}), categorySettings };
  }
}
