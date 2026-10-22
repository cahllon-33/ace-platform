"use server";

import { getPrisma } from "@/server/db";
import { buildConnectUrl } from "@/lib/queue";
import { resolvedConnect, resolvedGotv } from "@/server/connect-address";
import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import {
  dathost, DathostError, GAME_MODES, MAPS_SOURCES, readDathostConfig, safeServerPath, toSettingsView,
  type FileEntry, type SettingsView,
} from "@/server/dathost";

/**
 * R48 owner-only DatHost control (replaces the DatHost web panel). Every action re-checks the owner Steam session.
 * Secrets (RCON, server password, GSLT, FTP/MySQL) are write-only: the client only ever sees "is set".
 */
type R<T> = { ok: true; data: T } | { ok: false; error: string };

async function guard<T>(fn: (api: ReturnType<typeof dathost>) => Promise<T>, auditAs?: [string, string]): Promise<R<T>> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  const cfg = readDathostConfig();
  if (!cfg) return { ok: false, error: "DatHost is not configured." };
  try {
    const data = await fn(dathost(cfg));
    if (auditAs) {
      await getPrisma().adminAuditLog.create({ data: { actor: await readAdminActor(), action: auditAs[0], newValue: auditAs[1].slice(0, 300) } }).catch(() => undefined);
    }
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e instanceof DathostError ? e.message : e instanceof Error ? e.message : "DatHost request failed." };
  }
}

function scrub(lines: string[]): string[] {
  return lines.map((l) => l.replace(/((?:rcon_)?password|sv_password|tv_password|token|gslt)(\s*[:=]?\s*)("?)[^\s"]+\3/gi, "$1$2$3••••$3"));
}

/* ---------- console ---------- */

export async function consoleTail(maxLines = 300) {
  return guard(async (api) => scrub(await api.consoleLog(Math.min(1000, Math.max(20, maxLines)))));
}

/** Any single console line. Quick buttons use the same path. Secret-looking args are not written to the audit log. */
export async function consoleRun(line: string) {
  const l = String(line ?? "").trim();
  if (!l || l.length > 500 || /[\r\n]/.test(l)) return { ok: false as const, error: "One command, up to 500 characters." };
  return guard(async (api) => {
    await api.console(l);
    await new Promise((r) => setTimeout(r, 900));
    return scrub(await api.consoleLog(300));
  }, ["server.console", l.split(/\s+/)[0]]);
}

/* ---------- overview ---------- */

export type Overview = { settings: SettingsView; online: boolean; booting: boolean; error: string; players: number; address: string; connectUrl: string; gotvPort: number | null; metrics: { players: { t: number; v: number }[]; memory: { t: number; v: number }[] } };

export async function loadOverview() {
  return guard<Overview>(async (api) => {
    const [raw, metrics] = await Promise.all([api.getRaw(), api.metrics().catch(() => null)]);
    const address = `${raw.ip}:${raw.ports.game}`;
    return {
      settings: toSettingsView(raw), online: !!raw.on, booting: !!raw.booting, error: raw.server_error ?? "", players: raw.players_online ?? 0,
      address, connectUrl: buildConnectUrl(address), gotvPort: raw.ports.gotv ?? null,
      metrics: {
        players: (metrics?.players_online_graph ?? []).slice(-96).map((p) => ({ t: p.timestamp, v: p.value })),
        memory: (metrics?.memory_usage_bytes_graph ?? []).slice(-96).map((p) => ({ t: p.timestamp, v: p.value })),
      },
    };
  });
}

/**
 * R48d: owner "Join server" — steam://run/730 connect to the DatHost server at any time, with the server password appended
 * server-side when one is set. Only the owner receives it; the password is never logged or audited.
 */
export async function ownerJoinUrl() {
  return guard<string>(async (api) => {
    const raw = await api.getRaw();
    return (await resolvedConnect(raw.ip, raw.ports.game, raw.cs2_settings?.password)).connectUrl;
  }, ["server.join", "owner join (steam://run/730 connect)"]);
}

/** R48g owner "Watch live": GOTV spectator link (tv_password appended server-side if set). Null when GOTV is off. */
export async function ownerWatchUrl() {
  return guard<string | null>(async (api) => resolvedGotv(await api.getRaw().catch(() => null)));
}

/* ---------- settings ---------- */

export type SettingsInput = {
  name?: string; slots?: number; gameMode?: string; mapsSource?: string; mapgroup?: string; startMap?: string;
  workshopCollectionId?: string; workshopSingleMapId?: string; insecure?: boolean; gotv?: boolean; disableBots?: boolean; privateServer?: boolean; metamod?: boolean;
  autostop?: boolean; autostopMinutes?: number; rebootOnCrash?: boolean;
  /** Write-only. undefined/"" = keep; clear* = remove. */
  password?: string; clearPassword?: boolean; rcon?: string; gslt?: string; clearGslt?: boolean;
  /** Not a DatHost setting: applied through the console (tv_password) until the next restart. */
  gotvPassword?: string;
};

const bool = (v: boolean) => (v ? "true" : "false");

export async function buildSettingsFields(i: SettingsInput): Promise<Record<string, string> | string> {
  const f: Record<string, string> = {};
  if (i.name !== undefined) { const n = i.name.trim(); if (!n || n.length > 80) return "Name must be 1–80 characters."; f.name = n; }
  if (i.slots !== undefined) { if (!Number.isInteger(i.slots) || i.slots < 5 || i.slots > 64) return "Slots must be 5–64."; f["cs2_settings.slots"] = String(i.slots); }
  if (i.gameMode !== undefined) { if (!(GAME_MODES as readonly string[]).includes(i.gameMode)) return "Unknown game mode."; f["cs2_settings.game_mode"] = i.gameMode; }
  if (i.mapsSource !== undefined) { if (!(MAPS_SOURCES as readonly string[]).includes(i.mapsSource)) return "Unknown maps source."; f["cs2_settings.maps_source"] = i.mapsSource; }
  for (const [k, field, re] of [
    ["mapgroup", "cs2_settings.mapgroup", /^[\w-]{0,64}$/],
    ["startMap", "cs2_settings.mapgroup_start_map", /^[\w/-]{0,80}$/],
    ["workshopCollectionId", "cs2_settings.workshop_collection_id", /^\d{0,20}$/],
    ["workshopSingleMapId", "cs2_settings.workshop_single_map_id", /^\d{0,20}$/],
  ] as const) {
    const v = i[k];
    if (v !== undefined) { if (!re.test(v.trim())) return `Invalid ${k}.`; f[field] = v.trim(); }
  }
  for (const [k, field] of [
    ["insecure", "cs2_settings.insecure"], ["gotv", "cs2_settings.enable_gotv"], ["disableBots", "cs2_settings.disable_bots"],
    ["privateServer", "cs2_settings.private_server"], ["metamod", "cs2_settings.enable_metamod"], ["autostop", "autostop"], ["rebootOnCrash", "reboot_on_crash"],
  ] as const) {
    const v = i[k];
    if (v !== undefined) f[field] = bool(!!v);
  }
  if (i.autostopMinutes !== undefined) { if (!Number.isInteger(i.autostopMinutes) || i.autostopMinutes < 1 || i.autostopMinutes > 1440) return "Autostop minutes must be 1–1440."; f.autostop_minutes = String(i.autostopMinutes); }
  if (i.clearPassword) f["cs2_settings.password"] = "";
  else if (i.password) { if (i.password.length > 64 || /\s/.test(i.password)) return "Server password: up to 64 characters, no spaces."; f["cs2_settings.password"] = i.password; }
  if (i.rcon) { if (i.rcon.length < 8 || i.rcon.length > 64 || /\s/.test(i.rcon)) return "RCON password: 8–64 characters, no spaces."; f["cs2_settings.rcon"] = i.rcon; }
  if (i.clearGslt) f["cs2_settings.steam_game_server_login_token"] = "";
  else if (i.gslt) { if (!/^[A-F0-9]{32}$/i.test(i.gslt.trim())) return "GSLT must be a 32-character Steam token."; f["cs2_settings.steam_game_server_login_token"] = i.gslt.trim(); }
  return f;
}

export async function saveSettings(input: SettingsInput) {
  const fields = await buildSettingsFields(input);
  if (typeof fields === "string") return { ok: false as const, error: fields };
  const changed = Object.keys(fields).map((k) => k.replace("cs2_settings.", "")).join(",");
  return guard(async (api) => {
    if (Object.keys(fields).length) await api.update(fields);
    const tv = input.gotvPassword?.trim();
    if (tv) {
      if (tv.length > 64 || /[\s;"]/.test(tv)) throw new Error("GOTV password: up to 64 characters, no spaces, quotes or semicolons.");
      await api.console(`tv_password ${tv}`);
    }
    return toSettingsView(await api.getRaw());
  }, ["server.settings", changed + (input.gotvPassword ? ",tv_password" : "")]);
}

/* ---------- power ---------- */

export async function power(kind: "start" | "stop" | "restart" | "reinstall", confirmName?: string) {
  return guard(async (api) => {
    if (kind === "reinstall") {
      const raw = await api.getRaw();
      if ((confirmName ?? "").trim() !== raw.name) throw new Error("Type the exact server name to confirm a reinstall.");
      await api.reset();
    } else if (kind === "start") await api.start();
    else if (kind === "stop") await api.stop();
    else {
      await api.stop();
      for (let i = 0; i < 15; i++) { await new Promise((r) => setTimeout(r, 1500)); if (!(await api.getServer()).online) break; }
      await api.start();
    }
    return true;
  }, ["server.power", kind]);
}

/* ---------- files ---------- */

export async function listFiles(path: string) {
  const p = safeServerPath(path);
  if (p === null) return { ok: false as const, error: "Invalid path." };
  return guard<FileEntry[]>(async (api) => {
    const rows = await api.listFiles(p, 1);
    return rows.filter((r) => !r.deleted).sort((a, b) => Number(b.path.endsWith("/")) - Number(a.path.endsWith("/")) || a.path.localeCompare(b.path));
  });
}

const TEXT_EXT = /\.(cfg|txt|ini|json|jsonc|yml|yaml|xml|log|vdf|toml|md|csv|properties|conf|lua|js|cs)$/i;
const MAX_TEXT = 512 * 1024;

export async function readTextFile(path: string) {
  const p = safeServerPath(path);
  if (!p || p.endsWith("/")) return { ok: false as const, error: "Invalid path." };
  if (!TEXT_EXT.test(p)) return { ok: false as const, error: "Only text files open in the editor. Use Download for other files." };
  return guard(async (api) => {
    const res = await api.downloadFile(p);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length > MAX_TEXT) throw new Error("File is larger than 512 KB; download it instead.");
    return buf.toString("utf8");
  });
}

export async function writeTextFile(path: string, content: string) {
  const p = safeServerPath(path);
  if (!p || p.endsWith("/")) return { ok: false as const, error: "Invalid path." };
  if (typeof content !== "string" || Buffer.byteLength(content) > MAX_TEXT) return { ok: false as const, error: "Content is limited to 512 KB." };
  const name = p.split("/").pop() || "file.txt";
  return guard(async (api) => { await api.uploadFile(p, new Blob([content], { type: "text/plain" }), name); return true; }, ["server.file.write", p]);
}

/** DatHost has no mkdir endpoint: a folder is created by uploading an empty ".keep" file inside it. */
export async function createFolder(path: string) {
  const p = safeServerPath(path.replace(/\/+$/, ""));
  if (!p) return { ok: false as const, error: "Invalid folder name." };
  return guard(async (api) => { await api.uploadFile(`${p}/.keep`, new Blob([""]), ".keep"); return true; }, ["server.file.mkdir", p]);
}

export async function moveFile(path: string, destination: string) {
  const a = safeServerPath(path);
  const b = safeServerPath(destination);
  if (!a || !b) return { ok: false as const, error: "Invalid path." };
  return guard(async (api) => { await api.moveFile(a, b); return true; }, ["server.file.move", `${a} -> ${b}`]);
}

/** Deletion requires the client to echo the exact path it confirmed in the dialog. */
export async function deleteFile(path: string, confirmPath: string) {
  const p = safeServerPath(path);
  if (!p) return { ok: false as const, error: "Invalid path." };
  if (confirmPath !== p) return { ok: false as const, error: "Confirmation did not match the path." };
  return guard(async (api) => { await api.deleteFile(p); return true; }, ["server.file.delete", p]);
}

export async function syncFiles() {
  return guard(async (api) => { await api.syncFiles(); return true; }, ["server.file.sync", "sync"]);
}

/* ---------- plugins ---------- */

export type PluginStatus = { metamodEnabled: boolean; metamodFiles: boolean; css: boolean; aceBridge: boolean; aceBridgeConfig: boolean; plugins: string[] };

export async function pluginStatus() {
  return guard<PluginStatus>(async (api) => {
    const [raw, files] = await Promise.all([api.getRaw(), api.listFiles("addons/", 4).catch(() => [] as FileEntry[])]);
    const paths = files.filter((f) => !f.deleted).map((f) => f.path);
    const has = (re: RegExp) => paths.some((p) => re.test(p));
    const plugins = [...new Set(paths.map((p) => p.match(/^addons\/counterstrikesharp\/plugins\/([^/]+)\//)?.[1]).filter((x): x is string => !!x))].sort();
    return {
      metamodEnabled: !!raw.cs2_settings?.enable_metamod, metamodFiles: has(/^addons\/metamod\//), css: has(/^addons\/counterstrikesharp\//),
      aceBridge: plugins.some((p) => /acebridge/i.test(p)), aceBridgeConfig: has(/^addons\/counterstrikesharp\/configs\/plugins\/AceBridge\//i), plugins,
    };
  });
}
