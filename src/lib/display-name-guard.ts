import { isAllowlistedSteamId } from "@/lib/admin-allowlist";

/**
 * Public display-name guard (R38-K).
 * A persona that impersonates the founder's brand handle or a staff role is shown as "Player NNNN".
 * The founder is identified ONLY by SteamID from ACE_ADMIN_STEAM_IDS — his name is never hardcoded.
 */
const PROTECTED_HANDLE = "nexsus";
const RESERVED = ["admin", "administrator", "moderator", "support", "official", "aceadmin", "aceofficial"];

/** lowercase and strip + ` ' " _ . - and whitespace */
export function normalizeDisplayName(name: string): string {
  return name.toLowerCase().replace(/[+`'"_.\-\s]/g, "");
}

export function isRestrictedDisplayName(name: string): boolean {
  const n = normalizeDisplayName(name);
  if (!n) return false;
  if (n.includes(PROTECTED_HANDLE)) return true;
  return RESERVED.includes(n);
}

function playerNumber(steamId: string | null | undefined, name: string): string {
  const digits = (steamId ?? "").replace(/\D/g, "");
  if (digits.length >= 4) return digits.slice(-4);
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return String(h % 10000).padStart(4, "0");
}

export function guardDisplayName(
  name: string | null | undefined,
  steamId: string | null | undefined,
  allowlistRaw: string | undefined | null = process.env.ACE_ADMIN_STEAM_IDS,
): string {
  const value = (name ?? "").trim();
  if (!value) return value;
  if (isAllowlistedSteamId(steamId, allowlistRaw)) return value;
  return isRestrictedDisplayName(value) ? `Player ${playerNumber(steamId, value)}` : value;
}
