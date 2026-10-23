/**
 * R60 A.C.E Overwatch (pure): trusted veteran players review ANONYMISED evidence and vote.
 * The owner makes the final decision; a vote tally is advice only.
 */
export type EligibilityInput = { accountAgeDays: number; matches: number; trust: number; banned: boolean; confirmedReviews: number; verified: boolean; isSuspect?: boolean };
export const OW_RULES = { minAgeDays: 180, minMatches: 100, minTrust: 70, votesPerDay: 20, quorum: 5 } as const;

export function eligibility(i: EligibilityInput): { eligible: boolean; missing: string[] } {
  const missing: string[] = [];
  if (i.banned) missing.push("account is banned");
  if (i.confirmedReviews > 0) missing.push("account has a confirmed anti-cheat review");
  if (!i.verified) missing.push("Steam account not verified");
  if (i.accountAgeDays < OW_RULES.minAgeDays) missing.push(`account age ${Math.floor(i.accountAgeDays)}/${OW_RULES.minAgeDays} days`);
  if (i.matches < OW_RULES.minMatches) missing.push(`${i.matches}/${OW_RULES.minMatches} matches`);
  if (i.trust < OW_RULES.minTrust) missing.push(`trust ${i.trust}/${OW_RULES.minTrust}`);
  return { eligible: missing.length === 0, missing };
}

export const VERDICTS = ["aim", "wall", "other_cheat", "griefing", "clean", "insufficient"] as const;
export type Verdict = (typeof VERDICTS)[number];
export const isVerdict = (v: unknown): v is Verdict => typeof v === "string" && (VERDICTS as readonly string[]).includes(v);
const CHEAT = new Set<Verdict>(["aim", "wall", "other_cheat"]);

export type Tally = { total: number; counts: Record<Verdict, number>; cheating: number; clean: number; consensus: "cheating" | "clean" | "griefing" | "split" | null; ready: boolean };
/** Consensus = ≥ quorum votes AND ≥ 75% of decisive votes agree. "insufficient" votes are not decisive. */
export function tally(votes: Verdict[], quorum: number = OW_RULES.quorum): Tally {
  const counts = Object.fromEntries(VERDICTS.map((v) => [v, 0])) as Record<Verdict, number>;
  for (const v of votes) if (isVerdict(v)) counts[v]++;
  const cheating = votes.filter((v) => CHEAT.has(v)).length, clean = counts.clean, grief = counts.griefing;
  const decisive = cheating + clean + grief;
  const ready = votes.length >= quorum;
  let consensus: Tally["consensus"] = null;
  if (ready && decisive) consensus = cheating / decisive >= 0.75 ? "cheating" : clean / decisive >= 0.75 ? "clean" : grief / decisive >= 0.75 ? "griefing" : "split";
  return { total: votes.length, counts, cheating, clean, consensus, ready };
}

export type TimelineEntry = { round: number | null; t: number | null; weapon: string; flags: string[] };
type KillLike = { round?: number | null; tick?: number | null; weapon: string; headshot: boolean; wallbang: boolean; throughSmoke: boolean; attackerBlind: boolean; flagged?: string[] };
/** Anonymised timeline: no SteamIDs, names or victim identities; only round, coarse time and flags. */
export function anonymizedTimeline(kills: KillLike[], tickRate = 64): TimelineEntry[] {
  return kills.map((k) => {
    const flags = [...(k.flagged ?? [])];
    if (k.headshot) flags.push("headshot");
    if (k.wallbang) flags.push("through wall");
    if (k.throughSmoke) flags.push("through smoke");
    if (k.attackerBlind) flags.push("while flashed");
    return { round: k.round ?? null, t: typeof k.tick === "number" ? Math.round(k.tick / tickRate) : null, weapon: k.weapon.replace(/^weapon_/, "").slice(0, 24), flags };
  });
}
/** Strips anything that looks like a SteamID64 / profile URL from free text shown to reviewers. */
export const scrub = (s: string) => s.replace(/7656119\d{10}/g, "[player]").replace(/steamcommunity\.com\/\S+/gi, "[link]").slice(0, 400);
/** Only https demo links on an allow-listed host pattern are shown to reviewers. */
export function safeDemoUrl(u: string | null | undefined): string | null {
  try { const x = new URL(String(u ?? "")); return x.protocol === "https:" ? x.toString() : null; } catch { return null; }
}
