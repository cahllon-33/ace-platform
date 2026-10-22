/**
 * R50 Discord integration (server-only). Bot REST client for the A.C.E guild plus the OAuth2 account-link helpers.
 * Env: DISCORD_BOT_TOKEN, DISCORD_GUILD_ID, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET (OAuth only). Tokens are never logged or returned.
 */
const API = "https://discord.com/api/v10";
type Fetcher = typeof fetch;

export type DiscordBotConfig = { token: string; guildId: string };
export type DiscordOAuthConfig = { clientId: string; clientSecret: string; redirectUri: string };

export function readDiscordBotConfig(env: NodeJS.ProcessEnv = process.env): DiscordBotConfig | null {
  const token = env.DISCORD_BOT_TOKEN?.trim() ?? "";
  const guildId = env.DISCORD_GUILD_ID?.trim() ?? "";
  return token && /^\d{15,22}$/.test(guildId) ? { token, guildId } : null;
}

export function readDiscordOAuthConfig(baseUrl: string, env: NodeJS.ProcessEnv = process.env): DiscordOAuthConfig | null {
  const clientId = env.DISCORD_CLIENT_ID?.trim() ?? "";
  const clientSecret = env.DISCORD_CLIENT_SECRET?.trim() ?? "";
  if (!clientId || !clientSecret) return null;
  return { clientId, clientSecret, redirectUri: `${baseUrl}/api/auth/discord/callback` };
}

export class DiscordError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

/** Voice channel permission bits. */
export const PERM = { VIEW: (BigInt(1) << BigInt(10)), CONNECT: (BigInt(1) << BigInt(20)), SPEAK: (BigInt(1) << BigInt(21)), STREAM: (BigInt(1) << BigInt(9)), USE_VAD: (BigInt(1) << BigInt(25)), MOVE: (BigInt(1) << BigInt(24)), MANAGE_CHANNELS: (BigInt(1) << BigInt(4)) } as const;
const bits = (...p: bigint[]) => p.reduce((a, b) => a | b, BigInt(0)).toString();

export type Overwrite = { id: string; type: 0 | 1; allow: string; deny: string };

/** Team channel overwrites: @everyone may see it but not join; the team's linked players and the bot can join and speak. */
export function teamOverwrites(guildId: string, botId: string | null, memberIds: string[]): Overwrite[] {
  const member = bits(PERM.VIEW, PERM.CONNECT, PERM.SPEAK, PERM.STREAM, PERM.USE_VAD);
  return [
    { id: guildId, type: 0, allow: "0", deny: bits(PERM.CONNECT) },
    ...(botId ? [{ id: botId, type: 1 as const, allow: bits(PERM.VIEW, PERM.CONNECT, PERM.MOVE, PERM.MANAGE_CHANNELS), deny: "0" }] : []),
    ...[...new Set(memberIds)].map((id) => ({ id, type: 1 as const, allow: member, deny: "0" })),
  ];
}

export function discordBot(cfg: DiscordBotConfig, f: Fetcher = fetch) {
  const g = encodeURIComponent(cfg.guildId);
  async function call<T>(path: string, init: RequestInit & { reason?: string } = {}): Promise<T> {
    const headers = new Headers(init.headers);
    headers.set("Authorization", `Bot ${cfg.token}`);
    headers.set("User-Agent", "DiscordBot (https://ace-platform-steel.vercel.app, 1.0) A.C.E");
    if (init.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    if (init.reason) headers.set("X-Audit-Log-Reason", encodeURIComponent(init.reason));
    for (let attempt = 0; attempt < 3; attempt++) {
      const res = await f(`${API}${path}`, { ...init, headers, cache: "no-store", signal: AbortSignal.timeout(10000) });
      if (res.status === 429 && attempt < 2) {
        const body = (await res.json().catch(() => ({}))) as { retry_after?: number };
        await new Promise((r) => setTimeout(r, Math.min(5, body.retry_after ?? 1) * 1000));
        continue;
      }
      if (res.status === 204) return undefined as T;
      const text = await res.text();
      if (!res.ok) {
        let code = "";
        try { code = String((JSON.parse(text) as { code?: number }).code ?? ""); } catch { /* not json */ }
        throw new DiscordError(res.status, `discord ${res.status}${code ? ` code ${code}` : ""}`);
      }
      return (text ? JSON.parse(text) : undefined) as T;
    }
    throw new DiscordError(429, "discord rate limited");
  }
  const json = (method: string, body: unknown, reason?: string) => ({ method, body: JSON.stringify(body), reason });
  return {
    me: () => call<{ id: string; username: string }>(`/users/@me`),
    channels: () => call<{ id: string; type: number; name: string; parent_id: string | null }[]>(`/guilds/${g}/channels`),
    createChannel: (body: { name: string; type: 2 | 4; parent_id?: string; permission_overwrites?: Overwrite[]; user_limit?: number }, reason?: string) =>
      call<{ id: string; name: string }>(`/guilds/${g}/channels`, json("POST", body, reason)),
    deleteChannel: (id: string, reason?: string) => call<unknown>(`/channels/${encodeURIComponent(id)}`, { method: "DELETE", reason }),
    createInvite: (channelId: string, maxAgeSec = 4 * 3600) =>
      call<{ code: string }>(`/channels/${encodeURIComponent(channelId)}/invites`, json("POST", { max_age: maxAgeSec, max_uses: 0, unique: true })),
    /** guilds.join: adds the user with their OAuth access token. 201 = added, 204 = already a member. */
    addMember: (userId: string, accessToken: string) =>
      call<unknown>(`/guilds/${g}/members/${encodeURIComponent(userId)}`, json("PUT", { access_token: accessToken })),
    voiceState: (userId: string) =>
      call<{ channel_id: string | null }>(`/guilds/${g}/voice-states/${encodeURIComponent(userId)}`).catch((e) => {
        if (e instanceof DiscordError && e.status === 404) return null;
        throw e;
      }),
    /** Moves a member who is already connected to voice. */
    moveMember: (userId: string, channelId: string, reason?: string) =>
      call<unknown>(`/guilds/${g}/members/${encodeURIComponent(userId)}`, json("PATCH", { channel_id: channelId }, reason)),
    dm: async (userId: string, content: string) => {
      const ch = await call<{ id: string }>(`/users/@me/channels`, json("POST", { recipient_id: userId }));
      return call<{ id: string }>(`/channels/${ch.id}/messages`, json("POST", { content: content.slice(0, 2000), allowed_mentions: { parse: [] } }));
    },
  };
}
export type DiscordBot = ReturnType<typeof discordBot>;

/* ---------- OAuth2 account link ---------- */

export const DISCORD_SCOPES = "identify guilds.join";

export function discordAuthorizeUrl(cfg: DiscordOAuthConfig, state: string) {
  const u = new URL("https://discord.com/oauth2/authorize");
  u.searchParams.set("client_id", cfg.clientId);
  u.searchParams.set("response_type", "code");
  u.searchParams.set("redirect_uri", cfg.redirectUri);
  u.searchParams.set("scope", DISCORD_SCOPES);
  u.searchParams.set("state", state);
  u.searchParams.set("prompt", "none");
  return u.toString();
}

export async function exchangeDiscordCode(cfg: DiscordOAuthConfig, code: string, f: Fetcher = fetch) {
  const res = await f(`${API}/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: `Basic ${Buffer.from(`${cfg.clientId}:${cfg.clientSecret}`).toString("base64")}` },
    body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: cfg.redirectUri }),
    cache: "no-store", signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new DiscordError(res.status, "discord-token-failed");
  const tok = (await res.json()) as { access_token: string; scope?: string };
  const me = await f(`${API}/users/@me`, { headers: { Authorization: `Bearer ${tok.access_token}` }, cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!me.ok) throw new DiscordError(me.status, "discord-identify-failed");
  const u = (await me.json()) as { id: string; username: string; global_name?: string | null };
  return { accessToken: tok.access_token, scope: tok.scope ?? "", id: u.id, username: u.global_name || u.username };
}

/* ---------- match text ---------- */

/** Random server password: 12 chars from an unambiguous alphabet (no spaces/quotes, safe in a console line and URL). */
export function randomServerPassword(rand: (n: number) => Uint8Array = (n) => crypto.getRandomValues(new Uint8Array(n))) {
  const abc = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return [...rand(12)].map((b) => abc[b % abc.length]).join("");
}

export function connectDetails(address: string, password: string) {
  return { steamUrl: `steam://connect/${address}/${password}`, console: `connect ${address}; password ${password}` };
}

export function matchDm(o: { team: "A" | "B"; map: string; voiceUrl: string | null; address: string | null; password: string; lobbyUrl: string }) {
  const c = o.address ? connectDetails(o.address, o.password) : null;
  return [
    `**A.C.E match ready** · Team ${o.team} · ${o.map}`,
    o.voiceUrl ? `🎧 Team ${o.team} voice: ${o.voiceUrl}` : null,
    c ? `▶ Join: ${c.steamUrl}` : null,
    c ? `⌨ Console: \`${c.console}\`` : null,
    `Lobby: ${o.lobbyUrl}`,
    "Do not share the password. It changes every match.",
  ].filter(Boolean).join("\n");
}
