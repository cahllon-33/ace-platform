/**
 * R51 A.C.E desktop anti-cheat: pure helpers shared by the API routes and tests.
 * User-mode only (no kernel driver). The blocklist is matched case-insensitively against
 * process names, window titles and loaded-module names reported by the desktop client.
 */
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export const HEARTBEAT_INTERVAL_SEC = 15;
/** A heartbeat older than this no longer counts as "fresh" for queue enforcement. */
export const HEARTBEAT_FRESH_SEC = 45;
/** Signed requests outside this clock skew are rejected (replay window). */
export const MAX_SKEW_SEC = 120;
export const CLIENT_MIN_VERSION = "1.0.0";

/** Substrings of known CS2 cheat loaders / memory tools. Server-delivered so it can change without a client update. */
export const BLOCKLIST = {
  processes: ["cheatengine", "cheat engine", "processhacker", "systeminformer", "x64dbg", "x32dbg", "ollydbg", "ida64", "extremeinjector", "xenos", "gh injector", "ghinjector", "osiris", "neverlose", "aimware", "onetap", "fatality", "memprocfs", "kdmapper", "artmoney", "wemod"],
  windows: ["cheat engine", "process hacker", "system informer", "x64dbg", "extreme injector", "xenos injector", "neverlose", "aimware", "osiris", "gamesense", "skeet", "memprocfs"],
  modules: ["osiris.dll", "neverlose", "aimware", "onetap", "fatality.dll", "vac-bypass", "vacbypass", "gamesense", "dbk64", "dbk32", "speedhack-i386.dll", "speedhack-x86_64.dll"],
  /** CS2 launch options that are never allowed on A.C.E. */
  launchFlags: ["-insecure", "-allow_third_party_software", "-tools", "-condebug_unsafe"],
  /** Files hashed under the CS2 install (relative to "Counter-Strike Global Offensive/"). Expected hashes are optional (ACE_CS2_FILE_HASHES). */
  files: ["game/bin/win64/cs2.exe", "game/csgo/bin/win64/client.dll", "game/bin/win64/engine2.dll"],
};

export type Blocklist = typeof BLOCKLIST;

/** Parses ACE_CS2_FILE_HASHES ("relpath=sha256,relpath=sha256"). Unknown or malformed entries are skipped. */
export function parseExpectedHashes(raw: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of (raw ?? "").split(",")) {
    const [k, v] = part.split("=").map((s) => s?.trim() ?? "");
    if (k && /^[a-f0-9]{64}$/i.test(v)) out[k] = v.toLowerCase();
  }
  return out;
}

export function requireAnticheat(env: Record<string, string | undefined> = process.env): boolean {
  return (env.ACE_REQUIRE_ANTICHEAT ?? "").trim().toLowerCase() === "true";
}

/** Per-session HMAC key: never stored, re-derived from the server secret. */
export function sessionKey(secret: string, sessionId: string): string {
  return createHmac("sha256", secret).update(`ace-ac:${sessionId}`).digest("hex");
}

export function signPayload(key: string, ts: number, body: string): string {
  return createHmac("sha256", key).update(`${ts}.${body}`).digest("hex");
}

export function verifySignature(key: string, ts: number, body: string, sig: string, nowSec = Math.floor(Date.now() / 1000)): boolean {
  if (!Number.isFinite(ts) || Math.abs(nowSec - ts) > MAX_SKEW_SEC) return false;
  const expected = Buffer.from(signPayload(key, ts, body), "hex");
  const got = Buffer.from(/^[a-f0-9]{64}$/i.test(sig) ? sig : "", "hex");
  return got.length === expected.length && timingSafeEqual(got, expected);
}

export function isFresh(lastHeartbeatAt: Date | null | undefined, now = new Date()): boolean {
  return !!lastHeartbeatAt && now.getTime() - lastHeartbeatAt.getTime() <= HEARTBEAT_FRESH_SEC * 1000;
}

export type Violation = { kind: string; detail: string };

/** Server-side re-check of what the client reported, so a client with a stale list is still judged by the current one. */
export function matchBlocklist(report: { processes?: string[]; windows?: string[]; modules?: string[]; launchArgs?: string; fileHashes?: Record<string, string> }, expected: Record<string, string> = {}, list: Blocklist = BLOCKLIST): Violation[] {
  const out: Violation[] = [];
  const hit = (kind: string, values: string[] | undefined, needles: string[]) => {
    for (const v of values ?? []) {
      const lv = String(v).toLowerCase();
      const n = needles.find((x) => lv.includes(x));
      if (n) out.push({ kind, detail: String(v).slice(0, 200) });
    }
  };
  hit("process", report.processes, list.processes);
  hit("window", report.windows, list.windows);
  hit("module", report.modules, list.modules);
  const args = ` ${(report.launchArgs ?? "").toLowerCase()} `;
  for (const f of list.launchFlags) if (args.includes(` ${f} `) || args.includes(` ${f}=`)) out.push({ kind: "launch-flag", detail: f });
  for (const [file, want] of Object.entries(expected)) {
    const got = report.fileHashes?.[file];
    if (got && got.toLowerCase() !== want) out.push({ kind: "file-hash", detail: file });
  }
  return out.slice(0, 50);
}

export function versionAtLeast(v: string, min: string): boolean {
  const a = v.split(".").map((n) => parseInt(n, 10) || 0), b = min.split(".").map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) if ((a[i] ?? 0) !== (b[i] ?? 0)) return (a[i] ?? 0) > (b[i] ?? 0);
  return true;
}

/* ---------------- R59 stage 2 helpers ---------------- */

/** Heartbeat protocol 2 (desktop >= 1.6.0): every heartbeat must echo the single-use nonce from the previous response. */
export const PROTO_NONCE = 2;
export function newNonce(): string {
  return randomBytes(18).toString("hex");
}

/** Soft findings reported by the 1.6.0 desktop detectors. These never block; they go to owner review. */
export const SOFT_KINDS = new Set(["handle", "unsigned-module", "overlay", "debugger", "vm", "test-signing", "dse-off", "asar", "app-tamper", "driver-provider"]);
/** Hard rule matches (owner/admin-listed programs, windows, modules, launch flags, game file mismatch) block queueing. */
export const HARD_KINDS = new Set(["process", "window", "module", "launch-flag", "file-hash", "hw-ban"]);

export type Finding = { kind: string; severity: string; detail: string };
export function parseFindings(v: unknown): Finding[] {
  if (!Array.isArray(v)) return [];
  return v.slice(0, 40).flatMap((x) => {
    const o = (x ?? {}) as Record<string, unknown>;
    const kind = typeof o.kind === "string" ? o.kind.slice(0, 32) : "";
    if (!SOFT_KINDS.has(kind)) return [];
    return [{ kind, severity: o.severity === "high" ? "high" : "warn", detail: typeof o.detail === "string" ? o.detail.slice(0, 300) : "" }];
  });
}

/** clean | review (soft findings only: allowed, owner reviews) | flagged (hard rule: blocks queue/match). */
export function sessionStatus(violations: { kind: string }[]): "clean" | "review" | "flagged" {
  if (violations.some((v) => HARD_KINDS.has(v.kind) || v.kind === "tamper")) return "flagged";
  return violations.length ? "review" : "clean";
}

export function allowedStatus(status: string | null | undefined): boolean {
  return status === "clean" || status === "review";
}

export type GateInput = { required: boolean; userFound: boolean; session: { lastHeartbeatAt: Date | null; status: string } | null; hwBanned: boolean };
export type GateVerdict = { allow: boolean; required: boolean; reason: string };
/** Pure match-gate decision used by /api/cs2/gate. */
export function gateVerdict(g: GateInput, now = new Date()): GateVerdict {
  if (!g.required) return { allow: true, required: false, reason: "not-required" };
  if (!g.userFound) return { allow: false, required: true, reason: "no-account" };
  if (g.hwBanned) return { allow: false, required: true, reason: "integrity-flagged" };
  if (!g.session || !isFresh(g.session.lastHeartbeatAt, now)) return { allow: false, required: true, reason: "no-session" };
  if (!allowedStatus(g.session.status)) return { allow: false, required: true, reason: "integrity-flagged" };
  return { allow: true, required: true, reason: "ok" };
}
