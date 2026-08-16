import fs from 'node:fs';

function mustReplace(source, pattern, replacement, label) {
  const next = source.replace(pattern, replacement);
  if (next === source) throw new Error(`Patch não aplicado: ${label}`);
  return next;
}

let main = fs.readFileSync('main.js', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

if (manifest.version === '0.9.33') {
  console.log('v0.9.33 já aplicada; nada a fazer.');
  process.exit(0);
}
if (manifest.version !== '0.9.32') {
  throw new Error(`Versão inesperada: ${manifest.version}. Esperado 0.9.32.`);
}

const commandAnchor = '    this.registerMarkdownCodeBlockProcessor("indice-biblico", (source, el, context) => {';
const updaterCommand = `    this.addCommand({
      id: "atualizar-versao-de-teste",
      name: "Atualizar versão de teste",
      callback: () => {
        void this.updateTestVersion();
      }
    });

`;
main = mustReplace(main, commandAnchor, updaterCommand + commandAnchor, 'comando Atualizar versão de teste');

const saveAnchor = '  async saveSettings() {';
const updaterMethod = `  async updateTestVersion() {
    const files = ["main.js", "manifest.json", "styles.css"];
    const baseUrl = "https://raw.githubusercontent.com/thenights20/obsidian-bible-reference-index/dev";
    const cacheBust = Date.now();

    try {
      new import_obsidian6.Notice("Índice Nights: verificando a versão de teste…", 2500);
      const downloaded = {};

      for (const fileName of files) {
        const response = await fetch(\`${baseUrl}/\${fileName}?v=\${cacheBust}\`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(\`Falha ao baixar \${fileName}: HTTP \${response.status}\`);
        }
        downloaded[fileName] = await response.text();
      }

      const nextManifest = JSON.parse(downloaded["manifest.json"]);
      if (nextManifest.id !== this.manifest.id) {
        throw new Error("O manifest da versão de teste pertence a outro plugin.");
      }

      if (!downloaded["main.js"].includes("IndiceNightsPlugin") && !downloaded["main.js"].includes("Índice Nights")) {
        throw new Error("main.js da versão de teste não passou na validação básica.");
      }

      const pluginDir = \`${this.app.vault.configDir}/plugins/\${this.manifest.id}\`;
      for (const fileName of files) {
        await this.app.vault.adapter.write(\`${pluginDir}/\${fileName}\`, downloaded[fileName]);
      }

      const version = nextManifest.version ?? "nova";
      new import_obsidian6.Notice(
        \`Índice Nights \${version} de teste instalada. Recarregue o Obsidian para aplicar.\`,
        7000
      );
    } catch (error) {
      console.error("Índice Nights: falha ao atualizar versão de teste", error);
      new import_obsidian6.Notice(
        \`Não foi possível atualizar a versão de teste: \${error instanceof Error ? error.message : String(error)}\`,
        8000
      );
    }
  }

`;
const saveIndex = main.lastIndexOf(saveAnchor);
if (saveIndex < 0) throw new Error('Método saveSettings não encontrado.');
main = main.slice(0, saveIndex) + updaterMethod + main.slice(saveIndex);

manifest.version = '0.9.33';
fs.writeFileSync('main.js', main, 'utf8');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log('Patch v0.9.33 aplicado com sucesso.');
