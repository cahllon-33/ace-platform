import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { readPublicStats } from "@/server/public-stats";
import { readArena } from "@/server/arena";
import "./home-landing.css";

const PROPS: [string, string][] = [
  ["Autonomous Anti-Cheat", "Every match runs under the A.C.E shield. Cheaters are flagged, reviewed and removed."],
  ["Competitive Calibration", "Teams are balanced by Rating Points, so every 5v5 is a fair fight."],
  ["Elite Players", "Climb ten ranks to Elite on EU servers built for serious CS2."],
];

/** Clean landing: real stats only (null values render as "—", never invented numbers). */
export async function HomeLanding() {
  await connection();
  const user = await readSessionUser().catch(() => null);
  const [stats, arena] = await Promise.all([readPublicStats(), readArena(user?.id ?? null)]);
  const fmt = (n: number | null) => (n == null ? "—" : n.toLocaleString("en-US"));
  const shield = arena.shield;
  return (
    <main className="hl">
      <section className="hl-hero">
        <div className="hl-glow" aria-hidden="true" />
        <Image src="/images/ace-badge.png" alt="A.C.E" width={220} height={220} priority className="hl-logo" />
        <h1 className="hl-title">Ranked CS2. Fair by design.</h1>
        <p className="hl-tag">Autonomous Anti-Cheat | Competitive Calibration | Elite Players</p>
        <div className="hl-ctas">
          <Link href="/play" className="hl-btn gold">Play</Link>
          <a href="/download/latest" className="hl-btn">Download the app</a>
          {!user && <a href="/api/auth/steam" className="hl-btn steam">Sign in with Steam</a>}
        </div>
      </section>

      <section className="hl-stats" aria-label="Live stats">
        <div><b>{arena.queued} / {arena.needed}</b><small>In queue now</small></div>
        <div><b>{stats.earlyAccess ? "Early access" : fmt(stats.online)}</b><small>{stats.earlyAccess ? "Player counts soon" : "Online now"}</small></div>
        <div><b>{stats.earlyAccess ? "—" : fmt(stats.registered)}</b><small>Registered players</small></div>
        <div><b className={shield ? "t-" + shield.tone : ""}>{shield ? shield.value : "Unavailable"}</b><small>Anti-cheat</small></div>
      </section>

      <section className="hl-props">
        {PROPS.map(([t, d]) => (
          <article key={t}><span className="hl-rule" aria-hidden="true" /><h2>{t}</h2><p>{d}</p></article>
        ))}
      </section>
    </main>
  );
}
