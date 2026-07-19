import type { TFile } from "obsidian";

export interface BibleBook {
  readonly name: string;
  readonly order: number;
  readonly aliases: readonly string[];
}

export interface ParsedReference {
  readonly display: string;
  readonly key: string;
  readonly book: string;
  readonly bookOrder: number;
  readonly chapter: number;
  readonly verse: number;
}

export interface IndexedNote {
  readonly path: string;
  readonly title: string;
  readonly section: string;
}

export interface ReferenceEntry extends ParsedReference {
  readonly notes: ReadonlyMap<string, IndexedNote>;
}

export interface IndexSnapshot {
  readonly totalNotes: number;
  readonly totalReferences: number;
  readonly references: readonly ReferenceEntry[];
}

export interface IndexConfig {
  readonly folder: string;
  readonly property: string;
}

export interface BlockConfig extends IndexConfig {
  readonly pageSize: number;
  readonly title: string;
  readonly showTitle: boolean;
}

export interface NoteRecord {
  readonly file: TFile;
  readonly note: IndexedNote;
  readonly references: readonly ParsedReference[];
}

export interface PluginSettings {
  defaultFolder: string;
  defaultProperty: string;
  pageSize: number;
}
