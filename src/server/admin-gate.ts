"use server";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";
import { getSessionSecret, isProduction } from "@/server/env";
import { readSessionUser } from "@/server/session";
import { adminGateDecision, isAllowlistedSteamId, parseAdminSteamIds } from "@/lib/admin-allowlist";

const GATE_COOKIE = "ace_admin_gate";
const GATE_HOURS = 12;

/** Bound to the configured credentials: rotating ACE_ADMIN_USERNAME/PASSWORD invalidates every gate cookie. */
function gateToken() {
  const user = process.env.ACE_ADMIN_USERNAME?.trim() ?? "";
  const pass = process.env.ACE_ADMIN_PASSWORD ?? "";
  return createHmac("sha256", getSessionSecret()).update(`ace-admin-gate-v2\u0000${user}\u0000${pass}`).digest("base64url");
}

/** Login throttle: at most 5 failed attempts per client per 15 minutes (per server instance). */
const FAIL_WINDOW_MS = 15 * 60 * 1000;
const FAIL_LIMIT = 5;
const failures = new Map<string, number[]>();

async function adminGateClientKey() {
  const h = await headers();
  return (h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "local").slice(0, 64);
}

function adminGateThrottled(key: string, now = Date.now()) {
  const recent = (failures.get(key) ?? []).filter((t) => now - t < FAIL_WINDOW_MS);
  failures.set(key, recent);
  return recent.length >= FAIL_LIMIT;
}

function recordAdminGateFailure(key: string, now = Date.now()) {
  const recent = (failures.get(key) ?? []).filter((t) => now - t < FAIL_WINDOW_MS);
  recent.push(now);
  failures.set(key, recent);
  if (failures.size > 5000) failures.delete(failures.keys().next().value as string);
}

function sameSecret(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) {
    return false;
  }
  return timingSafeEqual(a, b);
}

async function passwordGateValid() {
  const username = process.env.ACE_ADMIN_USERNAME?.trim() ?? "";
  const password = process.env.ACE_ADMIN_PASSWORD ?? "";
  if (!username || !password) return false;
  const jar = await cookies();
  const token = jar.get(GATE_COOKIE)?.value;
  if (!token || token.length !== gateToken().length) return false;
  return sameSecret(token, gateToken());
}

/** SteamID of the signed-in user, read from the server-side session record (never from the request body). */
async function sessionSteamId(): Promise<string | null> {
  try {
    const user = await readSessionUser();
    return user?.steamId ?? null;
  } catch {
    return null;
  }
}

/**
 * Admin gate, checked on the server for every admin read and action.
 * ACE_ADMIN_STEAM_IDS set: an allowlisted Steam session opens the gate directly; the
 * username/password gate cookie remains a backup. Unset: username/password gate only (unchanged).
 */
export async function readAdminGate() {
  const allowlistRaw = process.env.ACE_ADMIN_STEAM_IDS;
  const steamId = parseAdminSteamIds(allowlistRaw).length > 0 ? await sessionSteamId() : null;
  return adminGateDecision({ passwordGateValid: await passwordGateValid(), sessionSteamId: steamId, allowlistRaw }).open;
}

/** True when the signed-in Steam session is on ACE_ADMIN_STEAM_IDS (used for the nav Admin link). */
export async function readIsSteamOwner() {
  const allowlistRaw = process.env.ACE_ADMIN_STEAM_IDS;
  if (parseAdminSteamIds(allowlistRaw).length === 0) return false;
  return isAllowlistedSteamId(await sessionSteamId(), allowlistRaw);
}

export async function unlockAdminGate(username: string, password: string) {
  const expectedUser = process.env.ACE_ADMIN_USERNAME?.trim() ?? "";
  const expectedPass = process.env.ACE_ADMIN_PASSWORD ?? "";
  if (!expectedUser || !expectedPass) {
    return "unconfigured" as const;
  }
  const clientKey = await adminGateClientKey();
  if (adminGateThrottled(clientKey)) {
    return "denied" as const;
  }
  if (typeof username !== "string" || typeof password !== "string" || username.length > 200 || password.length > 500) {
    recordAdminGateFailure(clientKey);
    return "denied" as const;
  }
  const userOk = sameSecret(username.trim(), expectedUser);
  const passOk = sameSecret(password, expectedPass);
  if (!userOk || !passOk) {
    recordAdminGateFailure(clientKey);
    return "denied" as const;
  }
  const jar = await cookies();
  jar.set(GATE_COOKIE, gateToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: isProduction(),
    path: "/admin",
    maxAge: GATE_HOURS * 60 * 60,
  });
  return "ok" as const;
}
