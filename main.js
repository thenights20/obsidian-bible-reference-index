var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => BibleReferenceIndexPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/config.ts
var DEFAULT_SETTINGS = {
  defaultFolder: "Discursos",
  defaultProperty: "textos",
  pageSize: 75,
  jwCatalog: [],
  jwCatalogUpdatedAt: 0,
  jwCategorySettings: {}
};
function cleanPath(value) {
  return value.trim().replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");
}
function parseBoolean(value, fallback) {
  if (value == null || value.trim() === "") return fallback;
  return ["1", "sim", "true", "yes", "on"].includes(value.trim().toLocaleLowerCase("pt-BR"));
}
function parseBlockConfig(source, settings) {
  var _a, _b, _c;
  const values = /* @__PURE__ */ new Map();
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^\s*([\wÀ-ÿ-]+)\s*:\s*(.*?)\s*$/u);
    if ((match == null ? void 0 : match[1]) && match[2] != null) values.set(match[1].toLocaleLowerCase("pt-BR"), match[2]);
  }
  const requestedPageSize = Number.parseInt((_b = (_a = values.get("quantidade")) != null ? _a : values.get("page-size")) != null ? _b : "", 10);
  const pageSize = Number.isFinite(requestedPageSize) ? Math.min(250, Math.max(20, requestedPageSize)) : settings.pageSize;
  return {
    folder: cleanPath(values.get("pasta") || settings.defaultFolder) || DEFAULT_SETTINGS.defaultFolder,
    property: (values.get("propriedade") || settings.defaultProperty).trim() || DEFAULT_SETTINGS.defaultProperty,
    pageSize,
    title: (values.get("titulo") || "\xCDndice de Textos B\xEDblicos").trim(),
    showTitle: parseBoolean((_c = values.get("exibir-titulo")) != null ? _c : values.get("show-title"), false)
  };
}

// src/books.ts
var names = [
  ["G\xEAnesis", ["Genesis", "G\xEAn"]],
  ["\xCAxodo", ["Exodo", "\xCAxo", "\xCAx"]],
  ["Lev\xEDtico", ["Levitico", "Lev\xED", "Lev"]],
  ["N\xFAmeros", ["Numeros", "N\xFAm"]],
  ["Deuteron\xF4mio", ["Deuteronomio", "Deut"]],
  ["Josu\xE9", ["Josue", "Jos"]],
  ["Ju\xEDzes", ["Juizes", "Ju\xED"]],
  ["Rute", ["Rut"]],
  ["1 Samuel", ["1Samuel", "1 Sam"]],
  ["2 Samuel", ["2Samuel", "2 Sam"]],
  ["1 Reis", ["1Reis"]],
  ["2 Reis", ["2Reis"]],
  ["1 Cr\xF4nicas", ["1 Cronicas", "1Cr\xF4nicas", "1Cronicas", "1 Cr\xF4"]],
  ["2 Cr\xF4nicas", ["2 Cronicas", "2Cr\xF4nicas", "2Cronicas", "2 Cr\xF4"]],
  ["Esdras", ["Esd"]],
  ["Neemias", ["Nee"]],
  ["Ester", ["Est"]],
  ["J\xF3", ["Jo"]],
  ["Salmos", ["Salmo", "Sal"]],
  ["Prov\xE9rbios", ["Proverbios", "Pro"]],
  ["Eclesiastes", ["Ecl"]],
  ["C\xE2ntico dos C\xE2nticos", ["Cantico dos Canticos", "C\xE2ntico de Salom\xE3o", "Cantico de Salomao", "C\xE2ntico", "Cantico", "C\xE2n"]],
  ["Isa\xEDas", ["Isaias", "Isa"]],
  ["Jeremias", ["Jer"]],
  ["Lamenta\xE7\xF5es", ["Lamentacoes", "Lam"]],
  ["Ezequiel", ["Eze"]],
  ["Daniel", ["Dan"]],
  ["Oseias", ["Os\xE9ias", "Ose"]],
  ["Joel", ["Joe"]],
  ["Am\xF3s", ["Amos"]],
  ["Obadias", ["Oba"]],
  ["Jonas", ["Jon"]],
  ["Miqueias", ["Miq"]],
  ["Naum", ["Nau"]],
  ["Habacuque", ["Hab"]],
  ["Sofonias", ["Sof"]],
  ["Ageu", ["Ag"]],
  ["Zacarias", ["Zac"]],
  ["Malaquias", ["Mal"]],
  ["Mateus", ["Mat"]],
  ["Marcos", ["Mar"]],
  ["Lucas", ["Luc"]],
  ["Jo\xE3o", ["Joao"]],
  ["Atos dos Ap\xF3stolos", ["Atos dos Apostolos", "Atos", "At"]],
  ["Romanos", ["Rom"]],
  ["1 Cor\xEDntios", ["1 Corintios", "1Cor\xEDntios", "1Corintios", "1 Cor"]],
  ["2 Cor\xEDntios", ["2 Corintios", "2Cor\xEDntios", "2Corintios", "2 Cor"]],
  ["G\xE1latas", ["Galatas", "G\xE1l"]],
  ["Ef\xE9sios", ["Efesios", "Ef\xE9"]],
  ["Filipenses", ["Fil"]],
  ["Colossenses", ["Col"]],
  ["1 Tessalonicenses", ["1Tessalonicenses", "1 Tes"]],
  ["2 Tessalonicenses", ["2Tessalonicenses", "2 Tes"]],
  ["1 Tim\xF3teo", ["1 Timoteo", "1Tim\xF3teo", "1Timoteo", "1 Tim"]],
  ["2 Tim\xF3teo", ["2 Timoteo", "2Tim\xF3teo", "2Timoteo", "2 Tim"]],
  ["Tito", ["Tit"]],
  ["Fil\xEAmon", ["Filemon", "Fil\xEAm", "Flm"]],
  ["Hebreus", ["Heb"]],
  ["Tiago", ["Tia"]],
  ["1 Pedro", ["1Pedro", "1 Ped"]],
  ["2 Pedro", ["2Pedro", "2 Ped"]],
  ["1 Jo\xE3o", ["1 Joao", "1Jo\xE3o", "1Joao"]],
  ["2 Jo\xE3o", ["2 Joao", "2Jo\xE3o", "2Joao"]],
  ["3 Jo\xE3o", ["3 Joao", "3Jo\xE3o", "3Joao"]],
  ["Judas", ["Jud"]],
  ["Apocalipse", ["Revela\xE7\xE3o", "Revelacao", "Apo"]]
];
var BIBLE_BOOKS = names.map(([name, aliases2], order) => ({
  name,
  order,
  aliases: [name, ...aliases2]
}));
function normalizeText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").replace(/\s+/g, " ").trim();
}
var BOOK_BY_NORMALIZED_NAME = new Map(
  BIBLE_BOOKS.flatMap((book) => book.aliases.map((alias) => [normalizeText(alias), book]))
);

// src/references.ts
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var aliases = BIBLE_BOOKS.flatMap((book) => book.aliases).sort((a, b) => b.length - a.length).map(escapeRegExp).join("|");
var REFERENCE_PATTERN = new RegExp(
  `(?:^|[\\s\\[("'\u201C\u2018|])(${aliases})\\.?\\s+(\\d{1,3})(?:\\s*[:.]\\s*(\\d{1,3}))?((?:\\s*(?:[-\u2013\u2014,]\\s*(?:\\d{1,3}\\s*[:.]\\s*)?\\d{1,3}|;\\s*(?:\\d{1,3}\\s*[:.]\\s*)?\\d{1,3}))*)`,
  "giu"
);
var SINGLE_CHAPTER_BOOKS = /* @__PURE__ */ new Set(["Obadias", "Fil\xEAmon", "2 Jo\xE3o", "3 Jo\xE3o", "Judas"]);
function flattenValues(value, output, depth = 0) {
  if (value == null || depth > 4) return;
  if (typeof value === "string" || typeof value === "number") {
    output.push(String(value));
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) flattenValues(item, output, depth + 1);
  }
}
function normalizeSuffix(value) {
  return value.replace(/\s*([:.,;])\s*/g, "$1").replace(/\s*[-–—]\s*/g, "\u2013").replace(/,(?=\d)/g, ", ").replace(/;(?=\d)/g, "; ").trim();
}
function parseMatch(match) {
  var _a;
  const rawBook = match[1];
  const firstNumber = match[2];
  const secondNumber = match[3];
  if (!rawBook || !firstNumber) return null;
  const book = BOOK_BY_NORMALIZED_NAME.get(normalizeText(rawBook));
  if (!book) return null;
  if (!secondNumber && !SINGLE_CHAPTER_BOOKS.has(book.name)) return null;
  const chapter = secondNumber ? Number.parseInt(firstNumber, 10) : 1;
  const verse = Number.parseInt(secondNumber != null ? secondNumber : firstNumber, 10);
  if (!Number.isFinite(chapter) || !Number.isFinite(verse) || chapter < 1 || verse < 1) return null;
  const suffix = normalizeSuffix((_a = match[4]) != null ? _a : "");
  const display = secondNumber ? `${book.name} ${chapter}:${verse}${suffix}` : `${book.name} ${verse}${suffix}`;
  const key = normalizeText(display).replace(/\s/g, "");
  return { display, key, book: book.name, bookOrder: book.order, chapter, verse };
}
function findReferencesInText(text) {
  const locations = [];
  REFERENCE_PATTERN.lastIndex = 0;
  for (const match of text.matchAll(REFERENCE_PATTERN)) {
    const reference = parseMatch(match);
    const rawBook = match[1];
    if (!reference || !rawBook || match.index == null) continue;
    const relativeStart = match[0].indexOf(rawBook);
    if (relativeStart < 0) continue;
    locations.push({
      reference,
      start: match.index + relativeStart,
      end: match.index + match[0].length
    });
  }
  return locations;
}
function extractReferences(value) {
  const values = [];
  flattenValues(value, values);
  const found = /* @__PURE__ */ new Map();
  for (const rawValue of values) {
    for (const location of findReferencesInText(rawValue)) {
      found.set(location.reference.key, location.reference);
    }
  }
  return [...found.values()].sort(compareReferences);
}
function compareReferences(a, b) {
  return a.bookOrder - b.bookOrder || a.chapter - b.chapter || a.verse - b.verse || a.display.localeCompare(b.display, "pt-BR");
}

// src/index-service.ts
function configKey(config) {
  return `${config.folder}\0${config.property}`;
}
function isInsideFolder(path, folder) {
  return path.startsWith(`${folder}/`);
}
function sectionFor(path, folder) {
  const relative = path.slice(folder.length + 1);
  const slash = relative.indexOf("/");
  return slash === -1 ? folder : relative.slice(0, slash);
}
var BibleIndex = class {
  constructor(app, config) {
    this.app = app;
    this.config = config;
    __publicField(this, "notes", /* @__PURE__ */ new Map());
    __publicField(this, "referencesByBook", /* @__PURE__ */ new Map());
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "contentCache", /* @__PURE__ */ new Map());
    __publicField(this, "initialized", false);
  }
  ensureInitialized() {
    if (this.initialized) return;
    this.initialized = true;
    for (const file of this.app.vault.getMarkdownFiles()) {
      if (this.accepts(file.path)) this.indexFile(file);
    }
  }
  accepts(path) {
    return isInsideFolder(path, this.config.folder);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  notify() {
    for (const listener of this.listeners) listener();
  }
  updateFile(file) {
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
  removePath(path) {
    this.contentCache.delete(path);
    const record = this.notes.get(path);
    if (!record) return false;
    for (const reference of record.references) {
      const bookMap = this.referencesByBook.get(reference.book);
      const entry = bookMap == null ? void 0 : bookMap.get(reference.key);
      if (!bookMap || !entry) continue;
      entry.notes.delete(path);
      if (entry.notes.size === 0) bookMap.delete(reference.key);
      if (bookMap.size === 0) this.referencesByBook.delete(reference.book);
    }
    this.notes.delete(path);
    return true;
  }
  renameFile(file, oldPath) {
    const removed = this.removePath(oldPath);
    const added = this.accepts(file.path);
    if (added) this.indexFile(file);
    return removed || added;
  }
  getBookCount(book) {
    var _a, _b;
    return (_b = (_a = this.referencesByBook.get(book)) == null ? void 0 : _a.size) != null ? _b : 0;
  }
  snapshot(book) {
    var _a, _b;
    this.ensureInitialized();
    const references = this.sortedReferences((_b = (_a = this.referencesByBook.get(book)) == null ? void 0 : _a.values()) != null ? _b : []);
    return this.createSnapshot(references);
  }
  snapshotAll() {
    this.ensureInitialized();
    const references = this.sortedReferences(
      [...this.referencesByBook.values()].flatMap((entries) => [...entries.values()])
    );
    return this.createSnapshot(references);
  }
  async searchNoteContents(search, limit = 100) {
    this.ensureInitialized();
    const query = normalizeText(search);
    if (!query) return [];
    const records = [...this.notes.values()];
    const matches = [];
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
    return matches.sort(
      (a, b) => a.section.localeCompare(b.section, "pt-BR") || a.title.localeCompare(b.title, "pt-BR")
    );
  }
  sortedReferences(references) {
    return [...references].sort(
      (a, b) => a.bookOrder - b.bookOrder || a.chapter - b.chapter || a.verse - b.verse || a.display.localeCompare(b.display, "pt-BR")
    ).map((reference) => ({
      ...reference,
      notes: new Map(
        [...reference.notes.entries()].sort(
          ([, a], [, b]) => a.section.localeCompare(b.section, "pt-BR") || a.title.localeCompare(b.title, "pt-BR")
        )
      )
    }));
  }
  createSnapshot(references) {
    let totalReferences = 0;
    for (const entries of this.referencesByBook.values()) totalReferences += entries.size;
    return {
      totalNotes: this.notes.size,
      totalReferences,
      references
    };
  }
  indexFile(file) {
    var _a;
    const cache = this.app.metadataCache.getFileCache(file);
    const rawReferences = (_a = cache == null ? void 0 : cache.frontmatter) == null ? void 0 : _a[this.config.property];
    const references = extractReferences(rawReferences);
    const note = {
      path: file.path,
      title: file.basename,
      section: sectionFor(file.path, this.config.folder)
    };
    const record = { file, note, references };
    this.notes.set(file.path, record);
    for (const reference of references) {
      let bookMap = this.referencesByBook.get(reference.book);
      if (!bookMap) {
        bookMap = /* @__PURE__ */ new Map();
        this.referencesByBook.set(reference.book, bookMap);
      }
      let entry = bookMap.get(reference.key);
      if (!entry) {
        entry = { ...reference, notes: /* @__PURE__ */ new Map() };
        bookMap.set(reference.key, entry);
      }
      entry.notes.set(file.path, note);
    }
  }
  async sentencesFor(file) {
    var _a;
    const cached = this.contentCache.get(file.path);
    if (cached) return cached;
    const markdown = await this.app.vault.cachedRead(file);
    const plainText = markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, "").replace(/<!-- mini-indice-inicio -->[\s\S]*?<!-- mini-indice-fim -->/g, "").replace(/```[\s\S]*?```/g, " ").replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/^\^[-\w]+\s*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/^>\s?/gm, "").replace(/[*_~`]/g, "").replace(/\s+/g, " ").trim();
    const sentences = ((_a = plainText.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g)) != null ? _a : []).map((sentence) => sentence.trim()).filter(Boolean).map((sentence) => sentence.length > 320 ? `${sentence.slice(0, 317).trimEnd()}\u2026` : sentence);
    this.contentCache.set(file.path, sentences);
    return sentences;
  }
};
var BibleIndexManager = class {
  constructor(app) {
    this.app = app;
    __publicField(this, "indexes", /* @__PURE__ */ new Map());
    __publicField(this, "notifyTimer", null);
    __publicField(this, "changedIndexes", /* @__PURE__ */ new Set());
  }
  get(config) {
    const key = configKey(config);
    let index = this.indexes.get(key);
    if (!index) {
      index = new BibleIndex(this.app, config);
      this.indexes.set(key, index);
    }
    index.ensureInitialized();
    return index;
  }
  updateFile(file) {
    for (const index of this.indexes.values()) {
      if (index.updateFile(file)) this.queueNotification(index);
    }
  }
  removePath(path) {
    for (const index of this.indexes.values()) {
      if (index.removePath(path)) this.queueNotification(index);
    }
  }
  renameFile(file, oldPath) {
    for (const index of this.indexes.values()) {
      if (index.renameFile(file, oldPath)) this.queueNotification(index);
    }
  }
  queueNotification(index) {
    this.changedIndexes.add(index);
    if (this.notifyTimer != null) window.clearTimeout(this.notifyTimer);
    this.notifyTimer = window.setTimeout(() => {
      this.notifyTimer = null;
      const changed = [...this.changedIndexes];
      this.changedIndexes.clear();
      for (const item of changed) item.notify();
    }, 300);
  }
};

// src/index-view.ts
var import_obsidian = require("obsidian");

// src/search.ts
function searchReferences(references, search) {
  const query = normalizeText(search);
  if (!query) {
    return references.map((reference) => ({ reference, notes: [...reference.notes.values()] }));
  }
  const output = [];
  for (const reference of references) {
    const referenceMatches = normalizeText(reference.display).includes(query);
    const notes = [...reference.notes.values()].filter(
      (note) => referenceMatches || normalizeText(`${note.section} ${note.title}`).includes(query)
    );
    if (notes.length > 0) output.push({ reference, notes });
  }
  return output;
}

// src/index-view.ts
var BibleIndexView = class extends import_obsidian.MarkdownRenderChild {
  constructor(containerEl, app, sourcePath, index, config, selectionStore, selectionKey) {
    super(containerEl);
    this.app = app;
    this.sourcePath = sourcePath;
    this.index = index;
    this.config = config;
    this.selectionStore = selectionStore;
    this.selectionKey = selectionKey;
    __publicField(this, "selectedBook");
    __publicField(this, "search", "");
    __publicField(this, "contentSearch", false);
    __publicField(this, "visibleCount");
    __publicField(this, "unsubscribe", null);
    __publicField(this, "searchTimer", null);
    __publicField(this, "summaryEl", null);
    __publicField(this, "resultsEl", null);
    __publicField(this, "contentSearchRequest", 0);
    const stored = selectionStore.get(selectionKey);
    this.selectedBook = BIBLE_BOOKS.some((book) => book.name === stored) ? stored : BIBLE_BOOKS[0].name;
    this.visibleCount = config.pageSize;
  }
  onload() {
    this.buildLayout();
    this.unsubscribe = this.index.subscribe(() => this.refreshData());
  }
  onunload() {
    var _a;
    if (this.searchTimer != null) window.clearTimeout(this.searchTimer);
    (_a = this.unsubscribe) == null ? void 0 : _a.call(this);
    this.unsubscribe = null;
  }
  buildLayout() {
    this.containerEl.empty();
    this.containerEl.addClass("bri-root");
    if (this.config.showTitle) {
      this.containerEl.createEl("h1", { text: `\u{1F4DA} ${this.config.title}`, cls: "bri-title" });
    }
    this.summaryEl = this.containerEl.createDiv({ cls: "bri-summary" });
    const controls = this.containerEl.createDiv({ cls: "bri-controls" });
    const bookGroup = controls.createDiv({ cls: "bri-control-group" });
    bookGroup.createEl("label", { text: "Livro b\xEDblico", attr: { for: `${this.selectionKey}-book` } });
    const select = bookGroup.createEl("select", { cls: "dropdown", attr: { id: `${this.selectionKey}-book` } });
    for (const book of BIBLE_BOOKS) {
      const count = this.index.getBookCount(book.name);
      const option = select.createEl("option", { text: `${book.name} \u2014 ${count}` });
      option.value = book.name;
    }
    select.value = this.selectedBook;
    select.addEventListener("change", () => {
      this.selectedBook = select.value;
      this.visibleCount = this.config.pageSize;
      this.selectionStore.set(this.selectionKey, this.selectedBook);
      this.refreshData();
    });
    const searchGroup = controls.createDiv({ cls: "bri-control-group" });
    searchGroup.createEl("label", { text: "Pesquisar em todo o acervo", attr: { for: `${this.selectionKey}-search` } });
    const searchInput = searchGroup.createEl("input", {
      cls: "bri-search",
      attr: {
        id: `${this.selectionKey}-search`,
        type: "search",
        placeholder: "Refer\xEAncia, discurso ou pasta em qualquer livro\u2026",
        inputmode: "search"
      }
    });
    searchInput.addEventListener("input", () => {
      this.search = searchInput.value;
      this.visibleCount = this.config.pageSize;
      if (this.searchTimer != null) window.clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(() => {
        this.searchTimer = null;
        this.renderSummary();
        this.renderResults();
      }, 180);
    });
    const mode = controls.createDiv({ cls: "bri-search-mode" });
    const modeCheckbox = mode.createEl("input", {
      attr: { id: `${this.selectionKey}-content-search`, type: "checkbox" }
    });
    const modeLabel = mode.createEl("label", {
      text: "Pesquisar dentro do conte\xFAdo das notas",
      attr: { for: `${this.selectionKey}-content-search` }
    });
    modeLabel.createEl("small", { text: "Mostra uma frase de contexto para cada nota encontrada." });
    modeCheckbox.addEventListener("change", () => {
      this.contentSearch = modeCheckbox.checked;
      this.visibleCount = this.config.pageSize;
      select.disabled = this.contentSearch;
      searchInput.placeholder = this.contentSearch ? "Digite uma palavra ou express\xE3o encontrada nas notas\u2026" : "Refer\xEAncia, discurso ou pasta em qualquer livro\u2026";
      this.refreshData();
    });
    this.resultsEl = this.containerEl.createDiv({ cls: "bri-results" });
    this.refreshData();
  }
  refreshData() {
    this.renderSummary();
    this.updateBookCounts();
    this.renderResults();
  }
  renderSummary() {
    if (!this.summaryEl) return;
    const searching = this.search.trim().length > 0;
    const snapshot = searching || this.contentSearch ? this.index.snapshotAll() : this.index.snapshot(this.selectedBook);
    this.summaryEl.empty();
    this.summaryEl.createEl("strong", { text: "Resumo do acervo" });
    const stats = this.summaryEl.createDiv({ cls: "bri-summary-stats" });
    stats.createSpan({ text: `${snapshot.totalNotes} notas` });
    stats.createSpan({ text: `${snapshot.totalReferences} refer\xEAncias diferentes` });
    stats.createSpan({
      text: searching ? this.contentSearch ? "pesquisa no conte\xFAdo das notas" : `${searchReferences(snapshot.references, this.search).length} refer\xEAncias encontradas` : `${snapshot.references.length} em ${this.selectedBook}`
    });
  }
  updateBookCounts() {
    const select = this.containerEl.querySelector("select");
    if (!select) return;
    for (const option of Array.from(select.options)) {
      option.text = `${option.value} \u2014 ${this.index.getBookCount(option.value)}`;
    }
    select.value = this.selectedBook;
  }
  renderResults() {
    if (!this.resultsEl) return;
    if (this.contentSearch) {
      void this.renderContentResults();
      return;
    }
    this.contentSearchRequest += 1;
    const searching = this.search.trim().length > 0;
    const snapshot = searching ? this.index.snapshotAll() : this.index.snapshot(this.selectedBook);
    const visible = searchReferences(snapshot.references, this.search);
    this.resultsEl.empty();
    if (visible.length === 0) {
      this.resultsEl.createEl("p", {
        text: this.search.trim() ? "Nenhum resultado corresponde \xE0 pesquisa." : "Nenhuma refer\xEAncia desse livro foi encontrada.",
        cls: "bri-empty"
      });
      return;
    }
    if (searching) {
      this.resultsEl.createDiv({
        text: `\u{1F50E} Resultados em todo o acervo para \u201C${this.search.trim()}\u201D`,
        cls: "bri-search-status"
      });
    }
    this.renderGroups(visible.slice(0, this.visibleCount));
    if (visible.length > this.visibleCount) {
      const remaining = visible.length - this.visibleCount;
      const button = this.resultsEl.createEl("button", {
        text: `Mostrar mais (${remaining})`,
        cls: "bri-load-more"
      });
      button.addEventListener("click", () => {
        this.visibleCount += this.config.pageSize;
        this.renderResults();
      });
    }
  }
  async renderContentResults() {
    if (!this.resultsEl) return;
    const request = ++this.contentSearchRequest;
    const query = this.search.trim();
    this.resultsEl.empty();
    if (!query) {
      this.resultsEl.createEl("p", {
        text: "Digite uma palavra ou express\xE3o para pesquisar dentro das notas.",
        cls: "bri-empty"
      });
      return;
    }
    this.resultsEl.createEl("p", { text: "Pesquisando no conte\xFAdo das notas\u2026", cls: "bri-empty" });
    const matches = await this.index.searchNoteContents(query, 100);
    if (request !== this.contentSearchRequest || !this.resultsEl) return;
    this.resultsEl.empty();
    this.resultsEl.createDiv({
      text: `\u{1F4DD} ${matches.length} nota(s) encontrada(s) para \u201C${query}\u201D`,
      cls: "bri-search-status"
    });
    if (matches.length === 0) {
      this.resultsEl.createEl("p", { text: "Nenhuma frase correspondente foi encontrada.", cls: "bri-empty" });
      return;
    }
    const list = this.resultsEl.createDiv({ cls: "bri-content-results" });
    for (const match of matches) {
      const card = list.createDiv({ cls: "bri-content-result" });
      card.createSpan({ text: match.section, cls: "bri-content-section" });
      const link = card.createEl("a", {
        text: match.title,
        cls: "internal-link bri-content-title",
        attr: { href: match.path, "data-href": match.path }
      });
      link.addEventListener("click", (event) => {
        event.preventDefault();
        void this.app.workspace.openLinkText(match.path, this.sourcePath, import_obsidian.Keymap.isModEvent(event));
      });
      card.createEl("p", { text: match.sentence, cls: "bri-content-sentence" });
    }
  }
  renderGroups(items) {
    if (!this.resultsEl) return;
    let currentBook = "";
    let list = null;
    for (const item of items) {
      if (item.reference.book !== currentBook) {
        currentBook = item.reference.book;
        this.resultsEl.createEl("h2", { text: `\u{1F4D5} ${currentBook}` });
        list = this.resultsEl.createEl("ul", { cls: "bri-reference-list" });
      }
      if (list) this.renderReference(list, item);
    }
  }
  renderReference(parent, item) {
    const row = parent.createEl("li", { cls: "bri-reference" });
    row.createEl("strong", { text: item.reference.display, cls: "bri-reference-title" });
    const notesList = row.createEl("ul", { cls: "bri-note-list" });
    for (const note of item.notes) {
      const noteRow = notesList.createEl("li");
      noteRow.createEl("strong", { text: `${note.section}: ` });
      const link = noteRow.createEl("a", {
        text: note.title,
        cls: "internal-link",
        attr: { href: note.path, "data-href": note.path }
      });
      link.addEventListener("click", (event) => {
        event.preventDefault();
        void this.app.workspace.openLinkText(note.path, this.sourcePath, import_obsidian.Keymap.isModEvent(event));
      });
    }
  }
};

// src/settings.ts
var import_obsidian2 = require("obsidian");

// src/jw-categories.ts
var JW_SUPPORTED_CATEGORIES = [
  {
    key: "StudioTalks",
    name: "Discursos",
    type: "ondemand",
    parentKey: "VODStudio",
    path: ["De Nosso Est\xFAdio", "Discursos"],
    defaultFolder: "Discursos/De Nosso Est\xFAdio"
  },
  {
    key: "VODPgmEvtMorningWorship",
    name: "Adora\xE7\xF5es Matinais",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Adora\xE7\xF5es Matinais"],
    defaultFolder: "Discursos/Adora\xE7\xF5es Matinais"
  },
  {
    key: "VODPgmEvtGilead",
    name: "Formaturas de Gileade",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Formaturas de Gileade"],
    defaultFolder: "Discursos/Formaturas de Gileade"
  },
  {
    key: "VODPgmEvtAnnMtg",
    name: "Reuni\xF5es Anuais",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Reuni\xF5es Anuais"],
    defaultFolder: "Discursos/Reuni\xF5es Anuais"
  },
  {
    key: "2020Convention",
    name: "Congresso de 2020",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Congressos", "Congresso de 2020"],
    defaultFolder: "Discursos/Congressos/2020"
  },
  {
    key: "2021Convention",
    name: "Congresso de 2021",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Congressos", "Congresso de 2021"],
    defaultFolder: "Discursos/Congressos/2021"
  },
  {
    key: "2022Convention",
    name: "Congresso de 2022",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Congressos", "Congresso de 2022"],
    defaultFolder: "Discursos/Congressos/2022"
  }
];

// src/settings.ts
var BibleIndexSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian2.Setting(containerEl).setName("Transcri\xE7\xF5es do JW.ORG").setHeading();
    containerEl.createEl("p", {
      text: "Ative somente as cole\xE7\xF5es que deseja guardar neste aparelho. Se nenhuma pasta for escolhida, o plugin criar\xE1 automaticamente uma pasta organizada dentro de Discursos.",
      cls: "setting-item-description"
    });
    const catalog = containerEl.createDiv({ cls: "bri-catalog-settings" });
    this.renderCatalog(catalog);
    new import_obsidian2.Setting(containerEl).setName("Baixar novas transcri\xE7\xF5es").setDesc("Verifica as cole\xE7\xF5es marcadas e baixa somente discursos que ainda n\xE3o possuem uma nota com o mesmo id_jw.").addButton((button) => button.setCta().setButtonText("Verificar e baixar").onClick(async () => {
      button.setDisabled(true);
      try {
        await this.plugin.transcriptService.downloadEnabled();
      } finally {
        button.setDisabled(false);
      }
    }));
    new import_obsidian2.Setting(containerEl).setName("\xCDndice geral").setDesc("O plugin cria automaticamente a nota \u201C00 - \xCDndice Geral/\xCDndice Geral de Textos B\xEDblicos\u201D. O prefixo mant\xE9m a pasta no topo do Explorador.").addButton((button) => button.setButtonText("Criar ou localizar \xEDndice").onClick(async () => {
      await this.plugin.transcriptService.ensureGeneralIndex(true, true);
    }));
  }
  renderCatalog(container) {
    var _a;
    container.empty();
    const folders = this.app.vault.getAllLoadedFiles().filter((file) => file instanceof import_obsidian2.TFolder && file.path !== "/").map((folder) => folder.path).sort((a, b) => a.localeCompare(b, "pt-BR"));
    for (const item of JW_SUPPORTED_CATEGORIES) {
      const current = (_a = this.plugin.settings.jwCategorySettings[item.key]) != null ? _a : { enabled: false, folder: "" };
      const row = new import_obsidian2.Setting(container).setName(item.name).setDesc(`${item.path.join(" \u203A ")} \u2014 pasta autom\xE1tica: ${item.defaultFolder}`);
      row.addToggle((toggle) => toggle.setTooltip("Incluir esta cole\xE7\xE3o nos downloads").setValue(current.enabled).onChange(async (enabled) => {
        this.plugin.settings.jwCategorySettings[item.key] = { ...current, enabled };
        await this.plugin.saveSettings();
        this.renderCatalog(container);
      }));
      if (current.enabled) {
        row.addDropdown((dropdown) => {
          dropdown.addOption("", `Autom\xE1tica: ${item.defaultFolder}`);
          for (const folder of folders) dropdown.addOption(folder, folder);
          if (current.folder && !folders.includes(current.folder)) dropdown.addOption(current.folder, current.folder);
          dropdown.setValue(current.folder);
          dropdown.onChange(async (folder) => {
            this.plugin.settings.jwCategorySettings[item.key] = { enabled: true, folder };
            await this.plugin.saveSettings();
          });
        });
      }
    }
  }
};

// src/jw-service.ts
var import_obsidian3 = require("obsidian");

// src/scripture-links.ts
function jwLibraryUrl(reference) {
  const book = String(reference.bookOrder + 1).padStart(2, "0");
  const chapter = String(reference.chapter).padStart(3, "0");
  const verse = String(reference.verse).padStart(3, "0");
  return `jwlibrary:///finder?wtlocale=T&bible=${book}${chapter}${verse}`;
}
function shouldIgnore(node) {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest(
    "a, code, pre, script, style, textarea, .bri-root, .metadata-container, .frontmatter"
  ));
}
function linkBibleReferences(container) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let current = walker.nextNode();
  while (current) {
    if (current.instanceOf(Text) && !shouldIgnore(current)) nodes.push(current);
    current = walker.nextNode();
  }
  for (const node of nodes) {
    const text = node.data;
    const locations = findReferencesInText(text);
    if (locations.length === 0) continue;
    const fragment = createFragment();
    let cursor = 0;
    for (const location of locations) {
      if (location.start < cursor) continue;
      fragment.append(text.slice(cursor, location.start));
      const link = createEl("a");
      link.className = "bri-scripture-link";
      link.href = jwLibraryUrl(location.reference);
      link.textContent = text.slice(location.start, location.end);
      link.title = `Abrir ${location.reference.display} no JW Library`;
      fragment.append(link);
      cursor = location.end;
    }
    fragment.append(text.slice(cursor));
    node.replaceWith(fragment);
  }
}

// src/transcript.ts
var INVALID_FILE_CHARS = /[<>:"/\\|?*]/g;
var RESERVED_NAMES = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i;
function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"'
  };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    var _a;
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return (_a = named[code.toLocaleLowerCase("pt-BR")]) != null ? _a : entity;
  });
}
function cueText(lines) {
  return decodeEntities(lines.join(" ").replace(/<\/?(?:c(?:\.[^ >]+)?|i|b|u|ruby|rt|v(?:\s+[^>]*)?|lang(?:\s+[^>]*)?)>/gi, "").replace(/\s+/g, " ").trim());
}
function vttParaParagrafos(vtt) {
  const cues = [];
  let current = [];
  const flush = () => {
    const text = cueText(current);
    current = [];
    if (text && cues.at(-1) !== text) cues.push(text);
  };
  for (const rawLine of vtt.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      flush();
      continue;
    }
    if (/^(WEBVTT|NOTE|STYLE|REGION)(?:\s|$)/i.test(line)) continue;
    if (/^\d+$/.test(line) && current.length === 0) continue;
    if (/^\d{1,2}:\d{2}(?::\d{2})?[.,]\d{3}\s+-->/.test(line)) continue;
    current.push(line);
  }
  flush();
  const paragraphs = [];
  let paragraph = "";
  for (const cue of cues) {
    const beginsNewThought = /^(Primeiro|Segundo|Terceiro|Por fim|Agora|Vamos|Então|Mas|Assim|Qual|Como|O que)\b/i.test(cue);
    if (paragraph && (beginsNewThought && paragraph.length >= 220 || paragraph.length + cue.length >= 620)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
    paragraph += `${paragraph ? " " : ""}${cue}`;
    if (paragraph.length >= 360 && /[.!?…][”'’"]?$/.test(cue)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
  }
  if (paragraph.trim()) paragraphs.push(paragraph.trim());
  return paragraphs;
}
function nomeArquivoSeguro(title) {
  let safe = title.replace(/\p{Cc}/gu, "-").replace(INVALID_FILE_CHARS, "-").replace(/\s+/g, " ").replace(/\.+$/g, "").trim();
  if (!safe) safe = "Transcri\xE7\xE3o sem t\xEDtulo";
  if (RESERVED_NAMES.test(safe)) safe = `Nota - ${safe}`;
  return safe.slice(0, 150).trim();
}
function idJw(media) {
  return media.naturalKey.replace(/^pub-/, "").replace(/_(?:VIDEO|AUDIO)$/i, "");
}
function identificarOrador(title) {
  var _a, _b;
  const prefix = (_b = (_a = title.split(":", 1)[0]) == null ? void 0 : _a.trim()) != null ? _b : "";
  if (!prefix || prefix === title.trim() || prefix.length > 70) return null;
  if (/^(jw|programa|discurso|notícias|boletim|relatório|congresso|assembleia)\b/i.test(prefix)) return null;
  const words = prefix.split(/\s+/);
  if (words.length < 2 || words.length > 6) return null;
  if (!words.every((word) => /^[A-ZÁÀÂÃÉÊÍÓÔÕÚÜÇ][\p{L}'’.-]*$/u.test(word))) return null;
  return prefix;
}
function withoutExistingMiniIndex(body) {
  return body.replace(/\n?<!-- mini-indice-inicio -->[\s\S]*?<!-- mini-indice-fim -->\n?/g, "\n").replace(/\n?> \[!bible-index\][^\n]*\n>[^\n]*(?:\n|$)/g, "\n").replace(/\n?## 📖 Mini-índice de textos\s*\n+[\s\S]*?(?=\n{2,})\n{2,}/g, "\n\n").replace(/^\^citacao-\d+\s*$/gm, "").replace(/\n{3,}/g, "\n\n").trim();
}
function canContainSpokenReference(block) {
  const trimmed = block.trim();
  return Boolean(trimmed) && !/^#{1,6}\s/.test(trimmed) && !/^\[▶ Assistir no JW\.ORG\]/.test(trimmed) && !/^> \[!bible-index\]/.test(trimmed) && !/^```/.test(trimmed) && !/^<!--/.test(trimmed);
}
function protectedMiniIndexLabel(display) {
  return display.replace(/^((?:[123]\s+)?\p{L})/u, "$1\u2060");
}
function linkReferencesInMarkdown(block) {
  const protectedRanges = [...block.matchAll(/\[[^\]]+\]\([^)]+\)|\[\[[^\]]+\]\]|`[^`]*`/g)].filter((match) => match.index != null).map((match) => ({ start: match.index, end: match.index + match[0].length }));
  const locations = findReferencesInText(block);
  if (locations.length === 0) return block;
  let output = "";
  let cursor = 0;
  for (const location of locations) {
    const alreadyLinked = protectedRanges.some((range) => location.start >= range.start && location.end <= range.end);
    if (alreadyLinked || location.start < cursor) continue;
    output += block.slice(cursor, location.start);
    const original = block.slice(location.start, location.end);
    output += `[${original}](${jwLibraryUrl(location.reference)})`;
    cursor = location.end;
  }
  if (cursor === 0) return block;
  return output + block.slice(cursor);
}
function synchronizeMiniIndex(content) {
  var _a, _b;
  const frontmatterMatch = /^---\s*\n[\s\S]*?\n---\s*\n?/.exec(content);
  const frontmatter = (_a = frontmatterMatch == null ? void 0 : frontmatterMatch[0].trimEnd()) != null ? _a : "";
  const rawBody = content.slice((_b = frontmatterMatch == null ? void 0 : frontmatterMatch[0].length) != null ? _b : 0);
  const cleanBody = withoutExistingMiniIndex(rawBody);
  const blocks = cleanBody ? cleanBody.split(/\n{2,}/) : [];
  const referenceTargets = /* @__PURE__ */ new Map();
  const allReferenceValues = [];
  const renderedBlocks = blocks.map((block, index) => {
    if (!canContainSpokenReference(block)) return block.trim();
    const references2 = extractReferences(block);
    if (references2.length === 0) return block.trim();
    allReferenceValues.push(block);
    const blockId = `citacao-${String(index + 1).padStart(3, "0")}`;
    for (const reference of references2) {
      if (!referenceTargets.has(reference.key)) referenceTargets.set(reference.key, blockId);
    }
    return `${linkReferencesInMarkdown(block.trim())}
^${blockId}`;
  });
  const references = extractReferences(allReferenceValues);
  if (references.length > 0) {
    const links = references.map((reference) => {
      const target = referenceTargets.get(reference.key);
      const label = protectedMiniIndexLabel(reference.display);
      return target ? `[[#^${target}|${label}]]` : label;
    }).join("  \xB7  ");
    const miniIndex = [
      "> [!bible-index] Textos b\xEDblicos citados",
      `> ${links}`
    ].join("\n");
    const sourceIndex = renderedBlocks.findIndex((block) => /^\[▶ Assistir no JW\.ORG\]/.test(block));
    const titleIndex = renderedBlocks.findIndex((block) => /^#\s/.test(block));
    const insertionIndex = sourceIndex >= 0 ? sourceIndex + 1 : titleIndex >= 0 ? titleIndex + 1 : 0;
    renderedBlocks.splice(insertionIndex, 0, miniIndex);
  }
  const output = [frontmatter, renderedBlocks.join("\n\n")].filter(Boolean).join("\n\n").trimEnd() + "\n";
  return { content: output, references };
}
function yamlString(value) {
  return JSON.stringify(value);
}
function criarNotaTranscricao(media, vtt) {
  var _a, _b, _c;
  const paragraphs = vttParaParagrafos(vtt);
  const transcript = paragraphs.join("\n\n");
  const references = extractReferences(transcript);
  const speaker = identificarOrador(media.title);
  const date = (_c = (_b = /^\d{4}-\d{2}-\d{2}/.exec((_a = media.firstPublished) != null ? _a : "")) == null ? void 0 : _b[0]) != null ? _c : null;
  const source = `https://www.jw.org/finder?srcid=share&wtlocale=T&lank=${encodeURIComponent(media.naturalKey)}`;
  const yaml = [
    "---",
    `id_jw: ${yamlString(idJw(media))}`,
    ...speaker ? [`orador: ${yamlString(speaker)}`] : [],
    ...date ? [`data_publicacao: ${date}`] : [],
    ...references.length ? ["textos:", ...references.map((reference) => `  - ${yamlString(reference.display)}`)] : ["textos: []"],
    "---"
  ];
  const base = [
    ...yaml,
    "",
    `# ${media.title}`,
    "",
    `[\u25B6 Assistir no JW.ORG](${source})`,
    "",
    ...paragraphs.flatMap((paragraph) => [paragraph, ""])
  ].join("\n").trimEnd() + "\n";
  return synchronizeMiniIndex(base).content;
}

// src/jw-service.ts
var API_BASE = "https://b.jw-cdn.org/apis/mediator/v1";
var LOCALE_PT_BR = "T";
var GENERAL_INDEX_FOLDER = "00 - \xCDndice Geral";
var LEGACY_GENERAL_INDEX_FOLDER = "\xCDndice Geral";
var GENERAL_INDEX_FILENAME = "\xCDndice Geral de Textos B\xEDblicos.md";
function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
async function getCategory(key, limit = 50, offset = 0) {
  const params = new URLSearchParams({ clientType: "www", limit: String(limit), offset: String(offset) });
  const response = await (0, import_obsidian3.requestUrl)({
    url: `${API_BASE}/categories/${LOCALE_PT_BR}/${encodeURIComponent(key)}?${params.toString()}`,
    method: "GET"
  });
  return response.json;
}
function cleanFolder(value) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? (0, import_obsidian3.normalizePath)(trimmed) : "";
}
async function ensureFolder(app, folder) {
  const parts = cleanFolder(folder).split("/").filter(Boolean);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current)) await app.vault.createFolder(current);
  }
}
function subtitleUrl(media) {
  var _a, _b, _c;
  return (_c = (_b = (_a = media.files.find((file) => {
    var _a2;
    return (_a2 = file.subtitles) == null ? void 0 : _a2.url;
  })) == null ? void 0 : _a.subtitles) == null ? void 0 : _b.url) != null ? _c : null;
}
var JwTranscriptService = class {
  constructor(app, settings, syncNote) {
    this.app = app;
    this.settings = settings;
    this.syncNote = syncNote;
    __publicField(this, "downloading", false);
  }
  async downloadEnabled() {
    if (this.downloading) {
      new import_obsidian3.Notice("J\xE1 existe uma atualiza\xE7\xE3o de transcri\xE7\xF5es em andamento.");
      return;
    }
    const selected = JW_SUPPORTED_CATEGORIES.filter((item) => {
      const config = this.settings.jwCategorySettings[item.key];
      return config == null ? void 0 : config.enabled;
    });
    if (selected.length === 0) {
      new import_obsidian3.Notice("Ative pelo menos uma cole\xE7\xE3o de transcri\xE7\xF5es.");
      return;
    }
    this.downloading = true;
    const progress = new import_obsidian3.Notice("Verificando novas transcri\xE7\xF5es\u2026", 0);
    let created = 0;
    let skipped = 0;
    let withoutSubtitle = 0;
    let errors = 0;
    let updatedMiniIndexes = 0;
    try {
      const existing = this.existingNotes();
      for (const [categoryIndex, category] of selected.entries()) {
        progress.setMessage(`Verificando ${category.name} (${categoryIndex + 1}/${selected.length})\u2026`);
        const chosenFolder = cleanFolder(this.settings.jwCategorySettings[category.key].folder);
        const folder = chosenFolder || category.defaultFolder;
        await ensureFolder(this.app, folder);
        const mediaItems = await this.allMedia(category.key);
        for (const [mediaIndex, media] of mediaItems.entries()) {
          const id = idJw(media);
          progress.setMessage(`${category.name}: ${mediaIndex + 1}/${mediaItems.length} \u2014 ${media.title}`);
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
            const vtt = (await (0, import_obsidian3.requestUrl)({ url, method: "GET" })).text;
            const note = criarNotaTranscricao(media, vtt);
            const filePath = await this.availablePath(folder, nomeArquivoSeguro(media.title));
            const file = await this.app.vault.create(filePath, note);
            existing.set(id, file);
            created += 1;
          } catch (e) {
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
      `${skipped} j\xE1 existente(s)`,
      `${updatedMiniIndexes} mini-\xEDndice(s) atualizado(s)`,
      `${withoutSubtitle} sem transcri\xE7\xE3o`,
      `${errors} erro(s)`
    ].join("; ");
    new import_obsidian3.Notice(`Atualiza\xE7\xE3o conclu\xEDda: ${details}.`, 12e3);
  }
  async ensureGeneralIndex(showNotice = false, openAfter = false) {
    const folder = GENERAL_INDEX_FOLDER;
    const path = `${folder}/${GENERAL_INDEX_FILENAME}`;
    await this.migrateGeneralIndex();
    await ensureFolder(this.app, folder);
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (!existing) {
      const content = [
        "# \u{1F4DA} \xCDndice Geral de Textos B\xEDblicos",
        "",
        "> Este \xEDndice re\xFAne automaticamente as refer\xEAncias das notas armazenadas na pasta Discursos.",
        "",
        "```indice-biblico",
        "pasta: Discursos",
        "propriedade: textos",
        "quantidade: 150",
        "```",
        ""
      ].join("\n");
      await this.app.vault.create(path, content);
      if (showNotice) new import_obsidian3.Notice("\xCDndice geral criado e pronto para uso.");
    } else if (showNotice) {
      new import_obsidian3.Notice("O \xEDndice geral j\xE1 existe.");
    }
    if (openAfter) await this.app.workspace.openLinkText(path, "", false);
  }
  async migrateGeneralIndex() {
    const oldFolder = this.app.vault.getAbstractFileByPath(LEGACY_GENERAL_INDEX_FOLDER);
    const newFolder = this.app.vault.getAbstractFileByPath(GENERAL_INDEX_FOLDER);
    if (oldFolder instanceof import_obsidian3.TFolder && !newFolder) {
      await this.app.vault.rename(oldFolder, GENERAL_INDEX_FOLDER);
      return;
    }
    const oldPath = `${LEGACY_GENERAL_INDEX_FOLDER}/${GENERAL_INDEX_FILENAME}`;
    const newPath = `${GENERAL_INDEX_FOLDER}/${GENERAL_INDEX_FILENAME}`;
    const oldFile = this.app.vault.getAbstractFileByPath(oldPath);
    const newFile = this.app.vault.getAbstractFileByPath(newPath);
    if (oldFile instanceof import_obsidian3.TFile && !newFile) {
      await ensureFolder(this.app, GENERAL_INDEX_FOLDER);
      await this.app.vault.rename(oldFile, newPath);
    }
  }
  async allMedia(categoryKey) {
    var _a, _b, _c;
    const media = [];
    const limit = 50;
    let offset = 0;
    let total = 1;
    while (offset < total) {
      const response = await getCategory(categoryKey, limit, offset);
      media.push(...(_a = response.category.media) != null ? _a : []);
      total = (_c = (_b = response.pagination) == null ? void 0 : _b.totalCount) != null ? _c : media.length;
      offset += limit;
      if (offset < total) await wait(220);
    }
    return media;
  }
  existingNotes() {
    var _a, _b;
    const notes = /* @__PURE__ */ new Map();
    for (const file of this.app.vault.getMarkdownFiles()) {
      const value = (_b = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) == null ? void 0 : _b.id_jw;
      if (typeof value === "string" && value.trim()) notes.set(value.trim(), file);
    }
    return notes;
  }
  async availablePath(folder, basename) {
    let counter = 1;
    let path = `${folder}/${basename}.md`;
    while (this.app.vault.getAbstractFileByPath(path)) {
      counter += 1;
      path = `${folder}/${basename} (${counter}).md`;
    }
    return path;
  }
};

// src/note-sync.ts
function sameValues(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}
function propertyValues(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var NoteSyncService = class {
  constructor(app) {
    this.app = app;
    __publicField(this, "timers", /* @__PURE__ */ new Map());
    __publicField(this, "busy", /* @__PURE__ */ new Set());
  }
  schedule(file) {
    if (!this.isManagedFile(file)) return;
    const previous = this.timers.get(file.path);
    if (previous != null) window.clearTimeout(previous);
    const timer = window.setTimeout(() => {
      this.timers.delete(file.path);
      void this.syncFile(file);
    }, 900);
    this.timers.set(file.path, timer);
  }
  async syncFile(file) {
    var _a;
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
      const rawFrontmatter = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
      const frontmatter = isRecord(rawFrontmatter) ? rawFrontmatter : {};
      const expectedTexts = synchronized.references.map((reference) => reference.display);
      const currentTexts = propertyValues(frontmatter.textos);
      const hasTexts = Object.hasOwn(frontmatter, "textos");
      const hasRemovedProperties = Object.hasOwn(frontmatter, "categoria") || Object.hasOwn(frontmatter, "subcategoria");
      const needsTexts = expectedTexts.length > 0 || hasTexts;
      if (hasRemovedProperties || needsTexts && !sameValues(currentTexts, expectedTexts)) {
        await this.app.fileManager.processFrontMatter(file, (properties) => {
          delete properties.categoria;
          delete properties.subcategoria;
          if (needsTexts) properties.textos = expectedTexts;
        });
        changed = true;
      }
      return changed;
    } finally {
      this.busy.delete(file.path);
    }
  }
  unload() {
    for (const timer of this.timers.values()) window.clearTimeout(timer);
    this.timers.clear();
  }
  isManagedFile(file) {
    var _a;
    if (file.extension !== "md") return false;
    if (file.path.startsWith("Discursos/")) return true;
    const rawFrontmatter = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
    if (!isRecord(rawFrontmatter)) return false;
    return typeof rawFrontmatter.id_jw === "string" || Object.hasOwn(rawFrontmatter, "textos");
  }
};

// src/main.ts
var STORAGE_PREFIX = "bible-reference-index:selection:";
var DeviceSelectionStore = class {
  constructor() {
    __publicField(this, "fallback", /* @__PURE__ */ new Map());
  }
  get(key) {
    var _a, _b, _c;
    try {
      return (_b = (_a = window.localStorage.getItem(`${STORAGE_PREFIX}${key}`)) != null ? _a : this.fallback.get(key)) != null ? _b : null;
    } catch (e) {
      return (_c = this.fallback.get(key)) != null ? _c : null;
    }
  }
  set(key, value) {
    this.fallback.set(key, value);
    try {
      window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
    } catch (e) {
    }
  }
};
var BibleReferenceIndexPlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settings", { ...DEFAULT_SETTINGS });
    __publicField(this, "indexManager");
    __publicField(this, "transcriptService");
    __publicField(this, "noteSyncService");
    __publicField(this, "selections", new DeviceSelectionStore());
  }
  async onload() {
    await this.loadSettings();
    this.indexManager = new BibleIndexManager(this.app);
    this.noteSyncService = new NoteSyncService(this.app);
    this.transcriptService = new JwTranscriptService(
      this.app,
      this.settings,
      (file) => this.noteSyncService.syncFile(file)
    );
    this.addSettingTab(new BibleIndexSettingTab(this.app, this));
    await this.transcriptService.ensureGeneralIndex();
    this.addCommand({
      id: "baixar-novas-transcricoes",
      name: "Baixar novas transcri\xE7\xF5es selecionadas",
      callback: () => {
        void this.transcriptService.downloadEnabled();
      }
    });
    this.registerMarkdownCodeBlockProcessor("indice-biblico", (source, el, context) => {
      var _a;
      const config = parseBlockConfig(source, this.settings);
      const section = context.getSectionInfo(el);
      const location = (_a = section == null ? void 0 : section.lineStart) != null ? _a : 0;
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
      linkBibleReferences(element);
    });
    this.registerEvent(this.app.metadataCache.on("changed", (file) => {
      this.indexManager.updateFile(file);
    }));
    this.registerEvent(this.app.vault.on("modify", (file) => {
      if (file instanceof import_obsidian4.TFile) this.noteSyncService.schedule(file);
    }));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (file instanceof import_obsidian4.TFile) this.indexManager.removePath(file.path);
    }));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (file instanceof import_obsidian4.TFile) this.indexManager.renameFile(file, oldPath);
    }));
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      if (file) this.noteSyncService.schedule(file);
    }));
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile) this.noteSyncService.schedule(activeFile);
  }
  onunload() {
    var _a;
    (_a = this.noteSyncService) == null ? void 0 : _a.unload();
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async loadSettings() {
    const saved = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...saved != null ? saved : {} };
  }
};
