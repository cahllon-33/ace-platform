"use client";
import { useActionState } from "react";
import { addEntryAction } from "./actions";

const inp = { width: "100%", background: "#0c0c0f", color: "#f4f1ea", border: "1px solid rgba(201,162,74,.25)", borderRadius: 10, padding: "9px 12px" } as const;

export function AddEntryForm() {
  const [st, act, pending] = useActionState(addEntryAction, null);
  return (
    <form action={act} style={{ display: "grid", gap: 10, maxWidth: 640 }}>
      <label>כותרת (באנגלית, מוצגת לשחקנים)<input name="title" required maxLength={80} style={inp} /></label>
      <label>תיאור (באנגלית)<textarea name="body" maxLength={600} rows={3} style={inp} /></label>
      <label>קישור באתר (לא חובה, למשל /shop)<input name="href" dir="ltr" placeholder="/shop" style={inp} /></label>
      <button disabled={pending} style={{ justifySelf: "start", background: "linear-gradient(180deg,#C9A24A,#C9A24A)", color: "#111", fontWeight: 700, border: 0, borderRadius: 10, padding: "9px 18px" }}>{pending ? "שומר…" : "פרסום עדכון"}</button>
      {st?.error ? <p style={{ color: "#ff5b5b" }}>{st.error}</p> : st?.ok ? <p style={{ color: "#2ed47a" }}>פורסם.</p> : null}
    </form>
  );
}
