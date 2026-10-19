import "./player.css";
import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { guardDisplayName } from "@/lib/display-name-guard";
import { interpolate } from "@/lib/i18n";
import { rankProgress } from "@/lib/rank-progress";
import { rankArtAsset } from "@/lib/ranks";
import { playerBadges } from "@/lib/badges";
import { PlayerBadges } from "@/components/player-badges";
import { getPrisma } from "@/server/db";
import { getLocaleId, getText, getUi } from "@/server/locale";
import { SITE_LOCALES } from "@/lib/languages";
import { effectiveRankArt } from "@/server/rank-art";
import { readSessionUser } from "@/server/session";

export const instant = false;

const STEAM_ID64 = /^\d{17}$/;

async function loadPlayer(steamId: string) {
  if (!STEAM_ID64.test(steamId)) return null;
  try {
    const user = await getPrisma().user.findUnique({ where: { steamId } });
    // Only active accounts have a public page; moderation state is never shown publicly.
    if (!user || user.accountStatus !== "ACTIVE") return null;
    return user;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ steamId: string }> }): Promise<Metadata> {
  const { steamId } = await params;
  const [ui, user] = await Promise.all([getUi(), loadPlayer(steamId)]);
  const name = user ? guardDisplayName(user.displayName, user.steamId) : ui.r39.profile.notFound;
  return { title: name, robots: user ? undefined : { index: false } };
}

export default async function PlayerPage({ params }: { params: Promise<{ steamId: string }> }) {
  await connection();
  const { steamId } = await params;
  const [text, ui, user, localeId] = await Promise.all([getText(), getUi(), loadPlayer(steamId), getLocaleId()]);
  const p = ui.r39.profile;
  const locale = SITE_LOCALES.find((l) => l.id === localeId)?.code ?? "en";

  if (!user) {
    return (
      <main className="pl39 pl39-missing">
        <p className="pl39-kicker">{p.kicker}</p>
        <h1>{p.notFound}</h1>
        <p className="pl39-muted">{p.notFoundBody}</p>
        <Link href="/leaderboard" className="pl39-link">← {p.backToBoard}</Link>
      </main>
    );
  }

  let viewer: { id: string } | null = null;
  try {
    viewer = await readSessionUser();
  } catch {
    viewer = null;
  }
  const name = guardDisplayName(user.displayName, user.steamId);
  const prog = rankProgress(user.competitiveRating);
  const art = effectiveRankArt(user);
  const emblem = rankArtAsset(prog.tier.level, art);
  const matches = user.wins + user.losses;
  const winRate = matches > 0 ? Math.round((user.wins / matches) * 100) : null;
  const since = new Intl.DateTimeFormat(locale, { year: "numeric", month: "long" }).format(user.createdAt);
  const badges = playerBadges({
    subscriptionTier: user.subscriptionTier,
    rankLevel: prog.tier.level,
    wins: user.wins,
    losses: user.losses,
    steamLinked: true,
  }).filter((badge) => badge.kind === "special" || badge.id === "placed");

  return (
    <main className="pl39">
      <section className="pl39-banner" aria-labelledby="pl39-name">
        <div className="pl39-banner-bg" aria-hidden="true" />
        <div className="pl39-id">
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="pl39-avatar" src={user.avatarUrl} alt="" width={128} height={128} />
          ) : (
            <span className="pl39-avatar is-empty" aria-hidden="true">{name.charAt(0).toUpperCase()}</span>
          )}
          <div className="pl39-id-text">
            <p className="pl39-kicker">{p.kicker}</p>
            <h1 id="pl39-name">{name}</h1>
            <p className="pl39-muted">{interpolate(p.memberSince, { date: since })}</p>
            <div className="pl39-tags">
              <PlayerBadges badges={badges} />
              {viewer?.id === user.id ? <span className="pl39-you">{p.yourProfile}</span> : null}
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pl39-emblem" src={emblem.mdSrc} alt={prog.tier.name} width={220} height={220} decoding="async" fetchPriority="high" />
      </section>

      <section className="pl39-stats" aria-label={p.rating}>
        <div>
          <span>{p.rank}</span>
          <strong>{prog.tier.name}</strong>
          <small>{interpolate(ui.r38.card.division, { division: prog.division })}</small>
        </div>
        <div>
          <span>{p.rating}</span>
          <strong>{prog.rp.toLocaleString("en-US")} RP</strong>
          <small className="pl39-bar" aria-hidden="true"><i style={{ width: `${prog.percent}%` }} /></small>
        </div>
        <div>
          <span>{p.record}</span>
          {matches > 0 ? (
            <>
              <strong>{user.wins}–{user.losses}</strong>
              <small>{winRate}% · {matches} {ui.r38.card.matches.toLowerCase()}</small>
            </>
          ) : (
            <strong className="pl39-empty">{ui.r38.card.noMatches}</strong>
          )}
        </div>
      </section>

      <p className="pl39-muted pl39-basis">{ui.r38.journey.basis}</p>
      <div className="pl39-actions">
        <a href={`https://steamcommunity.com/profiles/${user.steamId}`} className="pl39-link" rel="noopener noreferrer" target="_blank">{p.steamProfile} ↗</a>
        <Link href="/leaderboard" className="pl39-link">{text.leaderboard.hero.title} →</Link>
      </div>
    </main>
  );
}
