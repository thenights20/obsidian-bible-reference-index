import { normalizeText } from "./books";
import type { IndexedNote, ReferenceEntry } from "./types";

export interface VisibleReference {
  readonly reference: ReferenceEntry;
  readonly notes: readonly IndexedNote[];
}

export function searchReferences(
  references: readonly ReferenceEntry[],
  search: string
): VisibleReference[] {
  const query = normalizeText(search);
  if (!query) {
    return references.map((reference) => ({ reference, notes: [...reference.notes.values()] }));
  }

  const output: VisibleReference[] = [];
  for (const reference of references) {
    const referenceMatches = normalizeText(reference.display).includes(query);
    const notes = [...reference.notes.values()].filter((note) =>
      referenceMatches || normalizeText(`${note.section} ${note.title}`).includes(query)
    );
    if (notes.length > 0) output.push({ reference, notes });
  }
  return output;
}
