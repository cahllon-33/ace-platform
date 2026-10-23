/** R53 player privacy rules (pure; the server enforces them on every read). */
export const VISIBILITY = ["public", "friends", "private"] as const;
export const DM_POLICY = ["friends", "everyone"] as const;
export type Visibility = (typeof VISIBILITY)[number];
export type DmPolicy = (typeof DM_POLICY)[number];
export type Privacy = { profileVisibility: Visibility; inventoryHidden: boolean; showOnline: boolean; dmPolicy: DmPolicy };

export const asVisibility = (v: unknown): Visibility => (VISIBILITY as readonly unknown[]).includes(v) ? (v as Visibility) : "public";
export const asDmPolicy = (v: unknown): DmPolicy => (DM_POLICY as readonly unknown[]).includes(v) ? (v as DmPolicy) : "friends";

/** Can `viewer` see the full profile (stats, history, achievements)? The owner always can. */
export function canViewProfile(vis: Visibility, o: { self: boolean; friends: boolean; owner?: boolean }) {
  if (o.self || o.owner) return true;
  return vis === "public" || (vis === "friends" && o.friends);
}
export function canDm(policy: DmPolicy, o: { friends: boolean; blocked?: boolean }) {
  if (o.blocked) return false;
  return policy === "everyone" || o.friends;
}
/** Online flag shown to others: hidden players always read as offline. */
export const visibleOnline = (online: boolean, showOnline: boolean) => online && showOnline;
