import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { readIsSteamOwner } from "@/server/admin-gate";
import { adminWhatsNew } from "@/server/whats-new";
import { AddEntryForm } from "./form";
import { togglePublishedAction } from "./actions";

export const metadata: Metadata = { title: "A.C.E · מה חדש", robots: { index: false, follow: false } };

/** R62 owner-only: player-facing "What's New" entries. Admin chrome in Hebrew; entries are shown to players in English. */
export default async function AdminWhatsNewPage() {
  await connection();
  if (!(await readIsSteamOwner())) notFound();
  const rows = await adminWhatsNew().catch(() => null);
  const cell = { padding: "8px 10px", borderBottom: "1px solid rgba(255,215,106,0.12)", textAlign: "start" as const, fontSize: 13 };
  return (
    <main dir="rtl" lang="he" style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ color: "#FFD76A", fontSize: 24, fontWeight: 700 }}>מה חדש — עדכונים לשחקנים</h1>
      <p style={{ opacity: 0.75, margin: "6px 0 18px" }}>רק שינויים שרלוונטיים לשחקנים (פיצ׳רים חדשים, פריטים חדשים בחנות). לא שינויי ניהול או מערכת. פריט חדש שנוסף לחנות מופיע כאן אוטומטית.</p>
      <AddEntryForm />
      <h2 style={{ fontSize: 18, margin: "24px 0 8px" }}>עדכונים</h2>
      {!rows ? <p>הנתונים לא זמינים (המיגרציה whats_new_r62 עוד לא הורצה?).</p> : rows.length === 0 ? <p>אין עדכונים עדיין.</p> : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr><th style={cell}>תאריך</th><th style={cell}>סוג</th><th style={cell}>כותרת</th><th style={cell}>מצב</th><th style={cell} /></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td style={cell}>{r.publishedAt.toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" })}</td>
                <td style={cell}>{r.kind === "SHOP" ? "חנות (אוטומטי)" : "פיצ׳ר"}</td>
                <td style={cell} dir="ltr">{r.title}</td>
                <td style={cell}>{r.published ? "מפורסם" : "מוסתר"}</td>
                <td style={cell}>
                  <form action={togglePublishedAction}>
                    <input type="hidden" name="id" value={r.id} />
                    <input type="hidden" name="published" value={r.published ? "0" : "1"} />
                    <button style={{ color: "#FFD76A", textDecoration: "underline", background: "none", border: 0 }}>{r.published ? "הסתר" : "פרסם שוב"}</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
