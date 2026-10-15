/** Data-collection policy as code. Collection code must check this before reading any signal. */
export const SHIELD_PRIVACY = {
  hardwareIdentifiers: { enabled: false, reason: "Disabled until a documented, independently reviewed secure implementation exists." },
  matchDemos: { enabled: false, retentionDays: 30 },
  serverEventLogs: { enabled: false, retentionDays: 90 },
  behaviourFeatures: { enabled: false, retentionDays: 180 },
} as const;

export type ShieldDataKind = keyof typeof SHIELD_PRIVACY;

export function mayCollect(kind: ShieldDataKind): boolean {
  return SHIELD_PRIVACY[kind].enabled;
}
