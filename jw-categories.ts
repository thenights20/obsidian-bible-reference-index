name: Publicar versão

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - name: Baixar os arquivos
        uses: actions/checkout@v5

      - name: Identificar a versão
        shell: bash
        run: echo "PLUGIN_VERSION=$(jq -r '.version' manifest.json)" >> "$GITHUB_ENV"

      - name: Criar ou atualizar o Release
        env:
          GH_TOKEN: ${{ github.token }}
        shell: bash
        run: |
          test -f main.js
          test -f manifest.json
          test -f styles.css

          if gh release view "$PLUGIN_VERSION" >/dev/null 2>&1; then
            gh release upload "$PLUGIN_VERSION" main.js manifest.json styles.css --clobber
          else
            gh release create "$PLUGIN_VERSION" main.js manifest.json styles.css \
              --target "$GITHUB_SHA" \
              --title "$PLUGIN_VERSION" \
              --generate-notes
          fi
