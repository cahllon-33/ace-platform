import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { AceShieldStatus } from "@/components/ace-shield-status";
import { HomeLocaleActions, HowItWorksLocale, LocaleLoading } from "@/components/home-locale-actions";
import { PlatformStatus } from "@/components/platform-status";
import { HeroArena } from "@/components/hero-arena";
import { OpeningReel } from "@/components/opening-reel";
import { HomeWorkspaceCharter } from "@/components/home-workspace-charter";
import { LobbyIdentity, LobbyMembership, LobbySeasonStats } from "@/components/lobby-identity";
import { hasEliteSeal } from "@/lib/pricing";
import { nextRankCeiling, rankFromRating } from "@/lib/ranks";
import { getText } from "@/server/locale";
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

  const text = await getText();
  const live = Boolean(user);
  const tier = rankFromRating(user?.competitiveRating ?? 0);
  const ceiling = nextRankCeiling(user?.competitiveRating ?? 0);
  const matches = live ? user!.wins + user!.losses : 0;
  const winRate =
    live && matches > 0 ? `${Math.round((user!.wins / matches) * 100)}%` : text.home.identity.notAvailable;
  const rpLabel = live
    ? `${user!.competitiveRating.toLocaleString("en-US")} / ${ceiling.toLocaleString("en-US")} RP`
    : "— / — RP";
  const placementPlayed = live ? Math.min(10, user!.wins + user!.losses) : 0;

  return (
    <main className="ace-lobby-root ace-home-flow">
      <OpeningReel />
      <HeroArena actions={<HomeLocaleActions live={live} />} />
      <PlatformStatus />
      <nav className="ace-home-jumps" aria-label={text.home.jumpNav.label}>
        <Link href="/play">{text.home.jumpNav.play}</Link>
        <Link href="/prizes">{text.home.jumpNav.prizes}</Link>
        <Link href="/teams">{text.home.jumpNav.teams}</Link>
        <Link href="/leaderboard">{text.home.jumpNav.leaderboard}</Link>
        <Link href="/ranks">{text.home.jumpNav.ranks}</Link>
        <Link href="/features">{text.home.jumpNav.systems}</Link>
      </nav>
      <HomeWorkspaceCharter />


      <section id="identity" className="ace-home-ops mx-auto grid max-w-[76rem] gap-4 overflow-x-hidden px-4 py-8 sm:px-6">
        <LobbyIdentity
          live={live}
          displayName={live ? user!.displayName : null}
          rpLabel={rpLabel}
          tierLabel={live ? `${tier.crystalName} · ${tier.name}` : null}
          placementPlayed={placementPlayed}
          elite={live && hasEliteSeal(user!.subscriptionTier)}
        />
        <AceShieldStatus />
        <LobbySeasonStats live={live} matches={matches} winRate={winRate} />
      </section>


      <LobbyMembership />

      <HowItWorksLocale />
    </main>
  );
}
