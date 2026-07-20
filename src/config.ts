import type { BlockConfig, PluginSettings } from "./types";

export const DEFAULT_SETTINGS: PluginSettings = {
  defaultFolder: "Discursos",
  defaultProperty: "textos",
  pageSize: 75,
  remoteDriveUrl: "",
  remoteDriveFolder: "",
  categorySettings: {}
};

function cleanPath(value: string): string {
  return value.trim().replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");
}

function parseBoolean(value: string | undefined, fallback: boolean): boolean {
  if (value == null || value.trim() === "") return fallback;
  return ["1", "sim", "true", "yes", "on"].includes(value.trim().toLocaleLowerCase("pt-BR"));
}

export function parseBlockConfig(source: string, settings: PluginSettings): BlockConfig {
  const values = new Map<string, string>();
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^\s*([\wÀ-ÿ-]+)\s*:\s*(.*?)\s*$/u);
    if (match?.[1] && match[2] != null) values.set(match[1].toLocaleLowerCase("pt-BR"), match[2]);
  }

  const requestedPageSize = Number.parseInt(values.get("quantidade") ?? values.get("page-size") ?? "", 10);
  const pageSize = Number.isFinite(requestedPageSize)
    ? Math.min(250, Math.max(20, requestedPageSize))
    : settings.pageSize;

  return {
    folder: cleanPath(values.get("pasta") || settings.defaultFolder) || DEFAULT_SETTINGS.defaultFolder,
    property: (values.get("propriedade") || settings.defaultProperty).trim() || DEFAULT_SETTINGS.defaultProperty,
    pageSize,
    title: (values.get("titulo") || "Índice de Textos Bíblicos").trim(),
    showTitle: parseBoolean(values.get("exibir-titulo") ?? values.get("show-title"), false)
  };
}
