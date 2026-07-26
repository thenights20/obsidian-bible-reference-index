# Indice Nights v0.8.10

## Séries oficiais do JW.ORG

- Corrige a origem das séries para usar as categorias oficiais específicas do JW.ORG.
- `Busque por Tesouros` usa diretamente `SeriesDigForTreasures`.
- `Exemplos para Nós` usa diretamente `SeriesLearnFromThem`.
- `Ferro Afia o Ferro` usa diretamente `SeriesIronSharpens`.
- `Imite a Sua Fé` usa diretamente `SeriesImitateFaith`.
- `Como Ser Feliz no Casamento?` usa diretamente `SeriesHappyMarriage`.
- `Introdução aos livros da Bíblia` continua sendo resolvida exclusivamente dentro de `VODSeries`.
- Remove a busca ampla em outras categorias e o fallback por título para séries.
- Migra automaticamente as preferências das chaves antigas para as novas.
- Migra pastas antigas equivalentes sem apagar conteúdo do usuário.

## Layout

- Melhora a legibilidade do painel de Séries em telas de desktop.
- A alteração visual é limitada ao aplicativo desktop (`body:not(.is-mobile)`), preservando o layout do iPad e do iPhone.
