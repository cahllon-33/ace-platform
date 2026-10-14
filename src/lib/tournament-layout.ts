export type LayoutGear = {
  processor: string;
  gpu: string;
  mouse: string;
  dpi: string;
  keyboard: string;
  monitor: string;
  headset: string;
};

export type LayoutPlayer = {
  id: string;
  username: string;
  name: string;
  role: string;
  tag: string;
  level: number;
  matches: number;
  winRate: string;
  kd: string;
  headshot: string;
  winStreak: number;
  wins: number;
  losses: number;
  rating: number;
  gear: LayoutGear;
};

export type LayoutTeam = {
  id: string;
  tag: string;
  name: string;
  score: number;
  matchesPlayed: number;
  winRate: string;
  streak: number;
  /** Layout name used when PostgreSQL has no clan for this slot. */
  sample?: boolean;
  players: LayoutPlayer[];
};

const TAGS = ["NVX", "RBN", "GLD", "HX", "ARC", "VLT", "KITE", "OBX", "ZEN", "PYR"];
const NAMES = [
  "Northline",
  "Carbon Row",
  "Helix",
  "Goldwire",
  "Ash Circuit",
  "Vault",
  "Kite",
  "Obsidian",
  "Zenith",
  "Pyramid",
];

export const PLACEHOLDER_GEAR: LayoutGear = {
  processor: "Placeholder · CPU not collected",
  gpu: "Placeholder · GPU not collected",
  mouse: "Placeholder · mouse model not collected",
  dpi: "Placeholder · DPI not collected",
  keyboard: "Placeholder · not collected",
  monitor: "Placeholder · Hz not collected",
  headset: "Placeholder · not collected",
};

const ROLES = ["Apex", "Anchor", "Entry", "Support", "Lurk"] as const;

export const LAYOUT_SLOTS: { round: string; count: number }[] = [
  { round: "apex", count: 1 },
  { round: "gf", count: 1 },
  { round: "sf", count: 2 },
  { round: "qf", count: 4 },
  { round: "r32", count: 8 },
  { round: "r64", count: 10 },
  { round: "r128", count: 12 },
];

function seed(round: string, index: number) {
  return round.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) + index * 17;
}

export function playerUsername(tag: string, role: string, round: string, index: number) {
  return `${tag}-${role}-${round}-${index}`.toLowerCase().replace(/\s+/g, "-");
}

export const OPEN_SLOT: LayoutTeam = {
  id: "open-slot",
  tag: "—",
  name: "Open slot",
  score: 0,
  matchesPlayed: 0,
  winRate: "0%",
  streak: 0,
  players: [],
};

export function layoutTeam(round: string, index: number): LayoutTeam {
  const n = seed(round, index);
  const tag = TAGS[n % TAGS.length] ?? "ACE";
  const name = NAMES[n % NAMES.length] ?? "Open";
  const players: LayoutPlayer[] = Array.from({ length: 5 }, (_, slot) => {
    const role = ROLES[slot] ?? "Player";
    return {
      id: `${round}-${index}-p${slot + 1}`,
      username: playerUsername(tag, role, round, index),
      name: `${tag} ${role}`,
      role,
      tag,
      level: 1 + ((n + slot) % 10),
      matches: 124,
      winRate: "68%",
      kd: "1.42",
      headshot: "47%",
      winStreak: 8,
      wins: 0,
      losses: 0,
      rating: 1000,
      gear: PLACEHOLDER_GEAR,
    };
  });

  return {
    id: `${round}-${index}`,
    tag,
    name: `${name} ${index + 1}`,
    score: n % 14,
    matchesPlayed: 18 + (n % 36),
    winRate: `${52 + (n % 28)}%`,
    streak: 1 + (n % 7),
    players,
  };
}

export function findLayoutPlayer(username: string): { player: LayoutPlayer; team: LayoutTeam } | null {
  const slug = decodeURIComponent(username).trim().toLowerCase();
  if (!slug) return null;

  let fallback: { player: LayoutPlayer; team: LayoutTeam } | null = null;
  for (const slot of LAYOUT_SLOTS) {
    for (let index = 0; index < slot.count; index += 1) {
      const team = layoutTeam(slot.round, index);
      for (const player of team.players) {
        if (player.username === slug) {
          return { player, team };
        }
        const shortName = `${player.tag}-${player.role}`.toLowerCase().replace(/\s+/g, "-");
        if (!fallback && (shortName === slug || player.name.toLowerCase().replace(/\s+/g, "-") === slug)) {
          fallback = { player, team };
        }
      }
    }
  }
  return fallback;
}

export function allLayoutUsernames() {
  return LAYOUT_SLOTS.flatMap((slot) =>
    Array.from({ length: slot.count }, (_, index) =>
      layoutTeam(slot.round, index).players.map((player) => player.username),
    ).flat(),
  );
}
