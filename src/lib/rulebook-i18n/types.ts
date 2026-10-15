/** Translated rulebook text. Shapes mirror RULEBOOK / PENALTY_TABLE in `@/lib/rulebook` (same order). */
export type RulebookText = {
  /** Summary paragraph of section 16 (Penalties). */
  summary16: string;
  /** clauses[sectionIndex][clauseIndex] */
  clauses: string[][];
  /** [offence, first, repeat] per PENALTY_TABLE row. */
  penalties: [string, string, string][];
};
