"use server";
import { RP_RULES } from "@/lib/rp-rules";

import { revalidatePath } from "next/cache";
import type { AccountStatus, SubscriptionTier, User } from "@prisma/client";
import { prisma } from "@/lib/db";
import type { AdminPlayerRow, AdminSecurity, AdminTier } from "@/lib/admin-command";
import { readAdminActor, readAdminGate } from "@/server/admin-gate";
import { effectiveRankArt } from "@/server/rank-art";
import { lookupSteamPersonasDetailed, type SteamSyncError } from "@/server/steam-openid";
import { steamProfileUpdate } from "@/server/users";
import { isAllowlistedSteamId, parseAdminSteamIds } from "@/lib/admin-allowlist";
import { startOfDayInZone } from "@/server/sign-in-events";
import { rankLevelFromRp } from "@/lib/rank-progress";
import { PRESENCE_WINDOW_MS, readPresence, type ConnectedPlayer } from "@/server/presence";

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
  /** Real growth figures from PostgreSQL. null when the database is unavailable or staging rows are shown. */
  growth?: AdminGrowth | null;
};

export type AdminGrowth = {
  steamLinked: number;
  today: number;
  last7: number;
  /** Registrations per UTC day, oldest first, 14 entries (today last). */
  daily14: number[];
  premium: number;
  plus: number;
  matchesCompleted: number;
};

function utcDayStart(d: Date) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

async function loadGrowth(): Promise<AdminGrowth> {
  const now = new Date();
  const today = utcDayStart(now);
  const from14 = new Date(today.getTime() - 13 * 86_400_000);
  const from7 = new Date(today.getTime() - 6 * 86_400_000);
  const [steamLinked, recent, tiers, matchesCompleted] = await Promise.all([
    prisma.user.count({ where: { steamId: { not: null } } }),
    prisma.user.findMany({ where: { createdAt: { gte: from14 } }, select: { createdAt: true } }),
    prisma.user.groupBy({ by: ["subscriptionTier"], _count: { _all: true } }),
    prisma.match.count({ where: { state: "COMPLETED" } }),
  ]);
  const daily14 = Array.from({ length: 14 }, () => 0);
  for (const row of recent) {
    const idx = Math.floor((utcDayStart(row.createdAt).getTime() - from14.getTime()) / 86_400_000);
    if (idx >= 0 && idx < 14) daily14[idx] += 1;
  }
  const tierCount = (tier: string) => tiers.find((row) => row.subscriptionTier === tier)?._count._all ?? 0;
  return {
    steamLinked,
    today: daily14[13],
    last7: recent.filter((row) => row.createdAt >= from7).length,
    daily14,
    premium: tierCount("PREMIUM"),
    plus: tierCount("PLUS"),
    matchesCompleted,
  };
}

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

function userToAdminRow(user: User, steamSyncError: SteamSyncError | null = null): AdminPlayerRow {
  const name = user.username || user.displayName;
  return {
    id: user.id,
    initials: initialsFor(name),
    username: name,
    email: user.email ?? "—",
    steamId: user.steamId ?? "—",
    rank: rankLevelFromRp(user.competitiveRating),
    rating: user.competitiveRating,
    tier: tierLabel(user.subscriptionTier),
    security: securityLabel(user.accountStatus),
    machineHash: "—",
    registeredOn: user.createdAt.toISOString().slice(0, 10),
    region: "—",
    latencyMs: 0,
    art: effectiveRankArt(user),
    wins: user.wins,
    losses: user.losses,
    avatarUrl: user.avatarUrl || null,
    steamProfileUrl: user.steamProfileUrl || "",
    steamSyncedAt: user.steamSyncedAt ? user.steamSyncedAt.toISOString() : null,
    billing: { paddle: !!user.paddleSubscriptionId, status: user.subscriptionStatus, expiresAt: user.subscriptionExpiresAt ? user.subscriptionExpiresAt.toISOString() : null },
    steamSyncError,
    owner: isAllowlistedSteamId(user.steamId, process.env.ACE_ADMIN_STEAM_IDS),
  };
}

const STEAM_STALE_MS = 6 * 60 * 60 * 1000;

/**
 * Re-sync Steam personas for linked users never synced or older than 6h (max 100 per load); owners on every load.
 * Persists every profile Steam returned; returns the failure reason per user id for the rest.
 */
async function refreshStaleSteamProfiles(): Promise<Map<string, SteamSyncError>> {
  const failures = new Map<string, SteamSyncError>();
  const owners = parseAdminSteamIds(process.env.ACE_ADMIN_STEAM_IDS);
  const stale = await prisma.user.findMany({
    where: {
      steamId: { not: null },
      // Owners (ACE_ADMIN_STEAM_IDS) are re-synced on every admin load; everyone else after 6h.
      OR: [
        { steamSyncedAt: null },
        { steamSyncedAt: { lt: new Date(Date.now() - STEAM_STALE_MS) } },
        ...(owners.length > 0 ? [{ steamId: { in: owners } }] : []),
      ],
    },
    select: { id: true, steamId: true },
    orderBy: { steamSyncedAt: { sort: "asc", nulls: "first" } },
    take: 100,
  });
  if (stale.length === 0) return failures;
  const { profiles, errors } = await lookupSteamPersonasDetailed(stale.map((row) => row.steamId!));
  const now = new Date();
  const writes = await Promise.allSettled(
    stale
      .filter((row) => profiles.has(row.steamId!))
      .map((row) => prisma.user.update({ where: { id: row.id }, data: steamProfileUpdate(profiles.get(row.steamId!)!, now) })),
  );
  for (const w of writes) if (w.status === "rejected") console.error("[steam-sync] persist failed:", w.reason);
  for (const row of stale) {
    const err = errors.get(row.steamId!);
    if (err) failures.set(row.id, err);
  }
  return failures;
}

/** Admin-only: always re-sync one player's Steam persona when the dossier opens, and report why if it failed. */
export async function refreshAdminSteamProfile(userId: string): Promise<AdminPlayerRow | null> {
  if (!(await readAdminGate())) return null;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return null;
    if (!user.steamId) return userToAdminRow(user);
    const { profiles, errors } = await lookupSteamPersonasDetailed([user.steamId]);
    const profile = profiles.get(user.steamId);
    if (!profile) return userToAdminRow(user, errors.get(user.steamId) ?? { code: "not-found" });
    return userToAdminRow(await prisma.user.update({ where: { id: user.id }, data: steamProfileUpdate(profile) }));
  } catch (error) {
    console.error("[steam-sync] dossier refresh failed:", error);
    return null;
  }
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
    const steamFailures = await refreshStaleSteamProfiles().catch((error) => {
      console.error("[steam-sync] admin-load refresh failed:", error);
      return new Map<string, SteamSyncError>();
    });
    const [users, enrollment, presence, liveMatches, disputes, growth] = await Promise.all([
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
      loadGrowth().catch(() => null),
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
    // R49d: real revenue = webhook-confirmed one-time Paddle orders still standing (refunds/chargebacks excluded).
    const gross = await prisma.paddleOrder.aggregate({ where: { status: "completed", refundedAt: null }, _sum: { amountCents: true } }).catch(() => null);
    return {
      players: users.map((user) => userToAdminRow(user, steamFailures.get(user.id) ?? null)),
      stats: {
        enrollment,
        online: presence.count,
        servers: matches.length,
        grossCents: gross?._sum.amountCents ?? 0,
        unavailable: false,
        staging: false,
        connected: presence.players,
        presence: presence.reason,
        growth,
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
    data: { rankLevel: 10, competitiveRating: 3000, rankOverrideBaseRp: user.rankOverrideBaseRp ?? user.competitiveRating, rankOverrideAt: new Date() },
  });
  await prisma.adminAuditLog.create({ data: { actor: await readAdminActor(), action: "rank.override", targetUserId: user.id, oldValue: `${user.competitiveRating} RP`, newValue: "3000 RP (rank 10 shortcut)", reason: "" } });
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
        rankLevel: RP_RULES.startingTier,
        competitiveRating: RP_RULES.startingRating,
        wins: 0,
        losses: 0,
        subscriptionTier: "FREE",
        rankOverrideBaseRp: null,
        rankOverrideAt: null,
      },
    });
  });
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export async function setAdminTier(userId: string, tier: SubscriptionTier) {
  const user = await gatedUser(userId);
  if (!user) return { ok: false as const };
  if (tier !== "FREE" && tier !== "PLUS" && tier !== "PREMIUM") return { ok: false as const };
  await prisma.user.update({ where: { id: user.id }, data: { subscriptionTier: tier } });
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export type AdminTournamentRow = { id: string; name: string; status: string; entries: number };

/** Read-only tournament registry for operators. Tournament changes stay with their creators' flows. */
export async function loadAdminTournaments(): Promise<AdminTournamentRow[]> {
  if (!(await readAdminGate())) return [];
  try {
    const rows = await prisma.tournament.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: { id: true, name: true, status: true, _count: { select: { entries: true } } },
    });
    return rows.map((row) => ({ id: row.id, name: row.name, status: row.status, entries: row._count.entries }));
  } catch {
    return [];
  }
}

export type AdminOnlineEntry = { player: AdminPlayerRow; lastSeenAt: string };
export type AdminOnlineSnapshot = {
  status: "ok" | "down" | "migration";
  serverNow: string;
  windowMs: number;
  players: AdminOnlineEntry[];
};

/**
 * Admin-only: signed-in users with a live session seen inside the presence window, newest first.
 * Uses the existing `UserSession.lastSeenAt` (no page or IP tracking). Returns null when the gate is closed.
 */
export async function loadAdminOnline(): Promise<AdminOnlineSnapshot | null> {
  if (!(await readAdminGate())) return null;
  const now = new Date();
  const base = { serverNow: now.toISOString(), windowMs: PRESENCE_WINDOW_MS };
  try {
    const sessions = await prisma.userSession.findMany({
      where: { revokedAt: null, expiresAt: { gt: now }, lastSeenAt: { gt: new Date(now.getTime() - PRESENCE_WINDOW_MS) } },
      orderBy: { lastSeenAt: "desc" },
      include: { user: true },
      take: 500,
    });
    const seen = new Set<string>();
    const players: AdminOnlineEntry[] = [];
    for (const session of sessions) {
      if (seen.has(session.userId)) continue;
      seen.add(session.userId);
      players.push({ player: userToAdminRow(session.user, null), lastSeenAt: session.lastSeenAt.toISOString() });
    }
    return { ...base, status: "ok", players };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    return { ...base, status: /lastSeenAt|P2022/i.test(message) ? "migration" : "down", players: [] };
  }
}

export type AdminSignInEntry = {
  id: string;
  at: string;
  steamId: string;
  personaName: string;
  avatarUrl: string;
  isNewUser: boolean;
  deviceType: string;
  os: string;
  browser: string;
  country: string | null;
  /** Current admin row for the player (opens the dossier); null if the account was removed. */
  player: AdminPlayerRow | null;
};
export type AdminSignInSnapshot = {
  status: "ok" | "down" | "migration";
  serverNow: string;
  today: { signIns: number; newPlayers: number };
  events: AdminSignInEntry[];
};

/** Admin-only: latest 50 Steam sign-ins, newest first, plus today's totals (Asia/Jerusalem day). Null when the gate is closed. */
export async function loadAdminSignIns(): Promise<AdminSignInSnapshot | null> {
  if (!(await readAdminGate())) return null;
  const now = new Date();
  const base = { serverNow: now.toISOString(), today: { signIns: 0, newPlayers: 0 }, events: [] as AdminSignInEntry[] };
  try {
    const dayStart = startOfDayInZone(now);
    const [rows, signIns, newPlayers] = await Promise.all([
      prisma.signInEvent.findMany({ orderBy: { createdAt: "desc" }, take: 50, include: { user: true } }),
      prisma.signInEvent.count({ where: { createdAt: { gte: dayStart } } }),
      prisma.signInEvent.count({ where: { createdAt: { gte: dayStart }, isNewUser: true } }),
    ]);
    return {
      ...base,
      status: "ok",
      today: { signIns, newPlayers },
      events: rows.map((row) => ({
        id: row.id,
        at: row.createdAt.toISOString(),
        steamId: row.steamId,
        personaName: row.personaName,
        avatarUrl: row.avatarUrl,
        isNewUser: row.isNewUser,
        deviceType: row.deviceType,
        os: row.os,
        browser: row.browser,
        country: row.country,
        player: row.user ? userToAdminRow(row.user, null) : null,
      })),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    return { ...base, status: /SignInEvent|P2021|does not exist/i.test(message) ? "migration" : "down" };
  }
}

