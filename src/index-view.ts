import { App, Keymap, MarkdownRenderChild } from "obsidian";
import { BIBLE_BOOKS } from "./books";
import type { BibleIndex } from "./index-service";
import { searchReferences, type VisibleReference } from "./search";
import type { BlockConfig } from "./types";

interface SelectionStore {
  get(key: string): string | null;
  set(key: string, value: string): void;
}

export class BibleIndexView extends MarkdownRenderChild {
  private selectedBook: string;
  private search = "";
  private contentSearch = false;
  private visibleCount: number;
  private unsubscribe: (() => void) | null = null;
  private searchTimer: number | null = null;
  private summaryEl: HTMLElement | null = null;
  private resultsEl: HTMLElement | null = null;
  private contentSearchRequest = 0;

  constructor(
    containerEl: HTMLElement,
    private readonly app: App,
    private readonly sourcePath: string,
    private readonly index: BibleIndex,
    private readonly config: BlockConfig,
    private readonly selectionStore: SelectionStore,
    private readonly selectionKey: string
  ) {
    super(containerEl);
    const stored = selectionStore.get(selectionKey);
    this.selectedBook = BIBLE_BOOKS.some((book) => book.name === stored) ? stored! : BIBLE_BOOKS[0]!.name;
    this.visibleCount = config.pageSize;
  }

  onload(): void {
    this.buildLayout();
    this.unsubscribe = this.index.subscribe(() => this.refreshData());
  }

  onunload(): void {
    if (this.searchTimer != null) window.clearTimeout(this.searchTimer);
    this.unsubscribe?.();
    this.unsubscribe = null;
  }

  private buildLayout(): void {
    this.containerEl.empty();
    this.containerEl.addClass("bri-root");

    if (this.config.showTitle) {
      this.containerEl.createEl("h1", { text: `📚 ${this.config.title}`, cls: "bri-title" });
    }
    this.summaryEl = this.containerEl.createDiv({ cls: "bri-summary" });

    const controls = this.containerEl.createDiv({ cls: "bri-controls" });
    const bookGroup = controls.createDiv({ cls: "bri-control-group" });
    bookGroup.createEl("label", { text: "Livro bíblico", attr: { for: `${this.selectionKey}-book` } });
    const select = bookGroup.createEl("select", { cls: "dropdown", attr: { id: `${this.selectionKey}-book` } });
    for (const book of BIBLE_BOOKS) {
      const count = this.index.getBookCount(book.name);
      const option = select.createEl("option", { text: `${book.name} — ${count}` });
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
        placeholder: "Referência, discurso ou pasta em qualquer livro…",
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
      text: "Pesquisar dentro do conteúdo das notas",
      attr: { for: `${this.selectionKey}-content-search` }
    });
    modeLabel.createEl("small", { text: "Mostra uma frase de contexto para cada nota encontrada." });
    modeCheckbox.addEventListener("change", () => {
      this.contentSearch = modeCheckbox.checked;
      this.visibleCount = this.config.pageSize;
      select.disabled = this.contentSearch;
      searchInput.placeholder = this.contentSearch
        ? "Digite uma palavra ou expressão encontrada nas notas…"
        : "Referência, discurso ou pasta em qualquer livro…";
      this.refreshData();
    });

    this.resultsEl = this.containerEl.createDiv({ cls: "bri-results" });
    this.refreshData();
  }

  private refreshData(): void {
    this.renderSummary();
    this.updateBookCounts();
    this.renderResults();
  }

  private renderSummary(): void {
    if (!this.summaryEl) return;
    const searching = this.search.trim().length > 0;
    const snapshot = searching || this.contentSearch ? this.index.snapshotAll() : this.index.snapshot(this.selectedBook);
    this.summaryEl.empty();
    this.summaryEl.createEl("strong", { text: "Resumo do acervo" });
    const stats = this.summaryEl.createDiv({ cls: "bri-summary-stats" });
    stats.createSpan({ text: `${snapshot.totalNotes} notas` });
    stats.createSpan({ text: `${snapshot.totalReferences} referências diferentes` });
    stats.createSpan({
      text: searching
        ? this.contentSearch
          ? "pesquisa no conteúdo das notas"
          : `${searchReferences(snapshot.references, this.search).length} referências encontradas`
        : `${snapshot.references.length} em ${this.selectedBook}`
    });
  }

  private updateBookCounts(): void {
    const select = this.containerEl.querySelector<HTMLSelectElement>("select");
    if (!select) return;
    for (const option of Array.from(select.options)) {
      option.text = `${option.value} — ${this.index.getBookCount(option.value)}`;
    }
    select.value = this.selectedBook;
  }

  private renderResults(): void {
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
        text: this.search.trim()
          ? "Nenhum resultado corresponde à pesquisa."
          : "Nenhuma referência desse livro foi encontrada.",
        cls: "bri-empty"
      });
      return;
    }

    if (searching) {
      this.resultsEl.createDiv({
        text: `🔎 Resultados em todo o acervo para “${this.search.trim()}”`,
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

  private async renderContentResults(): Promise<void> {
    if (!this.resultsEl) return;
    const request = ++this.contentSearchRequest;
    const query = this.search.trim();
    this.resultsEl.empty();
    if (!query) {
      this.resultsEl.createEl("p", {
        text: "Digite uma palavra ou expressão para pesquisar dentro das notas.",
        cls: "bri-empty"
      });
      return;
    }

    this.resultsEl.createEl("p", { text: "Pesquisando no conteúdo das notas…", cls: "bri-empty" });
    const matches = await this.index.searchNoteContents(query, 100);
    if (request !== this.contentSearchRequest || !this.resultsEl) return;
    this.resultsEl.empty();
    this.resultsEl.createDiv({
      text: `📝 ${matches.length} nota(s) encontrada(s) para “${query}”`,
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
        void this.app.workspace.openLinkText(match.path, this.sourcePath, Keymap.isModEvent(event));
      });
      card.createEl("p", { text: match.sentence, cls: "bri-content-sentence" });
    }
  }

  private renderGroups(items: readonly VisibleReference[]): void {
    if (!this.resultsEl) return;
    let currentBook = "";
    let list: HTMLUListElement | null = null;

    for (const item of items) {
      if (item.reference.book !== currentBook) {
        currentBook = item.reference.book;
        this.resultsEl.createEl("h2", { text: `📕 ${currentBook}` });
        list = this.resultsEl.createEl("ul", { cls: "bri-reference-list" });
      }
      if (list) this.renderReference(list, item);
    }
  }

  private renderReference(parent: HTMLElement, item: VisibleReference): void {
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
        void this.app.workspace.openLinkText(note.path, this.sourcePath, Keymap.isModEvent(event));
      });
    }
  }
}

export type { SelectionStore };
