"use server";

import { revalidatePath } from "next/cache";
import type { AccountStatus, SubscriptionTier, User } from "@prisma/client";
import { prisma } from "@/lib/db";
import type { AdminPlayerRow, AdminSecurity, AdminTier } from "@/lib/admin-command";
import { readAdminGate } from "@/server/admin-gate";
import { readPresence, type ConnectedPlayer } from "@/server/presence";

export type AdminLiveStats = {
  enrollment: number;
  online: number;
  servers: number;
  grossCents: number;
  unavailable: boolean;
  /** True when the page substituted the in-memory staging profiles. */
  staging: boolean;
  /** Distinct Steam accounts that loaded the site in the last 3 minutes. */
  connected: ConnectedPlayer[];
  presence: "ok" | "down" | "migration";
};

const EMPTY_STATS: AdminLiveStats = {
  enrollment: 0,
  online: 0,
  servers: 0,
  grossCents: 0,
  unavailable: true,
  staging: false,
  connected: [],
  presence: "down",
};

function tierLabel(tier: SubscriptionTier): AdminTier {
  if (tier === "PREMIUM") return "Premium";
  if (tier === "PLUS") return "Plus";
  return "Free";
}

function securityLabel(status: AccountStatus): AdminSecurity {
  if (status === "SUSPENDED" || status === "UNDER_REVIEW") return "Suspended";
  if (status === "ACTIVE") return "Active";
  return "Banned";
}

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const raw = `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? parts[0]?.[1] ?? ""}`;
  return (raw || "AC").toUpperCase().slice(0, 2);
}

function userToAdminRow(user: User): AdminPlayerRow {
  const name = user.username || user.displayName;
  return {
    id: user.id,
    initials: initialsFor(name),
    username: name,
    email: user.email ?? "—",
    steamId: user.steamId ?? "—",
    rank: user.rankLevel,
    rating: user.competitiveRating,
    tier: tierLabel(user.subscriptionTier),
    security: securityLabel(user.accountStatus),
    machineHash: "—",
    registeredOn: user.createdAt.toISOString().slice(0, 10),
    region: "—",
    latencyMs: 0,
  };
}

export type AdminMatchBrief = {
  id: string;
  mapName: string;
  state: string;
  format: string;
  score: string;
};

export type AdminReport = {
  id: string;
  reason: string;
  createdAt: string;
  reporter: string;
  suspect: string;
  mapName: string;
  state: string;
  score: string;
};

export type AdminDeskData = {
  players: AdminPlayerRow[];
  stats: AdminLiveStats;
  matches: AdminMatchBrief[];
  reports: AdminReport[];
};

const EMPTY_DESK: AdminDeskData = {
  players: [],
  stats: EMPTY_STATS,
  matches: [],
  reports: [],
};

export async function loadAdminDirectory(): Promise<AdminDeskData> {
  // Defense in depth: this is a server function, so re-check the operator gate here, not only in the page.
  if (!(await readAdminGate())) return EMPTY_DESK;
  try {
    const [users, enrollment, presence, liveMatches, disputes] = await Promise.all([
      prisma.user.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.user.count(),
      readPresence(),
      prisma.match.findMany({
        where: { state: "IN_PROGRESS" },
        orderBy: { updatedAt: "desc" },
        take: 20,
        select: { id: true, mapName: true, state: true, format: true, scoreA: true, scoreB: true },
      }),
      prisma.matchDispute.findMany({
        orderBy: { createdAt: "desc" },
        take: 30,
        include: {
          reporter: { select: { displayName: true, username: true } },
          match: {
            select: {
              mapName: true,
              state: true,
              scoreA: true,
              scoreB: true,
              players: {
                include: { user: { select: { id: true, displayName: true, username: true } } },
              },
            },
          },
        },
      }),
    ]);
    const matches: AdminMatchBrief[] = liveMatches.map((match) => ({
      id: match.id,
      mapName: match.mapName || "—",
      state: match.state,
      format: match.format,
      score: `${match.scoreA}–${match.scoreB}`,
    }));
    const reports: AdminReport[] = disputes.map((dispute) => {
      const others = dispute.match.players
        .filter((row) => row.user.id !== dispute.reporterId)
        .map((row) => row.user.displayName || row.user.username);
      return {
        id: dispute.id,
        reason: dispute.reason,
        createdAt: dispute.createdAt.toISOString().slice(0, 16).replace("T", " "),
        reporter: dispute.reporter.displayName || dispute.reporter.username,
        suspect: others[0] || "—",
        mapName: dispute.match.mapName || "—",
        state: dispute.match.state,
        score: `${dispute.match.scoreA}–${dispute.match.scoreB}`,
      };
    });
    return {
      players: users.map(userToAdminRow),
      stats: {
        enrollment,
        online: presence.count,
        servers: matches.length,
        grossCents: 0,
        unavailable: false,
        staging: false,
        connected: presence.players,
        presence: presence.reason,
      },
      matches,
      reports,
    };
  } catch {
    return EMPTY_DESK;
  }
}

async function gatedUser(userId: string) {
  if (!(await readAdminGate())) return null;
  if (typeof userId !== "string" || !userId.trim() || userId.length > 64) return null;
  return prisma.user.findUnique({ where: { id: userId } });
}

export async function disconnectAdminSteam(userId: string) {
  const user = await gatedUser(userId);
  if (!user) return { ok: false as const };
  await prisma.user.update({
    where: { id: user.id },
    data: { steamId: null },
  });
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export async function upgradeAdminPremium(userId: string) {
  const user = await gatedUser(userId);
  if (!user) return { ok: false as const };
  await prisma.user.update({
    where: { id: user.id },
    data: { subscriptionTier: "PREMIUM" },
  });
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export async function setAdminRankTen(userId: string) {
  const user = await gatedUser(userId);
  if (!user) return { ok: false as const };
  await prisma.user.update({
    where: { id: user.id },
    data: { rankLevel: 10, competitiveRating: 3000 },
  });
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export async function setAdminAccountBan(userId: string, banned: boolean) {
  const user = await gatedUser(userId);
  if (!user) return { ok: false as const };
  if (banned) {
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { accountStatus: "BANNED" },
      }),
      prisma.banRecord.create({
        data: {
          userId: user.id,
          status: "BANNED",
          reason: "Operator ban from the admin desk",
        },
      }),
      prisma.userSession.updateMany({
        where: { userId: user.id, revokedAt: null },
        data: { revokedAt: new Date() },
      }),
    ]);
  } else {
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { accountStatus: "ACTIVE" },
      }),
      prisma.banRecord.updateMany({
        where: { userId: user.id, status: "BANNED", expiresAt: null },
        data: { expiresAt: new Date() },
      }),
    ]);
  }
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export async function resetAdminProfile(userId: string) {
  const user = await gatedUser(userId);
  if (!user) return { ok: false as const };
  await prisma.$transaction(async (tx) => {
    await tx.ratingHistory.deleteMany({ where: { userId: user.id } });
    await tx.team.updateMany({
      where: { captainId: user.id },
      data: { activeStreak: 0 },
    });
    await tx.user.update({
      where: { id: user.id },
      data: {
        rankLevel: 1,
        competitiveRating: 1000,
        wins: 0,
        losses: 0,
        subscriptionTier: "FREE",
      },
    });
  });
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}
