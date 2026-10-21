import { RankOrb, TIER_TONE } from "@/components/rank-orb";
import { RpCountUp } from "@/components/rp-count-up";
import { interpolate } from "@/lib/i18n";
import { prestigeBadge, prestigeForRp, prestigeSetFor } from "@/lib/prestige";
import { rankProgress } from "@/lib/rank-progress";
import type { RankArt } from "@/lib/ranks";
import type { Ui } from "@/lib/i18n/ui";
import "./hero-rank-stage.css";

export type HeroRankPlayer = {
  name: string;
  avatarUrl: string | null;
  avatarAlt: string;
  rp: number;
  plan: string;
  art: RankArt;
  wins: number;
  losses: number;
};

/** Pure view model (tested): everything shown comes from the player's stored RP, plan and record. */
export function heroRankModel(p: Pick<HeroRankPlayer, "rp" | "plan" | "wins" | "losses">) {
  const prog = rankProgress(p.rp);
  const badge = prestigeBadge(prog.rp, p.plan);
  const milestone = prestigeForRp(prog.rp);
  const set = prestigeSetFor(p.plan);
  const played = Math.max(0, p.wins) + Math.max(0, p.losses);
  const record = played > 0 ? { played, wins: p.wins, losses: p.losses, winRate: Math.round((p.wins / played) * 100) } : null;
  return { prog, badge, milestone, set, record };
}

const RING_R = 44;
const RING_C = 2 * Math.PI * RING_R;

/** Signed-in home hero: the player's own orbital rank orb, identity, animated RP and the next step. */
export function HeroRankStage({ player, ui }: { player: HeroRankPlayer; ui: Ui }) {
  const t = ui.r44;
  const { prog, badge, milestone, set, record } = heroRankModel(player);
  const tone = TIER_TONE[prog.tier.level];
  const finish = set === "premium" ? "premium" : set === "plus" ? "plus" : "free";
  const division = interpolate(ui.r38.card.division, { division: prog.division });
  const nextName = prog.next ? `${prog.next.tier.name} · ${interpolate(ui.r38.card.division, { division: prog.next.division })}` : "";
  return (
    <section className={`hrs is-${finish}${badge ? " has-prestige" : ""}`} style={{ ["--hrs-tone" as string]: tone }} aria-label={t.kicker}>
      <div className="hrs-stage" aria-hidden="true">
        <span className="hrs-aura" />
        <span className="hrs-field">{Array.from({ length: 14 }, (_, i) => <i key={i} />)}</span>
        <span className="hrs-rings is-back">
          <span className="hrs-orbit is-a"><span className="hrs-path"><b className="hrs-sat" /><b className="hrs-sat is-2" /></span></span>
          <span className="hrs-orbit is-b"><span className="hrs-path"><b className="hrs-sat is-3" /></span></span>
        </span>
        <span className="hrs-spin">
          <RankOrb level={prog.tier.level} art={player.art} size={240} label={t.kicker} priority prestige={badge} />
        </span>
        <span className="hrs-rings is-front">
          <span className="hrs-orbit is-a"><span className="hrs-path"><b className="hrs-sat" /><b className="hrs-sat is-2" /></span></span>
          <span className="hrs-orbit is-b"><span className="hrs-path"><b className="hrs-sat is-3" /></span></span>
        </span>
        <span className="hrs-plinth" />
      </div>

      <div className="hrs-panel">
        <p className="hrs-kicker">{t.kicker}</p>
        <div className="hrs-id">
          {player.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="hrs-avatar" src={player.avatarUrl} alt={player.avatarAlt} width={44} height={44} referrerPolicy="no-referrer" />
          ) : (
            <span className="hrs-avatar is-empty" aria-hidden="true">{player.name.trim().charAt(0).toUpperCase()}</span>
          )}
          <div className="hrs-id-text">
            <strong className="hrs-name">{player.name}</strong>
            {finish !== "free" ? <span className={`hrs-finish is-${finish}`}>{finish === "premium" ? t.finishPremium : t.finishPlus}</span> : null}
          </div>
        </div>

        <h2 className="hrs-tier">
          <span className="hrs-tier-name">{prog.tier.name}</span>
          <span className="hrs-tier-div">{division}</span>
        </h2>
        {milestone ? (
          <p className="hrs-prestige">
            {badge ? interpolate(ui.r41c.pr.level, { n: milestone.level, name: milestone.name }) : `${interpolate(ui.r41c.pr.milestone, { n: milestone.level })} · ${milestone.name}`}
          </p>
        ) : null}

        <p className="hrs-rp">
          <RpCountUp value={prog.rp} />
          <span className="hrs-rp-unit">RP</span>
        </p>

        <div className="hrs-next">
          <span
            className="hrs-ring"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={prog.percent}
            aria-label={prog.next ? interpolate(t.progressAria, { name: nextName }) : ui.r38.journey.top}
          >
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle className="hrs-ring-track" cx="50" cy="50" r={RING_R} />
              <circle
                className="hrs-ring-fill"
                cx="50"
                cy="50"
                r={RING_R}
                strokeDasharray={RING_C}
                style={{ ["--hrs-dash" as string]: `${RING_C * (1 - prog.percent / 100)}` }}
              />
            </svg>
            <span className="hrs-ring-orb">
              <RankOrb level={prog.next ? prog.next.tier.level : prog.tier.level} size={46} label={t.next} />
            </span>
          </span>
          <div className="hrs-next-text">
            <span className="hrs-next-k">{t.next}</span>
            <strong>{prog.next ? nextName : ui.r38.journey.top}</strong>
            {prog.next ? <span className="hrs-next-go">{interpolate(ui.r38.journey.toGo, { rp: prog.rpToNext.toLocaleString("en-US") })}</span> : null}
          </div>
          <span className="hrs-pct">{prog.percent}%</span>
        </div>

        {record ? (
          <dl className="hrs-record">
            <div><dt>{t.matches}</dt><dd>{record.played.toLocaleString("en-US")}</dd></div>
            <div><dt>{ui.r38.card.wl}</dt><dd>{record.wins}<span>/</span>{record.losses}</dd></div>
            <div><dt>{t.winRate}</dt><dd>{record.winRate}%</dd></div>
          </dl>
        ) : (
          <p className="hrs-empty">{t.noMatches}</p>
        )}
      </div>
    </section>
  );
}
