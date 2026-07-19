import type { BibleBook } from "./types";

const names: ReadonlyArray<readonly [string, readonly string[]]> = [
  ["Gênesis", ["Genesis", "Gên"]],
  ["Êxodo", ["Exodo", "Êxo", "Êx"]],
  ["Levítico", ["Levitico", "Leví", "Lev"]],
  ["Números", ["Numeros", "Núm"]],
  ["Deuteronômio", ["Deuteronomio", "Deut"]],
  ["Josué", ["Josue", "Jos"]],
  ["Juízes", ["Juizes", "Juí"]],
  ["Rute", ["Rut"]],
  ["1 Samuel", ["1Samuel", "1 Sam"]],
  ["2 Samuel", ["2Samuel", "2 Sam"]],
  ["1 Reis", ["1Reis"]],
  ["2 Reis", ["2Reis"]],
  ["1 Crônicas", ["1 Cronicas", "1Crônicas", "1Cronicas", "1 Crô"]],
  ["2 Crônicas", ["2 Cronicas", "2Crônicas", "2Cronicas", "2 Crô"]],
  ["Esdras", ["Esd"]],
  ["Neemias", ["Nee"]],
  ["Ester", ["Est"]],
  ["Jó", ["Jo"]],
  ["Salmos", ["Salmo", "Sal"]],
  ["Provérbios", ["Proverbios", "Pro"]],
  ["Eclesiastes", ["Ecl"]],
  ["Cântico dos Cânticos", ["Cantico dos Canticos", "Cântico de Salomão", "Cantico de Salomao", "Cântico", "Cantico", "Cân"]],
  ["Isaías", ["Isaias", "Isa"]],
  ["Jeremias", ["Jer"]],
  ["Lamentações", ["Lamentacoes", "Lam"]],
  ["Ezequiel", ["Eze"]],
  ["Daniel", ["Dan"]],
  ["Oseias", ["Oséias", "Ose"]],
  ["Joel", ["Joe"]],
  ["Amós", ["Amos"]],
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
  ["João", ["Joao"]],
  ["Atos dos Apóstolos", ["Atos dos Apostolos", "Atos", "At"]],
  ["Romanos", ["Rom"]],
  ["1 Coríntios", ["1 Corintios", "1Coríntios", "1Corintios", "1 Cor"]],
  ["2 Coríntios", ["2 Corintios", "2Coríntios", "2Corintios", "2 Cor"]],
  ["Gálatas", ["Galatas", "Gál"]],
  ["Efésios", ["Efesios", "Efé"]],
  ["Filipenses", ["Fil"]],
  ["Colossenses", ["Col"]],
  ["1 Tessalonicenses", ["1Tessalonicenses", "1 Tes"]],
  ["2 Tessalonicenses", ["2Tessalonicenses", "2 Tes"]],
  ["1 Timóteo", ["1 Timoteo", "1Timóteo", "1Timoteo", "1 Tim"]],
  ["2 Timóteo", ["2 Timoteo", "2Timóteo", "2Timoteo", "2 Tim"]],
  ["Tito", ["Tit"]],
  ["Filêmon", ["Filemon", "Filêm", "Flm"]],
  ["Hebreus", ["Heb"]],
  ["Tiago", ["Tia"]],
  ["1 Pedro", ["1Pedro", "1 Ped"]],
  ["2 Pedro", ["2Pedro", "2 Ped"]],
  ["1 João", ["1 Joao", "1João", "1Joao"]],
  ["2 João", ["2 Joao", "2João", "2Joao"]],
  ["3 João", ["3 Joao", "3João", "3Joao"]],
  ["Judas", ["Jud"]],
  ["Apocalipse", ["Revelação", "Revelacao", "Apo"]]
];

export const BIBLE_BOOKS: readonly BibleBook[] = names.map(([name, aliases], order) => ({
  name,
  order,
  aliases: [name, ...aliases]
}));

export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/\s+/g, " ")
    .trim();
}

export const BOOK_BY_NORMALIZED_NAME: ReadonlyMap<string, BibleBook> = new Map(
  BIBLE_BOOKS.flatMap((book) => book.aliases.map((alias) => [normalizeText(alias), book] as const))
);
