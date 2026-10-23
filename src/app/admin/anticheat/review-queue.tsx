import { analyzeMatchAction, banHardwareAction, decideReviewAction, saveBlocklistAction } from "./actions";

/** Owner-only review queue. Hebrew labels (owner admin only); player-facing UI stays English. */
const HE: Record<string, string> = {
  hs_rate: "אחוז ראש מול האוכלוסייה",
  flick_lock: "סנאפ מהיר שנעצר בדיוק על המטרה",
  fast_reaction: "זמן תגובה קצר באופן חריג",
  wallbang: "הריגות דרך קירות",
  smoke: "הריגות דרך עשן",
  blind: "הריגות בזמן סינוור",
  reaction_consistency: "עקביות חריגה בזמן התגובה",
  aim_consistency: "עקביות חריגה בדיוק הכוונת",
  occluded_tracking: "מעקב כוונת אחרי אויב מוסתר (חשד וולהאק)",
  model: "מודל הלמידה (רמז בלבד)",
  player_reports: "דיווחי שחקנים",
};
const LEVEL: Record<string, string> = { high: "גבוה", medium: "בינוני", low: "נמוך" };

type Reason = { key: string; value: number; baseline?: number; points: number; text: string };
type Review = { id: string; matchKey: string; steamId: string; userId: string | null; score: number; level: string; kills: number; reasons: unknown; createdAt: Date; status: string };

export function ReviewQueue({ reviews, extra }: { reviews: Review[]; extra: string[] }) {
  const cell = { padding: "6px 10px", borderBottom: "1px solid rgba(201,162,74,0.12)", textAlign: "start" as const, fontSize: 13, verticalAlign: "top" as const };
  const btn = { padding: "4px 10px", marginInlineEnd: 6, border: "1px solid rgba(201,162,74,0.4)", borderRadius: 6, background: "transparent", color: "inherit", cursor: "pointer" };
  return (
    <section dir="rtl" lang="he" style={{ marginTop: 24 }}>
      <h2 style={{ fontSize: 20, margin: "16px 0 4px", color: "#C9A24A" }}>תור בדיקה – ניתוח התנהגותי</h2>
      <p style={{ opacity: 0.75, marginBottom: 12 }}>הציון הוא רמז לבדיקה בלבד. אין הרחקה אוטומטית מסטטיסטיקה: ההחלטה שלך, אחרי צפייה בדמו.</p>
      <form action={analyzeMatchAction} style={{ marginBottom: 12 }}>
        <label>ניתוח משחק לפי מזהה: <input name="matchKey" style={{ background: "transparent", border: "1px solid #555", padding: 4 }} /></label>{" "}
        <button style={btn} type="submit">נתח עכשיו</button>
      </form>
      {reviews.length === 0 ? <p style={{ opacity: 0.7 }}>אין שחקנים בתור.</p> : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>{["ציון", "רמה", "SteamID", "משחק", "הריגות", "סיבות", "החלטה"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
          <tbody>{reviews.map((r) => (
            <tr key={r.id}>
              <td style={cell}><b>{Math.round(r.score)}</b></td>
              <td style={cell}>{LEVEL[r.level] ?? r.level}</td>
              <td style={cell} dir="ltr">{r.steamId}</td>
              <td style={cell} dir="ltr">{r.matchKey}</td>
              <td style={cell}>{r.kills}</td>
              <td style={cell}><ul style={{ margin: 0, paddingInlineStart: 16 }}>{(Array.isArray(r.reasons) ? (r.reasons as Reason[]) : []).map((x) => <li key={x.key}>{HE[x.key] ?? x.key} (+{x.points}) <span dir="ltr" style={{ opacity: 0.7 }}>{x.text}</span></li>)}</ul></td>
              <td style={cell}>
                <form action={decideReviewAction} style={{ display: "inline" }}>
                  <input type="hidden" name="id" value={r.id} />
                  <input name="note" placeholder="הערה" style={{ background: "transparent", border: "1px solid #555", padding: 3, width: 110 }} />
                  <button style={btn} name="status" value="cleared">נקי</button>
                  <button style={btn} name="status" value="confirmed">אושר כחשוד</button>
                </form>
                {r.userId ? (
                  <form action={banHardwareAction} style={{ display: "inline" }}>
                    <input type="hidden" name="userId" value={r.userId} />
                    <input type="hidden" name="reason" value={`review ${r.id}`} />
                    <label style={{ fontSize: 12 }}><input type="checkbox" name="confirm" value="yes" /> אישור</label>
                    <button style={btn} type="submit">חסום חומרה</button>
                  </form>
                ) : null}
              </td>
            </tr>
          ))}</tbody>
        </table>
      )}
      <h2 style={{ fontSize: 18, margin: "24px 0 8px" }}>תוכנות אסורות (חסימת תור)</h2>
      <p style={{ opacity: 0.75 }}>שורה לכל שם תהליך (חלק מהשם). מתווסף לרשימה המובנית ונשלח לכל הלקוחות.</p>
      <form action={saveBlocklistAction}>
        <textarea name="list" dir="ltr" defaultValue={extra.join("\n")} rows={6} style={{ width: "100%", background: "transparent", border: "1px solid #555", padding: 6, fontFamily: "monospace" }} />
        <button style={btn} type="submit">שמור</button>
      </form>
    </section>
  );
}
