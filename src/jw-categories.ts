import type { JwCatalogItem } from "./types";

export interface JwSupportedCategory extends JwCatalogItem {
  readonly defaultFolder: string;
}

export const JW_SUPPORTED_CATEGORIES: readonly JwSupportedCategory[] = [
  {
    key: "StudioTalks",
    name: "Discursos",
    type: "ondemand",
    parentKey: "VODStudio",
    path: ["De Nosso Estúdio", "Discursos"],
    defaultFolder: "Discursos/De Nosso Estúdio"
  },
  {
    key: "VODPgmEvtMorningWorship",
    name: "Adorações Matinais",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Adorações Matinais"],
    defaultFolder: "Discursos/Adorações Matinais"
  },
  {
    key: "VODPgmEvtGilead",
    name: "Formaturas de Gileade",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Formaturas de Gileade"],
    defaultFolder: "Discursos/Formaturas de Gileade"
  },
  {
    key: "VODPgmEvtAnnMtg",
    name: "Reuniões Anuais",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Reuniões Anuais"],
    defaultFolder: "Discursos/Reuniões Anuais"
  },
  {
    key: "2020Convention",
    name: "Congresso de 2020",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Congressos", "Congresso de 2020"],
    defaultFolder: "Discursos/Congressos/2020"
  },
  {
    key: "2021Convention",
    name: "Congresso de 2021",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Congressos", "Congresso de 2021"],
    defaultFolder: "Discursos/Congressos/2021"
  },
  {
    key: "2022Convention",
    name: "Congresso de 2022",
    type: "ondemand",
    parentKey: "VODProgramsEvents",
    path: ["Programas e Eventos", "Congressos", "Congresso de 2022"],
    defaultFolder: "Discursos/Congressos/2022"
  }
];
