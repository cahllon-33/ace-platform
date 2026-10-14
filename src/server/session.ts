import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import { touchPresence } from "@/server/presence";
import { getPrisma } from "@/server/db";
import { getSessionSecret, isProduction } from "@/server/env";

export const SESSION_COOKIE = "ace_session";
const SESSION_DAYS = 14;

export function hashToken(token: string): string {
  return createHash("sha256")
    .update(`${getSessionSecret()}:${token}`)
    .digest("hex");
}

export function createSessionToken(): string {
  return randomBytes(32).toString("base64url");
}

function cookieSettings(expiresAt: Date) {
  return {
    httpOnly: true as const,
    sameSite: "strict" as const,
    secure: isProduction(),
    path: "/",
    expires: expiresAt,
  };
}

export async function persistSession(userId: string): Promise<{ token: string; expiresAt: Date }> {
  const token = createSessionToken();
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await getPrisma().userSession.create({
    data: { userId, tokenHash, expiresAt },
  });
  return { token, expiresAt };
}

export function attachSessionCookie(
  response: NextResponse,
  token: string,
  expiresAt: Date,
): NextResponse {
  response.cookies.set(SESSION_COOKIE, token, cookieSettings(expiresAt));
  return response;
}

export function clearSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(SESSION_COOKIE, "", {
    ...cookieSettings(new Date(0)),
    maxAge: 0,
  });
  return response;
}

export async function readSessionUser() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }

  const record = await getPrisma().userSession.findUnique({
    where: { tokenHash: hashToken(token) },
    include: { user: true },
  });

  if (!record || record.revokedAt || record.expiresAt.getTime() <= Date.now()) {
    return null;
  }

  await touchPresence(record.id, record.lastSeenAt);
  return record.user;
}

export async function revokeTokenFromCookie(): Promise<string | undefined> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) {
    return undefined;
  }
  await getPrisma().userSession.updateMany({
    where: { tokenHash: hashToken(token), revokedAt: null },
    data: { revokedAt: new Date() },
  });
  return token;
}
