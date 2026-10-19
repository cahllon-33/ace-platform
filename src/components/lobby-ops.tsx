import { PlayerCard, type PlayerCardLabels } from "@/components/player-card";
import type { Ui } from "@/lib/i18n/ui";
import Link from "next/link";
import { CalibrationTrack } from "@/components/calibration-track";
import { EliteSeal } from "@/components/elite-seal";
import { interpolate } from "@/lib/i18n";
import { rankArtAsset, rankFromRating, type RankArt } from "@/lib/ranks";
import { PremiumShowcase } from "@/components/premium-showcase";
import type { getText } from "@/server/locale";

type Text = Awaited<ReturnType<typeof getText>>;

export type LobbyOpsPlayer = {
  displayName: string;
  avatarUrl: string | null;
  rating: number;
  wins: number;
  losses: number;
  art: RankArt;
  elite: boolean;
};

export function LobbyOps({ text, player, ui }: { text: Text; player: LobbyOpsPlayer | null; ui: Ui }) {
  const c = text.home.ops;
  const na = c.na;
  const matches = player ? player.wins + player.losses : 0;
  const winRate = player && matches > 0 ? `${Math.round((player.wins / matches) * 100)}%` : na;
  const tier = player ? rankFromRating(player.rating) : null;
  const placement = Math.min(10, matches);
  const cardLabels: PlayerCardLabels = {
    rp: c.rp,
    matches: ui.r38.card.matches,
    wl: ui.r38.card.wl,
    noMatches: ui.r38.card.noMatches,
    division: ui.r38.card.division,
    avatarAlt: player ? interpolate(c.avatarAlt, { name: player.displayName }) : "",
  };

  return (
    <section id="identity" className="ace-ops3d mx-auto max-w-[76rem] px-4 py-8 sm:px-6" aria-label={c.identityKicker}>
      <article className="ace-ops3d-card ace-ops3d-identity">
        <p className="ace-ops3d-kicker">{c.identityKicker}</p>
        {player && tier ? (
          <>
            <PlayerCard
              name={player.displayName}
              avatarUrl={player.avatarUrl}
              rp={player.rating}
              wins={player.wins}
              losses={player.losses}
              labels={cardLabels}
              emblem={
                player.art === "premium" ? undefined : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={rankArtAsset(tier.level, player.art).stillSrc} alt={interpolate(c.emblemAlt, { rank: tier.name })} width={72} height={72} />
                )
              }
            />
            <div className="ace-ops3d-tags">
              {player.art === "premium" ? <span className="ace-premium-tag">{text.play.premium.tag}</span> : null}
              {player.elite ? (
                <span className="ace-ops3d-elite"><EliteSeal className="h-6 w-auto" /> {text.home.identity.elite}</span>
              ) : null}
            </div>
            {player.art === "premium" ? (
              <div className="ace-ops3d-showcase">
                <PremiumShowcase level={tier.level} rating={player.rating} labels={text.ranks.showcase} size="md" />
              </div>
            ) : null}
                        <CalibrationTrack played={placement} />
            <Link className="ace-ops3d-cta" href="/dashboard">{c.openDeck}</Link>
          </>
        ) : (
          <>
            <h2 className="ace-ops3d-name">{c.signedOutTitle}</h2>
            <p className="ace-ops3d-note">{c.signedOutBody}</p>
            <CalibrationTrack played={0} />
            <Link className="ace-ops3d-cta" href="/api/auth/steam">{c.connect}</Link>
          </>
        )}
      </article>

      <article className="ace-ops3d-card">
        <div className="ace-ops3d-row">
          <p className="ace-ops3d-kicker">{c.shieldKicker}</p>
          <span className="ace-ops3d-chip">{c.shieldChip}</span>
        </div>
        <h2 className="ace-ops3d-title">{c.shieldTitle}</h2>
        <p className="ace-ops3d-note">{c.shieldBody}</p>
        <dl className="ace-ops3d-list">
          <div><dt>{c.shieldClient}</dt><dd>{c.shieldClientValue}</dd></div>
          <div><dt>{c.shieldServer}</dt><dd>{c.shieldServerValue}</dd></div>
          <div><dt>{c.shieldHardware}</dt><dd>{c.shieldHardwareValue}</dd></div>
        </dl>
        <Link className="ace-ops3d-link" href="/anti-cheat">{c.shieldLink}</Link>
      </article>

      <div className="ace-ops3d-stack">
        <article className="ace-ops3d-card">
          <div className="ace-ops3d-row">
            <p className="ace-ops3d-kicker">{c.seasonKicker}</p>
            <span className="ace-ops3d-chip">{c.seasonChip}</span>
          </div>
          <h2 className="ace-ops3d-title">{c.seasonTitle}</h2>
          <p className="ace-ops3d-note">{c.seasonBody}</p>
        </article>
        <article className="ace-ops3d-card">
          <p className="ace-ops3d-kicker">{c.statsKicker}</p>
          <dl className="ace-ops3d-metrics ace-ops3d-metrics-3">
            <div><dt>{c.matches}</dt><dd>{player ? matches : na}</dd></div>
            <div><dt>{c.winRate}</dt><dd>{winRate}</dd></div>
            <div><dt>{c.kd}</dt><dd>{na}</dd></div>
          </dl>
          <p className="ace-ops3d-note">{!player ? c.statsSignedOut : matches === 0 ? c.statsEmpty : c.statsLive}</p>
          {player ? <Link className="ace-ops3d-link" href="/stats">{c.statsLink}</Link> : null}
        </article>
      </div>
    </section>
  );
}
