"use client";

import { RP_RULES } from "@/lib/rp-rules";
import type { AdminOnlineSnapshot, AdminSignInSnapshot } from "@/server/admin-users";
import type { AdminSupportSnapshot } from "@/server/admin-support";
import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAdminI18n } from "@/components/admin-locale";
import {
  formatPipelineUsd,
  steamProfileHref,
  steamVanity,
  type AdminPlayerRow,
  type SteamSyncIssue,
  type AdminSecurity,
  type AdminTier,
} from "@/lib/admin-command";
import { translateAdmin, type AdminMessageKey } from "@/lib/admin-i18n";
import {
  disconnectAdminSteam,
  refreshAdminSteamProfile,
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
import { AdminAuditPanel, AdminPlayerOps, AdminPlayerReports, CsvExportButton, useAdmin40 } from "@/components/admin-ops";
import "@/components/admin-r40.css";
import type { TvWall } from "@/server/admin-broadcast";
import { PlayerAvatar } from "@/components/floating-emblem";
import { RankOrb } from "@/components/rank-orb";
import { AdminSetRankModal } from "@/components/admin-set-rank";
import { prestigeBadge } from "@/lib/prestige";
import { RANK_TIERS } from "@/lib/ranks";
import "./admin-command.css";

function tierOf(level: number) {
  return RANK_TIERS[Math.min(10, Math.max(1, Math.round(level))) - 1];
}

/** Original A.C.E operator illustration for the dossier hero (alternates per player; illustration only). */
function operatorFor(id: string) {
  let h = 0;
  for (const c of id) h = (h + c.charCodeAt(0)) % 997;
  return h % 2 === 0 ? "guardian" : "rebel";
}

function AdminRankBadge({ level, art, size, label }: { level: number; art?: "standard" | "premium"; size: number; label: string }) {
  return <RankOrb level={level} art={art ?? "standard"} size={size} label={label} />;
}

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
  onChanged,
}: {
  player: AdminPlayerRow;
  dir: "ltr" | "rtl";
  lang: string;
  staging: boolean;
  onClose: () => void;
  onBan: () => void;
  onChanged: () => void;
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
        <div className="acx-hero-wrap">
          <div className={`acx-hero is-${operatorFor(player.id)}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="acx-hero-operator"
              src={`/operators/operator-${operatorFor(player.id)}-1280.webp`}
              srcSet={`/operators/operator-${operatorFor(player.id)}-640.webp 640w, /operators/operator-${operatorFor(player.id)}-1280.webp 1280w`}
              sizes="(max-width: 48rem) 100vw, 46rem"
              alt={t("r23Operator")}
            />
            <span className="acx-hero-vignette" aria-hidden="true" />
          </div>
          <div className={`acx-hero-rank${player.art === "premium" ? " is-premium" : ""}`}>
            <AdminRankBadge level={player.rank} art={player.art} size={172} label={t("r23Rank")} />
            <p className="acx-hero-tier">{tierOf(player.rank).name}</p>
            <p className="acx-hero-tiernum">
              {t("colRank")} {player.rank}
            </p>
            <p className="acx-hero-rp">
              {player.rating.toLocaleString("en-US")} <span>RP</span>
            </p>
            {player.art === "premium" ? <span className="acx-premium-tag">{t("r23Premium")}</span> : null}
          </div>
        </div>
        <div className="acx-nameplate">
          <PlayerAvatar src={player.avatarUrl ?? null} name={player.username} alt="" size={56} />
          <div className="acx-nameplate-id">
            <p className="acx-nameplate-kicker">{t("steamPersona")}</p>
            <p className="acx-dossier-name acx-steam-name">
              {player.username}
              {player.owner ? <span className="acx-owner-badge" title={t("ownerBadgeTitle")}>{t("ownerBadge")}</span> : null}
            </p>
            <p className="acx-nameplate-meta">
              <span className="ace-admin-mono">{player.steamId === "—" ? t("decoupledNote") : player.steamId}</span>
              {player.email && player.email !== "—" ? <span className="acx-muted">{player.email}</span> : null}
            </p>
          </div>
          <div className="acx-nameplate-side">
            <span className={`acx-sub-chip is-${player.tier.toLowerCase()}`}>{t(TIER_KEY[player.tier])}</span>
            {player.billing ? (
              <span className="acx-muted acx-billing" data-billing={player.billing.status || "none"}>
                {player.billing.paddle ? `${t("billingPaddle")} · ${player.billing.status || "—"}${player.billing.expiresAt ? ` · ${t("billingUntil")} ${player.billing.expiresAt.slice(0, 10)}` : ""}` : t("billingManual")}
              </span>
            ) : null}
            <SteamProfileLink steamId={player.steamId} compact />
          </div>
        </div>
        <dl className="acx-dossier-stats acx-dossier-stats-4">
          <div><dt>{t("drawerRp")}</dt><dd>{player.rating.toLocaleString("en-US")}</dd></div>
          <div>
            <dt>{t("r23Wl")}</dt>
            <dd>{player.wins == null || player.losses == null || player.wins + player.losses === 0 ? <span className="acx-muted">{t("r23WlEmpty")}</span> : <span className="acx-wl"><b>{player.wins}</b> / <i>{player.losses}</i></span>}</dd>
          </div>
          <div><dt>{t("r23Subscription")}</dt><dd>{t(TIER_KEY[player.tier])}</dd></div>
          <div><dt>{t("dossierStatus")}</dt><dd><span className={`acx-badge is-${player.security.toLowerCase()}`}>{t(SECURITY_KEY[player.security])}</span></dd></div>
        </dl>
        <SteamIdentity player={player} />
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
        {staging ? null : <AdminPlayerOps playerId={player.id} name={player.username} banned={player.security === "Banned"} onChanged={onChanged} />}
        <div className="acx-drawer-actions">
        <button
          type="button"
          className="ace-admin-gold"
          onClick={onBan}
          suppressHydrationWarning
        >
          {player.security === "Banned" ? t("unbanAction") : t("banAction")}
        </button>
        <button type="button" className="ace-admin-close" onClick={onClose} suppressHydrationWarning>
          {t("close")}
        </button>
        </div>
        <p className="ace-admin-info-chip ace-admin-info-chip-inline">
          <strong>{t("chipDb")}</strong>
          <span>{t(staging ? "chipDbStaging" : "chipDbBody")}</span>
        </p>
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
  const [rankFor, setRankFor] = useState<{ id: string; name: string; rating: number; plan: "Free" | "Plus" | "Premium" } | null>(null);
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

  const [onlineExtra, setOnlineExtra] = useState<AdminPlayerRow | null>(null);
  useEffect(() => {
    if (!editorId || stats.staging || stats.unavailable) return;
    let alive = true;
    void refreshAdminSteamProfile(editorId).then((row) => {
      if (!alive || !row) return;
      setPlayers((current) => current.map((item) => (item.id === row.id ? row : item)));
      setOnlineExtra((current) => (current?.id === row.id ? row : current));
    });
    return () => {
      alive = false;
    };
  }, [editorId, stats.staging, stats.unavailable]);
  const editor = players.find((player) => player.id === editorId) ?? (onlineExtra?.id === editorId ? onlineExtra : null);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "Free" | "Plus" | "Premium" | "banned">("all");
  const [sortBy, setSortBy] = useState<"rp" | "name" | "new">("rp");
  const [page, setPage] = useState(0);
  const [auditKey, setAuditKey] = useState(0);
  const t40 = useAdmin40();
  const PAGE = 25;
  const needle = query.trim().toLowerCase();
  const filtered = players
    .filter((player) => !needle || [player.username, player.email, player.steamId].some((value) => value.toLowerCase().includes(needle)))
    .filter((player) => filter === "all" || (filter === "banned" ? player.security === "Banned" : player.tier === filter))
    .slice()
    .sort((a, b) => (sortBy === "rp" ? b.rating - a.rating : sortBy === "name" ? a.username.localeCompare(b.username) : b.registeredOn.localeCompare(a.registeredOn)));
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const safePage = Math.min(page, pages - 1);
  const shown = filtered.slice(safePage * PAGE, safePage * PAGE + PAGE);
  const dbState = stats.staging ? "preview" : stats.unavailable ? "down" : "live";
  const nav: Array<[string, AdminMessageKey, number | null]> = [
    ["acx-overview", "navOverview", null],
    ["acx-tv", "navTv", tv.feeds.length],
    ["acx-players", "navPlayers", players.length],
    ["acx-matches", "navMatches", matches.length],
    ["acx-reports", "navReports", reports.length],
    ["acx-tournaments", "navTournaments", tournaments.length],
    ["acx-player-reports", "navPlayerReports", null],
    ["acx-audit", "navAudit", null],
  ];

  return (
    <div className="ace-admin-shell acx" dir={dir} lang={lang} suppressHydrationWarning>
      <aside className="acx-side" aria-label={t("navLabel")}>
        <div className="acx-brand">
          <span className="acx-brand-mark" aria-hidden="true">A</span>
          <span>
            <strong>A.C.E</strong>
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
          <a href="/admin/servers" className="acx-nav-ext">
            <span>{admin.hebrew ? "שרתים" : "Servers"}</span>
            <span className="acx-count" aria-hidden="true">↗</span>
          </a>
          <a href="/admin/commerce" className="acx-nav-ext">
            <span>{admin.hebrew ? "תשלומים" : "Payments"}</span>
            <span className="acx-count" aria-hidden="true">↗</span>
          </a>
          <a href="/admin/whats-new" className="acx-nav-ext">
            <span>מה חדש</span>
            <span className="acx-count" aria-hidden="true">↗</span>
          </a>
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

        <section className="acx-card acx-growth" aria-labelledby="acx-growth">
          <h2 id="acx-growth" className="acx-card-title">{t("growthTitle")}</h2>
          <p className="acx-muted">{t("growthLede")}</p>
          {!stats.growth || stats.unavailable || stats.staging ? (
            <p className="acx-empty">{t("growthUnavailable")}</p>
          ) : (
            <>
              <dl className="acx-growth-grid">
                {(
                  [
                    ["growthSteam", stats.growth.steamLinked],
                    ["growthToday", stats.growth.today],
                    ["growth7d", stats.growth.last7],
                    ["growthPremium", stats.growth.premium],
                    ["growthPlus", stats.growth.plus],
                    ["growthMatches", stats.growth.matchesCompleted],
                  ] as const
                ).map(([key, value]) => (
                  <div key={key}>
                    <dt>{t(key)}</dt>
                    <dd>{value.toLocaleString()}</dd>
                  </div>
                ))}
              </dl>
              <GrowthSparkline days={stats.growth.daily14} label={t("growthSpark")} empty={t("growthSparkEmpty")} />
            </>
          )}
          <p className="acx-muted acx-growth-note">{t("growthPublicNote")}</p>
        </section>

        <div className="acx-live-pair">
          <OnlineNowPanel
            disabled={stats.staging || stats.unavailable}
            onOpen={(player) => {
              setOnlineExtra(player);
              setEditorId(player.id);
            }}
          />
          <SignInsPanel
            disabled={stats.staging || stats.unavailable}
            onOpen={(player) => {
              setOnlineExtra(player);
              setEditorId(player.id);
            }}
          />
        </div>

        <SupportPanel disabled={stats.staging || stats.unavailable} />

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
              <p className="acx-muted">{t("playersCount", { shown: filtered.length, total: players.length })}</p>
            </div>
            <label className="acx-search">
              <span className="sr-only">{t("searchPlayers")}</span>
              <input
                type="search"
                className="ace-admin-input"
                placeholder={t("searchPlayers")}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(0);
                }}
                suppressHydrationWarning
              />
            </label>
          </div>
          <div className="ax-toolbar">
            <div className="ax-chips" role="group" aria-label={t40("all")}>
              {(["all", "Free", "Plus", "Premium", "banned"] as const).map((f) => (
                <button key={f} type="button" aria-pressed={filter === f} onClick={() => { setFilter(f); setPage(0); }}>
                  {f === "all" ? t40("all") : f === "banned" ? t40("banned") : f}
                </button>
              ))}
            </div>
            <label className="ax-sort">
              <span>{t40("sort")}</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "rp" | "name" | "new")}>
                <option value="rp">{t40("sortRp")}</option>
                <option value="name">{t40("sortName")}</option>
                <option value="new">{t40("sortNew")}</option>
              </select>
            </label>
            {stats.staging ? null : <CsvExportButton />}
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
                  <th scope="col">{t("r23Rank")}</th>
                  <th scope="col" className="is-num">{t("colRating")}</th>
                  <th scope="col">{t("r23Wl")}</th>
                  <th scope="col">{t("r23Subscription")}</th>
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
                        <PlayerAvatar src={player.avatarUrl ?? null} name={player.username} alt="" size={38} />
                        <span>
                          <strong>
                            {player.username}
                            {player.owner ? <span className="acx-owner-badge">{t("ownerBadge")}</span> : null}
                          </strong>
                          <small>{player.email}</small>
                          <small className="ace-admin-mono" title={t("colSteam")}>
                            {player.steamId === "—" ? t("decoupledNote") : player.steamId}
                          </small>
                        </span>
                      </button>
                      <SteamProfileLink steamId={player.steamId} compact />
                    </td>
                    <td className={player.id === rankPulseId ? "ace-admin-rank-hot" : undefined}>
                      <span className="acx-rankcell">
                        {(() => {
                          const pb = prestigeBadge(player.rating, String(player.tier).toUpperCase());
                          return pb ? <RankOrb level={10} size={46} label={t("r23Rank")} prestige={pb} /> : <AdminRankBadge level={player.rank} art={player.art} size={46} label={t("r23Rank")} />;
                        })()}
                        <span>
                          <strong>{prestigeBadge(player.rating, String(player.tier).toUpperCase())?.name ?? tierOf(player.rank).name}</strong>
                          <small>
                            {t("colRank")} {player.rank}
                            {player.art === "premium" ? <span className="acx-premium-tag">{t("r23Premium")}</span> : null}
                          </small>
                        </span>
                      </span>
                    </td>
                    <td className={`is-num${player.id === rankPulseId ? " ace-admin-rating-hot" : ""}`}>
                      <span className="acx-rp">{player.rating.toLocaleString("en-US")}</span>
                    </td>
                    <td>
                      {player.wins == null || player.losses == null || player.wins + player.losses === 0 ? (
                        <span className="acx-muted">{t("r23WlEmpty")}</span>
                      ) : (
                        <span className="acx-wl"><b>{player.wins}</b> / <i>{player.losses}</i></span>
                      )}
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
                      <ActionsMenu label={t("actionsMenu")} groupLabel={t("colAction")}>
                        <button type="button" suppressHydrationWarning className="acx-btn is-gold" onClick={() => setRankFor({ id: player.id, name: player.username, rating: player.rating, plan: player.tier })}>
                          {t40("srMenu")}
                        </button>
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
                      </ActionsMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pages > 1 ? (
            <div className="ax-pager">
              <button type="button" className="ax-btn" disabled={safePage === 0} onClick={() => setPage(safePage - 1)}>{t40("prev")}</button>
              <span>{t40("page", { page: safePage + 1, pages })}</span>
              <button type="button" className="ax-btn" disabled={safePage >= pages - 1} onClick={() => setPage(safePage + 1)}>{t40("next")}</button>
            </div>
          ) : null}
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
          <AdminPlayerReports onChanged={() => setAuditKey((n) => n + 1)} />
          <AdminAuditPanel refreshKey={auditKey} />
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
      {rankFor ? <AdminSetRankModal player={rankFor} onClose={() => setRankFor(null)} /> : null}
      {editor ? (
        <PlayerDrawer
          player={editor}
          dir={dir}
          lang={lang}
          staging={stats.staging}
          onClose={() => setEditorId(null)}
          onBan={() => runBan(editor, editor.security !== "Banned")}
          onChanged={() => {
            setAuditKey((k) => k + 1);
            router.refresh();
          }}
        />
      ) : null}
    </div>
  );
}

function GrowthSparkline({ days, label, empty }: { days: number[]; label: string; empty: string }) {
  const max = Math.max(0, ...days);
  if (max === 0) return <p className="acx-empty">{empty}</p>;
  const w = 280;
  const h = 56;
  const step = w / (days.length - 1);
  const points = days.map((v, i) => `${(i * step).toFixed(1)},${(h - 4 - (v / max) * (h - 8)).toFixed(1)}`).join(" ");
  return (
    <figure className="acx-spark">
      <figcaption>{label}</figcaption>
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`${label}: ${days.join(", ")}`} preserveAspectRatio="none">
        <polyline points={`0,${h} ${points} ${w},${h}`} fill="rgba(201,162,74,0.14)" stroke="none" />
        <polyline points={points} fill="none" stroke="#C9A24A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="acx-spark-scale"><span>0</span><span>{max}</span></div>
    </figure>
  );
}

/**
 * Row actions menu rendered in a portal with fixed positioning, so it is never clipped by the
 * table's scroll container. It aligns to the trigger's inline-end edge, flips to stay inside the
 * viewport (8px margin) and opens upward when there is no room below.
 */
function ActionsMenu({ label, groupLabel, children }: { label: string; groupLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; maxHeight: number; dir: "rtl" | "ltr" } | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useLayoutEffect(() => {
    if (!open) return;
    const place = () => {
      const t = trigger.current?.getBoundingClientRect();
      const m = menu.current;
      if (!t || !m) return;
      const margin = 8;
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;
      const w = Math.min(m.offsetWidth, vw - margin * 2);
      const rtl = getComputedStyle(trigger.current!).direction === "rtl";
      let left = rtl ? t.left : t.right - w;
      left = Math.max(margin, Math.min(left, vw - w - margin));
      const h = m.scrollHeight;
      const below = vh - t.bottom - margin;
      const above = t.top - margin;
      const up = h + 6 > below && above > below;
      const maxHeight = Math.max(120, (up ? above : below) - 6);
      const top = up ? Math.max(margin, t.top - 6 - Math.min(h, maxHeight)) : t.bottom + 6;
      setPos({ left, top, maxHeight, dir: rtl ? "rtl" : "ltr" });
    };
    place();
    const close = (event: Event) => {
      const target = event.target as Node | null;
      if (target && (menu.current?.contains(target) || trigger.current?.contains(target))) return;
      setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="acx-menu">
      <button
        ref={trigger}
        type="button"
        className={`acx-btn acx-menu-trigger${open ? " is-open" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        suppressHydrationWarning
        onClick={() => {
          setPos(null);
          setOpen((value) => !value);
        }}
      >
        {label}
      </button>
      {open
        ? createPortal(
            <div
              ref={menu}
              id={menuId}
              className="acx-menu-pop"
              role="group"
              aria-label={groupLabel}
              dir={pos?.dir}
              style={pos ? { left: pos.left, top: pos.top, maxHeight: pos.maxHeight } : { left: -9999, top: 0 }}
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("button")) setOpen(false);
              }}
            >
              {children}
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

const ONLINE_REFRESH_MS = 15_000;

/** Admin-only live list of signed-in users from the presence window. Polls the gated /admin/online route (gate cookie is scoped to /admin). */
function OnlineNowPanel({ disabled, onOpen }: { disabled: boolean; onOpen: (player: AdminPlayerRow) => void }) {
  const { t } = useAdminI18n();
  const [snap, setSnap] = useState<AdminOnlineSnapshot | null>(null);
  const [failed, setFailed] = useState(false);
  const [skew, setSkew] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (disabled) return;
    let alive = true;
    const load = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch("/admin/online", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as AdminOnlineSnapshot;
        if (!alive) return;
        setSnap(data);
        setSkew(Date.now() - new Date(data.serverNow).getTime());
        setFailed(false);
      } catch {
        if (alive) setFailed(true);
      }
    };
    void load();
    const poll = window.setInterval(load, ONLINE_REFRESH_MS);
    const tick = window.setInterval(() => setNow(Date.now()), 5_000);
    return () => {
      alive = false;
      window.clearInterval(poll);
      window.clearInterval(tick);
    };
  }, [disabled]);

  const players = snap?.status === "ok" ? snap.players : [];
  const live = !disabled && !failed && snap?.status === "ok";
  const ago = (iso: string) => {
    const sec = Math.max(0, Math.round((now - skew - new Date(iso).getTime()) / 1000));
    return sec < 60 ? t("onlineSeenSec", { count: sec }) : t("onlineSeenMin", { count: Math.floor(sec / 60) });
  };

  let body: React.ReactNode;
  if (disabled) body = <p className="acx-empty">{t("onlineNeedsDb")}</p>;
  else if (failed || snap?.status === "down") body = <p className="acx-empty">{t("onlineUnavailable")}</p>;
  else if (snap?.status === "migration") body = <p className="acx-empty">{t("connectedMigration")}</p>;
  else if (!snap) body = <p className="acx-empty">{t("onlineLoading")}</p>;
  else if (players.length === 0) body = <p className="acx-empty">{t("onlineEmpty")}</p>;
  else
    body = (
      <ul className="acx-online-list">
        {players.map(({ player, lastSeenAt }) => (
          <li key={player.id}>
            <button type="button" className="acx-online-row" onClick={() => onOpen(player)} aria-label={`${t("openDossier")}: ${player.username}`}>
              <PlayerAvatar src={player.avatarUrl ?? null} name={player.username} alt="" size={36} />
              <span className="acx-online-id">
                <strong>{player.username}</strong>
                <small className="ace-admin-mono">{player.steamId === "—" ? t("decoupledNote") : player.steamId}</small>
              </span>
              <span className="acx-online-rank">
                <AdminRankBadge level={player.rank} art={player.art} size={34} label={t("r23Rank")} />
                <span>
                  <b>{tierOf(player.rank).name}</b>
                  <small className="acx-rp">{player.rating.toLocaleString("en-US")} RP</small>
                </span>
              </span>
              <span className={`acx-online-tier is-${player.tier.toLowerCase()}`}>{t(TIER_KEY[player.tier])}</span>
              <time className="acx-online-seen" dateTime={lastSeenAt}>{ago(lastSeenAt)}</time>
            </button>
            <SteamProfileLink steamId={player.steamId} compact />
          </li>
        ))}
      </ul>
    );

  return (
    <section id="acx-online" className="acx-card acx-online acx-anchor" aria-labelledby="acx-online-title" aria-live="polite">
      <header className="acx-online-head">
        <h2 id="acx-online-title" className="acx-card-title">
          <i className={`acx-live-dot${live ? "" : " is-off"}`} aria-hidden="true" />
          {t("onlineTitle")}
        </h2>
        <span className="acx-online-count">{live ? t("onlineCount", { count: players.length }) : "—"}</span>
      </header>
      <p className="acx-muted">{t("onlineNote")}</p>
      {body}
    </section>
  );
}

const SUPPORT_REFRESH_MS = 15_000;

/** Admin-only AI-chat escalations. Polls the gated /admin/support route; open/close per ticket. */
function SupportPanel({ disabled }: { disabled: boolean }) {
  const { t } = useAdminI18n();
  const [snap, setSnap] = useState<AdminSupportSnapshot | null>(null);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (disabled) return;
    let alive = true;
    const load = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch("/admin/support", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as AdminSupportSnapshot;
        if (alive) {
          setSnap(data);
          setFailed(false);
        }
      } catch {
        if (alive) setFailed(true);
      }
    };
    void load();
    const poll = window.setInterval(load, SUPPORT_REFRESH_MS);
    return () => {
      alive = false;
      window.clearInterval(poll);
    };
  }, [disabled, nonce]);

  const toggle = async (id: string, status: "open" | "closed") => {
    setBusy(id);
    try {
      await fetch("/admin/support", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status }) });
    } finally {
      setBusy(null);
      setNonce((n) => n + 1);
    }
  };

  let body: React.ReactNode;
  if (disabled) body = <p className="acx-empty">{t("onlineNeedsDb")}</p>;
  else if (failed || snap?.status === "down") body = <p className="acx-empty">{t("supportUnavailable")}</p>;
  else if (snap?.status === "migration") body = <p className="acx-empty">{t("supportMigration")}</p>;
  else if (!snap) body = <p className="acx-empty">{t("onlineLoading")}</p>;
  else if (snap.tickets.length === 0) body = <p className="acx-empty">{t("supportEmpty")}</p>;
  else
    body = (
      <ul className="acx-support-list">
        {snap.tickets.map((ticket) => (
          <li key={ticket.id} className={`acx-support-item is-${ticket.status}`}>
            <details>
              <summary>
                <span className={`acx-support-status is-${ticket.status}`}>{ticket.status === "open" ? t("supportOpen") : t("supportClosed")}</span>
                <strong dir="auto">{ticket.subject || "—"}</strong>
                <small>
                  {ticket.steamId ? <span className="ace-admin-mono">{ticket.steamId}</span> : t("supportGuest")} · {ticket.locale} ·{" "}
                  <time dateTime={ticket.at}>{new Date(ticket.at).toLocaleString()}</time>
                </small>
              </summary>
              <ol className="acx-support-transcript">
                {ticket.transcript.map((m, i) => (
                  <li key={i} className={`is-${m.role}`}>
                    <b>{m.role === "user" ? t("supportUser") : t("supportBot")}:</b> <span dir="auto">{m.content}</span>
                  </li>
                ))}
              </ol>
              <button type="button" className="acx-btn" disabled={busy === ticket.id}
                onClick={() => void toggle(ticket.id, ticket.status === "open" ? "closed" : "open")}>
                {ticket.status === "open" ? t("supportClose") : t("supportReopen")}
              </button>
            </details>
          </li>
        ))}
      </ul>
    );

  return (
    <section className="acx-card acx-support" aria-labelledby="acx-support-title">
      <h2 id="acx-support-title" className="acx-card-title">
        {t("supportTitle")}
        {snap?.status === "ok" ? <span className="acx-support-count">{t("supportOpenCount", { count: snap.open })}</span> : null}
      </h2>
      <p className="acx-muted">{t("supportNote")}</p>
      {body}
    </section>
  );
}

const SIGNINS_REFRESH_MS = 10_000;

/** Admin-only live feed of the latest 50 Steam sign-ins. Polls the gated /admin/signins route every 10s. */
function SignInsPanel({ disabled, onOpen }: { disabled: boolean; onOpen: (player: AdminPlayerRow) => void }) {
  const { t } = useAdminI18n();
  const [snap, setSnap] = useState<AdminSignInSnapshot | null>(null);
  const [failed, setFailed] = useState(false);
  const [skew, setSkew] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (disabled) return;
    let alive = true;
    const load = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch("/admin/signins", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as AdminSignInSnapshot;
        if (!alive) return;
        setSnap(data);
        setSkew(Date.now() - new Date(data.serverNow).getTime());
        setFailed(false);
      } catch {
        if (alive) setFailed(true);
      }
    };
    void load();
    const poll = window.setInterval(load, SIGNINS_REFRESH_MS);
    const tick = window.setInterval(() => setNow(Date.now()), 5_000);
    const wake = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", wake);
    return () => {
      alive = false;
      window.clearInterval(poll);
      window.clearInterval(tick);
      document.removeEventListener("visibilitychange", wake);
    };
  }, [disabled]);

  const events = snap?.status === "ok" ? snap.events : [];
  const live = !disabled && !failed && snap?.status === "ok";
  const ago = (iso: string) => {
    const sec = Math.max(0, Math.round((now - skew - new Date(iso).getTime()) / 1000));
    if (sec < 60) return t("signinsAgoSec", { count: sec });
    if (sec < 3600) return t("signinsAgoMin", { count: Math.floor(sec / 60) });
    if (sec < 86400) return t("signinsAgoHour", { count: Math.floor(sec / 3600) });
    return t("signinsAgoDay", { count: Math.floor(sec / 86400) });
  };
  const deviceLabel = (type: string) =>
    type === "mobile" ? t("deviceMobile") : type === "tablet" ? t("deviceTablet") : type === "desktop" ? t("deviceDesktop") : t("deviceUnknown");

  let body: React.ReactNode;
  if (disabled) body = <p className="acx-empty">{t("onlineNeedsDb")}</p>;
  else if (failed || snap?.status === "down") body = <p className="acx-empty">{t("signinsUnavailable")}</p>;
  else if (snap?.status === "migration") body = <p className="acx-empty">{t("signinsMigration")}</p>;
  else if (!snap) body = <p className="acx-empty">{t("onlineLoading")}</p>;
  else if (events.length === 0) body = <p className="acx-empty">{t("signinsEmpty")}</p>;
  else
    body = (
      <ul className="acx-signins-list">
        {events.map((event) => {
          const agent = [deviceLabel(event.deviceType), event.os, event.browser].filter(Boolean).join(" · ");
          const content = (
            <>
              <PlayerAvatar src={event.avatarUrl || null} name={event.personaName} alt="" size={34} />
              <span className="acx-signins-id">
                <strong>
                  {event.personaName}
                  <span className={`acx-signins-kind${event.isNewUser ? " is-new" : ""}`}>
                    {event.isNewUser ? t("signinsNew") : t("signinsReturning")}
                  </span>
                </strong>
                <small>
                  <span className="ace-admin-mono">{event.steamId}</span>
                  {event.country ? <> · {event.country}</> : null}
                </small>
                <small title={agent}>{agent}</small>
              </span>
              <time className="acx-online-seen" dateTime={event.at} title={new Date(event.at).toLocaleString()}>
                {ago(event.at)}
              </time>
            </>
          );
          const player = event.player;
          return (
            <li key={event.id}>
              {player ? (
                <button type="button" className="acx-signins-row" onClick={() => onOpen(player)} aria-label={`${t("openDossier")}: ${event.personaName}`}>
                  {content}
                </button>
              ) : (
                <div className="acx-signins-row is-static">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    );

  return (
    <section id="acx-signins" className="acx-card acx-online acx-anchor" aria-labelledby="acx-signins-title" aria-live="polite">
      <header className="acx-online-head">
        <h2 id="acx-signins-title" className="acx-card-title">
          <i className={`acx-live-dot${live ? "" : " is-off"}`} aria-hidden="true" />
          {t("signinsTitle")}
        </h2>
        <span className="acx-online-count">
          {live && snap ? t("signinsToday", { signins: snap.today.signIns, fresh: snap.today.newPlayers }) : "—"}
        </span>
      </header>
      <p className="acx-muted">{t("signinsNote")}</p>
      {body}
    </section>
  );
}

/** Admin-only "Open Steam profile" link (new tab, no referrer). Renders nothing without a SteamID64. */
function SteamProfileLink({ steamId, compact = false }: { steamId: string; compact?: boolean }) {
  const { t } = useAdminI18n();
  const href = steamProfileHref(steamId);
  if (!href) return null;
  return (
    <a
      className={compact ? "acx-steam-link is-compact" : "acx-steam-link"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${t("steamOpenProfile")}: ${steamId}`}
      aria-label={`${t("steamOpenProfile")}: ${steamId}`}
    >
      {compact ? t("steamProfileShort") : t("steamOpenProfile")}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

/** Dossier block naming the exact Steam account a ban or change hits. Admin-only, real stored values only. */
function SteamIdentity({ player }: { player: AdminPlayerRow }) {
  const { t } = useAdminI18n();
  const href = steamProfileHref(player.steamId);
  const vanity = steamVanity(player.steamProfileUrl);
  const shownUrl = player.steamProfileUrl || href;
  return (
    <section className="acx-steam-id" aria-label={t("steamIdentityTitle")}>
      <p className="acx-steam-id-kicker">{t("steamIdentityTitle")}</p>
      {href ? (
        <div className="acx-steam-id-body">
          <PlayerAvatar src={player.avatarUrl ?? null} name={player.username} alt="" size={56} />
          <dl>
            <div><dt>{t("steamPersona")}</dt><dd>{player.username}</dd></div>
            <div><dt>{t("dossierSteam")}</dt><dd className="ace-admin-mono">{player.steamId}</dd></div>
            <div><dt>{t("steamVanity")}</dt><dd>{vanity ?? <span className="acx-muted">{t("steamVanityNone")}</span>}</dd></div>
            <div className="is-wide"><dt>{t("steamProfileUrl")}</dt><dd className="ace-admin-mono">{shownUrl}</dd></div>
            <div className="is-wide">
              <dt>{t("steamSynced")}</dt>
              <dd>
                {player.steamSyncedAt ? new Date(player.steamSyncedAt).toLocaleString() : <span className="acx-muted">{t("steamNeverSynced")}</span>}
                {player.steamSyncError ? (
                  <span className="acx-steam-sync-error" role="status">{steamSyncErrorText(player.steamSyncError, t)}</span>
                ) : null}
              </dd>
            </div>
          </dl>
          <SteamProfileLink steamId={player.steamId} />
        </div>
      ) : (
        <p className="acx-empty">{t("decoupledNote")}</p>
      )}
    </section>
  );
}

function steamSyncErrorText(err: SteamSyncIssue, t: (key: AdminMessageKey) => string): string {
  switch (err.code) {
    case "no-key":
      return t("steamErrNoKey");
    case "http":
      if (err.status === 401 || err.status === 403) return t("steamErrHttp403").replace("403", String(err.status));
      if (err.status === 429) return t("steamErrHttp429");
      if (err.status >= 500) return t("steamErrHttp5xx").replace("{status}", String(err.status));
      return t("steamErrHttp").replace("{status}", String(err.status));
    case "timeout":
      return t("steamErrTimeout");
    case "network":
      return t("steamErrNetwork").replace("{detail}", err.detail);
    case "bad-response":
      return t("steamErrBadResponse");
    case "not-found":
      return t("steamErrNotFound");
  }
}
