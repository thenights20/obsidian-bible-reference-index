# Bible Reference Index

Plugin comunitário para o Obsidian que cria um índice leve das referências bíblicas cadastradas nas propriedades das notas.

## Recursos

- Menu com os 66 livros em ordem bíblica.
- Pesquisa por referência, nome do discurso ou subpasta.
- Pesquisa global integrada em todos os 66 livros.
- Links internos para as notas relacionadas.
- Atualização automática ao criar, alterar, renomear ou excluir notas.
- Seleção do livro armazenada localmente em cada aparelho.
- Renderização progressiva para acervos grandes e dispositivos móveis.
- Interface responsiva projetada para desktop e dispositivos móveis.
- Não depende de Dataview ou Meta Bind.

## Como usar

Crie uma nota e adicione:

````markdown
# 📚 Índice de Textos Bíblicos

```indice-biblico
pasta: Discursos
propriedade: textos
```
````

O plugin procura arquivos Markdown dentro da pasta informada, incluindo todas as subpastas. A propriedade pode ser uma lista YAML:

```yaml
---
textos:
  - João 3:16
  - Salmos 119:160
  - 1 Tessalonicenses 5:21
---
```

Também é possível personalizar o título e a quantidade inicial de referências:

````markdown
```indice-biblico
pasta: Discursos
propriedade: textos
titulo: Índice de Textos Bíblicos
exibir-titulo: sim
quantidade: 75
```
````

O título interno fica oculto por padrão para não duplicar o título da nota. Para exibi-lo, adicione `exibir-titulo: sim` ao bloco.

## Seleção por aparelho

Escolher um livro não modifica a nota nem o frontmatter. A seleção fica armazenada no próprio aparelho. Dessa forma, dois aparelhos podem abrir a mesma nota e consultar livros diferentes sem gerar conflitos de sincronização.

## Instalação para testes com BRAT

1. Instale e ative o plugin comunitário **BRAT**.
2. Abra a paleta de comandos.
3. Execute `BRAT: Add a beta plugin for testing`.
4. Informe o endereço do repositório deste plugin.
5. Ative **Bible Reference Index** em `Configurações → Plugins comunitários`.

## Instalação manual

Copie `main.js`, `manifest.json` e `styles.css` para:

```text
SEU_COFRE/.obsidian/plugins/bible-reference-index/
```

Reinicie o Obsidian e ative o plugin.

## Privacidade

O plugin funciona inteiramente dentro do Obsidian. Ele não envia notas, propriedades ou pesquisas para serviços externos.

## Licença

Distribuído sob a licença MIT.
