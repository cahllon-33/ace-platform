import { guardDisplayName } from "@/lib/display-name-guard";
import { rankLevelFromRp } from "@/lib/rank-progress";
import { PlayerBadges } from "@/components/player-badges";
import { playerBadges, type PlayerBadge } from "@/lib/badges";
import type { Metadata } from "next";
import { connection } from "next/server";
import { LocaleFlag } from "@/components/locale-flag";
import { SampleWeapon, type WeaponSlug } from "@/components/sample-weapon";
import type { TextBag } from "@/lib/i18n/text";
import { formatRankLabelWith, rankArtAsset, type RankArt } from "@/lib/ranks";
import { effectiveRankArt } from "@/server/rank-art";
import { getPrisma } from "@/server/db";
import { getText, getUi } from "@/server/locale";
import { MatchPreview } from "@/components/match-preview";

/** Dynamic route: opt out of instant navigation prerender (reads request data). */
export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.leaderboard.meta.title,
    description: text.leaderboard.meta.description,
  };
}

type LeaderboardText = TextBag["leaderboard"];
type CountryCode = keyof LeaderboardText["countries"];

type BoardRow = {
  id: string;
  name: string;
  rp: number;
  tier: string;
  level: number;
  flag: CountryCode | null;
  weapon: WeaponSlug | null;
  weaponName: string | null;
  live: boolean;
  /** Server gate result (effectiveRankArt) for stored rows; showcase rows are always standard. */
  art: RankArt;
  badges: PlayerBadge[];
};

export default async function LeaderboardPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  await connection();
  const [text, ui] = await Promise.all([getText(), getUi()]);
  const lb = text.leaderboard;
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  let live: BoardRow[] = [];
  try {
    const rows = await getPrisma().user.findMany({
      // Real rows only: accounts with at least one recorded ranked match.
      where: {
        OR: [{ wins: { gt: 0 } }, { losses: { gt: 0 } }],
        ...(query ? { displayName: { contains: query, mode: "insensitive" as const } } : {}),
      },
      orderBy: { competitiveRating: "desc" },
      take: 50,
      select: {
        id: true,
        displayName: true,
        competitiveRating: true,
        rankLevel: true,
        subscriptionTier: true,
        rankArt: true,
        wins: true,
        losses: true,
        steamId: true,
      },
    });
    live = rows.map((row) => ({
      id: row.id,
      name: guardDisplayName(row.displayName, row.steamId),
      rp: row.competitiveRating,
      tier: formatRankLabelWith(text.ranks.emblem.rankLabel, rankLevelFromRp(row.competitiveRating)),
      level: rankLevelFromRp(row.competitiveRating),
      flag: null,
      weapon: null,
      weaponName: null,
      live: true,
      art: effectiveRankArt(row),
      // Computed here on the server from stored rows; only the badge labels reach the page.
      badges: playerBadges({
        subscriptionTier: row.subscriptionTier,
        rankLevel: rankLevelFromRp(row.competitiveRating),
        wins: row.wins,
        losses: row.losses,
        steamLinked: row.steamId !== null,
      }).filter((badge) => badge.kind === "special" || badge.id === "placed"),
    }));
  } catch {
    live = [];
  }

  // No showcase fallback: an empty board says so honestly.
  const board: BoardRow[] = live;

  const top = board[0]?.rp ?? 1;
  const podium =
    board.length >= 3
      ? [
          { row: board[1], place: 2 },
          { row: board[0], place: 1 },
          { row: board[2], place: 3 },
        ]
      : [];

  return (
    <main className="ace-lb">
      <header className="ace-lb-hero">
        <div>
          <p className="ace-lb-kicker">{lb.hero.kicker}</p>
          <h1>{lb.hero.title}</h1>
          <p className="ace-lb-note">{ui.r38.board.note}</p>
        </div>
        <ul className="ace-lb-facts">
          <li>
            <span>{lb.facts.seats}</span>
            <strong>{board.length}</strong>
          </li>
          <li>
            <span>{lb.facts.storedAccounts}</span>
            <strong>{live.length}</strong>
          </li>
          <li>
            <span>{lb.facts.killsStored}</span>
            <strong>{lb.facts.none}</strong>
          </li>
        </ul>
      </header>

      {board.length === 0 ? (
        <div className="ace-lb-empty-state" role="status">
          <h2>{ui.r38.board.emptyTitle}</h2>
          <p>{ui.r38.board.emptyBody}</p>
        </div>
      ) : (
        <>
          {podium.length === 3 ? (
            <ol className="ace-lb-podium" aria-label={lb.podiumLabel}>
              {podium.map(({ row, place }) => {
                const emblem = rankArtAsset(row.level, row.art);
                return (
                  <li key={row.id} className={`ace-lb-pod is-${place}`}>
                    <span className="ace-lb-pod-place">{place}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={emblem.staticSrc} alt="" width={40} height={40} loading="lazy" />
                    <span className="ace-lb-name">{row.name}</span>
                    <span className="ace-lb-tag">{row.live ? lb.tags.stored : lb.tags.showcase}</span>
                    <WeaponCell row={row} size="podium" lb={lb} />
                    <span className="ace-lb-rp">{row.rp.toLocaleString("en-US")} RP</span>
                  </li>
                );
              })}
            </ol>
          ) : null}

          <section className="ace-lb-stage" aria-label={lb.boardLabel}>
            <div className="ace-lb-head">
              <span>{lb.table.rank}</span>
              <span>{lb.table.player}</span>
              <span>{lb.table.country}</span>
              <span>{lb.table.tier}</span>
              <span>{lb.table.leadWeapon}</span>
              <span>{lb.table.rating}</span>
            </div>
            <ol>
              {board.map((row, index) => {
                const place = index + 1;
                const emblem = rankArtAsset(row.level, row.art);
                const width = Math.max(8, Math.round((row.rp / top) * 100));
                return (
                  <li key={row.id} className={`ace-lb-row is-${place <= 3 ? place : "rest"}`}>
                    <span className="ace-lb-medal">
                      {place === 1 ? (
                        <svg className="ace-lb-crown" viewBox="0 0 24 16" aria-hidden="true">
                          <path d="M2 14h20L19 6l-5 4L12 2 10 10 5 6 2 14z" />
                        </svg>
                      ) : null}
                      {place}
                    </span>
                    <span className="ace-lb-player">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={emblem.staticSrc} alt="" width={40} height={40} loading="lazy" />
                      <span>
                        <span className="ace-lb-name">{row.name}</span>
                        <span className="ace-lb-tag">{row.live ? lb.tags.stored : lb.tags.showcase}</span>
                        {row.art === "premium" ? <span className="ace-premium-tag">{text.play.premium.tag}</span> : null}
                        <PlayerBadges badges={row.badges} />
                      </span>
                    </span>
                    <span className="ace-lb-country">
                      {row.flag ? (
                        <>
                          <LocaleFlag code={row.flag} />
                          <span>{lb.countries[row.flag]}</span>
                        </>
                      ) : (
                        "—"
                      )}
                    </span>
                    <span className="ace-lb-skill" aria-label={row.tier}>
                      <span>{row.level}</span>
                      <span>{row.tier.replace(/^Rank \d+ · /, "")}</span>
                    </span>
                    <WeaponCell row={row} lb={lb} />
                    <span className="ace-lb-rp">
                      <span>{row.rp.toLocaleString("en-US")} RP</span>
                      <span className="ace-lb-bar" aria-hidden="true">
                        <span style={{ width: `${width}%` }} />
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>
        </>
      )}
      <MatchPreview ui={ui} />
    </main>
  );
}

function WeaponCell({
  row,
  size = "row",
  lb,
}: {
  row: BoardRow;
  size?: "row" | "podium";
  lb: LeaderboardText;
}) {
  if (!row.weapon || !row.weaponName) {
    return (
      <span className="ace-lb-weapon">
        <span>
          <strong>{lb.weapon.notStored}</strong>
          <em>{lb.weapon.noKillSaved}</em>
        </span>
      </span>
    );
  }

  return (
    <span className={`ace-lb-weapon is-${size}`}>
      <SampleWeapon slug={row.weapon} name={row.weaponName} size={size} />
      <span>
        <strong>{row.weaponName}</strong>
        <em>{lb.weapon.sampleRender}</em>
      </span>
    </span>
  );
}
