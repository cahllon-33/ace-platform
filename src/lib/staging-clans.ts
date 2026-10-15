import { PLACEHOLDER_GEAR, type LayoutTeam } from "@/lib/tournament-layout";

const FEATURED = [
  "NEXsus Clan",
  "Shadow Legion",
  "Vault 1 Esports",
  "Northline Prime",
  "Alpha Tactical",
  "Viper Squad",
  "Sable Matrix",
  "Titan Force",
] as const;

const STEMS = [
  "Iron",
  "Carbon",
  "Helix",
  "Obsidian",
  "Ember",
  "Frost",
  "Nova",
  "Vector",
  "Pulse",
  "Orbit",
  "Quartz",
  "Harbor",
  "Ridge",
  "Kepler",
  "Prism",
  "Echo",
  "Forge",
  "Citadel",
  "Bastion",
  "Meridian",
  "Atlas",
  "Orion",
  "Kinetic",
] as const;

const FORMS = ["Clan", "Legion", "Esports", "Prime"] as const;

const ROLES = ["Apex", "Anchor", "Entry", "Support", "Lurk"] as const;

export const STAGING_CLAN_NAMES: string[] = [
  ...FEATURED,
  ...STEMS.flatMap((stem) => FORMS.map((form) => `${stem} ${form}`)),
];

function tagFor(name: string) {
  const letters = name
    .split(/\s+/)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase();
  return (letters || "AC").slice(0, 2);
}

function stagingTeam(index: number, name: string): LayoutTeam {
  const tag = tagFor(name);
  return {
    id: `staging-clan-${index}`,
    tag,
    name,
    score: 0,
    matchesPlayed: 0,
    winRate: "0%",
    streak: 0,
    sample: true,
    players: ROLES.map((role, slot) => ({
      id: `staging-clan-${index}-p${slot}`,
      username: `staging-${index}-${role}`.toLowerCase(),
      name: `${tag} ${role}`,
      role,
      tag,
      level: 1 + ((index + slot) % 10),
      matches: 0,
      winRate: "0%",
      kd: "0-0",
      headshot: "—",
      winStreak: 0,
      wins: 3 + ((index + slot) % 9),
      losses: 1 + ((index + slot * 2) % 6),
      rating: 1200,
      gear: PLACEHOLDER_GEAR,
    })),
  };
}

if (STAGING_CLAN_NAMES.length !== 100 || new Set(STAGING_CLAN_NAMES).size !== 100) {
  throw new Error(`Staging clan list must contain 100 unique names. Found ${STAGING_CLAN_NAMES.length}.`);
}

export const STAGING_CLANS: LayoutTeam[] = STAGING_CLAN_NAMES.map((name, index) => stagingTeam(index, name));

export function findStagingPlayer(username: string): { player: LayoutTeam["players"][number]; team: LayoutTeam } | null {
  const slug = decodeURIComponent(username).trim().toLowerCase();
  if (!slug) return null;
  for (const team of STAGING_CLANS) {
    for (const player of team.players) {
      if (player.username === slug) return { player, team };
    }
  }
  return null;
}

export function bracketField(stored: LayoutTeam[]): LayoutTeam[] {
  const field = stored.slice(0, 100);
  const used = new Set(field.map((team) => team.name));
  for (const team of STAGING_CLANS) {
    if (field.length >= 100) break;
    if (used.has(team.name)) continue;
    field.push(team);
    used.add(team.name);
  }
  return field;
}
