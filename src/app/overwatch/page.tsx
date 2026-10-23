import type { Metadata } from "next";
import { connection } from "next/server";
import { STEAM_AUTH_HREF } from "@/lib/site";
import { OW_RULES, VERDICTS, type TimelineEntry } from "@/lib/overwatch";
import { readSessionUser } from "@/server/session";
import { nextCaseFor, reviewerEligibility } from "@/server/overwatch";
import { voteAction } from "./actions";
import "../info41.css";

export const instant = false;
export const metadata: Metadata = { title: "A.C.E Overwatch", robots: { index: false, follow: false } };

const LABEL: Record<string, string> = { aim: "Aim assistance", wall: "Wallhack / ESP", other_cheat: "Other cheat", griefing: "Griefing", clean: "No evidence (clean)", insufficient: "Not enough evidence" };
const ERR: Record<string, string> = { not_eligible: "You are not eligible to review.", daily_limit: `Daily limit of ${OW_RULES.votesPerDay} reviews reached.`, unavailable: "That case is no longer available.", invalid: "Pick a verdict." };

/** R60 A.C.E Overwatch: anonymised suspicious-match review by trusted veterans. English UI. Votes are advice; the owner decides. */
export default async function OverwatchPage({ searchParams }: { searchParams: Promise<{ voted?: string; error?: string }> }) {
  await connection();
  const [user, q] = await Promise.all([readSessionUser().catch(() => null), searchParams]);
  const el = user ? await reviewerEligibility(user.id).catch(() => ({ eligible: false, missing: ["unavailable"] })) : null;
  const c = user && el?.eligible ? await nextCaseFor(user.id).catch(() => null) : null;
  const timeline = (Array.isArray(c?.timeline) ? c!.timeline : []) as TimelineEntry[];
  const summary = (c?.summary ?? {}) as { kills?: number; reasons?: { key: string; text: string }[] };
  return (
    <main className="in41" lang="en" dir="ltr">
      <header className="pg41-hero">
        <h1 className="pg41-h1">A.C.E Overwatch</h1>
        <p className="in41-lede">Trusted veteran players review anonymised evidence from flagged matches. Your vote is advice: the A.C.E owner makes every final decision, and statistics alone never ban anyone.</p>
      </header>
      {q.voted ? <p className="in41-card in41-ok-box" role="status">Thanks, your vote was recorded.</p> : null}
      {q.error ? <p className="in41-card in41-err-box" role="alert">{ERR[q.error] ?? "Something went wrong."}</p> : null}
      {!user ? <p className="in41-card">Sign in to check eligibility. <a href={STEAM_AUTH_HREF} className="in41-link">Steam →</a></p>
        : !el?.eligible ? (
          <section className="in41-card">
            <h2>Not eligible yet</h2>
            <p>Reviewers need an account at least {OW_RULES.minAgeDays} days old, {OW_RULES.minMatches}+ matches, a high trust score, a verified Steam account and a clean record.</p>
            <ul>{el?.missing.map((m) => <li key={m}>{m}</li>)}</ul>
          </section>
        ) : !c ? <p className="in41-card">No cases waiting for you right now.</p> : (
          <section className="in41-card">
            <h2>Case</h2>
            <p>The suspect is anonymous. Watch the demo from the suspect&apos;s point of view, then judge only what you see.</p>
            {c.demoUrl ? <p><a className="in41-link" href={c.demoUrl} rel="noopener noreferrer" target="_blank">Download demo</a></p> : <p>No demo link was attached to this case.</p>}
            <h3>Why it was flagged</h3>
            <ul>{(summary.reasons ?? []).map((r, i) => <li key={i}>{r.text}</li>)}</ul>
            <h3>Kill timeline ({timeline.length})</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr><th>Round</th><th>Time (s)</th><th>Weapon</th><th>Notes</th></tr></thead>
              <tbody>{timeline.map((k, i) => <tr key={i}><td>{k.round ?? "-"}</td><td>{k.t ?? "-"}</td><td>{k.weapon}</td><td>{k.flags.join(", ")}</td></tr>)}</tbody>
            </table>
            <form action={voteAction} style={{ marginTop: 16 }}>
              <input type="hidden" name="caseId" value={c.id} />
              <fieldset><legend>Your verdict</legend>
                {VERDICTS.map((v) => <label key={v} style={{ display: "block" }}><input type="radio" name="verdict" value={v} required /> {LABEL[v]}</label>)}
              </fieldset>
              <button type="submit" className="in41-btn">Submit vote</button>
            </form>
          </section>
        )}
    </main>
  );
}
