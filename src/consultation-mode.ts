import { MarkdownView, setIcon, type App, type TFile } from "obsidian";

const INDEX_FOLDER = "00 - Índice Geral/";
const SPEECH_FOLDER = "Discursos/";

export class ConsultationModeController {
  private unlockedPath: string | null = null;
  private button: HTMLButtonElement | null = null;

  constructor(
    private readonly app: App,
    private readonly enabled: () => boolean,
    private readonly finishEditing: (file: TFile) => Promise<boolean>
  ) {}

  refresh(): void {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    this.clearDecorations();
    if (!view?.file || !this.enabled()) return;

    if (view.file.path.startsWith(INDEX_FOLDER)) {
      this.unlockedPath = null;
      view.containerEl.addClass("indice-nights-index-locked");
      this.markHiddenViewActions(view);
      this.setMode(view, "preview");
      return;
    }

    if (!view.file.path.startsWith(SPEECH_FOLDER)) return;
    const editing = this.unlockedPath === view.file.path;
    view.containerEl.addClass("indice-nights-consultation");
    this.markHiddenViewActions(view);
    if (!editing) this.setMode(view, "preview");
    this.createButton(view, editing);
  }

  async leaveCurrent(file: TFile | null): Promise<void> {
    if (file && this.unlockedPath === file.path) await this.finishEditing(file);
    this.unlockedPath = null;
  }

  unload(): void {
    this.clearDecorations();
  }

  private markHiddenViewActions(view: MarkdownView): void {
    for (const action of Array.from(view.containerEl.querySelectorAll<HTMLElement>(".view-action"))) {
      if (action.querySelector(".lucide-pencil, .lucide-book-open, .lucide-edit")) {
        action.addClass("indice-nights-hidden-view-action");
      }
    }
  }

  private createButton(view: MarkdownView, editing: boolean): void {
    const button = view.containerEl.createEl("button", {
      cls: "indice-nights-edit-toggle",
      text: editing ? "Concluir edição" : "Editar discurso"
    });
    setIcon(button, editing ? "check" : "pencil");
    button.addEventListener("click", () => {
      void (async () => {
        if (!view.file) return;
        if (editing) {
          await this.finishEditing(view.file);
          this.unlockedPath = null;
          this.setMode(view, "preview");
        } else {
          this.unlockedPath = view.file.path;
          this.setMode(view, "source");
        }
        this.refresh();
      })();
    });
    this.button = button;
  }

  private setMode(view: MarkdownView, mode: "preview" | "source"): void {
    if (view.getMode() === mode) return;
    void view.leaf.setViewState({
      type: "markdown",
      state: { file: view.file?.path, mode, source: false }
    }, { focus: true });
  }

  private clearDecorations(): void {
    this.button?.remove();
    this.button = null;
    for (const leaf of this.app.workspace.getLeavesOfType("markdown")) {
      const container = leaf.view.containerEl;
      container.removeClass("indice-nights-index-locked");
      container.removeClass("indice-nights-consultation");
      for (const action of Array.from(container.querySelectorAll<HTMLElement>(".indice-nights-hidden-view-action"))) {
        action.removeClass("indice-nights-hidden-view-action");
      }
    }
  }
}
