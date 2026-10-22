import { getPrisma } from "@/server/db";
import { dathost, readDathostConfig } from "@/server/dathost";

/**
 * R48b server health: offline / crash alerts, optional auto-restart, and a daily scheduled restart (only when empty and no lobby holds the server).
 * Runs lazily from queue polls and admin loads (throttled to once a minute) and from the daily cron route.
 */
const CHECK_EVERY_MS = 60_000;
export const SETTING = { autoRestart: "server.autoRestart", restartHour: "server.restartHourUtc", lastCheck: "server.lastHealthCheck", lastScheduled: "server.lastScheduledRestart" } as const;

export async function readSetting(key: string) {
  return (await getPrisma().adminSetting.findUnique({ where: { key } }))?.value ?? null;
}
export async function writeSetting(key: string, value: string) {
  await getPrisma().adminSetting.upsert({ where: { key }, create: { key, value }, update: { value } });
}

async function claimCheck(now: Date, force: boolean) {
  const prisma = getPrisma();
  const last = await prisma.adminSetting.findUnique({ where: { key: SETTING.lastCheck } });
  if (!force && last && now.getTime() - Number(last.value) < CHECK_EVERY_MS) return false;
  if (!last) {
    try { await prisma.adminSetting.create({ data: { key: SETTING.lastCheck, value: String(now.getTime()) } }); return true; } catch { return false; }
  }
  const r = await prisma.adminSetting.updateMany({ where: { key: SETTING.lastCheck, value: last.value }, data: { value: String(now.getTime()) } });
  return r.count === 1;
}

async function openAlert(serverId: string, kind: string, message: string) {
  const prisma = getPrisma();
  const open = await prisma.serverAlert.findFirst({ where: { serverId, kind, resolvedAt: null } });
  if (!open) await prisma.serverAlert.create({ data: { serverId, kind, message: message.slice(0, 300) } });
}

export async function healthTick(now = new Date(), force = false) {
  const cfg = readDathostConfig();
  if (!cfg || !(await claimCheck(now, force))) return null;
  const prisma = getPrisma();
  const api = dathost(cfg);
  const server = await api.getServer().catch(() => null);
  if (!server) { await openAlert(cfg.serverId, "unreachable", "DatHost API did not answer."); return null; }
  const autoRestart = (await readSetting(SETTING.autoRestart)) === "true";
  const liveLobby = await prisma.queueLobby.count({ where: { state: { in: ["LAUNCHING", "LIVE"] } } });
  if (server.error) await openAlert(cfg.serverId, "crash", server.error);
  if (!server.online && !server.booting) {
    // Offline only matters when something needs the server (a live lobby) or the owner asked for auto-restart.
    if (liveLobby || autoRestart) await openAlert(cfg.serverId, "offline", liveLobby ? "Server is offline while a match lobby is active." : "Server is offline.");
    if (autoRestart) {
      await api.start().catch(() => undefined);
      await prisma.serverAlert.create({ data: { serverId: cfg.serverId, kind: "auto-restart", message: "Started automatically.", resolvedAt: now } });
    }
  } else if (server.online) {
    await prisma.serverAlert.updateMany({ where: { serverId: cfg.serverId, kind: { in: ["offline", "unreachable", ...(server.error ? [] : ["crash"])] }, resolvedAt: null }, data: { resolvedAt: now } });
  }
  // Daily scheduled restart at the configured UTC hour, only when empty and idle.
  const hour = await readSetting(SETTING.restartHour);
  const today = now.toISOString().slice(0, 10);
  if (hour !== null && hour !== "" && Number(hour) === now.getUTCHours() && server.online && server.players === 0) {
    const busy = await prisma.queueLobby.count({ where: { state: { in: ["READY", "VETO", "LAUNCHING", "LIVE"] } } });
    if (!busy && (await readSetting(SETTING.lastScheduled)) !== today) {
      await writeSetting(SETTING.lastScheduled, today);
      await api.stop().catch(() => undefined);
      for (let i = 0; i < 15; i++) { await new Promise((r) => setTimeout(r, 1500)); if (!(await api.getServer().catch(() => null))?.online) break; }
      await api.start().catch(() => undefined);
      await prisma.serverAlert.create({ data: { serverId: cfg.serverId, kind: "scheduled-restart", message: `Daily restart (${hour}:00 UTC).`, resolvedAt: now } });
    }
  }
  return server;
}
