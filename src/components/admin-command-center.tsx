"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAdminI18n } from "@/components/admin-locale";
import {
  ADMIN_COPILOT_LINES,
  formatPipelineUsd,
  type AdminPlayerRow,
  type AdminSecurity,
  type AdminTier,
} from "@/lib/admin-command";
import { translateAdmin, type AdminMessageKey } from "@/lib/admin-i18n";
import {
  disconnectAdminSteam,
  resetAdminProfile,
  setAdminAccountBan,
  setAdminRankTen,
  upgradeAdminPremium,
  type AdminLiveStats,
  type AdminMatchBrief,
  type AdminReport,
} from "@/server/admin-users";
import "./admin-command.css";

const TIER_KEY: Record<AdminTier, AdminMessageKey> = {
  Free: "tierFree",
  Plus: "tierPlus",
  Premium: "tierPremium",
};

const SECURITY_KEY: Record<AdminSecurity, AdminMessageKey> = {
  Active: "securityActive",
  Suspended: "securitySuspended",
  Banned: "securityBanned",
};

const INFO_CHIPS: Array<[AdminMessageKey, AdminMessageKey]> = [
  ["chipDb", "chipDbBody"],
  ["chipKernel", "chipKernelBody"],
  ["chipBill", "chipBillBody"],
  ["chipSteam", "chipSteamBody"],
  ["chipMatch", "chipMatchBody"],
];

type Overlay = { kind: "disconnect" | "upgrade" | "rank" | "reset"; player: AdminPlayerRow };

const OVERLAY_COPY: Record<
  Overlay["kind"],
  { kicker: AdminMessageKey; title: AdminMessageKey; body: AdminMessageKey; honest: AdminMessageKey }
> = {
  disconnect: { kicker: "steamKicker", title: "steamTitle", body: "steamBody", honest: "steamHonest" },
  upgrade: { kicker: "upgradeKicker", title: "upgradeTitle", body: "upgradeBody", honest: "upgradeHonest" },
  rank: { kicker: "rankKicker", title: "rankTitle", body: "rankBody", honest: "rankHonest" },
  reset: { kicker: "resetKicker", title: "resetTitle", body: "resetBody", honest: "resetHonest" },
};

function CommandOverlay({
  overlay,
  dir,
  lang,
  onClose,
}: {
  overlay: Overlay;
  dir: "ltr" | "rtl";
  lang: string;
  onClose: () => void;
}) {
  const { t } = useAdminI18n();
  const titleId = useId();
  const name = overlay.player.username;
  const keys = OVERLAY_COPY[overlay.kind];

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="ace-admin-modal" role="presentation" dir={dir} lang={lang}>
      <button
        type="button"
        suppressHydrationWarning
        className="ace-admin-backdrop"
        aria-label={t("close")}
        onClick={onClose}
      />
      <section className="ace-admin-dialog ace-admin-dialog-smoke" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <p className="ace-admin-kicker">{t(keys.kicker)}</p>
        <h2 id={titleId} className="ace-admin-dialog-title">
          {t(keys.title)}
        </h2>
        <p className="ace-admin-copy">{t(keys.body, { name })}</p>
        <p className="ace-admin-copy">{t(keys.honest)}</p>
        <button type="button" suppressHydrationWarning className="ace-admin-close" onClick={onClose}>
          {t("close")}
        </button>
      </section>
    </div>,
    document.body,
  );
}

function deskAnswer(
  query: string,
  stats: AdminLiveStats,
  matchCount: number,
  reportCount: number,
  t: (key: AdminMessageKey, values?: Record<string, string | number>) => string,
) {
  const q = query.toLowerCase();
  if (/online|connected|מחובר|שחקנ/.test(q)) return t("assistOnline", { count: stats.online });
  if (/match|game|משחק|שרת/.test(q)) return t("assistMatches", { count: matchCount });
  if (/report|cheat|דיווח|צ'יט|ציט/.test(q)) return t("assistReports", { count: reportCount });
  if (/money|revenue|\$|כסף|הכנס/.test(q)) return t("assistMoney");
  if (/ban|באן|חסימ/.test(q)) return t("assistBans");
  return t("assistMenu");
}

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const raw = `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? parts[0]?.[1] ?? ""}`;
  return (raw || "AC").toUpperCase().slice(0, 2);
}

function PlayerDrawer({
  player,
  dir,
  lang,
  staging,
  onClose,
  onChange,
}: {
  player: AdminPlayerRow;
  dir: "ltr" | "rtl";
  lang: string;
  staging: boolean;
  onClose: () => void;
  onChange: (next: Partial<AdminPlayerRow>) => void;
}) {
  const { t } = useAdminI18n();
  const titleId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="ace-admin-drawer-root" dir={dir} lang={lang}>
      <button type="button" className="ace-admin-backdrop" aria-label={t("close")} onClick={onClose} suppressHydrationWarning />
      <aside className="ace-admin-drawer" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <p className="ace-admin-kicker">{t("colAction")}</p>
        <h2 id={titleId} className="ace-admin-dialog-title">
          {t("dossierTitle")}
        </h2>
        <label className="ace-admin-label" htmlFor="ace-edit-user">
          {t("drawerUser")}
        </label>
        <input
          id="ace-edit-user"
          className="ace-admin-input"
          value={player.username}
          onChange={(event) => onChange({ username: event.target.value })}
          suppressHydrationWarning
        />
        <label className="ace-admin-label" htmlFor="ace-edit-tier">
          {t("drawerTier")}
        </label>
        <select
          id="ace-edit-tier"
          className="ace-admin-input"
          value={player.tier}
          onChange={(event) => onChange({ tier: event.target.value as AdminTier })}
          suppressHydrationWarning
        >
          <option value="Free">{t("tierFree")}</option>
          <option value="Plus">{t("tierPlus")}</option>
          <option value="Premium">{t("tierPremium")}</option>
        </select>
        <label className="ace-admin-label" htmlFor="ace-edit-rp">
          {t("drawerRp")}
        </label>
        <input
          id="ace-edit-rp"
          className="ace-admin-input"
          inputMode="numeric"
          value={String(player.rating)}
          onChange={(event) => {
            const rating = Number(event.target.value.replace(/[^\d]/g, ""));
            onChange({ rating: Number.isFinite(rating) ? rating : 0 });
          }}
          suppressHydrationWarning
        />
        <label className="ace-admin-label" htmlFor="ace-edit-rank">
          {t("drawerRank")}
        </label>
        <input
          id="ace-edit-rank"
          className="ace-admin-input"
          inputMode="numeric"
          value={String(player.rank)}
          onChange={(event) => {
            const rank = Number(event.target.value.replace(/[^\d]/g, ""));
            const next = Number.isFinite(rank) ? Math.min(10, Math.max(1, rank || 1)) : 1;
            onChange({ rank: next });
          }}
          suppressHydrationWarning
        />
        <dl className="ace-admin-dossier">
          <div>
            <dt>{t("dossierHash")}</dt>
            <dd className="ace-admin-mono">{player.machineHash}</dd>
          </div>
          <div>
            <dt>{t("dossierSteam")}</dt>
            <dd className="ace-admin-mono">{player.steamId}</dd>
          </div>
          <div>
            <dt>{t("dossierRegistered")}</dt>
            <dd>{player.registeredOn}</dd>
          </div>
          <div>
            <dt>{t("dossierStatus")}</dt>
            <dd>{t(SECURITY_KEY[player.security])}</dd>
          </div>
        </dl>
        <p className="ace-admin-kicker">{t("dossierLatency")}</p>
        <ul className="ace-admin-latency">
          <li>{t("latencyLine", { region: player.region, ms: player.latencyMs })}</li>
          <li>{t("latencyIdle")}</li>
        </ul>
        <p className="ace-admin-info-chip ace-admin-info-chip-inline">
          <strong>{t("dossierSample")}</strong>
          <span>{t("dossierBanNote")}</span>
        </p>
        <button
          type="button"
          className="ace-admin-gold"
          onClick={() => onChange({ security: "Banned" })}
          suppressHydrationWarning
        >
          {t("dossierBan")}
        </button>
        <p className="ace-admin-info-chip ace-admin-info-chip-inline">
          <strong>{t("chipDb")}</strong>
          <span>{t(staging ? "chipDbStaging" : "chipDbBody")}</span>
        </p>
        <button type="button" className="ace-admin-close" onClick={onClose} suppressHydrationWarning>
          {t("close")}
        </button>
      </aside>
    </div>,
    document.body,
  );
}

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function AdminCommandCenter({
  initialPlayers,
  stats,
  matches,
  reports,
}: {
  initialPlayers: AdminPlayerRow[];
  stats: AdminLiveStats;
  matches: AdminMatchBrief[];
  reports: AdminReport[];
}) {
  const admin = useAdminI18n();
  const router = useRouter();
  const mounted = useHydrated();
  const signature = initialPlayers
    .map((player) => `${player.id}:${player.steamId}:${player.tier}:${player.rank}:${player.rating}:${player.security}`)
    .join("|");
  const [seen, setSeen] = useState(signature);
  const [players, setPlayers] = useState(initialPlayers);
  if (seen !== signature) {
    setSeen(signature);
    setPlayers(initialPlayers);
  }
  const [overlay, setOverlay] = useState<Overlay | null>(null);
  const [copilotQuery, setCopilotQuery] = useState("");
  const [copilotReply, setCopilotReply] = useState<string | null>(null);
  const [reportId, setReportId] = useState<string | null>(reports[0]?.id ?? null);
  const [editorId, setEditorId] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const [rankPulseId, setRankPulseId] = useState<string | null>(null);

  const selectedReport = reports.find((report) => report.id === reportId) ?? null;
  const t = mounted
    ? admin.t
    : (key: AdminMessageKey, values?: Record<string, string | number>) =>
        translateAdmin("en", key, values);
  const dir = mounted ? admin.dir : "ltr";
  const lang = mounted ? admin.lang : "en";

  function patchPlayer(player: AdminPlayerRow, next: Partial<AdminPlayerRow>) {
    const updated = { ...player, ...next };
    setPlayers((current) => current.map((row) => (row.id === player.id ? updated : row)));
  }

  function showFlash(message: string) {
    setFlash(message);
    window.setTimeout(() => {
      setFlash((current) => (current === message ? null : current));
    }, 2400);
  }

  function runBan(player: AdminPlayerRow, banned: boolean) {
    if (stats.staging || stats.unavailable) {
      showFlash(t("banNotSaved"));
      return;
    }
    void setAdminAccountBan(player.id, banned).then((result) => {
      if (!result.ok) {
        showFlash(t("banNotSaved"));
        return;
      }
      patchPlayer(player, { security: banned ? "Banned" : "Active" });
      showFlash(t(banned ? "banSaved" : "unbanSaved"));
      router.refresh();
    });
  }

  function runInventory(
    player: AdminPlayerRow,
    kind: "disconnect" | "upgrade" | "rank" | "reset",
  ) {
    if (stats.staging) {
      if (kind === "disconnect") {
        patchPlayer(player, { steamId: "—" });
        showFlash(t("steamFlash"));
      } else if (kind === "upgrade") {
        patchPlayer(player, { tier: "Premium" });
      } else if (kind === "rank") {
        patchPlayer(player, { rank: 10, rating: 3000 });
        setRankPulseId(player.id);
      } else {
        patchPlayer(player, { rank: 1, rating: 1000, tier: "Free" });
        setRankPulseId((current) => (current === player.id ? null : current));
      }
      return;
    }

    const action =
      kind === "disconnect"
        ? disconnectAdminSteam
        : kind === "upgrade"
          ? upgradeAdminPremium
          : kind === "rank"
            ? setAdminRankTen
            : resetAdminProfile;
    void action(player.id).then((result) => {
      if (!result.ok) return;
      if (kind === "disconnect") patchPlayer(player, { steamId: t("steamCleared") });
      else if (kind === "upgrade") patchPlayer(player, { tier: "Premium" });
      else if (kind === "rank") {
        patchPlayer(player, { rank: 10, rating: 3000 });
        setRankPulseId(player.id);
      } else {
        patchPlayer(player, { rank: 1, rating: 1000, tier: "Free" });
        setRankPulseId((current) => (current === player.id ? null : current));
      }
      router.refresh();
    });
  }

  const editor = players.find((player) => player.id === editorId) ?? null;

  function editPlayer(next: Partial<AdminPlayerRow>) {
    if (!editor) return;
    setPlayers((current) =>
      current.map((row) => {
        if (row.id !== editor.id) return row;
        const username = next.username ?? row.username;
        return {
          ...row,
          ...next,
          username,
          initials: next.username ? initialsFor(username) : row.initials,
        };
      }),
    );
  }

  return (
    <div className="ace-admin-shell" dir={dir} lang={lang} suppressHydrationWarning>
      <header className="ace-admin-hero">
        <p className="ace-admin-kicker">{t("kicker")}</p>
        <h1 className="ace-admin-title">{t("title")}</h1>
        <p className="ace-admin-status">
          <span className="ace-admin-pulse" aria-hidden="true" />
          {t("status")}
        </p>
        <div className="ace-admin-matrix">
          <dl className="ace-admin-stats">
            <div className="ace-admin-stat">
              <dt>{t("statRevenue")}</dt>
              <dd>
                {formatPipelineUsd(stats.grossCents)}
                <span className="ace-admin-stat-note">{t("moneyNote")}</span>
              </dd>
            </div>
            <div className="ace-admin-stat">
              <dt>{t("statPlayers")}</dt>
              <dd>
                {stats.staging
                  ? t("enrollmentStaging")
                  : stats.unavailable
                    ? t("statUnavailable")
                    : t("enrollmentValue", { count: stats.enrollment })}
              </dd>
            </div>
            <div className="ace-admin-stat">
              <dt>{t("statOnline")}</dt>
              <dd>
                {stats.unavailable || stats.staging || stats.presence !== "ok"
                  ? t("statUnavailable")
                  : t("onlineValue", { count: stats.online })}
              </dd>
            </div>
            <div className="ace-admin-stat">
              <dt>{t("statServers")}</dt>
              <dd>{t("serversValue", { count: stats.servers })}</dd>
            </div>
          </dl>
          <section className="ace-admin-connected" aria-label={t("connectedTitle")}>
            <h2>{t("connectedTitle")}</h2>
            <p>{t("connectedLede")}</p>
            {stats.presence === "migration" ? (
              <p>{t("connectedMigration")}</p>
            ) : stats.unavailable || stats.staging || stats.presence === "down" ? (
              <p>{t("connectedUnavailable")}</p>
            ) : stats.connected.length === 0 ? (
              <p>{t("connectedEmpty")}</p>
            ) : (
              <ul>
                {stats.connected.map((player) => (
                  <li key={player.id}>
                    <strong>{player.displayName}</strong>
                    <span>{player.steamId}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <form
            className="ace-admin-copilot"
            onSubmit={(event) => {
              event.preventDefault();
              const query = copilotQuery.trim();
              if (!query) return;
              setCopilotReply(deskAnswer(query, stats, matches.length, reports.length, t));
              setCopilotQuery("");
            }}
          >
            <p className="ace-admin-kicker">{t("copilotSim")}</p>
            <h2 className="ace-admin-section-title">{t("copilotTitle")}</h2>
            <label className="ace-admin-label" htmlFor="ace-copilot">
              {t("copilotPlaceholder")}
            </label>
            <input
              id="ace-copilot"
              className="ace-admin-input"
              value={copilotQuery}
              onChange={(event) => setCopilotQuery(event.target.value)}
              autoComplete="off"
              suppressHydrationWarning
            />
            <button type="submit" className="ace-admin-gold" suppressHydrationWarning>
              {t("copilotSubmit")}
            </button>
            {copilotReply ? <p className="ace-admin-copilot-reply">{copilotReply}</p> : null}
            <ul className="ace-admin-ticker" aria-live="polite">
              {ADMIN_COPILOT_LINES.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </form>
        </div>
        <ul className="ace-admin-chips">
          {INFO_CHIPS.map(([title, body]) => (
            <li key={title} className="ace-admin-info-chip">
              <strong>{t(title)}</strong>
              <span>{t(stats.staging && body === "chipDbBody" ? "chipDbStaging" : body)}</span>
            </li>
          ))}
        </ul>
      </header>

      <section className="ace-admin-section" aria-labelledby="admin-registry-title">
        <h2 id="admin-registry-title" className="ace-admin-section-title">
          {t("registryTitle")}
        </h2>
        {flash ? (
          <p className="ace-admin-flash" role="status">
            {flash}
          </p>
        ) : null}
        <div className="ace-admin-table-wrap">
          <table className="ace-admin-table" suppressHydrationWarning>
            <thead>
              <tr>
                <th>{t("colAvatar")}</th>
                <th>{t("colUsername")}</th>
                <th>{t("colEmail")}</th>
                <th>{t("colSteam")}</th>
                <th>{t("colRank")}</th>
                <th>{t("colRating")}</th>
                <th>{t("colTier")}</th>
                <th>{t("colAction")}</th>
              </tr>
            </thead>
            <tbody>
              {players.length === 0 ? (
                <tr>
                  <td colSpan={8}>{stats.unavailable ? t("statUnavailable") : t("emptyPlayers")}</td>
                </tr>
              ) : null}
              {players.map((player) => (
                <tr
                  key={player.id}
                  className="ace-admin-row"
                  onClick={() => setEditorId(player.id)}
                >
                  <td>
                    <button
                      type="button"
                      className="ace-admin-avatar ace-admin-select"
                      aria-label={t("openDossier")}
                      suppressHydrationWarning
                      onClick={(event) => {
                        event.stopPropagation();
                        setEditorId(player.id);
                      }}
                    >
                      {player.initials}
                    </button>
                  </td>
                  <td>
                    {player.username}
                    {player.steamId === "—" ? ` · ${t("decoupledNote")}` : ""}
                  </td>
                  <td>{player.email}</td>
                  <td className="ace-admin-mono">{player.steamId}</td>
                  <td className={player.id === rankPulseId ? "ace-admin-rank-hot" : undefined}>
                    <span className="ace-admin-chip">{player.rank}</span>
                  </td>
                  <td className={player.id === rankPulseId ? "ace-admin-rating-hot" : undefined}>
                    {player.rating.toLocaleString("en-US")}
                  </td>
                  <td>
                    <span className={player.tier === "Premium" ? "ace-admin-tier-premium" : undefined}>
                      {t(TIER_KEY[player.tier])}
                    </span>
                  </td>
                  <td>
                    <div className="ace-admin-actions">
                      <button
                        type="button"
                        suppressHydrationWarning
                        className="ace-admin-ghost"
                        onClick={(event) => {
                          event.stopPropagation();
                          runInventory(player, "disconnect");
                        }}
                      >
                        {t("disconnect")}
                      </button>
                      <button
                        type="button"
                        suppressHydrationWarning
                        className="ace-admin-ghost"
                        onClick={(event) => {
                          event.stopPropagation();
                          runInventory(player, "upgrade");
                        }}
                      >
                        {t("upgrade")}
                      </button>
                      <button
                        type="button"
                        suppressHydrationWarning
                        className="ace-admin-ghost"
                        onClick={(event) => {
                          event.stopPropagation();
                          runInventory(player, "rank");
                        }}
                      >
                        {t("setRank")}
                      </button>
                      <button
                        type="button"
                        suppressHydrationWarning
                        className="ace-admin-ghost"
                        onClick={(event) => {
                          event.stopPropagation();
                          runInventory(player, "reset");
                        }}
                      >
                        {t("reset")}
                      </button>
                      <button
                        type="button"
                        suppressHydrationWarning
                        className="ace-admin-ghost"
                        onClick={(event) => {
                          event.stopPropagation();
                          runBan(player, player.security !== "Banned");
                        }}
                      >
                        {player.security === "Banned" ? t("unbanAction") : t("banAction")}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="ace-admin-desk" aria-label={t("deskMatchesTitle")}>
        <article className="ace-admin-panel">
          <h2>{t("deskMatchesTitle")}</h2>
          <p>{t("deskMatchesNote")}</p>
          {matches.length === 0 ? (
            <p className="ace-admin-empty">{t("deskMatchesEmpty")}</p>
          ) : (
            <ul className="ace-admin-live-list">
              {matches.map((match) => (
                <li key={match.id}>
                  <strong>{match.mapName}</strong>
                  <span>
                    {match.format} · {match.score} · {match.state}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </article>
        <article className="ace-admin-panel">
          <h2>{t("deskReportsTitle")}</h2>
          <p>{t("deskReportsNote")}</p>
          {reports.length === 0 ? (
            <p className="ace-admin-empty">{t("deskReportsEmpty")}</p>
          ) : (
            <ul className="ace-admin-tickets">
              {reports.map((report) => (
                <li key={report.id}>
                  <button
                    type="button"
                    className={`ace-admin-ticket${report.id === reportId ? " is-active" : ""}`}
                    onClick={() => setReportId(report.id)}
                  >
                    <p className="ace-admin-ticket-id">{report.createdAt}</p>
                    <p>{t("reporter", { name: report.reporter })}</p>
                    <p>{t("suspect", { name: report.suspect })}</p>
                    <p>{report.reason}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {selectedReport ? (
            <dl className="ace-admin-report-detail">
              <div>
                <dt>{t("deskReportMap")}</dt>
                <dd>{selectedReport.mapName}</dd>
              </div>
              <div>
                <dt>{t("deskReportScore")}</dt>
                <dd>{selectedReport.score}</dd>
              </div>
              <div>
                <dt>{t("deskReportState")}</dt>
                <dd>{selectedReport.state}</dd>
              </div>
              <div>
                <dt>{t("deskNoDemo")}</dt>
                <dd>{selectedReport.reason}</dd>
              </div>
            </dl>
          ) : null}
        </article>
      </section>

      {overlay ? (
        <CommandOverlay overlay={overlay} dir={dir} lang={lang} onClose={() => setOverlay(null)} />
      ) : null}
      {editor ? (
        <PlayerDrawer
          player={editor}
          dir={dir}
          lang={lang}
          staging={stats.staging}
          onClose={() => setEditorId(null)}
          onChange={editPlayer}
        />
      ) : null}
    </div>
  );
}
