"use server";

import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import * as qa from "@/server/queue-admin";
import { readSessionUser } from "@/server/session";
import * as q from "@/server/queue-engine";
import type { QueueView } from "@/server/queue-engine";

export type QueueResult = { ok: true; view: QueueView } | { ok: false; error: string; view: QueueView | null };

async function viewFor(userId: string | null) {
  await q.tick().catch(() => undefined);
  return q.readQueueView(userId);
}

/** Polled by the Play page (every ~2 s). Advances timers, then returns the caller's view. */
export async function pollQueue(): Promise<QueueResult> {
  try {
    const user = await readSessionUser();
    return { ok: true, view: await viewFor(user?.id ?? null) };
  } catch {
    return { ok: false, error: "unavailable", view: null };
  }
}

async function withUser(fn: (userId: string) => Promise<{ ok: boolean; error?: string }>): Promise<QueueResult> {
  const user = await readSessionUser();
  if (!user) return { ok: false, error: "sign-in", view: null };
  try {
    const r = await fn(user.id);
    const view = await viewFor(user.id);
    return r.ok ? { ok: true, view } : { ok: false, error: r.error ?? "failed", view };
  } catch {
    return { ok: false, error: "unavailable", view: null };
  }
}

export const joinQueueAction = async () => withUser((id) => q.joinQueue(id));
export const leaveQueueAction = async () => withUser((id) => q.leaveQueue(id));
export const readyAction = async (accept: boolean) => withUser((id) => q.answerReady(id, accept === true));
export const banMapAction = async (map: string) => withUser((id) => q.banMap(id, String(map)));

/* ---------- owner-only admin test mode ---------- */

export type TestModeResult = { ok: true; lobbies: q.LobbyView[] } | { ok: false; error: string };

async function owner() {
  if (!(await readIsSteamOwner())) return null;
  return readSessionUser();
}

export async function testLobbiesAction(): Promise<TestModeResult> {
  if (!(await owner())) return { ok: false, error: "owner-only" };
  await q.tick().catch(() => undefined);
  return { ok: true, lobbies: await q.activeLobbies() };
}

export async function createTestLobbyAction(input: { flow: "full" | "direct"; map: string; extraSteamIds: string }): Promise<TestModeResult> {
  const me = await owner();
  if (!me) return { ok: false, error: "owner-only" };
  const ids = String(input.extraSteamIds ?? "").split(/[\s,]+/).filter((s) => /^7656119\d{10}$/.test(s));
  const r = await q.createTestLobby(me.id, { flow: input.flow === "direct" ? "direct" : "full", map: String(input.map), extraSteamIds: ids });
  if (!r.ok) return r;
  await qa.audit(await readAdminActor(), "queue.test.create", `${input.flow} ${input.map} +${ids.length}`);
  return testLobbiesAction();
}

export async function testBotsAction(count: number): Promise<TestModeResult> {
  if (!(await owner())) return { ok: false, error: "owner-only" };
  const r = await q.addTestBots(Number(count));
  return r.ok ? testLobbiesAction() : r;
}

export async function cancelLobbyAction(lobbyId: string): Promise<TestModeResult> {
  if (!(await owner())) return { ok: false, error: "owner-only" };
  await q.cancelLobby(String(lobbyId));
  await qa.audit(await readAdminActor(), "queue.lobby.cancel", String(lobbyId));
  return testLobbiesAction();
}

/* ---------- R48b owner tools ---------- */

type OwnerR<T> = { ok: true; data: T } | { ok: false; error: string };
async function asOwner<T>(fn: () => Promise<T>, audited?: [string, string]): Promise<OwnerR<T>> {
  if (!(await readIsSteamOwner())) return { ok: false, error: "owner-only" };
  try {
    const data = await fn();
    const r = data as unknown as { ok?: boolean; error?: string };
    if (r && typeof r === "object" && r.ok === false) return { ok: false, error: r.error ?? "failed" };
    if (audited) await qa.audit(await readAdminActor(), audited[0], audited[1]);
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "failed" };
  }
}

export async function opsSnapshotAction() {
  return asOwner(async () => {
    await q.tick().catch(() => undefined);
    const [live, queue, bans, health, history, audit] = await Promise.all([
      qa.liveMatches().catch(() => []), qa.queueList(), qa.listBans(), qa.healthView(), qa.matchHistory(), qa.auditLog(),
    ]);
    return { live, queue, bans, health, history, audit };
  });
}
export const cancelMatchAction = async (lobbyId: string) => asOwner(() => qa.cancelMatch(String(lobbyId)), ["queue.match.cancel", String(lobbyId)]);
export const forceEndAction = async (lobbyId: string) => asOwner(() => qa.forceEnd(String(lobbyId)), ["queue.match.force-end", String(lobbyId)]);
export const replacePlayerAction = async (lobbyId: string, outUserId: string, inSteamId: string) =>
  asOwner(() => qa.replacePlayer(String(lobbyId), String(outUserId), String(inSteamId)), ["queue.match.replace", `${outUserId} -> ${inSteamId}`]);
export const banPlayerAction = async (steamId: string, reason: string, minutes: number | null) =>
  asOwner(async () => qa.banPlayer(String(steamId), String(reason), minutes == null ? null : Number(minutes), await readAdminActor()), ["queue.ban", `${steamId} ${minutes ?? "perm"}m: ${reason}`]);
export const revokeBanAction = async (id: string) => asOwner(() => qa.revokeBan(String(id)), ["queue.ban.revoke", String(id)]);
export const kickQueueAction = async (userId: string) => asOwner(() => qa.kickFromQueue(String(userId)), ["queue.kick", String(userId)]);
export const kickServerAction = async (name: string) => asOwner(() => qa.kickFromServer(String(name)), ["server.kick", String(name)]);
export const saveHealthAction = async (autoRestart: boolean, hour: string) => asOwner(() => qa.saveHealthSettings(!!autoRestart, String(hour ?? "")), ["server.health.settings", `auto=${!!autoRestart} hour=${hour}`]);
