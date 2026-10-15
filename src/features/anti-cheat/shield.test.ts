import { describe, expect, it } from "vitest";
import { mayCollect } from "./privacy";
import { isShieldLive, SHIELD_PHASES } from "./status";

describe("A.C.E Shield scaffold", () => {
  it("is not live", () => {
    expect(isShieldLive()).toBe(false);
    expect(SHIELD_PHASES.some((p) => p.status === "live")).toBe(false);
  });
  it("never collects hardware identifiers by default", () => {
    expect(mayCollect("hardwareIdentifiers")).toBe(false);
  });
});
