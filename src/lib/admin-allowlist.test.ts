import { describe, expect, it } from "vitest";
import { adminGateDecision, isAllowlistedSteamId, parseAdminSteamIds } from "@/lib/admin-allowlist";

const OWNER = "76561199017997899";
const OTHER = "76561198000000001";

describe("ACE_ADMIN_STEAM_IDS gate", () => {
  it("allowlisted Steam session opens the gate without the password cookie", () => {
    expect(adminGateDecision({ passwordGateValid: false, sessionSteamId: OWNER, allowlistRaw: ` ${OWNER} , ${OTHER}` })).toEqual({ open: true, via: "steam" });
  });
  it("non-listed Steam session stays locked, but the password gate still works as backup", () => {
    expect(adminGateDecision({ passwordGateValid: false, sessionSteamId: OTHER, allowlistRaw: OWNER }).open).toBe(false);
    expect(adminGateDecision({ passwordGateValid: false, sessionSteamId: null, allowlistRaw: OWNER }).open).toBe(false);
    expect(adminGateDecision({ passwordGateValid: true, sessionSteamId: OTHER, allowlistRaw: OWNER })).toEqual({ open: true, via: "password" });
  });
  it("unset or empty allowlist: unchanged, only the password gate decides", () => {
    for (const raw of [undefined, null, "", " , "]) {
      expect(adminGateDecision({ passwordGateValid: false, sessionSteamId: OWNER, allowlistRaw: raw }).open).toBe(false);
      expect(adminGateDecision({ passwordGateValid: true, sessionSteamId: null, allowlistRaw: raw }).open).toBe(true);
    }
  });
  it("rejects malformed ids and partial matches", () => {
    expect(parseAdminSteamIds(`${OWNER},abc,123,${OWNER}`)).toEqual([OWNER]);
    expect(isAllowlistedSteamId(OWNER.slice(0, 16), OWNER)).toBe(false);
    expect(isAllowlistedSteamId(`${OWNER} `, OWNER)).toBe(false);
    expect(isAllowlistedSteamId(undefined, OWNER)).toBe(false);
  });
});
