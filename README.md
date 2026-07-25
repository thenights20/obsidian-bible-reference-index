# Indice Nights

Plugin comunitário para o Obsidian que cria um índice leve das referências bíblicas e uma biblioteca local de transcrições em português do Brasil.

## Recursos

- Menu com os 66 livros em ordem bíblica.
- Pesquisa global por referência, nome do discurso ou subpasta.
- Links internos para as notas relacionadas.
- Atualização automática do índice ao criar, alterar, renomear ou excluir notas.
- Seleção do livro armazenada localmente em cada aparelho.
- Sete coleções organizadas: Discursos, Adorações Matinais, Formaturas, Reuniões Anuais e Congressos de 2020, 2021 e 2022.
- Escolha das coleções e, opcionalmente, das pastas de destino em cada aparelho.
- Download somente das transcrições novas; notas existentes são reconhecidas por `id_origem`.
- Importação recursiva de arquivos TXT, Markdown e Documentos Google por um link público de pasta do Google Drive, sem API e sem login.
- Subpastas públicas preservadas e notas existentes reconhecidas por `id_remoto`, sem sobrescrever alterações pessoais.
- Criação de notas em Markdown com propriedades prontas.
- Mini-índice em ordem bíblica dentro da transcrição, com links para os parágrafos citados.
- Pasta e nota do índice geral criadas automaticamente.
- Referências escritas no conteúdo transformadas em links para o aplicativo da Bíblia.
- Propriedade `textos` e mini-índice atualizados automaticamente ao editar a nota.
- Pesquisa no conteúdo completo das notas, com uma frase de contexto por resultado.
- Compatível com computador e dispositivos móveis.
- Não depende de Dataview nem Meta Bind.

## Propriedades das transcrições

Uma nota baixada pode conter:

```yaml
---
id_origem: "video-139_T_2"
orador: "Robert Luccioni"
data_publicacao: 2026-07-07
textos:
  - "João 3:16"
---
```

`orador` só é incluído quando o nome puder ser identificado com segurança. `data_publicacao` só é incluída quando o servidor oficial fornecer uma data válida. As propriedades `categoria` e `subcategoria` não são utilizadas, pois a organização já está representada pelas pastas.

Quando uma referência é escrita ou apagada no corpo da nota, o plugin sincroniza automaticamente a propriedade `textos` e o mini-índice. Referências duplicadas são eliminadas.

## Como baixar transcrições

1. Abra `Configurações → Indice Nights`.
2. Ative apenas as coleções desejadas.
3. Se quiser, escolha uma pasta personalizada. Se não escolher, o plugin cria a pasta automaticamente.
4. Confira a organização indicada abaixo do nome de cada coleção.
5. Clique em **Verificar e baixar**.

O plugin não baixa vídeos. Ele baixa somente a legenda disponível e cria uma nota local. Uma transcrição já existente não é baixada novamente.

Ao verificar uma coleção, notas antigas que ainda não possuem mini-índice recebem os links internos sem que as palavras da transcrição sejam reescritas.

## Como importar uma pasta pública

1. No Google Drive, compartilhe a pasta como **Qualquer pessoa com o link → Leitor**.
2. Abra `Configurações → Indice Nights`.
3. Cole o link em **Transcrições de uma pasta pública**.
4. Escolha uma pasta de destino ou deixe a opção automática `Discursos/Importados`.
5. Clique em **Verificar e baixar**.

O plugin percorre as subpastas e importa arquivos `.txt`, `.md`, `.markdown` e Documentos Google. Ele não pede conta, senha nem chave de API. Arquivos já importados não são substituídos. Essa integração depende da página pública do Google Drive; se o Google mudar essa página, o plugin exibirá um erro claro em vez de alterar suas notas.

## Índice geral automático

O plugin cria automaticamente:

```text
00 - Índice Geral/Índice Geral de Textos Bíblicos.md
```

Essa nota contém o índice interativo completo, com os 66 livros em ordem bíblica, pesquisa global, pesquisa dentro das notas, contagem de notas, referências e links para os discursos relacionados.

Na pesquisa do conteúdo, marque **Pesquisar dentro do conteúdo das notas**. Cada resultado mostra o título e somente uma frase em que a palavra foi encontrada.

## Como criar outro índice manualmente

Crie uma nota e adicione:

````markdown
# 📚 Índice de Textos Bíblicos

```indice-biblico
pasta: Discursos
propriedade: textos
```
````

Também é possível personalizar:

````markdown
```indice-biblico
pasta: Discursos
propriedade: textos
titulo: Índice de Textos Bíblicos
exibir-titulo: sim
quantidade: 75
```
````

## Seleção independente por aparelho

Escolher um livro não modifica a nota nem suas propriedades. A seleção fica guardada no próprio aparelho. Assim, duas pessoas podem consultar livros diferentes sem criar conflito de sincronização.

## Instalação manual para teste

Copie `main.js`, `manifest.json` e `styles.css` para:

```text
SEU_COFRE/.obsidian/plugins/bible-reference-index/
```

Reinicie o Obsidian e ative **Indice Nights** em `Configurações → Plugins comunitários`.

O identificador técnico e a pasta de instalação continuam sendo `bible-reference-index`. Isso preserva as atualizações das instalações existentes; mudar esse identificador faria o Obsidian tratar a atualização como outro plugin.

## Privacidade

As notas e escolhas permanecem no cofre local. O plugin só acessa a fonte pública necessária quando você solicita uma verificação. A importação por link consulta somente a pasta pública informada no Google Drive.

## Licença

Distribuído sob a licença MIT.
