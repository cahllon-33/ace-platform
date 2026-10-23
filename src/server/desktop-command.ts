/**
 * R53 owner-only "Command" area of the A.C.E desktop app. Reuses the existing admin functions.
 * EVERY export here re-checks readIsSteamOwner() itself; the route also returns 403 for non-owners.
 */
import { getPrisma } from "@/server/db";
import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import { audit, banPlayer, cancelMatch, forceEnd, listBans, liveMatches, queueList, revokeBan } from "@/server/queue-admin";
import { setBanWithReason } from "@/server/admin-ops";
import { setAdminTier } from "@/server/admin-users";
import { readPresence } from "@/server/presence";
import { AC_SETTING, extraBlockedProcesses, loadAnticheatAdmin, requireAnticheatNow } from "@/server/anticheat";
import { BLOCKLIST, requireAnticheat } from "@/lib/anticheat";
import { readSetting, writeSetting } from "@/server/server-health";
import { readDiscordBotConfig } from "@/server/discord";
import { deleteMission, deleteNews, deleteSeason, saveMission, saveNews, saveSeason, toggleFeatured } from "@/server/desktop-admin";
import { rankFromRating } from "@/lib/ranks";
import { ACTIVE_STATES } from "@/server/queue-engine";

const db = () => getPrisma();
const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
export class OwnerOnly extends Error {}
async function gate() { if (!(await readIsSteamOwner())) throw new OwnerOnly("owner-only"); }

/** Revenue counts only webhook-completed, unrefunded Paddle orders. */
export async function revenue(now = new Date()) {
  const day = new Date(now.getTime() - 86_400_000), month = new Date(now.getTime() - 30 * 86_400_000);
  const base = { status: "completed", refundedAt: null } as const;
  const [all, d30, d1] = await Promise.all([
    db().paddleOrder.aggregate({ where: base, _sum: { amountCents: true }, _count: true }),
    db().paddleOrder.aggregate({ where: { ...base, completedAt: { gte: month } }, _sum: { amountCents: true }, _count: true }),
    db().paddleOrder.aggregate({ where: { ...base, completedAt: { gte: day } }, _sum: { amountCents: true }, _count: true }),
  ]);
  const r = (a: typeof all) => ({ cents: a._sum.amountCents ?? 0, orders: a._count });
  return { total: r(all), last30d: r(d30), last24h: r(d1) };
}

const safeLive = () => liveMatches().then((rows) => ({ rows, error: null as string | null })).catch((e: unknown) => ({ rows: [], error: e instanceof Error ? e.message : "unavailable" }));

export async function commandSection(section: string, q: URLSearchParams) {
  await gate();
  switch (section) {
    case "overview": {
      const since = new Date(Date.now() - 86_400_000);
      const [presence, queue, live, rev, flags24h, flagged, users, acReq] = await Promise.all([
        readPresence(), db().queueEntry.count(), db().queueLobby.count({ where: { state: { in: [...ACTIVE_STATES] } } }),
        revenue(), db().anticheatEvent.count({ where: { createdAt: { gte: since } } }), db().anticheatSession.count({ where: { revokedAt: null, status: "flagged" } }), db().user.count(), requireAnticheatNow(),
      ]);
      return { online: presence.unavailable ? null : presence.count, queue, liveMatches: live, revenue: rev, anticheat: { flags24h, flaggedSessions: flagged, required: acReq }, users };
    }
    case "matches": {
      const live = await safeLive();
      return { live: live.rows, liveError: live.error, queue: await queueList(), recent: await db().queueLobby.findMany({ orderBy: { createdAt: "desc" }, take: 20, select: { id: true, state: true, map: true, scoreA: true, scoreB: true, createdAt: true, endedAt: true, error: true } }).catch(() => []), console: "/admin/servers" };
    }
    case "players": {
      const term = str(q.get("q"), 40);
      const rows = await db().user.findMany({ where: term ? { OR: [{ displayName: { contains: term, mode: "insensitive" } }, { steamId: term }, { id: term }] } : {}, orderBy: { createdAt: "desc" }, take: 30, select: { id: true, displayName: true, steamId: true, competitiveRating: true, subscriptionTier: true, accountStatus: true, createdAt: true } });
      return { rows: rows.map((u) => ({ id: u.id, name: u.displayName, steamId: u.steamId, rp: u.competitiveRating, level: rankFromRating(u.competitiveRating).level, plan: u.subscriptionTier, status: u.accountStatus, joined: u.createdAt.toISOString() })), bans: await listBans() };
    }
    case "player": {
      const id = str(q.get("id"), 64);
      const u = await db().user.findUnique({ where: { id }, select: { id: true, displayName: true, steamId: true, competitiveRating: true, subscriptionTier: true, accountStatus: true, wins: true, losses: true, discordId: true } });
      if (!u) return null;
      const [events, bans, orders] = await Promise.all([
        db().anticheatEvent.findMany({ where: { userId: id }, orderBy: { createdAt: "desc" }, take: 50 }),
        db().queueBan.findMany({ where: { userId: id }, orderBy: { createdAt: "desc" }, take: 20 }),
        db().paddleOrder.findMany({ where: { userId: id }, orderBy: { createdAt: "desc" }, take: 20, select: { id: true, kind: true, amountCents: true, status: true, completedAt: true, refundedAt: true } }),
      ]);
      return { ...u, level: rankFromRating(u.competitiveRating).level, discordLinked: !!u.discordId, discordId: undefined, events, bans, orders };
    }
    case "anticheat": {
      const [{ events, sessions }, extra, override] = await Promise.all([loadAnticheatAdmin(), extraBlockedProcesses(), readSetting(AC_SETTING.require)]);
      return { required: await requireAnticheatNow(), envRequired: requireAnticheat(), override: override === "true" || override === "false" ? override : null, builtin: BLOCKLIST.processes, extra,
        events: events.map((e) => ({ id: e.id, kind: e.kind, severity: e.severity, detail: e.detail, at: e.createdAt.toISOString(), userId: e.userId, name: e.user.displayName, steamId: e.user.steamId })),
        sessions: sessions.map((s) => ({ id: s.id, status: s.status, cs2: s.cs2Running, version: s.clientVersion, at: s.lastHeartbeatAt?.toISOString() ?? null, name: s.user.displayName, steamId: s.user.steamId })) };
    }
    case "content": {
      const [news, missions, seasons, items] = await Promise.all([
        db().newsPost.findMany({ orderBy: { createdAt: "desc" }, take: 30 }), db().mission.findMany({ orderBy: { createdAt: "desc" }, take: 30 }),
        db().leagueSeason.findMany({ orderBy: { createdAt: "desc" }, take: 20 }), db().cosmeticItem.findMany({ orderBy: { createdAt: "desc" }, take: 60, select: { id: true, name: true, kind: true, priceCents: true, active: true, featured: true } }),
      ]);
      return { news, missions, seasons, items };
    }
    case "discord": {
      const cfg = readDiscordBotConfig();
      const [linked, matchChannels] = await Promise.all([db().user.count({ where: { discordId: { not: null } } }), readSetting("discord.lastSync").catch(() => null)]);
      return { botConfigured: !!cfg, guildConfigured: !!cfg?.guildId, linkedPlayers: linked, lastSync: matchChannels };
    }
    default: return undefined;
  }
}

function form(o: Record<string, unknown>) {
  const f = new FormData();
  for (const [k, v] of Object.entries(o)) if (v != null && k !== "op") f.set(k, typeof v === "boolean" ? (v ? "on" : "") : String(v));
  return f;
}

export async function commandAction(op: string, b: Record<string, unknown>) {
  await gate();
  const actor = await readAdminActor();
  const log = (action: string, value: string, reason = "") => audit(actor, "desktop." + action, value, reason);
  switch (op) {
    case "match.cancel": { const r = await cancelMatch(str(b.lobbyId, 40)); if (r.ok) await log("match.cancel", str(b.lobbyId, 40)); return r; }
    case "match.forceEnd": { const r = await forceEnd(str(b.lobbyId, 40)); if (r.ok) await log("match.forceEnd", str(b.lobbyId, 40)); return r; }
    case "player.ban": case "player.unban": {
      const r = await setBanWithReason(str(b.userId, 64), op === "player.ban", str(b.reason, 300));
      return r.ok ? r : { ok: false as const, error: "not-found" };
    }
    case "player.queueBan": {
      const m = Number(b.minutes); const r = await banPlayer(str(b.steamId, 30), str(b.reason, 200), Number.isFinite(m) && m > 0 ? m : null, actor);
      if (r.ok) await log("queue.ban", str(b.steamId, 30), str(b.reason, 200)); return r;
    }
    case "ban.revoke": { const r = await revokeBan(str(b.id, 40)); await log("queue.unban", str(b.id, 40)); return r; }
    case "player.plan": {
      const tier = str(b.tier, 10) as "FREE" | "PLUS" | "PREMIUM" | "AUTO";
      const r = await setAdminTier(str(b.userId, 64), tier);
      if (r.ok) await log("player.plan", `${str(b.userId, 64)}=${tier}`); return r.ok ? r : { ok: false as const, error: "bad-request" };
    }
    case "ac.require": {
      const v = str(b.value, 5);
      if (v === "env") await db().adminSetting.deleteMany({ where: { key: AC_SETTING.require } });
      else if (v === "true" || v === "false") await writeSetting(AC_SETTING.require, v);
      else return { ok: false as const, error: "bad-request" };
      await log("anticheat.require", v); return { ok: true as const };
    }
    case "ac.blocklist": {
      const list = Array.isArray(b.processes) ? [...new Set(b.processes.filter((x): x is string => typeof x === "string").map((x) => x.trim().toLowerCase().slice(0, 80)).filter(Boolean))].slice(0, 200) : null;
      if (!list) return { ok: false as const, error: "bad-request" };
      await writeSetting(AC_SETTING.extra, JSON.stringify(list)); await log("anticheat.blocklist", list.join(",")); return { ok: true as const };
    }
    case "mission.save": await saveMission(form(b)); await log("mission.save", str(b.title, 80)); return { ok: true as const };
    case "mission.delete": await deleteMission(form(b)); await log("mission.delete", str(b.id, 40)); return { ok: true as const };
    case "news.save": await saveNews(form(b)); await log("news.save", str(b.title, 120)); return { ok: true as const };
    case "news.delete": await deleteNews(form(b)); await log("news.delete", str(b.id, 40)); return { ok: true as const };
    case "season.save": await saveSeason(form(b)); await log("season.save", str(b.name, 80)); return { ok: true as const };
    case "season.delete": await deleteSeason(form(b)); await log("season.delete", str(b.id, 40)); return { ok: true as const };
    case "item.feature": await toggleFeatured(form(b)); await log("item.feature", str(b.id, 40)); return { ok: true as const };
    default: return { ok: false as const, error: "unknown-op" };
  }
}
