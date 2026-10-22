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
    host: s.ip, port: s.ports.game, address, connectUrl: `steam://connect/${address}`,
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
    settings: { map: input.map, connect_time: 300, match_begin_countdown: 30 },
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
  players: { steam_id_64: string; team: "team1" | "team2" | "spectator"; connected?: boolean; stats?: Cs2MatchPlayerStats }[];
  settings?: { map?: string | null };
  rounds_played?: number; finished?: boolean; cancel_reason?: string | null;
};
