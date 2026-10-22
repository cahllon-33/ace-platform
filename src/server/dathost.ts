import { buildConnectUrl } from "@/lib/queue";

/**
 * DatHost API client (server-only). Basic auth from DATHOST_EMAIL / DATHOST_PASSWORD; never logged or returned.
 * Docs: https://dathost.net/reference (swagger: https://dathost.com/swagger.json).
 */
const API = "https://dathost.net/api/0.1";

export const ACE_MAPS = ["de_dust2", "de_mirage", "de_inferno", "de_nuke", "de_ancient", "de_anubis", "de_train"] as const;
export type AceMap = (typeof ACE_MAPS)[number];
export const isAceMap = (m: string): m is AceMap => (ACE_MAPS as readonly string[]).includes(m);

export class DathostError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export type DathostConfig = { email: string; password: string; serverId: string };

export function readDathostConfig(env: NodeJS.ProcessEnv = process.env): DathostConfig | null {
  const email = env.DATHOST_EMAIL?.trim() ?? "";
  const password = env.DATHOST_PASSWORD ?? "";
  const serverId = env.DATHOST_SERVER_ID?.trim() ?? "";
  if (!email || !password || !serverId) return null;
  return { email, password, serverId };
}

type Fetcher = typeof fetch;

async function call<T>(cfg: DathostConfig, path: string, init: RequestInit = {}, f: Fetcher = fetch): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Basic ${Buffer.from(`${cfg.email}:${cfg.password}`).toString("base64")}`);
  const res = await f(`${API}${path}`, { ...init, headers, cache: "no-store", signal: init.signal ?? AbortSignal.timeout(15000) });
  if (!res.ok) {
    // Body text from DatHost is safe to surface (it never echoes credentials); cap its length.
    const text = (await res.text().catch(() => "")).slice(0, 300);
    throw new DathostError(res.status, `DatHost ${res.status}${text ? `: ${text}` : ""}`);
  }
  const type = res.headers.get("content-type") ?? "";
  return (type.includes("json") ? await res.json() : await res.text()) as T;
}

/** Only the fields A.C.E. uses. Secrets (rcon, gslt, ftp/mysql passwords) are dropped by toServerView. */
type RawServer = {
  id: string; name: string; game: string; location: string; on: boolean; booting: boolean; server_error?: string;
  ip: string; raw_ip?: string; ports: { game: number; gotv?: number | null };
  players_online: number; match_id?: string | null;
  status?: { key: string; value: string }[];
  cs2_settings?: { slots?: number; mapgroup_start_map?: string; game_mode?: string; enable_metamod?: boolean } | null;
};

export type ServerView = {
  id: string; name: string; location: string; online: boolean; booting: boolean; error: string;
  host: string; port: number; address: string; connectUrl: string;
  players: number; slots: number; map: string | null; gameMode: string; matchId: string | null; metamod: boolean;
};

export function toServerView(s: RawServer): ServerView {
  const kv = Object.fromEntries((s.status ?? []).map((x) => [x.key, x.value]));
  const address = `${s.ip}:${s.ports.game}`;
  return {
    id: s.id, name: s.name, location: s.location, online: Boolean(s.on), booting: Boolean(s.booting), error: s.server_error ?? "",
    host: s.ip, port: s.ports.game, address, connectUrl: buildConnectUrl(address),
    players: s.players_online ?? 0, slots: s.cs2_settings?.slots ?? 0,
    map: kv.map ?? kv.Map ?? (s.on ? s.cs2_settings?.mapgroup_start_map ?? null : null),
    gameMode: s.cs2_settings?.game_mode ?? "", matchId: s.match_id ?? null, metamod: Boolean(s.cs2_settings?.enable_metamod),
  };
}

export function dathost(cfg: DathostConfig, f: Fetcher = fetch) {
  const id = encodeURIComponent(cfg.serverId);
  const form = (data: Record<string, string>) => ({ method: "POST", body: new URLSearchParams(data) });
  return {
    getServer: async () => toServerView(await call<RawServer>(cfg, `/game-servers/${id}`, {}, f)),
    start: () => call<unknown>(cfg, `/game-servers/${id}/start`, { method: "POST" }, f),
    stop: () => call<unknown>(cfg, `/game-servers/${id}/stop`, { method: "POST" }, f),
    /** Sends one line to the server console (RCON-equivalent). */
    console: (line: string) => call<unknown>(cfg, `/game-servers/${id}/console`, form({ line }), f),
    consoleLog: async (maxLines = 120) => {
      const r = await call<{ lines?: string[] } | string>(cfg, `/game-servers/${id}/console?max_lines=${Math.min(1000, Math.max(1, maxLines))}`, {}, f);
      return typeof r === "string" ? r.split("\n") : r.lines ?? [];
    },
    changeLevel: (map: AceMap) => call<unknown>(cfg, `/game-servers/${id}/console`, form({ line: `changelevel ${map}` }), f),
    createMatch: (input: CreateMatchInput) =>
      call<Cs2Match>(cfg, `/cs2-matches`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(buildMatchBody(cfg.serverId, input)) }, f),
    /** Full server JSON. Server-only: callers must pass it through toSettingsView before it reaches a client. */
    getRaw: () => call<RawServerFull>(cfg, `/game-servers/${id}`, {}, f),
    update: (fields: Record<string, string>) => call<unknown>(cfg, `/game-servers/${id}`, { method: "PUT", body: new URLSearchParams(fields) }, f),
    metrics: () => call<Metrics>(cfg, `/game-servers/${id}/metrics`, {}, f),
    /** DatHost "reset": reinstalls the server files. */
    reset: () => call<unknown>(cfg, `/game-servers/${id}/reset`, { method: "POST" }, f),
    syncFiles: () => call<unknown>(cfg, `/game-servers/${id}/sync-files`, { method: "POST" }, f),
    /** DatHost returns paths relative to `path`; they are re-rooted here so callers always get full server paths. */
    listFiles: async (path: string, depth = 1) => {
      const base = path && !path.endsWith("/") ? `${path}/` : path;
      const rows = await call<FileEntry[]>(cfg, `/game-servers/${id}/files?max_depth=${depth}&path=${encodeURIComponent(base)}`, {}, f);
      return rows.map((r) => ({ ...r, path: base && !r.path.startsWith(base) ? base + r.path : r.path }));
    },
    downloadFile: async (path: string) => {
      const headers = new Headers({ Authorization: `Basic ${Buffer.from(`${cfg.email}:${cfg.password}`).toString("base64")}` });
      const res = await f(`${API}/game-servers/${id}/files/${encodePath(path)}`, { headers, cache: "no-store", signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new DathostError(res.status, `DatHost ${res.status}`);
      return res;
    },
    uploadFile: (path: string, data: Blob, name: string) => {
      const fd = new FormData();
      fd.append("file", data, name);
      return call<unknown>(cfg, `/game-servers/${id}/files/${encodePath(path)}`, { method: "POST", body: fd, signal: AbortSignal.timeout(120000) }, f);
    },
    moveFile: (path: string, destination: string) =>
      call<unknown>(cfg, `/game-servers/${id}/files/${encodePath(path)}`, { method: "PUT", body: new URLSearchParams({ destination }) }, f),
    deleteFile: (path: string) => call<unknown>(cfg, `/game-servers/${id}/files/${encodePath(path)}`, { method: "DELETE" }, f),
    cancelMatch: (matchId: string) => call<unknown>(cfg, `/cs2-matches/${encodeURIComponent(matchId)}/cancel`, { method: "POST" }, f),
    addMatchPlayer: (matchId: string, steamId: string, team: "team1" | "team2") => {
      if (!STEAM64.test(steamId)) throw new Error("Invalid SteamID64.");
      return call<unknown>(cfg, `/cs2-matches/${encodeURIComponent(matchId)}/players`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ steam_id_64: steamId, team }) }, f);
    },
    getMatch: (matchId: string) => call<Cs2Match>(cfg, `/cs2-matches/${encodeURIComponent(matchId)}`, {}, f),
  };
}

export type CreateMatchInput = {
  team1: { name: string; steamIds: string[] };
  team2: { name: string; steamIds: string[] };
  map: AceMap;
  matchEndUrl: string;
  roundEndUrl?: string;
  /** Sent back by DatHost as the Authorization header on every webhook. */
  webhookAuthorization: string;
  /** Seats per side; extra listed SteamIDs become substitutes. */
  teamSize?: number;
};

const STEAM64 = /^7656119\d{10}$/;

export function buildMatchBody(serverId: string, input: CreateMatchInput) {
  const players = [
    ...input.team1.steamIds.map((s) => ({ steam_id_64: s, team: "team1" as const })),
    ...input.team2.steamIds.map((s) => ({ steam_id_64: s, team: "team2" as const })),
  ];
  if (players.some((p) => !STEAM64.test(p.steam_id_64))) throw new Error("Every player needs a valid SteamID64.");
  if (!isAceMap(input.map)) throw new Error("Map is not in the A.C.E. pool.");
  return {
    game_server_id: serverId,
    team1: { name: input.team1.name.slice(0, 40) },
    team2: { name: input.team2.name.slice(0, 40) },
    players,
    settings: { map: input.map, connect_time: 300, match_begin_countdown: 30, ...(input.teamSize ? { team_size: input.teamSize } : {}) },
    webhooks: {
      match_end_url: input.matchEndUrl,
      ...(input.roundEndUrl ? { round_end_url: input.roundEndUrl } : {}),
      authorization_header: input.webhookAuthorization,
    },
  };
}

export type Cs2MatchPlayerStats = {
  kills?: number; assists?: number; deaths?: number; mvps?: number; score?: number;
  "2ks"?: number; "3ks"?: number; "4ks"?: number; "5ks"?: number;
  kills_with_headshot?: number; damage_dealt?: number; entry_attempts?: number; entry_successes?: number;
  utility_damage?: number; "1vX_attempts"?: number; "1vX_wins"?: number;
};
export type Cs2Match = {
  id: string; game_server_id: string;
  team1: { name: string; stats?: { score?: number } }; team2: { name: string; stats?: { score?: number } };
  players: { steam_id_64: string; team: "team1" | "team2" | "spectator"; connected?: boolean; kicked?: boolean; disconnected_at?: number | null; stats?: Cs2MatchPlayerStats }[];
  settings?: { map?: string | null };
  rounds_played?: number; finished?: boolean; cancel_reason?: string | null;
};

export type FileEntry = { path: string; size: number; deleted?: boolean };
export type Metrics = {
  players_online_graph?: { timestamp: number; value: number }[];
  memory_usage_bytes_graph?: { timestamp: number; value: number }[];
  all_time_players?: unknown[]; maps_played?: { map: string; seconds: number }[]; players_online?: unknown[];
};

/** Rejects traversal and absolute paths; keeps "/" separators. */
export function safeServerPath(p: string): string | null {
  const clean = String(p ?? "").replace(/\\/g, "/").replace(/^\/+/, "");
  if (clean.length > 400 || /[\u0000-\u001f]/.test(clean)) return null;
  if (clean.split("/").some((seg) => seg === ".." || seg === ".")) return null;
  return clean;
}
const encodePath = (p: string) => p.split("/").map(encodeURIComponent).join("/");

export type RawServerFull = RawServer & {
  created_at?: number; autostop?: boolean; autostop_minutes?: number; reboot_on_crash?: boolean; disk_usage_bytes?: number; max_disk_usage_gb?: number;
  month_reset_at?: number; subscription_state?: string; subscription_renewal_next_attempt_at?: number; cost_per_hour?: number; deletion_protection?: boolean;
  ongoing_maintenance?: boolean; scheduled_commands?: unknown;
  cs2_settings?: (RawServer["cs2_settings"] & {
    rcon?: string; password?: string; steam_game_server_login_token?: string; mapgroup?: string; maps_source?: string; insecure?: boolean;
    enable_gotv?: boolean; disable_bots?: boolean; private_server?: boolean; workshop_collection_id?: string; workshop_single_map_id?: string;
    tv_password?: string;
  }) | null;
};

/** Settings as the admin UI may see them: every secret is reduced to "is set". */
export type SettingsView = {
  name: string; location: string; slots: number; gameMode: string; mapsSource: string; mapgroup: string; startMap: string;
  workshopCollectionId: string; workshopSingleMapId: string; insecure: boolean; gotv: boolean; disableBots: boolean; privateServer: boolean; metamod: boolean;
  autostop: boolean; autostopMinutes: number; rebootOnCrash: boolean;
  passwordSet: boolean; rconSet: boolean; gsltSet: boolean;
  diskUsedBytes: number; diskMaxGb: number; createdAt: number | null; renewsAt: number | null; subscription: string; costPerHour: number | null; maintenance: boolean;
};

export function toSettingsView(s: RawServerFull): SettingsView {
  const c = s.cs2_settings ?? {};
  return {
    name: s.name, location: s.location, slots: c.slots ?? 0, gameMode: c.game_mode ?? "", mapsSource: c.maps_source ?? "", mapgroup: c.mapgroup ?? "",
    startMap: c.mapgroup_start_map ?? "", workshopCollectionId: c.workshop_collection_id ?? "", workshopSingleMapId: c.workshop_single_map_id ?? "",
    insecure: !!c.insecure, gotv: !!c.enable_gotv, disableBots: !!c.disable_bots, privateServer: !!c.private_server, metamod: !!c.enable_metamod,
    autostop: !!s.autostop, autostopMinutes: s.autostop_minutes ?? 0, rebootOnCrash: !!s.reboot_on_crash,
    passwordSet: !!c.password, rconSet: !!c.rcon, gsltSet: !!c.steam_game_server_login_token,
    diskUsedBytes: s.disk_usage_bytes ?? 0, diskMaxGb: s.max_disk_usage_gb ?? 0, createdAt: s.created_at ?? null,
    renewsAt: s.month_reset_at ?? s.subscription_renewal_next_attempt_at ?? null, subscription: s.subscription_state ?? "", costPerHour: s.cost_per_hour ?? null,
    maintenance: !!s.ongoing_maintenance,
  };
}

export const GAME_MODES = ["competitive", "casual", "wingman", "arms_race", "ffa_deathmatch", "retakes", "rush", "custom"] as const;
export const MAPS_SOURCES = ["mapgroup", "workshop_collection", "workshop_single_map"] as const;
