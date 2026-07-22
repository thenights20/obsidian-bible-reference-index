# Histórico de versões

## 0.5.2

- Corrige a publicação pelo navegador quando arquivos antigos permanecem no repositório.
- Publicação automática do release ao enviar alterações para a branch principal.

## 0.5.1

- Documentação, descrições e interface tornadas neutras e voltadas ao uso pessoal.
- Novas transcrições passam a usar a propriedade genérica `id_origem`.
- Notas antigas são reconhecidas e migradas sem provocar novos downloads.
- O link da fonte de vídeo deixa de ser gravado no conteúdo das novas notas.

## 0.5.0

- Nome público alterado para `Indice Nights`, compatível com as regras do diretório comunitário.
- Importação de transcrições por link público de pasta do Google Drive, sem login e sem chave de API.
- Leitura recursiva de arquivos TXT, Markdown e Documentos Google, preservando as subpastas.
- Identificação por `id_remoto`, sem sobrescrever notas já importadas nem alterações pessoais.
- Notas remotas recebem título, orador quando reconhecido, propriedade `textos`, mini-índice e link do arquivo original.
- Identificador técnico `bible-reference-index` preservado para manter a continuidade das atualizações.

## 0.4.2

- Mantém a pasta do índice geral no topo do Explorador com o nome `00 - Índice Geral`.
- Migra automaticamente a antiga pasta `Índice Geral`, preservando a nota e seu conteúdo.

## 0.4.1

- Corrige a atualização automática da propriedade `textos` e do mini-índice durante a edição.
- Corrige a atualização das transcrições salvas em pastas personalizadas fora de `Discursos`.
- Também atualiza e migra notas antigas quando elas são abertas.
- Substitui o mini-índice antigo por um quadro compacto e integrado ao visual do Obsidian.
- Remove os comentários técnicos que apareciam no modo de edição.
- Impede que o Traverture confunda os links internos do mini-índice com links para a Bíblia.
- Mantém o clique do mini-índice direcionado ao parágrafo correspondente da nota.

## 0.4.0

- Referências bíblicas escritas nas notas transformadas automaticamente em links para o aplicativo da Bíblia.
- Propriedade `textos` e mini-índice sincronizados automaticamente com o conteúdo da nota.
- Remoção automática de referências duplicadas.
- Propriedades `categoria` e `subcategoria` removidas das novas transcrições e das notas atualizadas.
- Mini-índice simplificado, sem marcadores coloridos nas extremidades.
- Pesquisa opcional dentro do conteúdo completo das notas, com uma frase de contexto por resultado.
- Lista de coleções exibida integralmente dentro de uma caixa, sem barra de rolagem própria.

## 0.3.1

- Catálogo simplificado para as sete coleções escolhidas.
- Pastas de destino automáticas quando nenhuma pasta personalizada for informada.
- Mini-índice em ordem bíblica dentro de cada transcrição, com links para os parágrafos citados.
- Atualização dos mini-índices das transcrições já existentes ao verificar a coleção correspondente.
- Criação automática da pasta e da nota do índice geral.
- Remoção das três opções técnicas da tela principal de configurações.

## 0.3.0

- Biblioteca local de transcrições em português do Brasil.
- Descoberta automática das categorias e subcategorias públicas de vídeos.
- Seleção independente das subcategorias e das pastas de destino em cada aparelho.
- Download somente de novas transcrições, com identificação por uma propriedade interna de origem.
- Criação de notas com título original, orador quando identificado com segurança, categoria, subcategoria, data oficial de publicação e referências bíblicas.
- Nome físico do arquivo tratado para funcionar no Windows, OneDrive, Dropbox e iPad.
- Interface e documentação visíveis ao usuário em português.

## 0.2.1

- Nome público ajustado às regras de nomenclatura do diretório comunitário do Obsidian.

## 0.2.0

- Pesquisa global por referência, discurso e subpasta em todo o acervo.
- Resultados agrupados na ordem dos 66 livros.
- Título interno oculto por padrão para evitar duplicação com o título da nota.
- Autor atualizado para `the_nights`.

## 0.1.0

- Primeira versão para testes.
- Índice dos 66 livros em ordem bíblica.
- Pesquisa de referências e notas.
- Cache incremental baseado nos metadados do Obsidian.
- Seleção local e independente por aparelho.
- Interface responsiva para desktop e dispositivos móveis.
# 0.6.0

- Adiciona modo de consulta para discursos, com botão flutuante de edição.
- Mantém o Índice Geral bloqueado em modo de leitura.
- Exibe referências bíblicas em uma prévia interna antes de oferecer a abertura em outro aplicativo.
- Mantém as referências como texto simples no arquivo Markdown.
- Aguarda 3,5 segundos após a digitação antes de atualizar propriedades e mini-índice.
- Baixa miniaturas para novas transcrições e permite completar imagens ausentes nas notas existentes.
