import { Suspense } from "react";
import { LiveStatStrip } from "@/components/public/live-stat-strip";
import { readPublicStats } from "@/server/public-stats";
import Link from "next/link";
import { connection } from "next/server";
import { HomeLocaleActions, HowItWorksLocale, LocaleLoading } from "@/components/home-locale-actions";
import { PlatformStatus } from "@/components/platform-status";
import { HeroArena } from "@/components/hero-arena";
import { OpeningReel } from "@/components/opening-reel";
import { HomeWorkspaceCharter } from "@/components/home-workspace-charter";
import { LobbyMembership } from "@/components/lobby-identity";
import { LobbyOps } from "@/components/lobby-ops";
import { effectiveRankArt } from "@/server/rank-art";
import { hasEliteSeal } from "@/lib/pricing";
import { getText, getUi } from "@/server/locale";
import { CompetitiveJourney } from "@/components/competitive-journey";
import { readSessionUser } from "@/server/session";

function LobbyFallback() {
  return (
    <main className="ace-lobby-root flex min-h-[60vh] items-center justify-center px-4">
      <LocaleLoading />
    </main>
  );
}

export function LobbyHome() {
  return (
    <Suspense fallback={<LobbyFallback />}>
      <LobbyHomeDynamic />
    </Suspense>
  );
}

async function LobbyHomeDynamic() {
  await connection();
  let user = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }

  const [text, liveStats, ui] = await Promise.all([getText(), readPublicStats(), getUi()]);
  const live = Boolean(user);
  return (
    <main className="ace-lobby-root ace-home-flow">
      <OpeningReel />
      <HeroArena actions={<HomeLocaleActions live={live} />} />
      <PlatformStatus />
      {user ? (
        <div className="ace-home-journey">
          <CompetitiveJourney rp={user.competitiveRating} ui={ui} />
        </div>
      ) : null}
      <LiveStatStrip initial={liveStats} labels={text.home.liveStats} />
      <nav className="ace-home-jumps" aria-label={text.home.jumpNav.label}>
        <Link href="/play">{text.home.jumpNav.play}</Link>
        <Link href="/prizes">{text.home.jumpNav.prizes}</Link>
        <Link href="/teams">{text.home.jumpNav.teams}</Link>
        <Link href="/leaderboard">{text.home.jumpNav.leaderboard}</Link>
        <Link href="/ranks">{text.home.jumpNav.ranks}</Link>
        <Link href="/features">{text.home.jumpNav.systems}</Link>
      </nav>
      <HomeWorkspaceCharter />


      <LobbyOps
        text={text}
        ui={ui}
        player={
          user
            ? {
                displayName: user.displayName,
                avatarUrl: user.avatarUrl || null,
                rating: user.competitiveRating,
                wins: user.wins,
                losses: user.losses,
                art: effectiveRankArt(user),
                elite: hasEliteSeal(user.subscriptionTier),
              }
            : null
        }
      />


      <LobbyMembership />

      <HowItWorksLocale />
    </main>
  );
}
