import type { ShieldPhaseId, ShieldStatus } from "./types";

/** R72: real system facts the roadmap is computed from (never hardcoded statuses). */
export type ShieldFacts = {
  threatModelPublished: boolean;
  privacyRulesInCode: boolean;
  heartbeats24h: number;
  bridgeEvents7d: number;
  serverGateEnforced: boolean;
  demosCaptured: number;
  lockedConfigsVerified: boolean;
  fileHashesConfigured: boolean;
  reviewTooling: boolean;
  killTelemetry: number;
  trainedModels: number;
  reviewsClosed: number;
  userModeClient: boolean;
  autoBanRules: boolean;
  publicSecurityReview: boolean;
  requiredToQueue: boolean;
  tournamentsEnforced: boolean;
};

export type ShieldCheck = { id: string; label: string; done: boolean };
export type ComputedPhase = { id: ShieldPhaseId; status: ShieldStatus; checks: ShieldCheck[] };

const c = (id: string, label: string, done: boolean): ShieldCheck => ({ id, label, done });

export function phaseStatus(checks: ShieldCheck[]): ShieldStatus {
  const n = checks.filter((x) => x.done).length;
  return n === checks.length ? "live" : n > 0 ? "in-development" : "coming-soon";
}

export function computeShieldPhases(f: ShieldFacts): ComputedPhase[] {
  const raw: [ShieldPhaseId, ShieldCheck[]][] = [
    ["p1", [
      c("privacy", "Privacy rules enforced in code", f.privacyRulesInCode),
      c("heartbeat", "Signed client heartbeats flowing (24h)", f.heartbeats24h > 0),
      c("threat", "Public threat model document", f.threatModelPublished),
    ]],
    ["p2", [
      c("bridge", "Server plugin (AceBridge) reporting (7d)", f.bridgeEvents7d > 0),
      c("gate", "Server-side connect gate enforced", f.serverGateEnforced),
      c("demos", "Match demos captured", f.demosCaptured > 0),
      c("hashes", "CS2 file-integrity hashes configured", f.fileHashesConfigured),
      c("configs", "Locked server configs verified", f.lockedConfigsVerified),
    ]],
    ["p3", [
      c("tooling", "Review tooling (Overwatch, admin)", f.reviewTooling),
      c("telemetry", "Kill telemetry collected", f.killTelemetry > 0),
      c("reviews", "Reviews completed", f.reviewsClosed > 0),
      c("model", "Trained statistical model", f.trainedModels > 0),
    ]],
    ["p4", [
      c("client", "User-mode Shield client", f.userModeClient),
      c("autoban", "Automatic bans for known tools", f.autoBanRules),
      c("review", "Public security review", f.publicSecurityReview),
    ]],
    ["p5", [
      c("queue", "Shield required to queue", f.requiredToQueue),
      c("tournaments", "Shield required for tournaments", f.tournamentsEnforced),
    ]],
  ];
  return raw.map(([id, checks]) => ({ id, checks, status: phaseStatus(checks) }));
}
