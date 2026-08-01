var INDICE_NIGHTS_RUNTIME_CSS = ".bri-root {\n  --bri-gap: 0.75rem;\n  width: 100%;\n}\n\n.bri-title {\n  margin-block: 0 1rem;\n}\n\n.bri-summary {\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-m);\n  background: var(--background-secondary);\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.bri-summary-stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem 1.25rem;\n  margin-top: 0.5rem;\n  color: var(--text-muted);\n}\n\n.bri-controls {\n  display: grid;\n  grid-template-columns: minmax(12rem, 0.8fr) minmax(14rem, 1.2fr);\n  gap: var(--bri-gap);\n  margin-bottom: 1.25rem;\n}\n\n.bri-control-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n\n.bri-control-group label {\n  color: var(--text-muted);\n  font-size: var(--font-ui-small);\n  font-weight: var(--font-semibold);\n}\n\n.bri-control-group select,\n.bri-control-group input {\n  width: 100%;\n  min-height: var(--input-height);\n}\n\n.bri-search-mode {\n  grid-column: 1 / -1;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-s);\n  padding: 0.7rem 0.8rem;\n}\n\n.bri-search-mode input {\n  margin-top: 0.2rem;\n}\n\n.bri-search-mode label {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  cursor: pointer;\n}\n\n.bri-search-mode small {\n  color: var(--text-muted);\n  font-weight: normal;\n}\n\n.bri-results h2 {\n  margin-block: 0.75rem;\n}\n\n.bri-search-status {\n  color: var(--text-muted);\n  font-size: var(--font-ui-small);\n  margin-bottom: 1rem;\n}\n\n.bri-reference-list,\n.bri-note-list {\n  padding-inline-start: 1.5rem;\n}\n\n.bri-reference {\n  margin-bottom: 0.65rem;\n}\n\n.bri-reference-title {\n  color: var(--text-accent);\n}\n\n.bri-note-list {\n  margin-block: 0.25rem 0;\n}\n\n.bri-note-list li {\n  margin-block: 0.2rem;\n}\n\n.bri-load-more {\n  display: block;\n  margin: 1rem auto;\n}\n\n.bri-empty {\n  color: var(--text-muted);\n  font-style: italic;\n}\n\n.bri-content-results {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.bri-content-result {\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-m);\n  background: var(--background-secondary);\n  padding: 0.85rem 1rem;\n}\n\n.bri-content-section {\n  display: block;\n  color: var(--text-muted);\n  font-size: var(--font-ui-smaller);\n  margin-bottom: 0.2rem;\n}\n\n.bri-content-title {\n  font-weight: var(--font-semibold);\n}\n\n.bri-content-sentence {\n  margin: 0.5rem 0 0;\n  color: var(--text-normal);\n  line-height: 1.5;\n}\n\n.bri-catalog-status {\n  color: var(--text-muted);\n  font-size: var(--font-ui-small);\n  margin-block: 0.75rem;\n}\n\n.bri-catalog-settings {\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-m);\n  padding: 0.5rem 1rem;\n}\n\n.bri-catalog-settings .setting-item {\n  align-items: center;\n}\n\n.bri-catalog-settings .setting-item-control {\n  flex-wrap: wrap;\n}\n\n.bri-catalog-settings select {\n  max-width: min(24rem, 100%);\n}\n\n.callout[data-callout=\"bible-index\"] {\n  --callout-color: var(--interactive-accent-rgb);\n  --callout-icon: lucide-book-open-text;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-m);\n  background: var(--background-secondary-alt);\n  box-shadow: none;\n  margin-block: 1rem 1.25rem;\n}\n\n.callout[data-callout=\"bible-index\"] .callout-title {\n  color: var(--text-normal);\n  font-size: var(--font-ui-small);\n  font-weight: var(--font-semibold);\n}\n\n.callout[data-callout=\"bible-index\"] .callout-content {\n  color: var(--text-muted);\n  font-size: var(--font-ui-small);\n  line-height: 1.8;\n}\n\n.callout[data-callout=\"bible-index\"] .callout-content p {\n  margin: 0;\n}\n\n.callout[data-callout=\"bible-index\"] .internal-link {\n  color: var(--text-accent);\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.callout[data-callout=\"bible-index\"] .internal-link:hover {\n  text-decoration: underline;\n}\n\n.bri-category-heading {\n  margin-block: 1rem 0.35rem;\n}\n\n\n.indice-nights-scripture-link {\n  color: var(--link-color);\n  cursor: pointer;\n  text-decoration: underline;\n  text-decoration-thickness: from-font;\n}\n\n.indice-nights-verse-preview {\n  line-height: 1.65;\n}\n\n.indice-nights-verse-text {\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-m);\n  background: var(--background-secondary);\n  padding: 1rem;\n}\n\n.indice-nights-verse-text .verseNum {\n  color: var(--text-accent);\n  font-size: var(--font-ui-smaller);\n  font-weight: var(--font-semibold);\n  vertical-align: super;\n}\n\n.indice-nights-verse-citation {\n  display: block;\n  margin-top: 0.65rem;\n  color: var(--text-muted);\n}\n\n.indice-nights-verse-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 1rem;\n}\n\n.indice-nights-verse-actions a {\n  display: inline-flex;\n  align-items: center;\n  border-radius: var(--button-radius);\n  padding: 0.45rem 0.75rem;\n  text-decoration: none;\n}\n\n/* Miniaturas de transcrições: layout integrado ao texto, semelhante a uma publicação. */\n.markdown-preview-view .indice-nights-thumbnail-link {\n  display: block;\n  float: right;\n  width: 43%;\n  max-width: 31rem;\n  margin: 0.35rem 0 1.35rem 1.75rem;\n  padding: 0;\n  background-image: none;\n  border-radius: var(--radius-m);\n  line-height: 0;\n}\n\n.markdown-preview-view .indice-nights-thumbnail-link img[alt=\"Miniatura\"],\n.markdown-preview-view img[alt=\"Miniatura\"] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  max-height: none;\n  margin: 0;\n  border-radius: var(--radius-m);\n  object-fit: contain;\n}\n\n/* O ícone padrão de link externo do Obsidian fica solto quando o link envolve uma imagem. */\n.markdown-preview-view .indice-nights-thumbnail-link.external-link {\n  background-image: none;\n  padding-inline-end: 0;\n}\n\n@media (max-width: 900px) {\n  .markdown-preview-view .indice-nights-thumbnail-link {\n    width: 46%;\n    max-width: 24rem;\n    margin-left: 1.25rem;\n  }\n}\n\n@media (max-width: 600px) {\n  .markdown-preview-view .indice-nights-thumbnail-link {\n    float: none;\n    width: 100%;\n    max-width: none;\n    margin: 0.75rem 0 1.25rem;\n  }\n\n  .bri-controls {\n    grid-template-columns: 1fr;\n  }\n\n  .bri-summary-stats {\n    flex-direction: column;\n    gap: 0.2rem;\n  }\n\n  .bri-reference-list,\n  .bri-note-list {\n    padding-inline-start: 1.15rem;\n  }\n\n  .bri-catalog-settings {\n    padding-inline: 0.65rem;\n  }\n\n  .bri-catalog-settings .setting-item {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .bri-catalog-settings .setting-item-control {\n    justify-content: flex-start;\n    width: 100%;\n  }\n}\n\n/* v0.7.5 — catálogo visual inspirado em uma biblioteca de mídia */\n.bri-catalog-settings {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.85rem;\n  border: 0;\n  padding: 0;\n  background: transparent;\n}\n\n.bri-catalog-settings .bri-catalog-card.setting-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  min-width: 0;\n  min-height: 10.5rem;\n  padding: 1rem;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: var(--radius-l);\n  background: var(--background-secondary);\n  overflow: hidden;\n  transition: border-color 120ms ease, background-color 120ms ease, transform 120ms ease;\n}\n\n.bri-catalog-settings .bri-catalog-card.setting-item:hover {\n  border-color: var(--background-modifier-border-hover);\n  background: var(--background-secondary-alt);\n  transform: translateY(-1px);\n}\n\n.bri-catalog-settings .bri-catalog-card.is-enabled {\n  border-color: rgba(var(--interactive-accent-rgb), 0.55);\n}\n\n.bri-catalog-settings .bri-catalog-card .setting-item-info {\n  display: grid;\n  grid-template-columns: 2.55rem minmax(0, 1fr);\n  grid-template-rows: auto 1fr;\n  column-gap: 0.8rem;\n  width: 100%;\n  min-width: 0;\n  flex: 1 1 auto;\n  margin: 0;\n}\n\n.bri-catalog-card-icon {\n  grid-row: 1 / span 2;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.55rem;\n  height: 2.55rem;\n  border-radius: var(--radius-m);\n  background: var(--background-modifier-hover);\n  color: var(--text-accent);\n}\n\n.bri-catalog-card-icon svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n.bri-catalog-settings .bri-catalog-card .setting-item-name {\n  align-self: end;\n  min-width: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: var(--font-semibold);\n  line-height: 1.25;\n  color: var(--text-normal);\n}\n\n.bri-catalog-settings .bri-catalog-card .setting-item-description {\n  align-self: start;\n  min-width: 0;\n  margin-top: 0.25rem;\n  font-size: var(--font-ui-smaller);\n  line-height: 1.4;\n  color: var(--text-muted);\n  overflow-wrap: anywhere;\n}\n\n.bri-catalog-settings .bri-catalog-card .setting-item-control {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.65rem;\n  align-items: center;\n  width: 100%;\n  min-width: 0;\n  margin-top: 1rem;\n  padding-top: 0.8rem;\n  border-top: 1px solid var(--background-modifier-border);\n}\n\n.bri-catalog-settings .bri-catalog-card.is-enabled .setting-item-control .checkbox-container {\n  justify-self: start;\n}\n\n.bri-catalog-settings .bri-catalog-card:not(.is-enabled) .setting-item-control {\n  grid-template-columns: 1fr auto;\n}\n\n.bri-catalog-settings .bri-catalog-card:not(.is-enabled) .setting-item-control .checkbox-container {\n  grid-column: 2;\n}\n\n.bri-catalog-settings .bri-catalog-card select {\n  width: 100%;\n  min-width: 0;\n  max-width: none;\n}\n\n@media (max-width: 1000px) {\n  .bri-catalog-settings {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 620px) {\n  .bri-catalog-settings {\n    grid-template-columns: 1fr;\n    gap: 0.7rem;\n  }\n\n  .bri-catalog-settings .bri-catalog-card.setting-item {\n    min-height: 0;\n    padding: 0.9rem;\n  }\n\n  .bri-catalog-settings .bri-catalog-card .setting-item-control {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n}\n\n/* v0.7.6: Séries são exibidas como cartões individuais dentro do catálogo. */\n\n/* ============================================================\n   Índice Nights v0.7.8 — Biblioteca visual responsiva\n   Desktop, iPad e iPhone\n   ============================================================ */\n\n.indice-nights-settings {\n  --bri-panel-gap: 14px;\n  --bri-card-radius: 14px;\n  --bri-card-border: var(--background-modifier-border);\n  --bri-card-bg: var(--background-secondary);\n  --bri-card-bg-hover: var(--background-secondary-alt);\n  --bri-soft-accent: color-mix(in srgb, var(--interactive-accent) 13%, var(--background-secondary));\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n}\n\n.indice-nights-settings *,\n.indice-nights-settings *::before,\n.indice-nights-settings *::after {\n  box-sizing: border-box;\n}\n\n.indice-nights-settings .bri-library-intro {\n  margin: -2px 0 16px;\n  color: var(--text-muted);\n  line-height: 1.55;\n}\n\n/* Índice geral */\n.indice-nights-settings .bri-index-hero {\n  position: relative !important;\n  inset: auto !important;\n  z-index: 0 !important;\n  float: none !important;\n  clear: both !important;\n  width: 100% !important;\n  min-height: 86px;\n  display: grid !important;\n  grid-template-columns: 52px minmax(0, 1fr) 24px;\n  align-items: center;\n  gap: 14px;\n  margin: 0 0 18px !important;\n  padding: 15px 17px !important;\n  border: 1px solid #3893ff !important;\n  border-radius: var(--bri-card-radius) !important;\n  background: linear-gradient(110deg, #073d8e 0%, #075dcc 52%, #0649a6 100%) !important;\n  color: #fff !important;\n  box-shadow: 0 8px 22px rgba(0, 84, 196, .16);\n  text-align: left;\n  cursor: pointer;\n  overflow: hidden;\n  transform: none !important;\n}\n\n.indice-nights-settings .bri-index-hero:hover {\n  background: linear-gradient(110deg, #08479f 0%, #0866dc 52%, #0754b8 100%) !important;\n}\n\n.indice-nights-settings .bri-index-hero-icon {\n  width: 52px;\n  height: 52px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(255,255,255,.34);\n  border-radius: 12px;\n  background: rgba(255,255,255,.08);\n}\n\n.indice-nights-settings .bri-index-hero-icon svg {\n  width: 28px;\n  height: 28px;\n}\n\n.indice-nights-settings .bri-index-hero-copy {\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-index-hero-title-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.indice-nights-settings .bri-index-hero-title {\n  font-size: 18px;\n  line-height: 1.25;\n  font-weight: 700;\n}\n\n.indice-nights-settings .bri-index-hero-badge {\n  display: inline-flex;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: rgba(255,255,255,.17);\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.indice-nights-settings .bri-index-hero-description {\n  margin-top: 5px;\n  color: rgba(255,255,255,.84);\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n.indice-nights-settings .bri-index-hero-arrow {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  justify-self: end;\n}\n\n/* Grade principal */\n.indice-nights-settings .bri-catalog-settings {\n  display: grid !important;\n  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;\n  grid-auto-flow: row !important;\n  align-items: stretch !important;\n  gap: var(--bri-panel-gap) !important;\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  border-radius: 0 !important;\n  background: transparent !important;\n  overflow: visible !important;\n}\n\n/* Cartões normais */\n.indice-nights-settings .bri-library-card {\n  position: relative;\n  min-width: 0;\n  min-height: 214px;\n  display: grid !important;\n  grid-template-columns: 48px minmax(0, 1fr);\n  grid-template-rows: minmax(0, 1fr) auto;\n  gap: 12px 13px;\n  align-content: stretch;\n  padding: 16px !important;\n  margin: 0 !important;\n  border: 1px solid var(--bri-card-border) !important;\n  border-radius: var(--bri-card-radius) !important;\n  background: var(--bri-card-bg) !important;\n  overflow: hidden;\n  box-shadow: none;\n}\n\n.indice-nights-settings .bri-library-card:hover {\n  background: var(--bri-card-bg-hover) !important;\n  border-color: color-mix(in srgb, var(--interactive-accent) 36%, var(--bri-card-border)) !important;\n}\n\n.indice-nights-settings .bri-library-card.is-enabled {\n  border-color: color-mix(in srgb, var(--interactive-accent) 55%, var(--bri-card-border)) !important;\n}\n\n.indice-nights-settings .bri-library-card-icon,\n.indice-nights-settings .bri-library-group-icon {\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  border-radius: 11px;\n  background: var(--bri-soft-accent);\n  color: var(--interactive-accent);\n}\n\n.indice-nights-settings .bri-library-card-icon svg,\n.indice-nights-settings .bri-library-group-icon svg {\n  width: 23px;\n  height: 23px;\n}\n\n.indice-nights-settings .bri-library-card-body {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.indice-nights-settings .bri-library-card-title {\n  margin: 1px 0 0;\n  color: var(--text-normal);\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 1.32;\n}\n\n.indice-nights-settings .bri-library-card-description {\n  margin-top: 6px;\n  color: var(--text-muted);\n  font-size: 12.5px;\n  line-height: 1.5;\n}\n\n.indice-nights-settings .bri-library-card-path {\n  margin-top: auto;\n  padding-top: 12px;\n  color: var(--text-faint);\n  font-size: 11.5px;\n  line-height: 1.45;\n  overflow-wrap: anywhere;\n}\n\n.indice-nights-settings .bri-library-card-footer {\n  grid-column: 1 / -1;\n  min-width: 0;\n  min-height: 44px;\n  display: flex !important;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 0;\n  padding-top: 12px;\n  border-top: 1px solid var(--background-modifier-border);\n}\n\n.indice-nights-settings .bri-library-card-status {\n  color: var(--text-faint);\n  font-size: 11.5px;\n}\n\n.indice-nights-settings .bri-library-card-select {\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.indice-nights-settings .bri-library-card-select select {\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n}\n\n/* Remove o espaçamento nativo de Setting dentro dos mini-controles */\n.indice-nights-settings .bri-library-card-select .setting-item,\n.indice-nights-settings .bri-library-card-toggle .setting-item,\n.indice-nights-settings .bri-library-group-option-select .setting-item,\n.indice-nights-settings .bri-library-group-option-toggle .setting-item {\n  min-height: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  background: transparent !important;\n}\n\n.indice-nights-settings .bri-library-card-select .setting-item-info,\n.indice-nights-settings .bri-library-card-toggle .setting-item-info,\n.indice-nights-settings .bri-library-group-option-select .setting-item-info,\n.indice-nights-settings .bri-library-group-option-toggle .setting-item-info {\n  display: none !important;\n}\n\n.indice-nights-settings .bri-library-card-select .setting-item-control,\n.indice-nights-settings .bri-library-card-toggle .setting-item-control,\n.indice-nights-settings .bri-library-group-option-select .setting-item-control,\n.indice-nights-settings .bri-library-group-option-toggle .setting-item-control {\n  width: auto !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/* Congressos / Séries */\n.indice-nights-settings .bri-library-groups-wrap {\n  grid-column: 1 / -1;\n  display: grid !important;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--bri-panel-gap);\n  width: 100%;\n  margin: 0;\n}\n\n.indice-nights-settings .bri-library-group {\n  width: 100%;\n  min-width: 0;\n  margin: 0;\n  border: 1px solid var(--bri-card-border);\n  border-radius: var(--bri-card-radius);\n  background: var(--bri-card-bg);\n  overflow: hidden;\n}\n\n.indice-nights-settings .bri-library-group[open] {\n  border-color: color-mix(in srgb, var(--interactive-accent) 44%, var(--bri-card-border));\n}\n\n.indice-nights-settings .bri-library-group-summary {\n  min-height: 108px;\n  display: grid !important;\n  grid-template-columns: 48px minmax(0, 1fr) auto 24px;\n  align-items: center;\n  gap: 13px;\n  padding: 16px !important;\n  margin: 0 !important;\n  list-style: none;\n  cursor: pointer;\n  user-select: none;\n}\n\n.indice-nights-settings .bri-library-group-summary::-webkit-details-marker {\n  display: none;\n}\n\n.indice-nights-settings .bri-library-group-copy {\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-library-group-title {\n  color: var(--text-normal);\n  font-size: 15px;\n  line-height: 1.32;\n  font-weight: 700;\n}\n\n.indice-nights-settings .bri-library-group-description {\n  margin-top: 5px;\n  color: var(--text-muted);\n  font-size: 12.5px;\n  line-height: 1.45;\n}\n\n.indice-nights-settings .bri-library-group-count {\n  padding: 4px 8px;\n  border-radius: 999px;\n  background: var(--background-modifier-hover);\n  color: var(--text-muted);\n  font-size: 11px;\n  white-space: nowrap;\n}\n\n.indice-nights-settings .bri-library-group-chevron {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: transform .18s ease;\n}\n\n.indice-nights-settings .bri-library-group[open] .bri-library-group-chevron {\n  transform: rotate(180deg);\n}\n\n.indice-nights-settings .bri-library-group-panel {\n  display: grid;\n  gap: 8px;\n  padding: 0 16px 16px;\n  animation: bri-panel-open .18s ease-out;\n}\n\n@keyframes bri-panel-open {\n  from { opacity: 0; transform: translateY(-5px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.indice-nights-settings .bri-library-group-option {\n  min-width: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 12px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 10px;\n  background: var(--background-primary);\n}\n\n.indice-nights-settings .bri-library-group-option.is-enabled {\n  border-color: color-mix(in srgb, var(--interactive-accent) 45%, var(--background-modifier-border));\n}\n\n.indice-nights-settings .bri-library-group-option-info {\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-library-group-option-title {\n  color: var(--text-normal);\n  font-size: 12.5px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n\n.indice-nights-settings .bri-library-group-option-description {\n  margin-top: 2px;\n  color: var(--text-muted);\n  font-size: 11px;\n  line-height: 1.4;\n}\n\n.indice-nights-settings .bri-library-group-option-controls {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n}\n\n.indice-nights-settings .bri-library-group-option-select {\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-library-group-option-select select {\n  width: min(220px, 30vw);\n  max-width: 220px;\n}\n\n/* Ação de download */\n.indice-nights-settings .bri-action-setting {\n  margin-top: 16px !important;\n  padding: 14px 16px !important;\n  border: 1px solid var(--background-modifier-border) !important;\n  border-radius: var(--bri-card-radius);\n  background: var(--background-secondary);\n}\n\n.indice-nights-settings .bri-action-setting .setting-item-info {\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-action-setting .setting-item-control {\n  flex-shrink: 0;\n}\n\n/* ====================== TABLET / iPad ====================== */\n@media (max-width: 1024px) {\n  .indice-nights-settings {\n    --bri-panel-gap: 12px;\n  }\n\n  .indice-nights-settings .bri-catalog-settings {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  }\n\n  .indice-nights-settings .bri-library-card {\n    min-height: 206px;\n  }\n\n  .indice-nights-settings .bri-library-groups-wrap {\n    grid-template-columns: 1fr;\n  }\n\n  .indice-nights-settings .bri-library-group-summary {\n    min-height: 96px;\n  }\n}\n\n/* iPad em painel estreito / split view */\n@media (max-width: 780px) {\n  .indice-nights-settings .bri-index-hero {\n    grid-template-columns: 46px minmax(0, 1fr) 20px;\n    min-height: 78px;\n    gap: 11px;\n    padding: 13px 14px !important;\n  }\n\n  .indice-nights-settings .bri-index-hero-icon {\n    width: 46px;\n    height: 46px;\n  }\n\n  .indice-nights-settings .bri-index-hero-title {\n    font-size: 16px;\n  }\n\n  .indice-nights-settings .bri-index-hero-description {\n    font-size: 12px;\n  }\n\n  .indice-nights-settings .bri-catalog-settings {\n    grid-template-columns: 1fr !important;\n  }\n\n  .indice-nights-settings .bri-library-card {\n    min-height: 0;\n  }\n\n  .indice-nights-settings .bri-library-group-count {\n    display: inline-flex;\n  }\n}\n\n/* ====================== iPhone / celulares ====================== */\n@media (max-width: 560px) {\n  .indice-nights-settings {\n    --bri-panel-gap: 10px;\n  }\n\n  .indice-nights-settings .bri-library-intro {\n    margin-bottom: 12px;\n    font-size: 12px;\n  }\n\n  .indice-nights-settings .bri-index-hero {\n    grid-template-columns: 42px minmax(0, 1fr) 18px;\n    gap: 10px;\n    min-height: 72px;\n    margin-bottom: 12px !important;\n    padding: 12px !important;\n    border-radius: 12px !important;\n  }\n\n  .indice-nights-settings .bri-index-hero-icon {\n    width: 42px;\n    height: 42px;\n    border-radius: 10px;\n  }\n\n  .indice-nights-settings .bri-index-hero-icon svg {\n    width: 23px;\n    height: 23px;\n  }\n\n  .indice-nights-settings .bri-index-hero-title {\n    font-size: 15px;\n  }\n\n  .indice-nights-settings .bri-index-hero-badge {\n    display: none;\n  }\n\n  .indice-nights-settings .bri-index-hero-description {\n    margin-top: 3px;\n    font-size: 11px;\n    line-height: 1.35;\n  }\n\n  .indice-nights-settings .bri-library-card {\n    grid-template-columns: 42px minmax(0, 1fr);\n    gap: 10px 11px;\n    padding: 13px !important;\n    border-radius: 12px !important;\n  }\n\n  .indice-nights-settings .bri-library-card-icon,\n  .indice-nights-settings .bri-library-group-icon {\n    width: 42px;\n    height: 42px;\n    border-radius: 10px;\n  }\n\n  .indice-nights-settings .bri-library-card-title,\n  .indice-nights-settings .bri-library-group-title {\n    font-size: 14px;\n  }\n\n  .indice-nights-settings .bri-library-card-description,\n  .indice-nights-settings .bri-library-group-description {\n    font-size: 11.5px;\n  }\n\n  .indice-nights-settings .bri-library-card-path {\n    padding-top: 9px;\n    font-size: 10.5px;\n  }\n\n  .indice-nights-settings .bri-library-card-footer {\n    padding-top: 10px;\n  }\n\n  .indice-nights-settings .bri-library-card-select {\n    flex-basis: 100%;\n    order: 2;\n  }\n\n  .indice-nights-settings .bri-library-card-footer {\n    flex-wrap: wrap;\n  }\n\n  .indice-nights-settings .bri-library-group {\n    border-radius: 12px;\n  }\n\n  .indice-nights-settings .bri-library-group-summary {\n    grid-template-columns: 42px minmax(0, 1fr) 20px;\n    min-height: 82px;\n    gap: 10px;\n    padding: 13px !important;\n  }\n\n  .indice-nights-settings .bri-library-group-count {\n    display: none;\n  }\n\n  .indice-nights-settings .bri-library-group-panel {\n    padding: 0 12px 12px;\n  }\n\n  .indice-nights-settings .bri-library-group-option {\n    grid-template-columns: 1fr;\n    gap: 8px;\n    padding: 10px;\n  }\n\n  .indice-nights-settings .bri-library-group-option-controls {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .indice-nights-settings .bri-library-group-option-select {\n    flex: 1 1 auto;\n  }\n\n  .indice-nights-settings .bri-library-group-option-select select {\n    width: 100%;\n    max-width: none;\n  }\n\n  .indice-nights-settings .bri-action-setting {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n    padding: 13px !important;\n  }\n\n  .indice-nights-settings .bri-action-setting .setting-item-control,\n  .indice-nights-settings .bri-action-setting button {\n    width: 100%;\n  }\n}\n\n/* iPhone muito estreito */\n@media (max-width: 390px) {\n  .indice-nights-settings .bri-index-hero-description {\n    display: none;\n  }\n\n  .indice-nights-settings .bri-index-hero {\n    min-height: 64px;\n  }\n\n  .indice-nights-settings .bri-library-card-path {\n    overflow-wrap: anywhere;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.7.9 — divisores e acabamento da área inferior\n   ============================================================ */\n\n.indice-nights-settings .bri-section-divider {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  margin: 20px 0 12px;\n}\n\n.indice-nights-settings .bri-section-divider-label {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1;\n  letter-spacing: .01em;\n  white-space: nowrap;\n}\n\n.indice-nights-settings .bri-section-divider-line {\n  height: 1px;\n  width: 100%;\n  border-radius: 999px;\n}\n\n.indice-nights-settings .bri-section-divider-official .bri-section-divider-label {\n  color: color-mix(in srgb, var(--interactive-accent) 78%, var(--text-normal));\n}\n\n.indice-nights-settings .bri-section-divider-official .bri-section-divider-line {\n  background: linear-gradient(\n    90deg,\n    color-mix(in srgb, var(--interactive-accent) 70%, transparent),\n    color-mix(in srgb, var(--interactive-accent) 18%, transparent)\n  );\n}\n\n.indice-nights-settings .bri-section-divider-unofficial {\n  margin-top: 22px;\n}\n\n.indice-nights-settings .bri-section-divider-unofficial .bri-section-divider-label {\n  color: color-mix(in srgb, var(--text-muted) 82%, var(--interactive-accent));\n}\n\n.indice-nights-settings .bri-section-divider-unofficial .bri-section-divider-line {\n  background: linear-gradient(\n    90deg,\n    color-mix(in srgb, var(--text-muted) 45%, transparent),\n    color-mix(in srgb, var(--text-muted) 10%, transparent)\n  );\n}\n\n/* Área inferior no mesmo padrão visual do catálogo */\n.indice-nights-settings .bri-unofficial-panel {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item {\n  width: 100%;\n  min-width: 0;\n  margin: 0;\n  padding: 14px 16px !important;\n  border: 1px solid var(--background-modifier-border) !important;\n  border-radius: 12px;\n  background: var(--background-secondary);\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item:hover {\n  border-color: color-mix(in srgb, var(--interactive-accent) 28%, var(--background-modifier-border)) !important;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-info {\n  min-width: 0;\n  padding-right: 14px;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-name {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-description {\n  margin-top: 3px;\n  font-size: 11.5px;\n  line-height: 1.45;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-control {\n  min-width: min(260px, 38%);\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item input[type=\"text\"],\n.indice-nights-settings .bri-unofficial-panel > .setting-item select {\n  width: min(280px, 100%);\n  max-width: 100%;\n}\n\n.indice-nights-settings .bri-unofficial-panel > p.setting-item-description {\n  margin: 0;\n  padding: 4px 2px 2px;\n  color: var(--text-muted);\n  font-size: 11.5px;\n  line-height: 1.5;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item:last-child {\n  margin-bottom: 0;\n}\n\n/* iPad / tablet */\n@media (max-width: 1024px) {\n  .indice-nights-settings .bri-section-divider {\n    margin-top: 18px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item {\n    padding: 13px 14px !important;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-control {\n    min-width: min(240px, 42%);\n  }\n}\n\n/* iPad em Split View e tablets estreitos */\n@media (max-width: 780px) {\n  .indice-nights-settings .bri-unofficial-panel > .setting-item {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-info {\n    width: 100%;\n    padding-right: 0;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-control {\n    width: 100%;\n    min-width: 0;\n    justify-content: stretch;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-control > * {\n    max-width: 100%;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item input[type=\"text\"],\n  .indice-nights-settings .bri-unofficial-panel > .setting-item select,\n  .indice-nights-settings .bri-unofficial-panel > .setting-item button {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n/* iPhone */\n@media (max-width: 560px) {\n  .indice-nights-settings .bri-section-divider {\n    grid-template-columns: auto minmax(24px, 1fr);\n    gap: 9px;\n    margin: 16px 0 10px;\n  }\n\n  .indice-nights-settings .bri-section-divider-label {\n    font-size: 12px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel {\n    gap: 8px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item {\n    padding: 12px !important;\n    border-radius: 11px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-name {\n    font-size: 13px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .setting-item .setting-item-description,\n  .indice-nights-settings .bri-unofficial-panel > p.setting-item-description {\n    font-size: 11px;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.8.0 — títulos de seção em faixa elegante\n   ============================================================ */\n\n.indice-nights-settings .bri-section-divider {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 38px;\n  margin: 20px 0 12px;\n  padding: 0 14px;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 34%, var(--background-modifier-border));\n  border-radius: 10px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      105deg,\n      color-mix(in srgb, var(--interactive-accent) 18%, var(--background-secondary)) 0%,\n      color-mix(in srgb, var(--interactive-accent) 8%, var(--background-secondary)) 55%,\n      var(--background-secondary) 100%\n    );\n}\n\n.indice-nights-settings .bri-section-divider::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: linear-gradient(\n    180deg,\n    color-mix(in srgb, var(--interactive-accent) 94%, white 6%),\n    color-mix(in srgb, var(--interactive-accent) 70%, transparent)\n  );\n}\n\n.indice-nights-settings .bri-section-divider-label {\n  position: relative;\n  z-index: 1;\n  display: inline-flex;\n  align-items: center;\n  min-width: 0;\n  padding-left: 2px;\n  color: color-mix(in srgb, var(--interactive-accent) 78%, var(--text-normal));\n  font-size: 12.5px;\n  font-weight: 700;\n  line-height: 1;\n  letter-spacing: .015em;\n  white-space: nowrap;\n}\n\n.indice-nights-settings .bri-section-divider-line {\n  display: none !important;\n}\n\n/* Oficial: um pouco mais vivo, combinando com o Índice Geral */\n.indice-nights-settings .bri-section-divider-official {\n  border-color: color-mix(in srgb, var(--interactive-accent) 42%, var(--background-modifier-border));\n  box-shadow: inset 0 1px 0 color-mix(in srgb, white 5%, transparent);\n}\n\n/* Não oficial: mesma linguagem visual, porém mais neutra */\n.indice-nights-settings .bri-section-divider-unofficial {\n  margin-top: 22px;\n  border-color: color-mix(in srgb, var(--text-muted) 28%, var(--background-modifier-border));\n  background:\n    linear-gradient(\n      105deg,\n      color-mix(in srgb, var(--text-muted) 9%, var(--background-secondary)) 0%,\n      color-mix(in srgb, var(--text-muted) 4%, var(--background-secondary)) 55%,\n      var(--background-secondary) 100%\n    );\n}\n\n.indice-nights-settings .bri-section-divider-unofficial::before {\n  background: linear-gradient(\n    180deg,\n    color-mix(in srgb, var(--text-muted) 75%, var(--interactive-accent) 25%),\n    color-mix(in srgb, var(--text-muted) 45%, transparent)\n  );\n}\n\n.indice-nights-settings .bri-section-divider-unofficial .bri-section-divider-label {\n  color: color-mix(in srgb, var(--text-muted) 78%, var(--text-normal));\n}\n\n/* Tablet / iPad */\n@media (max-width: 1024px) {\n  .indice-nights-settings .bri-section-divider {\n    min-height: 36px;\n    margin-top: 18px;\n    padding-inline: 13px;\n  }\n}\n\n/* iPhone */\n@media (max-width: 560px) {\n  .indice-nights-settings .bri-section-divider {\n    min-height: 34px;\n    margin: 15px 0 10px;\n    padding-inline: 12px;\n    border-radius: 9px;\n  }\n\n  .indice-nights-settings .bri-section-divider::before {\n    width: 3px;\n  }\n\n  .indice-nights-settings .bri-section-divider-label {\n    font-size: 12px;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.8.1 — acabamento aprovado\n   ============================================================ */\n\n/* Sem texto introdutório: aproxima o Índice Geral do cabeçalho. */\n.indice-nights-settings .bri-index-hero {\n  margin-top: 8px !important;\n}\n\n/* Faixas de seção: título branco centralizado e linhas laterais. */\n.indice-nights-settings .bri-section-divider {\n  position: relative;\n  display: grid !important;\n  grid-template-columns: minmax(24px, 1fr) auto minmax(24px, 1fr);\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 40px;\n  margin: 20px 0 12px;\n  padding: 0 15px !important;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.indice-nights-settings .bri-section-divider::before {\n  width: 4px;\n}\n\n.indice-nights-settings .bri-section-divider-label {\n  position: relative;\n  z-index: 2;\n  justify-self: center;\n  padding: 0 !important;\n  color: #fff !important;\n  font-size: 13px !important;\n  font-weight: 700 !important;\n  line-height: 1;\n  text-align: center;\n  letter-spacing: .01em;\n}\n\n.indice-nights-settings .bri-section-divider-decoration {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 1px;\n  border-radius: 999px;\n  opacity: .65;\n}\n\n.indice-nights-settings .bri-section-divider-official {\n  border-color: color-mix(in srgb, #9b5cff 62%, var(--background-modifier-border)) !important;\n  background:\n    linear-gradient(\n      105deg,\n      color-mix(in srgb, #7b45c7 26%, var(--background-secondary)) 0%,\n      color-mix(in srgb, #5a387d 15%, var(--background-secondary)) 50%,\n      color-mix(in srgb, #7b45c7 22%, var(--background-secondary)) 100%\n    ) !important;\n}\n\n.indice-nights-settings .bri-section-divider-official::before {\n  background: linear-gradient(180deg, #a86cff, #743ad0) !important;\n}\n\n.indice-nights-settings .bri-section-divider-official .bri-section-divider-decoration {\n  background: linear-gradient(90deg, transparent, rgba(214, 184, 255, .8));\n}\n\n.indice-nights-settings .bri-section-divider-official .bri-section-divider-decoration-right {\n  background: linear-gradient(90deg, rgba(214, 184, 255, .8), transparent);\n}\n\n/* Não oficial: turquesa discreto, mas com a mesma identidade. */\n.indice-nights-settings .bri-section-divider-unofficial {\n  border-color: color-mix(in srgb, #00b8b8 58%, var(--background-modifier-border)) !important;\n  background:\n    linear-gradient(\n      105deg,\n      color-mix(in srgb, #007f80 24%, var(--background-secondary)) 0%,\n      color-mix(in srgb, #006769 12%, var(--background-secondary)) 50%,\n      color-mix(in srgb, #007f80 21%, var(--background-secondary)) 100%\n    ) !important;\n}\n\n.indice-nights-settings .bri-section-divider-unofficial::before {\n  background: linear-gradient(180deg, #00d1d1, #008e90) !important;\n}\n\n.indice-nights-settings .bri-section-divider-unofficial .bri-section-divider-decoration {\n  background: linear-gradient(90deg, transparent, rgba(122, 235, 235, .74));\n}\n\n.indice-nights-settings .bri-section-divider-unofficial .bri-section-divider-decoration-right {\n  background: linear-gradient(90deg, rgba(122, 235, 235, .74), transparent);\n}\n\n/* Botão colocado na faixa de \"Transcrições não oficiais\". */\n.indice-nights-settings .bri-section-divider-with-action {\n  grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr) auto !important;\n}\n\n.indice-nights-settings .bri-section-divider-action {\n  position: relative;\n  z-index: 3;\n  justify-self: end;\n  min-height: 28px;\n  padding: 5px 11px;\n  border: 1px solid rgba(255,255,255,.22);\n  border-radius: 7px;\n  background: rgba(255,255,255,.10);\n  color: #fff;\n  font-size: 11.5px;\n  font-weight: 600;\n  line-height: 1;\n  white-space: nowrap;\n  box-shadow: none;\n}\n\n.indice-nights-settings .bri-section-divider-action:hover {\n  background: rgba(255,255,255,.17);\n  border-color: rgba(255,255,255,.32);\n}\n\n.indice-nights-settings .bri-section-divider-action.is-loading {\n  opacity: .68;\n  cursor: wait;\n}\n\n/* Painel não oficial como um único bloco profissional. */\n.indice-nights-settings .bri-unofficial-panel {\n  display: block !important;\n  width: 100%;\n  padding: 0 !important;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 12px;\n  background: var(--background-secondary);\n  overflow: hidden;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item,\n.indice-nights-settings .bri-unofficial-panel > .bri-unofficial-row {\n  min-height: 72px;\n  margin: 0 !important;\n  padding: 12px 14px !important;\n  border: 0 !important;\n  border-bottom: 1px solid var(--background-modifier-border) !important;\n  border-radius: 0 !important;\n  background: transparent !important;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item:last-child,\n.indice-nights-settings .bri-unofficial-panel > .bri-unofficial-row:last-child {\n  border-bottom: 0 !important;\n}\n\n.indice-nights-settings .bri-unofficial-panel > .setting-item:hover {\n  background: var(--background-modifier-hover) !important;\n}\n\n.indice-nights-settings .bri-unofficial-row .setting-item-info {\n  position: relative;\n  min-width: 0;\n  padding-left: 48px !important;\n}\n\n.indice-nights-settings .bri-unofficial-row-icon {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transform: translateY(-50%);\n  border-radius: 9px;\n  background: color-mix(in srgb, #00a8aa 22%, var(--background-modifier-hover));\n  color: #16c9cb;\n}\n\n.indice-nights-settings .bri-unofficial-row-icon svg {\n  width: 19px;\n  height: 19px;\n}\n\n.indice-nights-settings .bri-unofficial-row .setting-item-name {\n  font-size: 13.5px !important;\n  font-weight: 600;\n  line-height: 1.3;\n}\n\n.indice-nights-settings .bri-unofficial-row .setting-item-description {\n  margin-top: 3px;\n  font-size: 11px !important;\n  line-height: 1.42;\n}\n\n.indice-nights-settings .bri-unofficial-row .setting-item-control {\n  min-width: 230px;\n  flex-shrink: 0;\n}\n\n.indice-nights-settings .bri-unofficial-row input[type=\"text\"],\n.indice-nights-settings .bri-unofficial-row select {\n  width: min(290px, 100%);\n  max-width: 100%;\n}\n\n/* iPad */\n@media (max-width: 1024px) {\n  .indice-nights-settings .bri-section-divider {\n    min-height: 38px;\n    gap: 11px;\n    padding-inline: 13px !important;\n  }\n\n  .indice-nights-settings .bri-unofficial-row .setting-item-control {\n    min-width: 210px;\n  }\n}\n\n/* iPad Split View */\n@media (max-width: 780px) {\n  .indice-nights-settings .bri-section-divider-with-action {\n    grid-template-columns: minmax(14px, 1fr) auto minmax(14px, 1fr) auto !important;\n    gap: 9px;\n  }\n\n  .indice-nights-settings .bri-section-divider-action {\n    padding-inline: 9px;\n    font-size: 11px;\n  }\n\n  .indice-nights-settings .bri-unofficial-row {\n    display: flex !important;\n    flex-direction: column;\n    align-items: stretch !important;\n    gap: 10px;\n  }\n\n  .indice-nights-settings .bri-unofficial-row .setting-item-info {\n    width: 100%;\n  }\n\n  .indice-nights-settings .bri-unofficial-row .setting-item-control {\n    width: 100%;\n    min-width: 0;\n    justify-content: stretch;\n    padding-left: 48px;\n  }\n\n  .indice-nights-settings .bri-unofficial-row .setting-item-control input,\n  .indice-nights-settings .bri-unofficial-row .setting-item-control select,\n  .indice-nights-settings .bri-unofficial-row .setting-item-control button {\n    width: 100%;\n    max-width: none;\n  }\n}\n\n/* iPhone */\n@media (max-width: 560px) {\n  .indice-nights-settings .bri-section-divider {\n    min-height: 36px;\n    margin: 15px 0 10px;\n    padding-inline: 10px !important;\n    border-radius: 9px;\n  }\n\n  .indice-nights-settings .bri-section-divider-label {\n    font-size: 12px !important;\n  }\n\n  .indice-nights-settings .bri-section-divider-with-action {\n    grid-template-columns: 1fr auto !important;\n    grid-template-areas:\n      \"title action\";\n    gap: 8px;\n  }\n\n  .indice-nights-settings .bri-section-divider-with-action .bri-section-divider-decoration {\n    display: none;\n  }\n\n  .indice-nights-settings .bri-section-divider-with-action .bri-section-divider-label {\n    grid-area: title;\n    justify-self: start;\n    text-align: left;\n  }\n\n  .indice-nights-settings .bri-section-divider-action {\n    grid-area: action;\n    justify-self: end;\n    min-height: 27px;\n    padding: 5px 8px;\n    font-size: 10.5px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel {\n    border-radius: 10px;\n  }\n\n  .indice-nights-settings .bri-unofficial-panel > .bri-unofficial-row {\n    min-height: 0;\n    padding: 11px !important;\n  }\n\n  .indice-nights-settings .bri-unofficial-row .setting-item-info {\n    padding-left: 42px !important;\n  }\n\n  .indice-nights-settings .bri-unofficial-row-icon {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n  }\n\n  .indice-nights-settings .bri-unofficial-row .setting-item-control {\n    padding-left: 42px;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.8.2 — ações na faixa de Transcrições oficiais\n   ============================================================ */\n\n.indice-nights-settings .bri-section-divider-with-actions {\n  grid-template-columns: minmax(24px, 1fr) auto minmax(24px, 1fr) auto !important;\n}\n\n.indice-nights-settings .bri-section-divider-actions {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-section-divider-action-official {\n  border-color: rgba(255, 255, 255, .22);\n  background: rgba(255, 255, 255, .10);\n  color: #fff;\n}\n\n.indice-nights-settings .bri-section-divider-action-official:hover {\n  border-color: rgba(255, 255, 255, .34);\n  background: rgba(255, 255, 255, .18);\n}\n\n.indice-nights-settings .bri-section-divider-action {\n  min-height: 29px;\n}\n\n/* Com a ação principal transferida para o cabeçalho,\n   remove qualquer margem residual da antiga linha de download. */\n.indice-nights-settings .bri-catalog-settings + .bri-section-divider-unofficial {\n  margin-top: 22px;\n}\n\n/* Tablet / iPad */\n@media (max-width: 1024px) {\n  .indice-nights-settings .bri-section-divider-with-actions {\n    grid-template-columns: minmax(18px, 1fr) auto minmax(18px, 1fr) auto !important;\n    gap: 9px;\n  }\n\n  .indice-nights-settings .bri-section-divider-actions {\n    gap: 6px;\n  }\n\n  .indice-nights-settings .bri-section-divider-action-official {\n    padding-inline: 9px;\n    font-size: 11px;\n  }\n}\n\n/* iPad em Split View */\n@media (max-width: 780px) {\n  .indice-nights-settings .bri-section-divider-with-actions {\n    grid-template-columns: 1fr auto !important;\n    grid-template-areas:\n      \"title actions\";\n  }\n\n  .indice-nights-settings .bri-section-divider-with-actions .bri-section-divider-decoration {\n    display: none;\n  }\n\n  .indice-nights-settings .bri-section-divider-with-actions .bri-section-divider-label {\n    grid-area: title;\n    justify-self: start;\n    text-align: left;\n  }\n\n  .indice-nights-settings .bri-section-divider-actions {\n    grid-area: actions;\n    justify-self: end;\n  }\n\n  .indice-nights-settings .bri-section-divider-action-official {\n    min-height: 28px;\n    padding: 5px 8px;\n    font-size: 10.5px;\n  }\n}\n\n/* iPhone: mantém os dois botões utilizáveis sem estourar a largura. */\n@media (max-width: 560px) {\n  .indice-nights-settings .bri-section-divider-with-actions {\n    display: grid !important;\n    grid-template-columns: 1fr !important;\n    grid-template-areas:\n      \"title\"\n      \"actions\";\n    gap: 8px;\n    padding-block: 9px !important;\n  }\n\n  .indice-nights-settings .bri-section-divider-with-actions .bri-section-divider-label {\n    grid-area: title;\n    justify-self: center;\n    text-align: center;\n  }\n\n  .indice-nights-settings .bri-section-divider-actions {\n    grid-area: actions;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 6px;\n  }\n\n  .indice-nights-settings .bri-section-divider-action-official {\n    width: 100%;\n    min-width: 0;\n    min-height: 30px;\n    padding: 5px 6px;\n    font-size: 10px;\n    white-space: normal;\n    line-height: 1.15;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.8.3 — ações oficiais em linha própria\n   ============================================================ */\n\n.indice-nights-settings .bri-section-divider-official {\n  margin-bottom: 8px !important;\n}\n\n.indice-nights-settings .bri-official-actions-row {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  width: 100%;\n  margin: 0 0 14px;\n}\n\n.indice-nights-settings .bri-official-action-button {\n  width: 100%;\n  min-width: 0;\n  min-height: 38px;\n  padding: 8px 12px;\n  border: 1px solid color-mix(in srgb, #9b5cff 45%, var(--background-modifier-border));\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      105deg,\n      color-mix(in srgb, #7d45c7 20%, var(--background-secondary)),\n      color-mix(in srgb, #5e3c82 10%, var(--background-secondary))\n    );\n  color: var(--text-normal);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.2;\n  text-align: center;\n  white-space: normal;\n  box-shadow: none;\n}\n\n.indice-nights-settings .bri-official-action-button:hover {\n  border-color: color-mix(in srgb, #a86cff 60%, var(--background-modifier-border));\n  background:\n    linear-gradient(\n      105deg,\n      color-mix(in srgb, #8d54d8 26%, var(--background-secondary)),\n      color-mix(in srgb, #68468d 14%, var(--background-secondary))\n    );\n}\n\n.indice-nights-settings .bri-official-action-button.is-loading {\n  opacity: .68;\n  cursor: wait;\n}\n\n/* iPad */\n@media (max-width: 1024px) {\n  .indice-nights-settings .bri-official-actions-row {\n    gap: 9px;\n    margin-bottom: 12px;\n  }\n\n  .indice-nights-settings .bri-official-action-button {\n    min-height: 40px;\n    font-size: 11.5px;\n  }\n}\n\n/* iPad Split View */\n@media (max-width: 780px) {\n  .indice-nights-settings .bri-official-actions-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n  }\n\n  .indice-nights-settings .bri-official-action-button {\n    padding: 8px 9px;\n    font-size: 11px;\n  }\n}\n\n/* iPhone */\n@media (max-width: 560px) {\n  .indice-nights-settings .bri-official-actions-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 7px;\n    margin-bottom: 11px;\n  }\n\n  .indice-nights-settings .bri-official-action-button {\n    min-height: 42px;\n    padding: 7px 6px;\n    border-radius: 9px;\n    font-size: 10.5px;\n  }\n}\n\n/* Neutraliza regras da v0.8.2 que colocavam ações dentro da faixa */\n.indice-nights-settings .bri-section-divider-with-actions,\n.indice-nights-settings .bri-section-divider-actions,\n.indice-nights-settings .bri-section-divider-action-official {\n  all: unset;\n}\n\n\n/* ============================================================\n   Índice Nights v0.8.7 — seleção em massa e ordem cronológica\n   ============================================================ */\n.indice-nights-settings .bri-bulk-controls {\n  display:flex; align-items:center; justify-content:space-between; gap:14px;\n  width:100%; margin:0 0 14px; padding:11px 14px;\n  border:1px solid var(--background-modifier-border); border-radius:11px;\n  background:var(--background-secondary);\n}\n.indice-nights-settings .bri-bulk-controls-copy { min-width:0; }\n.indice-nights-settings .bri-bulk-controls-title {\n  color:var(--text-normal); font-size:12.5px; font-weight:650; line-height:1.3;\n}\n.indice-nights-settings .bri-bulk-controls-description {\n  margin-top:2px; color:var(--text-muted); font-size:10.5px; line-height:1.35;\n}\n.indice-nights-settings .bri-bulk-controls-toggle .setting-item,\n.indice-nights-settings .bri-publication-order-toggle .setting-item {\n  min-height:0 !important; padding:0 !important; border:0 !important; background:transparent !important;\n}\n.indice-nights-settings .bri-bulk-controls-toggle .setting-item-info,\n.indice-nights-settings .bri-publication-order-toggle .setting-item-info { display:none !important; }\n.indice-nights-settings .bri-bulk-controls-toggle .setting-item-control,\n.indice-nights-settings .bri-publication-order-toggle .setting-item-control {\n  padding:0 !important; margin:0 !important;\n}\n.indice-nights-settings .bri-library-card { height:auto !important; }\n.indice-nights-settings .bri-publication-order-row {\n  grid-column:1/-1; display:flex; align-items:center; justify-content:space-between;\n  gap:10px; padding:9px 0 0; border-top:1px solid var(--background-modifier-border);\n}\n.indice-nights-settings .bri-publication-order-copy { min-width:0; }\n.indice-nights-settings .bri-publication-order-title {\n  color:var(--text-normal); font-size:11.5px; font-weight:600; line-height:1.25;\n}\n.indice-nights-settings .bri-publication-order-description {\n  margin-top:2px; color:var(--text-faint); font-size:9.5px; line-height:1.3;\n}\n@media (max-width:560px) {\n  .indice-nights-settings .bri-bulk-controls { gap:9px; padding:10px 11px; }\n  .indice-nights-settings .bri-bulk-controls-description,\n  .indice-nights-settings .bri-publication-order-description { display:none; }\n  .indice-nights-settings .bri-publication-order-row { gap:8px; }\n}\n\n\n/* ============================================================\n   Índice Nights v0.8.8 — ações compactas + recentes primeiro\n   ============================================================ */\n.indice-nights-settings .bri-official-actions-row {\n  grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto !important;\n  align-items:stretch;\n}\n.indice-nights-settings .bri-official-action-button-compact {\n  width:auto !important;\n  min-width:122px;\n  padding-inline:14px;\n  white-space:nowrap;\n}\n.indice-nights-settings .bri-bulk-controls {\n  display:none !important;\n}\n@media (max-width:1024px) {\n  .indice-nights-settings .bri-official-actions-row {\n    grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto !important;\n  }\n  .indice-nights-settings .bri-official-action-button-compact {\n    min-width:108px;\n    padding-inline:10px;\n    font-size:10.5px;\n  }\n}\n@media (max-width:780px) {\n  .indice-nights-settings .bri-official-actions-row {\n    grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto !important;\n  }\n  .indice-nights-settings .bri-official-action-button-compact {\n    min-width:96px;\n    padding-inline:8px;\n    font-size:10px;\n  }\n}\n@media (max-width:560px) {\n  .indice-nights-settings .bri-official-actions-row {\n    grid-template-columns:repeat(2,minmax(0,1fr)) !important;\n  }\n  .indice-nights-settings .bri-official-action-button-compact {\n    grid-column:2;\n    justify-self:end;\n    width:auto !important;\n    min-width:112px;\n    min-height:30px;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.0 — Contexto Bíblico + Biblioteca viva\n   ============================================================ */\n\n.indice-nights-context-view,\n.indice-nights-library-view,\n.indice-nights-bases-view {\n  --in-accent: var(--interactive-accent);\n  --in-border: var(--background-modifier-border);\n  --in-panel: var(--background-secondary);\n  --in-panel-alt: var(--background-secondary-alt);\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.indice-nights-context-view {\n  padding: 14px 12px 28px;\n  overflow-y: auto;\n}\n\n.in-context-header {\n  margin-bottom: 14px;\n}\n\n.in-context-title,\n.in-library-title,\n.in-bases-title {\n  color: var(--text-normal);\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.in-context-subtitle,\n.in-library-subtitle,\n.in-bases-subtitle {\n  margin-top: 4px;\n  color: var(--text-muted);\n  font-size: 12px;\n  line-height: 1.45;\n}\n\n.in-context-empty,\n.in-context-current-note {\n  padding: 12px;\n  border: 1px solid var(--in-border);\n  border-radius: 12px;\n  background: var(--in-panel);\n}\n\n.in-context-current-note {\n  margin-bottom: 12px;\n}\n\n.in-context-current-title {\n  color: var(--text-normal);\n  font-weight: 650;\n}\n\n.in-context-current-count {\n  margin-top: 3px;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n\n.in-context-reference {\n  margin: 8px 0;\n  border: 1px solid var(--in-border);\n  border-radius: 11px;\n  background: var(--in-panel);\n  overflow: hidden;\n}\n\n.in-context-reference[open] {\n  border-color: color-mix(in srgb, var(--in-accent) 48%, var(--in-border));\n}\n\n.in-context-reference-summary {\n  display: flex;\n  align-items: center;\n  padding: 10px 11px;\n  cursor: pointer;\n  list-style: none;\n}\n\n.in-context-reference-summary::-webkit-details-marker {\n  display: none;\n}\n\n.in-context-reference-copy {\n  min-width: 0;\n}\n\n.in-context-reference-name {\n  color: var(--text-accent);\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.in-context-reference-count {\n  margin-top: 2px;\n  color: var(--text-muted);\n  font-size: 10.5px;\n}\n\n.in-context-reference-body {\n  padding: 0 10px 10px;\n}\n\n.in-context-group {\n  margin-top: 8px;\n}\n\n.in-context-group-title {\n  margin-bottom: 4px;\n  color: var(--text-faint);\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n\n.in-context-note-link,\n.in-library-link {\n  appearance: none;\n  border: 0;\n  background: transparent;\n  color: var(--text-accent);\n  cursor: pointer;\n  text-align: left;\n}\n\n.in-context-note-link {\n  display: block;\n  width: 100%;\n  padding: 6px 7px;\n  border-radius: 7px;\n  font-size: 11.5px;\n  line-height: 1.35;\n}\n\n.in-context-note-link:hover,\n.in-library-link:hover {\n  background: var(--background-modifier-hover);\n  color: var(--text-accent-hover);\n}\n\n.indice-nights-library-view,\n.indice-nights-bases-view {\n  padding: 18px;\n  overflow: auto;\n}\n\n.in-library-header {\n  margin-bottom: 14px;\n}\n\n.in-library-controls {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.6fr) repeat(4, minmax(120px, .75fr));\n  gap: 8px;\n  margin-bottom: 10px;\n}\n\n.in-library-search,\n.in-library-filter {\n  width: 100%;\n  min-width: 0;\n}\n\n.in-library-search {\n  min-height: 34px;\n  padding: 6px 10px;\n  border: 1px solid var(--in-border);\n  border-radius: 8px;\n  background: var(--background-primary);\n  color: var(--text-normal);\n}\n\n.in-library-status {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin: 8px 0;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n\n.in-library-live-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 7px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--interactive-success) 14%, transparent);\n  color: var(--text-success);\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.in-library-table-wrap {\n  width: 100%;\n  overflow: auto;\n  border: 1px solid var(--in-border);\n  border-radius: 11px;\n  background: var(--background-primary);\n}\n\n.in-library-table {\n  width: 100%;\n  min-width: 920px;\n  border-collapse: collapse;\n  font-size: 11.5px;\n}\n\n.in-library-table th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  padding: 9px 10px;\n  border-bottom: 1px solid var(--in-border);\n  background: var(--background-secondary);\n  color: var(--text-muted);\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 650;\n}\n\n.in-library-table td {\n  padding: 8px 10px;\n  border-bottom: 1px solid var(--background-modifier-border-hover);\n  color: var(--text-normal);\n  vertical-align: top;\n}\n\n.in-library-table tr:last-child td {\n  border-bottom: 0;\n}\n\n.in-library-link {\n  padding: 1px 2px;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.in-library-reference-link {\n  white-space: nowrap;\n}\n\n.in-library-limit {\n  margin-top: 8px;\n  color: var(--text-muted);\n  font-size: 10.5px;\n}\n\n.in-bases-title {\n  margin-bottom: 2px;\n}\n\n.in-bases-subtitle {\n  margin-bottom: 12px;\n}\n\n@media (max-width: 1100px) {\n  .in-library-controls {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .in-library-search {\n    grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 700px) {\n  .indice-nights-library-view,\n  .indice-nights-bases-view {\n    padding: 12px 9px 24px;\n  }\n\n  .in-library-controls {\n    grid-template-columns: 1fr 1fr;\n    gap: 6px;\n  }\n\n  .in-library-search {\n    grid-column: 1 / -1;\n  }\n\n  .in-library-table {\n    min-width: 760px;\n  }\n\n  .indice-nights-context-view {\n    padding: 10px 8px 22px;\n  }\n}\n\n@media (max-width: 480px) {\n  .in-library-controls {\n    grid-template-columns: 1fr;\n  }\n\n  .in-library-search {\n    grid-column: auto;\n  }\n\n  .in-library-status {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.1 — acesso visível às ferramentas de pesquisa\n   ============================================================ */\n.indice-nights-settings .bri-research-actions {\n  display:grid;\n  grid-template-columns:repeat(2,minmax(0,1fr));\n  gap:10px;\n  width:100%;\n  margin:0 0 16px;\n}\n.indice-nights-settings .bri-research-action {\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:8px;\n  min-height:40px;\n  padding:8px 12px;\n  border:1px solid color-mix(in srgb, var(--interactive-accent) 48%, var(--background-modifier-border));\n  border-radius:10px;\n  background:color-mix(in srgb, var(--interactive-accent) 9%, var(--background-secondary));\n  color:var(--text-normal);\n  font-weight:600;\n  cursor:pointer;\n}\n.indice-nights-settings .bri-research-action:hover {\n  background:color-mix(in srgb, var(--interactive-accent) 16%, var(--background-secondary));\n}\n.indice-nights-settings .bri-research-action-icon {\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  color:var(--text-accent);\n}\n.indice-nights-settings .bri-research-action-icon svg {\n  width:18px;\n  height:18px;\n}\n@media (max-width:560px) {\n  .indice-nights-settings .bri-research-actions {\n    grid-template-columns:1fr;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.2 — refinamento do Contexto Bíblico\n   ============================================================ */\n\n.indice-nights-context-view {\n  padding: 16px 14px 28px !important;\n  overflow-x: hidden !important;\n}\n\n.indice-nights-context-view > * {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.indice-nights-context-view .in-context-header,\n.indice-nights-context-view .in-context-current-note,\n.indice-nights-context-view .in-context-reference {\n  width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.indice-nights-context-view .in-context-reference {\n  overflow: hidden;\n}\n\n.indice-nights-context-view .in-context-reference-summary,\n.indice-nights-context-view .in-context-reference-body,\n.indice-nights-context-view .in-context-group {\n  min-width: 0;\n  max-width: 100%;\n}\n\n.indice-nights-context-view .in-context-note-link {\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  padding: 7px 9px;\n  white-space: normal !important;\n  overflow-wrap: anywhere;\n  word-break: normal;\n  text-overflow: clip;\n  line-height: 1.35;\n  box-sizing: border-box;\n}\n\n.indice-nights-context-view .in-context-current-title,\n.indice-nights-context-view .in-context-reference-name {\n  overflow-wrap: anywhere;\n}\n\n.indice-nights-context-view .in-context-group-title {\n  padding-left: 1px;\n}\n\n@media (max-width: 700px) {\n  .indice-nights-context-view {\n    padding: 12px 10px 24px !important;\n  }\n\n  .indice-nights-context-view .in-context-note-link {\n    padding: 7px 8px;\n  }\n}\n\n@media (max-width: 480px) {\n  .indice-nights-context-view {\n    padding: 10px 8px 22px !important;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.3 — refinamento do painel Contexto Bíblico\n   ============================================================ */\n\n.indice-nights-context-view {\n  padding: 14px 12px 26px !important;\n}\n\n.indice-nights-context-view .in-context-header {\n  margin-bottom: 12px !important;\n}\n\n.indice-nights-context-view .in-context-title {\n  font-size: 17px !important;\n  line-height: 1.2 !important;\n}\n\n.indice-nights-context-view .in-context-subtitle {\n  margin-top: 3px !important;\n  font-size: 10.5px !important;\n  line-height: 1.45 !important;\n}\n\n.indice-nights-context-view .in-context-current-note {\n  padding: 11px 12px !important;\n  margin-bottom: 12px !important;\n  border-radius: 11px !important;\n}\n\n.indice-nights-context-view .in-context-current-title {\n  font-size: 12.5px !important;\n  line-height: 1.35 !important;\n}\n\n.indice-nights-context-view .in-context-current-count {\n  margin-top: 3px !important;\n  font-size: 10px !important;\n}\n\n.indice-nights-context-view .in-context-reference {\n  margin: 8px 0 !important;\n  border-radius: 11px !important;\n}\n\n.indice-nights-context-view .in-context-reference-summary {\n  padding: 10px 11px !important;\n}\n\n.indice-nights-context-view .in-context-reference-name {\n  font-size: 11.5px !important;\n  line-height: 1.3 !important;\n}\n\n.indice-nights-context-view .in-context-reference-count {\n  margin-top: 2px !important;\n  font-size: 9.5px !important;\n  line-height: 1.35 !important;\n}\n\n.indice-nights-context-view .in-context-reference-body {\n  padding: 0 9px 10px !important;\n}\n\n.indice-nights-context-view .in-context-group {\n  margin-top: 9px !important;\n}\n\n.indice-nights-context-view .in-context-group:first-child {\n  margin-top: 2px !important;\n}\n\n.indice-nights-context-view .in-context-group-title {\n  margin: 0 2px 5px !important;\n  font-size: 8.5px !important;\n  letter-spacing: .06em !important;\n}\n\n.indice-nights-context-view .in-context-note-link {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  min-width: 0 !important;\n  margin: 0 0 5px !important;\n  padding: 7px 8px !important;\n\n  border: 1px solid var(--background-modifier-border) !important;\n  border-radius: 7px !important;\n  background: var(--background-primary-alt) !important;\n\n  color: var(--text-normal) !important;\n  font-size: 9.8px !important;\n  line-height: 1.35 !important;\n\n  white-space: normal !important;\n  overflow: hidden !important;\n  overflow-wrap: anywhere !important;\n  word-break: break-word !important;\n  text-overflow: clip !important;\n\n  box-sizing: border-box !important;\n}\n\n.indice-nights-context-view .in-context-note-link:last-child {\n  margin-bottom: 0 !important;\n}\n\n.indice-nights-context-view .in-context-note-link:hover {\n  border-color: color-mix(in srgb, var(--interactive-accent) 42%, var(--background-modifier-border)) !important;\n  background: var(--background-modifier-hover) !important;\n  color: var(--text-normal) !important;\n}\n\n.indice-nights-context-view .in-context-note-link:focus-visible {\n  outline: 2px solid var(--interactive-accent) !important;\n  outline-offset: 1px !important;\n}\n\n/* Em painéis laterais muito estreitos, reduzimos mais um pouco sem perder legibilidade. */\n@media (max-width: 420px) {\n  .indice-nights-context-view {\n    padding: 12px 10px 22px !important;\n  }\n\n  .indice-nights-context-view .in-context-current-note,\n  .indice-nights-context-view .in-context-reference-summary {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n\n  .indice-nights-context-view .in-context-reference-body {\n    padding-left: 8px !important;\n    padding-right: 8px !important;\n  }\n\n  .indice-nights-context-view .in-context-note-link {\n    padding: 6px 7px !important;\n    font-size: 9.4px !important;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.4 — transcrições limpas + Contexto Bíblico\n   ============================================================ */\n\n/* Oculta o bloco visual de propriedades SOMENTE em notas da pasta Discursos/.\n   Os dados continuam existindo no frontmatter e continuam sendo usados pelo plugin. */\n.indice-nights-transcript-view .metadata-container,\n.indice-nights-transcript-view .metadata-properties,\n.indice-nights-transcript-view .metadata-properties-heading,\n.indice-nights-transcript-view .metadata-add-button {\n  display: none !important;\n}\n\n/* Contexto Bíblico — mais próximo do mockup aprovado */\n.indice-nights-context-view {\n  padding: 16px 14px 30px !important;\n  overflow-x: hidden !important;\n}\n\n.indice-nights-context-view .in-context-header {\n  margin-bottom: 15px !important;\n}\n\n.indice-nights-context-view .in-context-title {\n  font-size: 19px !important;\n  line-height: 1.2 !important;\n  font-weight: 750 !important;\n}\n\n.indice-nights-context-view .in-context-subtitle {\n  margin-top: 5px !important;\n  font-size: 12px !important;\n  line-height: 1.5 !important;\n}\n\n.indice-nights-context-view .in-context-current-note {\n  padding: 14px 15px !important;\n  margin-bottom: 15px !important;\n  border-radius: 13px !important;\n}\n\n.indice-nights-context-view .in-context-current-title {\n  font-size: 14px !important;\n  line-height: 1.45 !important;\n  font-weight: 700 !important;\n}\n\n.indice-nights-context-view .in-context-current-count {\n  margin-top: 5px !important;\n  font-size: 11.5px !important;\n  line-height: 1.4 !important;\n}\n\n.indice-nights-context-view .in-context-reference {\n  margin: 11px 0 !important;\n  border-radius: 13px !important;\n  overflow: visible !important;\n}\n\n.indice-nights-context-view .in-context-reference[open] {\n  overflow: visible !important;\n}\n\n.indice-nights-context-view .in-context-reference-summary {\n  padding: 13px 14px !important;\n}\n\n.indice-nights-context-view .in-context-reference-name {\n  font-size: 14px !important;\n  line-height: 1.3 !important;\n  font-weight: 700 !important;\n}\n\n.indice-nights-context-view .in-context-reference-count {\n  margin-top: 4px !important;\n  font-size: 11.5px !important;\n  line-height: 1.4 !important;\n}\n\n.indice-nights-context-view .in-context-reference-body {\n  padding: 0 12px 13px !important;\n  overflow: visible !important;\n}\n\n.indice-nights-context-view .in-context-group {\n  margin-top: 13px !important;\n  overflow: visible !important;\n}\n\n.indice-nights-context-view .in-context-group:first-child {\n  margin-top: 3px !important;\n}\n\n.indice-nights-context-view .in-context-group-title {\n  margin: 0 3px 7px !important;\n  font-size: 10px !important;\n  line-height: 1.3 !important;\n  letter-spacing: .055em !important;\n}\n\n.indice-nights-context-view .in-context-note-link {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  min-width: 0 !important;\n\n  height: auto !important;\n  min-height: 40px !important;\n  max-height: none !important;\n\n  margin: 0 0 7px !important;\n  padding: 10px 11px !important;\n\n  border: 1px solid var(--background-modifier-border) !important;\n  border-radius: 9px !important;\n  background: var(--background-primary-alt) !important;\n\n  color: var(--text-normal) !important;\n  font-size: 12px !important;\n  line-height: 1.5 !important;\n\n  white-space: normal !important;\n  overflow: visible !important;\n  overflow-wrap: anywhere !important;\n  word-break: normal !important;\n  text-overflow: unset !important;\n\n  box-sizing: border-box !important;\n}\n\n.indice-nights-context-view .in-context-note-link:last-child {\n  margin-bottom: 0 !important;\n}\n\n.indice-nights-context-view .in-context-note-link:hover {\n  border-color: color-mix(in srgb, var(--interactive-accent) 45%, var(--background-modifier-border)) !important;\n  background: var(--background-modifier-hover) !important;\n}\n\n/* iPad / Split View */\n@media (max-width: 700px) {\n  .indice-nights-context-view {\n    padding: 14px 11px 26px !important;\n  }\n\n  .indice-nights-context-view .in-context-title {\n    font-size: 18px !important;\n  }\n\n  .indice-nights-context-view .in-context-current-title,\n  .indice-nights-context-view .in-context-reference-name {\n    font-size: 13.5px !important;\n  }\n\n  .indice-nights-context-view .in-context-note-link {\n    min-height: 38px !important;\n    padding: 9px 10px !important;\n    font-size: 11.8px !important;\n  }\n}\n\n/* iPhone */\n@media (max-width: 480px) {\n  .indice-nights-context-view {\n    padding: 12px 9px 24px !important;\n  }\n\n  .indice-nights-context-view .in-context-note-link {\n    min-height: 36px !important;\n    padding: 8px 9px !important;\n    font-size: 11.5px !important;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.5 — leitor completo dentro do Contexto Bíblico\n   ============================================================ */\n\n.indice-nights-context-view .in-context-note-link {\n  position: relative !important;\n  padding-right: 34px !important;\n}\n\n.indice-nights-context-view .in-context-note-arrow {\n  position: absolute;\n  top: 50%;\n  right: 9px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  pointer-events: none;\n}\n\n.indice-nights-context-view .in-context-note-arrow svg {\n  width: 15px;\n  height: 15px;\n}\n\n/* A sidebar vira um leitor secundário limpo. */\n.indice-nights-context-view.in-context-reader-mode {\n  padding: 0 12px 28px !important;\n  overflow-x: hidden !important;\n}\n\n.in-context-reader-toolbar {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  min-height: 44px;\n  margin: 0 -12px 12px;\n  padding: 6px 12px;\n  border-bottom: 1px solid var(--background-modifier-border);\n  background: color-mix(in srgb, var(--background-primary) 94%, transparent);\n  backdrop-filter: blur(10px);\n}\n\n.in-context-reader-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  max-width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--text-accent);\n  font-size: 12.5px;\n  font-weight: 650;\n  cursor: pointer;\n}\n\n.in-context-reader-back:hover {\n  background: var(--background-modifier-hover);\n}\n\n.in-context-reader-back-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.in-context-reader-back-icon svg {\n  width: 16px;\n  height: 16px;\n}\n\n.in-context-reader-heading {\n  margin: 2px 2px 14px;\n}\n\n.in-context-reader-title {\n  color: var(--text-normal);\n  font-size: 18px;\n  font-weight: 750;\n  line-height: 1.3;\n  overflow-wrap: anywhere;\n}\n\n.in-context-reader-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px 9px;\n  margin-top: 7px;\n  color: var(--text-muted);\n  font-size: 10.5px;\n  line-height: 1.35;\n}\n\n.in-context-reader-meta span:not(:last-child)::after {\n  content: \"•\";\n  margin-left: 9px;\n  color: var(--text-faint);\n}\n\n.in-context-reader-markdown {\n  width: 100%;\n  max-width: 100%;\n  padding: 0 2px 24px;\n  box-sizing: border-box;\n  color: var(--text-normal);\n  font-size: 12.5px;\n  line-height: 1.58;\n  overflow-wrap: anywhere;\n}\n\n.in-context-reader-markdown > :first-child {\n  margin-top: 0;\n}\n\n.in-context-reader-markdown h1 {\n  font-size: 19px;\n  line-height: 1.3;\n}\n\n.in-context-reader-markdown h2 {\n  margin-top: 1.35em;\n  font-size: 16px;\n  line-height: 1.35;\n  color: var(--text-accent);\n}\n\n.in-context-reader-markdown h3 {\n  font-size: 14px;\n}\n\n.in-context-reader-markdown p,\n.in-context-reader-markdown li {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.in-context-reader-markdown img {\n  display: block;\n  width: auto;\n  max-width: 100% !important;\n  height: auto !important;\n  margin: 12px auto;\n  border-radius: 8px;\n}\n\n.in-context-reader-markdown img[alt=\"Miniatura\"] {\n  width: 100% !important;\n  max-width: 100% !important;\n  float: none !important;\n  margin: 12px 0 16px !important;\n  object-fit: contain !important;\n}\n\n.in-context-reader-markdown .indice-nights-thumbnail-link {\n  display: block !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  float: none !important;\n  margin: 0 !important;\n}\n\n.in-context-reader-markdown blockquote {\n  margin: 12px 0;\n  padding: 9px 11px;\n  border-left: 3px solid var(--interactive-accent);\n  border-radius: 0 7px 7px 0;\n  background: var(--background-secondary);\n}\n\n.in-context-reader-markdown table {\n  display: block;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\n.in-context-reader-markdown .metadata-container,\n.in-context-reader-markdown .frontmatter,\n.in-context-reader-markdown .frontmatter-container {\n  display: none !important;\n}\n\n/* Os callouts/miníndice continuam cabendo na lateral. */\n.in-context-reader-markdown .callout {\n  max-width: 100%;\n  margin: 10px 0;\n}\n\n/* iPad / Split View */\n@media (max-width: 700px) {\n  .indice-nights-context-view.in-context-reader-mode {\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n\n  .in-context-reader-toolbar {\n    margin-left: -10px;\n    margin-right: -10px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .in-context-reader-title {\n    font-size: 17px;\n  }\n\n  .in-context-reader-markdown {\n    font-size: 12px;\n  }\n}\n\n/* iPhone */\n@media (max-width: 480px) {\n  .in-context-reader-title {\n    font-size: 16px;\n  }\n\n  .in-context-reader-back {\n    font-size: 12px;\n  }\n\n  .in-context-reader-markdown {\n    font-size: 11.8px;\n    line-height: 1.55;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.6 — estabilidade + contexto refinado\n   ============================================================ */\n\n/* Propriedades continuam no arquivo, mas ficam ocultas visualmente em Discursos/. */\n.indice-nights-transcript-view .metadata-container,\n.indice-nights-transcript-view .metadata-properties,\n.indice-nights-transcript-view .metadata-properties-heading,\n.indice-nights-transcript-view .metadata-add-button,\n.indice-nights-metadata-hidden {\n  display: none !important;\n}\n\n/* Subtópicos internos (Adorações Matinais, Congressos, Discursos...) */\n.indice-nights-context-view .in-context-group {\n  position: relative;\n  margin-top: 13px !important;\n  padding: 10px !important;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 11px;\n  background: color-mix(in srgb, var(--background-secondary) 72%, transparent);\n}\n\n.indice-nights-context-view .in-context-group:first-child {\n  margin-top: 5px !important;\n}\n\n.indice-nights-context-view .in-context-group-title {\n  display: inline-flex;\n  align-items: center;\n  width: auto;\n  margin: -1px 0 8px !important;\n  padding: 4px 8px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--interactive-accent) 12%, var(--background-primary));\n  color: var(--text-accent) !important;\n  font-size: 10.5px !important;\n  font-weight: 700 !important;\n  letter-spacing: .045em !important;\n}\n\n/* O resultado interno mantém seu próprio contorno, criando dois níveis visuais claros. */\n.indice-nights-context-view .in-context-group .in-context-note-link {\n  margin-bottom: 7px !important;\n  background: var(--background-primary-alt) !important;\n}\n\n.indice-nights-context-view .in-context-group .in-context-note-link:last-child {\n  margin-bottom: 0 !important;\n}\n\n/* Destaque temporário ao abrir diretamente na citação no leitor lateral. */\n.in-context-reader-markdown .in-context-citation-anchor {\n  display: block;\n  position: relative;\n  top: -8px;\n  width: 1px;\n  height: 1px;\n}\n\n.in-context-reader-markdown .in-context-citation-highlight {\n  border-left: 3px solid var(--interactive-accent) !important;\n  padding-left: 10px !important;\n  background: color-mix(in srgb, var(--interactive-accent) 8%, transparent) !important;\n  border-radius: 4px;\n}\n\n/* Em painéis muito estreitos, preserva a separação sem consumir largura demais. */\n@media (max-width: 480px) {\n  .indice-nights-context-view .in-context-group {\n    padding: 8px !important;\n  }\n\n  .indice-nights-context-view .in-context-group-title {\n    font-size: 10px !important;\n    padding: 3px 7px;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.7 — citação centralizada + Índice destacado\n   ============================================================ */\n\n/* Quando o Índice Geral abre uma ocorrência, usa a mesma linguagem visual\n   do Contexto Bíblico: barra lateral roxa + fundo suave. */\n.in-index-citation-highlight {\n  position: relative;\n  border-left: 3px solid var(--interactive-accent) !important;\n  padding-left: 10px !important;\n  background: color-mix(in srgb, var(--interactive-accent) 10%, transparent) !important;\n  border-radius: 4px !important;\n  transition: background-color .18s ease, border-color .18s ease;\n}\n\n/* Cada referência do Índice passa a funcionar visualmente como um cartão. */\n.bri-root .bri-reference {\n  margin: 10px 0 14px !important;\n  padding: 12px 13px !important;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 34%, var(--background-modifier-border)) !important;\n  border-radius: 12px !important;\n  background: color-mix(in srgb, var(--interactive-accent) 5%, var(--background-secondary)) !important;\n  list-style: none !important;\n}\n\n.bri-root .bri-reference-title {\n  display: block;\n  margin-bottom: 8px;\n  color: var(--text-accent) !important;\n  font-size: 1.02em;\n  font-weight: 700;\n}\n\n.bri-root .bri-note-list {\n  margin: 0 !important;\n  padding: 0 !important;\n  list-style: none !important;\n}\n\n.bri-root .bri-note-result {\n  margin: 6px 0 !important;\n  padding: 8px 10px !important;\n  border: 1px solid var(--background-modifier-border) !important;\n  border-left: 3px solid color-mix(in srgb, var(--interactive-accent) 72%, var(--background-modifier-border)) !important;\n  border-radius: 8px !important;\n  background: var(--background-primary-alt) !important;\n  line-height: 1.4;\n  list-style: none !important;\n}\n\n.bri-root .bri-note-result:hover {\n  background: var(--background-modifier-hover) !important;\n  border-color: color-mix(in srgb, var(--interactive-accent) 52%, var(--background-modifier-border)) !important;\n  border-left-color: var(--interactive-accent) !important;\n}\n\n.bri-root .bri-note-result-section {\n  color: var(--text-muted);\n  font-size: .92em;\n}\n\n.bri-root .bri-note-result .internal-link {\n  color: var(--text-accent) !important;\n  font-weight: 550;\n  text-decoration: none;\n}\n\n.bri-root .bri-note-result .internal-link:hover {\n  text-decoration: underline;\n}\n\n/* Em telas estreitas mantém o mesmo destaque sem consumir espaço. */\n@media (max-width: 560px) {\n  .bri-root .bri-reference {\n    padding: 10px !important;\n  }\n\n  .bri-root .bri-note-result {\n    padding: 7px 8px !important;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.8 — destaque do Índice igual ao Contexto\n   ============================================================ */\n\n/* Remove qualquer aparência amarela herdada de realce nativo na área alvo\n   e aplica o mesmo padrão roxo do leitor lateral. */\n.in-index-citation-highlight,\n.in-index-citation-highlight * {\n  --text-highlight-bg: transparent;\n}\n\n.in-index-citation-highlight {\n  border-left: 3px solid var(--interactive-accent) !important;\n  padding-left: 10px !important;\n  background: color-mix(in srgb, var(--interactive-accent) 10%, transparent) !important;\n  border-radius: 4px !important;\n  box-decoration-break: clone;\n  -webkit-box-decoration-break: clone;\n}\n\n.in-index-citation-highlight mark,\n.in-index-citation-highlight .search-highlight,\n.in-index-citation-highlight .is-flashing,\n.in-index-citation-highlight .mod-search-match {\n  background: transparent !important;\n  color: inherit !important;\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.9 — destaque persistente do Índice\n   ============================================================ */\n\n.in-index-citation-highlight {\n  border-left: 3px solid var(--interactive-accent) !important;\n  padding-left: 10px !important;\n  background: color-mix(in srgb, var(--interactive-accent) 10%, transparent) !important;\n  border-radius: 4px !important;\n  transition: none !important;\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.10 — Índice usando destaque nativo do Obsidian\n   ============================================================ */\n\n/* O Índice Geral volta a usar #^bloco e o realce padrão do Obsidian.\n   Estas regras neutralizam apenas o destaque customizado antigo. */\n.in-index-citation-highlight {\n  border-left: 0 !important;\n  padding-left: initial !important;\n  background: transparent !important;\n  border-radius: 0 !important;\n  transition: none !important;\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.16 — revisão manual da renomeação\n   ============================================================ */\n\n.indice-nights-settings .bri-publication-order-actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.indice-nights-settings .bri-publication-review-button {\n  min-height: 32px;\n  padding: 5px 10px;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 48%, var(--background-modifier-border));\n  border-radius: 8px;\n  background: color-mix(in srgb, var(--interactive-accent) 8%, var(--background-secondary));\n  color: var(--text-normal);\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.indice-nights-settings .bri-publication-review-button:hover {\n  background: color-mix(in srgb, var(--interactive-accent) 15%, var(--background-secondary));\n}\n\n.indice-nights-settings .bri-publication-review-button:disabled {\n  opacity: .6;\n  cursor: wait;\n}\n\n.indice-nights-settings .bri-publication-order-actions .bri-publication-order-toggle {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 560px) {\n  .indice-nights-settings .bri-publication-order-actions {\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .indice-nights-settings .bri-publication-review-button {\n    flex: 1 1 auto;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.17 — links bíblicos restaurados\n   ============================================================ */\n\n.indice-nights-verse-actions a.mod-cta {\n  gap: 6px;\n  font-weight: 650;\n}\n\n.indice-nights-scripture-link {\n  color: var(--link-color) !important;\n  text-decoration: underline !important;\n  text-decoration-thickness: from-font !important;\n  text-underline-offset: 2px;\n  cursor: pointer !important;\n}\n\n.indice-nights-scripture-link:hover {\n  color: var(--link-color-hover) !important;\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.18 — Biblioteca pessoal / EPUB\n   ============================================================ */\n\n.indice-nights-settings .bri-section-divider-personal {\n  margin-top: 22px;\n  border-color: color-mix(in srgb, #3aa675 55%, var(--background-modifier-border));\n  background: color-mix(in srgb, #3aa675 11%, var(--background-secondary));\n}\n\n.indice-nights-settings .bri-personal-library-panel {\n  display: grid;\n  grid-template-columns: 44px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 13px;\n  margin-top: 10px;\n  padding: 14px 15px;\n  border: 1px solid color-mix(in srgb, #3aa675 38%, var(--background-modifier-border));\n  border-radius: 12px;\n  background: var(--background-secondary);\n}\n\n.indice-nights-settings .bri-personal-library-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 11px;\n  background: color-mix(in srgb, #3aa675 15%, var(--background-modifier-hover));\n  color: #55bd8a;\n}\n\n.indice-nights-settings .bri-personal-library-icon svg {\n  width: 21px;\n  height: 21px;\n}\n\n.indice-nights-settings .bri-personal-library-copy {\n  min-width: 0;\n}\n\n.indice-nights-settings .bri-personal-library-title {\n  color: var(--text-normal);\n  font-weight: 700;\n  font-size: 14px;\n}\n\n.indice-nights-settings .bri-personal-library-description {\n  margin-top: 4px;\n  color: var(--text-muted);\n  font-size: 11.5px;\n  line-height: 1.45;\n}\n\n.indice-nights-settings .bri-personal-library-button {\n  min-height: 36px;\n  padding: 7px 13px;\n  border: 1px solid color-mix(in srgb, #3aa675 58%, var(--background-modifier-border));\n  border-radius: 9px;\n  background: color-mix(in srgb, #3aa675 13%, var(--background-secondary));\n  color: var(--text-normal);\n  font-weight: 650;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.indice-nights-settings .bri-personal-library-button:hover {\n  background: color-mix(in srgb, #3aa675 21%, var(--background-secondary));\n}\n\n.indice-nights-settings .bri-personal-library-button:disabled {\n  opacity: .62;\n  cursor: wait;\n}\n\n.indice-nights-settings .bri-personal-library-input {\n  position: fixed !important;\n  width: 1px !important;\n  height: 1px !important;\n  opacity: 0 !important;\n  pointer-events: none !important;\n  overflow: hidden !important;\n}\n\n.indice-nights-book-view .metadata-container,\n.indice-nights-book-view .metadata-properties,\n.indice-nights-book-view .metadata-properties-heading,\n.indice-nights-book-view .metadata-add-button {\n  display: none !important;\n}\n\n@media (max-width: 620px) {\n  .indice-nights-settings .bri-personal-library-panel {\n    grid-template-columns: 42px minmax(0, 1fr);\n  }\n\n  .indice-nights-settings .bri-personal-library-button {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n}\n\n\n/* ============================================================\n   Indice Nights v0.9.19 — livros conectados ao estudo bíblico\n   ============================================================ */\n\n.indice-nights-settings .bri-personal-library-panel {\n  grid-template-columns: 44px minmax(0, 1fr) auto auto;\n}\n\n.indice-nights-settings .bri-personal-library-button-secondary {\n  background: var(--background-primary-alt);\n}\n\n.indice-nights-settings .bri-personal-library-button-secondary:hover {\n  background: var(--background-modifier-hover);\n}\n\n/* Links gravados nos livros funcionam também no Live Preview. */\n.indice-nights-book-view a[href^=\"obsidian://indice-nights-bible\"],\n.markdown-rendered a[href^=\"obsidian://indice-nights-bible\"] {\n  color: var(--link-color) !important;\n  text-decoration: underline !important;\n  text-underline-offset: 2px;\n  cursor: pointer !important;\n}\n\n@media (max-width: 760px) {\n  .indice-nights-settings .bri-personal-library-panel {\n    grid-template-columns: 42px minmax(0, 1fr);\n  }\n\n  .indice-nights-settings .bri-personal-library-button {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.9.20 — Índice Geral Premium\n   ============================================================ */\n\n.bri-root {\n  --bri-surface: color-mix(in srgb, var(--background-secondary) 94%, var(--interactive-accent) 6%);\n  --bri-border: color-mix(in srgb, var(--background-modifier-border) 76%, var(--interactive-accent) 24%);\n  --bri-accent-soft: color-mix(in srgb, var(--interactive-accent) 11%, transparent);\n  --bri-accent-medium: color-mix(in srgb, var(--interactive-accent) 24%, transparent);\n  max-width: 1080px;\n  margin: 0 auto;\n  padding-bottom: 48px;\n}\n\n.bri-root .bri-summary {\n  position: relative;\n  overflow: hidden;\n  margin: 8px 0 18px;\n  padding: 18px;\n  border: 1px solid var(--bri-border);\n  border-radius: 16px;\n  background:\n    radial-gradient(circle at 95% 0%, var(--bri-accent-medium), transparent 34%),\n    linear-gradient(145deg, var(--bri-surface), var(--background-secondary));\n  box-shadow: 0 8px 28px rgba(0, 0, 0, .10);\n}\n\n.bri-root .bri-summary::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: linear-gradient(180deg, var(--interactive-accent), color-mix(in srgb, var(--interactive-accent) 35%, transparent));\n}\n\n.bri-summary-header {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  margin-bottom: 15px;\n}\n\n.bri-summary-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex: 0 0 38px;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 42%, var(--background-modifier-border));\n  border-radius: 11px;\n  background: var(--bri-accent-soft);\n  color: var(--text-accent);\n}\n\n.bri-summary-icon svg {\n  width: 19px;\n  height: 19px;\n}\n\n.bri-summary-copy {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.bri-summary-copy strong {\n  color: var(--text-normal);\n  font-size: 15px;\n  line-height: 1.25;\n}\n\n.bri-summary-copy small {\n  margin-top: 2px;\n  color: var(--text-muted);\n  font-size: 11.5px;\n}\n\n.bri-root .bri-summary-stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  margin: 0;\n}\n\n.bri-stat-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  padding: 11px 12px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 11px;\n  background: color-mix(in srgb, var(--background-primary) 86%, transparent);\n}\n\n.bri-stat-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  flex: 0 0 30px;\n  border-radius: 8px;\n  background: var(--bri-accent-soft);\n  color: var(--text-accent);\n}\n\n.bri-stat-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-stat-content {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.bri-stat-value {\n  overflow: hidden;\n  color: var(--text-normal);\n  font-size: 16px;\n  font-weight: 750;\n  line-height: 1.15;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bri-stat-label {\n  overflow: hidden;\n  margin-top: 2px;\n  color: var(--text-muted);\n  font-size: 10.5px;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bri-root .bri-controls {\n  gap: 10px;\n  margin-bottom: 22px;\n}\n\n.bri-root .bri-control-group {\n  gap: 6px;\n}\n\n.bri-root .bri-control-group label {\n  padding-left: 2px;\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: .015em;\n}\n\n.bri-root .bri-control-group select,\n.bri-root .bri-control-group input {\n  min-height: 40px;\n  padding-inline: 12px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 10px;\n  background: var(--background-secondary);\n  box-shadow: none;\n}\n\n.bri-root .bri-control-group select:focus,\n.bri-root .bri-control-group input:focus {\n  border-color: color-mix(in srgb, var(--interactive-accent) 72%, var(--background-modifier-border));\n  box-shadow: 0 0 0 2px var(--bri-accent-soft);\n}\n\n.bri-root .bri-search-mode {\n  position: relative;\n  align-items: center;\n  min-height: 58px;\n  padding: 10px 13px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 12px;\n  background: var(--background-secondary);\n}\n\n.bri-root .bri-search-mode:hover {\n  border-color: var(--bri-border);\n  background: color-mix(in srgb, var(--background-secondary) 95%, var(--interactive-accent) 5%);\n}\n\n.bri-root .bri-search-mode input {\n  width: 18px;\n  height: 18px;\n  margin: 0;\n}\n\n.bri-root .bri-search-mode label {\n  gap: 3px;\n  color: var(--text-normal);\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.bri-root .bri-search-mode small {\n  color: var(--text-muted);\n  font-size: 11px;\n  line-height: 1.35;\n}\n\n.bri-book-heading {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  margin: 25px 0 12px;\n  padding: 0 2px 10px;\n  border-bottom: 1px solid var(--background-modifier-border);\n}\n\n.bri-book-heading-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  border-radius: 9px;\n  background: var(--bri-accent-soft);\n  color: var(--text-accent);\n}\n\n.bri-book-heading-icon svg {\n  width: 18px;\n  height: 18px;\n}\n\n.bri-book-heading-copy {\n  min-width: 0;\n}\n\n.bri-book-heading-copy h2 {\n  margin: 0 !important;\n  color: var(--text-normal);\n  font-size: 21px;\n  line-height: 1.15;\n}\n\n.bri-book-heading-count {\n  display: block;\n  margin-top: 3px;\n  color: var(--text-muted);\n  font-size: 10.5px;\n}\n\n.bri-root .bri-reference-list {\n  display: grid;\n  gap: 12px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.bri-root .bri-reference {\n  margin: 0 !important;\n  padding: 13px !important;\n  border: 1px solid var(--bri-border) !important;\n  border-radius: 14px !important;\n  background:\n    linear-gradient(135deg, var(--bri-accent-soft), transparent 42%),\n    var(--background-secondary) !important;\n  box-shadow: 0 5px 18px rgba(0, 0, 0, .07);\n}\n\n.bri-reference-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 9px;\n}\n\n.bri-root .bri-reference-title {\n  margin: 0;\n  color: var(--text-accent) !important;\n  font-size: 14px;\n  font-weight: 750;\n}\n\n.bri-reference-count {\n  flex: 0 0 auto;\n  padding: 3px 7px;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 25%, var(--background-modifier-border));\n  border-radius: 999px;\n  background: var(--bri-accent-soft);\n  color: var(--text-muted);\n  font-size: 9.5px;\n  font-weight: 650;\n}\n\n.bri-root .bri-note-result {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 42px;\n  margin: 7px 0 0 !important;\n  padding: 9px 36px 9px 11px !important;\n  border: 1px solid var(--background-modifier-border) !important;\n  border-left: 3px solid color-mix(in srgb, var(--interactive-accent) 78%, var(--background-modifier-border)) !important;\n  border-radius: 9px !important;\n  background: var(--background-primary-alt) !important;\n  line-height: 1.35;\n  transition: transform .14s ease, border-color .14s ease, background-color .14s ease;\n}\n\n.bri-root .bri-note-result:hover {\n  transform: translateX(2px);\n  border-color: color-mix(in srgb, var(--interactive-accent) 48%, var(--background-modifier-border)) !important;\n  border-left-color: var(--interactive-accent) !important;\n  background: var(--background-modifier-hover) !important;\n}\n\n.bri-root .bri-note-result-section {\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.bri-root .bri-note-result .internal-link {\n  color: var(--text-normal) !important;\n  font-size: 12.5px;\n  font-weight: 600;\n  text-decoration: none !important;\n}\n\n.bri-root .bri-note-result:hover .internal-link {\n  color: var(--text-accent) !important;\n}\n\n.bri-note-arrow {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-faint);\n  transform: translateY(-50%);\n}\n\n.bri-note-arrow svg {\n  width: 14px;\n  height: 14px;\n}\n\n.bri-root .bri-note-result:hover .bri-note-arrow {\n  color: var(--text-accent);\n}\n\n.bri-root .bri-content-result {\n  border: 1px solid var(--bri-border);\n  border-radius: 13px;\n  background: var(--background-secondary);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, .06);\n}\n\n.bri-root .bri-search-status {\n  padding: 9px 11px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 9px;\n  background: var(--background-secondary);\n}\n\n@media (max-width: 720px) {\n  .bri-root .bri-summary-stats {\n    grid-template-columns: 1fr;\n  }\n\n  .bri-root .bri-controls {\n    grid-template-columns: 1fr;\n  }\n\n  .bri-root .bri-search-mode {\n    grid-column: 1;\n  }\n}\n\n@media (max-width: 480px) {\n  .bri-root .bri-summary {\n    padding: 14px;\n    border-radius: 13px;\n  }\n\n  .bri-root .bri-reference {\n    padding: 10px !important;\n    border-radius: 11px !important;\n  }\n\n  .bri-root .bri-note-result {\n    display: block;\n    padding: 8px 30px 8px 9px !important;\n  }\n\n  .bri-root .bri-note-result-section {\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  .bri-reference-count {\n    font-size: 9px;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.9.21 — Índice limpo + seletor moderno\n   ============================================================ */\n\n.bri-root {\n  margin-top: 0 !important;\n}\n\n.bri-book-selector {\n  position: relative;\n  width: 100%;\n  z-index: 20;\n}\n\n.bri-book-selector-button {\n  display: grid;\n  grid-template-columns: 28px minmax(0, 1fr) 22px;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  min-height: 42px;\n  padding: 6px 10px;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 55%, var(--background-modifier-border));\n  border-radius: 11px;\n  background:\n    linear-gradient(135deg, color-mix(in srgb, var(--interactive-accent) 8%, transparent), transparent 55%),\n    var(--background-secondary);\n  color: var(--text-normal);\n  text-align: left;\n  cursor: pointer;\n  transition: border-color .16s ease, box-shadow .16s ease, background-color .16s ease;\n}\n\n.bri-book-selector-button:hover {\n  border-color: color-mix(in srgb, var(--interactive-accent) 78%, var(--background-modifier-border));\n}\n\n.bri-book-selector.is-open .bri-book-selector-button {\n  border-color: var(--interactive-accent);\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--interactive-accent) 14%, transparent);\n}\n\n.bri-book-selector-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: color-mix(in srgb, var(--interactive-accent) 13%, transparent);\n  color: var(--text-accent);\n}\n\n.bri-book-selector-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-book-selector-label {\n  overflow: hidden;\n  font-size: 12.5px;\n  font-weight: 650;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bri-book-selector-chevron {\n  display: inline-flex;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: transform .16s ease, color .16s ease;\n}\n\n.bri-book-selector-chevron svg {\n  width: 16px;\n  height: 16px;\n}\n\n.bri-book-selector.is-open .bri-book-selector-chevron {\n  color: var(--text-accent);\n  transform: rotate(180deg);\n}\n\n.bri-book-selector.is-disabled {\n  opacity: .48;\n}\n\n.bri-book-selector.is-disabled .bri-book-selector-button {\n  cursor: not-allowed;\n}\n\n.bri-book-selector-menu {\n  position: absolute;\n  top: calc(100% + 7px);\n  left: 0;\n  display: none;\n  width: min(360px, 100%);\n  max-height: min(450px, 62vh);\n  overflow: hidden;\n  border: 1px solid color-mix(in srgb, var(--interactive-accent) 42%, var(--background-modifier-border));\n  border-radius: 13px;\n  background: color-mix(in srgb, var(--background-primary) 96%, var(--interactive-accent) 4%);\n  box-shadow: 0 18px 48px rgba(0, 0, 0, .34);\n  backdrop-filter: blur(14px);\n}\n\n.bri-book-selector.is-open .bri-book-selector-menu {\n  display: block;\n  animation: bri-selector-open .14s ease-out;\n}\n\n@keyframes bri-selector-open {\n  from { opacity: 0; transform: translateY(-5px) scale(.985); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n.bri-book-selector-search-wrap {\n  position: relative;\n  padding: 10px;\n  border-bottom: 1px solid var(--background-modifier-border);\n  background: color-mix(in srgb, var(--background-secondary) 90%, transparent);\n}\n\n.bri-book-selector-search-icon {\n  position: absolute;\n  top: 50%;\n  left: 21px;\n  display: inline-flex;\n  color: var(--text-muted);\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.bri-book-selector-search-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-book-selector-search {\n  width: 100%;\n  min-height: 36px;\n  padding: 6px 10px 6px 34px !important;\n  border: 1px solid var(--background-modifier-border) !important;\n  border-radius: 9px !important;\n  background: var(--background-primary-alt) !important;\n  font-size: 12px;\n}\n\n.bri-book-selector-search:focus {\n  border-color: var(--interactive-accent) !important;\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--interactive-accent) 12%, transparent) !important;\n}\n\n.bri-book-selector-options {\n  max-height: min(380px, 50vh);\n  overflow-y: auto;\n  padding: 7px;\n  scrollbar-width: thin;\n}\n\n.bri-book-selector-option {\n  display: grid;\n  grid-template-columns: 25px minmax(0, 1fr) auto 20px;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 38px;\n  margin: 1px 0;\n  padding: 6px 8px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--text-normal);\n  text-align: left;\n  cursor: pointer;\n}\n\n.bri-book-selector-option:hover {\n  border-color: color-mix(in srgb, var(--interactive-accent) 24%, var(--background-modifier-border));\n  background: var(--background-modifier-hover);\n}\n\n.bri-book-selector-option.is-selected {\n  border-color: color-mix(in srgb, var(--interactive-accent) 52%, var(--background-modifier-border));\n  background:\n    linear-gradient(90deg, color-mix(in srgb, var(--interactive-accent) 24%, transparent), color-mix(in srgb, var(--interactive-accent) 9%, transparent));\n  color: var(--text-accent);\n}\n\n.bri-book-selector-option.is-filtered-out {\n  display: none;\n}\n\n.bri-book-selector-option-icon,\n.bri-book-selector-option-check {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n\n.bri-book-selector-option-icon svg,\n.bri-book-selector-option-check svg {\n  width: 14px;\n  height: 14px;\n}\n\n.bri-book-selector-option-check {\n  color: var(--text-accent);\n}\n\n.bri-book-selector-option-name {\n  overflow: hidden;\n  font-size: 12px;\n  font-weight: 580;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bri-book-selector-option-count {\n  min-width: 28px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--background-secondary) 75%, var(--interactive-accent) 25%);\n  color: var(--text-muted);\n  font-size: 9.5px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.bri-book-selector-option.is-selected .bri-book-selector-option-count {\n  color: var(--text-accent);\n}\n\n@media (max-width: 520px) {\n  .bri-book-selector-menu {\n    width: 100%;\n    max-height: 58vh;\n  }\n\n  .bri-book-selector-options {\n    max-height: 44vh;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.9.22 — divisões bíblicas + contagens destacadas\n   ============================================================ */\n\n.bri-book-selector-options {\n  padding: 5px 7px 9px;\n}\n\n.bri-book-selector-group {\n  margin: 4px 0 10px;\n}\n\n.bri-book-selector-group:last-child {\n  margin-bottom: 2px;\n}\n\n.bri-book-selector-group.is-filtered-out {\n  display: none;\n}\n\n.bri-book-selector-group-header {\n  display: grid;\n  grid-template-columns: 20px auto minmax(18px, 1fr);\n  align-items: center;\n  gap: 7px;\n  min-height: 30px;\n  padding: 5px 7px 4px;\n  color: var(--text-accent);\n}\n\n.bri-book-selector-group-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-accent);\n  opacity: .92;\n}\n\n.bri-book-selector-group-icon svg {\n  width: 14px;\n  height: 14px;\n}\n\n.bri-book-selector-group-name {\n  font-size: 10.5px;\n  font-weight: 760;\n  letter-spacing: .018em;\n  white-space: nowrap;\n}\n\n.bri-book-selector-group-line {\n  height: 1px;\n  margin-left: 3px;\n  background: linear-gradient(\n    90deg,\n    color-mix(in srgb, var(--interactive-accent) 62%, transparent),\n    color-mix(in srgb, var(--interactive-accent) 8%, transparent)\n  );\n}\n\n.bri-book-selector-group-options {\n  display: grid;\n  gap: 3px;\n}\n\n/* Mantém o texto no mesmo tamanho e amplia somente o número. */\n.bri-book-selector-option-count {\n  min-width: 36px !important;\n  padding: 2px 7px !important;\n  background: color-mix(\n    in srgb,\n    var(--interactive-accent) 20%,\n    var(--background-secondary)\n  ) !important;\n  color: var(--text-accent) !important;\n  font-size: 13.5px !important;\n  font-weight: 820 !important;\n  line-height: 1.1;\n  letter-spacing: -.015em;\n}\n\n.bri-book-selector-option.is-selected .bri-book-selector-option-count {\n  background: color-mix(\n    in srgb,\n    var(--interactive-accent) 30%,\n    var(--background-secondary)\n  ) !important;\n  color: var(--text-accent) !important;\n  box-shadow: 0 0 12px color-mix(in srgb, var(--interactive-accent) 16%, transparent);\n}\n\n@media (max-width: 520px) {\n  .bri-book-selector-group-name {\n    font-size: 10px;\n  }\n\n  .bri-book-selector-option-count {\n    min-width: 34px !important;\n    font-size: 13px !important;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.9.23 — página principal com todos os livros\n   ============================================================ */\n\n.bri-book-selector-home {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 20px;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  min-height: 52px;\n  padding: 7px 9px;\n  border: 1px solid transparent;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--text-normal);\n  text-align: left;\n  cursor: pointer;\n}\n\n.bri-book-selector-home:hover {\n  border-color: color-mix(in srgb, var(--interactive-accent) 28%, var(--background-modifier-border));\n  background: var(--background-modifier-hover);\n}\n\n.bri-book-selector-home.is-selected {\n  border-color: color-mix(in srgb, var(--interactive-accent) 52%, var(--background-modifier-border));\n  background: linear-gradient(\n    90deg,\n    color-mix(in srgb, var(--interactive-accent) 24%, transparent),\n    color-mix(in srgb, var(--interactive-accent) 8%, transparent)\n  );\n}\n\n.bri-book-selector-home.is-filtered-out,\n.bri-book-selector-home-divider.is-filtered-out {\n  display: none;\n}\n\n.bri-book-selector-home-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: color-mix(in srgb, var(--interactive-accent) 14%, transparent);\n  color: var(--text-accent);\n}\n\n.bri-book-selector-home-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-book-selector-home-copy {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.bri-book-selector-home-title {\n  font-size: 11.5px;\n  font-weight: 720;\n}\n\n.bri-book-selector-home-subtitle {\n  margin-top: 2px;\n  color: var(--text-muted);\n  font-size: 9.5px;\n}\n\n.bri-book-selector-home-check {\n  display: inline-flex;\n  color: var(--text-accent);\n}\n\n.bri-book-selector-home-check svg {\n  width: 14px;\n  height: 14px;\n}\n\n.bri-book-selector-home-divider {\n  height: 1px;\n  margin: 6px 5px 4px;\n  background: var(--background-modifier-border);\n}\n\n/* Introdução da página principal */\n.bri-books-home-intro {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 7px 0 17px;\n  padding: 11px 13px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 11px;\n  background: var(--background-secondary);\n}\n\n.bri-books-home-intro-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  border-radius: 9px;\n  background: color-mix(in srgb, var(--interactive-accent) 13%, transparent);\n  color: var(--text-accent);\n}\n\n.bri-books-home-intro-icon svg {\n  width: 18px;\n  height: 18px;\n}\n\n.bri-books-home-intro-copy {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.bri-books-home-intro-copy strong {\n  color: var(--text-normal);\n  font-size: 13px;\n}\n\n.bri-books-home-intro-copy small {\n  margin-top: 2px;\n  color: var(--text-muted);\n  font-size: 10.5px;\n}\n\n/* Divisões da Bíblia */\n.bri-books-home-group {\n  margin: 0 0 14px;\n}\n\n.bri-books-home-group-header {\n  display: grid;\n  grid-template-columns: 22px auto minmax(20px, 1fr);\n  align-items: center;\n  gap: 8px;\n  min-height: 34px;\n  padding: 4px 3px;\n  color: var(--text-accent);\n}\n\n.bri-books-home-group-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bri-books-home-group-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-books-home-group-name {\n  font-size: 11px;\n  font-weight: 760;\n  letter-spacing: .018em;\n  white-space: nowrap;\n}\n\n.bri-books-home-group-line {\n  height: 1px;\n  background: linear-gradient(\n    90deg,\n    color-mix(in srgb, var(--interactive-accent) 65%, transparent),\n    color-mix(in srgb, var(--interactive-accent) 7%, transparent)\n  );\n}\n\n.bri-books-home-list {\n  display: grid;\n  gap: 3px;\n}\n\n.bri-books-home-row {\n  position: relative;\n  display: grid;\n  grid-template-columns: 30px minmax(0, 1fr) auto 24px;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  min-height: 40px;\n  padding: 5px 8px 5px 9px;\n  border: 1px solid var(--background-modifier-border);\n  border-left: 3px solid color-mix(in srgb, var(--interactive-accent) 78%, transparent);\n  border-radius: 8px;\n  background:\n    linear-gradient(90deg, color-mix(in srgb, var(--interactive-accent) 5%, transparent), transparent 30%),\n    var(--background-secondary);\n  color: var(--text-normal);\n  text-align: left;\n  cursor: pointer;\n  transition: transform .14s ease, border-color .14s ease, background-color .14s ease;\n}\n\n.bri-books-home-row:hover {\n  transform: translateX(2px);\n  border-color: color-mix(in srgb, var(--interactive-accent) 52%, var(--background-modifier-border));\n  border-left-color: var(--interactive-accent);\n  background:\n    linear-gradient(90deg, color-mix(in srgb, var(--interactive-accent) 10%, transparent), transparent 38%),\n    var(--background-modifier-hover);\n}\n\n.bri-books-home-book-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n\n.bri-books-home-book-icon svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-books-home-book-name {\n  overflow: hidden;\n  font-size: 12.5px;\n  font-weight: 610;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.bri-books-home-book-count {\n  min-width: 42px;\n  color: var(--text-accent);\n  font-size: 18px;\n  font-weight: 840;\n  line-height: 1;\n  text-align: right;\n  letter-spacing: -.02em;\n}\n\n.bri-books-home-book-arrow {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n\n.bri-books-home-book-arrow svg {\n  width: 15px;\n  height: 15px;\n}\n\n.bri-books-home-row:hover .bri-books-home-book-arrow {\n  color: var(--text-accent);\n}\n\n@media (max-width: 520px) {\n  .bri-books-home-book-count {\n    min-width: 34px;\n    font-size: 16px;\n  }\n\n  .bri-books-home-book-name {\n    font-size: 12px;\n  }\n\n  .bri-books-home-group-name {\n    font-size: 10.5px;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.9.24 — duas colunas e busca compacta\n   ============================================================ */\n\n.bri-root .bri-controls {\n  grid-template-columns: minmax(220px, .78fr) minmax(360px, 1.22fr);\n  align-items: end;\n}\n\n.bri-search-control-group {\n  min-width: 0;\n}\n\n.bri-search-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  min-height: 22px;\n}\n\n.bri-search-header > label {\n  flex: 0 0 auto;\n}\n\n.bri-root .bri-search-mode-inline {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  min-height: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n\n.bri-root .bri-search-mode-inline:hover {\n  border: 0;\n  background: transparent;\n}\n\n.bri-root .bri-search-mode-inline input {\n  width: 15px;\n  height: 15px;\n  flex: 0 0 15px;\n  margin: 0;\n}\n\n.bri-root .bri-search-mode-inline label {\n  color: var(--text-muted);\n  font-size: 10.5px;\n  font-weight: 620;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.bri-books-home-intro {\n  display: none !important;\n}\n\n.bri-books-home-columns {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  align-items: start;\n  gap: 24px;\n  margin-top: 8px;\n}\n\n.bri-books-home-column {\n  min-width: 0;\n}\n\n.bri-books-home-group {\n  margin-bottom: 13px;\n}\n\n.bri-books-home-row {\n  min-height: 36px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.bri-books-home-book-count {\n  font-size: 16px;\n}\n\n@media (max-width: 860px) {\n  .bri-root .bri-controls {\n    grid-template-columns: 1fr;\n  }\n\n  .bri-books-home-columns {\n    gap: 14px;\n  }\n\n  .bri-books-home-book-name {\n    font-size: 11.5px;\n  }\n\n  .bri-books-home-book-count {\n    min-width: 32px;\n    font-size: 15px;\n  }\n}\n\n@media (max-width: 620px) {\n  .bri-search-header {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 6px;\n  }\n\n  .bri-root .bri-search-mode-inline label {\n    white-space: normal;\n  }\n\n  .bri-books-home-columns {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n\n\n/* ============================================================\n   Índice Nights v0.9.25 — Biblioteca em lista vertical universal\n   Desktop, iPad, split view e celular\n   ============================================================ */\n\n/* Toda a biblioteca passa a usar uma única coluna. */\n.indice-nights-settings .bri-catalog-settings {\n  display: grid !important;\n  grid-template-columns: minmax(0, 1fr) !important;\n  gap: 12px !important;\n}\n\n/* Congressos e Séries também permanecem um abaixo do outro. */\n.indice-nights-settings .bri-library-groups-wrap {\n  grid-column: 1 !important;\n  grid-template-columns: minmax(0, 1fr) !important;\n  gap: 12px !important;\n}\n\n/* Cartões comuns em formato horizontal, semelhante aos grupos expansíveis. */\n.indice-nights-settings .bri-library-card {\n  width: 100% !important;\n  min-height: 142px !important;\n  display: grid !important;\n  grid-template-columns:\n    48px\n    minmax(190px, .92fr)\n    minmax(180px, .72fr)\n    minmax(250px, 1.05fr) !important;\n  grid-template-rows: auto !important;\n  align-items: center !important;\n  column-gap: 16px !important;\n  row-gap: 8px !important;\n  padding: 16px !important;\n}\n\n/* Ícone */\n.indice-nights-settings .bri-library-card-icon {\n  grid-column: 1 !important;\n  grid-row: 1 !important;\n  align-self: start !important;\n}\n\n/* Texto principal */\n.indice-nights-settings .bri-library-card-copy {\n  grid-column: 2 !important;\n  grid-row: 1 !important;\n  align-self: stretch !important;\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: flex-start !important;\n  min-width: 0 !important;\n}\n\n/* Área de ordenação/revisão quando existir. */\n.indice-nights-settings .bri-library-card-ordering {\n  grid-column: 3 !important;\n  grid-row: 1 !important;\n  align-self: center !important;\n  min-width: 0 !important;\n}\n\n/* Controles finais: pasta + toggle. */\n.indice-nights-settings .bri-library-card-controls {\n  grid-column: 4 !important;\n  grid-row: 1 !important;\n  align-self: center !important;\n  min-width: 0 !important;\n  width: 100% !important;\n}\n\n/* Alguns builds usam o setting-item-control como área final. */\n.indice-nights-settings .bri-library-card > .setting-item-control {\n  grid-column: 4 !important;\n  grid-row: 1 !important;\n  align-self: center !important;\n  width: 100% !important;\n  margin: 0 !important;\n  padding-top: 0 !important;\n  border-top: 0 !important;\n}\n\n/* O caminho automático continua legível, sem empurrar o layout. */\n.indice-nights-settings .bri-library-card-path {\n  margin-top: auto !important;\n  padding-top: 12px !important;\n  overflow-wrap: anywhere !important;\n}\n\n/* Select ocupa o espaço disponível e toggle fica visível. */\n.indice-nights-settings .bri-library-card-select select,\n.indice-nights-settings .bri-library-card > .setting-item-control select {\n  width: 100% !important;\n  max-width: none !important;\n}\n\n/* Congressos/Séries ficam visualmente coerentes com a lista. */\n.indice-nights-settings .bri-library-group-summary {\n  min-height: 104px !important;\n  padding: 15px 16px !important;\n}\n\n/* ====================== iPad / telas médias ====================== */\n@media (max-width: 1100px) {\n  .indice-nights-settings .bri-library-card {\n    min-height: 0 !important;\n    grid-template-columns: 48px minmax(0, 1fr) minmax(210px, .9fr) !important;\n    grid-template-rows: auto auto !important;\n    align-items: start !important;\n  }\n\n  .indice-nights-settings .bri-library-card-icon {\n    grid-column: 1 !important;\n    grid-row: 1 / span 2 !important;\n  }\n\n  .indice-nights-settings .bri-library-card-copy {\n    grid-column: 2 !important;\n    grid-row: 1 !important;\n  }\n\n  .indice-nights-settings .bri-library-card-ordering {\n    grid-column: 2 !important;\n    grid-row: 2 !important;\n    align-self: end !important;\n    padding-top: 8px !important;\n  }\n\n  .indice-nights-settings .bri-library-card-controls,\n  .indice-nights-settings .bri-library-card > .setting-item-control {\n    grid-column: 3 !important;\n    grid-row: 1 / span 2 !important;\n    align-self: center !important;\n  }\n}\n\n/* iPad em split view e tablets menores */\n@media (max-width: 820px) {\n  .indice-nights-settings .bri-library-card {\n    grid-template-columns: 44px minmax(0, 1fr) !important;\n    grid-template-rows: auto auto auto !important;\n    gap: 10px 12px !important;\n    padding: 14px !important;\n  }\n\n  .indice-nights-settings .bri-library-card-icon {\n    width: 44px !important;\n    height: 44px !important;\n    grid-column: 1 !important;\n    grid-row: 1 !important;\n  }\n\n  .indice-nights-settings .bri-library-card-copy {\n    grid-column: 2 !important;\n    grid-row: 1 !important;\n  }\n\n  .indice-nights-settings .bri-library-card-ordering {\n    grid-column: 1 / -1 !important;\n    grid-row: 2 !important;\n    padding: 10px 0 0 !important;\n    border-top: 1px solid var(--background-modifier-border) !important;\n  }\n\n  .indice-nights-settings .bri-library-card-controls,\n  .indice-nights-settings .bri-library-card > .setting-item-control {\n    grid-column: 1 / -1 !important;\n    grid-row: 3 !important;\n    width: 100% !important;\n    padding-top: 10px !important;\n    border-top: 1px solid var(--background-modifier-border) !important;\n  }\n\n  .indice-nights-settings .bri-library-card > .setting-item-control {\n    display: grid !important;\n    grid-template-columns: minmax(0, 1fr) auto !important;\n    gap: 10px !important;\n  }\n\n  .indice-nights-settings .bri-library-group-summary {\n    min-height: 88px !important;\n    grid-template-columns: 44px minmax(0, 1fr) auto 20px !important;\n    gap: 11px !important;\n    padding: 13px 14px !important;\n  }\n}\n\n/* Celular */\n@media (max-width: 520px) {\n  .indice-nights-settings .bri-library-card {\n    padding: 13px !important;\n  }\n\n  .indice-nights-settings .bri-library-card-title,\n  .indice-nights-settings .bri-library-group-title {\n    font-size: 14px !important;\n  }\n\n  .indice-nights-settings .bri-library-card-description,\n  .indice-nights-settings .bri-library-group-description {\n    font-size: 11.5px !important;\n  }\n\n  .indice-nights-settings .bri-library-card > .setting-item-control {\n    grid-template-columns: minmax(0, 1fr) auto !important;\n  }\n\n  .indice-nights-settings .bri-library-group-summary {\n    grid-template-columns: 42px minmax(0, 1fr) auto 18px !important;\n  }\n}\n";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => IndiceNightsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/config.ts
var DEFAULT_SETTINGS = {
  defaultFolder: "Discursos",
  defaultProperty: "textos",
  pageSize: 75,
  remoteDriveUrl: "",
  remoteDriveFolder: "",
  categorySettings: {},
  publicationOrder: {}
};
function cleanPath(value) {
  return value.trim().replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");
}
function parseBoolean(value, fallback) {
  if (value == null || value.trim() === "") return fallback;
  return ["1", "sim", "true", "yes", "on"].includes(value.trim().toLocaleLowerCase("pt-BR"));
}
function parseBlockConfig(source, settings) {
  var _a, _b, _c;
  const values = /* @__PURE__ */ new Map();
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^\s*([\wÀ-ÿ-]+)\s*:\s*(.*?)\s*$/u);
    if ((match == null ? void 0 : match[1]) && match[2] != null) values.set(match[1].toLocaleLowerCase("pt-BR"), match[2]);
  }
  const requestedPageSize = Number.parseInt((_b = (_a = values.get("quantidade")) != null ? _a : values.get("page-size")) != null ? _b : "", 10);
  const pageSize = Number.isFinite(requestedPageSize) ? Math.min(250, Math.max(20, requestedPageSize)) : settings.pageSize;
  return {
    folder: cleanPath(values.get("pasta") || settings.defaultFolder) || DEFAULT_SETTINGS.defaultFolder,
    property: (values.get("propriedade") || settings.defaultProperty).trim() || DEFAULT_SETTINGS.defaultProperty,
    pageSize,
    title: (values.get("titulo") || "\xCDndice de Textos B\xEDblicos").trim(),
    showTitle: parseBoolean((_c = values.get("exibir-titulo")) != null ? _c : values.get("show-title"), false)
  };
}

// src/books.ts
var names = [
  ["G\xEAnesis", ["Genesis", "G\xEAn"]],
  ["\xCAxodo", ["Exodo", "\xCAxo", "\xCAx"]],
  ["Lev\xEDtico", ["Levitico", "Lev\xED", "Lev"]],
  ["N\xFAmeros", ["Numeros", "N\xFAm"]],
  ["Deuteron\xF4mio", ["Deuteronomio", "Deut"]],
  ["Josu\xE9", ["Josue", "Jos"]],
  ["Ju\xEDzes", ["Juizes", "Ju\xED"]],
  ["Rute", ["Rut"]],
  ["1 Samuel", ["1Samuel", "1 Sam"]],
  ["2 Samuel", ["2Samuel", "2 Sam"]],
  ["1 Reis", ["1Reis"]],
  ["2 Reis", ["2Reis"]],
  ["1 Cr\xF4nicas", ["1 Cronicas", "1Cr\xF4nicas", "1Cronicas", "1 Cr\xF4"]],
  ["2 Cr\xF4nicas", ["2 Cronicas", "2Cr\xF4nicas", "2Cronicas", "2 Cr\xF4"]],
  ["Esdras", ["Esd"]],
  ["Neemias", ["Nee"]],
  ["Ester", ["Est"]],
  ["J\xF3", ["Jo"]],
  ["Salmos", ["Salmo", "Sal"]],
  ["Prov\xE9rbios", ["Proverbios", "Pro"]],
  ["Eclesiastes", ["Ecl"]],
  ["C\xE2ntico dos C\xE2nticos", ["Cantico dos Canticos", "C\xE2ntico de Salom\xE3o", "Cantico de Salomao", "C\xE2ntico", "Cantico", "C\xE2n"]],
  ["Isa\xEDas", ["Isaias", "Isa"]],
  ["Jeremias", ["Jer"]],
  ["Lamenta\xE7\xF5es", ["Lamentacoes", "Lam"]],
  ["Ezequiel", ["Eze"]],
  ["Daniel", ["Dan"]],
  ["Oseias", ["Os\xE9ias", "Ose"]],
  ["Joel", ["Joe"]],
  ["Am\xF3s", ["Amos"]],
  ["Obadias", ["Oba"]],
  ["Jonas", ["Jon"]],
  ["Miqueias", ["Miq"]],
  ["Naum", ["Nau"]],
  ["Habacuque", ["Hab"]],
  ["Sofonias", ["Sof"]],
  ["Ageu", ["Ag"]],
  ["Zacarias", ["Zac"]],
  ["Malaquias", ["Mal"]],
  ["Mateus", ["Mat"]],
  ["Marcos", ["Mar"]],
  ["Lucas", ["Luc"]],
  ["Jo\xE3o", ["Joao"]],
  ["Atos dos Ap\xF3stolos", ["Atos dos Apostolos", "Atos", "At"]],
  ["Romanos", ["Rom"]],
  ["1 Cor\xEDntios", ["1 Corintios", "1Cor\xEDntios", "1Corintios", "1 Cor"]],
  ["2 Cor\xEDntios", ["2 Corintios", "2Cor\xEDntios", "2Corintios", "2 Cor"]],
  ["G\xE1latas", ["Galatas", "G\xE1l"]],
  ["Ef\xE9sios", ["Efesios", "Ef\xE9"]],
  ["Filipenses", ["Fil"]],
  ["Colossenses", ["Col"]],
  ["1 Tessalonicenses", ["1Tessalonicenses", "1 Tes"]],
  ["2 Tessalonicenses", ["2Tessalonicenses", "2 Tes"]],
  ["1 Tim\xF3teo", ["1 Timoteo", "1Tim\xF3teo", "1Timoteo", "1 Tim"]],
  ["2 Tim\xF3teo", ["2 Timoteo", "2Tim\xF3teo", "2Timoteo", "2 Tim"]],
  ["Tito", ["Tit"]],
  ["Fil\xEAmon", ["Filemon", "Fil\xEAm", "Flm"]],
  ["Hebreus", ["Heb"]],
  ["Tiago", ["Tia"]],
  ["1 Pedro", ["1Pedro", "1 Ped"]],
  ["2 Pedro", ["2Pedro", "2 Ped"]],
  ["1 Jo\xE3o", ["1 Joao", "1Jo\xE3o", "1Joao"]],
  ["2 Jo\xE3o", ["2 Joao", "2Jo\xE3o", "2Joao"]],
  ["3 Jo\xE3o", ["3 Joao", "3Jo\xE3o", "3Joao"]],
  ["Judas", ["Jud"]],
  ["Apocalipse", ["Revela\xE7\xE3o", "Revelacao", "Apo"]]
];
var BIBLE_BOOKS = names.map(([name, aliases2], order) => ({
  name,
  order,
  aliases: [name, ...aliases2]
}));
function normalizeText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").replace(/\s+/g, " ").trim();
}
var BOOK_BY_NORMALIZED_NAME = new Map(
  BIBLE_BOOKS.flatMap((book) => book.aliases.map((alias) => [normalizeText(alias), book]))
);

// src/references.ts
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var aliases = BIBLE_BOOKS.flatMap((book) => book.aliases).sort((a, b) => b.length - a.length).map(escapeRegExp).join("|");
var REFERENCE_PATTERN = new RegExp(
  `(?:^|[\\s\\[("'\u201C\u2018|])(${aliases})\\.?\\s+(\\d{1,3})(?:\\s*[:.]\\s*(\\d{1,3}))?((?:\\s*(?:[-\u2013\u2014,]\\s*(?:\\d{1,3}\\s*[:.]\\s*)?\\d{1,3}|;\\s*(?:\\d{1,3}\\s*[:.]\\s*)?\\d{1,3}))*)`,
  "giu"
);
var SINGLE_CHAPTER_BOOKS = /* @__PURE__ */ new Set(["Obadias", "Fil\xEAmon", "2 Jo\xE3o", "3 Jo\xE3o", "Judas"]);
function flattenValues(value, output, depth = 0) {
  if (value == null || depth > 4) return;
  if (typeof value === "string" || typeof value === "number") {
    output.push(String(value));
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) flattenValues(item, output, depth + 1);
  }
}
function normalizeSuffix(value) {
  return value.replace(/\s*([:.,;])\s*/g, "$1").replace(/\s*[-–—]\s*/g, "\u2013").replace(/,(?=\d)/g, ", ").replace(/;(?=\d)/g, "; ").trim();
}
function parseMatch(match) {
  var _a;
  const rawBook = match[1];
  const firstNumber = match[2];
  const secondNumber = match[3];
  if (!rawBook || !firstNumber) return null;
  const book = BOOK_BY_NORMALIZED_NAME.get(normalizeText(rawBook));
  if (!book) return null;
  if (!secondNumber && !SINGLE_CHAPTER_BOOKS.has(book.name)) return null;
  const chapter = secondNumber ? Number.parseInt(firstNumber, 10) : 1;
  const verse = Number.parseInt(secondNumber != null ? secondNumber : firstNumber, 10);
  if (!Number.isFinite(chapter) || !Number.isFinite(verse) || chapter < 1 || verse < 1) return null;
  const suffix = normalizeSuffix((_a = match[4]) != null ? _a : "");
  const display = secondNumber ? `${book.name} ${chapter}:${verse}${suffix}` : `${book.name} ${verse}${suffix}`;
  const key = normalizeText(display).replace(/\s/g, "");
  return { display, key, book: book.name, bookOrder: book.order, chapter, verse };
}
function findReferencesInText(text) {
  const locations = [];
  REFERENCE_PATTERN.lastIndex = 0;
  for (const match of text.matchAll(REFERENCE_PATTERN)) {
    const reference = parseMatch(match);
    const rawBook = match[1];
    if (!reference || !rawBook || match.index == null) continue;
    const relativeStart = match[0].indexOf(rawBook);
    if (relativeStart < 0) continue;
    locations.push({
      reference,
      start: match.index + relativeStart,
      end: match.index + match[0].length
    });
  }
  return locations;
}
function extractReferences(value) {
  const values = [];
  flattenValues(value, values);
  const found = /* @__PURE__ */ new Map();
  for (const rawValue of values) {
    for (const location of findReferencesInText(rawValue)) {
      found.set(location.reference.key, location.reference);
    }
  }
  return [...found.values()].sort(compareReferences);
}
function compareReferences(a, b) {
  return a.bookOrder - b.bookOrder || a.chapter - b.chapter || a.verse - b.verse || a.display.localeCompare(b.display, "pt-BR");
}

// src/index-service.ts
function configKey(config) {
  return `${config.folder}\0${config.property}`;
}
function isInsideFolder(path, folder) {
  return path.startsWith(`${folder}/`);
}
function sectionFor(path, folder) {
  const relative = path.slice(folder.length + 1);
  const parts = relative.split("/").filter(Boolean);
  if (parts.length <= 1) return folder;
  if (parts[0] === "Séries" && parts[1]) return `Séries - ${parts[1]}`;
  return parts[0];
}

async function citationBlockFor(app, path, reference) {
  const file = app.vault.getAbstractFileByPath(path);
  if (!(file instanceof import_obsidian6.TFile)) return null;

  try {
    let content = await app.vault.cachedRead(file);

    // Algumas notas antigas podem conter "\n^citacao-XXX" como texto literal.
    // Normalizamos apenas esse caso, sem alterar o arquivo salvo.
    content = content.replace(/\\n(?=\^[A-Za-z0-9_-]+)/g, "\n");

    const blockRegex = /(?:^|\n)\^([A-Za-z0-9_-]+)[ \t]*(?=\n|$)/g;
    const matches = [...content.matchAll(blockRegex)];

    for (let index = 0; index < matches.length; index += 1) {
      const match = matches[index];
      const blockId = match[1] ?? "";
      if (!blockId) continue;

      const markerStart = match.index ?? 0;

      // O ID vem depois do parágrafo citado. Pegamos primeiro o bloco textual
      // imediatamente anterior; se necessário ampliamos a janela.
      const before = content.slice(0, markerStart);
      let blockStart = before.lastIndexOf("\n\n");

      // Também reconhece separadores usados nas transcrições.
      const separatorStart = Math.max(
        before.lastIndexOf("\n---\n"),
        before.lastIndexOf("\n---\r\n")
      );
      if (separatorStart > blockStart) blockStart = separatorStart + 5;

      const localText = before.slice(Math.max(0, blockStart + 2));
      const localReferences = extractReferences(localText);

      if (localReferences.some((item) => item.key === reference.key)) {
        return blockId;
      }

      // Fallback: amplia para a região desde a citação anterior.
      const previousMarkerEnd = index > 0
        ? (matches[index - 1].index ?? 0) + matches[index - 1][0].length
        : 0;
      const widerText = content.slice(previousMarkerEnd, markerStart);
      const widerReferences = extractReferences(widerText);

      if (widerReferences.some((item) => item.key === reference.key)) {
        return blockId;
      }

      // Último fallback para pequenas diferenças de normalização:
      // procura a referência pela forma exibida.
      const normalizedLocal = normalizeText(localText);
      const normalizedDisplay = normalizeText(reference.display ?? "");
      if (normalizedDisplay && normalizedLocal.includes(normalizedDisplay)) {
        return blockId;
      }
    }

    console.warn(
      "Indice Nights: referência indexada, mas bloco de citação não localizado",
      path,
      reference.display
    );
  } catch (error) {
    console.warn("Indice Nights: falha ao localizar bloco da citação", path, reference.display, error);
  }

  return null;
}

async function openCitationTarget(app, path, reference, sourcePath = "", modEvent = false) {
  const blockId = await citationBlockFor(app, path, reference);
  const target = blockId ? `${path}#^${blockId}` : path;

  // Usa a navegação nativa do Obsidian. Quando o bloco é localizado,
  // o próprio Obsidian aplica o destaque amarelo/escuro padrão.
  await app.workspace.openLinkText(target, sourcePath, modEvent);

  if (!blockId) {
    new import_obsidian6.Notice(
      `Abri a transcrição, mas não consegui localizar automaticamente o trecho de ${reference.display}.`,
      5000
    );
  }
}

function libraryMetaFor(file, frontmatter = {}) {
  const relative = file.path.startsWith("Discursos/") ? file.path.slice("Discursos/".length) : file.path;
  const parts = relative.split("/").filter(Boolean);

  let collection = parts[0] ?? "";
  let series = "";

  if (collection === "Séries" && parts.length >= 3) {
    series = parts[1] ?? "";
  } else if (collection === "Congressos" && parts.length >= 3) {
    series = parts[1] ?? "";
  }

  const date = typeof frontmatter.data_publicacao === "string" ? frontmatter.data_publicacao : "";
  const speaker = typeof frontmatter.orador === "string" ? frontmatter.orador : "";

  return { collection, series, date, speaker };
}

function formatDatePtBR(value) {
  const match = typeof value === "string" ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim()) : null;
  return match ? `${match[3]}/${match[2]}/${match[1]}` : value || "—";
}
var BibleIndex = class {
  constructor(app, config) {
    this.app = app;
    this.config = config;
    __publicField(this, "notes", /* @__PURE__ */ new Map());
    __publicField(this, "referencesByBook", /* @__PURE__ */ new Map());
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "contentCache", /* @__PURE__ */ new Map());
    __publicField(this, "initialized", false);
  }
  ensureInitialized() {
    if (this.initialized) return;
    this.initialized = true;
    for (const file of this.app.vault.getMarkdownFiles()) {
      if (this.accepts(file.path)) this.indexFile(file);
    }
  }
  accepts(path) {
    return isInsideFolder(path, this.config.folder);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  notify() {
    for (const listener of this.listeners) listener();
  }
  updateFile(file) {
    this.contentCache.delete(file.path);
    const existed = this.notes.has(file.path);
    if (!this.accepts(file.path)) {
      if (existed) this.removePath(file.path);
      return existed;
    }
    this.removePath(file.path);
    this.indexFile(file);
    return true;
  }
  removePath(path) {
    this.contentCache.delete(path);
    const record = this.notes.get(path);
    if (!record) return false;
    for (const reference of record.references) {
      const bookMap = this.referencesByBook.get(reference.book);
      const entry = bookMap == null ? void 0 : bookMap.get(reference.key);
      if (!bookMap || !entry) continue;
      entry.notes.delete(path);
      if (entry.notes.size === 0) bookMap.delete(reference.key);
      if (bookMap.size === 0) this.referencesByBook.delete(reference.book);
    }
    this.notes.delete(path);
    return true;
  }
  renameFile(file, oldPath) {
    const removed = this.removePath(oldPath);
    const added = this.accepts(file.path);
    if (added) this.indexFile(file);
    return removed || added;
  }
  getBookCount(book) {
    var _a, _b;
    return (_b = (_a = this.referencesByBook.get(book)) == null ? void 0 : _a.size) != null ? _b : 0;
  }
  snapshot(book) {
    var _a, _b;
    this.ensureInitialized();
    const references = this.sortedReferences((_b = (_a = this.referencesByBook.get(book)) == null ? void 0 : _a.values()) != null ? _b : []);
    return this.createSnapshot(references);
  }
  snapshotAll() {
    this.ensureInitialized();
    const references = this.sortedReferences(
      [...this.referencesByBook.values()].flatMap((entries) => [...entries.values()])
    );
    return this.createSnapshot(references);
  }
  async searchNoteContents(search, limit = 100) {
    this.ensureInitialized();
    const query = normalizeText(search);
    if (!query) return [];
    const records = [...this.notes.values()];
    const matches = [];
    const batchSize = 24;
    for (let start = 0; start < records.length && matches.length < limit; start += batchSize) {
      const batch = records.slice(start, start + batchSize);
      const contents = await Promise.all(batch.map((record) => this.sentencesFor(record.file)));
      for (let index = 0; index < batch.length && matches.length < limit; index += 1) {
        const record = batch[index];
        const sentences = contents[index];
        if (!record || !sentences) continue;
        const sentence = sentences.find((item) => normalizeText(item).includes(query));
        if (sentence) matches.push({ ...record.note, sentence });
      }
    }
    return matches.sort(
      (a, b) => a.section.localeCompare(b.section, "pt-BR") || a.title.localeCompare(b.title, "pt-BR")
    );
  }
  sortedReferences(references) {
    return [...references].sort(
      (a, b) => a.bookOrder - b.bookOrder || a.chapter - b.chapter || a.verse - b.verse || a.display.localeCompare(b.display, "pt-BR")
    ).map((reference) => ({
      ...reference,
      notes: new Map(
        [...reference.notes.entries()].sort(
          ([, a], [, b]) => a.section.localeCompare(b.section, "pt-BR") || a.title.localeCompare(b.title, "pt-BR")
        )
      )
    }));
  }
  createSnapshot(references) {
    let totalReferences = 0;
    for (const entries of this.referencesByBook.values()) totalReferences += entries.size;
    return {
      totalNotes: this.notes.size,
      totalReferences,
      references
    };
  }
  indexFile(file) {
    var _a;
    const cache = this.app.metadataCache.getFileCache(file);
    const rawReferences = (_a = cache == null ? void 0 : cache.frontmatter) == null ? void 0 : _a[this.config.property];
    const references = extractReferences(rawReferences);
    const note = {
      path: file.path,
      title: file.basename,
      section: sectionFor(file.path, this.config.folder)
    };
    const record = { file, note, references };
    this.notes.set(file.path, record);
    for (const reference of references) {
      let bookMap = this.referencesByBook.get(reference.book);
      if (!bookMap) {
        bookMap = /* @__PURE__ */ new Map();
        this.referencesByBook.set(reference.book, bookMap);
      }
      let entry = bookMap.get(reference.key);
      if (!entry) {
        entry = { ...reference, notes: /* @__PURE__ */ new Map() };
        bookMap.set(reference.key, entry);
      }
      entry.notes.set(file.path, note);
    }
  }
  async sentencesFor(file) {
    var _a;
    const cached = this.contentCache.get(file.path);
    if (cached) return cached;
    const markdown = await this.app.vault.cachedRead(file);
    const plainText2 = markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, "").replace(/<!-- mini-indice-inicio -->[\s\S]*?<!-- mini-indice-fim -->/g, "").replace(/```[\s\S]*?```/g, " ").replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/^\^[-\w]+\s*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/^>\s?/gm, "").replace(/[*_~`]/g, "").replace(/\s+/g, " ").trim();
    const sentences = ((_a = plainText2.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g)) != null ? _a : []).map((sentence) => sentence.trim()).filter(Boolean).map((sentence) => sentence.length > 320 ? `${sentence.slice(0, 317).trimEnd()}\u2026` : sentence);
    this.contentCache.set(file.path, sentences);
    return sentences;
  }
};
var BibleIndexManager = class {
  constructor(app) {
    this.app = app;
    __publicField(this, "indexes", /* @__PURE__ */ new Map());
    __publicField(this, "notifyTimer", null);
    __publicField(this, "changedIndexes", /* @__PURE__ */ new Set());
  }
  get(config) {
    const key = configKey(config);
    let index = this.indexes.get(key);
    if (!index) {
      index = new BibleIndex(this.app, config);
      this.indexes.set(key, index);
    }
    index.ensureInitialized();
    return index;
  }
  updateFile(file) {
    for (const index of this.indexes.values()) {
      if (index.updateFile(file)) this.queueNotification(index);
    }
  }
  removePath(path) {
    for (const index of this.indexes.values()) {
      if (index.removePath(path)) this.queueNotification(index);
    }
  }
  renameFile(file, oldPath) {
    for (const index of this.indexes.values()) {
      if (index.renameFile(file, oldPath)) this.queueNotification(index);
    }
  }
  queueNotification(index) {
    this.changedIndexes.add(index);
    if (this.notifyTimer != null) window.clearTimeout(this.notifyTimer);
    this.notifyTimer = window.setTimeout(() => {
      this.notifyTimer = null;
      const changed = [...this.changedIndexes];
      this.changedIndexes.clear();
      for (const item of changed) item.notify();
    }, 300);
  }
};

// src/index-view.ts
var import_obsidian = require("obsidian");

// src/search.ts
function searchReferences(references, search) {
  const query = normalizeText(search);
  if (!query) {
    return references.map((reference) => ({ reference, notes: [...reference.notes.values()] }));
  }
  const output = [];
  for (const reference of references) {
    const referenceMatches = normalizeText(reference.display).includes(query);
    const notes = [...reference.notes.values()].filter(
      (note) => referenceMatches || normalizeText(`${note.section} ${note.title}`).includes(query)
    );
    if (notes.length > 0) output.push({ reference, notes });
  }
  return output;
}

// src/index-view.ts
var BIBLE_INDEX_HOME = "__indice_nights_all_books__";
var BIBLE_BOOK_GROUPS = [
  {
    name: "Pentateuco",
    icon: "library",
    books: ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio"]
  },
  {
    name: "Históricos",
    icon: "shield",
    books: [
      "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
      "1 Crônicas", "2 Crônicas", "Esdras", "Neemias", "Ester"
    ]
  },
  {
    name: "Poéticos",
    icon: "music-2",
    books: ["Jó", "Salmos", "Provérbios", "Eclesiastes", "Cântico dos Cânticos"]
  },
  {
    name: "Proféticos",
    icon: "scroll-text",
    books: [
      "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oseias",
      "Joel", "Amós", "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque",
      "Sofonias", "Ageu", "Zacarias", "Malaquias"
    ]
  },
  {
    name: "Evangelhos",
    icon: "cross",
    books: ["Mateus", "Marcos", "Lucas", "João"]
  },
  {
    name: "Início da Congregação Cristã",
    icon: "users",
    books: ["Atos dos Apóstolos"]
  },
  {
    name: "Cartas",
    icon: "mail",
    books: [
      "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios",
      "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses",
      "1 Timóteo", "2 Timóteo", "Tito", "Filêmon", "Hebreus", "Tiago",
      "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", "Judas"
    ]
  },
  {
    name: "Visões Proféticas",
    icon: "eye",
    books: ["Apocalipse"]
  }
];
var BibleIndexView = class extends import_obsidian.MarkdownRenderChild {
  constructor(containerEl, app, sourcePath, index, config, selectionStore, selectionKey) {
    super(containerEl);
    this.app = app;
    this.sourcePath = sourcePath;
    this.index = index;
    this.config = config;
    this.selectionStore = selectionStore;
    this.selectionKey = selectionKey;
    __publicField(this, "selectedBook");
    __publicField(this, "search", "");
    __publicField(this, "contentSearch", false);
    __publicField(this, "visibleCount");
    __publicField(this, "unsubscribe", null);
    __publicField(this, "searchTimer", null);
    __publicField(this, "summaryEl", null);
    __publicField(this, "resultsEl", null);
    __publicField(this, "contentSearchRequest", 0);
    // A página principal sempre começa mostrando todos os livros.
    // A escolha individual continua disponível durante a sessão.
    this.selectedBook = BIBLE_INDEX_HOME;
    this.visibleCount = config.pageSize;
  }
  onload() {
    this.buildLayout();
    this.unsubscribe = this.index.subscribe(() => this.refreshData());
  }
  onunload() {
    var _a;
    if (this.searchTimer != null) window.clearTimeout(this.searchTimer);
    (_a = this.unsubscribe) == null ? void 0 : _a.call(this);
    this.unsubscribe = null;
  }
  buildLayout() {
    this.containerEl.empty();
    this.containerEl.addClass("bri-root");
    if (this.config.showTitle) {
      this.containerEl.createEl("h1", { text: `\u{1F4DA} ${this.config.title}`, cls: "bri-title" });
    }
    this.summaryEl = this.containerEl.createDiv({ cls: "bri-summary" });
    const controls = this.containerEl.createDiv({ cls: "bri-controls" });
    const bookGroup = controls.createDiv({ cls: "bri-control-group bri-book-control-group" });
    bookGroup.createEl("label", { text: "Livro bíblico" });

    const selector = bookGroup.createDiv({ cls: "bri-book-selector" });
    const selectorButton = selector.createEl("button", {
      cls: "bri-book-selector-button",
      attr: {
        type: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": "false"
      }
    });

    const selectorBookIcon = selectorButton.createSpan({ cls: "bri-book-selector-icon" });
    (0, import_obsidian.setIcon)(selectorBookIcon, "book-open");
    const selectorLabel = selectorButton.createSpan({ cls: "bri-book-selector-label" });
    const selectorChevron = selectorButton.createSpan({ cls: "bri-book-selector-chevron" });
    (0, import_obsidian.setIcon)(selectorChevron, "chevron-down");

    const selectorMenu = selector.createDiv({
      cls: "bri-book-selector-menu",
      attr: { role: "listbox" }
    });

    const selectorSearchWrap = selectorMenu.createDiv({ cls: "bri-book-selector-search-wrap" });
    const selectorSearchIcon = selectorSearchWrap.createSpan({ cls: "bri-book-selector-search-icon" });
    (0, import_obsidian.setIcon)(selectorSearchIcon, "search");
    const selectorSearch = selectorSearchWrap.createEl("input", {
      cls: "bri-book-selector-search",
      attr: {
        type: "search",
        placeholder: "Pesquisar livro bíblico…",
        autocomplete: "off"
      }
    });

    const selectorOptions = selectorMenu.createDiv({ cls: "bri-book-selector-options" });

    const updateSelectorLabel = () => {
      if (this.selectedBook === BIBLE_INDEX_HOME) {
        selectorLabel.setText("Todos os livros da Bíblia");
      } else {
        selectorLabel.setText(`${this.selectedBook} — ${this.index.getBookCount(this.selectedBook)}`);
      }
    };

    const closeSelector = () => {
      selector.removeClass("is-open");
      selectorButton.setAttribute("aria-expanded", "false");
      selectorSearch.value = "";
      for (const option of selectorOptions.querySelectorAll(".bri-book-selector-option")) {
        option.removeClass("is-filtered-out");
      }
      for (const group of selectorOptions.querySelectorAll(".bri-book-selector-group")) {
        group.removeClass("is-filtered-out");
      }
      const homeOption = selectorOptions.querySelector(".bri-book-selector-home");
      const homeDivider = selectorOptions.querySelector(".bri-book-selector-home-divider");
      if (homeOption) homeOption.removeClass("is-filtered-out");
      if (homeDivider) homeDivider.removeClass("is-filtered-out");
    };

    const chooseBook = (bookName) => {
      this.selectedBook = bookName;
      this.visibleCount = this.config.pageSize;
      this.selectionStore.set(this.selectionKey, this.selectedBook);
      updateSelectorLabel();
      closeSelector();
      this.refreshData();
    };

    const selectorGroups = BIBLE_BOOK_GROUPS;

    const renderSelectorOptions = () => {
      selectorOptions.empty();

      const homeSelected = this.selectedBook === BIBLE_INDEX_HOME;
      const homeOption = selectorOptions.createEl("button", {
        cls: `bri-book-selector-home${homeSelected ? " is-selected" : ""}`,
        attr: {
          type: "button",
          role: "option",
          "aria-selected": homeSelected ? "true" : "false"
        }
      });
      const homeIcon = homeOption.createSpan({ cls: "bri-book-selector-home-icon" });
      (0, import_obsidian.setIcon)(homeIcon, "layout-grid");
      const homeCopy = homeOption.createDiv({ cls: "bri-book-selector-home-copy" });
      homeCopy.createSpan({ text: "Todos os livros da Bíblia", cls: "bri-book-selector-home-title" });
      homeCopy.createSpan({ text: "Página principal do índice", cls: "bri-book-selector-home-subtitle" });
      const homeCheck = homeOption.createSpan({ cls: "bri-book-selector-home-check" });
      if (homeSelected) (0, import_obsidian.setIcon)(homeCheck, "check");
      homeOption.addEventListener("click", () => chooseBook(BIBLE_INDEX_HOME));

      const homeDivider = selectorOptions.createDiv({ cls: "bri-book-selector-home-divider" });

      for (const group of selectorGroups) {
        const groupEl = selectorOptions.createDiv({
          cls: "bri-book-selector-group",
          attr: { "data-group": group.name }
        });

        const groupHeader = groupEl.createDiv({ cls: "bri-book-selector-group-header" });
        const groupIcon = groupHeader.createSpan({ cls: "bri-book-selector-group-icon" });
        (0, import_obsidian.setIcon)(groupIcon, group.icon);
        groupHeader.createSpan({
          text: group.name,
          cls: "bri-book-selector-group-name"
        });
        groupHeader.createSpan({ cls: "bri-book-selector-group-line" });

        const groupOptions = groupEl.createDiv({ cls: "bri-book-selector-group-options" });

        for (const bookName of group.books) {
          const book = BIBLE_BOOKS.find((item) => item.name === bookName);
          if (!book) continue;

          const count = this.index.getBookCount(book.name);
          const selected = book.name === this.selectedBook;
          const option = groupOptions.createEl("button", {
            cls: `bri-book-selector-option${selected ? " is-selected" : ""}`,
            attr: {
              type: "button",
              role: "option",
              "data-book": book.name,
              "aria-selected": selected ? "true" : "false"
            }
          });

          const optionIcon = option.createSpan({ cls: "bri-book-selector-option-icon" });
          (0, import_obsidian.setIcon)(optionIcon, "book-open");
          option.createSpan({ text: book.name, cls: "bri-book-selector-option-name" });
          option.createSpan({ text: String(count), cls: "bri-book-selector-option-count" });

          const check = option.createSpan({ cls: "bri-book-selector-option-check" });
          if (selected) (0, import_obsidian.setIcon)(check, "check");

          option.addEventListener("click", () => chooseBook(book.name));
        }
      }
    };

    updateSelectorLabel();
    renderSelectorOptions();

    selectorButton.addEventListener("click", () => {
      if (selector.hasClass("is-disabled")) return;
      const opening = !selector.hasClass("is-open");
      selector.toggleClass("is-open", opening);
      selectorButton.setAttribute("aria-expanded", opening ? "true" : "false");

      if (opening) {
        renderSelectorOptions();
        window.setTimeout(() => selectorSearch.focus(), 30);
      }
    });

    selectorSearch.addEventListener("input", () => {
      const query = normalizeText(selectorSearch.value);

      const homeOption = selectorOptions.querySelector(".bri-book-selector-home");
      const homeDivider = selectorOptions.querySelector(".bri-book-selector-home-divider");
      if (homeOption) homeOption.toggleClass("is-filtered-out", Boolean(query));
      if (homeDivider) homeDivider.toggleClass("is-filtered-out", Boolean(query));

      for (const option of selectorOptions.querySelectorAll(".bri-book-selector-option")) {
        const name = option.getAttribute("data-book") || "";
        option.toggleClass(
          "is-filtered-out",
          Boolean(query) && !normalizeText(name).includes(query)
        );
      }

      for (const group of selectorOptions.querySelectorAll(".bri-book-selector-group")) {
        const visible = Array.from(
          group.querySelectorAll(".bri-book-selector-option")
        ).some((option) => !option.hasClass("is-filtered-out"));

        group.toggleClass("is-filtered-out", !visible);
      }
    });

    selector.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSelector();
        selectorButton.focus();
      }
    });

    document.addEventListener("pointerdown", (event) => {
      if (!selector.contains(event.target)) closeSelector();
    });

    const searchGroup = controls.createDiv({ cls: "bri-control-group bri-search-control-group" });
    const searchHeader = searchGroup.createDiv({ cls: "bri-search-header" });
    searchHeader.createEl("label", {
      text: "Pesquisar em todo o acervo",
      attr: { for: `${this.selectionKey}-search` }
    });

    const mode = searchHeader.createDiv({ cls: "bri-search-mode bri-search-mode-inline" });
    const modeCheckbox = mode.createEl("input", {
      attr: { id: `${this.selectionKey}-content-search`, type: "checkbox" }
    });
    mode.createEl("label", {
      text: "Pesquisar dentro do conteúdo",
      attr: { for: `${this.selectionKey}-content-search` }
    });

    const searchInput = searchGroup.createEl("input", {
      cls: "bri-search",
      attr: {
        id: `${this.selectionKey}-search`,
        type: "search",
        placeholder: "Referência, discurso ou pasta em qualquer livro…",
        inputmode: "search"
      }
    });
    searchInput.addEventListener("input", () => {
      this.search = searchInput.value;
      this.visibleCount = this.config.pageSize;
      if (this.searchTimer != null) window.clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(() => {
        this.searchTimer = null;
        this.renderSummary();
        this.renderResults();
      }, 180);
    });
    modeCheckbox.addEventListener("change", () => {
      this.contentSearch = modeCheckbox.checked;
      this.visibleCount = this.config.pageSize;
      selector.toggleClass("is-disabled", this.contentSearch);
      selectorButton.disabled = this.contentSearch;
      if (this.contentSearch) closeSelector();
      searchInput.placeholder = this.contentSearch ? "Digite uma palavra ou express\xE3o encontrada nas notas\u2026" : "Refer\xEAncia, discurso ou pasta em qualquer livro\u2026";
      this.refreshData();
    });
    this.resultsEl = this.containerEl.createDiv({ cls: "bri-results" });
    this.refreshData();
  }
  refreshData() {
    this.renderSummary();
    this.updateBookCounts();
    this.renderResults();
  }
  renderSummary() {
    if (!this.summaryEl) return;
    const searching = this.search.trim().length > 0;
    const onHome = this.selectedBook === BIBLE_INDEX_HOME;
    const snapshot = searching || this.contentSearch || onHome
      ? this.index.snapshotAll()
      : this.index.snapshot(this.selectedBook);
    this.summaryEl.empty();

    const summaryHeader = this.summaryEl.createDiv({ cls: "bri-summary-header" });
    const summaryIcon = summaryHeader.createSpan({ cls: "bri-summary-icon" });
    (0, import_obsidian.setIcon)(summaryIcon, "library-big");
    const summaryCopy = summaryHeader.createDiv({ cls: "bri-summary-copy" });
    summaryCopy.createEl("strong", { text: "Visão geral do acervo" });
    summaryCopy.createEl("small", {
      text: searching
        ? "Resultados atualizados conforme sua pesquisa"
        : onHome
          ? "Panorama completo da Bíblia"
          : `Panorama atual de ${this.selectedBook}`
    });

    const stats = this.summaryEl.createDiv({ cls: "bri-summary-stats" });

    const createStat = (icon, value, label) => {
      const card = stats.createDiv({ cls: "bri-stat-card" });
      const iconEl = card.createSpan({ cls: "bri-stat-icon" });
      (0, import_obsidian.setIcon)(iconEl, icon);
      const content = card.createDiv({ cls: "bri-stat-content" });
      content.createSpan({ text: String(value), cls: "bri-stat-value" });
      content.createSpan({ text: label, cls: "bri-stat-label" });
    };

    createStat("files", snapshot.totalNotes, "notas indexadas");
    createStat("book-open-text", snapshot.totalReferences, "referências diferentes");
    createStat(
      searching ? "search" : "bookmark",
      searching
        ? this.contentSearch
          ? "Ativa"
          : searchReferences(snapshot.references, this.search).length
        : onHome
          ? BIBLE_BOOKS.length
          : snapshot.references.length,
      searching
        ? this.contentSearch
          ? "pesquisa no conteúdo"
          : "referências encontradas"
        : onHome
          ? "livros bíblicos"
          : `referências em ${this.selectedBook}`
    );
  }
  updateBookCounts() {
    const selector = this.containerEl.querySelector(".bri-book-selector");
    if (!selector) return;

    const label = selector.querySelector(".bri-book-selector-label");
    if (label) {
      label.setText(
        this.selectedBook === BIBLE_INDEX_HOME
          ? "Todos os livros da Bíblia"
          : `${this.selectedBook} — ${this.index.getBookCount(this.selectedBook)}`
      );
    }

    const homeOption = selector.querySelector(".bri-book-selector-home");
    if (homeOption) {
      const selected = this.selectedBook === BIBLE_INDEX_HOME;
      homeOption.toggleClass("is-selected", selected);
      homeOption.setAttribute("aria-selected", selected ? "true" : "false");
      const check = homeOption.querySelector(".bri-book-selector-home-check");
      if (check) {
        check.empty();
        if (selected) (0, import_obsidian.setIcon)(check, "check");
      }
    }

    for (const option of selector.querySelectorAll(".bri-book-selector-option")) {
      const bookName = option.getAttribute("data-book") || "";
      const count = option.querySelector(".bri-book-selector-option-count");
      if (count) count.setText(String(this.index.getBookCount(bookName)));

      const selected = bookName === this.selectedBook;
      option.toggleClass("is-selected", selected);
      option.setAttribute("aria-selected", selected ? "true" : "false");

      const check = option.querySelector(".bri-book-selector-option-check");
      if (check) {
        check.empty();
        if (selected) (0, import_obsidian.setIcon)(check, "check");
      }
    }
  }
  renderResults() {
    if (!this.resultsEl) return;
    if (this.contentSearch) {
      void this.renderContentResults();
      return;
    }
    this.contentSearchRequest += 1;
    const searching = this.search.trim().length > 0;

    if (!searching && this.selectedBook === BIBLE_INDEX_HOME) {
      this.resultsEl.empty();
      this.renderBooksHome();
      return;
    }

    const snapshot = searching ? this.index.snapshotAll() : this.index.snapshot(this.selectedBook);
    const visible = searchReferences(snapshot.references, this.search);
    this.resultsEl.empty();
    if (visible.length === 0) {
      this.resultsEl.createEl("p", {
        text: this.search.trim() ? "Nenhum resultado corresponde \xE0 pesquisa." : "Nenhuma refer\xEAncia desse livro foi encontrada.",
        cls: "bri-empty"
      });
      return;
    }
    if (searching) {
      this.resultsEl.createDiv({
        text: `\u{1F50E} Resultados em todo o acervo para \u201C${this.search.trim()}\u201D`,
        cls: "bri-search-status"
      });
    }
    this.renderGroups(visible.slice(0, this.visibleCount));
    if (visible.length > this.visibleCount) {
      const remaining = visible.length - this.visibleCount;
      const button = this.resultsEl.createEl("button", {
        text: `Mostrar mais (${remaining})`,
        cls: "bri-load-more"
      });
      button.addEventListener("click", () => {
        this.visibleCount += this.config.pageSize;
        this.renderResults();
      });
    }
  }
  renderBooksHome() {
    if (!this.resultsEl) return;

    const columns = this.resultsEl.createDiv({ cls: "bri-books-home-columns" });
    const oldColumn = columns.createDiv({ cls: "bri-books-home-column bri-books-home-column-old" });
    const newColumn = columns.createDiv({ cls: "bri-books-home-column bri-books-home-column-new" });

    const renderGroup = (parent, group) => {
      const groupEl = parent.createDiv({ cls: "bri-books-home-group" });

      const header = groupEl.createDiv({ cls: "bri-books-home-group-header" });
      const groupIcon = header.createSpan({ cls: "bri-books-home-group-icon" });
      (0, import_obsidian.setIcon)(groupIcon, group.icon);
      header.createSpan({ text: group.name, cls: "bri-books-home-group-name" });
      header.createSpan({ cls: "bri-books-home-group-line" });

      const books = groupEl.createDiv({ cls: "bri-books-home-list" });

      for (const bookName of group.books) {
        const count = this.index.getBookCount(bookName);
        const row = books.createEl("button", {
          cls: "bri-books-home-row",
          attr: {
            type: "button",
            "data-book": bookName,
            title: `Abrir referências de ${bookName}`
          }
        });

        const bookIcon = row.createSpan({ cls: "bri-books-home-book-icon" });
        (0, import_obsidian.setIcon)(bookIcon, "book-open");
        row.createSpan({ text: bookName, cls: "bri-books-home-book-name" });
        row.createSpan({ text: String(count), cls: "bri-books-home-book-count" });

        const arrow = row.createSpan({ cls: "bri-books-home-book-arrow" });
        (0, import_obsidian.setIcon)(arrow, "chevron-right");

        row.addEventListener("click", () => {
          this.selectedBook = bookName;
          this.visibleCount = this.config.pageSize;
          this.selectionStore.set(this.selectionKey, bookName);
          this.refreshData();
          this.containerEl.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    for (const group of BIBLE_BOOK_GROUPS.slice(0, 4)) renderGroup(oldColumn, group);
    for (const group of BIBLE_BOOK_GROUPS.slice(4)) renderGroup(newColumn, group);
  }

  async renderContentResults() {
    if (!this.resultsEl) return;
    const request = ++this.contentSearchRequest;
    const query = this.search.trim();
    this.resultsEl.empty();
    if (!query) {
      this.resultsEl.createEl("p", {
        text: "Digite uma palavra ou express\xE3o para pesquisar dentro das notas.",
        cls: "bri-empty"
      });
      return;
    }
    this.resultsEl.createEl("p", { text: "Pesquisando no conte\xFAdo das notas\u2026", cls: "bri-empty" });
    const matches = await this.index.searchNoteContents(query, 100);
    if (request !== this.contentSearchRequest || !this.resultsEl) return;
    this.resultsEl.empty();
    this.resultsEl.createDiv({
      text: `\u{1F4DD} ${matches.length} nota(s) encontrada(s) para \u201C${query}\u201D`,
      cls: "bri-search-status"
    });
    if (matches.length === 0) {
      this.resultsEl.createEl("p", { text: "Nenhuma frase correspondente foi encontrada.", cls: "bri-empty" });
      return;
    }
    const list = this.resultsEl.createDiv({ cls: "bri-content-results" });
    for (const match of matches) {
      const card = list.createDiv({ cls: "bri-content-result" });
      card.createSpan({ text: match.section, cls: "bri-content-section" });
      const link = card.createEl("a", {
        text: match.title,
        cls: "internal-link bri-content-title",
        attr: { href: match.path, "data-href": match.path }
      });
      const arrow = noteRow.createSpan({ cls: "bri-note-arrow" });
      (0, import_obsidian.setIcon)(arrow, "chevron-right");

      link.addEventListener("click", (event) => {
        event.preventDefault();
        void this.app.workspace.openLinkText(match.path, this.sourcePath, import_obsidian.Keymap.isModEvent(event));
      });
      card.createEl("p", { text: match.sentence, cls: "bri-content-sentence" });
    }
  }
  renderGroups(items) {
    if (!this.resultsEl) return;
    let currentBook = "";
    let list = null;
    for (const item of items) {
      if (item.reference.book !== currentBook) {
        currentBook = item.reference.book;
        const heading = this.resultsEl.createDiv({ cls: "bri-book-heading" });
        const headingIcon = heading.createSpan({ cls: "bri-book-heading-icon" });
        (0, import_obsidian.setIcon)(headingIcon, "book-open");
        const headingCopy = heading.createDiv({ cls: "bri-book-heading-copy" });
        headingCopy.createEl("h2", { text: currentBook });
        headingCopy.createSpan({
          text: `${items.filter((entry) => entry.reference.book === currentBook).length} referência(s) exibida(s)`,
          cls: "bri-book-heading-count"
        });
        list = this.resultsEl.createEl("ul", { cls: "bri-reference-list" });
      }
      if (list) this.renderReference(list, item);
    }
  }
  renderReference(parent, item) {
    const row = parent.createEl("li", { cls: "bri-reference" });
    const referenceHeader = row.createDiv({ cls: "bri-reference-header" });
    referenceHeader.createEl("strong", { text: item.reference.display, cls: "bri-reference-title" });
    referenceHeader.createSpan({
      text: `${item.notes.length} ocorrência${item.notes.length === 1 ? "" : "s"}`,
      cls: "bri-reference-count"
    });
    const notesList = row.createEl("ul", { cls: "bri-note-list" });
    for (const note of item.notes) {
      const noteRow = notesList.createEl("li", { cls: "bri-note-result" });
      noteRow.createEl("strong", { text: `${note.section}: `, cls: "bri-note-result-section" });
      const link = noteRow.createEl("a", {
        text: note.title,
        cls: "internal-link",
        attr: { href: note.path, "data-href": note.path }
      });
      link.addEventListener("click", (event) => {
        event.preventDefault();
        void openCitationTarget(
          this.app,
          note.path,
          item.reference,
          this.sourcePath,
          import_obsidian.Keymap.isModEvent(event)
        );
      });
    }
  }
};

// src/settings.ts
var import_obsidian2 = require("obsidian");

// src/transcript-categories.ts
var SUPPORTED_CATEGORIES = [
  { key: "StudioTalks", name: "Discursos", description: "Discursos proferidos no JW Broadcasting.", type: "ondemand", parentKey: "VODStudio", path: ["Discursos"], defaultFolder: "Discursos/Discursos" },
  { key: "discover:studio-news", name: "Boletim do Corpo Governante", description: "Notícias, anúncios e assuntos apresentados no Boletim do Corpo Governante.", type: "ondemand", parentKey: "VODStudio", path: ["Boletim do Corpo Governante"], defaultFolder: "Discursos/Boletim do Corpo Governante", discoverNames: ["Notícias e Anúncios", "Notícias e anúncios", "News and Announcements", "Boletim do Corpo Governante"] },
  { key: "VODPgmEvtMorningWorship", name: "Adorações Matinais", description: "Discursos e reflexões apresentados nas adorações matinais.", type: "ondemand", parentKey: "VODProgramsEvents", path: ["Programas e Eventos", "Adorações Matinais"], defaultFolder: "Discursos/Adorações Matinais" },
  { key: "VODPgmEvtGilead", name: "Formaturas", description: "Programas e discursos de formaturas.", type: "ondemand", parentKey: "VODProgramsEvents", path: ["Programas e Eventos", "Formaturas"], defaultFolder: "Discursos/Formaturas" },
  { key: "VODPgmEvtAnnMtg", name: "Reuniões Anuais", description: "Programas e discursos das reuniões anuais.", type: "ondemand", parentKey: "VODProgramsEvents", path: ["Programas e Eventos", "Reuniões Anuais"], defaultFolder: "Discursos/Reuniões Anuais" },
  { key: "2020Convention", name: "Congresso de 2020", description: "Transcrições do congresso de 2020.", type: "ondemand", parentKey: "VODProgramsEvents", group: "Congressos", path: ["Congressos", "2020"], defaultFolder: "Discursos/Congressos/2020" },
  { key: "2021Convention", name: "Congresso de 2021", description: "Transcrições do congresso de 2021.", type: "ondemand", parentKey: "VODProgramsEvents", group: "Congressos", path: ["Congressos", "2021"], defaultFolder: "Discursos/Congressos/2021" },
  { key: "2022Convention", name: "Congresso de 2022", description: "Transcrições do congresso de 2022.", type: "ondemand", parentKey: "VODProgramsEvents", group: "Congressos", path: ["Congressos", "2022"], defaultFolder: "Discursos/Congressos/2022" },
  { key: "discover:series-bible-intros", name: "Introdução aos livros da Bíblia", description: "Vídeos de introdução aos livros da Bíblia.", type: "ondemand", parentKey: "VODSeries", group: "Séries", path: ["Séries", "Introdução aos livros da Bíblia"], defaultFolder: "Discursos/Séries/Introdução aos livros da Bíblia", discoverNames: ["Vídeos de Introdução aos Livros da Bíblia", "Introdução aos livros da Bíblia", "Bible Book Introductions"] },
  { key: "discover:series-treasures", name: "Busque por Tesouros", description: "Série Busque por Tesouros.", type: "ondemand", parentKey: "VODSeries", group: "Séries", path: ["Séries", "Busque por Tesouros"], defaultFolder: "Discursos/Séries/Busque por Tesouros", discoverNames: ["À procura de tesouros", "A procura de tesouros", "Busque por Tesouros"] },
  { key: "discover:series-iron", sourceKey: "SeriesIronSharpens", name: "O ferro afia o ferro", description: "Série O ferro afia o ferro.", type: "ondemand", parentKey: "VODSeries", group: "Séries", path: ["Séries", "O ferro afia o ferro"], defaultFolder: "Discursos/Séries/O ferro afia o ferro", discoverNames: ["O ferro afia o ferro", "O Ferro Afia o Ferro"] },
  { key: "discover:series-faith", sourceKey: "SeriesImitateFaith", name: "Imite a Sua Fé", description: "Série brasileira Imite a Sua Fé.", type: "ondemand", parentKey: "VODSeries", group: "Séries", path: ["Séries", "Imite a Sua Fé"], defaultFolder: "Discursos/Séries/Imite a Sua Fé", discoverNames: ["Imite a Sua Fé", "Imite a sua fé"] },
  { key: "discover:series-learn-from-them", sourceKey: "SeriesLearnFromThem", name: "Exemplos para Nós", description: "Série Exemplos para Nós.", type: "ondemand", parentKey: "VODSeries", group: "Séries", path: ["Séries", "Exemplos para Nós"], defaultFolder: "Discursos/Séries/Exemplos para Nós", discoverNames: ["Exemplos para Nós", "Exemplos para nós"] },
  { key: "discover:series-marriage", sourceKey: "SeriesHappyMarriage", name: "Como ser feliz no casamento?", description: "Série com princípios bíblicos para o casamento.", type: "ondemand", parentKey: "VODSeries", group: "Séries", path: ["Séries", "Como ser feliz no casamento"], defaultFolder: "Discursos/Séries/Como ser feliz no casamento", discoverNames: ["Como Ser Feliz no Casamento?", "Para ter um casamento feliz", "Para Ter Um Casamento Feliz", "Para Ter Um Casamento Feliz...", "Para Ter Um Casamento Feliz…"] }
]

// src/settings.ts

// src/book-scripture-links.ts
function bookBibleProtocolUrl(reference) {
  return `obsidian://indice-nights-bible?ref=${encodeURIComponent(reference.display)}`;
}
function linkPlainBibleReferencesInMarkdown(markdown) {
  const lines = String(markdown ?? "").split("\n");
  let inFence = false;
  let inFrontmatter = false;
  let frontmatterDone = false;

  const transformSegment = (segment) => {
    const locations = findReferencesInText(segment);
    if (!locations.length) return segment;

    let output = "";
    let cursor = 0;

    for (const location of locations) {
      output += segment.slice(cursor, location.start);
      const visible = segment.slice(location.start, location.end);
      output += `[${visible}](${bookBibleProtocolUrl(location.reference)})`;
      cursor = location.end;
    }

    output += segment.slice(cursor);
    return output;
  };

  const transformLine = (line) => {
    // Protect existing links, wiki links, inline code and raw URLs.
    const tokenPattern = /(\[[^\]]+\]\([^)]+\)|\[\[[^\]]+\]\]|`[^`]*`|https?:\/\/\S+)/g;
    let result = "";
    let cursor = 0;

    for (const match of line.matchAll(tokenPattern)) {
      const index = match.index ?? 0;
      result += transformSegment(line.slice(cursor, index));
      result += match[0];
      cursor = index + match[0].length;
    }

    result += transformSegment(line.slice(cursor));
    return result;
  };

  return lines.map((line, index) => {
    if (index === 0 && line.trim() === "---") {
      inFrontmatter = true;
      return line;
    }

    if (inFrontmatter) {
      if (line.trim() === "---") {
        inFrontmatter = false;
        frontmatterDone = true;
      }
      return line;
    }

    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return line;
    }

    if (inFence) return line;

    // Do not touch the generated mini-index callout itself.
    if (/^\s*>\s*\[!bible-index\]/.test(line)) return line;
    if (/^\s*>\s*.*\[\[#\^citacao-/.test(line)) return line;

    return transformLine(line);
  }).join("\n");
}
function prepareBookStudyContent(content) {
  const linked = linkPlainBibleReferencesInMarkdown(content);
  return synchronizeMiniIndex(linked);
}

// src/epub-import.ts
function epubNormalizePath(path) {
  const parts = [];
  for (const raw of String(path ?? "").replace(/\\/g, "/").split("/")) {
    const part = raw.trim();
    if (!part || part === ".") continue;
    if (part === "..") {
      parts.pop();
      continue;
    }
    parts.push(part);
  }
  return parts.join("/");
}
function epubJoinPath(baseDir, href) {
  const cleanHref = decodeURIComponent(String(href ?? "").split("#")[0].split("?")[0]);
  return epubNormalizePath(`${baseDir ? `${baseDir}/` : ""}${cleanHref}`);
}
function epubXmlLocalElements(root, localName) {
  return Array.from(root.getElementsByTagNameNS("*", localName));
}
async function epubInflateRaw(bytes) {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Este dispositivo não oferece o descompactador necessário para importar EPUB.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function epubReadZip(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);
  const decoder = new TextDecoder("utf-8");
  let eocd = -1;
  const minimum = Math.max(0, bytes.length - 65557);

  for (let offset = bytes.length - 22; offset >= minimum; offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) {
      eocd = offset;
      break;
    }
  }

  if (eocd < 0) throw new Error("EPUB inválido: diretório ZIP não encontrado.");

  const entriesCount = view.getUint16(eocd + 10, true);
  const centralOffset = view.getUint32(eocd + 16, true);
  const entries = /* @__PURE__ */ new Map();
  let cursor = centralOffset;

  for (let index = 0; index < entriesCount; index += 1) {
    if (view.getUint32(cursor, true) !== 0x02014b50) {
      throw new Error("EPUB inválido: entrada ZIP corrompida.");
    }

    const method = view.getUint16(cursor + 10, true);
    const compressedSize = view.getUint32(cursor + 20, true);
    const uncompressedSize = view.getUint32(cursor + 24, true);
    const nameLength = view.getUint16(cursor + 28, true);
    const extraLength = view.getUint16(cursor + 30, true);
    const commentLength = view.getUint16(cursor + 32, true);
    const localOffset = view.getUint32(cursor + 42, true);
    const nameBytes = bytes.slice(cursor + 46, cursor + 46 + nameLength);
    const name = epubNormalizePath(decoder.decode(nameBytes));

    entries.set(name, {
      name,
      method,
      compressedSize,
      uncompressedSize,
      localOffset
    });

    cursor += 46 + nameLength + extraLength + commentLength;
  }

  const cache = /* @__PURE__ */ new Map();

  const readEntryBytes = async (path) => {
    const normalized = epubNormalizePath(path);
    if (cache.has(normalized)) return cache.get(normalized);

    const entry = entries.get(normalized);
    if (!entry) return null;

    const localOffset = entry.localOffset;
    if (view.getUint32(localOffset, true) !== 0x04034b50) {
      throw new Error(`EPUB inválido: cabeçalho ausente em ${normalized}.`);
    }

    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataStart, dataStart + entry.compressedSize);

    let result;
    if (entry.method === 0) {
      result = compressed;
    } else if (entry.method === 8) {
      result = await epubInflateRaw(compressed);
    } else {
      throw new Error(`Método de compactação EPUB não suportado (${entry.method}).`);
    }

    cache.set(normalized, result);
    return result;
  };

  const readText = async (path) => {
    const value = await readEntryBytes(path);
    return value ? decoder.decode(value) : null;
  };

  return { entries, readEntryBytes, readText };
}
function epubCleanInlineText(value) {
  return String(value ?? "").replace(/\u00a0/g, " ").replace(/[ \t]+/g, " ").replace(/\s*\n\s*/g, " ").trim();
}
function epubElementText(element) {
  return epubCleanInlineText(element == null ? void 0 : element.textContent);
}
function epubHtmlToMarkdown(html, fallbackTitle) {
  let doc;
  try {
    doc = new DOMParser().parseFromString(html, "application/xhtml+xml");
    if (doc.querySelector("parsererror")) {
      doc = new DOMParser().parseFromString(html, "text/html");
    }
  } catch (error) {
    doc = new DOMParser().parseFromString(html, "text/html");
  }

  const body = doc.body || doc.documentElement;
  for (const unwanted of Array.from(body.querySelectorAll("script, style, svg, nav, iframe, noscript"))) {
    unwanted.remove();
  }

  const titleCandidate =
    epubElementText(body.querySelector("h1")) ||
    epubElementText(body.querySelector("h2")) ||
    epubElementText(doc.querySelector("title")) ||
    fallbackTitle;

  const blocks = [];

  const blockElements = Array.from(
    body.querySelectorAll("h1, h2, h3, h4, h5, h6, p, blockquote, li")
  );

  for (const element of blockElements) {
    // Evita duplicar texto de <li><p>...</p></li>.
    if (element.tagName.toLowerCase() === "p" && element.closest("li")) continue;

    const text = epubElementText(element);
    if (!text) continue;

    const tag = element.tagName.toLowerCase();
    if (/^h[1-6]$/.test(tag)) {
      const level = Number(tag.slice(1));
      blocks.push(`${"#".repeat(Math.min(6, Math.max(1, level)))} ${text}`);
    } else if (tag === "blockquote") {
      blocks.push(text.split(/\n+/).map((line) => `> ${line}`).join("\n"));
    } else if (tag === "li") {
      blocks.push(`- ${text}`);
    } else {
      blocks.push(text);
    }
  }

  // EPUBs muito simples podem não usar tags de bloco convencionais.
  if (blocks.length === 0) {
    const text = epubElementText(body);
    if (text) blocks.push(text);
  }

  return {
    title: titleCandidate || fallbackTitle,
    markdown: blocks.join("\n\n").replace(/\n{3,}/g, "\n\n").trim()
  };
}
async function importEpubToVault(app, file) {
  const archive = await epubReadZip(await file.arrayBuffer());

  const containerXml = await archive.readText("META-INF/container.xml");
  if (!containerXml) throw new Error("EPUB inválido: META-INF/container.xml não encontrado.");

  const containerDoc = new DOMParser().parseFromString(containerXml, "application/xml");
  const rootfile = epubXmlLocalElements(containerDoc, "rootfile")[0];
  const opfPath = epubNormalizePath(rootfile == null ? void 0 : rootfile.getAttribute("full-path"));
  if (!opfPath) throw new Error("EPUB inválido: pacote OPF não localizado.");

  const opfText = await archive.readText(opfPath);
  if (!opfText) throw new Error("EPUB inválido: arquivo OPF não pôde ser lido.");

  const opfDoc = new DOMParser().parseFromString(opfText, "application/xml");
  const metadataTitle = epubElementText(epubXmlLocalElements(opfDoc, "title")[0]);
  const bookTitle = metadataTitle || file.name.replace(/\.epub$/i, "") || "Livro importado";
  const opfDir = opfPath.includes("/") ? opfPath.slice(0, opfPath.lastIndexOf("/")) : "";

  const manifest = /* @__PURE__ */ new Map();
  for (const item of epubXmlLocalElements(opfDoc, "item")) {
    const id = item.getAttribute("id");
    const href = item.getAttribute("href");
    const mediaType = item.getAttribute("media-type") || "";
    if (!id || !href) continue;
    manifest.set(id, {
      id,
      href,
      mediaType,
      path: epubJoinPath(opfDir, href)
    });
  }

  const spineIds = epubXmlLocalElements(opfDoc, "itemref")
    .map((item) => item.getAttribute("idref"))
    .filter(Boolean);

  const safeBook = nomeArquivoSeguro(bookTitle);
  await ensureFolder(app, "Livros");

  let bookFolder = `Livros/${safeBook}`;
  let suffix = 2;
  while (app.vault.getAbstractFileByPath(bookFolder)) {
    bookFolder = `Livros/${safeBook} (${suffix})`;
    suffix += 1;
  }
  await ensureFolder(app, bookFolder);

  const chapterLinks = [];
  let chapterNumber = 0;

  for (const idref of spineIds) {
    const item = manifest.get(idref);
    if (!item) continue;
    if (!/(xhtml|html)/i.test(item.mediaType) && !/\.x?html?$/i.test(item.path)) continue;

    const html = await archive.readText(item.path);
    if (!html) continue;

    const fallbackTitle = `Capítulo ${chapterNumber + 1}`;
    const converted = epubHtmlToMarkdown(html, fallbackTitle);
    if (!converted.markdown || converted.markdown.length < 20) continue;

    chapterNumber += 1;
    const chapterTitle = converted.title || `Capítulo ${chapterNumber}`;
    const fileBase = `${String(chapterNumber).padStart(2, "0")} - ${nomeArquivoSeguro(chapterTitle)}`;
    const chapterPath = `${bookFolder}/${fileBase}.md`;

    const frontmatter = [
      "---",
      'indice_nights_tipo: "livro"',
      `livro: ${yamlString(bookTitle)}`,
      `capitulo: ${chapterNumber}`,
      'origem: "epub"',
      `epub_arquivo: ${yamlString(file.name)}`,
      "---"
    ].join("\n");

    const rawContent = [
      frontmatter,
      "",
      `# ${chapterTitle}`,
      "",
      converted.markdown
    ].join("\n").trimEnd() + "\n";

    const prepared = prepareBookStudyContent(rawContent);
    const content = prepared.content;

    const created = await app.vault.create(chapterPath, content);

    if (prepared.references.length) {
      await app.fileManager.processFrontMatter(created, (properties) => {
        properties.textos = prepared.references.map((reference) => reference.display);
      });
    }

    chapterLinks.push(`- [[${fileBase}|${chapterTitle}]]`);
  }

  if (chapterNumber === 0) {
    const folder = app.vault.getAbstractFileByPath(bookFolder);
    if (folder instanceof import_obsidian2.TFolder && folder.children.length === 0) {
      await app.vault.delete(folder);
    }
    throw new Error("Nenhum capítulo legível foi encontrado no EPUB.");
  }

  const summary = [
    "---",
    'indice_nights_tipo: "livro"',
    `livro: ${yamlString(bookTitle)}`,
    'origem: "epub"',
    'tipo_nota: "sumario"',
    "---",
    "",
    `# ${bookTitle}`,
    "",
    `Importado de **${file.name}**.`,
    "",
    "## Sumário",
    "",
    ...chapterLinks
  ].join("\n").trimEnd() + "\n";

  await app.vault.create(`${bookFolder}/00 - Sumário.md`, summary);

  return {
    title: bookTitle,
    folder: bookFolder,
    chapters: chapterNumber
  };
}

var IndiceNightsSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("indice-nights-settings");

    new import_obsidian2.Setting(containerEl).setName("Biblioteca de transcrições").setHeading();
    const indexHero = containerEl.createEl("button", {
      cls: "bri-index-hero",
      attr: { type: "button", "aria-label": "Criar ou abrir o Índice Geral" }
    });
    const indexIcon = indexHero.createSpan({ cls: "bri-index-hero-icon" });
    (0, import_obsidian2.setIcon)(indexIcon, "book-open");
    const indexCopy = indexHero.createDiv({ cls: "bri-index-hero-copy" });
    const indexTitleRow = indexCopy.createDiv({ cls: "bri-index-hero-title-row" });
    indexTitleRow.createSpan({ text: "Índice Geral", cls: "bri-index-hero-title" });
    indexTitleRow.createSpan({ text: "Recomendado", cls: "bri-index-hero-badge" });
    indexCopy.createDiv({
      text: "Crie ou abra o índice completo de textos bíblicos encontrados nas transcrições.",
      cls: "bri-index-hero-description"
    });
    const indexArrow = indexHero.createSpan({ cls: "bri-index-hero-arrow" });
    (0, import_obsidian2.setIcon)(indexArrow, "chevron-right");
    indexHero.addEventListener("click", async () => {
      await this.plugin.transcriptService.ensureGeneralIndex(true, true);
    });

    const researchActions = containerEl.createDiv({ cls: "bri-research-actions" });

    const libraryButton = researchActions.createEl("button", {
      text: "Biblioteca - Indice Nights",
      cls: "bri-research-action",
      attr: { type: "button" }
    });
    const libraryIcon = libraryButton.createSpan({ cls: "bri-research-action-icon" });
    (0, import_obsidian2.setIcon)(libraryIcon, "library-big");
    libraryButton.addEventListener("click", () => {
      void this.plugin.activateLibraryView();
    });

    const contextButton = researchActions.createEl("button", {
      text: "Contexto Bíblico",
      cls: "bri-research-action",
      attr: { type: "button" }
    });
    const contextIcon = contextButton.createSpan({ cls: "bri-research-action-icon" });
    (0, import_obsidian2.setIcon)(contextIcon, "book-open-check");
    contextButton.addEventListener("click", () => {
      void this.plugin.activateContextView();
    });

    const officialDivider = containerEl.createDiv({ cls: "bri-section-divider bri-section-divider-official" });
    officialDivider.createDiv({ cls: "bri-section-divider-decoration bri-section-divider-decoration-left" });
    officialDivider.createSpan({ text: "Transcrições oficiais", cls: "bri-section-divider-label" });
    officialDivider.createDiv({ cls: "bri-section-divider-decoration bri-section-divider-decoration-right" });

    const officialActions = containerEl.createDiv({ cls: "bri-official-actions-row" });

    const officialDownloadAction = officialActions.createEl("button", {
      text: "Atualizar ou baixar",
      cls: "bri-official-action-button",
      attr: { type: "button" }
    });
    officialDownloadAction.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      officialDownloadAction.disabled = true;
      officialDownloadAction.addClass("is-loading");
      try {
        await this.plugin.transcriptService.downloadEnabled();
      } finally {
        officialDownloadAction.disabled = false;
        officialDownloadAction.removeClass("is-loading");
      }
    });

    const officialThumbnailAction = officialActions.createEl("button", {
      text: "Atualizar miniaturas",
      cls: "bri-official-action-button",
      attr: { type: "button" }
    });
    officialThumbnailAction.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      officialThumbnailAction.disabled = true;
      officialThumbnailAction.addClass("is-loading");
      try {
        await this.plugin.transcriptService.updateMissingThumbnails();
      } finally {
        officialThumbnailAction.disabled = false;
        officialThumbnailAction.removeClass("is-loading");
      }
    });

    const allCategoriesEnabled = SUPPORTED_CATEGORIES.length > 0 && SUPPORTED_CATEGORIES.every((item) => {
      var _a;
      return Boolean((_a = this.plugin.settings.categorySettings[item.key]) == null ? void 0 : _a.enabled);
    });

    const selectAllAction = officialActions.createEl("button", {
      text: allCategoriesEnabled ? "Desmarcar todas" : "Selecionar todas",
      cls: "bri-official-action-button bri-official-action-button-compact",
      attr: { type: "button" }
    });

    selectAllAction.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const nextEnabled = !allCategoriesEnabled;
      for (const item of SUPPORTED_CATEGORIES) {
        const current = this.plugin.settings.categorySettings[item.key] ?? { enabled: false, folder: "" };
        this.plugin.settings.categorySettings[item.key] = { ...current, enabled: nextEnabled };
      }

      await this.plugin.saveSettings();
      this.display();
    });

    const catalog = containerEl.createDiv({ cls: "bri-catalog-settings" });
    this.renderCatalog(catalog);

    const unofficialDivider = containerEl.createDiv({ cls: "bri-section-divider bri-section-divider-unofficial bri-section-divider-with-action" });
    unofficialDivider.createDiv({ cls: "bri-section-divider-decoration bri-section-divider-decoration-left" });
    unofficialDivider.createSpan({ text: "Transcrições não oficiais", cls: "bri-section-divider-label" });
    unofficialDivider.createDiv({ cls: "bri-section-divider-decoration bri-section-divider-decoration-right" });
    const unofficialAction = unofficialDivider.createEl("button", {
      text: "Atualizar ou baixar",
      cls: "bri-section-divider-action",
      attr: { type: "button" }
    });
    unofficialAction.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      unofficialAction.disabled = true;
      unofficialAction.addClass("is-loading");
      try {
        await this.plugin.remoteDriveService.downloadNew();
      } finally {
        unofficialAction.disabled = false;
        unofficialAction.removeClass("is-loading");
      }
    });

    const unofficialPanel = containerEl.createDiv({ cls: "bri-unofficial-panel" });

    const linkSetting = new import_obsidian2.Setting(unofficialPanel)
      .setName("Link público da pasta")
      .setDesc("Cole o link de uma pasta pública do Google Drive. O plugin lê TXT, Markdown e Documentos Google e mantém as subpastas.")
      .addText((text) => text
        .setPlaceholder("https://drive.google.com/drive/folders/...")
        .setValue(this.plugin.settings.remoteDriveUrl)
        .onChange(async (value) => {
          this.plugin.settings.remoteDriveUrl = value.trim();
          await this.plugin.saveSettings();
        }));
    linkSetting.settingEl.addClass("bri-unofficial-row");
    const linkIcon = linkSetting.infoEl.createSpan({ cls: "bri-unofficial-row-icon" });
    (0, import_obsidian2.setIcon)(linkIcon, "link-2");
    linkSetting.infoEl.prepend(linkIcon);

    const remoteFolders = this.listFolders();
    const folderSetting = new import_obsidian2.Setting(unofficialPanel)
      .setName("Pasta de destino")
      .setDesc("Se nenhuma for escolhida, será usada Discursos/Importados. As subpastas remotas serão preservadas.")
      .addDropdown((dropdown) => {
        dropdown.addOption("", "Automática: Discursos/Importados");
        for (const folder of remoteFolders) dropdown.addOption(folder, folder);
        const current = this.plugin.settings.remoteDriveFolder;
        if (current && !remoteFolders.includes(current)) dropdown.addOption(current, current);
        dropdown.setValue(current);
        dropdown.onChange(async (folder) => {
          this.plugin.settings.remoteDriveFolder = folder;
          await this.plugin.saveSettings();
        });
      });
    folderSetting.settingEl.addClass("bri-unofficial-row");
    const folderIcon = folderSetting.infoEl.createSpan({ cls: "bri-unofficial-row-icon" });
    (0, import_obsidian2.setIcon)(folderIcon, "folder");
    folderSetting.infoEl.prepend(folderIcon);

    const personalDivider = containerEl.createDiv({
      cls: "bri-section-divider bri-section-divider-personal"
    });
    personalDivider.createDiv({ cls: "bri-section-divider-decoration bri-section-divider-decoration-left" });
    personalDivider.createSpan({ text: "Biblioteca pessoal", cls: "bri-section-divider-label" });
    personalDivider.createDiv({ cls: "bri-section-divider-decoration bri-section-divider-decoration-right" });

    const personalPanel = containerEl.createDiv({ cls: "bri-personal-library-panel" });
    const personalIcon = personalPanel.createDiv({ cls: "bri-personal-library-icon" });
    (0, import_obsidian2.setIcon)(personalIcon, "book-copy");

    const personalCopy = personalPanel.createDiv({ cls: "bri-personal-library-copy" });
    personalCopy.createDiv({ text: "Importar livro EPUB", cls: "bri-personal-library-title" });
    personalCopy.createDiv({
      text: "Converte o EPUB em capítulos Markdown dentro de Livros/. Os textos bíblicos ficam clicáveis, mas não entram no Índice Geral nem no Contexto Bíblico das transcrições.",
      cls: "bri-personal-library-description"
    });

    const personalAction = personalPanel.createEl("button", {
      text: "Importar EPUB",
      cls: "bri-personal-library-button",
      attr: { type: "button" }
    });

    const epubInput = personalPanel.createEl("input", {
      cls: "bri-personal-library-input",
      attr: {
        type: "file",
        accept: ".epub,application/epub+zip"
      }
    });

    const refreshBooksAction = personalPanel.createEl("button", {
      text: "Atualizar referências",
      cls: "bri-personal-library-button bri-personal-library-button-secondary",
      attr: {
        type: "button",
        title: "Revisa os livros já importados, cria referências bíblicas clicáveis e conecta com o Contexto Bíblico"
      }
    });

    refreshBooksAction.addEventListener("click", async () => {
      refreshBooksAction.disabled = true;
      refreshBooksAction.setText("Atualizando…");
      try {
        await this.plugin.updatePersonalLibraryStudyLinks(true);
      } finally {
        refreshBooksAction.disabled = false;
        refreshBooksAction.setText("Atualizar referências");
      }
    });

    personalAction.addEventListener("click", () => {
      epubInput.value = "";
      epubInput.click();
    });

    epubInput.addEventListener("change", async () => {
      const selected = epubInput.files == null ? void 0 : epubInput.files[0];
      if (!selected) return;

      personalAction.disabled = true;
      personalAction.setText("Importando…");

      try {
        const result = await importEpubToVault(this.app, selected);
        new import_obsidian2.Notice(
          `EPUB importado: ${result.title}. ${result.chapters} capítulo(s) criado(s) em ${result.folder}.`,
          9000
        );

        const summaryPath = `${result.folder}/00 - Sumário.md`;
        await this.app.workspace.openLinkText(summaryPath, "", false);
      } catch (error) {
        console.error("Indice Nights: falha ao importar EPUB", error);
        new import_obsidian2.Notice(
          `Não foi possível importar o EPUB: ${error instanceof Error ? error.message : String(error)}`,
          12000
        );
      } finally {
        personalAction.disabled = false;
        personalAction.setText("Importar EPUB");
      }
    });
  }
  renderCatalog(container) {
    container.empty();
    const folders = this.listFolders();

    const getCurrent = (item) => {
      var _a;
      return (_a = this.plugin.settings.categorySettings[item.key]) != null ? _a : { enabled: false, folder: "" };
    };

    const iconFor = (item) => {
      if (item.key === "StudioTalks") return "mic-2";
      if (item.key === "discover:studio-news") return "newspaper";
      if (item.key === "VODPgmEvtMorningWorship") return "sunrise";
      if (item.key === "VODPgmEvtGilead") return "graduation-cap";
      if (item.key === "VODPgmEvtAnnMtg") return "calendar-days";
      return "library";
    };

    const renderStandardCard = (item) => {
      const current = getCurrent(item);
      const card = container.createDiv({ cls: "bri-library-card" });
      if (current.enabled) card.addClass("is-enabled");

      const iconBox = card.createDiv({ cls: "bri-library-card-icon" });
      (0, import_obsidian2.setIcon)(iconBox, iconFor(item));

      const body = card.createDiv({ cls: "bri-library-card-body" });
      body.createDiv({ text: item.name, cls: "bri-library-card-title" });
      body.createDiv({ text: item.description || item.path.join(" › "), cls: "bri-library-card-description" });
      body.createDiv({
        text: `Pasta automática: ${item.defaultFolder}`,
        cls: "bri-library-card-path"
      });

      if (["StudioTalks", "VODPgmEvtMorningWorship"].includes(item.key)) {
        const sortRow = card.createDiv({ cls: "bri-publication-order-row" });
        const sortCopy = sortRow.createDiv({ cls: "bri-publication-order-copy" });
        sortCopy.createDiv({ text: "Ordenar por publicação", cls: "bri-publication-order-title" });
        sortCopy.createDiv({ text: "Ordena do mais recente ao mais antigo. Ao desligar, volta ao nome original.", cls: "bri-publication-order-description" });
        const sortActions = sortRow.createDiv({ cls: "bri-publication-order-actions" });
        const reviewButton = sortActions.createEl("button", {
          text: "Revisar renomeação",
          cls: "bri-publication-review-button",
          attr: {
            type: "button",
            title: "Remove numeração e data residuais e deixa os nomes prontos para a ordem alfabética"
          }
        });
        reviewButton.addEventListener("click", async () => {
          reviewButton.disabled = true;
          const originalText = reviewButton.textContent;
          reviewButton.setText("Revisando…");

          try {
            this.plugin.settings.publicationOrder = {
              ...(this.plugin.settings.publicationOrder ?? {}),
              [item.key]: false
            };
            await this.plugin.saveSettings();
            await this.plugin.transcriptService.reviewPublicationNames(item.key, true);
          } finally {
            reviewButton.disabled = false;
            reviewButton.setText(originalText || "Revisar renomeação");
            this.renderCatalog(container);
          }
        });

        const sortToggleHost = sortActions.createDiv({ cls: "bri-publication-order-toggle" });
        const sortEnabled = Boolean((this.plugin.settings.publicationOrder ?? {})[item.key]);
        new import_obsidian2.Setting(sortToggleHost).addToggle((toggle) => toggle
          .setValue(sortEnabled)
          .setTooltip("Ordenar arquivos pela data de publicação")
          .onChange(async (enabled) => {
            this.plugin.settings.publicationOrder = {
              ...(this.plugin.settings.publicationOrder ?? {}),
              [item.key]: enabled
            };
            await this.plugin.saveSettings();
            await this.plugin.transcriptService.setPublicationOrder(item.key, enabled, true);
          }));
      }

      const footer = card.createDiv({ cls: "bri-library-card-footer" });
      if (current.enabled) {
        const selectHost = footer.createDiv({ cls: "bri-library-card-select" });
        new import_obsidian2.Setting(selectHost).addDropdown((dropdown) => {
          dropdown.addOption("", `Automática: ${item.defaultFolder}`);
          for (const folder of folders) dropdown.addOption(folder, folder);
          if (current.folder && !folders.includes(current.folder)) dropdown.addOption(current.folder, current.folder);
          dropdown.setValue(current.folder);
          dropdown.onChange(async (folder) => {
            this.plugin.settings.categorySettings[item.key] = { enabled: true, folder };
            await this.plugin.saveSettings();
          });
        });
      } else {
        footer.createSpan({ text: "Desativado", cls: "bri-library-card-status" });
      }

      const toggleHost = footer.createDiv({ cls: "bri-library-card-toggle" });
      new import_obsidian2.Setting(toggleHost).addToggle((toggle) => toggle
        .setTooltip("Incluir esta coleção nos downloads")
        .setValue(current.enabled)
        .onChange(async (enabled) => {
          this.plugin.settings.categorySettings[item.key] = { ...current, enabled };
          await this.plugin.saveSettings();
          this.renderCatalog(container);
        }));
    };

    const regularItems = SUPPORTED_CATEGORIES.filter((item) => !item.group);
    for (const item of regularItems) renderStandardCard(item);

    const groupItems = SUPPORTED_CATEGORIES.filter((item) => item.group);
    const groupNames = Array.from(new Set(groupItems.map((item) => item.group)));
    const groupsWrap = container.createDiv({ cls: "bri-library-groups-wrap" });

    const renderGroupOption = (item, host) => {
      host.empty();
      const current = getCurrent(item);
      const option = host.createDiv({ cls: "bri-library-group-option" });
      if (current.enabled) option.addClass("is-enabled");

      const optionInfo = option.createDiv({ cls: "bri-library-group-option-info" });
      optionInfo.createDiv({ text: item.name, cls: "bri-library-group-option-title" });
      optionInfo.createDiv({ text: item.description || "", cls: "bri-library-group-option-description" });

      const controls = option.createDiv({ cls: "bri-library-group-option-controls" });
      if (current.enabled) {
        const selectHost = controls.createDiv({ cls: "bri-library-group-option-select" });
        new import_obsidian2.Setting(selectHost).addDropdown((dropdown) => {
          dropdown.addOption("", `Automática: ${item.defaultFolder}`);
          for (const folder of folders) dropdown.addOption(folder, folder);
          if (current.folder && !folders.includes(current.folder)) dropdown.addOption(current.folder, current.folder);
          dropdown.setValue(current.folder);
          dropdown.onChange(async (folder) => {
            this.plugin.settings.categorySettings[item.key] = { enabled: true, folder };
            await this.plugin.saveSettings();
          });
        });
      }

      const toggleHost = controls.createDiv({ cls: "bri-library-group-option-toggle" });
      new import_obsidian2.Setting(toggleHost).addToggle((toggle) => toggle
        .setValue(current.enabled)
        .setTooltip("Incluir esta coleção nos downloads")
        .onChange(async (enabled) => {
          this.plugin.settings.categorySettings[item.key] = { ...current, enabled };
          await this.plugin.saveSettings();
          renderGroupOption(item, host);
        }));
    };

    for (const groupName of groupNames) {
      const items = groupItems.filter((item) => item.group === groupName);
      const details = groupsWrap.createEl("details", { cls: "bri-library-group" });
      const enabledCount = items.filter((item) => getCurrent(item).enabled).length;

      const summary = details.createEl("summary", { cls: "bri-library-group-summary" });
      const iconBox = summary.createSpan({ cls: "bri-library-group-icon" });
      (0, import_obsidian2.setIcon)(iconBox, groupName === "Congressos" ? "users" : "clapperboard");

      const copy = summary.createDiv({ cls: "bri-library-group-copy" });
      copy.createDiv({ text: groupName, cls: "bri-library-group-title" });
      copy.createDiv({
        text: groupName === "Congressos"
          ? "Escolha o ano do congresso para ativar e baixar as transcrições."
          : "Escolha as séries que deseja manter disponíveis no Obsidian.",
        cls: "bri-library-group-description"
      });

      summary.createSpan({
        text: enabledCount ? `${enabledCount} ativo${enabledCount > 1 ? "s" : ""}` : `${items.length} opções`,
        cls: "bri-library-group-count"
      });
      const chevron = summary.createSpan({ cls: "bri-library-group-chevron" });
      (0, import_obsidian2.setIcon)(chevron, "chevron-down");

      const panel = details.createDiv({ cls: "bri-library-group-panel" });
      for (const item of items) {
        const optionHost = panel.createDiv({ cls: "bri-library-group-option-host" });
        renderGroupOption(item, optionHost);
      }
    }
  }
  listFolders() {
    return this.app.vault.getAllLoadedFiles().filter((file) => file instanceof import_obsidian2.TFolder && file.path !== "/").map((folder) => folder.path).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }
};

// src/transcript-source-service.ts
var import_obsidian3 = require("obsidian");

// src/transcript.ts
var INVALID_FILE_CHARS = /[<>:"/\\|?*]/g;
var RESERVED_NAMES = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i;
function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"'
  };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    var _a;
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return (_a = named[code.toLocaleLowerCase("pt-BR")]) != null ? _a : entity;
  });
}
function cueText(lines) {
  return decodeEntities(lines.join(" ").replace(/<\/?(?:c(?:\.[^ >]+)?|i|b|u|ruby|rt|v(?:\s+[^>]*)?|lang(?:\s+[^>]*)?)>/gi, "").replace(/\s+/g, " ").trim());
}
function vttParaParagrafos(vtt) {
  const cues = [];
  let current = [];
  const flush = () => {
    const text = cueText(current);
    current = [];
    if (text && cues.at(-1) !== text) cues.push(text);
  };
  for (const rawLine of vtt.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      flush();
      continue;
    }
    if (/^(WEBVTT|NOTE|STYLE|REGION)(?:\s|$)/i.test(line)) continue;
    if (/^\d+$/.test(line) && current.length === 0) continue;
    if (/^\d{1,2}:\d{2}(?::\d{2})?[.,]\d{3}\s+-->/.test(line)) continue;
    current.push(line);
  }
  flush();
  const paragraphs = [];
  let paragraph = "";
  for (const cue of cues) {
    const beginsNewThought = /^(Primeiro|Segundo|Terceiro|Por fim|Agora|Vamos|Então|Mas|Assim|Qual|Como|O que)\b/i.test(cue);
    if (paragraph && (beginsNewThought && paragraph.length >= 220 || paragraph.length + cue.length >= 620)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
    paragraph += `${paragraph ? " " : ""}${cue}`;
    if (paragraph.length >= 360 && /[.!?…][”'’"]?$/.test(cue)) {
      paragraphs.push(paragraph.trim());
      paragraph = "";
    }
  }
  if (paragraph.trim()) paragraphs.push(paragraph.trim());
  return paragraphs;
}
function nomeArquivoSeguro(title) {
  let safe = title.replace(/\p{Cc}/gu, "-").replace(INVALID_FILE_CHARS, "-").replace(/\s+/g, " ").replace(/\.+$/g, "").trim();
  if (!safe) safe = "Transcri\xE7\xE3o sem t\xEDtulo";
  if (RESERVED_NAMES.test(safe)) safe = `Nota - ${safe}`;
  return safe.slice(0, 150).trim();
}
function sourceId(media) {
  return media.naturalKey.replace(/^pub-/, "").replace(/_(?:VIDEO|AUDIO)$/i, "");
}
function identificarOrador(title) {
  var _a, _b;
  const prefix = (_b = (_a = title.split(":", 1)[0]) == null ? void 0 : _a.trim()) != null ? _b : "";
  if (!prefix || prefix === title.trim() || prefix.length > 70) return null;
  if (/^(programa|discurso|notícias|boletim|relatório|congresso|assembleia)\b/i.test(prefix)) return null;
  const words = prefix.split(/\s+/);
  if (words.length < 2 || words.length > 6) return null;
  if (!words.every((word) => /^[A-ZÁÀÂÃÉÊÍÓÔÕÚÜÇ][\p{L}'’.-]*$/u.test(word))) return null;
  return prefix;
}
function withoutExistingMiniIndex(body) {
  return body.replace(/^\[▶ Assistir no [^\]]+\]\([^)]+\)\s*$/gim, "").replace(/\n?<!-- mini-indice-inicio -->[\s\S]*?<!-- mini-indice-fim -->\n?/g, "\n").replace(/\n?> \[!bible-index\][^\n]*\n>[^\n]*(?:\n|$)/g, "\n").replace(/\n?## 📖 Mini-índice de textos\s*\n+[\s\S]*?(?=\n{2,})\n{2,}/g, "\n\n").replace(/^\^citacao-\d+\s*$/gm, "").replace(/\n{3,}/g, "\n\n").trim();
}
function canContainSpokenReference(block) {
  const trimmed = block.trim();
  return Boolean(trimmed) && !/^#{1,6}\s/.test(trimmed) && !/^\[▶ Assistir ao vídeo original\]/.test(trimmed) && !/^> \[!bible-index\]/.test(trimmed) && !/^```/.test(trimmed) && !/^<!--/.test(trimmed);
}
function protectedMiniIndexLabel(display) {
  return display.replace(/^((?:[123]\s+)?\p{L})/u, "$1\u2060");
}
function synchronizeMiniIndex(content) {
  var _a, _b;
  const frontmatterMatch = /^---\s*\n[\s\S]*?\n---\s*\n?/.exec(content);
  const frontmatter = (_a = frontmatterMatch == null ? void 0 : frontmatterMatch[0].trimEnd()) != null ? _a : "";
  const rawBody = content.slice((_b = frontmatterMatch == null ? void 0 : frontmatterMatch[0].length) != null ? _b : 0);
  const cleanBody = withoutExistingMiniIndex(rawBody);
  const blocks = cleanBody ? cleanBody.split(/\n{2,}/) : [];
  const referenceTargets = /* @__PURE__ */ new Map();
  const allReferenceValues = [];
  const renderedBlocks = blocks.map((block, index) => {
    if (!canContainSpokenReference(block)) return block.trim();
    const references2 = extractReferences(block);
    if (references2.length === 0) return block.trim();
    allReferenceValues.push(block);
    const blockId = `citacao-${String(index + 1).padStart(3, "0")}`;
    for (const reference of references2) {
      if (!referenceTargets.has(reference.key)) referenceTargets.set(reference.key, blockId);
    }
    return `${block.trim()}
^${blockId}`;
  });
  const references = extractReferences(allReferenceValues);
  if (references.length > 0) {
    const links = references.map((reference) => {
      const target = referenceTargets.get(reference.key);
      const label = protectedMiniIndexLabel(reference.display);
      return target ? `[[#^${target}|${label}]]` : label;
    }).join("  \xB7  ");
    const miniIndex = [
      "> [!bible-index] Textos b\xEDblicos citados",
      `> ${links}`
    ].join("\n");
    const sourceIndex = renderedBlocks.findIndex((block) => /^\[▶ Assistir ao vídeo original\]/.test(block));
    const titleIndex = renderedBlocks.findIndex((block) => /^#\s/.test(block));
    const insertionIndex = sourceIndex >= 0 ? sourceIndex + 1 : titleIndex >= 0 ? titleIndex + 1 : 0;
    renderedBlocks.splice(insertionIndex, 0, miniIndex);
  }
  const output = [frontmatter, renderedBlocks.join("\n\n")].filter(Boolean).join("\n\n").trimEnd() + "\n";
  return { content: output, references };
}
function yamlString(value) {
  return JSON.stringify(value);
}
function criarNotaTranscricao(media, vtt, thumbnailPath) {
  var _a, _b, _c;
  const paragraphs = vttParaParagrafos(vtt);
  const transcript = paragraphs.join("\n\n");
  const references = extractReferences(transcript);
  const speaker = identificarOrador(media.title);
  const date = (_c = (_b = /^\d{4}-\d{2}-\d{2}/.exec((_a = media.firstPublished) != null ? _a : "")) == null ? void 0 : _b[0]) != null ? _c : null;
  const yaml = [
    "---",
    `id_origem: ${yamlString(sourceId(media))}`,
    ...speaker ? [`orador: ${yamlString(speaker)}`] : [],
    ...date ? [`data_publicacao: ${date}`] : [],
    ...references.length ? ["textos:", ...references.map((reference) => `  - ${yamlString(reference.display)}`)] : ["textos: []"],
    "---"
  ];
  const base = [
    ...yaml,
    "",
    `# ${media.title}`,
    "",
    ...thumbnailPath ? [`[![Miniatura](${encodeURI(thumbnailPath)})](${`https://www.jw.org/finder?wtlocale=T&lank=${encodeURIComponent(media.naturalKey)}`})`, ""] : [],
    ...paragraphs.flatMap((paragraph) => [paragraph, ""])
  ].join("\n").trimEnd() + "\n";
  return synchronizeMiniIndex(base).content;
}

// src/transcript-source-service.ts
var API_BASE = "https://b.jw-cdn.org/apis/mediator/v1";
var LOCALE_PT_BR = "T";
var GENERAL_INDEX_FOLDER = "00 - \xCDndice Geral";
var LEGACY_GENERAL_INDEX_FOLDER = "\xCDndice Geral";
var GENERAL_INDEX_FILENAME = "\xCDndice Geral de Textos B\xEDblicos.md";
var THUMBNAIL_FOLDER = "Discursos/ZZZ - Anexos/Indice Nights/Miniaturas";
var PREVIOUS_THUMBNAIL_FOLDER = "Discursos/99 - Anexos/Indice Nights/Miniaturas";
var LEGACY_THUMBNAIL_FOLDER = "Anexos/Indice Nights/Miniaturas";
function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
async function getCategory(key, limit = 50, offset = 0) {
  const params = new URLSearchParams({ clientType: "www", detailed: "1", limit: String(limit), offset: String(offset) });
  const response = await (0, import_obsidian3.requestUrl)({
    url: `${API_BASE}/categories/${LOCALE_PT_BR}/${encodeURIComponent(key)}?${params.toString()}`,
    method: "GET"
  });
  return response.json;
}
async function getCategoryLegacy(key, limit = 50, offset = 0) {
  const params = new URLSearchParams({ clientType: "www", limit: String(limit), offset: String(offset) });
  const response = await (0, import_obsidian3.requestUrl)({
    url: `${API_BASE}/categories/${LOCALE_PT_BR}/${encodeURIComponent(key)}?${params.toString()}`,
    method: "GET"
  });
  return response.json;
}
async function getMediaItem(key) {
  const params = new URLSearchParams({ clientType: "www" });
  const response = await (0, import_obsidian3.requestUrl)({
    url: `${API_BASE}/media-items/${LOCALE_PT_BR}/${encodeURIComponent(key)}?${params.toString()}`,
    method: "GET"
  });
  const payload = response.json;
  let media = null;
  if (Array.isArray(payload == null ? void 0 : payload.media)) {
    media = payload.media[0] ?? null;
  } else if ((payload == null ? void 0 : payload.media) && typeof payload.media === "object") {
    media = payload.media;
  } else if ((payload == null ? void 0 : payload.mediaItem) && typeof payload.mediaItem === "object") {
    media = payload.mediaItem;
  } else if (payload && typeof payload === "object" && payload.naturalKey) {
    media = payload;
  }
  if (!media) throw new Error(`Item de mídia não encontrado: ${key}`);
  return media;
}
function cleanFolder(value) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "");
  return trimmed ? (0, import_obsidian3.normalizePath)(trimmed) : "";
}
async function ensureFolder(app, folder) {
  const parts = cleanFolder(folder).split("/").filter(Boolean);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current)) await app.vault.createFolder(current);
  }
}
function subtitleCandidates(value, output = []) {
  if (typeof value === "string" && /^https?:\/\//i.test(value) && /\.(?:vtt|srt)(?:\?|$)/i.test(value)) {
    output.push(value);
  } else if (Array.isArray(value)) {
    for (const child of value) subtitleCandidates(child, output);
  } else if (typeof value === "object" && value !== null) {
    for (const child of Object.values(value)) subtitleCandidates(child, output);
  }
  return output;
}
function subtitleUrl(media) {
  var _a, _b, _c;
  const direct = (_c = (_b = (_a = media.files.find((file) => {
    var _a2;
    return (_a2 = file.subtitles) == null ? void 0 : _a2.url;
  })) == null ? void 0 : _a.subtitles) == null ? void 0 : _b.url) != null ? _c : null;
  if (direct) return direct;
  return subtitleCandidates(media)[0] ?? null;
}
function imageCandidates(value, output = []) {
  if (typeof value === "string" && /^https?:\/\//i.test(value) && /\.(?:jpe?g|png|webp)(?:\?|$)/i.test(value)) {
    output.push(value);
  } else if (Array.isArray(value)) {
    for (const child of value) imageCandidates(child, output);
  } else if (typeof value === "object" && value !== null) {
    for (const child of Object.values(value)) imageCandidates(child, output);
  }
  return output;
}
function thumbnailUrl(media) {
  var _a;
  const candidates = imageCandidates(media.images);
  if (candidates.length === 0) return null;
  const score = (url) => {
    const value = url.toLowerCase();
    let points = 0;
    if (/(?:^|[_\-/])wss(?:[_\-./]|$)/.test(value)) points += 120;
    if (/(?:wide|widescreen|16x9|landscape)/.test(value)) points += 100;
    if (/(?:^|[_\-/])sqr(?:[_\-./]|$)|square/.test(value)) points -= 120;
    if (/(?:_xl\.|_xl_|\/xl\/)/.test(value)) points += 30;
    else if (/(?:_lg\.|_lg_|\/lg\/)/.test(value)) points += 20;
    else if (/(?:_md\.|_md_|\/md\/)/.test(value)) points += 10;
    return points;
  };
  return (_a = candidates.map((url, index) => ({ url, index, score: score(url) })).sort((a, b) => b.score - a.score || b.index - a.index)[0]) == null ? void 0 : _a.url;
}
var SourceTranscriptService = class {
  constructor(app, settings, syncNote) {
    this.app = app;
    this.settings = settings;
    this.syncNote = syncNote;
    __publicField(this, "downloading", false);
    __publicField(this, "publicationOrderRunning", /* @__PURE__ */ new Set());
    __publicField(this, "publicationOrderDesired", /* @__PURE__ */ new Map());
  }
  async mergeFolder(sourcePath, targetPath) {
    const source = this.app.vault.getAbstractFileByPath(sourcePath);
    if (!(source instanceof import_obsidian3.TFolder) || sourcePath === targetPath) return;
    const target = this.app.vault.getAbstractFileByPath(targetPath);
    if (!target) {
      await ensureFolder(this.app, targetPath.slice(0, targetPath.lastIndexOf("/")));
      await this.app.vault.rename(source, targetPath);
      return;
    }
    if (!(target instanceof import_obsidian3.TFolder)) return;
    for (const child of [...source.children]) {
      const destination = `${targetPath}/${child.name}`;
      if (!this.app.vault.getAbstractFileByPath(destination)) {
        await this.app.vault.rename(child, destination);
      }
    }
    if (source.children.length === 0) await this.app.vault.delete(source);
  }
  async applySeriesMigrations() {
    const marriageTarget = "Discursos/Séries/Como ser feliz no casamento";
    const marriageSources = [
      "Discursos/Séries/Para ter um casamento feliz",
      "Discursos/Series/Para ter um casamento feliz"
    ];
    for (const sourcePath of marriageSources) {
      try {
        await this.mergeFolder(sourcePath, marriageTarget);
      } catch (e) {
        console.error("Indice Nights: falha ao renomear a pasta de casamento", sourcePath, e);
      }
    }
    const removedLessonsPaths = [
      "Discursos/Séries/O que aprendemos",
      "Discursos/Series/O que aprendemos"
    ];
    for (const removedPath of removedLessonsPaths) {
      const removedFolder = this.app.vault.getAbstractFileByPath(removedPath);
      if (removedFolder instanceof import_obsidian3.TFolder) {
        try {
          await this.app.vault.trash(removedFolder, false);
        } catch (e) {
          console.error("Indice Nights: falha ao mover a pasta removida para a lixeira", removedPath, e);
        }
      }
    }
    const introCategory = SUPPORTED_CATEGORIES.find((item) => item.key === "discover:series-bible-intros");
    if (!introCategory) return;
    const introConfig = this.settings.categorySettings[introCategory.key] ?? { folder: "" };
    const configuredFolder = cleanFolder(introConfig.folder ?? "");
    const normalizedIntroName = this.normalizeCategoryName("Introdução aos livros da Bíblia");
    const normalizedSeriesName = this.normalizeCategoryName("Séries");
    const discoveredIntroFolders = this.app.vault.getAllLoadedFiles()
      .filter((file) => file instanceof import_obsidian3.TFolder)
      .filter((folder) => {
        const parent = folder.parent;
        return this.normalizeCategoryName(folder.name) === normalizedIntroName
          && parent instanceof import_obsidian3.TFolder
          && this.normalizeCategoryName(parent.name) === normalizedSeriesName;
      })
      .map((folder) => folder.path);
    const introFolders = Array.from(new Set([
      ...discoveredIntroFolders,
      configuredFolder || introCategory.defaultFolder,
      introCategory.defaultFolder,
      "Discursos/Séries/Introdução aos Livros da Bíblia",
      "Discursos/Series/Introdução aos livros da Bíblia",
      "Discursos/Series/Introdução aos Livros da Bíblia"
    ].filter(Boolean)));
    for (const introFolder of introFolders) {
      try {
        const recovered = await this.recoverInterruptedBibleIntroFiles(introFolder);
        if (recovered > 0) await wait(350);
      } catch (e) {
        console.error("Indice Nights: falha ao recuperar introduções bíblicas ocultas", introFolder, e);
      }
    }
  }
  async downloadEnabled() {
    if (this.downloading) {
      new import_obsidian3.Notice("J\xE1 existe uma atualiza\xE7\xE3o de transcri\xE7\xF5es em andamento.");
      return;
    }
    try {
      await this.applySeriesMigrations();
    } catch (e) {
      console.error("Indice Nights: falha ao aplicar ajustes das séries", e);
    }
    const seriesCategories = SUPPORTED_CATEGORIES.filter((item) => item.group === "Séries");
    const anySeriesEnabled = seriesCategories.some((item) => {
      const config = this.settings.categorySettings[item.key];
      return config == null ? void 0 : config.enabled;
    });
    if (anySeriesEnabled) {
      for (const item of seriesCategories) {
        const current = this.settings.categorySettings[item.key] ?? { enabled: false, folder: "" };
        this.settings.categorySettings[item.key] = { ...current, enabled: true };
      }
    }
    const selected = SUPPORTED_CATEGORIES.filter((item) => {
      const config = this.settings.categorySettings[item.key];
      return config == null ? void 0 : config.enabled;
    });
    if (selected.length === 0) {
      new import_obsidian3.Notice("Ative pelo menos uma cole\xE7\xE3o de transcri\xE7\xF5es.");
      return;
    }
    this.downloading = true;
    const progress = new import_obsidian3.Notice("Verificando novas transcri\xE7\xF5es\u2026", 0);
    let created = 0;
    let skipped = 0;
    let withoutSubtitle = 0;
    let errors = 0;
    let updatedMiniIndexes = 0;
    try {
      const existing = this.existingNotes();
      for (const [categoryIndex, category] of selected.entries()) {
        progress.setMessage(`Verificando ${category.name} (${categoryIndex + 1}/${selected.length})\u2026`);
        const chosenFolder = cleanFolder(this.settings.categorySettings[category.key].folder);
        const folder = chosenFolder || category.defaultFolder;
        await ensureFolder(this.app, folder);
        let mediaItems;
        try {
          mediaItems = await this.allMedia(category);
        } catch (e) {
          console.error("Indice Nights: falha ao carregar categoria", category.name, category.key, e);
          errors += 1;
          continue;
        }
        if (mediaItems.length === 0) {
          console.warn("Indice Nights: categoria sem mídias retornadas", category.name, category.key);
          errors += 1;
          continue;
        }
        for (const [mediaIndex, media] of mediaItems.entries()) {
          const id = sourceId(media);
          progress.setMessage(`${category.name}: ${mediaIndex + 1}/${mediaItems.length} \u2014 ${media.title}`);
          const existingFile = existing.get(id);
          if (existingFile) {
            if (await this.syncNote(existingFile)) updatedMiniIndexes += 1;
            skipped += 1;
            continue;
          }
          let hydratedMedia = media;
          let url = subtitleUrl(hydratedMedia);
          if (!url) {
            try {
              hydratedMedia = await getMediaItem(media.naturalKey);
              url = subtitleUrl(hydratedMedia);
            } catch (e) {
              console.warn("Indice Nights: falha ao carregar detalhes da mídia", media.naturalKey, e);
            }
          }
          if (!url) {
            withoutSubtitle += 1;
            continue;
          }
          try {
            const vtt = (await (0, import_obsidian3.requestUrl)({ url, method: "GET" })).text;
            const thumbnailPath = await this.downloadThumbnail(hydratedMedia);
            const note = criarNotaTranscricao(hydratedMedia, vtt, thumbnailPath != null ? thumbnailPath : void 0);
            const basename = category.key === "discover:series-bible-intros"
              ? this.bibleIntroBasename(hydratedMedia)
              : nomeArquivoSeguro(hydratedMedia.title);
            const filePath = await this.availablePath(folder, basename);
            const file = await this.app.vault.create(filePath, note);
            existing.set(sourceId(hydratedMedia), file);
            created += 1;
          } catch (e) {
            console.error("Indice Nights: erro ao baixar transcrição", category.name, media.title, e);
            errors += 1;
          }
          await wait(180);
        }
      }
    } finally {
      try {
        await this.applySeriesMigrations();
        await this.applySavedPublicationOrder();
      } catch (e) {
        console.error("Indice Nights: falha ao finalizar a organização das transcrições", e);
      }
      progress.hide();
      this.downloading = false;
    }

    const details = [
      `${created} nova(s)`,
      `${skipped} j\xE1 existente(s)`,
      `${updatedMiniIndexes} mini-\xEDndice(s) atualizado(s)`,
      `${withoutSubtitle} sem transcri\xE7\xE3o`,
      `${errors} erro(s)`
    ].join("; ");
    new import_obsidian3.Notice(`Atualiza\xE7\xE3o conclu\xEDda: ${details}.`, 12e3);
  }
  async updateMissingThumbnails() {
    if (this.downloading) {
      new import_obsidian3.Notice("Aguarde a atualiza\xE7\xE3o em andamento terminar.");
      return;
    }
    const selected = SUPPORTED_CATEGORIES.filter((item) => {
      var _a;
      return (_a = this.settings.categorySettings[item.key]) == null ? void 0 : _a.enabled;
    });
    if (selected.length === 0) {
      new import_obsidian3.Notice("Ative pelo menos uma cole\xE7\xE3o antes de procurar miniaturas.");
      return;
    }
    this.downloading = true;
    const progress = new import_obsidian3.Notice("Atualizando miniaturas\u2026", 0);
    let updated = 0;
    try {
      const existing = this.existingNotes();
      for (const category of selected) {
        for (const media of await this.allMedia(category)) {
          const file = existing.get(sourceId(media));
          if (!file) continue;
          let hydratedMedia = media;
          if (!thumbnailUrl(hydratedMedia)) {
            try {
              hydratedMedia = await getMediaItem(media.naturalKey);
            } catch (e) {
              console.warn("Indice Nights: falha ao carregar detalhes para miniatura", media.naturalKey, e);
            }
          }
          const content = await this.app.vault.read(file);
          const hasThumbnail = /!\[Miniatura\]\(Anexos\/Índice(?:%20| )Nights\/Miniaturas\//.test(content);
          const thumbnailPath = await this.downloadThumbnail(hydratedMedia, true);
          if (!thumbnailPath) continue;
          if (!hasThumbnail) {
            const image = `[![Miniatura](${encodeURI(thumbnailPath)})](${`https://www.jw.org/finder?wtlocale=T&lank=${encodeURIComponent(media.naturalKey)}`})`;
            const next = content.replace(/^(# .+)$/m, `$1\n\n${image}`);
            if (next !== content) await this.app.vault.modify(file, next);
          }
          updated += 1;
          await wait(120);
        }
      }
    } finally {
      this.downloading = false;
      progress.hide();
    }
    new import_obsidian3.Notice(`${updated} miniatura(s) atualizada(s).`, 8e3);
  }
  async ensureGeneralIndex(showNotice = false, openAfter = false) {
    const folder = GENERAL_INDEX_FOLDER;
    const path = `${folder}/${GENERAL_INDEX_FILENAME}`;
    await this.migrateGeneralIndex();
    await ensureFolder(this.app, folder);

    const desiredContent = [
      "```indice-biblico",
      "pasta: Discursos",
      "propriedade: textos",
      "quantidade: 150",
      "```",
      ""
    ].join("\n");

    const existing = this.app.vault.getAbstractFileByPath(path);

    if (!existing) {
      await this.app.vault.create(path, desiredContent);
      if (showNotice) new import_obsidian3.Notice("Índice geral criado e pronto para uso.");
    } else if (existing instanceof import_obsidian3.TFile) {
      const current = await this.app.vault.read(existing);
      const isStandardIndex = /```indice-biblico[\s\S]*?pasta:\s*Discursos[\s\S]*?```/iu.test(current);

      if (isStandardIndex && current !== desiredContent) {
        await this.app.vault.modify(existing, desiredContent);
      }

      if (showNotice) new import_obsidian3.Notice("O índice geral já existe.");
    }

    if (openAfter) await this.app.workspace.openLinkText(path, "", false);
  }
  async migrateGeneralIndex() {
    const oldFolder = this.app.vault.getAbstractFileByPath(LEGACY_GENERAL_INDEX_FOLDER);
    const newFolder = this.app.vault.getAbstractFileByPath(GENERAL_INDEX_FOLDER);
    if (oldFolder instanceof import_obsidian3.TFolder && !newFolder) {
      await this.app.vault.rename(oldFolder, GENERAL_INDEX_FOLDER);
      return;
    }
    const oldPath = `${LEGACY_GENERAL_INDEX_FOLDER}/${GENERAL_INDEX_FILENAME}`;
    const newPath = `${GENERAL_INDEX_FOLDER}/${GENERAL_INDEX_FILENAME}`;
    const oldFile = this.app.vault.getAbstractFileByPath(oldPath);
    const newFile = this.app.vault.getAbstractFileByPath(newPath);
    if (oldFile instanceof import_obsidian3.TFile && !newFile) {
      await ensureFolder(this.app, GENERAL_INDEX_FOLDER);
      await this.app.vault.rename(oldFile, newPath);
    }
  }
  normalizeCategoryName(value) {
    return normalizeText(value).replace(/[^a-z0-9]+/g, " ").trim();
  }
  async resolveCategoryKey(category) {
    var _a;
    if (category.sourceKey) return category.sourceKey;
    if (!category.key.startsWith("discover:")) return category.key;
    if (!category.parentKey || !((_a = category.discoverNames) == null ? void 0 : _a.length)) throw new Error(`Categoria dinâmica sem origem configurada: ${category.name}`);
    const wanted = category.discoverNames.map((name) => this.normalizeCategoryName(name));
    const visited = /* @__PURE__ */ new Set();
    const searchTree = async (categoryKey, depth = 0) => {
      if (!categoryKey || visited.has(categoryKey) || depth > 5) return null;
      visited.add(categoryKey);
      const response = await getCategory(categoryKey, 0, 0);
      const children = response.category?.subcategories ?? [];
      const exact = children.find((child) => wanted.includes(this.normalizeCategoryName(child.name ?? "")));
      if (exact?.key) return exact.key;
      const partial = children.find((child) => {
        const name = this.normalizeCategoryName(child.name ?? "");
        return name && wanted.some((candidate) => name.includes(candidate) || candidate.includes(name));
      });
      if (partial?.key) return partial.key;
      for (const child of children) {
        const childKey = typeof child === "string" ? child : child?.key ?? child?.categoryKey;
        const found = await searchTree(childKey, depth + 1);
        if (found) return found;
      }
      return null;
    };
    const found = await searchTree(category.parentKey);
    if (found) return found;
    throw new Error(`Não encontrei “${category.name}” dentro da árvore de ${category.parentKey}.`);
  }
  async collectCategoryMedia(categoryKey, mediaById, visitedCategories) {
    var _a, _b, _c, _d;
    if (visitedCategories.has(categoryKey)) return;
    visitedCategories.add(categoryKey);

    const limit = 50;
    let offset = 0;
    let total = 1;
    let children = [];

    while (offset < total) {
      const response = await getCategory(categoryKey, limit, offset);
      const currentCategory = response.category ?? {};
      const items = (_a = currentCategory.media) != null ? _a : [];

      for (const item of items) {
        const id = sourceId(item);
        if (!mediaById.has(id)) mediaById.set(id, item);
      }

      if (offset === 0) {
        children = Array.isArray(currentCategory.subcategories) ? currentCategory.subcategories : [];
      }

      total = (_c = (_b = response.pagination) == null ? void 0 : _b.totalCount) != null ? _c : items.length;
      offset += limit;
      if (offset < total) await wait(160);
    }

    for (const child of children) {
      const childKey = typeof child === "string"
        ? child
        : (_d = child == null ? void 0 : child.key) != null
          ? _d
          : child == null ? void 0 : child.categoryKey;
      if (!childKey) continue;
      await this.collectCategoryMedia(childKey, mediaById, visitedCategories);
      await wait(100);
    }
  }
  async allMediaLegacyDirect(categoryKey) {
    const media = [];
    const seen = new Set();
    const limit = 50;
    let offset = 0;
    let total = 1;

    while (offset < total) {
      const response = await getCategoryLegacy(categoryKey, limit, offset);
      const items = response.category?.media ?? [];

      for (const item of items) {
        const id = sourceId(item);
        if (!seen.has(id)) {
          seen.add(id);
          media.push(item);
        }
      }

      total = response.pagination?.totalCount ?? items.length;
      offset += limit;
      if (offset < total) await wait(180);
    }

    console.info("Indice Nights: carregamento legado direto", categoryKey, `${media.length} mídia(s)`);
    return media;
  }

  async allMedia(category) {
    // Adorações Matinais usava esta chave fixa e funcionava antes das mudanças
    // de descoberta/consulta detalhada. Mantemos o fluxo antigo exclusivamente aqui.
    if (category.key === "VODPgmEvtMorningWorship") {
      return this.allMediaLegacyDirect("VODPgmEvtMorningWorship");
    }

    const categoryKey = await this.resolveCategoryKey(category);
    const mediaById = /* @__PURE__ */ new Map();
    const visitedCategories = /* @__PURE__ */ new Set();
    await this.collectCategoryMedia(categoryKey, mediaById, visitedCategories);
    console.info(
      "Indice Nights: categoria carregada",
      category.name,
      `${mediaById.size} mídia(s)`,
      `${visitedCategories.size} categoria(s)/subcategoria(s)`
    );
    return Array.from(mediaById.values());
  }
  bibleIntroRank(title, naturalKey = "") {
    const keyMatch = /^pub-nwtsv_T_(\d+)_VIDEO$/i.exec(naturalKey);
    if (keyMatch) {
      const value = Number(keyMatch[1]);
      if (value === 1) return 0;
      if (value >= 10 && value <= 660 && value % 10 === 0) return value / 10;
    }
    const normalizedBooks = names.map(([canonical, aliases]) => [canonical, ...aliases].map((name) => this.normalizeCategoryName(name)));
    const clean = this.normalizeCategoryName(title
      .replace(/^\d+\s*-\s*/, "")
      .replace(/^\d{2}-\d{2}-\d{4}\s*-\s*/, "")
      .replace(/^\d{4}-\d{2}-\d{2}\s*-\s*/, "")
      .trim());
    const subject = clean
      .replace(/^introducao\s+(?:a|ao)\s+(?:o\s+|a\s+)?(?:livro\s+de\s+)?/, "")
      .trim();
    if (subject === "biblia") return 0;
    for (let i = 0; i < normalizedBooks.length; i += 1) {
      if (normalizedBooks[i].includes(subject)) return i + 1;
    }
    return 999;
  }
  bibleIntroBasename(media) {
    const title = nomeArquivoSeguro(media.title);
    const rank = this.bibleIntroRank(media.title, media.naturalKey ?? "");
    return rank < 999 ? `${String(rank).padStart(2, "0")} - ${title}` : title;
  }
  async recoverInterruptedBibleIntroFiles(folderPath) {
    const adapter = this.app.vault.adapter;
    let listing;
    try {
      listing = await adapter.list(folderPath);
    } catch (e) {
      return 0;
    }
    const temporaryFiles = listing.files.filter((path) => {
      const filename = path.slice(path.lastIndexOf("/") + 1);
      return /^\.__indice_nights_bible_\d+_\d+\.md$/i.test(filename);
    });
    let recovered = 0;
    for (const temporaryPath of temporaryFiles) {
      try {
        const content = await adapter.read(temporaryPath);
        const titleMatch = /^#\s+(.+?)\s*$/m.exec(content);
        const title = titleMatch?.[1]?.trim() || "Transcrição bíblica recuperada";
        const basename = this.bibleIntroBasename({ title, naturalKey: "" });
        let counter = 1;
        let targetPath = `${folderPath}/${basename}.md`;
        while (await adapter.exists(targetPath)) {
          counter += 1;
          targetPath = `${folderPath}/${basename} (${counter}).md`;
        }
        await adapter.rename(temporaryPath, targetPath);
        recovered += 1;
      } catch (e) {
        console.error("Indice Nights: não foi possível recuperar arquivo temporário", temporaryPath, e);
      }
    }
    return recovered;
  }
  stripPublicationPrefix(name) {
    const original = String(name ?? "").trim();

    // Remove SOMENTE quando o nome começa exatamente com um prefixo
    // criado pelo recurso de ordenação:
    //
    // 0099 - 25-10-2024 - Título
    // 0099 - 2024-10-25 - Título
    //
    // Se o arquivo já estiver com o nome original, como:
    // "Adoração Matinal para a Celebração — ..."
    // ele permanece totalmente intacto.
    const orderedPrefix = /^\s*\d{1,6}\s*[-–—]\s*(?:\d{2}[-/.]\d{2}[-/.]\d{4}|\d{4}[-/.]\d{2}[-/.]\d{2})\s*[-–—]\s*/;

    if (!orderedPrefix.test(original)) {
      return original;
    }

    return original.replace(orderedPrefix, "").trim();
  }

  async publicationCleanBase(file) {
    const basename = file.basename;
    const tempPrefix = /^\.__(?:indice_nights_sort|indice_nights_restore|indice_nights_repair)_/;

    if (!tempPrefix.test(basename)) {
      return this.stripPublicationPrefix(basename);
    }

    // Se o Obsidian/plugin foi fechado no meio da operação, o arquivo pode ter
    // ficado com nome temporário. Recuperamos o nome pelo H1 da própria nota.
    try {
      const content = await this.app.vault.cachedRead(file);
      const titleMatch = /^#\s+(.+?)\s*$/m.exec(content);
      const title = titleMatch?.[1]?.trim();

      if (title) {
        return nomeArquivoSeguro(title);
      }
    } catch (error) {
      console.warn("Indice Nights: falha ao recuperar nome de arquivo temporário", file.path, error);
    }

    return basename;
  }

  async restoreOriginalPublicationNames(folderPath, showNotice = true) {
    const folder = this.app.vault.getAbstractFileByPath(folderPath);

    if (!(folder instanceof import_obsidian3.TFolder)) {
      if (showNotice) new import_obsidian3.Notice(`A pasta ${folderPath} ainda não existe.`);
      return;
    }

    const orderedPrefix = /^\s*\d{1,6}\s*[-–—]\s*(?:\d{2}[-/.]\d{2}[-/.]\d{4}|\d{4}[-/.]\d{2}[-/.]\d{2})\s*[-–—]\s*/;
    const tempPrefix = /^\.__(?:indice_nights_sort|indice_nights_restore)_/;
    const candidates = [];

    // Sempre avalia TODA a pasta. Arquivos já normais são ignorados.
    for (const child of [...folder.children]) {
      if (!(child instanceof import_obsidian3.TFile) || child.extension !== "md") continue;

      const isOrdered = orderedPrefix.test(child.basename);
      const isInterruptedTemp = tempPrefix.test(child.basename);

      if (!isOrdered && !isInterruptedTemp) continue;

      const cleanBase = await this.publicationCleanBase(child);
      if (!cleanBase || cleanBase === child.basename) continue;

      candidates.push({
        file: child,
        originalBase: child.basename,
        cleanBase
      });
    }

    if (candidates.length === 0) {
      if (showNotice) {
        new import_obsidian3.Notice("Todos os arquivos já estão com os nomes originais.", 5000);
      }
      return;
    }

    const token = Date.now();
    const staged = [];

    // Etapa 1 — staging seguro. Caso haja interrupção, a próxima execução
    // reconhece esses temporários e os inclui novamente na avaliação.
    for (let index = 0; index < candidates.length; index += 1) {
      const item = candidates[index];
      const tempPath = `${folderPath}/.__indice_nights_restore_${token}_${index}.md`;

      try {
        // Se já for um temporário de execução interrompida, pode ir diretamente
        // para o novo staging sem perder a referência ao arquivo.
        await this.app.vault.rename(item.file, tempPath);
        staged.push({ ...item, file: this.app.vault.getAbstractFileByPath(tempPath) });
      } catch (error) {
        console.error("Indice Nights: falha ao preparar restauração do nome", item.originalBase, error);
      }
    }

    let restored = 0;
    let conflicts = 0;

    // Etapa 2 — nome original.
    for (const item of staged) {
      if (!(item.file instanceof import_obsidian3.TFile)) continue;

      const targetBase = item.cleanBase;
      let targetPath = `${folderPath}/${targetBase}.md`;

      if (this.app.vault.getAbstractFileByPath(targetPath)) {
        conflicts += 1;
        let counter = 2;
        while (this.app.vault.getAbstractFileByPath(`${folderPath}/${targetBase} (${counter}).md`)) {
          counter += 1;
        }
        targetPath = `${folderPath}/${targetBase} (${counter}).md`;
      }

      try {
        await this.app.vault.rename(item.file, targetPath);
        restored += 1;
      } catch (error) {
        console.error("Indice Nights: falha ao restaurar nome original", item.originalBase, error);
      }
    }

    if (showNotice) {
      const extra = conflicts
        ? ` ${conflicts} conflito(s) de nome foram preservados com sufixo adicional.`
        : "";
      new import_obsidian3.Notice(
        `${restored} arquivo(s) restaurado(s). A pasta inteira foi revisada.${extra}`,
        7000
      );
    }
  }
  async reviewPublicationNames(categoryKey, showNotice = true) {
    const category = SUPPORTED_CATEGORIES.find((item) => item.key === categoryKey);
    if (!category || !["StudioTalks", "VODPgmEvtMorningWorship"].includes(categoryKey)) return;

    const config = this.settings.categorySettings[categoryKey];
    const chosenFolder = cleanFolder((config == null ? void 0 : config.folder) ?? "");
    const folderPath = chosenFolder || category.defaultFolder;

    const orderedPrefix = /^\s*\d{1,6}\s*[-–—]\s*(?:\d{2}[-/.]\d{2}[-/.]\d{4}|\d{4}[-/.]\d{2}[-/.]\d{2})\s*[-–—]\s*/;
    const tempPrefix = /^\.__(?:indice_nights_sort|indice_nights_restore|indice_nights_repair)_/;

    let totalReviewed = 0;
    let passes = 0;

    // Faz até 5 passadas porque o Obsidian pode atualizar a árvore de arquivos
    // de forma assíncrona durante muitos renames. Cada passada reconsulta a pasta.
    while (passes < 5) {
      passes += 1;

      const folder = this.app.vault.getAbstractFileByPath(folderPath);
      if (!(folder instanceof import_obsidian3.TFolder)) {
        if (showNotice) new import_obsidian3.Notice(`A pasta ${folderPath} ainda não existe.`);
        return;
      }

      const affected = folder.children.filter(
        (child) =>
          child instanceof import_obsidian3.TFile &&
          child.extension === "md" &&
          (orderedPrefix.test(child.basename) || tempPrefix.test(child.basename))
      );

      if (affected.length === 0) break;

      totalReviewed += affected.length;

      await this.restoreOriginalPublicationNames(folderPath, false);
      await wait(180);
    }

    const finalFolder = this.app.vault.getAbstractFileByPath(folderPath);
    const leftovers = finalFolder instanceof import_obsidian3.TFolder
      ? finalFolder.children.filter(
          (child) =>
            child instanceof import_obsidian3.TFile &&
            child.extension === "md" &&
            (orderedPrefix.test(child.basename) || tempPrefix.test(child.basename))
        )
      : [];

    if (showNotice) {
      if (leftovers.length === 0) {
        new import_obsidian3.Notice(
          `Revisão concluída. A pasta foi limpa e está pronta para ordem alfabética.`,
          7000
        );
      } else {
        new import_obsidian3.Notice(
          `Revisão concluída, mas ${leftovers.length} arquivo(s) ainda precisam de atenção.`,
          9000
        );
        console.warn(
          "Indice Nights: arquivos ainda com prefixo após revisão",
          leftovers.map((file) => file.path)
        );
      }
    }
  }

  formatPublicationDateBR(date) {
    if (typeof date !== "string") return date;
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return match ? `${match[3]}-${match[2]}-${match[1]}` : date;
  }
  async setPublicationOrder(categoryKey, enabled, showNotice = true) {
    const category = SUPPORTED_CATEGORIES.find((item) => item.key === categoryKey);
    if (!category || !["StudioTalks", "VODPgmEvtMorningWorship"].includes(categoryKey)) return;

    // Cada clique apenas registra o estado MAIS RECENTE desejado.
    // Se já houver uma operação rodando, não inicia outra em paralelo.
    const request = { enabled, showNotice };
    this.publicationOrderDesired.set(categoryKey, request);

    if (this.publicationOrderRunning.has(categoryKey)) {
      if (showNotice) {
        new import_obsidian3.Notice(
          "A ordenação já está sendo processada. Vou concluir a etapa atual e aplicar automaticamente a última opção escolhida.",
          5000
        );
      }
      return;
    }

    this.publicationOrderRunning.add(categoryKey);

    try {
      while (true) {
        const currentRequest = this.publicationOrderDesired.get(categoryKey);
        if (!currentRequest) break;

        await this.performPublicationOrder(
          categoryKey,
          currentRequest.enabled,
          currentRequest.showNotice
        );

        // Se ninguém mudou o botão enquanto trabalhávamos, terminamos.
        if (this.publicationOrderDesired.get(categoryKey) === currentRequest) {
          this.publicationOrderDesired.delete(categoryKey);
          break;
        }

        // Caso o usuário tenha ativado/desativado novamente, o loop recomeça
        // avaliando toda a pasta no novo estado desejado.
      }
    } finally {
      this.publicationOrderRunning.delete(categoryKey);
    }
  }

  async performPublicationOrder(categoryKey, enabled, showNotice = true) {
    const category = SUPPORTED_CATEGORIES.find((item) => item.key === categoryKey);
    if (!category) return;

    const config = this.settings.categorySettings[categoryKey];
    const chosenFolder = cleanFolder((config == null ? void 0 : config.folder) ?? "");
    const folderPath = chosenFolder || category.defaultFolder;
    const folder = this.app.vault.getAbstractFileByPath(folderPath);

    if (!(folder instanceof import_obsidian3.TFolder)) {
      if (showNotice) new import_obsidian3.Notice(`A pasta ${folderPath} ainda não existe.`);
      return;
    }

    // Desativado: restaura apenas quem realmente possui prefixo/temporário.
    if (!enabled) {
      await this.restoreOriginalPublicationNames(folderPath, showNotice);
      return;
    }

    const beforeFiles = folder.children.filter(
      (child) => child instanceof import_obsidian3.TFile && child.extension === "md"
    );
    const beforeCount = beforeFiles.length;

    const rows = [];
    let withoutDate = 0;

    // 1) VARRER TODA A PASTA antes de alterar qualquer nome.
    for (const child of beforeFiles) {
      const cache = this.app.metadataCache.getFileCache(child);
      const frontmatter = cache == null ? void 0 : cache.frontmatter;
      const dateValue = frontmatter == null ? void 0 : frontmatter.data_publicacao;
      const date = typeof dateValue === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateValue.trim())
        ? dateValue.trim()
        : null;

      const cleanBase = await this.publicationCleanBase(child);

      if (!date) withoutDate += 1;

      rows.push({
        file: child,
        currentBase: child.basename,
        cleanBase,
        date,
        desiredBase: null,
        desiredPath: null
      });
    }

    // 2) Calcular a ordem completa sem renomear nada.
    const dated = rows.filter((row) => row.date);
    dated.sort((a, b) => {
      return b.date.localeCompare(a.date) ||
        a.cleanBase.localeCompare(b.cleanBase, "pt-BR");
    });

    let rank = 1;
    for (const row of dated) {
      const rankPrefix = String(rank).padStart(4, "0");
      row.desiredBase = `${rankPrefix} - ${this.formatPublicationDateBR(row.date)} - ${row.cleanBase}`;
      row.desiredPath = `${folderPath}/${row.desiredBase}.md`;
      rank += 1;
    }

    // 3) Só mexer em quem REALMENTE está diferente do nome desejado.
    let pending = dated.filter((row) => row.currentBase !== row.desiredBase);

    if (pending.length === 0) {
      if (showNotice) {
        new import_obsidian3.Notice(
          `${dated.length} arquivo(s) conferidos. A ordenação já está correta.`,
          5000
        );
      }
      return;
    }

    const progress = showNotice
      ? new import_obsidian3.Notice(
          `Reordenando ${pending.length} de ${beforeCount} arquivo(s)…`,
          0
        )
      : null;

    try {
      // 4) STAGING APENAS DOS ARQUIVOS QUE PRECISAM MUDAR.
      // Isso reduz muito as operações em acervos grandes.
      const token = Date.now();
      const staged = [];

      for (let index = 0; index < pending.length; index += 1) {
        const row = pending[index];
        const currentFile = this.app.vault.getAbstractFileByPath(row.file.path);

        if (!(currentFile instanceof import_obsidian3.TFile)) {
          console.warn("Indice Nights: arquivo desapareceu antes do staging", row.file.path);
          continue;
        }

        const tempPath = `${folderPath}/.__indice_nights_sort_${token}_${index}.md`;

        try {
          await this.app.vault.rename(currentFile, tempPath);
          const tempFile = this.app.vault.getAbstractFileByPath(tempPath);
          if (tempFile instanceof import_obsidian3.TFile) {
            staged.push({ ...row, file: tempFile, tempPath });
          }
        } catch (error) {
          console.error("Indice Nights: falha no staging da ordenação", row.file.path, error);
        }

        if (progress) {
          progress.setMessage(
            `Preparando reordenação: ${index + 1}/${pending.length}…`
          );
        }
      }

      // 5) Aplicar os nomes finais calculados.
      let renamed = 0;

      for (let index = 0; index < staged.length; index += 1) {
        const row = staged[index];
        let targetPath = row.desiredPath;

        // Se o destino já existir, verificamos se é justamente um arquivo que
        // ficou fora do staging. Não sobrescrevemos nada.
        const existing = this.app.vault.getAbstractFileByPath(targetPath);
        if (existing && existing.path !== row.file.path) {
          let counter = 2;
          while (
            this.app.vault.getAbstractFileByPath(
              `${folderPath}/${row.desiredBase} (${counter}).md`
            )
          ) {
            counter += 1;
          }
          targetPath = `${folderPath}/${row.desiredBase} (${counter}).md`;
        }

        try {
          await this.app.vault.rename(row.file, targetPath);
          renamed += 1;
        } catch (error) {
          console.error("Indice Nights: falha ao aplicar nome final", row.tempPath, error);
        }

        if (progress) {
          progress.setMessage(
            `Aplicando ordem: ${index + 1}/${staged.length}…`
          );
        }
      }

      // 6) VALIDAÇÃO DE INTEGRIDADE.
      const refreshedFolder = this.app.vault.getAbstractFileByPath(folderPath);
      const afterFiles = refreshedFolder instanceof import_obsidian3.TFolder
        ? refreshedFolder.children.filter(
            (child) => child instanceof import_obsidian3.TFile && child.extension === "md"
          )
        : [];
      const afterCount = afterFiles.length;

      if (afterCount !== beforeCount) {
        console.error(
          "Indice Nights: divergência de integridade após reordenação",
          { beforeCount, afterCount, folderPath }
        );
        if (showNotice) {
          new import_obsidian3.Notice(
            `Atenção: havia ${beforeCount} arquivos antes e ${afterCount} depois. A operação foi interrompida para revisão.`,
            12000
          );
        }
        return;
      }

      // 7) SEGUNDA PASSADA DE AUTORREPARO.
      // Reavalia toda a lista. Se algum arquivo não ficou com o nome esperado,
      // corrige somente os remanescentes.
      const currentFolder = this.app.vault.getAbstractFileByPath(folderPath);
      const currentFiles = currentFolder instanceof import_obsidian3.TFolder
        ? currentFolder.children.filter(
            (child) => child instanceof import_obsidian3.TFile && child.extension === "md"
          )
        : [];

      const byCleanAndDate = new Map();

      for (const child of currentFiles) {
        const cache = this.app.metadataCache.getFileCache(child);
        const frontmatter = cache == null ? void 0 : cache.frontmatter;
        const dateValue = frontmatter == null ? void 0 : frontmatter.data_publicacao;
        const date = typeof dateValue === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateValue.trim())
          ? dateValue.trim()
          : null;
        if (!date) continue;

        const cleanBase = await this.publicationCleanBase(child);
        const key = `${date}|||${cleanBase}`;
        byCleanAndDate.set(key, child);
      }

      const repairs = [];

      for (const row of dated) {
        const key = `${row.date}|||${row.cleanBase}`;
        const currentFile = byCleanAndDate.get(key);
        if (!currentFile) continue;

        if (currentFile.basename !== row.desiredBase) {
          repairs.push({ file: currentFile, desiredBase: row.desiredBase });
        }
      }

      if (repairs.length) {
        const repairToken = Date.now();
        const repairStaged = [];

        for (let index = 0; index < repairs.length; index += 1) {
          const item = repairs[index];
          const tempPath = `${folderPath}/.__indice_nights_repair_${repairToken}_${index}.md`;

          try {
            await this.app.vault.rename(item.file, tempPath);
            const tempFile = this.app.vault.getAbstractFileByPath(tempPath);
            if (tempFile instanceof import_obsidian3.TFile) {
              repairStaged.push({ ...item, file: tempFile });
            }
          } catch (error) {
            console.error("Indice Nights: falha no staging de autorreparo", item.file.path, error);
          }
        }

        for (const item of repairStaged) {
          const targetPath = `${folderPath}/${item.desiredBase}.md`;
          if (this.app.vault.getAbstractFileByPath(targetPath)) continue;

          try {
            await this.app.vault.rename(item.file, targetPath);
          } catch (error) {
            console.error("Indice Nights: falha no autorreparo", item.file.path, error);
          }
        }
      }

      // 8) Validação final: nenhum temporário deve sobrar.
      const finalFolder = this.app.vault.getAbstractFileByPath(folderPath);
      const temporaryLeft = finalFolder instanceof import_obsidian3.TFolder
        ? finalFolder.children.filter(
            (child) =>
              child instanceof import_obsidian3.TFile &&
              child.extension === "md" &&
              /^\.__(?:indice_nights_sort|indice_nights_restore|indice_nights_repair)_/.test(child.basename)
          )
        : [];

      if (temporaryLeft.length > 0) {
        console.warn(
          "Indice Nights: arquivos temporários restantes após operação",
          temporaryLeft.map((file) => file.path)
        );
      }

      if (showNotice) {
        const repairedText = repairs.length
          ? ` ${repairs.length} arquivo(s) precisaram de autorreparo.`
          : "";
        const noDateText = withoutDate
          ? ` ${withoutDate} nota(s) sem data foram preservadas sem numeração.`
          : "";

        new import_obsidian3.Notice(
          `${renamed} arquivo(s) precisaram ser renomeados de ${beforeCount} analisados.${repairedText}${noDateText}`,
          9000
        );
      }
    } finally {
      if (progress) progress.hide();
    }
  }
  async applySavedPublicationOrder() {
    const order = this.settings.publicationOrder ?? {};
    for (const key of ["StudioTalks", "VODPgmEvtMorningWorship"]) {
      if (order[key]) await this.setPublicationOrder(key, true, false);
    }
  }
  existingNotes() {
    var _a, _b;
    const notes = /* @__PURE__ */ new Map();
    for (const file of this.app.vault.getMarkdownFiles()) {
      const rawFrontmatter = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
      if (typeof rawFrontmatter !== "object" || rawFrontmatter === null) continue;
      const frontmatter = rawFrontmatter;
      const value = (_b = frontmatter.id_origem) != null ? _b : frontmatter.id_jw;
      if (typeof value === "string" && value.trim()) notes.set(value.trim(), file);
    }
    return notes;
  }
  async availablePath(folder, basename) {
    let counter = 1;
    let path = `${folder}/${basename}.md`;
    while (this.app.vault.getAbstractFileByPath(path)) {
      counter += 1;
      path = `${folder}/${basename} (${counter}).md`;
    }
    return path;
  }
  async migrateThumbnailFolder() {
    const targetFolder = this.app.vault.getAbstractFileByPath(THUMBNAIL_FOLDER);
    if (targetFolder) return;

    const candidates = [PREVIOUS_THUMBNAIL_FOLDER, LEGACY_THUMBNAIL_FOLDER];
    for (const sourcePath of candidates) {
      const sourceFolder = this.app.vault.getAbstractFileByPath(sourcePath);
      if (!(sourceFolder instanceof import_obsidian3.TFolder)) continue;
      await ensureFolder(this.app, "Discursos/ZZZ - Anexos/Indice Nights");
      try {
        await this.app.vault.rename(sourceFolder, THUMBNAIL_FOLDER);
        return;
      } catch (e) {
        console.warn("Indice Nights: não foi possível mover a pasta antiga de miniaturas", sourcePath, e);
      }
    }
  }
  async downloadThumbnail(media, replaceExisting = false) {
    var _a, _b, _c;
    const url = thumbnailUrl(media);
    if (!url) return null;
    await this.migrateThumbnailFolder();
    await ensureFolder(this.app, THUMBNAIL_FOLDER);
    const extension = (_c = (_b = (_a = /\.(png|webp)(?:\?|$)/i.exec(url)) == null ? void 0 : _a[1]) == null ? void 0 : _b.toLocaleLowerCase("pt-BR")) != null ? _c : "jpg";
    const path = `${THUMBNAIL_FOLDER}/${nomeArquivoSeguro(sourceId(media))}.${extension}`;
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian3.TFile && !replaceExisting) return path;
    try {
      const response = await (0, import_obsidian3.requestUrl)({ url, method: "GET" });
      if (existing instanceof import_obsidian3.TFile) await this.app.vault.modifyBinary(existing, response.arrayBuffer);
      else await this.app.vault.createBinary(path, response.arrayBuffer);
      return path;
    } catch (e) {
      return null;
    }
  }
};

// src/note-sync.ts
function sameValues(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}
function propertyValues(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var NoteSyncService = class {
  constructor(app) {
    this.app = app;
    __publicField(this, "timers", /* @__PURE__ */ new Map());
    __publicField(this, "busy", /* @__PURE__ */ new Set());
  }
  schedule(file) {
    if (!this.isManagedFile(file)) return;
    const previous = this.timers.get(file.path);
    if (previous != null) window.clearTimeout(previous);
    const timer = window.setTimeout(() => {
      this.timers.delete(file.path);
      void this.syncFile(file);
    }, 3500);
    this.timers.set(file.path, timer);
  }
  async syncFile(file) {
    var _a;
    if (this.busy.has(file.path)) return false;
    this.busy.add(file.path);
    let changed = false;
    try {
      const original = await this.app.vault.read(file);
      const rawFrontmatterForType = this.app.metadataCache.getFileCache(file)?.frontmatter;
      const isBook = isRecord(rawFrontmatterForType) && rawFrontmatterForType.indice_nights_tipo === "livro";
      const synchronized = isBook
        ? prepareBookStudyContent(original)
        : synchronizeMiniIndex(original);
      if (synchronized.content !== original) {
        await this.app.vault.modify(file, synchronized.content);
        changed = true;
      }
      const rawFrontmatter = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
      const frontmatter = isRecord(rawFrontmatter) ? rawFrontmatter : {};
      const expectedTexts = synchronized.references.map((reference) => reference.display);
      const currentTexts = propertyValues(frontmatter.textos);
      const hasTexts = Object.hasOwn(frontmatter, "textos");
      const hasRemovedProperties = Object.hasOwn(frontmatter, "categoria") || Object.hasOwn(frontmatter, "subcategoria") || Object.hasOwn(frontmatter, "id_jw");
      const needsTexts = expectedTexts.length > 0 || hasTexts;
      if (hasRemovedProperties || needsTexts && !sameValues(currentTexts, expectedTexts)) {
        await this.app.fileManager.processFrontMatter(file, (properties) => {
          delete properties.categoria;
          delete properties.subcategoria;
          if (typeof properties.id_jw === "string" && !properties.id_origem) {
            properties.id_origem = properties.id_jw;
          }
          delete properties.id_jw;
          if (needsTexts) properties.textos = expectedTexts;
        });
        changed = true;
      }
      return changed;
    } finally {
      this.busy.delete(file.path);
    }
  }
  unload() {
    for (const timer of this.timers.values()) window.clearTimeout(timer);
    this.timers.clear();
  }
  isManagedFile(file) {
    var _a;
    if (file.extension !== "md") return false;
    if (file.path.startsWith("Discursos/")) return true;
    const rawFrontmatter = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
    if (!isRecord(rawFrontmatter)) return false;
    return rawFrontmatter.indice_nights_tipo === "livro" ||
      typeof rawFrontmatter.id_origem === "string" ||
      typeof rawFrontmatter.id_jw === "string" ||
      typeof rawFrontmatter.id_remoto === "string" ||
      Object.hasOwn(rawFrontmatter, "textos");
  }
};

// src/remote-drive.ts
var import_obsidian4 = require("obsidian");

// src/remote-drive-content.ts
var DRIVE_ID = /^[A-Za-z0-9_-]{10,}$/;
function decodeHtml(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"'
  };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    var _a;
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return (_a = named[code.toLocaleLowerCase("pt-BR")]) != null ? _a : entity;
  });
}
function plainText(html) {
  return decodeHtml(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}
function driveIdFromPath(pathname, pattern) {
  var _a, _b;
  const id = (_b = (_a = pattern.exec(pathname)) == null ? void 0 : _a[1]) != null ? _b : null;
  return id && DRIVE_ID.test(id) ? id : null;
}
function parsePublicDriveFolderLink(value) {
  var _a;
  let url;
  try {
    url = new URL(value.trim());
  } catch (e) {
    throw new Error("Cole um link v\xE1lido de uma pasta p\xFAblica do Google Drive.");
  }
  if (url.protocol !== "https:" || url.hostname !== "drive.google.com") {
    throw new Error("O link precisa come\xE7ar com https://drive.google.com/.");
  }
  const folderId = (_a = driveIdFromPath(url.pathname, /\/drive\/(?:u\/\d+\/)?folders\/([A-Za-z0-9_-]+)/)) != null ? _a : driveIdFromPath(url.pathname, /\/folders\/([A-Za-z0-9_-]+)/);
  if (!folderId) throw new Error("Este n\xE3o parece ser um link de pasta do Google Drive.");
  return {
    folderId,
    resourceKey: url.searchParams.get("resourcekey")
  };
}
function classifyLink(rawHref) {
  var _a, _b;
  let url;
  try {
    url = new URL(decodeHtml(rawHref), "https://drive.google.com");
  } catch (e) {
    return null;
  }
  if (url.protocol !== "https:") return null;
  const resourceKey = url.searchParams.get("resourcekey");
  if (url.hostname === "drive.google.com") {
    const folderId = (_a = driveIdFromPath(url.pathname, /\/drive\/(?:u\/\d+\/)?folders\/([A-Za-z0-9_-]+)/)) != null ? _a : driveIdFromPath(url.pathname, /\/folders\/([A-Za-z0-9_-]+)/);
    if (folderId) return { id: folderId, type: "folder", resourceKey };
    const fileId = (_b = driveIdFromPath(url.pathname, /\/file\/d\/([A-Za-z0-9_-]+)/)) != null ? _b : url.pathname === "/open" || url.pathname === "/uc" ? url.searchParams.get("id") : null;
    if (fileId && DRIVE_ID.test(fileId)) return { id: fileId, type: "file", resourceKey };
  }
  if (url.hostname === "docs.google.com") {
    const documentId = driveIdFromPath(url.pathname, /\/document\/d\/([A-Za-z0-9_-]+)/);
    if (documentId) return { id: documentId, type: "google-doc", resourceKey };
  }
  return null;
}
function parsePublicDriveFolderHtml(html) {
  var _a, _b;
  const entries = /* @__PURE__ */ new Map();
  const anchorPattern = /<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorPattern)) {
    const classified = classifyLink((_a = match[2]) != null ? _a : "");
    const name = plainText((_b = match[3]) != null ? _b : "");
    if (!classified || !name) continue;
    const key = `${classified.type}:${classified.id}`;
    if (!entries.has(key)) entries.set(key, { ...classified, name });
  }
  return [...entries.values()];
}
function isSupportedRemoteTranscript(entry) {
  if (entry.type === "google-doc") return true;
  return entry.type === "file" && /\.(?:txt|md|markdown)$/i.test(entry.name);
}
function withoutSourceFrontmatter(content) {
  return content.replace(/^\uFEFF/, "").replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, "").replace(/\r\n?/g, "\n").trim();
}
function yamlString2(value) {
  return JSON.stringify(value);
}
function remoteDriveOriginalUrl(file) {
  const base = file.type === "google-doc" ? `https://docs.google.com/document/d/${file.id}/edit` : `https://drive.google.com/file/d/${file.id}/view`;
  return file.resourceKey ? `${base}?resourcekey=${encodeURIComponent(file.resourceKey)}` : base;
}
function createRemoteTranscriptNote(file, rawContent) {
  const originalTitle = file.name.replace(/\.(?:txt|md|markdown)$/i, "").trim();
  const title = nomeArquivoSeguro(originalTitle);
  const speaker = identificarOrador(originalTitle);
  const body = withoutSourceFrontmatter(rawContent);
  const references = extractReferences(body);
  const yaml = [
    "---",
    `id_remoto: ${yamlString2(`google-drive:${file.id}`)}`,
    ...speaker ? [`orador: ${yamlString2(speaker)}`] : [],
    ...references.length ? ["textos:", ...references.map((reference) => `  - ${yamlString2(reference.display)}`)] : ["textos: []"],
    "---"
  ];
  const hasHeading = /^#\s+\S/m.test(body);
  const base = [
    ...yaml,
    "",
    ...hasHeading ? [] : [`# ${title}`, ""],
    `[\u2197 Abrir arquivo original no Google Drive](${remoteDriveOriginalUrl(file)})`,
    "",
    body
  ].join("\n").trimEnd() + "\n";
  return synchronizeMiniIndex(base).content;
}

// src/remote-drive.ts
var DEFAULT_FOLDER = "Discursos/Importados";
var MAX_FOLDERS = 100;
var MAX_FILES = 1e3;
var MAX_DEPTH = 12;
function cleanFolder2(value) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");
  return trimmed ? (0, import_obsidian4.normalizePath)(trimmed) : "";
}
function safeFolderName(value) {
  return nomeArquivoSeguro(value).replace(/\.+$/g, "").trim() || "Pasta sem nome";
}
async function ensureFolder2(app, folder) {
  const parts = cleanFolder2(folder).split("/").filter(Boolean);
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    if (!app.vault.getAbstractFileByPath(current)) await app.vault.createFolder(current);
  }
}
function embeddedFolderUrl(folderId, resourceKey) {
  const params = new URLSearchParams({ id: folderId });
  if (resourceKey) params.set("resourcekey", resourceKey);
  return `https://drive.google.com/embeddedfolderview?${params.toString()}#list`;
}
function downloadUrl(file) {
  const params = new URLSearchParams();
  if (file.resourceKey) params.set("resourcekey", file.resourceKey);
  if (file.type === "google-doc") {
    const query = params.toString();
    return `https://docs.google.com/document/d/${file.id}/export?format=txt${query ? `&${query}` : ""}`;
  }
  params.set("export", "download");
  params.set("id", file.id);
  return `https://drive.google.com/uc?${params.toString()}`;
}
function looksLikeGooglePage(contentType, text) {
  const beginning = text.slice(0, 800).toLocaleLowerCase("pt-BR");
  return contentType.toLocaleLowerCase("pt-BR").includes("text/html") || /<!doctype html|<html\b/.test(beginning);
}
var RemoteDriveTranscriptService = class {
  constructor(app, settings, syncNote) {
    this.app = app;
    this.settings = settings;
    this.syncNote = syncNote;
    __publicField(this, "downloading", false);
  }
  async downloadNew() {
    var _a;
    if (this.downloading) {
      new import_obsidian4.Notice("J\xE1 existe uma importa\xE7\xE3o da pasta p\xFAblica em andamento.");
      return;
    }
    let root;
    try {
      root = parsePublicDriveFolderLink(this.settings.remoteDriveUrl);
    } catch (error) {
      new import_obsidian4.Notice(error instanceof Error ? error.message : "O link da pasta p\xFAblica \xE9 inv\xE1lido.", 9e3);
      return;
    }
    this.downloading = true;
    const progress = new import_obsidian4.Notice("Lendo a pasta p\xFAblica do Google Drive\u2026", 0);
    let created = 0;
    let skipped = 0;
    let synchronized = 0;
    let errors = 0;
    try {
      const files = await this.collectFiles(root.folderId, root.resourceKey, progress);
      const existing = this.existingNotes();
      const destination = cleanFolder2(this.settings.remoteDriveFolder) || DEFAULT_FOLDER;
      for (const [index, file] of files.entries()) {
        progress.setMessage(`Importando ${index + 1}/${files.length}: ${file.name}`);
        const remoteId = `google-drive:${file.id}`;
        const existingFile = existing.get(remoteId);
        if (existingFile) {
          if (await this.syncNote(existingFile)) synchronized += 1;
          skipped += 1;
          continue;
        }
        try {
          const response = await (0, import_obsidian4.requestUrl)({ url: downloadUrl(file), method: "GET" });
          const contentType = (_a = response.headers["content-type"]) != null ? _a : "";
          if (looksLikeGooglePage(contentType, response.text)) {
            throw new Error("O Google Drive n\xE3o entregou o arquivo como texto.");
          }
          const folder = cleanFolder2([destination, file.relativeFolder].filter(Boolean).join("/"));
          await ensureFolder2(this.app, folder);
          const basename = nomeArquivoSeguro(file.name.replace(/\.(?:txt|md|markdown)$/i, ""));
          const path = await this.availablePath(folder, basename);
          const note = createRemoteTranscriptNote(file, response.text);
          const createdFile = await this.app.vault.create(path, note);
          existing.set(remoteId, createdFile);
          created += 1;
        } catch (e) {
          errors += 1;
        }
      }
      new import_obsidian4.Notice(
        `Importa\xE7\xE3o conclu\xEDda: ${created} nova(s), ${skipped} j\xE1 existente(s), ${synchronized} mini-\xEDndice(s) atualizado(s), ${errors} erro(s).`,
        12e3
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "N\xE3o foi poss\xEDvel ler a pasta p\xFAblica.";
      new import_obsidian4.Notice(`Importa\xE7\xE3o interrompida: ${message}`, 12e3);
    } finally {
      progress.hide();
      this.downloading = false;
    }
  }
  async collectFiles(rootId, resourceKey, progress) {
    const files = [];
    const visited = /* @__PURE__ */ new Set();
    const pending = [
      { id: rootId, resourceKey, path: "", depth: 0 }
    ];
    while (pending.length > 0) {
      const folder = pending.shift();
      if (!folder || visited.has(folder.id)) continue;
      if (folder.depth > MAX_DEPTH) throw new Error(`A pasta excedeu o limite de ${MAX_DEPTH} n\xEDveis.`);
      visited.add(folder.id);
      if (visited.size > MAX_FOLDERS) throw new Error(`A pasta excedeu o limite de ${MAX_FOLDERS} subpastas.`);
      progress.setMessage(`Lendo pasta p\xFAblica ${visited.size}\u2026`);
      const response = await (0, import_obsidian4.requestUrl)({
        url: embeddedFolderUrl(folder.id, folder.resourceKey),
        method: "GET"
      });
      const entries = parsePublicDriveFolderHtml(response.text);
      if (entries.length === 0 && visited.size === 1) {
        throw new Error("A pasta est\xE1 vazia, n\xE3o \xE9 p\xFAblica ou o Google alterou a p\xE1gina de compartilhamento.");
      }
      for (const entry of entries) {
        if (entry.type === "folder") {
          pending.push({
            id: entry.id,
            resourceKey: entry.resourceKey,
            path: [folder.path, safeFolderName(entry.name)].filter(Boolean).join("/"),
            depth: folder.depth + 1
          });
          continue;
        }
        if (!isSupportedRemoteTranscript(entry)) continue;
        files.push(this.toTranscript(entry, folder.path));
        if (files.length > MAX_FILES) throw new Error(`A pasta excedeu o limite de ${MAX_FILES} arquivos.`);
      }
    }
    return files;
  }
  toTranscript(entry, relativeFolder) {
    if (entry.type === "folder") throw new Error("Uma pasta n\xE3o pode ser importada como transcri\xE7\xE3o.");
    return { ...entry, type: entry.type, relativeFolder };
  }
  existingNotes() {
    var _a, _b;
    const notes = /* @__PURE__ */ new Map();
    for (const file of this.app.vault.getMarkdownFiles()) {
      const value = (_b = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) == null ? void 0 : _b.id_remoto;
      if (typeof value === "string" && value.trim()) notes.set(value.trim(), file);
    }
    return notes;
  }
  async availablePath(folder, basename) {
    let counter = 1;
    let path = `${folder}/${basename}.md`;
    while (this.app.vault.getAbstractFileByPath(path)) {
      counter += 1;
      path = `${folder}/${basename} (${counter}).md`;
    }
    return path;
  }
};

// src/scripture-links.ts
var import_obsidian5 = require("obsidian");
var verseCache = /* @__PURE__ */ new Map();
var ONE_HOUR = 60 * 60 * 1e3;
function bcv(reference) {
  return `${String(reference.bookOrder + 1).padStart(2, "0")}${String(reference.chapter).padStart(3, "0")}${String(reference.verse).padStart(3, "0")}`;
}
function bibleAppUrl(reference) {
  return `jwlibrary:///finder?wtlocale=T&bible=${bcv(reference)}`;
}
async function fetchVerse(reference) {
  var _a, _b, _c, _d;
  const code = bcv(reference);
  const cached = verseCache.get(code);
  if (cached && cached.expires > Date.now()) return cached;
  try {
    const apiCode = code.replace(/^0+/, "");
    const response = await (0, import_obsidian5.requestUrl)({ url: `https://www.jw.org/pt/json/html/${apiCode}` });
    const data = response.json;
    const range = (_c = (_a = data.ranges) == null ? void 0 : _a[apiCode]) != null ? _c : Object.values((_b = data.ranges) != null ? _b : {})[0];
    if (!(range == null ? void 0 : range.html)) return null;
    const result = {
      html: range.html.replace(/<a[^>]*>/g, "").replace(/<\/a>/g, ""),
      citation: ((_d = range.citation) == null ? void 0 : _d.replace(/&nbsp;/g, " ")) || reference.display,
      expires: Date.now() + ONE_HOUR
    };
    verseCache.set(code, result);
    return result;
  } catch (e) {
    return null;
  }
}
var VersePreviewModal = class extends import_obsidian5.Modal {
  constructor(app, reference) {
    super(app);
    this.reference = reference;
  }
  onOpen() {
    this.titleEl.setText(this.reference.display);
    const body = this.contentEl.createDiv({ cls: "indice-nights-verse-preview" });
    body.createEl("p", { text: "Carregando o texto\u2026", cls: "indice-nights-verse-loading" });
    void fetchVerse(this.reference).then((verse) => {
      body.empty();
      if (verse) {
        const verseEl = body.createDiv({ cls: "indice-nights-verse-text" });
        const parsed = new DOMParser().parseFromString(verse.html, "text/html");
        for (const child of Array.from(parsed.body.childNodes)) {
          verseEl.appendChild(activeDocument.importNode(child, true));
        }
        body.createEl("small", { text: verse.citation, cls: "indice-nights-verse-citation" });
      } else {
        body.createEl("p", { text: "N\xE3o foi poss\xEDvel carregar o texto agora." });
      }
      const actions = body.createDiv({ cls: "indice-nights-verse-actions" });
      actions.createEl("button", { text: "Copiar refer\xEAncia" }).addEventListener("click", () => {
        void navigator.clipboard.writeText(this.reference.display);
        new import_obsidian5.Notice("Refer\xEAncia copiada.");
      });
      actions.createEl("a", {
        text: "Abrir no JW Library",
        href: bibleAppUrl(this.reference),
        cls: "mod-cta"
      });
    });
  }
};
function shouldSkip(node) {
  const parent = node.parentElement;
  return !parent || Boolean(parent.closest(
    "a, code, pre, .frontmatter, .metadata-container, .callout[data-callout='bible-index'], .indice-nights-verse-preview"
  ));
}
function linkBibleReferences(container, app) {
  var _a;
  const walker = activeDocument.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current);
    current = walker.nextNode();
  }
  for (const node of nodes) {
    if (shouldSkip(node)) continue;
    const text = (_a = node.nodeValue) != null ? _a : "";
    const locations = findReferencesInText(text);
    if (locations.length === 0) continue;
    const parent = node.parentElement;
    if (!parent) continue;
    const fragment = activeDocument.createDocumentFragment();
    let cursor = 0;
    for (const location of locations) {
      fragment.append(text.slice(cursor, location.start));
      const link = parent.createEl("a", {
        cls: "indice-nights-scripture-link",
        text: text.slice(location.start, location.end)
      });
      link.dataset.tooltipPosition = "top";
      link.setAttribute("aria-label", "Ver texto b\xEDblico");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        new VersePreviewModal(app, location.reference).open();
      });
      fragment.append(link);
      cursor = location.end;
    }
    fragment.append(text.slice(cursor));
    node.replaceWith(fragment);
  }
}

// src/main.ts
var DeviceSelectionStore = class {
  constructor(values, persist) {
    this.values = values;
    this.persist = persist;
  }
  get(key) {
    var _a;
    return (_a = this.values[key]) != null ? _a : null;
  }
  set(key, value) {
    this.values[key] = value;
    this.persist();
  }
};

var INDICE_NIGHTS_CONTEXT_VIEW = "indice-nights-context";
var INDICE_NIGHTS_LIBRARY_VIEW = "indice-nights-library";

var ContextoBiblicoView = class extends import_obsidian6.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.unsubscribe = null;

    // Modo principal da sidebar: "list" = contexto; "reader" = transcrição completa.
    this.mode = "list";
    this.contextFilePath = "";
    this.readerFilePath = "";
    this.readerReference = null;

    // Estado visual da lista para voltar exatamente ao ponto anterior.
    this.listScrollTop = 0;
    this.openReferenceKeys = /* @__PURE__ */ new Set();
  }

  getViewType() {
    return INDICE_NIGHTS_CONTEXT_VIEW;
  }

  getDisplayText() {
    return "Contexto Bíblico";
  }

  getIcon() {
    return "book-open-check";
  }

  async onOpen() {
    const index = this.plugin.getDefaultBibleIndex();
    this.unsubscribe = index.subscribe(() => {
      if (this.mode === "reader" && this.readerFilePath) {
        void this.renderReader(this.readerFilePath, this.readerReference);
      } else {
        void this.refresh();
      }
    });
    await this.refresh();
  }

  async onClose() {
    if (this.unsubscribe) this.unsubscribe();
    this.unsubscribe = null;
  }

  rememberListState() {
    const container = this.contentEl;
    this.listScrollTop = container.scrollTop;

    const openKeys = /* @__PURE__ */ new Set();
    for (const details of container.querySelectorAll("details.in-context-reference[open]")) {
      const key = details.getAttribute("data-reference-key");
      if (key) openKeys.add(key);
    }
    this.openReferenceKeys = openKeys;
  }

  async openTranscriptInSidebar(path, reference = null) {
    this.rememberListState();
    this.mode = "reader";
    this.readerFilePath = path;
    this.readerReference = reference;
    await this.renderReader(path, reference);
  }

  async backToContext() {
    this.mode = "list";
    this.readerFilePath = "";
    this.readerReference = null;

    const contextFile = this.contextFilePath
      ? this.app.vault.getAbstractFileByPath(this.contextFilePath)
      : this.app.workspace.getActiveFile();

    await this.refresh(
      contextFile instanceof import_obsidian6.TFile ? contextFile : this.app.workspace.getActiveFile(),
      true
    );
  }

  stripFrontmatter(content) {
    if (!content.startsWith("---")) return content;
    const match = content.match(/^---\s*\n[\s\S]*?\n---\s*(?:\n|$)/);
    return match ? content.slice(match[0].length) : content;
  }

  async renderReader(path, reference = null) {
    const file = this.app.vault.getAbstractFileByPath(path);
    const container = this.contentEl;

    container.empty();
    container.addClass("indice-nights-context-view");
    container.addClass("in-context-reader-mode");

    const toolbar = container.createDiv({ cls: "in-context-reader-toolbar" });
    const back = toolbar.createEl("button", {
      cls: "in-context-reader-back",
      attr: { type: "button", "aria-label": "Voltar ao Contexto Bíblico" }
    });
    const backIcon = back.createSpan({ cls: "in-context-reader-back-icon" });
    (0, import_obsidian6.setIcon)(backIcon, "arrow-left");
    back.createSpan({ text: "Voltar ao Contexto Bíblico" });
    back.addEventListener("click", () => {
      void this.backToContext();
    });

    if (!(file instanceof import_obsidian6.TFile) || file.extension !== "md") {
      container.createDiv({
        text: "Não foi possível abrir esta transcrição.",
        cls: "in-context-empty"
      });
      return;
    }

    const titleBar = container.createDiv({ cls: "in-context-reader-heading" });
    titleBar.createDiv({ text: file.basename, cls: "in-context-reader-title" });

    const cache = this.app.metadataCache.getFileCache(file);
    const frontmatter = cache?.frontmatter ?? {};
    const meta = libraryMetaFor(file, frontmatter);

    const metaLine = titleBar.createDiv({ cls: "in-context-reader-meta" });
    if (meta.collection) metaLine.createSpan({ text: meta.series ? `${meta.collection} · ${meta.series}` : meta.collection });
    if (meta.date) metaLine.createSpan({ text: formatDatePtBR(meta.date) });
    if (meta.speaker) metaLine.createSpan({ text: meta.speaker });

    const reader = container.createDiv({ cls: "in-context-reader-markdown markdown-rendered" });

    try {
      const raw = await this.app.vault.cachedRead(file);
      let content = this.stripFrontmatter(raw);
      let requestedBlockId = null;

      if (reference) {
        requestedBlockId = await citationBlockFor(this.app, file.path, reference);
        if (requestedBlockId) {
          const marker = `<span class="in-context-citation-anchor" data-citation-anchor="${requestedBlockId}"></span>`;
          const blockLine = new RegExp(`(^|\\n)(\\^${requestedBlockId.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s*(?:\\n|$))`);
          content = content.replace(blockLine, `$1${marker}\\n$2`);
        }
      }

      await import_obsidian6.MarkdownRenderer.render(
        this.app,
        content,
        reader,
        file.path,
        this
      );

      // O próprio frontmatter não é exibido; links bíblicos/miniatura continuam processados.
      this.plugin.prepareThumbnailLayout(reader);
      linkBibleReferences(reader, this.app);

      // Mantém a transcrição inteira e posiciona com prioridade no parágrafo exato.
      if (reference && requestedBlockId) {
        window.setTimeout(() => {
          const escaped = typeof CSS !== "undefined" && CSS.escape
            ? CSS.escape(requestedBlockId)
            : requestedBlockId;

          const target =
            reader.querySelector(`[data-citation-anchor="${escaped}"]`) ||
            reader.querySelector(`[data-block-id="${escaped}"]`) ||
            reader.querySelector(`#${escaped}`);

          if (target instanceof HTMLElement) {
            const paragraph =
              target.closest("p, blockquote, li, .callout, div") ||
              target.nextElementSibling ||
              target;
            paragraph.addClass("in-context-citation-highlight");
            paragraph.scrollIntoView({ block: "center", behavior: "auto" });
          }
        }, 80);
      }
    } catch (error) {
      console.error("Indice Nights: falha ao renderizar transcrição na sidebar", path, error);
      reader.createDiv({
        text: "Não foi possível renderizar a transcrição completa.",
        cls: "in-context-empty"
      });
    }
  }

  async refresh(file = this.app.workspace.getActiveFile(), restoreState = false) {
    // Se o usuário está comparando uma transcrição na lateral, não substitui a leitura
    // apenas porque o painel central disparou uma atualização.
    if (this.mode === "reader" && !restoreState) {
      return;
    }

    const container = this.contentEl;
    container.empty();
    container.addClass("indice-nights-context-view");
    container.removeClass("in-context-reader-mode");

    const heading = container.createDiv({ cls: "in-context-header" });
    heading.createDiv({ text: "Contexto Bíblico", cls: "in-context-title" });
    heading.createDiv({
      text: "Veja onde os textos desta nota aparecem em outras transcrições.",
      cls: "in-context-subtitle"
    });

    if (!file || file.extension !== "md" || !this.plugin.isContextBibleFile(file)) {
      container.createDiv({
        text: "Abra uma transcrição ou um capítulo da Biblioteca pessoal para visualizar o contexto bíblico.",
        cls: "in-context-empty"
      });
      return;
    }

    this.contextFilePath = file.path;

    const cache = this.app.metadataCache.getFileCache(file);
    const frontmatter = cache?.frontmatter ?? {};
    const references = extractReferences(frontmatter.textos);

    const noteCard = container.createDiv({ cls: "in-context-current-note" });
    noteCard.createDiv({ text: file.basename, cls: "in-context-current-title" });
    noteCard.createDiv({
      text: references.length
        ? `${references.length} texto${references.length === 1 ? "" : "s"} bíblico${references.length === 1 ? "" : "s"} nesta transcrição`
        : "Nenhum texto bíblico indexado nesta transcrição.",
      cls: "in-context-current-count"
    });

    if (!references.length) return;

    const index = this.plugin.getDefaultBibleIndex();

    for (const reference of references) {
      const bookSnapshot = index.snapshot(reference.book);
      const indexed = bookSnapshot.references.find((item) => item.key === reference.key);
      const occurrences = indexed
        ? [...indexed.notes.values()].filter((note) => note.path !== file.path)
        : [];

      const details = container.createEl("details", { cls: "in-context-reference" });
      details.setAttribute("data-reference-key", reference.key);
      if (this.openReferenceKeys.has(reference.key)) details.open = true;

      const summary = details.createEl("summary", { cls: "in-context-reference-summary" });

      const refCopy = summary.createDiv({ cls: "in-context-reference-copy" });
      refCopy.createDiv({ text: reference.display, cls: "in-context-reference-name" });
      refCopy.createDiv({
        text: occurrences.length
          ? `Também citado em ${occurrences.length} transcrição${occurrences.length === 1 ? "" : "ões"}`
          : "Nenhuma outra ocorrência no acervo",
        cls: "in-context-reference-count"
      });

      if (!occurrences.length) continue;

      const grouped = new Map();
      for (const note of occurrences) {
        if (!grouped.has(note.section)) grouped.set(note.section, []);
        grouped.get(note.section).push(note);
      }

      const body = details.createDiv({ cls: "in-context-reference-body" });

      for (const [section, notes] of grouped.entries()) {
        const group = body.createDiv({ cls: "in-context-group" });
        group.createDiv({ text: section, cls: "in-context-group-title" });

        for (const note of notes) {
          const link = group.createEl("button", {
            text: note.title,
            cls: "in-context-note-link",
            attr: {
              type: "button",
              title: "Abrir a transcrição completa nesta lateral"
            }
          });

          const arrow = link.createSpan({ cls: "in-context-note-arrow" });
          (0, import_obsidian6.setIcon)(arrow, "chevron-right");

          link.addEventListener("click", () => {
            void this.openTranscriptInSidebar(note.path, reference);
          });
        }
      }
    }

    if (restoreState) {
      window.requestAnimationFrame(() => {
        container.scrollTop = this.listScrollTop;
      });
    }
  }
};


var IndiceNightsLibraryView = class extends import_obsidian6.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.unsubscribe = null;
    this.query = "";
    this.collection = "";
    this.series = "";
    this.speaker = "";
    this.year = "";
  }

  getViewType() {
    return INDICE_NIGHTS_LIBRARY_VIEW;
  }

  getDisplayText() {
    return "Biblioteca - Indice Nights";
  }

  getIcon() {
    return "library-big";
  }

  async onOpen() {
    const index = this.plugin.getDefaultBibleIndex();
    this.unsubscribe = index.subscribe(() => this.render());
    this.render();
  }

  async onClose() {
    if (this.unsubscribe) this.unsubscribe();
    this.unsubscribe = null;
  }

  collectRows() {
    const index = this.plugin.getDefaultBibleIndex();
    index.ensureInitialized();

    const rows = [];

    for (const record of index.notes.values()) {
      const file = record.file;
      const cache = this.app.metadataCache.getFileCache(file);
      const frontmatter = cache?.frontmatter ?? {};
      const meta = libraryMetaFor(file, frontmatter);

      if (!record.references.length) {
        rows.push({ file, reference: null, ...meta });
        continue;
      }

      for (const reference of record.references) {
        rows.push({ file, reference, ...meta });
      }
    }

    rows.sort((a, b) => {
      const dateCompare = String(b.date || "").localeCompare(String(a.date || ""));
      if (dateCompare) return dateCompare;
      return a.file.basename.localeCompare(b.file.basename, "pt-BR");
    });

    return rows;
  }

  render() {
    const container = this.contentEl;
    container.empty();
    container.addClass("indice-nights-library-view");

    const rows = this.collectRows();

    const titleWrap = container.createDiv({ cls: "in-library-header" });
    titleWrap.createDiv({ text: "Biblioteca - Indice Nights", cls: "in-library-title" });
    titleWrap.createDiv({
      text: "Explore o acervo por texto bíblico, coleção, série, orador e ano.",
      cls: "in-library-subtitle"
    });

    const controls = container.createDiv({ cls: "in-library-controls" });

    const search = controls.createEl("input", {
      cls: "in-library-search",
      attr: {
        type: "search",
        placeholder: "Pesquisar texto bíblico, título ou orador…",
        value: this.query
      }
    });
    search.addEventListener("input", () => {
      this.query = search.value;
      this.render();
    });

    const unique = (values) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));

    const makeSelect = (label, values, current, onChange) => {
      const select = controls.createEl("select", { cls: "dropdown in-library-filter", attr: { "aria-label": label } });
      select.createEl("option", { text: `${label}: todos`, value: "" });
      for (const value of values) select.createEl("option", { text: value, value });
      select.value = current;
      select.addEventListener("change", () => onChange(select.value));
      return select;
    };

    makeSelect("Coleção", unique(rows.map((row) => row.collection)), this.collection, (value) => {
      this.collection = value;
      this.render();
    });
    makeSelect("Série", unique(rows.map((row) => row.series)), this.series, (value) => {
      this.series = value;
      this.render();
    });
    makeSelect("Orador", unique(rows.map((row) => row.speaker)), this.speaker, (value) => {
      this.speaker = value;
      this.render();
    });
    makeSelect("Ano", unique(rows.map((row) => row.date ? row.date.slice(0, 4) : "")), this.year, (value) => {
      this.year = value;
      this.render();
    });

    const query = normalizeText(this.query);
    const filtered = rows.filter((row) => {
      if (this.collection && row.collection !== this.collection) return false;
      if (this.series && row.series !== this.series) return false;
      if (this.speaker && row.speaker !== this.speaker) return false;
      if (this.year && !String(row.date || "").startsWith(this.year)) return false;

      if (!query) return true;

      const haystack = normalizeText([
        row.file.basename,
        row.collection,
        row.series,
        row.speaker,
        row.reference?.display ?? ""
      ].join(" "));

      return haystack.includes(query);
    });

    const status = container.createDiv({ cls: "in-library-status" });
    status.createSpan({ text: `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}` });
    status.createSpan({ text: "Atualização automática", cls: "in-library-live-badge" });

    const tableWrap = container.createDiv({ cls: "in-library-table-wrap" });
    const table = tableWrap.createEl("table", { cls: "in-library-table" });
    const thead = table.createEl("thead");
    const head = thead.createEl("tr");
    for (const label of ["Data", "Coleção", "Série", "Orador", "Título", "Texto bíblico"]) {
      head.createEl("th", { text: label });
    }

    const tbody = table.createEl("tbody");
    const visibleRows = filtered.slice(0, 1000);

    for (const row of visibleRows) {
      const tr = tbody.createEl("tr");
      tr.createEl("td", { text: formatDatePtBR(row.date) });
      tr.createEl("td", { text: row.collection || "—" });
      tr.createEl("td", { text: row.series || "—" });
      tr.createEl("td", { text: row.speaker || "—" });

      const titleCell = tr.createEl("td");
      const titleLink = titleCell.createEl("button", {
        text: row.file.basename,
        cls: "in-library-link",
        attr: { type: "button" }
      });
      titleLink.addEventListener("click", () => {
        void this.app.workspace.openLinkText(row.file.path, "", false);
      });

      const refCell = tr.createEl("td");
      if (row.reference) {
        const refLink = refCell.createEl("button", {
          text: row.reference.display,
          cls: "in-library-link in-library-reference-link",
          attr: { type: "button" }
        });
        refLink.addEventListener("click", () => {
          void openCitationTarget(this.app, row.file.path, row.reference, "", false);
        });
      } else {
        refCell.setText("—");
      }
    }

    if (filtered.length > visibleRows.length) {
      container.createDiv({
        text: `Mostrando os primeiros ${visibleRows.length} resultados. Use os filtros para refinar a pesquisa.`,
        cls: "in-library-limit"
      });
    }
  }
};

function registerIndiceNightsBasesView(plugin) {
  if (typeof plugin.registerBasesView !== "function" || typeof import_obsidian6.BasesView !== "function") return;

  const BasesViewClass = import_obsidian6.BasesView;

  class IndiceNightsBasesView extends BasesViewClass {
    constructor(controller, parentEl) {
      super(controller);
      this.plugin = plugin;
      this.containerEl = parentEl.createDiv({ cls: "indice-nights-bases-view" });
    }

    get type() {
      return "indice-nights-bases";
    }

    onDataUpdated() {
      const container = this.containerEl;
      container.empty();

      container.createDiv({ text: "Biblioteca - Indice Nights", cls: "in-bases-title" });
      container.createDiv({
        text: "Visualização viva do acervo usando o mecanismo nativo Bases.",
        cls: "in-bases-subtitle"
      });

      const tableWrap = container.createDiv({ cls: "in-library-table-wrap" });
      const table = tableWrap.createEl("table", { cls: "in-library-table" });
      const thead = table.createEl("thead");
      const header = thead.createEl("tr");

      for (const label of ["Data", "Coleção", "Série", "Orador", "Título", "Textos bíblicos"]) {
        header.createEl("th", { text: label });
      }

      const tbody = table.createEl("tbody");
      let rendered = 0;

      for (const group of this.data.groupedData) {
        for (const entry of group.entries) {
          if (rendered >= 1000) break;

          const file = entry.file;
          if (!file?.path?.startsWith("Discursos/") || file.extension !== "md") continue;

          const cache = this.app.metadataCache.getFileCache(file);
          const frontmatter = cache?.frontmatter ?? {};
          const meta = libraryMetaFor(file, frontmatter);
          const refs = extractReferences(frontmatter.textos);

          const tr = tbody.createEl("tr");
          tr.createEl("td", { text: formatDatePtBR(meta.date) });
          tr.createEl("td", { text: meta.collection || "—" });
          tr.createEl("td", { text: meta.series || "—" });
          tr.createEl("td", { text: meta.speaker || "—" });

          const titleCell = tr.createEl("td");
          const title = titleCell.createEl("button", {
            text: file.basename,
            cls: "in-library-link",
            attr: { type: "button" }
          });
          title.addEventListener("click", () => {
            void this.app.workspace.openLinkText(file.path, "", false);
          });

          tr.createEl("td", { text: refs.map((ref) => ref.display).join(" · ") || "—" });
          rendered += 1;
        }
      }
    }
  }

  plugin.registerBasesView("indice-nights-bases", {
    name: "Indice Nights",
    icon: "lucide-library-big",
    factory: (controller, containerEl) => new IndiceNightsBasesView(controller, containerEl)
  });
}

var IndiceNightsPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settings", { ...DEFAULT_SETTINGS });
    __publicField(this, "indexManager");
    __publicField(this, "transcriptService");
    __publicField(this, "remoteDriveService");
    __publicField(this, "noteSyncService");
    __publicField(this, "selections");
    __publicField(this, "selectionData", {});
    __publicField(this, "runtimeStyleEl", null);
    __publicField(this, "workspaceReady", false);
    __publicField(this, "startupTimer", null);
    __publicField(this, "contextOpenTimer", null);
    __publicField(this, "scriptureObserver", null);
    __publicField(this, "scriptureObserverTimer", null);
  }
  getDefaultBibleIndex() {
    return this.indexManager.get({
      folder: "Discursos",
      property: "textos",
      pageSize: 150,
      title: "Índice de Textos Bíblicos",
      showTitle: false
    });
  }
  async activateContextView() {
    if (!this.workspaceReady) return;
    try {
      let leaf = this.app.workspace.getLeavesOfType(INDICE_NIGHTS_CONTEXT_VIEW)[0];
      if (!leaf) {
        leaf = this.app.workspace.getRightLeaf(false);
        if (!leaf) {
          console.warn("Indice Nights: painel lateral ainda não disponível.");
          return;
        }
        await leaf.setViewState({ type: INDICE_NIGHTS_CONTEXT_VIEW, active: true });
      }
      this.app.workspace.revealLeaf(leaf);
      if (leaf.view instanceof ContextoBiblicoView) {
        await leaf.view.refresh();
      }
    } catch (error) {
      console.error("Indice Nights: falha segura ao abrir Contexto Bíblico", error);
    }
  }
  async activateLibraryView() {
    let leaf = this.app.workspace.getLeavesOfType(INDICE_NIGHTS_LIBRARY_VIEW)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: INDICE_NIGHTS_LIBRARY_VIEW, active: true });
    }
    this.app.workspace.revealLeaf(leaf);
  }
  updateTranscriptViewClasses() {
    for (const leaf of this.app.workspace.getLeavesOfType("markdown")) {
      const view = leaf.view;
      const container = view == null ? void 0 : view.containerEl;
      const content = view == null ? void 0 : view.contentEl;
      const file = view == null ? void 0 : view.file;
      if (!container) continue;

      const isTranscript = Boolean(
        file &&
        file.extension === "md" &&
        file.path.startsWith("Discursos/")
      );
      const isBook = Boolean(
        file &&
        file.extension === "md" &&
        this.app.metadataCache.getFileCache(file)?.frontmatter?.indice_nights_tipo === "livro"
      );
      const hideMetadata = isTranscript || isBook;

      container.toggleClass("indice-nights-transcript-view", isTranscript);
      container.toggleClass("indice-nights-book-view", isBook);
      if (content) {
        content.toggleClass("indice-nights-transcript-view", isTranscript);
        content.toggleClass("indice-nights-book-view", isBook);
      }

      // Os dados permanecem no frontmatter; só a interface visual é ocultada.
      for (const metadataEl of container.querySelectorAll(
        ".metadata-container, .metadata-properties, .metadata-properties-heading, .metadata-add-button"
      )) {
        metadataEl.toggleClass("indice-nights-metadata-hidden", hideMetadata);
      }
    }
  }
  startScriptureLinkObserver() {
    if (this.scriptureObserver || typeof MutationObserver === "undefined") return;

    const workspaceEl = document.querySelector(".workspace");
    if (!workspaceEl) return;

    this.scriptureObserver = new MutationObserver((mutations) => {
      let relevant = false;

      for (const mutation of mutations) {
        if (mutation.addedNodes && mutation.addedNodes.length) {
          relevant = true;
          break;
        }
      }

      if (!relevant) return;

      if (this.scriptureObserverTimer) {
        window.clearTimeout(this.scriptureObserverTimer);
      }

      this.scriptureObserverTimer = window.setTimeout(() => {
        this.refreshScriptureLinksInOpenTranscripts();
      }, 90);
    });

    this.scriptureObserver.observe(workspaceEl, {
      childList: true,
      subtree: true
    });
  }
  stopScriptureLinkObserver() {
    if (this.scriptureObserver) {
      this.scriptureObserver.disconnect();
      this.scriptureObserver = null;
    }

    if (this.scriptureObserverTimer) {
      window.clearTimeout(this.scriptureObserverTimer);
      this.scriptureObserverTimer = null;
    }
  }
  ensureRuntimeStyles() {
    try {
      if (typeof document === "undefined" || !document.head) return;
      const existing = document.getElementById("indice-nights-runtime-styles");
      if (existing) {
        this.runtimeStyleEl = existing;
        return;
      }
      const style = document.createElement("style");
      style.id = "indice-nights-runtime-styles";
      style.textContent = INDICE_NIGHTS_RUNTIME_CSS;
      document.head.appendChild(style);
      this.runtimeStyleEl = style;
    } catch (error) {
      console.error("Indice Nights: falha ao aplicar estilos em runtime", error);
    }
  }
  async onload() {
    this.ensureRuntimeStyles();
    await this.loadSettings();

    this.registerView(
      INDICE_NIGHTS_CONTEXT_VIEW,
      (leaf) => new ContextoBiblicoView(leaf, this)
    );
    this.registerView(
      INDICE_NIGHTS_LIBRARY_VIEW,
      (leaf) => new IndiceNightsLibraryView(leaf, this)
    );
    try {
      registerIndiceNightsBasesView(this);
    } catch (error) {
      console.warn("Indice Nights: integração com Bases indisponível nesta inicialização", error);
    }

    this.selections = new DeviceSelectionStore(this.selectionData, () => {
      void this.saveSettings();
    });
    this.indexManager = new BibleIndexManager(this.app);
    this.noteSyncService = new NoteSyncService(this.app);
    this.transcriptService = new SourceTranscriptService(
      this.app,
      this.settings,
      (file) => this.noteSyncService.syncFile(file)
    );
    this.remoteDriveService = new RemoteDriveTranscriptService(
      this.app,
      this.settings,
      (file) => this.noteSyncService.syncFile(file)
    );
    this.addSettingTab(new IndiceNightsSettingTab(this.app, this));

    this.app.workspace.onLayoutReady(() => {
      this.workspaceReady = true;
      this.startScriptureLinkObserver();
      this.scheduleScriptureLinkRefresh();

      if (this.startupTimer) window.clearTimeout(this.startupTimer);
      this.startupTimer = window.setTimeout(() => {
        void (async () => {
          try {
            await this.transcriptService.applySeriesMigrations();
          } catch (e) {
            console.error("Indice Nights: falha ao organizar as séries na inicialização", e);
          }

          try {
            await this.transcriptService.ensureGeneralIndex();
          } catch (e) {
            console.error("Indice Nights: falha ao atualizar o Índice Geral na inicialização", e);
          }

          try {
            this.updateTranscriptViewClasses();
          } catch (e) {
            console.error("Indice Nights: falha ao aplicar visual das transcrições", e);
          }

          try {
            await this.updatePersonalLibraryStudyLinks(false);
          } catch (e) {
            console.error("Indice Nights: falha ao atualizar Biblioteca pessoal", e);
          }

          const activeFile = this.app.workspace.getActiveFile();
          if (activeFile) {
            try {
              this.noteSyncService.schedule(activeFile);
            } catch (e) {
              console.error("Indice Nights: falha ao sincronizar arquivo ativo", e);
            }
          }
        })();
      }, 400);
    });

    this.addRibbonIcon("library-big", "Biblioteca - Indice Nights", () => {
      void this.activateLibraryView();
    });
    this.addRibbonIcon("book-open-check", "Contexto Bíblico", () => {
      void this.activateContextView();
    });

    this.addCommand({
      id: "abrir-biblioteca-indice-nights",
      name: "Abrir Biblioteca - Indice Nights",
      callback: () => {
        void this.activateLibraryView();
      }
    });
    this.addCommand({
      id: "abrir-contexto-biblico",
      name: "Abrir Contexto Bíblico",
      callback: () => {
        void this.activateContextView();
      }
    });

    this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
      if (!(file instanceof import_obsidian6.TFile) || file.extension !== "md" || !file.path.startsWith("Discursos/")) return;

      menu.addSeparator();
      menu.addItem((item) => item
        .setTitle("Abrir Contexto Bíblico")
        .setIcon("book-open-check")
        .onClick(() => {
          void this.app.workspace.openLinkText(file.path, "", false).then(() => this.activateContextView());
        }));
      menu.addItem((item) => item
        .setTitle("Abrir Biblioteca - Indice Nights")
        .setIcon("library-big")
        .onClick(() => {
          void this.activateLibraryView();
        }));
    }));

    this.registerObsidianProtocolHandler("indice-nights-bible", (params) => {
      const raw = typeof params?.ref === "string" ? params.ref : "";
      const reference = extractReferences(raw)[0];

      if (!reference) {
        new import_obsidian6.Notice("Não foi possível reconhecer esta referência bíblica.");
        return;
      }

      new VersePreviewModal(this.app, reference).open();
    });

    this.addCommand({
      id: "baixar-novas-transcrições",
      name: "Baixar novas transcri\xE7\xF5es selecionadas",
      callback: () => {
        void this.transcriptService.downloadEnabled();
      }
    });
    this.addCommand({
      id: "baixar-transcrições-pasta-publica",
      name: "Baixar novas transcri\xE7\xF5es da pasta p\xFAblica",
      callback: () => {
        void this.remoteDriveService.downloadNew();
      }
    });
    this.registerMarkdownCodeBlockProcessor("indice-biblico", (source, el, context) => {
      var _a;
      const config = parseBlockConfig(source, this.settings);
      const section = context.getSectionInfo(el);
      const location = (_a = section == null ? void 0 : section.lineStart) != null ? _a : 0;
      const selectionKey = encodeURIComponent(`${this.app.vault.getName()}|${context.sourcePath}|${location}`);
      const index = this.indexManager.get(config);
      context.addChild(new BibleIndexView(
        el,
        this.app,
        context.sourcePath,
        index,
        config,
        this.selections,
        selectionKey
      ));
    });
    this.registerMarkdownPostProcessor((element, context) => {
      this.prepareThumbnailLayout(element);
      linkBibleReferences(element, this.app);

      const sourceFile = context?.sourcePath
        ? this.app.vault.getAbstractFileByPath(context.sourcePath)
        : null;

      if (
        sourceFile instanceof import_obsidian6.TFile &&
        this.isScriptureLinkFile(sourceFile)
      ) {
        this.scheduleScriptureLinkRefresh(sourceFile);
      }
    });
    this.registerEvent(this.app.metadataCache.on("changed", (file) => {
      this.indexManager.updateFile(file);
    }));
    this.registerEvent(this.app.workspace.on("layout-change", () => {
      this.updateTranscriptViewClasses();
      this.scheduleScriptureLinkRefresh();
    }));
    window.setTimeout(() => {
      this.updateTranscriptViewClasses();
    }, 0);
    this.registerEvent(this.app.vault.on("modify", (file) => {
      if (file instanceof import_obsidian6.TFile) this.noteSyncService.schedule(file);
    }));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (file instanceof import_obsidian6.TFile) this.indexManager.removePath(file.path);
    }));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (file instanceof import_obsidian6.TFile) this.indexManager.renameFile(file, oldPath);
    }));
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      if (file) {
        try {
          this.noteSyncService.schedule(file);
        } catch (error) {
          console.error("Indice Nights: falha ao agendar sincronização", error);
        }
      }

      window.setTimeout(() => {
        try {
          this.updateTranscriptViewClasses();
        } catch (error) {
          console.error("Indice Nights: falha ao atualizar visual da transcrição", error);
        }
      }, 0);

      if (
        file &&
        this.isScriptureLinkFile(file)
      ) {
        this.scheduleScriptureLinkRefresh(file);
      }

      if (
        this.workspaceReady &&
        file &&
        this.isContextBibleFile(file)
      ) {
        if (this.contextOpenTimer) window.clearTimeout(this.contextOpenTimer);
        this.contextOpenTimer = window.setTimeout(() => {
          void this.activateContextView();
        }, 250);
      }

      if (this.workspaceReady) {
        for (const leaf of this.app.workspace.getLeavesOfType(INDICE_NIGHTS_CONTEXT_VIEW)) {
          if (leaf.view instanceof ContextoBiblicoView) {
            void leaf.view.refresh(file).catch((error) => {
              console.error("Indice Nights: falha ao atualizar Contexto Bíblico", error);
            });
          }
        }
      }
    }));
  }
  onunload() {
    var _a;
    this.workspaceReady = false;

    if (this.startupTimer) {
      window.clearTimeout(this.startupTimer);
      this.startupTimer = null;
    }
    if (this.contextOpenTimer) {
      window.clearTimeout(this.contextOpenTimer);
      this.contextOpenTimer = null;
    }

    this.stopScriptureLinkObserver();

    (_a = this.noteSyncService) == null ? void 0 : _a.unload();

    if (this.runtimeStyleEl && this.runtimeStyleEl.parentElement) {
      this.runtimeStyleEl.remove();
    }
    this.runtimeStyleEl = null;
  }
  prepareThumbnailLayout(element) {
    const thumbnails = element.querySelectorAll('img[alt="Miniatura"]');
    for (const image of thumbnails) {
      const link = image.closest("a");
      if (link) link.addClass("indice-nights-thumbnail-link");
    }
  }
  isBookFile(file) {
    if (!file || file.extension !== "md") return false;
    const frontmatter = this.app.metadataCache.getFileCache(file)?.frontmatter;
    return frontmatter?.indice_nights_tipo === "livro";
  }
  isScriptureLinkFile(file) {
    if (!file || file.extension !== "md") return false;
    if (file.path.startsWith("Discursos/")) return true;
    return this.isBookFile(file);
  }
  isContextBibleFile(file) {
    if (!file || file.extension !== "md") return false;
    return file.path.startsWith("Discursos/") || this.isBookFile(file);
  }
  async updatePersonalLibraryStudyLinks(showNotice = false) {
    const books = this.app.vault.getMarkdownFiles().filter((file) => this.isBookFile(file));
    let updated = 0;

    for (const file of books) {
      try {
        const original = await this.app.vault.read(file);
        const prepared = prepareBookStudyContent(original);
        let changed = false;

        if (prepared.content !== original) {
          await this.app.vault.modify(file, prepared.content);
          changed = true;
        }

        const currentFrontmatter = this.app.metadataCache.getFileCache(file)?.frontmatter ?? {};
        const expectedTexts = prepared.references.map((reference) => reference.display);
        const currentTexts = propertyValues(currentFrontmatter.textos);

        if (!sameValues(currentTexts, expectedTexts)) {
          await this.app.fileManager.processFrontMatter(file, (properties) => {
            properties.textos = expectedTexts;
          });
          changed = true;
        }

        if (changed) updated += 1;
      } catch (error) {
        console.error("Indice Nights: falha ao preparar livro para estudo", file.path, error);
      }
    }

    if (showNotice) {
      new import_obsidian6.Notice(
        `${books.length} nota(s) da Biblioteca pessoal revisadas; ${updated} atualizada(s).`,
        8000
      );
    }

    return { total: books.length, updated };
  }
  refreshScriptureLinksInOpenTranscripts(targetFile = null) {
    try {
      for (const leaf of this.app.workspace.getLeavesOfType("markdown")) {
        const view = leaf.view;
        const file = view == null ? void 0 : view.file;
        const container = view == null ? void 0 : view.containerEl;

        if (!file || !container) continue;
        if (!this.isScriptureLinkFile(file)) continue;
        if (targetFile && file.path !== targetFile.path) continue;

        // Processa tanto Reading View quanto Live Preview renderizado.
        const renderedAreas = container.querySelectorAll(
          ".markdown-preview-view, .markdown-reading-view, .markdown-rendered, .cm-preview-code-block, .cm-embed-block"
        );

        if (renderedAreas.length) {
          for (const area of renderedAreas) {
            linkBibleReferences(area, this.app);
          }
        } else {
          linkBibleReferences(container, this.app);
        }
      }
    } catch (error) {
      console.error("Indice Nights: falha ao reaplicar links bíblicos", error);
    }
  }
  scheduleScriptureLinkRefresh(file = null) {
    // O Obsidian pode renderizar a mesma nota em etapas. Repetimos poucas vezes;
    // a rotina é idempotente porque referências já dentro de <a> são ignoradas.
    for (const delay of [40, 180, 500, 1100]) {
      window.setTimeout(() => {
        this.refreshScriptureLinksInOpenTranscripts(file);
      }, delay);
    }
  }
  async saveSettings() {
    await this.saveData({ ...this.settings, deviceSelections: this.selectionData });
  }
  async loadSettings() {
    var _a;
    const saved = await this.loadData();
    const legacyCategories = saved == null ? void 0 : saved.jwCategorySettings;
    const savedSelections = saved == null ? void 0 : saved.deviceSelections;
    this.selectionData = typeof savedSelections === "object" && savedSelections !== null ? { ...savedSelections } : {};
    const categorySettings = (_a = saved == null ? void 0 : saved.categorySettings) != null ? _a : typeof legacyCategories === "object" && legacyCategories !== null ? legacyCategories : DEFAULT_SETTINGS.categorySettings;
    if (categorySettings?.["discover:studio-news"]?.folder === "Discursos/Boletim Mensal") {
      categorySettings["discover:studio-news"] = { ...categorySettings["discover:studio-news"], folder: "Discursos/Boletim do Corpo Governante" };
    }
    if (categorySettings?.["discover:series-treasures"]?.folder === "Discursos/Séries/À procura de tesouros") {
      categorySettings["discover:series-treasures"] = { ...categorySettings["discover:series-treasures"], folder: "Discursos/Séries/Busque por Tesouros" };
    }
    if (categorySettings?.["discover:series-faith"]?.folder === "Discursos/Séries/Exemplos de fé") {
      categorySettings["discover:series-faith"] = { ...categorySettings["discover:series-faith"], folder: "Discursos/Séries/Imite a Sua Fé" };
    }
    const marriageFolder = categorySettings?.["discover:series-marriage"]?.folder;
    if (!marriageFolder || marriageFolder === "Discursos/Séries/Para ter um casamento feliz" || marriageFolder === "Discursos/Series/Para ter um casamento feliz") {
      const currentMarriage = categorySettings?.["discover:series-marriage"] ?? { enabled: false, folder: "" };
      categorySettings["discover:series-marriage"] = { ...currentMarriage, folder: "Discursos/Séries/Como ser feliz no casamento" };
    }
    delete categorySettings["discover:series-lessons"];
    const seriesKeys = [
      "discover:series-bible-intros",
      "discover:series-treasures",
      "discover:series-iron",
      "discover:series-faith",
      "discover:series-learn-from-them",
      "discover:series-marriage"
    ];
    const shouldCompleteSeries = seriesKeys.some((key) => categorySettings?.[key]?.enabled);
    if (shouldCompleteSeries) {
      for (const key of seriesKeys) {
        const current = categorySettings?.[key] ?? { enabled: false, folder: "" };
        categorySettings[key] = { ...current, enabled: true };
      }
    }
    this.settings = { ...DEFAULT_SETTINGS, ...saved != null ? saved : {}, categorySettings, seriesFoldersCompletedV0817: true };
    if (shouldCompleteSeries || !(saved == null ? void 0 : saved.seriesFoldersCompletedV0817)) {
      await this.saveData({ ...this.settings, deviceSelections: this.selectionData });
    }
  }
};
