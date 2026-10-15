"use server";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { getSessionSecret, isProduction } from "@/server/env";
import { readSessionUser } from "@/server/session";

const GATE_COOKIE = "ace_admin_gate";
const GATE_HOURS = 12;

function gateToken() {
  return createHmac("sha256", getSessionSecret()).update("ace-admin-gate-v1").digest("base64url");
}

function sameSecret(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) {
    return false;
  }
  return timingSafeEqual(a, b);
}

export async function readAdminGate() {
  const username = process.env.ACE_ADMIN_USERNAME?.trim() ?? "";
  const password = process.env.ACE_ADMIN_PASSWORD ?? "";
  if (!username || !password) {
    return false;
  }
  const jar = await cookies();
  const token = jar.get(GATE_COOKIE)?.value;
  if (!token || token.length !== gateToken().length) {
    return false;
  }
  if (!sameSecret(token, gateToken())) {
    return false;
  }
  return adminRoleAllowed();
}

/**
 * Operator role: when ACE_ADMIN_STEAM_IDS is set (comma separated SteamID64 list), the admin surface also
 * requires a signed-in Steam session whose SteamID is on that list. Checked on the server for every read and action.
 */
async function adminRoleAllowed() {
  const allow = (process.env.ACE_ADMIN_STEAM_IDS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  if (allow.length === 0) return true;
  try {
    const user = await readSessionUser();
    return Boolean(user?.steamId && allow.includes(user.steamId));
  } catch {
    return false;
  }
}

export async function unlockAdminGate(username: string, password: string) {
  const expectedUser = process.env.ACE_ADMIN_USERNAME?.trim() ?? "";
  const expectedPass = process.env.ACE_ADMIN_PASSWORD ?? "";
  if (!expectedUser || !expectedPass) {
    return "unconfigured" as const;
  }
  if (typeof username !== "string" || typeof password !== "string" || username.length > 200 || password.length > 500) {
    return "denied" as const;
  }
  const userOk = sameSecret(username.trim(), expectedUser);
  const passOk = sameSecret(password, expectedPass);
  if (!userOk || !passOk) {
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
