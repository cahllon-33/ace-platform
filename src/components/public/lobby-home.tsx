import { Suspense } from "react";
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


      <LobbyOps
        text={text}
        player={
          user
            ? {
                displayName: user.displayName,
                avatarUrl: user.avatarUrl || null,
                rating: user.competitiveRating,
                wins: user.wins,
                losses: user.losses,
                art: effectiveRankArt(user),
                badgeColor: user.badgeColor,
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
