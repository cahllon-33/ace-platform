import { createHmac, timingSafeEqual } from "node:crypto";
import { getAppBaseUrl, getSessionSecret, getSteamApiKey } from "@/server/env";

const STEAM_ENDPOINT = "https://steamcommunity.com/openid/login";
const CLAIMED_ID = /^https?:\/\/steamcommunity\.com\/openid\/id\/(7656119[0-9]{10})$/;

export class SteamAuthError extends Error {
  readonly code: "steam-verify-failed" | "steam-unavailable";

  constructor(code: "steam-verify-failed" | "steam-unavailable") {
    super(code);
    this.name = "SteamAuthError";
    this.code = code;
  }
}

export type SteamProfile = {
  displayName: string;
  avatarUrl: string;
  /** Steam community profile URL from GetPlayerSummaries (vanity /id/<name>/ when set). "" when unknown. */
  profileUrl?: string;
  /** false when Steam returned nothing and displayName is only the placeholder. */
  found?: boolean;
};

export function steamPlaceholderName(steamId: string) {
  return `Player ${steamId.slice(-4)}`;
}

function acceptedProfileUrl(value: string | undefined): string {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && url.hostname.toLowerCase() === "steamcommunity.com" && /^\/(id|profiles)\/[^/]+\/?$/.test(url.pathname)) {
      return url.toString();
    }
  } catch {
    return "";
  }
  return "";
}

type SteamSummary = { steamid?: string; personaname?: string; avatarfull?: string; profileurl?: string };

/**
 * Batch GetPlayerSummaries (Steam allows 100 IDs per call). Only IDs Steam answered for are in the map.
 * Returns an empty map when STEAM_API_KEY is missing or Steam is unreachable.
 */
export async function lookupSteamPersonas(
  steamIds: string[],
  fetchImpl: typeof fetch = fetch,
  timeoutMs = 4000,
): Promise<Map<string, SteamProfile>> {
  const out = new Map<string, SteamProfile>();
  const key = getSteamApiKey();
  const ids = [...new Set(steamIds.filter((id) => /^\d{17}$/.test(id)))];
  if (!key || ids.length === 0) return out;
  for (let i = 0; i < ids.length; i += 100) {
    const url = new URL("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/");
    url.searchParams.set("key", key);
    url.searchParams.set("steamids", ids.slice(i, i + 100).join(","));
    try {
      const response = await fetchImpl(url, { method: "GET", signal: AbortSignal.timeout(timeoutMs) });
      if (!response.ok) continue;
      const data = (await response.json()) as { response?: { players?: SteamSummary[] } };
      for (const player of data.response?.players ?? []) {
        const name = player.personaname?.trim();
        if (!player.steamid || !name) continue;
        out.set(player.steamid, {
          displayName: name.slice(0, 64),
          avatarUrl: acceptedAvatar(player.avatarfull),
          profileUrl: acceptedProfileUrl(player.profileurl),
          found: true,
        });
      }
    } catch {
      // Steam unreachable: keep stored values.
    }
  }
  return out;
}

export type SteamReturn = "dashboard" | "squad";

export function signLoginState(issuedAt = Date.now(), destination: SteamReturn = "dashboard"): string {
  const payload = `${issuedAt}.${destination}`;
  const signature = createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

export function readLoginDestination(state: string, maxAgeMs = 15 * 60 * 1000): SteamReturn | null {
  const parts = state.split(".");
  let issuedAt = "";
  let destination: SteamReturn = "dashboard";
  let signature = "";
  let payload = "";
  if (parts.length === 2) {
    issuedAt = parts[0] ?? "";
    signature = parts[1] ?? "";
    payload = issuedAt;
  } else if (parts.length === 3 && (parts[1] === "dashboard" || parts[1] === "squad")) {
    issuedAt = parts[0] ?? "";
    destination = parts[1];
    signature = parts[2] ?? "";
    payload = `${issuedAt}.${destination}`;
  } else {
    return null;
  }
  if (!issuedAt || !signature) return null;
  const expected = createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  const issued = Number(issuedAt);
  if (!Number.isFinite(issued) || Date.now() - issued > maxAgeMs) return null;
  return destination;
}

export function verifyLoginState(state: string, maxAgeMs = 15 * 60 * 1000): boolean {
  return readLoginDestination(state, maxAgeMs) !== null;
}

export function buildSteamLoginUrl(destination: SteamReturn = "dashboard"): string {
  const base = getAppBaseUrl();
  const state = signLoginState(Date.now(), destination);
  const returnTo = `${base}/api/auth/steam/callback?state=${encodeURIComponent(state)}`;
  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup",
    "openid.return_to": returnTo,
    "openid.realm": base,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
  });
  return `${STEAM_ENDPOINT}?${params.toString()}`;
}

export function extractSteamId(claimedId: string | null): string | null {
  if (!claimedId) {
    return null;
  }
  const match = claimedId.trim().match(CLAIMED_ID);
  return match ? match[1] : null;
}

export function steamAssertionIsValid(body: string): boolean {
  return body.split(/\r?\n/).some((line) => line.trim() === "is_valid:true");
}

function acceptedAvatar(value: string | undefined): string {
  if (!value) return "";
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    const allowed = host === "steamcommunity.com" || host.endsWith(".steamstatic.com") || host === "steamstatic.com";
    if (url.protocol === "https:" && allowed) return url.toString();
  } catch {
    return "";
  }
  return "";
}

export async function verifySteamCallback(
  searchParams: URLSearchParams,
  fetchImpl: typeof fetch = fetch,
): Promise<{ steamId: string }> {
  const mode = searchParams.get("openid.mode");
  if (mode !== "id_res") {
    throw new SteamAuthError("steam-verify-failed");
  }
  if (!searchParams.get("openid.sig") || !searchParams.get("openid.signed")) {
    throw new SteamAuthError("steam-verify-failed");
  }

  const returnTo = searchParams.get("openid.return_to") ?? "";
  const callback = `${getAppBaseUrl()}/api/auth/steam/callback`;
  if (!returnTo.startsWith(`${callback}?`) && returnTo !== callback) {
    throw new SteamAuthError("steam-verify-failed");
  }

  const state = searchParams.get("state");
  if (!state || !verifyLoginState(state)) {
    throw new SteamAuthError("steam-verify-failed");
  }

  const claimedId = searchParams.get("openid.claimed_id");
  const identity = searchParams.get("openid.identity");
  if (!claimedId || claimedId !== identity) {
    throw new SteamAuthError("steam-verify-failed");
  }

  const steamId = extractSteamId(claimedId);
  if (!steamId) {
    throw new SteamAuthError("steam-verify-failed");
  }

  const verifyParams = new URLSearchParams(searchParams);
  verifyParams.set("openid.mode", "check_authentication");
  verifyParams.delete("state");

  let response: Response;
  try {
    response = await fetchImpl(STEAM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyParams.toString(),
    });
  } catch {
    throw new SteamAuthError("steam-unavailable");
  }

  if (!response.ok) {
    throw new SteamAuthError("steam-unavailable");
  }

  const body = await response.text();
  if (!steamAssertionIsValid(body)) {
    throw new SteamAuthError("steam-verify-failed");
  }

  return { steamId };
}

export async function lookupSteamPersona(
  steamId: string,
  fetchImpl: typeof fetch = fetch,
): Promise<SteamProfile> {
  const found = (await lookupSteamPersonas([steamId], fetchImpl)).get(steamId);
  return found ?? { displayName: steamPlaceholderName(steamId), avatarUrl: "", profileUrl: "", found: false };
}
