"use client";

import { RP_RULES } from "@/lib/rp-rules";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAdminI18n } from "@/components/admin-locale";
import {
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
  setAdminTier,
  upgradeAdminPremium,
  type AdminLiveStats,
  type AdminTournamentRow,
  type AdminMatchBrief,
  type AdminReport,
} from "@/server/admin-users";
import { AdminTvWall } from "@/components/admin-tv-wall";
import type { TvWall } from "@/server/admin-broadcast";
import "./admin-command.css";

const TIER_DB: Record<AdminTier, "FREE" | "PLUS" | "PREMIUM"> = { Free: "FREE", Plus: "PLUS", Premium: "PREMIUM" };
const TIER_FROM_DB: Record<string, AdminTier> = { FREE: "Free", PLUS: "Plus", PREMIUM: "Premium" };

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

function PlayerDrawer({
  player,
  dir,
  lang,
  staging,
  onClose,
  onBan,
}: {
  player: AdminPlayerRow;
  dir: "ltr" | "rtl";
  lang: string;
  staging: boolean;
  onClose: () => void;
  onBan: () => void;
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
        <div className="acx-dossier-head">
          <span className="acx-avatar acx-avatar-lg" aria-hidden="true">{player.initials}</span>
          <div>
            <p className="acx-dossier-name">{player.username}</p>
            <p className="acx-muted">{player.email}</p>
          </div>
        </div>
        <dl className="acx-dossier-stats">
          <div><dt>{t("drawerRank")}</dt><dd>{player.rank}</dd></div>
          <div><dt>{t("drawerRp")}</dt><dd>{player.rating.toLocaleString("en-US")}</dd></div>
          <div><dt>{t("drawerTier")}</dt><dd>{t(TIER_KEY[player.tier])}</dd></div>
        </dl>
        <p className="acx-note">{t("dossierReadOnly")}</p>
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
        <button
          type="button"
          className="ace-admin-gold"
          onClick={onBan}
          suppressHydrationWarning
        >
          {player.security === "Banned" ? t("unbanAction") : t("banAction")}
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
  tv,
  tournaments,
}: {
  initialPlayers: AdminPlayerRow[];
  stats: AdminLiveStats;
  matches: AdminMatchBrief[];
  reports: AdminReport[];
  tv: TvWall;
  tournaments: AdminTournamentRow[];
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
    if (stats.staging || stats.unavailable) {
      showFlash(t("stagingNoWrite"));
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
        patchPlayer(player, { rank: RP_RULES.startingTier, rating: RP_RULES.startingRating, tier: "Free" });
        setRankPulseId((current) => (current === player.id ? null : current));
      }
      router.refresh();
    });
  }

  function runTier(player: AdminPlayerRow, tier: AdminTier) {
    if (stats.staging || stats.unavailable) {
      showFlash(t("stagingNoWrite"));
      return;
    }
    void setAdminTier(player.id, TIER_DB[tier]).then((result) => {
      if (!result.ok) {
        showFlash(t("tierNotSaved"));
        return;
      }
      patchPlayer(player, { tier });
      showFlash(t("tierSaved"));
      router.refresh();
    });
  }

  const editor = players.find((player) => player.id === editorId) ?? null;

  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const shown = needle
    ? players.filter((player) =>
        [player.username, player.email, player.steamId].some((value) => value.toLowerCase().includes(needle)),
      )
    : players;
  const dbState = stats.staging ? "preview" : stats.unavailable ? "down" : "live";
  const nav: Array<[string, AdminMessageKey, number | null]> = [
    ["acx-overview", "navOverview", null],
    ["acx-tv", "navTv", tv.feeds.length],
    ["acx-players", "navPlayers", players.length],
    ["acx-matches", "navMatches", matches.length],
    ["acx-reports", "navReports", reports.length],
    ["acx-tournaments", "navTournaments", tournaments.length],
  ];

  return (
    <div className="ace-admin-shell acx" dir={dir} lang={lang} suppressHydrationWarning>
      <aside className="acx-side" aria-label={t("navLabel")}>
        <div className="acx-brand">
          <span className="acx-brand-mark" aria-hidden="true">A</span>
          <span>
            <strong>A.C.E.</strong>
            <small>{t("navBrand")}</small>
          </span>
        </div>
        <nav className="acx-nav">
          {nav.map(([id, key, count]) => (
            <a key={id} href={`#${id}`}>
              <span>{t(key)}</span>
              {count !== null ? <span className="acx-count">{count}</span> : null}
            </a>
          ))}
        </nav>
        <div className="acx-env">
          <p className="acx-label">{t("envTitle")}</p>
          <p className={`acx-env-state is-${dbState}`}>
            <span className="acx-dot" aria-hidden="true" />
            {t(dbState === "preview" ? "envPreview" : dbState === "down" ? "envDown" : "envLive")}
          </p>
          <p className="acx-muted">{t("roleNote")}</p>
        </div>
      </aside>

      <div className="acx-main">
        <header className="acx-top" id="acx-overview">
          <div>
            <p className="ace-admin-kicker">{t("kicker")}</p>
            <h1 className="acx-title">{t("title")}</h1>
          </div>
          <p className="acx-status">
            <span className="ace-admin-pulse" aria-hidden="true" />
            {t("status")}
          </p>
        </header>

        <dl className="acx-kpis">
          <div className="acx-kpi">
            <dt>{t("statRevenue")}</dt>
            <dd>{formatPipelineUsd(stats.grossCents)}</dd>
            <p>{t("moneyNote")}</p>
          </div>
          <div className="acx-kpi">
            <dt>{t("statPlayers")}</dt>
            <dd>
              {stats.staging
                ? t("enrollmentStaging")
                : stats.unavailable
                  ? t("statUnavailable")
                  : t("enrollmentValue", { count: stats.enrollment })}
            </dd>
          </div>
          <div className="acx-kpi">
            <dt>{t("statOnline")}</dt>
            <dd>
              {stats.unavailable || stats.staging || stats.presence !== "ok"
                ? t("statUnavailable")
                : t("onlineValue", { count: stats.online })}
            </dd>
          </div>
          <div className="acx-kpi">
            <dt>{t("statServers")}</dt>
            <dd>{t("serversValue", { count: stats.servers })}</dd>
          </div>
        </dl>

        <div className="acx-grid-3">
          <section className="acx-card" aria-labelledby="acx-connected">
            <h2 id="acx-connected" className="acx-card-title">{t("connectedTitle")}</h2>
            <p className="acx-muted">{t("connectedLede")}</p>
            {stats.presence === "migration" ? (
              <p className="acx-empty">{t("connectedMigration")}</p>
            ) : stats.unavailable || stats.staging || stats.presence === "down" ? (
              <p className="acx-empty">{t("connectedUnavailable")}</p>
            ) : stats.connected.length === 0 ? (
              <p className="acx-empty">{t("connectedEmpty")}</p>
            ) : (
              <ul className="acx-list">
                {stats.connected.map((player) => (
                  <li key={player.id}>
                    <strong>{player.displayName}</strong>
                    <span className="ace-admin-mono">{player.steamId}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="acx-card" aria-labelledby="acx-system">
            <h2 id="acx-system" className="acx-card-title">{t("systemTitle")}</h2>
            <ul className="acx-system">
              {INFO_CHIPS.map(([title, body]) => (
                <li key={title}>
                  <span className="acx-dot is-off" aria-hidden="true" />
                  <span>
                    <strong>{t(title)}</strong>
                    <small>{t(stats.staging && body === "chipDbBody" ? "chipDbStaging" : body)}</small>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <form
            className="acx-card acx-assist"
            onSubmit={(event) => {
              event.preventDefault();
              const q = copilotQuery.trim();
              if (!q) return;
              setCopilotReply(deskAnswer(q, stats, matches.length, reports.length, t));
              setCopilotQuery("");
            }}
          >
            <div className="acx-card-head">
              <h2 className="acx-card-title">{t("copilotTitle")}</h2>
              <span className="acx-tag">{t("copilotSim")}</span>
            </div>
            <label className="ace-admin-label" htmlFor="ace-copilot">
              {t("copilotPlaceholder")}
            </label>
            <div className="acx-inline">
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
            </div>
            {copilotReply ? <p className="ace-admin-copilot-reply">{copilotReply}</p> : null}
            <ul className="acx-ticker" aria-live="polite">
              {(["copilotLine1", "copilotLine2", "copilotLine3"] as const).map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </form>
        </div>

        <div id="acx-tv" className="acx-anchor">
          <AdminTvWall feeds={tv.feeds} dbAvailable={tv.dbAvailable} t={t} />
        </div>

        <section id="acx-players" className="acx-card acx-anchor" aria-labelledby="admin-registry-title">
          <div className="acx-card-head">
            <div>
              <h2 id="admin-registry-title" className="acx-section-title">{t("registryTitle")}</h2>
              <p className="acx-muted">{t("playersCount", { shown: shown.length, total: players.length })}</p>
            </div>
            <label className="acx-search">
              <span className="sr-only">{t("searchPlayers")}</span>
              <input
                type="search"
                className="ace-admin-input"
                placeholder={t("searchPlayers")}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                suppressHydrationWarning
              />
            </label>
          </div>
          {flash ? (
            <p className="ace-admin-flash" role="status">
              {flash}
            </p>
          ) : null}
          <div className="acx-table-wrap">
            <table className="acx-table" suppressHydrationWarning>
              <thead>
                <tr>
                  <th scope="col">{t("colPlayer")}</th>
                  <th scope="col">{t("colSteam")}</th>
                  <th scope="col" className="is-num">{t("colRank")}</th>
                  <th scope="col" className="is-num">{t("colRating")}</th>
                  <th scope="col">{t("colTier")}</th>
                  <th scope="col">{t("colStatus")}</th>
                  <th scope="col">{t("colAction")}</th>
                </tr>
              </thead>
              <tbody>
                {shown.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="acx-empty">
                      {stats.unavailable ? t("statUnavailable") : t("emptyPlayers")}
                    </td>
                  </tr>
                ) : null}
                {shown.map((player) => (
                  <tr key={player.id}>
                    <td>
                      <button
                        type="button"
                        className="acx-player"
                        aria-label={`${t("openDossier")}: ${player.username}`}
                        suppressHydrationWarning
                        onClick={() => setEditorId(player.id)}
                      >
                        <span className="acx-avatar" aria-hidden="true">{player.initials}</span>
                        <span>
                          <strong>{player.username}</strong>
                          <small>
                            {player.email}
                            {player.steamId === "—" ? ` · ${t("decoupledNote")}` : ""}
                          </small>
                        </span>
                      </button>
                    </td>
                    <td className="ace-admin-mono">{player.steamId}</td>
                    <td className={`is-num${player.id === rankPulseId ? " ace-admin-rank-hot" : ""}`}>
                      <span className="acx-rank">{player.rank}</span>
                    </td>
                    <td className={`is-num${player.id === rankPulseId ? " ace-admin-rating-hot" : ""}`}>
                      {player.rating.toLocaleString("en-US")}
                    </td>
                    <td>
                      <select
                        className="acx-select"
                        aria-label={t("tierSelect")}
                        value={player.tier}
                        suppressHydrationWarning
                        onChange={(event) => runTier(player, TIER_FROM_DB[event.target.value.toUpperCase()] ?? player.tier)}
                      >
                        {(["Free", "Plus", "Premium"] as const).map((tier) => (
                          <option key={tier} value={tier}>
                            {t(TIER_KEY[tier])}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <span className={`acx-badge is-${player.security.toLowerCase()}`}>{t(SECURITY_KEY[player.security])}</span>
                    </td>
                    <td>
                      <details className="acx-menu">
                        <summary className="acx-btn">{t("actionsMenu")}</summary>
                        <div className="acx-menu-list" role="group" aria-label={t("colAction")}>
                        {(["upgrade", "rank", "reset", "disconnect"] as const).map((kind) => (
                          <button
                            key={kind}
                            type="button"
                            suppressHydrationWarning
                            className="acx-btn"
                            onClick={() => runInventory(player, kind)}
                          >
                            {t(kind === "upgrade" ? "upgrade" : kind === "rank" ? "setRank" : kind === "reset" ? "reset" : "disconnect")}
                          </button>
                        ))}
                        <button
                          type="button"
                          suppressHydrationWarning
                          className="acx-btn is-danger"
                          onClick={() => runBan(player, player.security !== "Banned")}
                        >
                          {player.security === "Banned" ? t("unbanAction") : t("banAction")}
                        </button>
                        </div>
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="acx-grid-3">
          <section id="acx-matches" className="acx-card acx-anchor" aria-labelledby="acx-matches-title">
            <h2 id="acx-matches-title" className="acx-card-title">{t("deskMatchesTitle")}</h2>
            <p className="acx-muted">{t("deskMatchesNote")}</p>
            {matches.length === 0 ? (
              <p className="acx-empty">{t("deskMatchesEmpty")}</p>
            ) : (
              <ul className="acx-list">
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
          </section>
          <section id="acx-reports" className="acx-card acx-anchor" aria-labelledby="acx-reports-title">
            <h2 id="acx-reports-title" className="acx-card-title">{t("deskReportsTitle")}</h2>
            <p className="acx-muted">{t("deskReportsNote")}</p>
            {reports.length === 0 ? (
              <p className="acx-empty">{t("deskReportsEmpty")}</p>
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
          </section>
          <section id="acx-tournaments" className="acx-card acx-anchor" aria-labelledby="acx-tournaments-title">
            <h2 id="acx-tournaments-title" className="acx-card-title">{t("tournamentsTitle")}</h2>
            <p className="acx-muted">{t("tournamentsNote")}</p>
            {tournaments.length === 0 ? (
              <p className="acx-empty">{t("tournamentsEmpty")}</p>
            ) : (
              <ul className="acx-list">
                {tournaments.map((row) => (
                  <li key={row.id}>
                    <strong>{row.name}</strong>
                    <span>
                      {row.status} · {t("entries", { count: row.entries })}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

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
          onBan={() => runBan(editor, editor.security !== "Banned")}
        />
      ) : null}
    </div>
  );
}
