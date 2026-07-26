# Indice Nights v0.8.6

## Correção

- Corrige a criação das notas de transcrição oficiais.
- A v0.8.5 encontrava as mídias e os links, baixava a legenda e a miniatura, mas falhava no momento de montar a nota Markdown por usar uma variável inexistente (`hydratedMedia`) dentro da função de criação da transcrição.
- O link da miniatura agora usa corretamente `media.naturalKey`.

Nenhuma lógica do índice bíblico, categorias, mini-índices ou estrutura de pastas foi alterada.
