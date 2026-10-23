/**
 * R51 A.C.E desktop anti-cheat (server side). User-mode client, honest limits: it detects known tools
 * by name and bad CS2 launch flags / file hashes; it cannot stop a kernel cheat.
 * Env: ACE_REQUIRE_ANTICHEAT (default false), ACE_CS2_FILE_HASHES (optional), SESSION_SECRET (key derivation).
 */
import { BLOCKLIST, CLIENT_MIN_VERSION, HEARTBEAT_INTERVAL_SEC, isFresh, matchBlocklist, parseExpectedHashes, requireAnticheat, sessionKey, verifySignature, versionAtLeast } from "@/lib/anticheat";
import { getPrisma } from "@/server/db";
import { getSessionSecret } from "@/server/env";
import { readSetting } from "@/server/server-health";

/** R53 owner overrides (AdminSetting): anticheat.require = "true"|"false" beats the env; anticheat.extraProcesses = JSON string[] merged into the blocklist. */
export const AC_SETTING = { require: "anticheat.require", extra: "anticheat.extraProcesses" } as const;
export async function requireAnticheatNow(): Promise<boolean> {
  const v = await readSetting(AC_SETTING.require).catch(() => null);
  return v === "true" ? true : v === "false" ? false : requireAnticheat();
}
export async function extraBlockedProcesses(): Promise<string[]> {
  try { const v = JSON.parse((await readSetting(AC_SETTING.extra)) ?? "[]"); return Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, 200) : []; } catch { return []; }
}
async function effectiveBlocklist() {
  const extra = await extraBlockedProcesses();
  return extra.length ? { ...BLOCKLIST, processes: [...new Set([...BLOCKLIST.processes, ...extra])] } : BLOCKLIST;
}

const str = (v: unknown, max = 200) => (typeof v === "string" ? v.slice(0, max) : "");
const strs = (v: unknown, n = 100) => (Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, n).map((x: string) => x.slice(0, 200)) : []);

export async function issueAnticheatSession(userId: string, clientVersion: string, machineHash: string) {
  const prisma = getPrisma();
  await prisma.anticheatSession.updateMany({ where: { userId, revokedAt: null }, data: { revokedAt: new Date() } });
  const s = await prisma.anticheatSession.create({ data: { userId, clientVersion: clientVersion.slice(0, 32), machineHash: machineHash.slice(0, 128) } });
  return {
    sessionId: s.id, key: sessionKey(getSessionSecret(), s.id), intervalSec: HEARTBEAT_INTERVAL_SEC,
    blocklist: await effectiveBlocklist(), expectedHashes: parseExpectedHashes(process.env.ACE_CS2_FILE_HASHES), minVersion: CLIENT_MIN_VERSION,
    outdated: !versionAtLeast(clientVersion, CLIENT_MIN_VERSION),
  };
}

export type HeartbeatResult = { ok: true; status: string; violations: number } | { ok: false; error: string; status: number };

export async function acceptHeartbeat(rawBody: string, ts: number, sig: string): Promise<HeartbeatResult> {
  let body: Record<string, unknown>;
  try { body = JSON.parse(rawBody); } catch { return { ok: false, error: "bad-json", status: 400 }; }
  const sessionId = str(body.sessionId, 64);
  const seq = Number(body.seq);
  if (!sessionId || !Number.isInteger(seq)) return { ok: false, error: "bad-request", status: 400 };
  const prisma = getPrisma();
  const s = await prisma.anticheatSession.findUnique({ where: { id: sessionId } });
  if (!s || s.revokedAt) return { ok: false, error: "session", status: 401 };
  if (!verifySignature(sessionKey(getSessionSecret(), s.id), ts, rawBody, sig)) {
    await prisma.anticheatEvent.create({ data: { userId: s.userId, sessionId: s.id, kind: "signature", severity: "warn", detail: "bad or stale signature" } });
    return { ok: false, error: "signature", status: 401 };
  }
  if (seq <= s.lastSeq) return { ok: false, error: "replay", status: 409 };
  const report = {
    processes: strs(body.processes), windows: strs(body.windows), modules: strs(body.modules),
    launchArgs: str(body.launchArgs, 1000), fileHashes: typeof body.fileHashes === "object" && body.fileHashes ? Object.fromEntries(Object.entries(body.fileHashes as Record<string, unknown>).slice(0, 20).map(([k, v]) => [k.slice(0, 200), str(v, 64)])) : {},
  };
  const violations = matchBlocklist(report, parseExpectedHashes(process.env.ACE_CS2_FILE_HASHES), await effectiveBlocklist());
  const tamper = strs(body.tamper, 10).map((d) => ({ kind: "tamper", detail: d }));
  const all = [...violations, ...tamper];
  const status = all.length ? "flagged" : "clean";
  await prisma.$transaction([
    prisma.anticheatSession.update({ where: { id: s.id }, data: { lastHeartbeatAt: new Date(), lastSeq: seq, cs2Running: body.cs2Running === true, status, clientVersion: str(body.clientVersion, 32) || s.clientVersion } }),
    ...(all.length ? [prisma.anticheatEvent.createMany({ data: all.map((v) => ({ userId: s.userId, sessionId: s.id, kind: v.kind, severity: v.kind === "tamper" ? "warn" : "high", detail: v.detail })) })] : []),
  ]);
  return { ok: true, status, violations: all.length };
}

/** Queue gate. Returns null when allowed. Always null unless ACE_REQUIRE_ANTICHEAT=true. */
export async function anticheatBlock(userId: string): Promise<"anticheat-required" | null> {
  if (!(await requireAnticheatNow())) return null;
  const s = await getPrisma().anticheatSession.findFirst({ where: { userId, revokedAt: null }, orderBy: { lastHeartbeatAt: { sort: "desc", nulls: "last" } } });
  return s && isFresh(s.lastHeartbeatAt) && s.status === "clean" ? null : "anticheat-required";
}

export async function anticheatState(userId: string) {
  const s = await getPrisma().anticheatSession.findFirst({ where: { userId, revokedAt: null }, orderBy: { createdAt: "desc" } });
  return { required: await requireAnticheatNow(), fresh: !!s && isFresh(s.lastHeartbeatAt), status: s?.status ?? "none" };
}

export async function loadAnticheatAdmin() {
  const prisma = getPrisma();
  const [events, sessions] = await Promise.all([
    prisma.anticheatEvent.findMany({ orderBy: { createdAt: "desc" }, take: 200, include: { user: { select: { displayName: true, steamId: true } } } }),
    prisma.anticheatSession.findMany({ where: { revokedAt: null, lastHeartbeatAt: { gte: new Date(Date.now() - 10 * 60_000) } }, orderBy: { lastHeartbeatAt: "desc" }, take: 100, include: { user: { select: { displayName: true, steamId: true } } } }),
  ]);
  return { events, sessions };
}
