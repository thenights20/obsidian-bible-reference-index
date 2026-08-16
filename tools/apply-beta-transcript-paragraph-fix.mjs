import fs from 'node:fs';

let main = fs.readFileSync('main.js', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));

const pattern = /  const paragraphs = \[\];\n  let paragraph = "";\n  for \(const cue of cues\) \{[\s\S]*?\n  if \(paragraph\.trim\(\)\) paragraphs\.push\(paragraph\.trim\(\)\);\n  return paragraphs;/;

if (!pattern.test(main)) {
  throw new Error('Bloco de montagem de parágrafos não encontrado em main.js');
}

const replacement = `  const paragraphs = [];
  let paragraph = "";
  const endsSentence = (text) => /[.!?…][”'’\"]?$/.test(text.trim());

  for (const cue of cues) {
    const beginsNewThought = /^(Primeiro|Segundo|Terceiro|Por fim|Agora|Vamos|Então|Mas|Assim|Qual|Como|O que)\\b/i.test(cue);

    // Nunca cria quebra no meio de uma frase. Mesmo se o parágrafo já estiver longo,
    // só permite separar quando o conteúdo anterior terminou em ponto, interrogação,
    // exclamação ou reticências.
    if (
      paragraph &&
      endsSentence(paragraph) &&
      ((beginsNewThought && paragraph.length >= 220) || paragraph.length >= 620)
    ) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }

    paragraph += \`\${paragraph ? " " : ""}\${cue}\`;

    // Mantém o critério de tamanho, mas a quebra só acontece no fim de uma sentença.
    // Vírgulas, dois-pontos, ponto e vírgula e travessões nunca provocam nova linha.
    if (paragraph.length >= 360 && endsSentence(cue)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
  }

  if (paragraph.trim()) paragraphs.push(paragraph.trim());
  return paragraphs;`;

main = main.replace(pattern, replacement);
manifest.version = '0.9.34-beta.4';

fs.writeFileSync('main.js', main, 'utf8');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log('0.9.34-beta.4 aplicada: transcrições só quebram parágrafo ao final de sentença.');
