export type BracketSlot = {
  index: number;
  teamId: string | null;
};

export type BracketMatch = {
  round: number;
  slot: number;
  teamAId: string | null;
  teamBId: string | null;
  state: "PENDING" | "BYE";
  winnerTeamId: string | null;
};

export type BracketPlan = {
  bracketSize: number;
  teamCount: number;
  byeCount: number;
  firstRoundPlayed: number;
  totalPlayedMatches: number;
  slots: BracketSlot[];
  matches: BracketMatch[];
};

const MAX_TEAMS = 100;

function nextPowerOfTwo(value: number): number {
  let size = 1;
  while (size < value) {
    size *= 2;
  }
  return size;
}

/** Standard single-elim seed pairing for a power-of-two field. */
export function seedOrder(bracketSize: number): number[] {
  let seeds = [1];
  while (seeds.length < bracketSize) {
    const next: number[] = [];
    const roundSize = seeds.length * 2;
    for (const seed of seeds) {
      next.push(seed);
      next.push(roundSize + 1 - seed);
    }
    seeds = next;
  }
  return seeds;
}

/**
 * 100 teams use a 128-slot tree: 28 byes, 36 opening matches,
 * then 63 further matches = 99 played matches to a champion.
 */
export function buildSingleEliminationBracket(teamIds: string[]): BracketPlan {
  if (teamIds.length < 2) {
    throw new Error("A tournament needs at least two teams.");
  }
  if (teamIds.length > MAX_TEAMS) {
    throw new Error(`A.C.E. brackets support at most ${MAX_TEAMS} teams.`);
  }

  const unique = new Set(teamIds);
  if (unique.size !== teamIds.length) {
    throw new Error("Each team may occupy only one bracket slot.");
  }

  const bracketSize = Math.max(2, nextPowerOfTwo(teamIds.length));
  const seeds = seedOrder(bracketSize);
  const slots: BracketSlot[] = seeds.map((seed, index) => ({
    index,
    teamId: seed <= teamIds.length ? teamIds[seed - 1] : null,
  }));

  const matches: BracketMatch[] = [];
  let round = 1;
  let roundSlots: Array<string | null> = slots.map((slot) => slot.teamId);

  while (roundSlots.length > 1) {
    const nextRound: Array<string | null> = [];
    for (let i = 0; i < roundSlots.length; i += 2) {
      const teamAId = roundSlots[i] ?? null;
      const teamBId = roundSlots[i + 1] ?? null;
      const slot = i / 2;
      const bothEmpty = !teamAId && !teamBId;
      const isStructuralBye = round === 1 && Boolean(teamAId) !== Boolean(teamBId);

      if (round === 1 && bothEmpty) {
        nextRound.push(null);
        continue;
      }

      if (isStructuralBye) {
        const winnerTeamId = teamAId ?? teamBId;
        matches.push({
          round,
          slot,
          teamAId,
          teamBId,
          state: "BYE",
          winnerTeamId,
        });
        nextRound.push(winnerTeamId);
      } else {
        matches.push({
          round,
          slot,
          teamAId,
          teamBId,
          state: "PENDING",
          winnerTeamId: null,
        });
        nextRound.push(null);
      }
    }
    roundSlots = nextRound;
    round += 1;
  }

  const byeCount = bracketSize - teamIds.length;
  const firstRoundPlayed = matches.filter((match) => match.round === 1 && match.state === "PENDING").length;
  const totalPlayedMatches = matches.filter((match) => match.state === "PENDING").length;

  return {
    bracketSize,
    teamCount: teamIds.length,
    byeCount,
    firstRoundPlayed,
    totalPlayedMatches,
    slots,
    matches,
  };
}

export function expectedPlayedMatches(teamCount: number): number {
  return teamCount - 1;
}
