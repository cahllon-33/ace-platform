import type { Metadata } from "next";
import { connection } from "next/server";
import { prisma } from "@/lib/db";
import { SITE_LOCALES } from "@/lib/languages";
import { interpolate } from "@/lib/interpolate";
import { getLocaleId, getUi } from "@/server/locale";
import "../info41.css";

export const instant = false;
export async function generateMetadata(): Promise<Metadata> {
  const s = (await getUi()).r41.ss;
  return { title: s.title, description: s.lede };
}

export default async function StatusPage() {
  await connection();
  const [ui, localeId] = await Promise.all([getUi(), getLocaleId()]);
  const s = ui.r41.ss;
  const locale = SITE_LOCALES.find((l) => l.id === localeId)?.code ?? "en";
  const dbOk = await Promise.race([
    prisma.$queryRaw`SELECT 1`.then(() => true, () => false),
    new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 3000)),
  ]);
  const now = new Date();
  // Honest states: the page rendered (website up); DB is a live query; match servers are not deployed yet.
  const rows: [string, string, string][] = [
    [s.web, s.ok, "in41-ok"],
    [s.db, dbOk ? s.ok : s.down, dbOk ? "in41-ok" : "in41-down"],
    [s.match, s.notLive, "in41-idle"],
  ];
  return (
    <main className="in41">
      <header className="pg41-hero">
        <h1 className="pg41-h1">{s.title}</h1>
        <p className="in41-lede">{s.lede}</p>
      </header>
      <ul className="in41-status">
        {rows.map(([name, state, cls]) => (<li key={name}><strong>{name}</strong><span className={`in41-dot ${cls}`}>{state}</span></li>))}
      </ul>
      <p className="in41-muted">{interpolate(s.checked, { time: new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "medium" }).format(now) })}</p>
    </main>
  );
}
