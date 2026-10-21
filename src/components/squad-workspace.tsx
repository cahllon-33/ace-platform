"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreateTeamForm } from "@/components/dashboard-forms";
import "./squad-workspace.css";
import { useI18n } from "@/components/locale-provider";
import { SteamSignInButton } from "@/components/steam-sign-in-button";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/interpolate";
import {
  SQUAD_ROLE_KEYS,
  padRosterSlots,
  type FreeAgentView,
  type SquadSlotView,
} from "@/lib/squad-workspace";

type SquadTab = "matrix" | "agents";

export type SquadWorkspaceProps = {
  signedIn: boolean;
  displayName: string | null;
  teamId: string | null;
  teamName: string | null;
  teamTag: string | null;
  isCaptain: boolean;
  slots: SquadSlotView[];
  rosters: { id: string; name: string; tag: string; slots: SquadSlotView[] }[];
  agents: FreeAgentView[];
};

export function TeamsLocaleHero() {
  const hero = useText().teams.hero;
  return (
    <header className="ace-squad-hero pg41-hero">
      <p className="ace-squad-kicker">{hero.kicker}</p>
      <h1 className="ace-squad-title pg41-h1 mt-2">
        {hero.title}
      </h1>
      <p className="ace-squad-sub">{hero.lede}</p>
    </header>
  );
}

function RankChip({ level, label }: { level: number; label: string }) {
  return (
    <span className="ace-squad-rank">
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        className="ace-squad-rank-icon h-6 w-6 max-h-6 max-w-6 shrink-0"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0B0B0C" stroke="#FFD76A" strokeWidth="1.4" />
        <text x="12" y="16" textAnchor="middle" fill="#FFD76A" fontSize="10" fontWeight="800">
          {level}
        </text>
      </svg>
      {label}
    </span>
  );
}

function RosterCard({ slot }: { slot: SquadSlotView }) {
  const { t } = useI18n();
  const roles = useText().teams.squad.roles;
  const username = !slot.filled || slot.username === "OPEN SLOT" ? t("squadOpenSlot") : slot.username;
  const mark = username.slice(0, 2).toUpperCase();
  return (
    <li className={`ace-squad-card ${slot.filled ? "is-filled" : ""}`}>
      <div className="ace-squad-extrude" aria-hidden="true" />
      <article className="ace-squad-face backdrop-blur-xl">
        <span className="ace-squad-avatar" aria-hidden="true">
          {slot.avatarUrl ? "●" : slot.filled ? mark : "+"}
        </span>
        <p className="ace-squad-user">{username}</p>
        <p className="ace-squad-rating">{t("squadRating", { rating: slot.rating })}</p>
        <p className="ace-squad-role">{roles[SQUAD_ROLE_KEYS[slot.role]]}</p>
        <p className="ace-squad-badge">
          {t("squadAcBadge")}
          <span>{t("squadAcNote")}</span>
        </p>
        {slot.sample ? <p className="ace-squad-sample">{t("squadSample")}</p> : null}
      </article>
    </li>
  );
}

function InviteTile({
  signedIn,
  teamId,
  teamName,
  teamTag,
  isCaptain,
  displayName,
  inviteValue,
  onInviteValue,
}: {
  signedIn: boolean;
  teamId: string | null;
  teamName: string | null;
  teamTag: string | null;
  isCaptain: boolean;
  displayName: string | null;
  inviteValue: string;
  onInviteValue: (value: string) => void;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  return (
    <aside className="ace-squad-stats">
      <p className="ace-squad-kicker">{t("squadStatsKicker")}</p>
      <h2 className="ace-squad-panel-title">{t("squadStatsTitle")}</h2>
      <dl className="ace-squad-dl">
        <div>
          <dt>{t("squadClanTag")}</dt>
          <dd>{teamTag ?? teamName ?? "ACE"}</dd>
        </div>
        <div>
          <dt>{t("squadWinRate")}</dt>
          <dd>—</dd>
        </div>
        <div>
          <dt>{t("squadStreak")}</dt>
          <dd>—</dd>
        </div>
      </dl>
      <p className="ace-squad-note">{t("squadStatsNote")}</p>

      {!signedIn ? (
        <div className="ace-squad-invite">
          <p className="ace-squad-label">{t("squadInviteLabel")}</p>
          <SteamSignInButton i18nKey="connectProfile" variant="primary" />
        </div>
      ) : !teamId ? (
        <div className="ace-squad-invite">
          <p className="ace-squad-signed">{t("squadSignedIn", { name: displayName ?? "" })}</p>
          <CreateTeamForm />
        </div>
      ) : (
        <form
          className="ace-squad-invite"
          onSubmit={async (event) => {
            event.preventDefault();
            setMessage(null);
            if (!isCaptain) {
              setMessage(t("squadCaptainOnly"));
              return;
            }
            try {
              const response = await fetch(`/api/teams/${teamId}/invite`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ steamId: inviteValue }),
              });
              const data = (await response.json()) as { error?: string };
              if (!response.ok) {
                throw new Error(data.error ?? t("squadInviteFailed"));
              }
              onInviteValue("");
              router.refresh();
            } catch (error) {
              setMessage(error instanceof Error ? error.message : t("squadInviteFailed"));
            }
          }}
        >
          <label className="ace-squad-label" htmlFor="squad-invite">
            {t("squadInviteLabel")}
          </label>
          <p className="ace-squad-note">{t("squadInviteNote")}</p>
          <input
            id="squad-invite"
            value={inviteValue}
            onChange={(event) => onInviteValue(event.target.value)}
            className="ace-squad-input"
            placeholder={t("squadInvitePlaceholder")}
            required
          />
          <button type="submit" className="ace-squad-send">
            {t("squadSend")}
          </button>
          {message ? <p className="ace-squad-error">{message}</p> : null}
        </form>
      )}
    </aside>
  );
}

function AgentCard({
  agent,
  onRecruit,
}: {
  agent: FreeAgentView;
  onRecruit: (agent: FreeAgentView) => void;
}) {
  const { t } = useI18n();
  const copy = useText().teams.squad;
  return (
    <li className="ace-squad-agent">
      <div className="ace-squad-extrude" aria-hidden="true" />
      <article className="ace-squad-face backdrop-blur-xl">
        <RankChip level={agent.rankLevel} label={interpolate(copy.rankLabel, { level: agent.rankLevel })} />
        <h3 className="ace-squad-user">{agent.username}</h3>
        <p className="ace-squad-role">{copy.roles[SQUAD_ROLE_KEYS[agent.role]]}</p>
        <p className="ace-squad-rating">{t("squadRating", { rating: agent.rating })}</p>
        <button type="button" className="ace-squad-recruit" onClick={() => onRecruit(agent)}>
          {t("squadRecruit")}
        </button>
      </article>
    </li>
  );
}

export function SquadWorkspace({
  signedIn,
  displayName,
  teamId,
  teamName,
  teamTag,
  isCaptain,
  slots,
  rosters,
  agents,
}: SquadWorkspaceProps) {
  const { t } = useI18n();
  const copy = useText().teams.squad;
  const [tab, setTab] = useState<SquadTab>("matrix");
  const [inviteValue, setInviteValue] = useState("");
  const roster = teamId ? slots : [];

  return (
    <>
      <nav className="ace-squad-tabs" aria-label={t("squadTabsAria")}>
        <button
          type="button"
          className={`ace-squad-tab ${tab === "matrix" ? "is-active" : ""}`}
          aria-pressed={tab === "matrix"}
          onClick={() => setTab("matrix")}
        >
          {t("squadTabMatrix")}
        </button>
        <button
          type="button"
          className={`ace-squad-tab ${tab === "agents" ? "is-active" : ""}`}
          aria-pressed={tab === "agents"}
          onClick={() => setTab("agents")}
        >
          {t("squadTabAgents")}
        </button>
      </nav>

      {tab === "matrix" ? (
        <section className="ace-squad-suite mt-6 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(16rem,0.85fr)]">
          <div>
            <p className="ace-squad-kicker">{t("squadRosterKicker")}</p>
            {roster.length > 0 ? (
              <ul className="ace-squad-roster grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {roster.map((slot) => (
                  <RosterCard key={slot.key} slot={slot} />
                ))}
              </ul>
            ) : null}
            {rosters.length === 0 ? (
              <ul className="ace-squad-roster mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
                {padRosterSlots([]).map((slot) => (
                  <RosterCard key={slot.key} slot={slot} />
                ))}
              </ul>
            ) : (
              rosters.map((team) => (
                <div key={team.id} className="mt-6">
                  <p className="ace-squad-kicker">
                    [{team.tag}] {team.name}
                  </p>
                  <ul className="ace-squad-roster grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    {team.slots.map((slot) => (
                      <RosterCard key={`${team.id}-${slot.key}`} slot={slot} />
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
          <InviteTile
            signedIn={signedIn}
            teamId={teamId}
            teamName={teamName}
            teamTag={teamTag}
            isCaptain={isCaptain}
            displayName={displayName}
            inviteValue={inviteValue}
            onInviteValue={setInviteValue}
          />
        </section>
      ) : (
        <section>
          <p className="ace-squad-kicker">{t("squadAgentsKicker")}</p>
          <ul className="ace-squad-agents mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {agents.length === 0 ? (
              <li className="ace-squad-sub">{copy.noAgents}</li>
            ) : (
              agents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onRecruit={(next) => {
                    setInviteValue(next.id);
                    setTab("matrix");
                  }}
                />
              ))
            )}
          </ul>
        </section>
      )}

      <aside className="ace-squad-notice" role="note">
        <p>{copy.notice}</p>
      </aside>
    </>
  );
}
