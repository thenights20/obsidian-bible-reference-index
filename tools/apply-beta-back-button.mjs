import fs from 'node:fs';

let main = fs.readFileSync('main.js', 'utf8');
let styles = fs.readFileSync('styles.css', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

// Beta 2: corrige o caso em que sourcePath chega vazio ao abrir uma transcrição.
// Usa como fallback o arquivo ativo antes da navegação e instala o botão em mais de uma tentativa.
if (main.includes('indice-nights-back-to-index')) {
  main = main.replace(
    /function indiceNightsCaptureIndexReturn\(sourcePath\) \{[\s\S]*?\n\}/,
    `function indiceNightsCaptureIndexReturn(app, sourcePath) {
  const scroller = indiceNightsActiveScrollContainer();
  const activePath = app.workspace.getActiveFile()?.path || "";
  return {
    sourcePath: sourcePath || activePath,
    scrollTop: scroller instanceof HTMLElement ? scroller.scrollTop : 0
  };
}`
  );

  main = main.replace(
    'const returnContext = indiceNightsCaptureIndexReturn(sourcePath);',
    'const returnContext = indiceNightsCaptureIndexReturn(app, sourcePath);'
  );

  main = main.replace(
    'indiceNightsInstallBackButton(app, returnContext);',
    `indiceNightsInstallBackButton(app, returnContext);
  window.setTimeout(() => indiceNightsInstallBackButton(app, returnContext), 80);
  window.setTimeout(() => indiceNightsInstallBackButton(app, returnContext), 250);`
  );

  // Estilo inline de segurança: o botão continua visível mesmo se o CSS externo ainda não recarregou.
  main = main.replace(
    "button.textContent = '← Voltar ao índice';",
    `button.textContent = '← Voltar ao índice';
  Object.assign(button.style, {
    position: 'fixed',
    top: '58px',
    right: '22px',
    zIndex: '2147483647',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '9px 13px',
    borderRadius: '999px',
    border: '1px solid var(--background-modifier-border-hover)',
    background: 'var(--background-primary-alt)',
    color: 'var(--text-normal)',
    boxShadow: '0 6px 20px rgba(0,0,0,.28)',
    fontWeight: '600',
    cursor: 'pointer'
  });`
  );

  manifest.version = '0.9.34-beta.2';
  fs.writeFileSync('main.js', main, 'utf8');
  fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log('Beta 0.9.34-beta.2: contexto e visibilidade do botão corrigidos.');
  process.exit(0);
}

const navPattern = /async function openCitationTarget\(app, path, reference, sourcePath = "", modEvent = false\) \{[\s\S]*?\n\}\n\nfunction libraryMetaFor/;
if (!navPattern.test(main)) throw new Error('Função openCitationTarget não encontrada.');

const replacement = [
  'function indiceNightsActiveScrollContainer() {',
  "  return document.querySelector('.workspace-leaf.mod-active .markdown-preview-view') ||",
  "    document.querySelector('.workspace-leaf.mod-active .view-content');",
  '}',
  '',
  'function indiceNightsCaptureIndexReturn(app, sourcePath) {',
  '  const scroller = indiceNightsActiveScrollContainer();',
  '  const activePath = app.workspace.getActiveFile()?.path || "";',
  '  return {',
  '    sourcePath: sourcePath || activePath,',
  '    scrollTop: scroller instanceof HTMLElement ? scroller.scrollTop : 0',
  '  };',
  '}',
  '',
  'function indiceNightsRemoveBackButton() {',
  "  document.querySelectorAll('.indice-nights-back-to-index').forEach((el) => el.remove());",
  '}',
  '',
  'function indiceNightsRestoreIndexPosition(app, context) {',
  '  const restore = () => {',
  '    const scroller = indiceNightsActiveScrollContainer();',
  '    if (scroller instanceof HTMLElement) scroller.scrollTop = context.scrollTop || 0;',
  '  };',
  '  window.setTimeout(restore, 40);',
  '  window.setTimeout(restore, 180);',
  '  window.setTimeout(restore, 420);',
  '}',
  '',
  'function indiceNightsInstallBackButton(app, context) {',
  '  indiceNightsRemoveBackButton();',
  '  if (!context?.sourcePath) return;',
  "  const button = document.createElement('button');",
  "  button.className = 'indice-nights-back-to-index';",
  "  button.type = 'button';",
  "  button.setAttribute('aria-label', 'Voltar ao índice na posição anterior');",
  "  button.textContent = '← Voltar ao índice';",
  "  Object.assign(button.style, { position:'fixed', top:'58px', right:'22px', zIndex:'2147483647', display:'inline-flex', alignItems:'center', padding:'9px 13px', borderRadius:'999px', border:'1px solid var(--background-modifier-border-hover)', background:'var(--background-primary-alt)', color:'var(--text-normal)', boxShadow:'0 6px 20px rgba(0,0,0,.28)', fontWeight:'600', cursor:'pointer' });",
  "  button.addEventListener('click', async () => {",
  '    button.disabled = true;',
  '    try {',
  "      await app.workspace.openLinkText(context.sourcePath, '', false);",
  '      indiceNightsRestoreIndexPosition(app, context);',
  '      indiceNightsRemoveBackButton();',
  '    } catch (error) {',
  '      button.disabled = false;',
  "      console.warn('Indice Nights: falha ao voltar ao índice', error);",
  '    }',
  '  });',
  '  document.body.appendChild(button);',
  '}',
  '',
  'async function openCitationTarget(app, path, reference, sourcePath = "", modEvent = false) {',
  '  const returnContext = indiceNightsCaptureIndexReturn(app, sourcePath);',
  '  const blockId = await citationBlockFor(app, path, reference, true);',
  '  const target = blockId ? `${path}#^${blockId}` : path;',
  '  await app.workspace.openLinkText(target, sourcePath, modEvent);',
  '  indiceNightsInstallBackButton(app, returnContext);',
  '  window.setTimeout(() => indiceNightsInstallBackButton(app, returnContext), 80);',
  '  window.setTimeout(() => indiceNightsInstallBackButton(app, returnContext), 250);',
  '  if (!blockId) {',
  '    new import_obsidian6.Notice(`Abri a transcrição, mas não consegui localizar o parágrafo exato de ${reference.display}.`, 5000);',
  '  }',
  '}',
  '',
  'function libraryMetaFor'
].join('\n');

main = main.replace(navPattern, replacement);
styles += '\n.indice-nights-back-to-index{position:fixed!important;top:58px!important;right:22px!important;z-index:2147483647!important}\n';
manifest.version = '0.9.34-beta.2';
fs.writeFileSync('main.js', main, 'utf8');
fs.writeFileSync('styles.css', styles, 'utf8');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log('Beta 0.9.34-beta.2 aplicada.');
