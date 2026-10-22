"use server";

import { getPrisma } from "@/server/db";
import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import { ACE_MAPS, dathost, DathostError, isAceMap, readDathostConfig, type ServerView } from "@/server/dathost";
import { parseStatusLog, type Cs2Status } from "@/lib/cs2-status";

export type ServerSnapshot = { server: ServerView; status: Cs2Status; log: string[] };
export type ServerActionResult = { ok: true; snapshot: ServerSnapshot } | { ok: false; error: string };

/** Console lines shown in the admin log; anything that looks like a credential is masked. */
function scrub(lines: string[]): string[] {
  return lines.map((l) => l.replace(/((?:rcon_)?password|sv_password|tv_password|token|gslt)(\s*[:=]?\s*)("?)[^\s"]+\3/gi, "$1$2$3••••$3"));
}

async function audit(action: string, value: string) {
  await getPrisma().adminAuditLog.create({ data: { actor: await readAdminActor(), action, newValue: value.slice(0, 300) } }).catch(() => undefined);
}

export async function loadServerSnapshot(): Promise<ServerActionResult> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  const cfg = readDathostConfig();
  if (!cfg) return { ok: false, error: "DATHOST_EMAIL / DATHOST_PASSWORD / DATHOST_SERVER_ID are not set." };
  try {
    const api = dathost(cfg);
    const [server, log] = await Promise.all([api.getServer(), api.consoleLog(200).catch(() => [] as string[])]);
    return { ok: true, snapshot: { server, status: parseStatusLog(log), log: scrub(log.slice(-80)) } };
  } catch (e) {
    return { ok: false, error: e instanceof DathostError ? e.message : "DatHost is unreachable." };
  }
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function serverAction(kind: "start" | "stop" | "restart" | "map" | "rcon" | "refresh", arg = ""): Promise<ServerActionResult> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  const cfg = readDathostConfig();
  if (!cfg) return { ok: false, error: "DatHost is not configured." };
  const api = dathost(cfg);
  try {
    if (kind === "start") await api.start();
    else if (kind === "stop") await api.stop();
    else if (kind === "restart") {
      await api.stop();
      for (let i = 0; i < 15; i++) { await wait(1500); if (!(await api.getServer()).online) break; }
      await api.start();
    } else if (kind === "map") {
      if (!isAceMap(arg)) return { ok: false, error: `Map must be one of ${ACE_MAPS.join(", ")}.` };
      await api.changeLevel(arg);
    } else if (kind === "rcon") {
      const line = arg.trim();
      if (!line || line.length > 300 || /[\r\n]/.test(line)) return { ok: false, error: "One command, up to 300 characters." };
      await api.console(line);
    } else {
      await api.console("status");
    }
    if (kind !== "refresh") await audit(`server.${kind}`, kind === "rcon" ? arg.trim().split(/\s+/)[0] : arg || kind);
    await wait(kind === "refresh" || kind === "rcon" ? 1500 : 600);
    return loadServerSnapshot();
  } catch (e) {
    return { ok: false, error: e instanceof DathostError ? e.message : "DatHost request failed." };
  }
}
