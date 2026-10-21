import { headers } from "next/headers";
import { HomeLiveBlock } from "@/components/live-block";
import { loadLive, requestHost } from "@/server/live";
import { HomeHeroV2, HomePlansV2, HomeRanksV2, HomeStepsV2 } from "@/components/public/home-v2";
import { PlayerCard } from "@/components/player-card";
import { guardDisplayName } from "@/lib/display-name-guard";
import { interpolate } from "@/lib/i18n";
import { Suspense } from "react";
import { LiveStatStrip } from "@/components/public/live-stat-strip";
import { readPublicStats } from "@/server/public-stats";
import { connection } from "next/server";
import { HomeLocaleActions, LocaleLoading } from "@/components/home-locale-actions";
import { PlatformStatus } from "@/components/platform-status";
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

  const [text, liveStats, ui, broadcast, h] = await Promise.all([getText(), readPublicStats(), getUi(), loadLive(), headers()]);
  const live = Boolean(user);
  const shownName = user ? guardDisplayName(user.displayName, user.steamId) : "";
  return (
    <main className="ace-lobby-root ace-home-flow h39-home">
      <HomeHeroV2
        ui={ui}
        signedIn={live}
        actions={<HomeLocaleActions live={live} />}
        aside={
          user ? (
            <div className="h39-me">
              <PlayerCard
                name={shownName}
                avatarUrl={user.avatarUrl || null}
                rp={user.competitiveRating}
                wins={user.wins}
                losses={user.losses}
                labels={{
                  rp: text.home.ops.rp,
                  matches: ui.r38.card.matches,
                  wl: ui.r38.card.wl,
                  noMatches: ui.r38.card.noMatches,
                  division: ui.r38.card.division,
                  avatarAlt: interpolate(text.home.ops.avatarAlt, { name: shownName }),
                }}
              />
              <CompetitiveJourney rp={user.competitiveRating} ui={ui} />
            </div>
          ) : undefined
        }
      />
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
