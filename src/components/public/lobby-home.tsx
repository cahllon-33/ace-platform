import { headers } from "next/headers";
import { HomeLiveBlock } from "@/components/live-block";
import { loadLive, requestHost } from "@/server/live";
import { HomeHeroV2, HomePlansV2, HomeRanksV2, HomeStepsV2 } from "@/components/public/home-v2";
import { BrandPillars } from "@/components/public/brand-pillars";
import { HeroRankStage } from "@/components/hero-rank-stage";
import { effectiveRankArt } from "@/server/rank-art";
import { guardDisplayName } from "@/lib/display-name-guard";
import { interpolate } from "@/lib/i18n";
import { Suspense } from "react";
import { LiveStatStrip } from "@/components/public/live-stat-strip";
import { readPublicStats } from "@/server/public-stats";
import { connection } from "next/server";
import { HomeLocaleActions, LocaleLoading } from "@/components/home-locale-actions";
import { PlatformStatus } from "@/components/platform-status";
import { getText, getUi } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import { PlayArenaHero, type ArenaData } from "@/components/public/play-arena-hero";
import { readQueueView } from "@/server/queue-engine";
import { getPlatformStatus } from "@/server/platform-status";
import { QUEUE_SIZE } from "@/lib/queue";

/** Real values only; on any failure the hero shows 0 in queue and "Status unavailable" rather than invented numbers. */
async function readArena(userId: string | null): Promise<ArenaData> {
  const [v, st] = await Promise.all([readQueueView(userId).catch(() => null), getPlatformStatus().catch(() => null)]);
  const l = v?.lobby && !["DONE", "CANCELLED", "FAILED"].includes(v.lobby.state) ? v.lobby : null;
  const sh = st?.rows.find((r) => r.key === "shield");
  return { queued: v?.queued ?? 0, needed: v?.needed ?? QUEUE_SIZE, map: l?.map ?? null, found: l?.state === "READY", shield: sh ? { tone: sh.tone, value: sh.value } : null, region: v?.region ?? null };
}

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

  const [text, liveStats, ui, broadcast, h, arena] = await Promise.all([getText(), readPublicStats(), getUi(), loadLive(), headers(), readArena(user?.id ?? null)]);
  const live = Boolean(user);
  const shownName = user ? guardDisplayName(user.displayName, user.steamId) : "";
  return (
    <main className="ace-lobby-root ace-home-flow h39-home">
      <PlayArenaHero signedIn={live} initial={arena} />
      <HomeHeroV2
        ui={ui}
        signedIn={live}
        actions={<HomeLocaleActions live={live} />}
        aside={
          user ? (
            <div className="h39-me is-r44">
              <HeroRankStage
                ui={ui}
                player={{
                  name: shownName,
                  avatarUrl: user.avatarUrl || null,
                  avatarAlt: interpolate(text.home.ops.avatarAlt, { name: shownName }),
                  rp: user.competitiveRating,
                  plan: user.subscriptionTier,
                  art: effectiveRankArt(user),
                  wins: user.wins,
                  losses: user.losses,
                }}
              />
            </div>
          ) : undefined
        }
      />
      <BrandPillars ui={ui} />
      <HomeStepsV2 ui={ui} />
      <HomeRanksV2 ui={ui} />
      <HomeLiveBlock feeds={broadcast.feeds} host={requestHost(h)} copy={ui.r41b.lv} />
      <HomePlansV2 ui={ui} />
      <div className="h39-section h39-status">
        <PlatformStatus />
        <LiveStatStrip initial={liveStats} labels={text.home.liveStats} />
      </div>
    </main>
  );
}
