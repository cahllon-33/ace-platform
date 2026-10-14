import Link from "next/link";
import { ContactEmailForm } from "@/components/contact-email-form";
import { PlayerNetworkCards } from "@/components/player-network-cards";
import { PlayerRatingTrend } from "@/components/player-rating-trend";
import { TelemetryPaywall } from "@/components/telemetry-paywall";
import {
  buildCombatMatrix,
  buildRatingTrend,
  buildSignatureWeapon,
} from "@/lib/player-dossier";
import { interpolate } from "@/lib/i18n";
import { PLACEHOLDER_GEAR, type LayoutGear, type LayoutPlayer, type LayoutTeam } from "@/lib/tournament-layout";
import { getText } from "@/server/locale";

const PROFILE_LEVEL_BADGE = 10;

export async function PlayerProfileWorkspace({
  player,
  team,
  telemetryUnlocked,
  signedIn,
  contactEmail,
}: {
  player: LayoutPlayer;
  team: LayoutTeam;
  telemetryUnlocked: boolean;
  signedIn: boolean;
  contactEmail: string | null;
}) {
  const combat = buildCombatMatrix(player);
  const trend = buildRatingTrend(player);
  const weapon = buildSignatureWeapon(player);
  const text = await getText();
  const copy = text.account.profile;
  const gear = (key: keyof LayoutGear) =>
    player.gear[key] === PLACEHOLDER_GEAR[key] ? text.teams.gearPlaceholder[key] : player.gear[key];

  return (
    <main className="ace-profile-page">
      <div className="ace-profile-shell">
        <p className="ace-profile-kicker">{copy.kicker}</p>
        <h1 className="ace-profile-heading">{player.name}</h1>
        <p className="ace-profile-sub">
          [{player.tag}] {player.role} · {team.name}
        </p>

        <section className="ace-profile-hero" aria-labelledby="ace-profile-tactical">
          <div className="ace-profile-banner" aria-hidden="true">
            <span>{copy.bannerPlaceholder}</span>
          </div>
          <div className="ace-profile-hero-row">
            <div className="ace-profile-avatar" aria-hidden="true">
              {player.name.slice(0, 1)}
            </div>
            <div>
              <h2 id="ace-profile-tactical" className="ace-profile-hero-name">
                {player.name}
              </h2>
              <div className="ace-profile-tags">
                <span className="ace-profile-level">
                  {interpolate(copy.levelBadge, { level: PROFILE_LEVEL_BADGE })}
                </span>
                <span className="ace-profile-premium">{copy.premiumBadge}</span>
              </div>
              <p className="ace-profile-tag-note">
                {interpolate(copy.rosterLevel, { level: player.level })}
              </p>
            </div>
          </div>
          <ContactEmailForm signedIn={signedIn} initialEmail={contactEmail} />
        </section>

        <TelemetryPaywall unlocked={telemetryUnlocked}>
          <section className="ace-profile-block ace-dossier-glass" aria-labelledby="ace-dossier-trend">
            <h2 id="ace-dossier-trend" className="ace-profile-block-title">
              {copy.trend.title}
            </h2>
            <p className="ace-dossier-note">{copy.trend.note}</p>
            <PlayerRatingTrend points={trend} />
          </section>

          <section className="ace-profile-block" aria-labelledby="ace-dossier-combat">
            <h2 id="ace-dossier-combat" className="ace-profile-block-title">
              {copy.combat.title}
            </h2>
            <dl className="ace-profile-stats ace-dossier-combat">
              <div>
                <dt>{copy.combat.kills}</dt>
                <dd>{combat.kills.toLocaleString("en-US")}</dd>
              </div>
              <div>
                <dt>{copy.combat.deaths}</dt>
                <dd>{combat.deaths.toLocaleString("en-US")}</dd>
              </div>
              <div>
                <dt>{copy.combat.kd}</dt>
                <dd>{combat.kd}</dd>
              </div>
              <div>
                <dt>{copy.combat.headshots}</dt>
                <dd>{combat.headshots.toLocaleString("en-US")}</dd>
              </div>
              <div>
                <dt>{copy.combat.headshotPct}</dt>
                <dd>{combat.headshotPct}</dd>
              </div>
              <div className="ace-dossier-knife">
                <dt>{copy.combat.knifeKills}</dt>
                <dd>{combat.knifeKills}</dd>
              </div>
            </dl>
          </section>

          <section className="ace-profile-block ace-dossier-glass" aria-labelledby="ace-dossier-weapon">
            <h2 id="ace-dossier-weapon" className="ace-profile-block-title">
              {copy.weapon.title}
            </h2>
            <article className="ace-dossier-weapon">
              <div className="ace-dossier-weapon-mark" aria-hidden="true">
                <svg
                  viewBox="0 0 48 48"
                  width={48}
                  height={48}
                  className="ace-dossier-weapon-icon h-12 w-12 max-h-12 max-w-12 shrink-0"
                >
                  <rect x="4" y="4" width="40" height="40" rx="8" fill="#0B0B0C" stroke="#FFD700" strokeWidth="1.5" />
                  <path d="M10 30 H38 M14 24 H34 M24 16 V34" fill="none" stroke="#FFD700" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <p className="ace-dossier-weapon-name">{weapon.name}</p>
                <p className="ace-dossier-note">{copy.weapon.note}</p>
                <dl className="ace-dossier-weapon-stats">
                  <div>
                    <dt>{copy.weapon.accuracy}</dt>
                    <dd>{weapon.accuracy}</dd>
                  </div>
                <div>
                  <dt>{copy.weapon.kills}</dt>
                  <dd>{weapon.kills}</dd>
                </div>
                </dl>
              </div>
            </article>
          </section>
        </TelemetryPaywall>

        <section className="ace-profile-block" aria-labelledby="ace-profile-gear">
          <h2 id="ace-profile-gear" className="ace-profile-block-title">
            {copy.gear.title}
          </h2>
          <ul className="ace-profile-gear ace-dossier-gear">
            <li>
              <span>{copy.gear.cpu}</span>
              <strong>{gear("processor")}</strong>
            </li>
            <li>
              <span>{copy.gear.gpu}</span>
              <strong>{gear("gpu")}</strong>
            </li>
            <li>
              <span>{copy.gear.monitor}</span>
              <strong>{gear("monitor")}</strong>
            </li>
            <li>
              <span>{copy.gear.mouse}</span>
              <strong>{gear("mouse")}</strong>
            </li>
            <li>
              <span>{copy.gear.dpi}</span>
              <strong>{gear("dpi")}</strong>
            </li>
          </ul>
        </section>

        <section className="ace-profile-block" aria-labelledby="ace-dossier-networks">
          <h2 id="ace-dossier-networks" className="ace-profile-block-title">
            {copy.networksTitle}
          </h2>
          <PlayerNetworkCards />
        </section>

        <p className="ace-profile-disclosure">{text.teams.profileDisclosure}</p>
        <Link
          href={
            /^(apex|gf|sf|qf|r32|r64|r128)-\d+$/.test(team.id)
              ? "/tournaments"
              : `/tournaments?team=${encodeURIComponent(team.id)}`
          }
          className="ace-profile-back"
        >
          {copy.back}
        </Link>
      </div>
    </main>
  );
}
