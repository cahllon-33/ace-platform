import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { prisma } from "@/lib/db";
import { SITE_LOCALES } from "@/lib/languages";
import { STEAM_AUTH_HREF } from "@/lib/site";
import { markNotificationsRead } from "@/server/notifications";
import { getLocaleId, getUi } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import "../info41.css";

export const instant = false;
export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getUi()).r41.nt.title, robots: { index: false } };
}

export default async function NotificationsPage() {
  await connection();
  const [ui, user, localeId] = await Promise.all([getUi(), readSessionUser().catch(() => null), getLocaleId()]);
  const r = ui.r41;
  const locale = SITE_LOCALES.find((l) => l.id === localeId)?.code ?? "en";
  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" });
  const items = user ? await prisma.notification.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" }, take: 50 }).catch(() => []) : [];
  const label = (kind: string) => (kind === "verify.grant" ? r.vf.tip : kind === "report.received" ? r.rp.sent : kind);
  return (
    <main className="in41">
      <header className="pg41-hero"><h1 className="pg41-h1">{r.nt.title}</h1></header>
      {!user ? (
        <p className="in41-card"><a href={STEAM_AUTH_HREF} className="in41-btn">{r.rp.signIn}</a></p>
      ) : items.length === 0 ? (
        <p className="in41-card in41-muted" role="status">{r.nt.empty}</p>
      ) : (
        <>
          {items.some((n) => !n.readAt) ? (
            <form action={markNotificationsRead}><button className="in41-btn" type="submit">{r.nt.markRead}</button></form>
          ) : null}
          <ul className="in41-list">
            {items.map((n) => (
              <li key={n.id} className={n.readAt ? "" : "is-unread"}>
                <span>{label(n.kind)}</span>
                <time dateTime={n.createdAt.toISOString()}>{fmt.format(n.createdAt)}</time>
              </li>
            ))}
          </ul>
        </>
      )}
      <Link href="/dashboard" className="in41-link">← {ui.r40.nf.home}</Link>
    </main>
  );
}
