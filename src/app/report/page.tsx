import type { Metadata } from "next";
import { connection } from "next/server";
import { STEAM_AUTH_HREF } from "@/lib/site";
import { submitPlayerReport } from "@/server/player-reports";
import { getUi } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import "../info41.css";

export const instant = false;
export async function generateMetadata(): Promise<Metadata> {
  const r = (await getUi()).r41.rp;
  return { title: r.title, description: r.lede };
}

export default async function ReportPage({ searchParams }: { searchParams: Promise<{ sent?: string; error?: string; target?: string }> }) {
  await connection();
  const [ui, user, q] = await Promise.all([getUi(), readSessionUser().catch(() => null), searchParams]);
  const r = ui.r41.rp;
  const target = /^\d{0,17}$/.test(q.target ?? "") ? q.target : "";
  return (
    <main className="in41">
      <header className="pg41-hero">
        <h1 className="pg41-h1">{r.title}</h1>
        <p className="in41-lede">{r.lede}</p>
      </header>
      {q.sent ? <p className="in41-card in41-ok-box" role="status">{r.sent}</p> : null}
      {q.error === "invalid" ? <p className="in41-card in41-err-box" role="alert">{r.invalid}</p> : null}
      {!user ? (
        <p className="in41-card">{r.signIn} <a href={STEAM_AUTH_HREF} className="in41-link">Steam →</a></p>
      ) : (
        <form action={submitPlayerReport} className="in41-card in41-form">
          <label>{r.target}<input name="target" inputMode="numeric" pattern="\d{17}" maxLength={17} required defaultValue={target} /></label>
          <label>{r.reason}
            <select name="reason" defaultValue="cheating">
              <option value="cheating">{r.rCheat}</option>
              <option value="abuse">{r.rToxic}</option>
              <option value="other">{r.rOther}</option>
            </select>
          </label>
          <label>{r.details}<textarea name="details" maxLength={1000} /></label>
          <div><button type="submit" className="in41-btn">{r.submit}</button></div>
        </form>
      )}
    </main>
  );
}
