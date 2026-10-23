/** R60 in-app post-match player reports (pure helpers). Reports feed the owner review queue; they never auto-punish. */
export const REPORT_CATEGORIES = ["cheating", "griefing"] as const;
export type ReportCategory = (typeof REPORT_CATEGORIES)[number];
export const isReportCategory = (v: unknown): v is ReportCategory => typeof v === "string" && (REPORT_CATEGORIES as readonly string[]).includes(v);
export const MATCH_REPORTS_PER_DAY = 5;
export const MATCH_REPORTS_PER_MATCH = 3;
/** A lobby can be reported for this long after it ended. */
export const REPORT_WINDOW_MS = 24 * 60 * 60 * 1000;

export type ReportCheck = { reporterInLobby: boolean; targetInLobby: boolean; self: boolean; lobbyEndedAt: Date | null; lobbyStarted: boolean; reportsToday: number; reportsThisMatch: number; alreadyReportedTarget: boolean; now: Date };
export function checkReport(c: ReportCheck): { ok: true } | { ok: false; error: string } {
  if (c.self) return { ok: false, error: "self" };
  if (!c.reporterInLobby || !c.targetInLobby) return { ok: false, error: "not_in_match" };
  if (!c.lobbyStarted) return { ok: false, error: "match_not_started" };
  if (c.lobbyEndedAt && c.now.getTime() - c.lobbyEndedAt.getTime() > REPORT_WINDOW_MS) return { ok: false, error: "too_late" };
  if (c.alreadyReportedTarget) return { ok: false, error: "duplicate" };
  if (c.reportsToday >= MATCH_REPORTS_PER_DAY) return { ok: false, error: "rate_limited" };
  if (c.reportsThisMatch >= MATCH_REPORTS_PER_MATCH) return { ok: false, error: "rate_limited" };
  return { ok: true };
}
export const cleanDetails = (s: unknown) => (typeof s === "string" ? s.replace(/[\u0000-\u001f]/g, " ").trim().slice(0, 300) : "");
