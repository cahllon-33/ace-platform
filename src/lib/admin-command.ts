export type AdminTier = "Free" | "Plus" | "Premium";
export type AdminSecurity = "Active" | "Suspended" | "Banned";

export type AdminPlayerRow = {
  id: string;
  initials: string;
  username: string;
  email: string;
  steamId: string;
  rank: number;
  rating: number;
  tier: AdminTier;
  security: AdminSecurity;
  machineHash: string;
  registeredOn: string;
  region: string;
  latencyMs: number;
  /** Emblem art per existing rules (Premium plan => illustrated tier art unless opted out). */
  art?: "standard" | "premium";
  /** Recorded wins/losses. null = no recorded data (staging/preview rows). */
  wins?: number | null;
  losses?: number | null;
  /** Stored Steam avatar URL, or null. */
  avatarUrl?: string | null;
};

export type AdminTicket = {
  id: string;
  reporter: string;
  suspect: string;
  violation: string;
};

export const ADMIN_PLAYERS: AdminPlayerRow[] = [
  {
    id: "row-01",
    initials: "UX",
    username: "User_X",
    email: "layout.user.x@example.invalid",
    steamId: "76561198000011001",
    rank: 9,
    rating: 1840,
    tier: "Premium",
    security: "Active",
    machineHash: "LAYOUT-SAMPLE-01",
    registeredOn: "2026-08-02",
    region: "EU West",
    latencyMs: 0,
    art: "premium",
    wins: null,
    losses: null,
    avatarUrl: null,
  },
  {
    id: "row-02",
    initials: "KA",
    username: "Kalibra_02",
    email: "layout.kalibra@example.invalid",
    steamId: "76561198000011002",
    rank: 6,
    rating: 1522,
    tier: "Plus",
    security: "Active",
    machineHash: "LAYOUT-SAMPLE-02",
    registeredOn: "2026-08-11",
    region: "EU North",
    latencyMs: 0,
    art: "standard",
    wins: null,
    losses: null,
    avatarUrl: null,
  },
  {
    id: "row-03",
    initials: "NV",
    username: "Nova_Anchor",
    email: "layout.nova@example.invalid",
    steamId: "76561198000011003",
    rank: 4,
    rating: 1310,
    tier: "Free",
    security: "Suspended",
    machineHash: "LAYOUT-SAMPLE-03",
    registeredOn: "2026-09-01",
    region: "US East",
    latencyMs: 0,
    art: "standard",
    wins: null,
    losses: null,
    avatarUrl: null,
  },
  {
    id: "row-04",
    initials: "RS",
    username: "Rook_Sweep",
    email: "layout.rook@example.invalid",
    steamId: "76561198000011004",
    rank: 1,
    rating: 990,
    tier: "Free",
    security: "Banned",
    machineHash: "LAYOUT-SAMPLE-04",
    registeredOn: "2026-09-04",
    region: "EU West",
    latencyMs: 0,
    art: "standard",
    wins: null,
    losses: null,
    avatarUrl: null,
  },
  {
    id: "row-05",
    initials: "GL",
    username: "Goldline_05",
    email: "layout.goldline@example.invalid",
    steamId: "76561198000011005",
    rank: 7,
    rating: 1674,
    tier: "Plus",
    security: "Active",
    machineHash: "LAYOUT-SAMPLE-05",
    registeredOn: "2026-09-18",
    region: "Asia",
    latencyMs: 0,
    art: "standard",
    wins: null,
    losses: null,
    avatarUrl: null,
  },
  {
    id: "row-06",
    initials: "VX",
    username: "Vector_Lurk",
    email: "layout.vector@example.invalid",
    steamId: "76561198000011006",
    rank: 5,
    rating: 1412,
    tier: "Plus",
    security: "Active",
    machineHash: "LAYOUT-SAMPLE-06",
    registeredOn: "2026-09-22",
    region: "EU West",
    latencyMs: 0,
    art: "standard",
    wins: null,
    losses: null,
    avatarUrl: null,
  },
];

export const ADMIN_TICKETS: AdminTicket[] = [
  {
    id: "9821",
    reporter: "Goldline_05",
    suspect: "User_X",
    violation: "Suspected Wallhack/Aimbot",
  },
  {
    id: "9822",
    reporter: "Vector_Lurk",
    suspect: "Kalibra_02",
    violation: "Unverified movement report",
  },
  {
    id: "9823",
    reporter: "Rook_Sweep",
    suspect: "Nova_Anchor",
    violation: "Spectator complaint — no demo attached",
  },
  {
    id: "9824",
    reporter: "Kalibra_02",
    suspect: "Rook_Sweep",
    violation: "Macro timing complaint",
  },
  {
    id: "9825",
    reporter: "User_X",
    suspect: "Vector_Lurk",
    violation: "Smoke-clip path report",
  },
  {
    id: "9826",
    reporter: "Nova_Anchor",
    suspect: "Goldline_05",
    violation: "Spectator flick complaint",
  },
];

export const ADMIN_PIPELINE_CENTS = 0;

export function formatPipelineUsd(cents: number) {
  return `$${(cents / 100).toFixed(2)} USD`;
}

export function cloneAdminPlayers() {
  return ADMIN_PLAYERS.map((player) => ({ ...player }));
}

export function findAdminSeed(id: string) {
  return ADMIN_PLAYERS.find((player) => player.id === id) ?? null;
}
