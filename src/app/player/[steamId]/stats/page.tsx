import { prestigeBadge } from "@/lib/prestige";
import "./stats.css";
import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { guardDisplayName } from "@/lib/display-name-guard";
import { rankProgress } from "@/lib/rank-progress";
import { activityGrid, aggregateStats, type StatLine } from "@/lib/player-stats";
import { SITE_LOCALES } from "@/lib/languages";
import { getPrisma } from "@/server/db";
import { getLocaleId, getUi } from "@/server/locale";
import { RankOrb } from "@/components/rank-orb";
import { VerifiedMark } from "@/components/verified-mark";
import { isVerified, verifyTier } from "@/lib/verification";
import { effectiveRankArt } from "@/server/rank-art";

export const instant = false;
const STEAM_ID64 = /^\d{17}$/;

async function load(steamId: string) {
  if (!STEAM_ID64.test(steamId)) return null;
  try {
    const user = await getPrisma().user.findUnique({ where: { steamId } });
    if (!user || user.accountStatus !== "ACTIVE") return null;
    const [rows, history] = await Promise.all([
      getPrisma().matchPlayer.findMany({
        where: { userId: user.id, match: { state: "COMPLETED" } },
        include: { match: true, weapons: true },
        orderBy: { match: { endedAt: "desc" } },
        take: 500,
      }),
      getPrisma().ratingHistory.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" }, take: 200 }),
    ]);
    const lines: StatLine[] = rows.map((r) => ({
      ...r,
      won: r.teamId !== null && r.match.winnerTeamId === r.teamId,
      mapName: r.match.mapName,
      playedAt: r.match.endedAt ?? r.match.createdAt,
    }));
    return { user, lines, history };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ steamId: string }> }): Promise<Metadata> {
  const { steamId } = await params;
  const ui = await getUi();
  return { title: ui.r41.st.title, robots: STEAM_ID64.test(steamId) ? undefined : { index: false } };
}

const fmt = (v: number | null, digits = 0, suffix = "") => (v === null ? "—" : `${v.toFixed(digits)}${suffix}`);

export default async function StatsPage({ params }: { params: Promise<{ steamId: string }> }) {
  await connection();
  const { steamId } = await params;
  const [ui, data, localeId] = await Promise.all([getUi(), load(steamId), getLocaleId()]);
  const st = ui.r41.st;
  const locale = SITE_LOCALES.find((l) => l.id === localeId)?.code ?? "en";
  if (!data) {
    return (
      <main className="st41 st41-missing">
        <h1>{ui.r39.profile.notFound}</h1>
        <Link href="/leaderboard" className="st41-link">← {ui.r39.profile.backToBoard}</Link>
      </main>
    );
  }
  const { user, lines, history } = data;
  const name = guardDisplayName(user.displayName, user.steamId);
  const s = aggregateStats(lines);
  const grid = activityGrid(lines.map((l) => l.playedAt), new Date());
  const maxDay = Math.max(1, ...grid.counts);
  const prog = rankProgress(user.competitiveRating);
  const dateFmt = new Intl.DateTimeFormat(locale, { dateStyle: "medium" });

  const perf: [string, string][] = [
    [st.winRate, fmt(s.winRate, 0, "%")], [st.adr, fmt(s.adr, 1)], [st.kr, fmt(s.kr, 2)], [st.hs, fmt(s.hs, 0, "%")],
    [st.clutch, fmt(s.clutch, 0, "%")], [st.entry, fmt(s.entry, 0, "%")], [st.utility, fmt(s.utility, 1)],
  ];

  // RP line: honest points from RatingHistory only.
  const pts = history.length ? [history[0]!.ratingBefore, ...history.map((h) => h.ratingAfter)] : [];
  const lo = Math.min(...pts), hi = Math.max(...pts), W = 600, H = 160;
  const poly = pts.map((v, i) => `${((i / Math.max(1, pts.length - 1)) * W).toFixed(1)},${(H - 10 - ((v - lo) / Math.max(1, hi - lo)) * (H - 20)).toFixed(1)}`).join(" ");

  return (
    <main className="st41">
      <header className="st41-hero">
        <span className="st41-orb"><RankOrb level={prog.tier.level} art={effectiveRankArt(user)} size={96} label={`${prog.tier.name} ${prog.division}`} priority prestige={prestigeBadge(user.competitiveRating, user.subscriptionTier)} /></span>
        <div>
          <p className="st41-kicker">{st.kicker}</p>
          <h1>{name}{isVerified(user) ? <VerifiedMark tier={verifyTier(user.subscriptionTier)} label={ui.r41.vf.tip} size={22} /> : null}</h1>
          <p className="st41-lede">{st.lede}</p>
          <p className="st41-rank">{prog.tier.name} {prog.division} · {user.competitiveRating} RP</p>
        </div>
        <Link href={`/player/${user.steamId}`} className="st41-link">← {ui.r39.profile.kicker}</Link>
      </header>

      {s.matches === 0 ? <p className="st41-empty" role="status">{st.empty}</p> : null}

      <section className="st41-perf" aria-label={st.kicker}>
        {perf.map(([label, value]) => (
          <div key={label} className="st41-tile"><span>{label}</span><strong>{value}</strong></div>
        ))}
      </section>

      <div className="st41-cols">
        <section className="st41-card">
          <h2>{st.heatmap}</h2>
          {s.matches === 0 ? <p className="st41-muted">{st.heatmapEmpty}</p> : null}
          <div className="st41-heat" role="img" aria-label={st.heatmap}>
            {grid.counts.map((c, i) => (
              <i key={i} className={grid.future[i] ? "is-future" : undefined} style={{ opacity: c ? 0.35 + 0.65 * (c / maxDay) : undefined }} data-on={c ? "" : undefined} title={grid.future[i] ? undefined : `${dateFmt.format(new Date(grid.start.getTime() + i * 86_400_000))}: ${c}`} />
            ))}
          </div>
          <p className="st41-legend">{st.less}<i /><i data-on="" style={{ opacity: 0.5 }} /><i data-on="" />{st.more}</p>
        </section>
        <section className="st41-card">
          <h2>{st.rpChart}</h2>
          {pts.length < 2 ? <p className="st41-muted">{st.rpEmpty}</p> : (
            <svg viewBox={`0 0 ${W} ${H}`} className="st41-chart" role="img" aria-label={`${st.rpChart}: ${pts[0]} → ${pts[pts.length - 1]} RP`}>
              <polyline points={poly} fill="none" stroke="#C9A24A" strokeWidth="2.5" strokeLinejoin="round" />
              <text x="4" y="14">{hi}</text><text x="4" y={H - 2}>{lo}</text>
            </svg>
          )}
        </section>
      </div>

      <div className="st41-cols">
        <section className="st41-card">
          <h2>{st.maps}</h2>
          {s.maps.length === 0 ? <p className="st41-muted">{st.none}</p> : (
            <table className="st41-table"><tbody>
              {s.maps.map((m) => (<tr key={m.name}><th scope="row">{m.name}</th><td>{m.played}</td><td>{Math.round((m.won / m.played) * 100)}%</td></tr>))}
            </tbody></table>
          )}
        </section>
        <section className="st41-card">
          <h2>{st.weapons}</h2>
          {s.weapons.length === 0 ? <p className="st41-muted">{st.none}</p> : (
            <table className="st41-table"><tbody>
              {s.weapons.map((w) => (<tr key={w.name}><th scope="row">{w.name}</th><td>{w.kills}</td><td>{w.kills ? Math.round((w.headshotKills / w.kills) * 100) : 0}% HS</td></tr>))}
            </tbody></table>
          )}
        </section>
      </div>

      <div className="st41-cols">
        <section className="st41-card">
          <h2>{st.multi}</h2>
          <div className="st41-mini">
            {(["k2", "k3", "k4", "k5"] as const).map((k) => (<div key={k}><span>{k.slice(1)}K</span><strong>{fmt(s.multi[k])}</strong></div>))}
          </div>
        </section>
        <section className="st41-card">
          <h2>{st.totals}</h2>
          <div className="st41-mini">
            <div><span>{st.matches}</span><strong>{s.matches}</strong></div>
            <div><span>{st.kills}</span><strong>{fmt(s.kills)}</strong></div>
            <div><span>{st.deaths}</span><strong>{fmt(s.deaths)}</strong></div>
          </div>
        </section>
      </div>
    </main>
  );
}
