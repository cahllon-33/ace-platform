export type ShieldStatus = "designed" | "in-development" | "coming-soon" | "live";

export type ShieldPillarId = "client" | "server" | "match" | "behaviour" | "identity";

export type ShieldPhaseId = "p1" | "p2" | "p3" | "p4" | "p5";

export type ShieldPillar = { id: ShieldPillarId; status: ShieldStatus };

export type ShieldPhase = { id: ShieldPhaseId; status: ShieldStatus; pillars: ShieldPillarId[] };

/** A raw integrity signal produced by a client, server or analysis job. */
export type ShieldSignal = {
  matchId: string;
  steamId: string;
  source: ShieldPillarId;
  kind: string;
  /** 0..1 confidence from the producer. */
  score: number;
  observedAt: string;
};

/** Outcome after human review. Automated signals never ban on their own. */
export type ShieldVerdict = {
  steamId: string;
  decision: "clear" | "warning" | "suspension" | "ban";
  reviewedBy: string;
  rulebookSection: string;
  decidedAt: string;
  appealable: boolean;
};
