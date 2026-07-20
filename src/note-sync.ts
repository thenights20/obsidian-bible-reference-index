import type { App, TFile } from "obsidian";
import { synchronizeMiniIndex } from "./transcript";

function sameValues(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function propertyValues(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export class NoteSyncService {
  private readonly timers = new Map<string, number>();
  private readonly busy = new Set<string>();

  constructor(private readonly app: App) {}

  schedule(file: TFile): void {
    if (!this.isManagedFile(file)) return;
    const previous = this.timers.get(file.path);
    if (previous != null) window.clearTimeout(previous);
    const timer = window.setTimeout(() => {
      this.timers.delete(file.path);
      void this.syncFile(file);
    }, 900);
    this.timers.set(file.path, timer);
  }

  async syncFile(file: TFile): Promise<boolean> {
    if (this.busy.has(file.path)) return false;
    this.busy.add(file.path);
    let changed = false;
    try {
      const original = await this.app.vault.read(file);
      const synchronized = synchronizeMiniIndex(original);
      if (synchronized.content !== original) {
        await this.app.vault.modify(file, synchronized.content);
        changed = true;
      }

      const rawFrontmatter: unknown = this.app.metadataCache.getFileCache(file)?.frontmatter;
      const frontmatter = isRecord(rawFrontmatter) ? rawFrontmatter : {};
      const expectedTexts = synchronized.references.map((reference) => reference.display);
      const currentTexts = propertyValues(frontmatter.textos);
      const hasTexts = Object.hasOwn(frontmatter, "textos");
      const hasRemovedProperties = Object.hasOwn(frontmatter, "categoria") ||
        Object.hasOwn(frontmatter, "subcategoria") ||
        Object.hasOwn(frontmatter, "id_jw");
      const needsTexts = expectedTexts.length > 0 || hasTexts;
      if (hasRemovedProperties || (needsTexts && !sameValues(currentTexts, expectedTexts))) {
        await this.app.fileManager.processFrontMatter(file, (properties: Record<string, unknown>) => {
          delete properties.categoria;
          delete properties.subcategoria;
          if (typeof properties.id_jw === "string" && !properties.id_origem) {
            properties.id_origem = properties.id_jw;
          }
          delete properties.id_jw;
          if (needsTexts) properties.textos = expectedTexts;
        });
        changed = true;
      }
      return changed;
    } finally {
      this.busy.delete(file.path);
    }
  }

  unload(): void {
    for (const timer of this.timers.values()) window.clearTimeout(timer);
    this.timers.clear();
  }

  private isManagedFile(file: TFile): boolean {
    if (file.extension !== "md") return false;
    if (file.path.startsWith("Discursos/")) return true;
    const rawFrontmatter: unknown = this.app.metadataCache.getFileCache(file)?.frontmatter;
    if (!isRecord(rawFrontmatter)) return false;
    return typeof rawFrontmatter.id_origem === "string" ||
      typeof rawFrontmatter.id_jw === "string" ||
      typeof rawFrontmatter.id_remoto === "string" ||
      Object.hasOwn(rawFrontmatter, "textos");
  }
}
