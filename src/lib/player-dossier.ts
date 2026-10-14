import type { LayoutPlayer } from "@/lib/tournament-layout";

export type RatingPoint = {
  match: number;
  rating: number;
};

export type CombatMatrix = {
  kills: number;
  deaths: number;
  kd: string;
  headshots: number;
  headshotPct: string;
  knifeKills: number;
};

export type SignatureWeapon = {
  name: "AK-47" | "AWP" | "M4A1-S";
  accuracy: string;
  kills: string;
};

function seedFrom(value: string) {
  return value.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function buildCombatMatrix(player: LayoutPlayer): CombatMatrix {
  const n = seedFrom(player.username);
  const deaths = 620 + (n % 180);
  const kills = Math.round(deaths * 1.42);
  const headshots = Math.round(kills * 0.47);
  return {
    kills,
    deaths,
    kd: player.kd,
    headshots,
    headshotPct: player.headshot,
    knifeKills: 8 + (n % 17),
  };
}

export function buildRatingTrend(player: LayoutPlayer): RatingPoint[] {
  const n = seedFrom(player.username);
  const start = 980 + (n % 40);
  return Array.from({ length: 8 }, (_, index) => ({
    match: index + 1,
    rating: start + index * (28 + (n % 9)) + ((n + index * 13) % 18),
  }));
}

export function buildSignatureWeapon(player: LayoutPlayer): SignatureWeapon {
  const role = player.role.toLowerCase();
  const n = seedFrom(player.username);
  const name = role.includes("apex") || role.includes("awp")
    ? "AWP"
    : role.includes("support") || role.includes("anchor")
      ? "M4A1-S"
      : "AK-47";
  return {
    name,
    accuracy: `${(38 + (n % 12) + (n % 10) / 10).toFixed(1)}%`,
    kills: (1600 + (n % 900)).toLocaleString("en-US"),
  };
}
