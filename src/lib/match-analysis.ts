/** Shape the extended match analysis UI accepts once demo parsing exists. */
export type MatchAnalysisData = {
  map: string;
  /** Death positions, normalised 0..1 on the radar image. */
  deaths: { x: number; y: number }[];
  headshotPct: number;
  rounds: { round: number; damage: number }[];
};

export const ANALYSIS_SAMPLE_MAP = "/images/map-mirage.jpg";
export const ANALYSIS_SAMPLE_ROUNDS = 24;
