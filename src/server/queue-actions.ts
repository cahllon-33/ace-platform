"use server";

import { readIsSteamOwner } from "@/server/admin-gate";
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
  return testLobbiesAction();
}
