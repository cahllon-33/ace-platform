import { prestigeBadge } from "@/lib/prestige";
import { VerifiedMark } from "@/components/verified-mark";
import { isVerified, verifyTier, type VerifyTier } from "@/lib/verification";
import "./lb39.css";
import { RankOrb } from "@/components/rank-orb";
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
  prestige?: ReturnType<typeof prestigeBadge>;
  badges: PlayerBadge[];
  steamId: string | null;
  wins: number;
  losses: number;
  verify: VerifyTier | null;
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
        accountStatus: "ACTIVE",
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
        accountStatus: true,
        verifiedAt: true,
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
      prestige: prestigeBadge(row.competitiveRating, row.subscriptionTier),
      steamId: row.steamId,
      wins: row.wins,
      losses: row.losses,
      verify: isVerified(row) ? verifyTier(row.subscriptionTier) : null,
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
  const podium = board.slice(0, 3);
  const b39 = ui.r39.board;
  const profileHref = (row: BoardRow) => (row.steamId ? `/player/${row.steamId}` : null);

  return (
    <main className="lb39">
      <header className="lb39-hero">
        <p className="lb39-kicker">{lb.hero.kicker}</p>
        <h1>{lb.hero.title}</h1>
        <p className="lb39-note">{ui.r38.board.note}</p>
        <dl className="lb39-facts">
          <div>
            <dt>{lb.facts.storedAccounts}</dt>
            <dd>{live.length}</dd>
          </div>
          <div>
            <dt>{lb.facts.killsStored}</dt>
            <dd>{lb.facts.none}</dd>
          </div>
        </dl>
      </header>

      {board.length === 0 ? (
        <div className="ace-lb-empty-state" role="status">
          <h2>{ui.r38.board.emptyTitle}</h2>
          <p>{ui.r38.board.emptyBody}</p>
        </div>
      ) : (
        <>
          <section aria-labelledby="lb39-podium">
            <h2 id="lb39-podium" className="lb39-h2">{b39.podium}</h2>
            <ol className="lb39-podium">
              {podium.map((row, i) => {
                const href = profileHref(row);
                const body = (
                  <>
                    <span className="lb39-pod-place">#{i + 1}</span>
                    <RankOrb level={row.level} art={row.art} size={112} label={text.leaderboard.hero.title} priority={i === 0} prestige={row.prestige ?? null} />
                    <span className="lb39-pod-name">{row.name}{row.verify ? <VerifiedMark tier={row.verify} label={ui.r41.vf.tip} size={16} /> : null}</span>
                    <span className="lb39-pod-tier">{row.tier.replace(/^Rank \d+ · /, "")}</span>
                    <span className="lb39-pod-rp">{row.rp.toLocaleString("en-US")} <small>RP</small></span>
                    <span className="lb39-pod-wl">{row.wins}–{row.losses}</span>
                  </>
                );
                return (
                  <li key={row.id} className={`lb39-pod is-${i + 1}`}>
                    {href ? <a href={href} aria-label={`${b39.viewProfile}: ${row.name}`}>{body}</a> : <div>{body}</div>}
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="lb39-table" aria-label={lb.boardLabel}>
            <div className="lb39-head" aria-hidden="true">
              <span>#</span>
              <span>{lb.table.player}</span>
              <span>{lb.table.tier}</span>
              <span>{ui.r38.card.wl}</span>
              <span>{lb.table.rating}</span>
            </div>
            <ol>
              {board.map((row, index) => {
                const width = Math.max(6, Math.round((row.rp / top) * 100));
                const href = profileHref(row);
                return (
                  <li key={row.id} className="lb39-row">
                    <span className="lb39-place">{index + 1}</span>
                    <span className="lb39-player">
                      <RankOrb level={row.level} art={row.art} size={40} label={text.leaderboard.hero.title} prestige={row.prestige ?? null} />
                      <span className="lb39-player-id">
                        {href ? <a href={href} className="lb39-name">{row.name}</a> : <span className="lb39-name">{row.name}</span>}{row.verify ? <VerifiedMark tier={row.verify} label={ui.r41.vf.tip} size={15} /> : null}
                        <span className="lb39-tags">
                          {row.art === "premium" ? <span className="ace-premium-tag">{text.play.premium.tag}</span> : null}
                          <PlayerBadges badges={row.badges} />
                        </span>
                      </span>
                    </span>
                    <span className="lb39-tier">
                      <b>{row.level}</b> {row.tier.replace(/^Rank \d+ · /, "")}
                    </span>
                    <span className="lb39-wl">{row.wins}–{row.losses}</span>
                    <span className="lb39-rp">
                      <span>{row.rp.toLocaleString("en-US")} RP</span>
                      <span className="lb39-bar" aria-hidden="true"><span style={{ width: `${width}%` }} /></span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>
        </>
      )}
      <div className="lb39-preview">
        <MatchPreview ui={ui} />
      </div>
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
