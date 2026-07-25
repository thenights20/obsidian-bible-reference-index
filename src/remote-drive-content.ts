import { identificarOrador, nomeArquivoSeguro, synchronizeMiniIndex } from "./transcript";
import { extractReferences } from "./references";

export interface PublicDriveFolderLink {
  readonly folderId: string;
  readonly resourceKey: string | null;
}

export type PublicDriveEntryType = "file" | "folder" | "google-doc";

export interface PublicDriveEntry {
  readonly id: string;
  readonly name: string;
  readonly type: PublicDriveEntryType;
  readonly resourceKey: string | null;
}

export interface RemoteDriveTranscript {
  readonly id: string;
  readonly name: string;
  readonly type: Exclude<PublicDriveEntryType, "folder">;
  readonly resourceKey: string | null;
  readonly relativeFolder: string;
}

const DRIVE_ID = /^[A-Za-z0-9_-]{10,}$/;

function decodeHtml(value: string): string {
  const named: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "\""
  };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return named[code.toLocaleLowerCase("pt-BR")] ?? entity;
  });
}

function plainText(html: string): string {
  return decodeHtml(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function driveIdFromPath(pathname: string, pattern: RegExp): string | null {
  const id = pattern.exec(pathname)?.[1] ?? null;
  return id && DRIVE_ID.test(id) ? id : null;
}

export function parsePublicDriveFolderLink(value: string): PublicDriveFolderLink {
  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error("Cole um link válido de uma pasta pública do Google Drive.");
  }
  if (url.protocol !== "https:" || url.hostname !== "drive.google.com") {
    throw new Error("O link precisa começar com https://drive.google.com/.");
  }
  const folderId = driveIdFromPath(url.pathname, /\/drive\/(?:u\/\d+\/)?folders\/([A-Za-z0-9_-]+)/) ??
    driveIdFromPath(url.pathname, /\/folders\/([A-Za-z0-9_-]+)/);
  if (!folderId) throw new Error("Este não parece ser um link de pasta do Google Drive.");
  return {
    folderId,
    resourceKey: url.searchParams.get("resourcekey")
  };
}

function classifyLink(rawHref: string): Omit<PublicDriveEntry, "name"> | null {
  let url: URL;
  try {
    url = new URL(decodeHtml(rawHref), "https://drive.google.com");
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  const resourceKey = url.searchParams.get("resourcekey");

  if (url.hostname === "drive.google.com") {
    const folderId = driveIdFromPath(url.pathname, /\/drive\/(?:u\/\d+\/)?folders\/([A-Za-z0-9_-]+)/) ??
      driveIdFromPath(url.pathname, /\/folders\/([A-Za-z0-9_-]+)/);
    if (folderId) return { id: folderId, type: "folder", resourceKey };

    const fileId = driveIdFromPath(url.pathname, /\/file\/d\/([A-Za-z0-9_-]+)/) ??
      (url.pathname === "/open" || url.pathname === "/uc" ? url.searchParams.get("id") : null);
    if (fileId && DRIVE_ID.test(fileId)) return { id: fileId, type: "file", resourceKey };
  }

  if (url.hostname === "docs.google.com") {
    const documentId = driveIdFromPath(url.pathname, /\/document\/d\/([A-Za-z0-9_-]+)/);
    if (documentId) return { id: documentId, type: "google-doc", resourceKey };
  }
  return null;
}

export function parsePublicDriveFolderHtml(html: string): PublicDriveEntry[] {
  const entries = new Map<string, PublicDriveEntry>();
  const anchorPattern = /<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorPattern)) {
    const classified = classifyLink(match[2] ?? "");
    const name = plainText(match[3] ?? "");
    if (!classified || !name) continue;
    const key = `${classified.type}:${classified.id}`;
    if (!entries.has(key)) entries.set(key, { ...classified, name });
  }
  return [...entries.values()];
}

export function isSupportedRemoteTranscript(entry: PublicDriveEntry): boolean {
  if (entry.type === "google-doc") return true;
  return entry.type === "file" && /\.(?:txt|md|markdown)$/i.test(entry.name);
}

function withoutSourceFrontmatter(content: string): string {
  return content
    .replace(/^\uFEFF/, "")
    .replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, "")
    .replace(/\r\n?/g, "\n")
    .trim();
}

function yamlString(value: string): string {
  return JSON.stringify(value);
}

export function remoteDriveOriginalUrl(file: Pick<RemoteDriveTranscript, "id" | "type" | "resourceKey">): string {
  const base = file.type === "google-doc"
    ? `https://docs.google.com/document/d/${file.id}/edit`
    : `https://drive.google.com/file/d/${file.id}/view`;
  return file.resourceKey ? `${base}?resourcekey=${encodeURIComponent(file.resourceKey)}` : base;
}

export function createRemoteTranscriptNote(file: RemoteDriveTranscript, rawContent: string): string {
  const originalTitle = file.name.replace(/\.(?:txt|md|markdown)$/i, "").trim();
  const title = nomeArquivoSeguro(originalTitle);
  const speaker = identificarOrador(originalTitle);
  const body = withoutSourceFrontmatter(rawContent);
  const references = extractReferences(body);
  const yaml = [
    "---",
    `id_remoto: ${yamlString(`google-drive:${file.id}`)}`,
    ...(speaker ? [`orador: ${yamlString(speaker)}`] : []),
    ...(references.length
      ? ["textos:", ...references.map((reference) => `  - ${yamlString(reference.display)}`)]
      : ["textos: []"]),
    "---"
  ];
  const hasHeading = /^#\s+\S/m.test(body);
  const base = [
    ...yaml,
    "",
    ...(hasHeading ? [] : [`# ${title}`, ""]),
    `[↗ Abrir arquivo original no Google Drive](${remoteDriveOriginalUrl(file)})`,
    "",
    body
  ].join("\n").trimEnd() + "\n";
  return synchronizeMiniIndex(base).content;
}
