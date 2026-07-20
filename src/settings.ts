import { App, PluginSettingTab, Setting, TFolder } from "obsidian";
import type IndiceNightsPlugin from "./main";
import { SUPPORTED_CATEGORIES } from "./transcript-categories";

export class IndiceNightsSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: IndiceNightsPlugin) {
    super(app, plugin);
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Biblioteca de transcrições")
      .setHeading();

    containerEl.createEl("p", {
      text: "Ative somente as coleções que deseja guardar neste aparelho. Se nenhuma pasta for escolhida, o plugin criará automaticamente uma pasta organizada dentro de Discursos.",
      cls: "setting-item-description"
    });

    const catalog = containerEl.createDiv({ cls: "bri-catalog-settings" });
    this.renderCatalog(catalog);

    new Setting(containerEl)
      .setName("Baixar novas transcrições")
      .setDesc("Verifica as coleções marcadas e baixa somente discursos que ainda não possuem uma nota com o mesmo id_origem.")
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
      .setName("Transcrições de uma pasta pública")
      .setHeading();

    new Setting(containerEl)
      .setName("Miniaturas ausentes")
      .setDesc("Baixa e acrescenta a imagem de apresentação às transcrições já existentes das coleções ativadas.")
      .addButton((button) => button
        .setButtonText("Atualizar miniaturas")
        .onClick(async () => {
          button.setDisabled(true);
          try {
            await this.plugin.transcriptService.updateMissingThumbnails();
          } finally {
            button.setDisabled(false);
          }
        }));

    containerEl.createEl("p", {
      text: "Cole o link de uma pasta pública do Google Drive. O plugin lê arquivos TXT, Markdown e Documentos Google sem login e mantém as subpastas.",
      cls: "setting-item-description"
    });

    new Setting(containerEl)
      .setName("Link público da pasta")
      .setDesc("No Google Drive, use Compartilhar → Acesso geral → Qualquer pessoa com o link → Leitor.")
      .addText((text) => text
        .setPlaceholder("https://drive.google.com/drive/folders/...")
        .setValue(this.plugin.settings.remoteDriveUrl)
        .onChange(async (value) => {
          this.plugin.settings.remoteDriveUrl = value.trim();
          await this.plugin.saveSettings();
        }));

    const remoteFolders = this.listFolders();
    new Setting(containerEl)
      .setName("Pasta de destino")
      .setDesc("Se nenhuma for escolhida, será usada Discursos/Importados. As subpastas remotas serão preservadas.")
      .addDropdown((dropdown) => {
        dropdown.addOption("", "Automática: Discursos/Importados");
        for (const folder of remoteFolders) dropdown.addOption(folder, folder);
        const current = this.plugin.settings.remoteDriveFolder;
        if (current && !remoteFolders.includes(current)) dropdown.addOption(current, current);
        dropdown.setValue(current);
        dropdown.onChange(async (folder) => {
          this.plugin.settings.remoteDriveFolder = folder;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Baixar da pasta pública")
      .setDesc("Baixa somente arquivos novos. Notas já importadas e suas alterações pessoais não são substituídas.")
      .addButton((button) => button
        .setCta()
        .setButtonText("Verificar e baixar")
        .onClick(async () => {
          button.setDisabled(true);
          try {
            await this.plugin.remoteDriveService.downloadNew();
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

    new Setting(containerEl)
      .setName("Modo de consulta")
      .setDesc("Mantém Discursos em leitura, com um botão flutuante para editar. O Índice Geral permanece sempre bloqueado.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.consultationMode)
        .onChange(async (enabled) => {
          this.plugin.settings.consultationMode = enabled;
          await this.plugin.saveSettings();
          this.plugin.refreshConsultationMode();
        }));
  }

  private renderCatalog(container: HTMLElement): void {
    container.empty();
    const folders = this.listFolders();

    for (const item of SUPPORTED_CATEGORIES) {
      const current = this.plugin.settings.categorySettings[item.key] ?? { enabled: false, folder: "" };
      const row = new Setting(container)
        .setName(item.name)
        .setDesc(`${item.path.join(" › ")} — pasta automática: ${item.defaultFolder}`);

      row.addToggle((toggle) => toggle
        .setTooltip("Incluir esta coleção nos downloads")
        .setValue(current.enabled)
        .onChange(async (enabled) => {
          this.plugin.settings.categorySettings[item.key] = { ...current, enabled };
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
            this.plugin.settings.categorySettings[item.key] = { enabled: true, folder };
            await this.plugin.saveSettings();
          });
        });
      }
    }
  }

  private listFolders(): string[] {
    return this.app.vault.getAllLoadedFiles()
      .filter((file): file is TFolder => file instanceof TFolder && file.path !== "/")
      .map((folder) => folder.path)
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
  }
}
