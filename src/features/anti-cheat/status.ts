import type { ShieldPhase, ShieldPillar, ShieldStatus } from "./types";

/** Current deployment phase shown site-wide. */
export const SHIELD_PHASE_STATUS: ShieldStatus = "in-development";

export const SHIELD_PILLARS: ShieldPillar[] = [
  { id: "client", status: "designed" },
  { id: "server", status: "in-development" },
  { id: "match", status: "in-development" },
  { id: "behaviour", status: "designed" },
  { id: "identity", status: "in-development" },
];

export const SHIELD_PHASES: ShieldPhase[] = [
  { id: "p1", status: "designed", pillars: ["client", "server", "match", "behaviour", "identity"] },
  { id: "p2", status: "in-development", pillars: ["server", "match"] },
  { id: "p3", status: "coming-soon", pillars: ["behaviour"] },
  { id: "p4", status: "coming-soon", pillars: ["client"] },
  { id: "p5", status: "coming-soon", pillars: ["client", "server", "match", "behaviour", "identity"] },
];

export function isShieldLive(): boolean {
  return SHIELD_PHASES.every((phase) => phase.status === "live");
}
