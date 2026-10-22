"use client";

import { useState, useTransition } from "react";
import { useAdminI18n } from "@/components/admin-locale";
import { loadCommerce, saveCosmetic, saveSocials, setEntryFee, type CommerceSnapshot, type CosmeticInput } from "@/server/commerce-admin";
import { COSMETIC_KINDS, fmtUsd } from "@/lib/cosmetics";
import { SOCIALS, SOCIAL_LABEL } from "@/lib/socials";
import "./admin-command.css";
import "./admin-commerce.css";

const EN = {
  title: "Payments", owner: "Owner only. Sign in with the owner Steam account.", paddle: "Paddle", configured: "Configured", notConfigured: "Not configured — checkout shows “coming soon”",
  subs: "Subscriptions", none: "None yet", events: "Webhook events", orders: "One-time orders", shop: "Cosmetic catalog", add: "Add item", save: "Save", edit: "Edit",
  slug: "Slug", kind: "Kind", name: "Name", desc: "Description", price: "Price (USD)", color: "Colour", active: "Active", owners: "Owners",
  fees: "Tournament entry fees", fee: "Entry fee (USD, empty = free)", setFee: "Set fee", prize: "Prizes must be non-cash (cosmetics or subscription time). Entry fees never fund cash prizes.",
  socials: "Socials", socialsNote: "An icon appears in the footer and the home Community section only when its URL is set.", saveSocials: "Save socials",
  cosmetic: "Cosmetic only — no gameplay effect.", saved: "Saved", when: "When", type: "Type", outcome: "Outcome", status: "Status", amount: "Amount", user: "User",
};
const HE: typeof EN = {
  title: "תשלומים", owner: "לבעלים בלבד. התחברו עם חשבון ה-Steam של הבעלים.", paddle: "Paddle", configured: "מוגדר", notConfigured: "לא מוגדר — התשלום מציג \"בקרוב\"",
  subs: "מנויים", none: "אין עדיין", events: "אירועי Webhook", orders: "הזמנות חד-פעמיות", shop: "קטלוג קוסמטיקה", add: "הוספת פריט", save: "שמירה", edit: "עריכה",
  slug: "מזהה", kind: "סוג", name: "שם", desc: "תיאור", price: "מחיר (USD)", color: "צבע", active: "פעיל", owners: "בעלים",
  fees: "דמי השתתפות בטורנירים", fee: "דמי השתתפות (USD, ריק = חינם)", setFee: "קביעת דמים", prize: "הפרסים חייבים להיות לא כספיים (קוסמטיקה או זמן מנוי). דמי ההשתתפות לעולם אינם מממנים פרסים כספיים.",
  socials: "רשתות חברתיות", socialsNote: "אייקון מופיע בפוטר ובאזור הקהילה בדף הבית רק כשהכתובת שלו מוגדרת.", saveSocials: "שמירת רשתות",
  cosmetic: "קוסמטי בלבד — ללא השפעה על המשחק.", saved: "נשמר", when: "מתי", type: "סוג", outcome: "תוצאה", status: "סטטוס", amount: "סכום", user: "משתמש",
};

const blank: CosmeticInput = { slug: "", kind: "NAME_COLOR", name: "", description: "", priceCents: 199, color: "#ffd76a", active: true };

export function AdminCommerce({ owner, initial, error }: { owner: boolean; initial: CommerceSnapshot | null; error: string | null }) {
  const { hebrew } = useAdminI18n();
  const t = hebrew ? HE : EN;
  const [snap, setSnap] = useState(initial);
  const [msg, setMsg] = useState<string | null>(error);
  const [form, setForm] = useState<CosmeticInput>(blank);
  const [fees, setFees] = useState<Record<string, string>>({});
  const [soc, setSoc] = useState<Record<string, string>>(() => ({ ...(initial?.socials ?? {}) }));
  const [pending, start] = useTransition();
  if (!owner) return <section className="acx-card"><p>{t.owner}</p></section>;
  const reload = async () => { const r = await loadCommerce(); if (r.ok) setSnap(r.data); };
  const save = () => start(async () => { const r = await saveCosmetic(form); setMsg(r.ok ? t.saved : r.error); if (r.ok) { setForm(blank); await reload(); } });
  const when = (iso: string) => new Date(iso).toLocaleString(hebrew ? "he-IL" : "en-GB");
  return (
    <div className="cm49" dir={hebrew ? "rtl" : "ltr"}>
      <header className="cm49-head">
        <h1 className="acx-title">{t.title}</h1>
        <span className={`asv-pill ${snap?.paddle.configured ? "is-ok" : "is-warn"}`} data-paddle={snap?.paddle.configured ? "on" : "off"}>{t.paddle}: {snap?.paddle.configured ? `${t.configured} · ${snap.paddle.env}` : t.notConfigured}</span>
      </header>
      {msg ? <p className="asv-note" role="status">{msg}</p> : null}

      <section className="acx-card cm49-card"><p className="acx-card-title">{t.subs}</p>
        {snap?.subs.length ? <ul className="cm49-chips">{snap.subs.map((s) => <li key={s.tier + s.status}><b>{s.tier}</b> · {s.status} · {s.count}</li>)}</ul> : <p className="acx-muted">{t.none}</p>}
      </section>

      <section className="acx-card cm49-card" id="socials"><p className="acx-card-title">{t.socials}</p><p className="acx-muted">{t.socialsNote}</p>
        <form className="cm49-form" onSubmit={(e) => { e.preventDefault(); start(async () => { const r = await saveSocials(soc); setMsg(r.ok ? t.saved : r.error); if (r.ok) await reload(); }); }}>
          {SOCIALS.map((n) => <label key={n}>{SOCIAL_LABEL[n]}<input type="url" dir="ltr" placeholder="https://" value={soc[n] ?? ""} onChange={(e) => setSoc({ ...soc, [n]: e.target.value })} /></label>)}
          <button type="submit" className="acx-btn is-gold" disabled={pending}>{t.saveSocials}</button>
        </form>
      </section>

      <section className="acx-card cm49-card"><p className="acx-card-title">{t.shop}</p><p className="acx-muted">{t.cosmetic}</p>
        <div className="cm49-wrap"><table className="cm49-table"><thead><tr><th>{t.name}</th><th>{t.kind}</th><th>{t.price}</th><th>{t.color}</th><th>{t.active}</th><th>{t.owners}</th><th /></tr></thead>
          <tbody>{(snap?.items ?? []).map((i) => <tr key={i.id}><td><bdi>{i.name}</bdi><small> {i.slug}</small></td><td>{i.kind}</td><td>{fmtUsd(i.priceCents)}</td><td><span className="cm49-sw" style={{ background: i.color }} /> {i.color}</td><td>{i.active ? "✓" : "—"}</td><td>{i.owners}</td>
            <td><button type="button" className="acx-btn" onClick={() => setForm({ id: i.id, slug: i.slug, kind: i.kind, name: i.name, description: i.description, priceCents: i.priceCents, color: i.color, active: i.active })}>{t.edit}</button></td></tr>)}</tbody></table></div>
        {!snap?.items.length ? <p className="acx-muted">{t.none}</p> : null}
        <form className="cm49-form" onSubmit={(e) => { e.preventDefault(); save(); }}>
          <label>{t.slug}<input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required /></label>
          <label>{t.kind}<select value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value })}>{COSMETIC_KINDS.map((k) => <option key={k}>{k}</option>)}</select></label>
          <label>{t.name}<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
          <label>{t.price}<input type="number" step="0.01" min="0.5" max="100" value={(form.priceCents / 100).toString()} onChange={(e) => setForm({ ...form, priceCents: Math.round(Number(e.target.value) * 100) })} /></label>
          <label>{t.color}<input type="color" value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} /></label>
          <label className="cm49-wide">{t.desc}<input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} maxLength={200} /></label>
          <label className="cm49-check"><input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />{t.active}</label>
          <button type="submit" className="acx-btn is-gold" disabled={pending}>{form.id ? t.save : t.add}</button>
        </form>
      </section>

      <section className="acx-card cm49-card"><p className="acx-card-title">{t.fees}</p><p className="asv-note">{t.prize}</p>
        {snap?.tournaments.length ? <ul className="cm49-fees">{snap.tournaments.map((x) => (
          <li key={x.id}><span><bdi>{x.name}</bdi> <small>{x.status} · {x.entries}</small></span><span>{x.entryFeeCents ? fmtUsd(x.entryFeeCents) : "—"}</span>
            <input aria-label={t.fee} placeholder={t.fee} inputMode="decimal" value={fees[x.id] ?? ""} onChange={(e) => setFees({ ...fees, [x.id]: e.target.value })} />
            <button type="button" className="acx-btn" disabled={pending} onClick={() => start(async () => { const v = (fees[x.id] ?? "").trim(); const r = await setEntryFee(x.id, v ? Math.round(Number(v) * 100) : null); setMsg(r.ok ? t.saved : r.error); if (r.ok) await reload(); })}>{t.setFee}</button></li>
        ))}</ul> : <p className="acx-muted">{t.none}</p>}
      </section>

      <section className="acx-card cm49-card"><p className="acx-card-title">{t.orders}</p>
        {snap?.orders.length ? <div className="cm49-wrap"><table className="cm49-table"><thead><tr><th>{t.when}</th><th>{t.type}</th><th>{t.amount}</th><th>{t.status}</th><th>{t.user}</th></tr></thead>
          <tbody>{snap.orders.map((o) => <tr key={o.id}><td>{when(o.at)}</td><td>{o.kind}<small> {o.id}</small></td><td>{fmtUsd(o.amountCents)}</td><td>{o.status}</td><td><code>{o.userId.slice(0, 8)}</code></td></tr>)}</tbody></table></div> : <p className="acx-muted">{t.none}</p>}
      </section>

      <section className="acx-card cm49-card"><p className="acx-card-title">{t.events}</p>
        {snap?.events.length ? <div className="cm49-wrap"><table className="cm49-table"><thead><tr><th>{t.when}</th><th>{t.type}</th><th>{t.outcome}</th><th>{t.user}</th></tr></thead>
          <tbody>{snap.events.map((e) => <tr key={e.id}><td>{when(e.at)}</td><td>{e.type}</td><td>{e.outcome}</td><td><code>{e.userId?.slice(0, 8) ?? "—"}</code></td></tr>)}</tbody></table></div> : <p className="acx-muted">{t.none}</p>}
      </section>
    </div>
  );
}
