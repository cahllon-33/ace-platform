import { closeOverwatchAction, openOverwatchAction, trainModelAction } from "./actions";

/** R60 owner panel (Hebrew): learning-model status, A.C.E Overwatch, in-app player reports. */
type Status = {
  readiness: { ready: boolean; labeled: number; positives: number; negatives: number; needed: number };
  active: { id: string; trainedAt: string; samples: number; holdout: { precision: number; recall: number; fpr: number; n: number }; weights: { feature: string; weight: number }[] } | null;
  recent: { id: string; status: string; verdict: string; labeled: number; createdAt: Date }[];
};
type Case = { id: string; reviewId: string; status: string; demoUrl: string; createdAt: Date; tally: { total: number; cheating: number; clean: number; consensus: string | null; counts: Record<string, number> } };
type Report = { id: string; targetSteamId: string; category: string; reason: string; details: string; lobbyId: string | null; createdAt: Date };
type Review = { id: string; steamId: string; matchKey: string; score: number };

const CONS: Record<string, string> = { cheating: "רמאות", clean: "נקי", griefing: "הפרעה", split: "חלוקה" };
const MST: Record<string, string> = { active: "פעיל", rejected: "נדחה (לא עבר ספי בדיקה)", retired: "הוחלף", trained: "אומן" };

export function IntegrityPanel({ status, cases, reports, reviews }: { status: Status | null; cases: Case[]; reports: Report[]; reviews: Review[] }) {
  const cell = { padding: "6px 10px", borderBottom: "1px solid rgba(255,215,106,0.12)", textAlign: "start" as const, fontSize: 13, verticalAlign: "top" as const };
  const btn = { padding: "4px 10px", marginInlineEnd: 6, border: "1px solid rgba(255,215,106,0.4)", borderRadius: 6, background: "transparent", color: "inherit", cursor: "pointer" };
  const inp = { background: "transparent", border: "1px solid #555", padding: 4, color: "inherit" };
  const r = status?.readiness;
  return (
    <section dir="rtl" lang="he" style={{ marginTop: 32 }}>
      <h2 style={{ fontSize: 20, color: "#FFD76A" }}>מודל למידה</h2>
      {!status ? <p>אין נתוני מודל (המיגרציה לא הוחלה?).</p> : (
        <>
          <p>מצב: <b>{status.active ? "מודל פעיל (רמז לבדיקה בלבד, לעולם לא הרחקה)" : "מבוסס חוקים"}</b>. תוויות אמיתיות: {r!.labeled} ({r!.positives} אושרו / {r!.negatives} נוקו). {r!.ready ? "מספיק נתונים לאימון." : `חסרות עוד ${r!.needed} החלטות לפחות.`}</p>
          {status.active ? (
            <p dir="ltr" style={{ textAlign: "end" }}>held-out n={status.active.holdout.n} precision {(status.active.holdout.precision * 100).toFixed(0)}% recall {(status.active.holdout.recall * 100).toFixed(0)}% FPR {(status.active.holdout.fpr * 100).toFixed(1)}% · weights: {status.active.weights.map((w) => `${w.feature} ${w.weight}`).join(", ")}</p>
          ) : null}
          <form action={trainModelAction}><button style={btn} type="submit" disabled={!r!.ready}>אמן מודל עכשיו</button></form>
          {status.recent.length ? <ul>{status.recent.map((m) => <li key={m.id}>{m.createdAt.toISOString().slice(0, 16)} · {MST[m.status] ?? m.status} · {m.labeled} תוויות · <span dir="ltr">{m.verdict}</span></li>)}</ul> : null}
        </>
      )}

      <h2 style={{ fontSize: 20, color: "#FFD76A", marginTop: 24 }}>A.C.E Overwatch</h2>
      <p style={{ opacity: 0.75 }}>שחקנים ותיקים ואמינים בודקים ראיות אנונימיות ומצביעים. ההצבעה היא המלצה; ההחלטה הסופית שלך.</p>
      <form action={openOverwatchAction} style={{ marginBottom: 12 }}>
        <label>בדיקה: <select name="reviewId" style={inp}>{reviews.map((x) => <option key={x.id} value={x.id}>{Math.round(x.score)} · {x.steamId} · {x.matchKey}</option>)}</select></label>{" "}
        <label>קישור לדמו (https): <input name="demoUrl" dir="ltr" style={inp} /></label>{" "}
        <button style={btn} type="submit" disabled={!reviews.length}>שלח לאוברווץ&apos;</button>
      </form>
      {cases.length === 0 ? <p style={{ opacity: 0.7 }}>אין תיקים.</p> : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>{["תיק", "מצב", "הצבעות", "רמאות / נקי", "קונצנזוס", "החלטה סופית"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
          <tbody>{cases.map((c) => (
            <tr key={c.id}>
              <td style={cell} dir="ltr">{c.reviewId}</td>
              <td style={cell}>{c.status === "open" ? "פתוח" : "סגור"}</td>
              <td style={cell}>{c.tally.total}</td>
              <td style={cell}>{c.tally.cheating} / {c.tally.clean}</td>
              <td style={cell}>{c.tally.consensus ? CONS[c.tally.consensus] ?? c.tally.consensus : "אין עדיין"}</td>
              <td style={cell}>{c.status === "open" ? (
                <form action={closeOverwatchAction}>
                  <input type="hidden" name="caseId" value={c.id} />
                  <input name="note" placeholder="הערה" style={inp} />{" "}
                  <button style={btn} name="status" value="confirmed" type="submit">אשר רמאות</button>
                  <button style={btn} name="status" value="cleared" type="submit">נקה</button>
                </form>
              ) : "-"}</td>
            </tr>
          ))}</tbody>
        </table>
      )}

      <h2 style={{ fontSize: 20, color: "#FFD76A", marginTop: 24 }}>דיווחי שחקנים מהאפליקציה (פתוחים)</h2>
      {reports.length === 0 ? <p style={{ opacity: 0.7 }}>אין דיווחים פתוחים.</p> : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>{["זמן", "SteamID", "סוג", "פרטים", "לובי"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
          <tbody>{reports.map((p) => <tr key={p.id}><td style={cell} dir="ltr">{p.createdAt.toISOString().slice(0, 16)}</td><td style={cell} dir="ltr">{p.targetSteamId}</td><td style={cell}>{p.category === "cheating" ? "רמאות" : p.category === "griefing" ? "הפרעה" : p.reason}</td><td style={cell}>{p.details}</td><td style={cell} dir="ltr">{p.lobbyId ?? ""}</td></tr>)}</tbody>
        </table>
      )}
      <p style={{ opacity: 0.7, marginTop: 8 }}>סגירת דיווחים: בעמוד /admin/reports.</p>
    </section>
  );
}
