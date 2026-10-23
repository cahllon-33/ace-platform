/**
 * R63 live platform status. Every row is derived from a real signal; nothing is hard-coded.
 * Cached in memory for 30 s per server instance. No secret values ever leave this module.
 */
import { requireAnticheatNow } from "@/server/anticheat";
import { readDathostConfig, dathost } from "@/server/dathost";
import { getPrisma } from "@/server/db";
import { readPaddleConfig } from "@/server/paddle";

export type Tone = "ok" | "warn" | "off";
export type StatusRow = { key: "steam" | "shield" | "servers" | "tournaments" | "billing"; tone: Tone; value: string; detail: string };
export type PlatformStatusPayload = { rows: StatusRow[]; checkedAt: string };

const TTL_MS = 30_000;
let cache: { at: number; data: PlatformStatusPayload } | null = null;
let inflight: Promise<PlatformStatusPayload> | null = null;

const timeout = <T>(p: Promise<T>, ms: number) => Promise.race([p, new Promise<never>((_, r) => setTimeout(() => r(new Error("timeout")), ms))]);
const n = (x: number, one: string, many = one + "s") => `${x} ${x === 1 ? one : many}`;

async function steamRow(): Promise<StatusRow> {
  const configured = !!process.env.SESSION_SECRET?.trim() && !!(process.env.APP_BASE_URL?.trim() || process.env.VERCEL_URL);
  if (!configured) return { key: "steam", tone: "off", value: "Not configured", detail: "Sign-in is not set up on this deployment" };
  try {
    const r = await timeout(fetch("https://steamcommunity.com/openid/login", { method: "HEAD", cache: "no-store" }), 4000);
    return r.status < 500
      ? { key: "steam", tone: "ok", value: "Available", detail: "Steam OpenID endpoint reachable" }
      : { key: "steam", tone: "warn", value: "Degraded", detail: `Steam answered HTTP ${r.status}` };
  } catch {
    return { key: "steam", tone: "warn", value: "Steam unreachable", detail: "Steam OpenID endpoint did not answer" };
  }
}

async function shieldRow(): Promise<StatusRow> {
  try {
    const [required, active] = await Promise.all([
      requireAnticheatNow(),
      getPrisma().anticheatSession.count({ where: { revokedAt: null, lastHeartbeatAt: { gte: new Date(Date.now() - 120_000) } } }),
    ]);
    const live = n(active, "active client");
    return required
      ? { key: "shield", tone: "ok", value: "Live — required", detail: `${live} (last 120 s)` }
      : { key: "shield", tone: active > 0 ? "warn" : "off", value: "Live — optional", detail: `Not required for queue · ${live} (last 120 s)` };
  } catch {
    return { key: "shield", tone: "off", value: "Status unavailable", detail: "Could not read anti-cheat state" };
  }
}

async function serversRow(): Promise<StatusRow> {
  const cfg = readDathostConfig();
  if (!cfg) return { key: "servers", tone: "off", value: "Not configured", detail: "No game server is connected" };
  try {
    const s = await timeout(dathost(cfg).getServer(), 6000);
    if (s.online) return { key: "servers", tone: "ok", value: "Online", detail: `${s.players}/${s.slots} players${s.map ? ` · ${s.map}` : ""}` };
    if (s.booting) return { key: "servers", tone: "warn", value: "Starting", detail: "Server is booting" };
    return { key: "servers", tone: "off", value: "Offline", detail: "Server is stopped" };
  } catch {
    return { key: "servers", tone: "off", value: "Offline", detail: "Server did not respond" };
  }
}

async function tournamentsRow(): Promise<StatusRow> {
  try {
    const g = await getPrisma().tournament.groupBy({ by: ["status"], where: { status: { in: ["REGISTRATION", "LOCKED", "IN_PROGRESS"] } }, _count: { _all: true } });
    const c = (s: string) => g.find((x) => x.status === s)?._count._all ?? 0;
    const live = c("IN_PROGRESS"), upcoming = c("REGISTRATION") + c("LOCKED");
    if (!live && !upcoming) return { key: "tournaments", tone: "off", value: "No tournaments scheduled", detail: "" };
    return { key: "tournaments", tone: live ? "ok" : "warn", value: live ? `${n(live, "live")}` : `${n(upcoming, "upcoming")}`, detail: live && upcoming ? `${n(upcoming, "upcoming")}` : live ? "In progress" : "Registration / locked" };
  } catch {
    return { key: "tournaments", tone: "off", value: "Status unavailable", detail: "Could not read tournaments" };
  }
}

function billingRow(): StatusRow {
  const cfg = readPaddleConfig();
  if (!cfg) return { key: "billing", tone: "off", value: "Not live", detail: "Paddle is not configured" };
  if (cfg.env !== "production") return { key: "billing", tone: "warn", value: "Test mode", detail: "Paddle sandbox — no real charges" };
  return { key: "billing", tone: "ok", value: "Live", detail: "Paddle production checkout" };
}

async function compute(): Promise<PlatformStatusPayload> {
  const rows = await Promise.all([steamRow(), shieldRow(), serversRow(), tournamentsRow(), Promise.resolve(billingRow())]);
  return { rows, checkedAt: new Date().toISOString() };
}

export async function getPlatformStatus(): Promise<PlatformStatusPayload> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  inflight ??= compute().then((data) => { cache = { at: Date.now(), data }; return data; }).finally(() => { inflight = null; });
  return inflight;
}
