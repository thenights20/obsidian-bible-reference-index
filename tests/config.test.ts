import { describe, expect, it } from "vitest";
import { DEFAULT_SETTINGS, parseBlockConfig } from "../src/config";

describe("parseBlockConfig", () => {
  it("uses defaults for an empty block", () => {
    expect(parseBlockConfig("", DEFAULT_SETTINGS)).toEqual({
      folder: "Discursos",
      property: "textos",
      pageSize: 75,
      title: "Índice de Textos Bíblicos",
      showTitle: false
    });
  });

  it("accepts Portuguese configuration", () => {
    expect(parseBlockConfig("pasta: Acervo/Discursos\npropriedade: referencias\nquantidade: 40\ntitulo: Minha Bíblia", DEFAULT_SETTINGS)).toEqual({
      folder: "Acervo/Discursos",
      property: "referencias",
      pageSize: 40,
      title: "Minha Bíblia",
      showTitle: false
    });
  });

  it("can show the internal title when explicitly requested", () => {
    expect(parseBlockConfig("exibir-titulo: sim", DEFAULT_SETTINGS).showTitle).toBe(true);
    expect(parseBlockConfig("exibir-titulo: não", DEFAULT_SETTINGS).showTitle).toBe(false);
  });
});
