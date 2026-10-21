import { describe, expect, it } from "vitest";
import { isVerified, verifyTier } from "@/lib/verification";

describe("verified mark", () => {
  const ok = { steamId: "76561198000000001", accountStatus: "ACTIVE", verifiedAt: new Date() };
  it("needs Steam + good standing + operator review", () => {
    expect(isVerified(ok)).toBe(true);
    expect(isVerified({ ...ok, steamId: null })).toBe(false);
    expect(isVerified({ ...ok, accountStatus: "BANNED" })).toBe(false);
    expect(isVerified({ ...ok, accountStatus: "SUSPENDED" })).toBe(false);
    expect(isVerified({ ...ok, verifiedAt: null })).toBe(false);
  });
  it("finish follows the plan only", () => {
    expect(verifyTier("FREE")).toBe("free");
    expect(verifyTier("PLUS")).toBe("plus");
    expect(verifyTier("PREMIUM")).toBe("premium");
  });
});
