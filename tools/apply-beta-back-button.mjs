import fs from 'node:fs';

let main = fs.readFileSync('main.js', 'utf8');
let styles = fs.readFileSync('styles.css', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

if (main.includes('indice-nights-back-to-index')) {
  console.log('Botão de voltar ao índice já aplicado.');
  process.exit(0);
}

const navPattern = /async function openCitationTarget\(app, path, reference, sourcePath = "", modEvent = false\) \{[\s\S]*?\n\}\n\nfunction libraryMetaFor/;
const match = main.match(navPattern);
if (!match) throw new Error('Função openCitationTarget não encontrada.');

const replacement = `function indiceNightsActiveScrollContainer() {
  return document.querySelector('.workspace-leaf.mod-active .markdown-preview-view') ||
    document.querySelector('.workspace-leaf.mod-active .view-content');
}

function indiceNightsCaptureIndexReturn(sourcePath) {
  const scroller = indiceNightsActiveScrollContainer();
  return {
    sourcePath,
    scrollTop: scroller instanceof HTMLElement ? scroller.scrollTop : 0
  };
}

function indiceNightsRemoveBackButton() {
  document.querySelectorAll('.indice-nights-back-to-index').forEach((el) => el.remove());
}

function indiceNightsRestoreIndexPosition(app, context) {
  const restore = () => {
    const scroller = indiceNightsActiveScrollContainer();
    if (scroller instanceof HTMLElement) scroller.scrollTop = context.scrollTop || 0;
  };
  window.setTimeout(restore, 40);
  window.setTimeout(restore, 180);
  window.setTimeout(restore, 420);
}

function indiceNightsInstallBackButton(app, context) {
  indiceNightsRemoveBackButton();
  if (!context?.sourcePath) return;

  const button = document.createElement('button');
  button.className = 'indice-nights-back-to-index';
  button.type = 'button';
  button.setAttribute('aria-label', 'Voltar ao índice na posição anterior');
  button.textContent = '← Voltar ao índice';
  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      await app.workspace.openLinkText(context.sourcePath, '', false);
      indiceNightsRestoreIndexPosition(app, context);
      indiceNightsRemoveBackButton();
    } catch (error) {
      button.disabled = false;
      console.warn('Indice Nights: falha ao voltar ao índice', error);
    }
  });
  document.body.appendChild(button);
}

async function openCitationTarget(app, path, reference, sourcePath = "", modEvent = false) {
  const returnContext = indiceNightsCaptureIndexReturn(sourcePath);
  const blockId = await citationBlockFor(app, path, reference, true);
  const target = blockId ? \`${path}#^\${blockId}\` : path;

  await app.workspace.openLinkText(target, sourcePath, modEvent);
  indiceNightsInstallBackButton(app, returnContext);

  if (!blockId) {
    new import_obsidian6.Notice(
      \`Abri a transcrição, mas não consegui localizar o parágrafo exato de \${reference.display}.\`,
      5000
    );
  }
}

function libraryMetaFor`;

main = main.replace(navPattern, replacement);

styles += `\n\n/* Beta 0.9.34: botão flutuante para voltar ao índice mantendo a posição. */\n.indice-nights-back-to-index {\n  position: fixed;\n  top: calc(var(--header-height, 40px) + 14px);\n  right: 22px;\n  z-index: 9999;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 0.8rem;\n  border: 1px solid var(--background-modifier-border-hover);\n  border-radius: 999px;\n  background: var(--background-primary-alt);\n  color: var(--text-normal);\n  box-shadow: 0 6px 20px rgba(0,0,0,.22);\n  font-size: var(--font-ui-small);\n  font-weight: var(--font-semibold);\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n}\n.indice-nights-back-to-index:hover {\n  background: var(--background-modifier-hover);\n  color: var(--text-accent);\n}\n.indice-nights-back-to-index:disabled { opacity:.6; cursor:wait; }\n@media (max-width: 600px) {\n  .indice-nights-back-to-index {\n    top: 54px;\n    right: 12px;\n    padding: .5rem .7rem;\n  }\n}\n`;

manifest.version = '0.9.34-beta.1';
fs.writeFileSync('main.js', main, 'utf8');
fs.writeFileSync('styles.css', styles, 'utf8');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log('Beta 0.9.34-beta.1 aplicada com botão Voltar ao índice.');
