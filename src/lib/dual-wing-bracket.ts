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
const COMPETITOR_SLOTS = 100;
const BYE_SLOTS = 28;

export const BRACKET_CAPACITY = {
  competitors: COMPETITOR_SLOTS,
  byes: BYE_SLOTS,
} as const;

/** Standard seed order for a power-of-two draw: 1 v N, and every block holds a balanced spread of seeds. */
export function seedOrder(size: number): number[] {
  let order = [1];
  while (order.length < size) {
    const n = order.length * 2;
    order = order.flatMap((seed) => [seed, n + 1 - seed]);
  }
  return order;
}

const WING_SLOTS = SIDE_MATCHES * 2;
const WING_COMPETITORS = COMPETITOR_SLOTS / 2;
const WING_SEEDS = seedOrder(WING_SLOTS);

/**
 * 50 competitor slots per wing in a 64-slot tree. Seeds 51-64 are byes, so the 14 byes fall
 * one per match against seeds 1-14 and spread evenly through every quarter of the wing.
 * Both wings use the identical pattern, so the halves mirror each other exactly.
 */
function firstRound(pool: LayoutTeam[], wing: "left" | "right"): WingMatch[] {
  const slot = (seed: number): BracketSlot => {
    if (seed > WING_COMPETITORS) return { kind: "bye" };
    const team = pool[seed - 1];
    return team ? { kind: "team", team } : { kind: "open" };
  };
  return Array.from({ length: SIDE_MATCHES }, (_, index) => ({
    id: `${wing}-r128-${index}`,
    round: "r128",
    index,
    slots: [slot(WING_SEEDS[index * 2]!), slot(WING_SEEDS[index * 2 + 1]!)] as [BracketSlot, BracketSlot],
  }));
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
    // Alternate seeds between wings (1→left, 2→right, …) so both halves stay equally strong.
    left: descend(firstRound(stored.filter((_, i) => i % 2 === 0), "left"), "left"),
    right: descend(firstRound(stored.filter((_, i) => i % 2 === 1), "right"), "right"),
    stored: stored.length,
  };
}
