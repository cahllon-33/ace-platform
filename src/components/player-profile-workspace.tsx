import Link from "next/link";
import { ContactEmailForm } from "@/components/contact-email-form";
import { PlayerBadges } from "@/components/player-badges";
import { PlayerNetworkCards } from "@/components/player-network-cards";
import { TelemetryPaywall } from "@/components/telemetry-paywall";
import { StatsConsole } from "@/components/stats-console";
import { playerBadges } from "@/lib/badges";
import { interpolate } from "@/lib/i18n";
import { PLACEHOLDER_GEAR, type LayoutGear, type LayoutPlayer, type LayoutTeam } from "@/lib/tournament-layout";
import { getText } from "@/server/locale";

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
                  {interpolate(copy.levelBadge, { level: player.level })}
                </span>
              </div>
              {/* Roster profiles have no membership record, so no Premium special badge is shown. */}
              <PlayerBadges
                badges={playerBadges({
                  subscriptionTier: null,
                  rankLevel: player.level,
                  wins: player.wins,
                  losses: player.losses,
                  steamLinked: false,
                })}
              />
              <p className="ace-profile-tag-note">
                {interpolate(copy.rosterLevel, { level: player.level })}
              </p>
            </div>
          </div>
          <ContactEmailForm signedIn={signedIn} initialEmail={contactEmail} />
        </section>

        <TelemetryPaywall unlocked={telemetryUnlocked}>
          {/* Roster players have no recorded matches: the console shows no numbers, only labelled sample shapes. */}
          <p className="ace-dossier-note">{text.account.statsConsole.rosterNote}</p>
          <StatsConsole text={text} data={{ mode: "sample" }} />
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
