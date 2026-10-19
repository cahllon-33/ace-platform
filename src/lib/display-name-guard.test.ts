import { describe, expect, it } from "vitest";
import { guardDisplayName, isRestrictedDisplayName, normalizeDisplayName } from "./display-name-guard";

const FOUNDER = "76561190000000001";
const OTHER = "76561190000004321";
const ALLOW = FOUNDER;

describe("display-name guard", () => {
  it("normalizes", () => {
    expect(normalizeDisplayName(` N.e-X_s'u"s+ \``)).toBe("nexsus");
  });
  it.each(["NEXsus", "nexsus", "N E X S U S", "n.e.x.s.u.s", "xX_NeXsUs_Xx", "the-nexsus'clan", "Admin", "ACE_ADMIN", "ace.official", "Support", "MODERATOR", "administrator", "Official"])(
    "restricts %s",
    (n) => {
      expect(isRestrictedDisplayName(n)).toBe(true);
      expect(guardDisplayName(n, OTHER, ALLOW)).toBe("Player 4321");
    },
  );
  it("allows normal names and reserved words inside longer names", () => {
    for (const n of ["shroudfan", "Nexus", "admiral", "supportive", "Player One"]) expect(guardDisplayName(n, OTHER, ALLOW)).toBe(n);
  });
  it("exempts the founder only by SteamID from the allowlist", () => {
    expect(guardDisplayName("NEXsus", FOUNDER, ALLOW)).toBe("NEXsus");
    expect(guardDisplayName("NEXsus", FOUNDER, "")).toBe("Player 0001");
    expect(guardDisplayName("NEXsus", null, ALLOW)).toMatch(/^Player \d{4}$/);
  });
});
