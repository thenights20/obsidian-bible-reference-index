import fs from 'node:fs';

let main = fs.readFileSync('main.js', 'utf8');
let styles = fs.readFileSync('styles.css', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

const installPattern = /function indiceNightsInstallBackButton\(app, context\) \{[\s\S]*?\n\}\n\nasync function openCitationTarget/;
if (!installPattern.test(main)) throw new Error('Bloco do botão voltar não encontrado.');

const installReplacement = `function indiceNightsInstallBackButton(app, context) {
  indiceNightsRemoveBackButton();
  if (!context?.sourcePath) {
    console.warn('Indice Nights: sem caminho de retorno para o índice');
    return;
  }

  window.__indiceNightsReturnContext = context;
  const button = document.createElement('button');
  button.className = 'indice-nights-back-to-index';
  button.type = 'button';
  button.setAttribute('aria-label', 'Voltar ao índice na posição anterior');
  button.textContent = '← Voltar ao índice';
  Object.assign(button.style, {
    position: 'fixed', top: '54px', right: '22px', zIndex: '2147483647',
    display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 14px',
    borderRadius: '999px', border: '1px solid var(--interactive-accent)',
    background: 'var(--background-primary)', color: 'var(--text-accent)',
    boxShadow: '0 8px 28px rgba(0,0,0,.35)', fontWeight: '700', fontSize: '13px',
    cursor: 'pointer', opacity: '1', visibility: 'visible', pointerEvents: 'auto'
  });

  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      await app.workspace.openLinkText(context.sourcePath, '', false);
      indiceNightsRestoreIndexPosition(app, context);
      window.__indiceNightsReturnContext = null;
      indiceNightsRemoveBackButton();
    } catch (error) {
      button.disabled = false;
      console.warn('Indice Nights: falha ao voltar ao índice', error);
    }
  });
  document.body.appendChild(button);
}

async function openCitationTarget`;
main = main.replace(installPattern, installReplacement);

const openPattern = /await app\.workspace\.openLinkText\(target, sourcePath, modEvent\);\n  indiceNightsInstallBackButton\(app, returnContext\);\n  window\.setTimeout\(\(\) => indiceNightsInstallBackButton\(app, returnContext\), 80\);\n  window\.setTimeout\(\(\) => indiceNightsInstallBackButton\(app, returnContext\), 250\);/;
if (!openPattern.test(main)) throw new Error('Trecho de abertura da citação não encontrado.');
main = main.replace(openPattern, `window.__indiceNightsReturnContext = returnContext;
  await app.workspace.openLinkText(target, sourcePath, modEvent);
  const reinstall = () => {
    const saved = window.__indiceNightsReturnContext || returnContext;
    indiceNightsInstallBackButton(app, saved);
  };
  reinstall();
  window.requestAnimationFrame(reinstall);
  window.setTimeout(reinstall, 100);
  window.setTimeout(reinstall, 350);
  window.setTimeout(reinstall, 900);`);

const searchPattern = /  async searchNoteContents\(search, limit = 100\) \{[\s\S]*?\n  \}\n  sortedReferences\(references\) \{/;
if (!searchPattern.test(main)) throw new Error('searchNoteContents não encontrada.');
const searchReplacement = `  async searchNoteContents(search, limit = 500) {
    this.ensureInitialized();
    const query = normalizeText(search);
    if (!query) return [];
    const terms = query.split(/\\s+/).map((term) => term.trim()).filter(Boolean);
    const recordsByPath = new Map(this.notes);

    for (const file of this.app.vault.getMarkdownFiles()) {
      if (!this.accepts(file.path) || recordsByPath.has(file.path)) continue;
      recordsByPath.set(file.path, {
        file,
        note: { path: file.path, title: file.basename, section: sectionFor(file.path, this.config.folder) },
        references: []
      });
    }

    const records = [...recordsByPath.values()];
    const matches = [];
    const batchSize = 20;
    for (let start = 0; start < records.length && matches.length < limit; start += batchSize) {
      const batch = records.slice(start, start + batchSize);
      const contents = await Promise.all(batch.map(async (record) => {
        const markdown = await this.app.vault.cachedRead(record.file);
        const clean = markdown
          .replace(/^---\\s*\\n[\\s\\S]*?\\n---\\s*\\n?/, '')
          .replace(/<!-- mini-indice-inicio -->[\\s\\S]*?<!-- mini-indice-fim -->/g, '')
          .replace(new RegExp('\\x60{3}[\\\\s\\\\S]*?\\x60{3}', 'g'), ' ')
          .replace(/!\\[([^\\]]*)\\]\\([^)]*\\)/g, '$1')
          .replace(/\\[([^\\]]+)\\]\\([^)]*\\)/g, '$1')
          .replace(/\\[\\[[^\\]|]+\\|([^\\]]+)\\]\\]/g, '$1')
          .replace(/\\[\\[([^\\]]+)\\]\\]/g, '$1')
          .replace(/^\\^[-\\w]+\\s*$/gm, '')
          .replace(/^#{1,6}\\s+/gm, '')
          .replace(/^>\\s?/gm, '')
          .replace(/[\\*_~\\x60]/g, '')
          .replace(/\\s+/g, ' ')
          .trim();
        return { clean, normalized: normalizeText(clean) };
      }));

      for (let index = 0; index < batch.length && matches.length < limit; index += 1) {
        const record = batch[index];
        const content = contents[index];
        if (!record || !content) continue;
        if (!terms.every((term) => content.normalized.includes(term))) continue;

        const rawSentences = content.clean.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) || [content.clean];
        let bestSentence = rawSentences.find((sentence) => {
          const normalized = normalizeText(sentence);
          return terms.every((term) => normalized.includes(term));
        });
        if (!bestSentence) {
          bestSentence = rawSentences.find((sentence) => terms.some((term) => normalizeText(sentence).includes(term))) || content.clean;
        }
        bestSentence = bestSentence.trim();
        if (bestSentence.length > 360) bestSentence = bestSentence.slice(0, 357).trimEnd() + '…';
        matches.push({ ...record.note, sentence: bestSentence });
      }
    }

    return matches.sort((a, b) => a.section.localeCompare(b.section, 'pt-BR') || a.title.localeCompare(b.title, 'pt-BR'));
  }
  sortedReferences(references) {`;
main = main.replace(searchPattern, searchReplacement);

main = main.replace(/\n      const arrow = noteRow\.createSpan\(\{ cls: "bri-note-arrow" \}\);\n      \(0, import_obsidian\.setIcon\)\(arrow, "chevron-right"\);\n\n      link\.addEventListener/, '\n      link.addEventListener');
main = main.replace('const matches = await this.index.searchNoteContents(query, 100);', 'const matches = await this.index.searchNoteContents(query, 500);');

manifest.version = '0.9.34-beta.3';
styles += '\n\n/* Beta 0.9.34-beta.3: botão voltar reforçado no desktop. */\n.indice-nights-back-to-index { position:fixed !important; top:54px !important; right:22px !important; z-index:2147483647 !important; display:inline-flex !important; visibility:visible !important; opacity:1 !important; }\n';

fs.writeFileSync('main.js', main, 'utf8');
fs.writeFileSync('styles.css', styles, 'utf8');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log('0.9.34-beta.3 aplicada: botão reforçado + pesquisa global aprimorada.');
