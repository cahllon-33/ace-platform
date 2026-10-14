import type { LayoutTeam } from "@/lib/tournament-layout";

export type BracketSlot =
  | { kind: "team"; team: LayoutTeam }
  | { kind: "open" }
  | { kind: "bye" };

export type WingMatch = {
  id: string;
  round: string;
  index: number;
  slots: [BracketSlot, BracketSlot];
};

export const WING_ROUNDS = [
  { id: "r128", matches: 32, span: 1 },
  { id: "r64", matches: 16, span: 2 },
  { id: "r32", matches: 8, span: 4 },
  { id: "r16", matches: 4, span: 8 },
  { id: "qf", matches: 2, span: 16 },
  { id: "sf", matches: 1, span: 32 },
] as const;

export type WingRoundId = (typeof WING_ROUNDS)[number]["id"];

const SIDE_MATCHES = 32;
const BYE_MATCHES_PER_SIDE = 14;
const COMPETITOR_SLOTS = 100;
const BYE_SLOTS = 28;

export const BRACKET_CAPACITY = {
  competitors: COMPETITOR_SLOTS,
  byes: BYE_SLOTS,
} as const;

function takeTeam(pool: LayoutTeam[], cursor: { n: number }): BracketSlot {
  const team = pool[cursor.n];
  if (!team) return { kind: "open" };
  cursor.n += 1;
  return { kind: "team", team };
}

function firstRound(pool: LayoutTeam[], wing: "left" | "right"): WingMatch[] {
  const cursor = { n: 0 };
  return Array.from({ length: SIDE_MATCHES }, (_, index) => {
    const home = takeTeam(pool, cursor);
    const away: BracketSlot =
      index < BYE_MATCHES_PER_SIDE ? { kind: "bye" } : takeTeam(pool, cursor);
    return {
      id: `${wing}-r128-${index}`,
      round: "r128",
      index,
      slots: [home, away],
    };
  });
}

/** A bye sends its paired clan into round 2. Unplayed matches stay open. */
function advanced(match: WingMatch): BracketSlot {
  const [home, away] = match.slots;
  if (away.kind === "bye") return home.kind === "team" ? home : { kind: "open" };
  if (home.kind === "bye") return away.kind === "team" ? away : { kind: "open" };
  return { kind: "open" };
}

function nextRound(roundId: string, wing: "left" | "right", previous: WingMatch[]): WingMatch[] {
  return Array.from({ length: previous.length / 2 }, (_, index) => ({
    id: `${wing}-${roundId}-${index}`,
    round: roundId,
    index,
    slots: [advanced(previous[index * 2]!), advanced(previous[index * 2 + 1]!)] as [
      BracketSlot,
      BracketSlot,
    ],
  }));
}

function descend(first: WingMatch[], wing: "left" | "right"): Record<WingRoundId, WingMatch[]> {
  const rounds = { r128: first } as Record<WingRoundId, WingMatch[]>;
  let current = first;
  for (const round of WING_ROUNDS.slice(1)) {
    current = nextRound(round.id, wing, current);
    rounds[round.id] = current;
  }
  return rounds;
}

export function buildDualWing(teams: LayoutTeam[]) {
  const stored = teams.slice(0, COMPETITOR_SLOTS);
  return {
    left: descend(firstRound(stored.slice(0, 50), "left"), "left"),
    right: descend(firstRound(stored.slice(50), "right"), "right"),
    stored: stored.length,
  };
}
