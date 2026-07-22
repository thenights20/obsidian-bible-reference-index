import type { App, TFile } from "obsidian";
import { normalizeText } from "./books";
import { extractReferences } from "./references";
import type {
  IndexConfig,
  IndexedNote,
  IndexSnapshot,
  NoteContentMatch,
  NoteRecord,
  ParsedReference,
  ReferenceEntry
} from "./types";

interface MutableReference extends ParsedReference {
  notes: Map<string, IndexedNote>;
}

function configKey(config: IndexConfig): string {
  return `${config.folder}\u0000${config.property}`;
}

function isInsideFolder(path: string, folder: string): boolean {
  return path.startsWith(`${folder}/`);
}

function sectionFor(path: string, folder: string): string {
  const relative = path.slice(folder.length + 1);
  const slash = relative.indexOf("/");
  return slash === -1 ? folder : relative.slice(0, slash);
}

class BibleIndex {
  private readonly notes = new Map<string, NoteRecord>();
  private readonly referencesByBook = new Map<string, Map<string, MutableReference>>();
  private readonly listeners = new Set<() => void>();
  private readonly contentCache = new Map<string, readonly string[]>();
  private initialized = false;

  constructor(private readonly app: App, readonly config: IndexConfig) {}

  ensureInitialized(): void {
    if (this.initialized) return;
    this.initialized = true;

    for (const file of this.app.vault.getMarkdownFiles()) {
      if (this.accepts(file.path)) this.indexFile(file);
    }
  }

  accepts(path: string): boolean {
    return isInsideFolder(path, this.config.folder);
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(): void {
    for (const listener of this.listeners) listener();
  }

  updateFile(file: TFile): boolean {
    this.contentCache.delete(file.path);
    const existed = this.notes.has(file.path);
    if (!this.accepts(file.path)) {
      if (existed) this.removePath(file.path);
      return existed;
    }

    this.removePath(file.path);
    this.indexFile(file);
    return true;
  }

  removePath(path: string): boolean {
    this.contentCache.delete(path);
    const record = this.notes.get(path);
    if (!record) return false;

    for (const reference of record.references) {
      const bookMap = this.referencesByBook.get(reference.book);
      const entry = bookMap?.get(reference.key);
      if (!bookMap || !entry) continue;

      entry.notes.delete(path);
      if (entry.notes.size === 0) bookMap.delete(reference.key);
      if (bookMap.size === 0) this.referencesByBook.delete(reference.book);
    }

    this.notes.delete(path);
    return true;
  }

  renameFile(file: TFile, oldPath: string): boolean {
    const removed = this.removePath(oldPath);
    const added = this.accepts(file.path);
    if (added) this.indexFile(file);
    return removed || added;
  }

  getBookCount(book: string): number {
    return this.referencesByBook.get(book)?.size ?? 0;
  }

  snapshot(book: string): IndexSnapshot {
    this.ensureInitialized();
    const references = this.sortedReferences(this.referencesByBook.get(book)?.values() ?? []);

    return this.createSnapshot(references);
  }

  snapshotAll(): IndexSnapshot {
    this.ensureInitialized();
    const references = this.sortedReferences(
      [...this.referencesByBook.values()].flatMap((entries) => [...entries.values()])
    );

    return this.createSnapshot(references);
  }

  async searchNoteContents(search: string, limit = 100): Promise<NoteContentMatch[]> {
    this.ensureInitialized();
    const query = normalizeText(search);
    if (!query) return [];

    const records = [...this.notes.values()];
    const matches: NoteContentMatch[] = [];
    const batchSize = 24;
    for (let start = 0; start < records.length && matches.length < limit; start += batchSize) {
      const batch = records.slice(start, start + batchSize);
      const contents = await Promise.all(batch.map((record) => this.sentencesFor(record.file)));
      for (let index = 0; index < batch.length && matches.length < limit; index += 1) {
        const record = batch[index];
        const sentences = contents[index];
        if (!record || !sentences) continue;
        const sentence = sentences.find((item) => normalizeText(item).includes(query));
        if (sentence) matches.push({ ...record.note, sentence });
      }
    }
    return matches.sort((a, b) =>
      a.section.localeCompare(b.section, "pt-BR") || a.title.localeCompare(b.title, "pt-BR")
    );
  }

  private sortedReferences(references: Iterable<MutableReference>): ReferenceEntry[] {
    return [...references]
      .sort((a, b) =>
        a.bookOrder - b.bookOrder ||
        a.chapter - b.chapter ||
        a.verse - b.verse ||
        a.display.localeCompare(b.display, "pt-BR")
      )
      .map<ReferenceEntry>((reference) => ({
        ...reference,
        notes: new Map(
          [...reference.notes.entries()].sort(([, a], [, b]) =>
            a.section.localeCompare(b.section, "pt-BR") || a.title.localeCompare(b.title, "pt-BR")
          )
        )
      }));
  }

  private createSnapshot(references: readonly ReferenceEntry[]): IndexSnapshot {
    let totalReferences = 0;
    for (const entries of this.referencesByBook.values()) totalReferences += entries.size;

    return {
      totalNotes: this.notes.size,
      totalReferences,
      references
    };
  }

  private indexFile(file: TFile): void {
    const cache = this.app.metadataCache.getFileCache(file);
    const rawReferences = cache?.frontmatter?.[this.config.property] as unknown;
    const references = extractReferences(rawReferences);
    const note: IndexedNote = {
      path: file.path,
      title: file.basename,
      section: sectionFor(file.path, this.config.folder)
    };

    const record: NoteRecord = { file, note, references };
    this.notes.set(file.path, record);

    for (const reference of references) {
      let bookMap = this.referencesByBook.get(reference.book);
      if (!bookMap) {
        bookMap = new Map();
        this.referencesByBook.set(reference.book, bookMap);
      }

      let entry = bookMap.get(reference.key);
      if (!entry) {
        entry = { ...reference, notes: new Map() };
        bookMap.set(reference.key, entry);
      }
      entry.notes.set(file.path, note);
    }
  }

  private async sentencesFor(file: TFile): Promise<readonly string[]> {
    const cached = this.contentCache.get(file.path);
    if (cached) return cached;
    const markdown = await this.app.vault.cachedRead(file);
    const plainText = markdown
      .replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, "")
      .replace(/<!-- mini-indice-inicio -->[\s\S]*?<!-- mini-indice-fim -->/g, "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/^\^[-\w]+\s*$/gm, "")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/^>\s?/gm, "")
      .replace(/[*_~`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    const sentences = (plainText.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) ?? [])
      .map((sentence) => sentence.trim())
      .filter(Boolean)
      .map((sentence) => sentence.length > 320 ? `${sentence.slice(0, 317).trimEnd()}…` : sentence);
    this.contentCache.set(file.path, sentences);
    return sentences;
  }
}

export class BibleIndexManager {
  private readonly indexes = new Map<string, BibleIndex>();
  private notifyTimer: number | null = null;
  private readonly changedIndexes = new Set<BibleIndex>();

  constructor(private readonly app: App) {}

  get(config: IndexConfig): BibleIndex {
    const key = configKey(config);
    let index = this.indexes.get(key);
    if (!index) {
      index = new BibleIndex(this.app, config);
      this.indexes.set(key, index);
    }
    index.ensureInitialized();
    return index;
  }

  updateFile(file: TFile): void {
    for (const index of this.indexes.values()) {
      if (index.updateFile(file)) this.queueNotification(index);
    }
  }

  removePath(path: string): void {
    for (const index of this.indexes.values()) {
      if (index.removePath(path)) this.queueNotification(index);
    }
  }

  renameFile(file: TFile, oldPath: string): void {
    for (const index of this.indexes.values()) {
      if (index.renameFile(file, oldPath)) this.queueNotification(index);
    }
  }

  private queueNotification(index: BibleIndex): void {
    this.changedIndexes.add(index);
    if (this.notifyTimer != null) window.clearTimeout(this.notifyTimer);
    this.notifyTimer = window.setTimeout(() => {
      this.notifyTimer = null;
      const changed = [...this.changedIndexes];
      this.changedIndexes.clear();
      for (const item of changed) item.notify();
    }, 300);
  }
}

export type { BibleIndex };
