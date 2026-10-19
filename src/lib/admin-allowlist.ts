/**
 * Steam owner/admin allowlist (ACE_ADMIN_STEAM_IDS, comma-separated SteamID64).
 * Pure helpers: the SteamID passed in must come from the server-side session record, never from the client.
 */
const STEAM_ID64 = /^\d{17}$/;

export function parseAdminSteamIds(raw: string | undefined | null): string[] {
  return [...new Set((raw ?? "").split(",").map((v) => v.trim()).filter((v) => STEAM_ID64.test(v)))];
}

export function isAllowlistedSteamId(steamId: string | null | undefined, raw: string | undefined | null): boolean {
  if (!steamId || !STEAM_ID64.test(steamId)) return false;
  return parseAdminSteamIds(raw).includes(steamId);
}

/**
 * Admin gate decision.
 * - Allowlist unset/empty: unchanged behaviour, the username/password gate cookie alone decides.
 * - Allowlist set: an allowlisted Steam session opens the gate on its own; the username/password
 *   gate cookie stays a working backup.
 */
export function adminGateDecision(input: {
  passwordGateValid: boolean;
  sessionSteamId: string | null | undefined;
  allowlistRaw: string | undefined | null;
}): { open: boolean; via: "steam" | "password" | null } {
  if (parseAdminSteamIds(input.allowlistRaw).length > 0 && isAllowlistedSteamId(input.sessionSteamId, input.allowlistRaw)) {
    return { open: true, via: "steam" };
  }
  if (input.passwordGateValid) return { open: true, via: "password" };
  return { open: false, via: null };
}
