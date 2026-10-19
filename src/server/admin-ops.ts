"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { cleanReason, describeRp, planOverride, planReset, toCsv, type OverrideArt, type OverrideTarget } from "@/lib/rank-override";
import { rankProgress } from "@/lib/rank-progress";
import { readAdminActor, readAdminGate } from "@/server/admin-gate";
import { canUsePremiumRankArt } from "@/server/rank-art";

export type AuditEntry = { id: string; actor: string; action: string; targetUserId: string | null; targetName: string | null; oldValue: string; newValue: string; reason: string; at: string };
export type PlayerOps = { note: string; overrideActive: boolean; baseRp: number | null; baseLabel: string | null; rp: number; art: "auto" | "standard" | "premium"; premiumAllowed: boolean; audit: AuditEntry[] };

const SITE_PATHS = ["/admin/dashboard", "/leaderboard", "/dashboard", "/"];
function revalidateSite(steamId?: string | null) {
  for (const p of SITE_PATHS) revalidatePath(p);
  if (steamId) revalidatePath(`/player/${steamId}`);
}

async function gated(userId: unknown) {
  if (!(await readAdminGate())) return null;
  if (typeof userId !== "string" || !userId.trim() || userId.length > 64) return null;
  return prisma.user.findUnique({ where: { id: userId } });
}

function artLabel(art: string | null) {
  return art === "PREMIUM" ? "premium" : art === "STANDARD" ? "standard" : "auto";
}

async function audit(action: string, targetUserId: string | null, oldValue: string, newValue: string, reason: string) {
  await prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action, targetUserId, oldValue, newValue, reason } });
}

function toEntries(rows: Array<{ id: string; actor: string; action: string; targetUserId: string | null; oldValue: string; newValue: string; reason: string; createdAt: Date }>, names: Map<string, string>): AuditEntry[] {
  return rows.map((r) => ({ id: r.id, actor: r.actor, action: r.action, targetUserId: r.targetUserId, targetName: r.targetUserId ? names.get(r.targetUserId) ?? null : null, oldValue: r.oldValue, newValue: r.newValue, reason: r.reason, at: r.createdAt.toISOString() }));
}

export async function loadPlayerOps(userId: string): Promise<PlayerOps | null> {
  const user = await gated(userId);
  if (!user) return null;
  const rows = await prisma.adminAuditLog.findMany({ where: { targetUserId: user.id }, orderBy: { createdAt: "desc" }, take: 20 });
  return {
    note: user.adminNote,
    overrideActive: user.rankOverrideBaseRp != null,
    baseRp: user.rankOverrideBaseRp,
    baseLabel: user.rankOverrideBaseRp != null ? describeRp(user.rankOverrideBaseRp) : null,
    rp: user.competitiveRating,
    art: artLabel(user.rankArt),
    premiumAllowed: canUsePremiumRankArt(user.subscriptionTier),
    audit: toEntries(rows, new Map([[user.id, user.displayName]])),
  };
}

export async function loadAuditLog(limit = 50): Promise<AuditEntry[] | null> {
  if (!(await readAdminGate())) return null;
  const rows = await prisma.adminAuditLog.findMany({ orderBy: { createdAt: "desc" }, take: Math.min(200, Math.max(1, limit)) });
  const ids = [...new Set(rows.map((r) => r.targetUserId).filter((v): v is string => Boolean(v)))];
  const users = ids.length ? await prisma.user.findMany({ where: { id: { in: ids } }, select: { id: true, displayName: true } }) : [];
  return toEntries(rows, new Map(users.map((u) => [u.id, u.displayName])));
}

export async function applyRankOverride(userId: string, target: OverrideTarget | null, art: OverrideArt, reasonRaw: string) {
  const user = await gated(userId);
  if (!user) return { ok: false as const, error: "denied" };
  const reason = cleanReason(reasonRaw);
  let plan: ReturnType<typeof planOverride> | null = null;
  try {
    plan = target ? planOverride(user, target) : null;
  } catch {
    return { ok: false as const, error: "invalid" };
  }
  const nextArt = art === "keep" ? user.rankArt : art === "auto" ? null : art === "premium" ? "PREMIUM" : "STANDARD";
  if (nextArt === "PREMIUM" && !canUsePremiumRankArt(user.subscriptionTier)) return { ok: false as const, error: "premium_only" };
  if (!plan && nextArt === user.rankArt) return { ok: false as const, error: "nochange" };
  const oldValue = `${describeRp(user.competitiveRating)} · art ${artLabel(user.rankArt)}`;
  const newRp = plan ? plan.rp : user.competitiveRating;
  const newValue = `${describeRp(newRp)} · art ${artLabel(nextArt)}`;
  await prisma.$transaction([
    prisma.user.update({
      where: { id: user.id },
      data: {
        rankArt: nextArt,
        ...(plan ? { competitiveRating: plan.rp, rankLevel: plan.rankLevel, rankOverrideBaseRp: plan.baseRp, rankOverrideAt: new Date() } : {}),
      },
    }),
    prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "rank.override", targetUserId: user.id, oldValue, newValue, reason } }),
  ]);
  revalidateSite(user.steamId);
  return { ok: true as const, label: newValue };
}

export async function resetRankOverride(userId: string, reasonRaw: string) {
  const user = await gated(userId);
  if (!user) return { ok: false as const, error: "denied" };
  const plan = planReset(user);
  if (!plan) return { ok: false as const, error: "nochange" };
  await prisma.$transaction([
    prisma.user.update({ where: { id: user.id }, data: { competitiveRating: plan.rp, rankLevel: plan.rankLevel, rankOverrideBaseRp: null, rankOverrideAt: null } }),
    prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "rank.reset", targetUserId: user.id, oldValue: describeRp(user.competitiveRating), newValue: describeRp(plan.rp), reason: cleanReason(reasonRaw) } }),
  ]);
  revalidateSite(user.steamId);
  return { ok: true as const, label: describeRp(plan.rp) };
}

export async function saveAdminNote(userId: string, noteRaw: string) {
  const user = await gated(userId);
  if (!user) return { ok: false as const };
  const note = typeof noteRaw === "string" ? noteRaw.slice(0, 2000) : "";
  if (note === user.adminNote) return { ok: true as const };
  await prisma.user.update({ where: { id: user.id }, data: { adminNote: note } });
  await audit("note.update", user.id, user.adminNote ? `${user.adminNote.length} chars` : "empty", note ? `${note.length} chars` : "empty", "");
  return { ok: true as const };
}

export async function setBanWithReason(userId: string, banned: boolean, reasonRaw: string) {
  const user = await gated(userId);
  if (!user) return { ok: false as const };
  const reason = cleanReason(reasonRaw);
  if (banned) {
    await prisma.$transaction([
      prisma.user.update({ where: { id: user.id }, data: { accountStatus: "BANNED" } }),
      prisma.banRecord.create({ data: { userId: user.id, status: "BANNED", reason: reason || "Operator ban from the admin desk" } }),
      prisma.userSession.updateMany({ where: { userId: user.id, revokedAt: null }, data: { revokedAt: new Date() } }),
    ]);
  } else {
    await prisma.$transaction([
      prisma.user.update({ where: { id: user.id }, data: { accountStatus: "ACTIVE" } }),
      prisma.banRecord.updateMany({ where: { userId: user.id, status: "BANNED", expiresAt: null }, data: { expiresAt: new Date() } }),
    ]);
  }
  await audit(banned ? "account.ban" : "account.unban", user.id, user.accountStatus, banned ? "BANNED" : "ACTIVE", reason);
  revalidateSite(user.steamId);
  return { ok: true as const };
}

/** Admin CSV export of the real player table (no secrets, no session data). */
export async function exportPlayersCsv(): Promise<string | null> {
  if (!(await readAdminGate())) return null;
  const users = await prisma.user.findMany({ orderBy: { competitiveRating: "desc" }, take: 10000 });
  const rows = users.map((u) => {
    const p = rankProgress(u.competitiveRating);
    return { id: u.id, steamId: u.steamId ?? "", name: u.displayName, status: u.accountStatus, plan: u.subscriptionTier, rp: u.competitiveRating, rank: p.tier.name, division: p.division, wins: u.wins, losses: u.losses, override: u.rankOverrideBaseRp != null ? "yes" : "no", joined: u.createdAt.toISOString() };
  });
  await audit("export.csv", null, "", `${rows.length} rows`, "");
  return toCsv(rows, ["id", "steamId", "name", "status", "plan", "rp", "rank", "division", "wins", "losses", "override", "joined"]);
}
