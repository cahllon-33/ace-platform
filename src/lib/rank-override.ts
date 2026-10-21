import { RANK_TIERS, type RankDivision } from "@/lib/ranks";
import { rankLevelFromRp, rankProgress } from "@/lib/rank-progress";
import { RP_RULES } from "@/lib/rp-rules";
import { prestigeForRp } from "@/lib/prestige";

/**
 * Admin rank override. The override writes the stored RP (the ONE rank source), so every page that reads
 * RP — dashboard, leaderboard, profile, auth bar, rosters — shows the same rank. The engine-calculated RP is
 * kept in rankOverrideBaseRp so "reset to calculated" can restore it.
 */
export type OverrideTarget =
  | { kind: "rp"; rp: number }
  | { kind: "division"; level: number; division: RankDivision };

export type OverrideArt = "keep" | "standard" | "premium" | "auto";

/** RP floor of a tier/division, using the same division bands as rankProgress. */
export function divisionFloorRp(level: number, division: RankDivision): number {
  const tier = RANK_TIERS.find((t) => t.level === level);
  if (!tier) throw new Error("bad_level");
  const next = RANK_TIERS.find((t) => t.level === level + 1);
  const lo = Math.max(tier.minRating, RP_RULES.floor);
  const hi = next ? next.minRating : RP_RULES.ceiling;
  const span = hi - lo;
  return division === "III" ? lo : division === "II" ? lo + Math.round(span / 3) : lo + Math.round((2 * span) / 3);
}

export function resolveOverrideRp(target: OverrideTarget): number {
  if (target.kind === "rp") {
    if (!Number.isFinite(target.rp) || !Number.isInteger(target.rp)) throw new Error("bad_rp");
    if (target.rp < RP_RULES.floor || target.rp > RP_RULES.ceiling) throw new Error("bad_rp");
    return target.rp;
  }
  if (!["I", "II", "III"].includes(target.division)) throw new Error("bad_division");
  return divisionFloorRp(target.level, target.division);
}

export type OverridePlan = {
  rp: number;
  rankLevel: number;
  /** Value to keep in rankOverrideBaseRp: the existing base if already overridden, else the current RP. */
  baseRp: number;
  label: string;
};

export function planOverride(current: { competitiveRating: number; rankOverrideBaseRp: number | null }, target: OverrideTarget): OverridePlan {
  const rp = resolveOverrideRp(target);
  const p = rankProgress(rp);
  return { rp, rankLevel: rankLevelFromRp(rp), baseRp: current.rankOverrideBaseRp ?? current.competitiveRating, label: `${p.tier.name} ${p.division} · ${rp} RP` };
}

export function planReset(current: { competitiveRating: number; rankOverrideBaseRp: number | null }): { rp: number; rankLevel: number } | null {
  if (current.rankOverrideBaseRp == null) return null;
  const rp = current.rankOverrideBaseRp;
  return { rp, rankLevel: rankLevelFromRp(rp) };
}

export function describeRp(rp: number): string {
  const p = rankProgress(rp);
  const pr = prestigeForRp(rp);
  return `${p.tier.name} ${p.division}${pr ? ` · ${pr.name}` : ""} · ${rp} RP`;
}

export function cleanReason(reason: unknown): string {
  return typeof reason === "string" ? reason.replace(/\s+/g, " ").trim().slice(0, 300) : "";
}

/** CSV cell escaping (RFC 4180) with formula-injection guard for spreadsheet apps. */
export function csvCell(value: unknown): string {
  let s = value == null ? "" : String(value);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function toCsv(rows: Array<Record<string, unknown>>, columns: string[]): string {
  return [columns.join(","), ...rows.map((r) => columns.map((c) => csvCell(r[c])).join(","))].join("\r\n");
}
