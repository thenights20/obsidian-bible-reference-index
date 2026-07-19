import { App, PluginSettingTab, Setting } from "obsidian";
import type BibleReferenceIndexPlugin from "./main";

export class BibleIndexSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: BibleReferenceIndexPlugin) {
    super(app, plugin);
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Pasta dos discursos")
      .setDesc("Pasta pesquisada quando o bloco não informar outra pasta.")
      .addText((text) => text
        .setPlaceholder("Discursos")
        .setValue(this.plugin.settings.defaultFolder)
        .onChange(async (value) => {
          this.plugin.settings.defaultFolder = value.trim().replace(/^\/+|\/+$/g, "") || "Discursos";
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Propriedade das referências")
      .setDesc("Nome da propriedade YAML que contém os textos bíblicos.")
      .addText((text) => text
        .setPlaceholder("textos")
        .setValue(this.plugin.settings.defaultProperty)
        .onChange(async (value) => {
          this.plugin.settings.defaultProperty = value.trim() || "textos";
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Referências exibidas por vez")
      .setDesc("Limita a renderização inicial para manter o índice leve em aparelhos móveis.")
      .addSlider((slider) => slider
        .setLimits(25, 150, 25)
        .setValue(this.plugin.settings.pageSize)
        .onChange(async (value) => {
          this.plugin.settings.pageSize = value;
          await this.plugin.saveSettings();
        }));

    containerEl.createEl("p", {
      text: "As mudanças padrão passam a valer quando a nota do índice for reaberta.",
      cls: "setting-item-description"
    });
  }
}
