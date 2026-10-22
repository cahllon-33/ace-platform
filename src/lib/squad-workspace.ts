export const SQUAD_ROLES = [
  "AWPer",
  "Entry Fragger",
  "Lurker",
  "IGL",
  "Support",
] as const;

export type SquadRole = (typeof SQUAD_ROLES)[number];

export const SQUAD_ROLE_KEYS = {
  AWPer: "awper",
  "Entry Fragger": "entryFragger",
  Lurker: "lurker",
  IGL: "igl",
  Support: "support",
} as const satisfies Record<SquadRole, string>;

export type SquadSlotView = {
  key: string;
  filled: boolean;
  username: string;
  rating: number;
  role: SquadRole;
  avatarUrl: string | null;
  sample: boolean;
};

export type FreeAgentView = {
  id: string;
  username: string;
  rankLevel: number;
  rankLabel: string;
  kd: string;
  rating: number;
  role: SquadRole;
};

export const SQUAD_DISCLOSURE =
  "A.C.E SQUAD SYSTEM NOTICE: All clan rosters, player profiles, and telemetry stats displayed on this page are conceptual pre-registration preview layouts only. Anti-cheat badges are layout samples — not a live check. No tournament compliance is verified here.";

export const LAYOUT_SLOTS: SquadSlotView[] = [
  {
    key: "awper",
    filled: true,
    username: "vlt-scope",
    rating: 1840,
    role: "AWPer",
    avatarUrl: null,
    sample: true,
  },
  {
    key: "entry",
    filled: true,
    username: "nvx-breach",
    rating: 1710,
    role: "Entry Fragger",
    avatarUrl: null,
    sample: true,
  },
  {
    key: "lurk",
    filled: true,
    username: "obx-lurk",
    rating: 1625,
    role: "Lurker",
    avatarUrl: null,
    sample: true,
  },
  {
    key: "igl",
    filled: true,
    username: "gld-call",
    rating: 1902,
    role: "IGL",
    avatarUrl: null,
    sample: true,
  },
  {
    key: "support",
    filled: true,
    username: "arc-util",
    rating: 1540,
    role: "Support",
    avatarUrl: null,
    sample: true,
  },
];

export const FREE_AGENTS: FreeAgentView[] = [
  {
    id: "fa-01",
    username: "kite-awp",
    rankLevel: 10,
    rankLabel: "Rank 10 · A.C.E Legend",
    kd: "1.42",
    rating: 1840,
    role: "AWPer",
  },
  {
    id: "fa-02",
    username: "zen-entry",
    rankLevel: 4,
    rankLabel: "Rank 4 · Specialist",
    kd: "1.18",
    rating: 1400,
    role: "Entry Fragger",
  },
  {
    id: "fa-03",
    username: "pyr-support",
    rankLevel: 1,
    rankLabel: "Rank 1 · Recruit",
    kd: "0.94",
    rating: 1200,
    role: "Support",
  },
];

export function padRosterSlots(
  members: {
    username: string;
    rating: number;
    avatarUrl: string | null;
  }[],
): SquadSlotView[] {
  return SQUAD_ROLES.map((role, index) => {
    const member = members[index];
    if (!member) {
      return {
        key: `open-${role}`,
        filled: false,
        username: "OPEN SLOT",
        rating: 1200,
        role,
        avatarUrl: null,
        sample: false,
      };
    }
    return {
      key: `${member.username}-${role}`,
      filled: true,
      username: member.username,
      rating: member.rating,
      role,
      avatarUrl: member.avatarUrl,
      sample: false,
    };
  });
}
