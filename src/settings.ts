import { App, PluginSettingTab, Setting, TFolder } from "obsidian";
import type BibleReferenceIndexPlugin from "./main";
import { JW_SUPPORTED_CATEGORIES } from "./jw-categories";

export class BibleIndexSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: BibleReferenceIndexPlugin) {
    super(app, plugin);
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Transcrições do JW.ORG")
      .setHeading();

    containerEl.createEl("p", {
      text: "Ative somente as coleções que deseja guardar neste aparelho. Se nenhuma pasta for escolhida, o plugin criará automaticamente uma pasta organizada dentro de Discursos.",
      cls: "setting-item-description"
    });

    const catalog = containerEl.createDiv({ cls: "bri-catalog-settings" });
    this.renderCatalog(catalog);

    new Setting(containerEl)
      .setName("Baixar novas transcrições")
      .setDesc("Verifica as coleções marcadas e baixa somente discursos que ainda não possuem uma nota com o mesmo id_jw.")
      .addButton((button) => button
        .setCta()
        .setButtonText("Verificar e baixar")
        .onClick(async () => {
          button.setDisabled(true);
          try {
            await this.plugin.transcriptService.downloadEnabled();
          } finally {
            button.setDisabled(false);
          }
        }));

    new Setting(containerEl)
      .setName("Índice geral")
      .setDesc("O plugin cria automaticamente a nota “00 - Índice Geral/Índice Geral de Textos Bíblicos”. O prefixo mantém a pasta no topo do Explorador.")
      .addButton((button) => button
        .setButtonText("Criar ou localizar índice")
        .onClick(async () => {
          await this.plugin.transcriptService.ensureGeneralIndex(true, true);
        }));
  }

  private renderCatalog(container: HTMLElement): void {
    container.empty();
    const folders = this.app.vault.getAllLoadedFiles()
      .filter((file): file is TFolder => file instanceof TFolder && file.path !== "/")
      .map((folder) => folder.path)
      .sort((a, b) => a.localeCompare(b, "pt-BR"));

    for (const item of JW_SUPPORTED_CATEGORIES) {
      const current = this.plugin.settings.jwCategorySettings[item.key] ?? { enabled: false, folder: "" };
      const row = new Setting(container)
        .setName(item.name)
        .setDesc(`${item.path.join(" › ")} — pasta automática: ${item.defaultFolder}`);

      row.addToggle((toggle) => toggle
        .setTooltip("Incluir esta coleção nos downloads")
        .setValue(current.enabled)
        .onChange(async (enabled) => {
          this.plugin.settings.jwCategorySettings[item.key] = { ...current, enabled };
          await this.plugin.saveSettings();
          this.renderCatalog(container);
        }));

      if (current.enabled) {
        row.addDropdown((dropdown) => {
          dropdown.addOption("", `Automática: ${item.defaultFolder}`);
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
}
