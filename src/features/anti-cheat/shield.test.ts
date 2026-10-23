import { describe, expect, it } from "vitest";
import { mayCollect } from "./privacy";
import { computeShieldPhases, phaseStatus, type ShieldFacts } from "./roadmap";

const none: ShieldFacts = { threatModelPublished: false, privacyRulesInCode: false, heartbeats24h: 0, bridgeEvents7d: 0, serverGateEnforced: false, demosCaptured: 0, lockedConfigsVerified: false, fileHashesConfigured: false, reviewTooling: false, killTelemetry: 0, trainedModels: 0, reviewsClosed: 0, userModeClient: false, autoBanRules: false, publicSecurityReview: false, requiredToQueue: false, tournamentsEnforced: false };

describe("A.C.E Shield roadmap (computed)", () => {
  it("nothing proven means nothing active", () => {
    expect(computeShieldPhases(none).every((p) => p.status === "coming-soon")).toBe(true);
  });
  it("partial evidence is in development, never live", () => {
    const p = computeShieldPhases({ ...none, heartbeats24h: 5, privacyRulesInCode: true });
    expect(p[0].status).toBe("in-development");
    expect(phaseStatus([{ id: "a", label: "", done: true }])).toBe("live");
  });
  it("never collects hardware identifiers by default", () => {
    expect(mayCollect("hardwareIdentifiers")).toBe(false);
  });
});
