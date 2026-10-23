import { reverseAutoBanAction } from "./actions";

type Row = { id: string; userId: string; reason: string; createdAt: Date; user: { displayName: string; steamId: string | null } };
const cell = { borderBottom: "1px solid #333", padding: 6, textAlign: "start" as const, fontSize: 13 };

/** R61: automatic permanent bans (definite rule matches). Only the owner can reverse one, for a false positive. */
export function AutoBans({ rows }: { rows: Row[] }) {
  return (
    <section dir="rtl" style={{ margin: "24px 0" }}>
      <h2 style={{ fontSize: 18, margin: "0 0 8px" }}>באנים אוטומטיים קבועים (אנטי-צ׳יט)</h2>
      <p style={{ opacity: 0.75 }}>זיהוי ודאי של תוכנה אסורה (רשימה/חוק חתום) גורם לבאן קבוע לחשבון ולחומרה. השחקן רואה אותו כקבוע. רק הבעלים יכול לבטל במקרה של חיובי שגוי.</p>
      {rows.length === 0 ? <p style={{ opacity: 0.7 }}>אין באנים אוטומטיים.</p> : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>{["שחקן", "SteamID", "זמן (UTC)", "ראיות", "פעולה"].map((h) => <th key={h} style={cell}>{h}</th>)}</tr></thead>
          <tbody>{rows.map((r) => (
            <tr key={r.id}>
              <td style={cell}>{r.user.displayName}</td>
              <td style={cell} dir="ltr">{r.user.steamId ?? ""}</td>
              <td style={cell} dir="ltr">{r.createdAt.toISOString()}</td>
              <td style={cell} dir="ltr">{r.reason}</td>
              <td style={cell}>
                <form action={reverseAutoBanAction}>
                  <input type="hidden" name="userId" value={r.userId} />
                  <label style={{ fontSize: 12 }}><input type="checkbox" name="confirm" value="yes" required /> אני מאשר שזה חיובי שגוי</label>{" "}
                  <button type="submit" style={{ border: "1px solid #c55", background: "transparent", color: "#f88", padding: "2px 8px", cursor: "pointer" }}>ביטול באן</button>
                </form>
              </td>
            </tr>
          ))}</tbody>
        </table>
      )}
    </section>
  );
}
