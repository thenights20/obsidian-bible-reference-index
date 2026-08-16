import fs from 'node:fs';

function mustReplace(source, pattern, replacement, label) {
  const next = typeof pattern === 'string'
    ? source.replace(pattern, replacement)
    : source.replace(pattern, replacement);
  if (next === source) throw new Error(`Patch não aplicado: ${label}`);
  return next;
}

let main = fs.readFileSync('main.js', 'utf8');
let styles = fs.readFileSync('styles.css', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

if (manifest.version === '0.9.32') {
  console.log('v0.9.32 já aplicada; nada a fazer.');
  process.exit(0);
}
if (manifest.version !== '0.9.31') {
  throw new Error(`Versão inesperada: ${manifest.version}. Esperado 0.9.31.`);
}

// Remove o CSS da antiga prévia/modal e dos links automáticos de versículos.
{
  const cssStart = main.indexOf("\\n\\n.indice-nights-scripture-link {");
  const cssEndMarker = "\\n}\\n\\n/* Miniaturas de transcrições";
  const cssEnd = main.indexOf(cssEndMarker, cssStart);
  if (cssStart < 0 || cssEnd < 0) throw new Error("CSS runtime de links bíblicos não encontrado.");
  main = main.slice(0, cssStart) + main.slice(cssEnd + 4);
}

const bookStart = main.indexOf('// src/book-scripture-links.ts');
const bookEnd = main.indexOf('// src/epub-import.ts', bookStart);
if (bookStart < 0 || bookEnd < 0) throw new Error('Seção book-scripture-links não encontrada.');
main = main.slice(0, bookStart) + `// src/book-scripture-links.ts
function removeLegacyBibleProtocolLinks(markdown) {
  return String(markdown ?? "").replace(
    /\\[([^\\]]+)\\]\\(obsidian:\\/\\/indice-nights-bible\\?ref=[^)]+\\)/g,
    "$1"
  );
}
function prepareBookStudyContent(content) {
  return synchronizeMiniIndex(removeLegacyBibleProtocolLinks(content));
}

` + main.slice(bookEnd);

main = mustReplace(
  main,
  `function synchronizeMiniIndex(content) {\n  var _a, _b;\n  const frontmatterMatch = /^---\\s*\\n[\\s\\S]*?\\n---\\s*\\n?/.exec(content);`,
  `function synchronizeMiniIndex(content) {\n  var _a, _b;\n  content = removeLegacyBibleProtocolLinks(content);\n  const frontmatterMatch = /^---\\s*\\n[\\s\\S]*?\\n---\\s*\\n?/.exec(content);`,
  'limpeza de links legados na sincronização'
);

const navStart = main.indexOf('async function citationBlockFor(app, path, reference) {');
const navEnd = main.indexOf('\nfunction libraryMetaFor', navStart);
if (navStart < 0 || navEnd < 0) throw new Error('Navegação de citação não encontrada.');
const navigation = `function blockContainsReference(block, reference) {
  if (!block || !reference) return false;
  return findReferencesInText(block).some((location) => location.reference.key === reference.key);
}
function citationCandidates(content) {
  const normalized = String(content ?? "").replace(/\\\\n(?=\\^[A-Za-z0-9_-]+)/g, "\\n");
  const markerRegex = /(?:^|\\n)\\^([A-Za-z0-9_-]+)[ \\t]*(?=\\n|$)/g;
  const markers = [...normalized.matchAll(markerRegex)];
  const candidates = [];

  for (let index = 0; index < markers.length; index += 1) {
    const marker = markers[index];
    const markerStart = marker.index ?? 0;
    const blockId = marker[1] ?? "";
    if (!blockId) continue;

    const regionStart = index > 0
      ? (markers[index - 1].index ?? 0) + markers[index - 1][0].length
      : 0;
    const region = normalized.slice(regionStart, markerStart);
    const blocks = region.split(/\\n{2,}/).map((value) => value.trim()).filter(Boolean);
    const paragraph = blocks.length ? blocks[blocks.length - 1] : region.trim();
    candidates.push({ blockId, paragraph, markerStart });
  }

  return { normalized, candidates };
}
async function citationBlockFor(app, path, reference, repairIfNeeded = true) {
  const file = app.vault.getAbstractFileByPath(path);
  if (!(file instanceof import_obsidian6.TFile)) return null;

  try {
    let content = await app.vault.cachedRead(file);
    let parsed = citationCandidates(content);

    const exact = parsed.candidates.find((candidate) => blockContainsReference(candidate.paragraph, reference));
    if (exact) return exact.blockId;

    // Se a nota for antiga, reconstrói os marcadores uma vez no próprio arquivo.
    // Assim não é necessário baixar a transcrição novamente para corrigir o salto.
    if (repairIfNeeded && findReferencesInText(content).some((location) => location.reference.key === reference.key)) {
      const repaired = synchronizeMiniIndex(content).content;
      if (repaired !== content) {
        await app.vault.modify(file, repaired);
        content = repaired;
      }

      parsed = citationCandidates(content);
      const repairedExact = parsed.candidates.find((candidate) => blockContainsReference(candidate.paragraph, reference));
      if (repairedExact) return repairedExact.blockId;
    }

    console.warn(
      "Indice Nights: referência encontrada no índice, mas o parágrafo exato não foi localizado",
      path,
      reference.display
    );
  } catch (error) {
    console.warn("Indice Nights: falha ao localizar o parágrafo da citação", path, reference.display, error);
  }

  return null;
}

async function openCitationTarget(app, path, reference, sourcePath = "", modEvent = false) {
  const blockId = await citationBlockFor(app, path, reference, true);
  const target = blockId ? \`\${path}#^\${blockId}\` : path;

  await app.workspace.openLinkText(target, sourcePath, modEvent);

  if (!blockId) {
    new import_obsidian6.Notice(
      \`Abri a transcrição, mas não consegui localizar o parágrafo exato de \${reference.display}.\`,
      5000
    );
  }
}
`;
main = main.slice(0, navStart) + navigation + main.slice(navEnd);

const scriptureStart = main.indexOf('// src/scripture-links.ts');
const scriptureEnd = main.indexOf('// src/main.ts', scriptureStart);
if (scriptureStart < 0 || scriptureEnd < 0) throw new Error('Seção scripture-links não encontrada.');
main = main.slice(0, scriptureStart) + main.slice(scriptureEnd);

main = mustReplace(
  main,
  `      // O próprio frontmatter não é exibido; links bíblicos/miniatura continuam processados.\n      this.plugin.prepareThumbnailLayout(reader);\n      linkBibleReferences(reader, this.app);`,
  `      // O próprio frontmatter não é exibido; a miniatura continua processada.\n      this.plugin.prepareThumbnailLayout(reader);`,
  'links bíblicos do leitor lateral'
);

main = mustReplace(
  main,
  `    __publicField(this, "contextOpenTimer", null);\n    __publicField(this, "scriptureObserver", null);\n    __publicField(this, "scriptureObserverTimer", null);`,
  `    __publicField(this, "contextOpenTimer", null);`,
  'campos do observer de escrituras'
);

const observerStart = main.indexOf('  startScriptureLinkObserver() {');
const observerEnd = main.indexOf('  ensureRuntimeStyles() {', observerStart);
if (observerStart < 0 || observerEnd < 0) throw new Error('Observer de escrituras não encontrado.');
main = main.slice(0, observerStart) + main.slice(observerEnd);

main = mustReplace(
  main,
  `      this.workspaceReady = true;\n      this.startScriptureLinkObserver();\n      this.scheduleScriptureLinkRefresh();`,
  `      this.workspaceReady = true;`,
  'inicialização do observer'
);

const protocolStart = main.indexOf('    this.registerObsidianProtocolHandler("indice-nights-bible"');
const protocolEnd = main.indexOf('    this.addCommand({\n      id: "baixar-novas-transcrições"', protocolStart);
if (protocolStart < 0 || protocolEnd < 0) throw new Error('Handler indice-nights-bible não encontrado.');
main = main.slice(0, protocolStart) + main.slice(protocolEnd);

main = mustReplace(
  main,
  `    this.registerMarkdownPostProcessor((element, context) => {\n      this.prepareThumbnailLayout(element);\n      linkBibleReferences(element, this.app);\n\n      const sourceFile = context?.sourcePath\n        ? this.app.vault.getAbstractFileByPath(context.sourcePath)\n        : null;\n\n      if (\n        sourceFile instanceof import_obsidian6.TFile &&\n        this.isScriptureLinkFile(sourceFile)\n      ) {\n        this.scheduleScriptureLinkRefresh(sourceFile);\n      }\n    });`,
  `    this.registerMarkdownPostProcessor((element) => {\n      this.prepareThumbnailLayout(element);\n    });`,
  'postprocessor de links bíblicos'
);

main = mustReplace(
  main,
  `    this.registerEvent(this.app.workspace.on("layout-change", () => {\n      this.updateTranscriptViewClasses();\n      this.scheduleScriptureLinkRefresh();\n    }));`,
  `    this.registerEvent(this.app.workspace.on("layout-change", () => {\n      this.updateTranscriptViewClasses();\n    }));`,
  'refresh de links no layout-change'
);

main = main.replace(
  `\n      if (\n        file &&\n        this.isScriptureLinkFile(file)\n      ) {\n        this.scheduleScriptureLinkRefresh(file);\n      }\n`,
  '\n'
);
main = main.replace('\n    this.stopScriptureLinkObserver();\n', '\n');

const isLinkStart = main.indexOf('  isScriptureLinkFile(file) {');
const isContextStart = main.indexOf('  isContextBibleFile(file) {', isLinkStart);
if (isLinkStart < 0 || isContextStart < 0) throw new Error('isScriptureLinkFile não encontrado.');
main = main.slice(0, isLinkStart) + main.slice(isContextStart);

const refreshStart = main.indexOf('  refreshScriptureLinksInOpenTranscripts(targetFile = null) {');
const saveStart = main.indexOf('  async saveSettings() {', refreshStart);
if (refreshStart < 0 || saveStart < 0) throw new Error('Rotinas de refresh de links não encontradas.');
main = main.slice(0, refreshStart) + main.slice(saveStart);

styles = mustReplace(
  styles,
  /\n*\.indice-nights-scripture-link \{.*?\.indice-nights-verse-actions a \{.*?\}\s*/s,
  '\n',
  'CSS principal de links bíblicos/JW Library'
);

manifest.version = '0.9.32';
fs.writeFileSync('main.js', main, 'utf8');
fs.writeFileSync('styles.css', styles, 'utf8');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log('Patch v0.9.32 aplicado com sucesso.');
