import "server-only";
import { computeShieldPhases, type ComputedPhase, type ShieldFacts } from "@/features/anti-cheat/roadmap";
import { mayCollect } from "@/features/anti-cheat/privacy";
import { parseExpectedHashes } from "@/lib/anticheat";
import { requireAnticheatNow } from "@/server/anticheat";
import { getPrisma } from "@/server/db";

/** R72: reads live system state for the Shield roadmap. Anything not provable from data/config stays false. */
export async function readShieldFacts(): Promise<ShieldFacts> {
  const db = getPrisma();
  const now = Date.now();
  const safe = <T,>(p: Promise<T>, d: T) => p.catch(() => d);
  const [hb, bridge, demos, kills, models, reviews, cases, required] = await Promise.all([
    safe(db.anticheatSession.count({ where: { lastHeartbeatAt: { gte: new Date(now - 864e5) } } }), 0),
    safe(db.cs2PluginEvent.count({ where: { receivedAt: { gte: new Date(now - 7 * 864e5) } } }), 0),
    safe(db.overwatchCase.count({ where: { NOT: { demoUrl: "" } } }), 0),
    safe(db.cs2KillTelemetry.count(), 0),
    safe(db.anticheatModel.count(), 0),
    safe(db.anticheatReview.count({ where: { NOT: { status: "open" } } }), 0),
    safe(db.overwatchCase.count({ where: { NOT: { status: "open" } } }), 0),
    safe(requireAnticheatNow(), false),
  ]);
  return {
    threatModelPublished: false,
    privacyRulesInCode: mayCollect("hardwareIdentifiers") === false,
    heartbeats24h: hb,
    bridgeEvents7d: bridge,
    serverGateEnforced: required && bridge > 0,
    demosCaptured: demos,
    lockedConfigsVerified: false,
    fileHashesConfigured: Object.keys(parseExpectedHashes(process.env.ACE_CS2_FILE_HASHES) ?? {}).length > 0,
    reviewTooling: true,
    killTelemetry: kills,
    trainedModels: models,
    reviewsClosed: reviews + cases,
    userModeClient: hb > 0,
    autoBanRules: true,
    publicSecurityReview: false,
    requiredToQueue: required,
    tournamentsEnforced: false,
  };
}

export async function readShieldRoadmap(): Promise<{ phases: ComputedPhase[]; at: string }> {
  return { phases: computeShieldPhases(await readShieldFacts()), at: new Date().toISOString() };
}
