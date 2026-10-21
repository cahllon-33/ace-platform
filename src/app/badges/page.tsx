import type { Metadata } from "next";
import Link from "next/link";
import { getUi } from "@/server/locale";
import { interpolate } from "@/lib/i18n";
import { RankOrb } from "@/components/rank-orb";
import { PRESTIGE_LEVELS, PRESTIGE_MIN_RP } from "@/lib/prestige";
import "../info41.css";

export async function generateMetadata(): Promise<Metadata> {
  const pr = (await getUi()).r41c.pr;
  return { title: pr.title, description: pr.lede, openGraph: { title: pr.title, description: pr.lede } };
}

/** Public "Badge rules" page (R41-D). Shows real badge art only, no player data. */
export default async function BadgesPage() {
  const ui = await getUi();
  const pr = ui.r41c.pr;
  const sets = [
    { set: "plus" as const, text: pr.plus },
    { set: "premium" as const, text: pr.premium },
  ];
  return (
    <main className="in41 in41-wide">
      <header className="pg41-hero">
        <p className="pr41-kicker">{pr.kicker}</p>
        <h1 className="pg41-h1">{pr.title}</h1>
        <p className="in41-lede">{pr.lede}</p>
      </header>
      <div className="in41-card">
        <ul className="in41-points">
          <li>{pr.ranks}</li>
          <li>{interpolate(pr.prestige, { elite: PRESTIGE_MIN_RP.toLocaleString("en-US") })}</li>
          <li>{pr.free}</li>
          <li>{pr.lose}</li>
        </ul>
      </div>
      {sets.map(({ set, text }) => (
        <section key={set} className="in41-card" aria-label={text}>
          <h2 className="pr41-h2">{text}</h2>
          <ul className="pr41-grid">
            {PRESTIGE_LEVELS.map((p) => (
              <li key={p.level}>
                <RankOrb level={10} art={set === "premium" ? "premium" : "standard"} size={128} label={interpolate(pr.level, { n: p.level, name: p.name })} prestige={{ level: p.level, set, name: p.name }} />
                <strong>{interpolate(pr.level, { n: p.level, name: p.name })}</strong>
                <span className="in41-muted">{interpolate(pr.from, { rp: p.minRp.toLocaleString("en-US") })}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p><Link href="/ranks" className="in41-link">{ui.r40.nf.ranks} →</Link> · <Link href="/pricing" className="in41-link">{pr.perk} →</Link></p>
    </main>
  );
}
