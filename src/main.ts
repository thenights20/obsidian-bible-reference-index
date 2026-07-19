import { Plugin, TFile } from "obsidian";
import { DEFAULT_SETTINGS, parseBlockConfig } from "./config";
import { BibleIndexManager } from "./index-service";
import { BibleIndexView, type SelectionStore } from "./index-view";
import { BibleIndexSettingTab } from "./settings";
import type { PluginSettings } from "./types";

const STORAGE_PREFIX = "bible-reference-index:selection:";

class DeviceSelectionStore implements SelectionStore {
  private readonly fallback = new Map<string, string>();

  get(key: string): string | null {
    try {
      return window.localStorage.getItem(`${STORAGE_PREFIX}${key}`) ?? this.fallback.get(key) ?? null;
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

export default class BibleReferenceIndexPlugin extends Plugin {
  settings: PluginSettings = { ...DEFAULT_SETTINGS };
  private indexManager!: BibleIndexManager;
  private readonly selections = new DeviceSelectionStore();

  async onload(): Promise<void> {
    await this.loadSettings();
    this.indexManager = new BibleIndexManager(this.app);
    this.addSettingTab(new BibleIndexSettingTab(this.app, this));

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

    this.registerEvent(this.app.metadataCache.on("changed", (file) => {
      this.indexManager.updateFile(file);
    }));

    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (file instanceof TFile) this.indexManager.removePath(file.path);
    }));

    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (file instanceof TFile) this.indexManager.renameFile(file, oldPath);
    }));
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  private async loadSettings(): Promise<void> {
    const saved = await this.loadData() as Partial<PluginSettings> | null;
    this.settings = { ...DEFAULT_SETTINGS, ...(saved ?? {}) };
  }
}
