"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { parseBroadcastEmbed, parseEnvFeeds, type TvFeed } from "@/lib/broadcast";
import { readAdminGate } from "@/server/admin-gate";

const MAX_FEEDS = 16;

export type TvWall = { feeds: TvFeed[]; dbAvailable: boolean };

export async function loadTvWall(): Promise<TvWall> {
  if (!(await readAdminGate())) return { feeds: [], dbAvailable: false };
  const envFeeds = parseEnvFeeds(process.env.ACE_BROADCAST_FEEDS);
  try {
    const rows = await prisma.broadcastFeed.findMany({ orderBy: { createdAt: "asc" }, take: MAX_FEEDS });
    const dbFeeds = rows.flatMap((row) => {
      const parsed = parseBroadcastEmbed(row.embedUrl);
      return parsed ? [{ id: row.id, title: row.title, ...parsed, source: "admin" as const }] : [];
    });
    return { feeds: [...envFeeds, ...dbFeeds].slice(0, MAX_FEEDS), dbAvailable: true };
  } catch {
    return { feeds: envFeeds, dbAvailable: false };
  }
}

export async function addBroadcastFeed(title: string, url: string) {
  if (!(await readAdminGate())) return { ok: false as const, reason: "denied" as const };
  const parsed = parseBroadcastEmbed(typeof url === "string" ? url : "");
  const cleanTitle = typeof title === "string" ? title.trim().slice(0, 80) : "";
  if (!parsed || !cleanTitle) return { ok: false as const, reason: "invalid" as const };
  try {
    if ((await prisma.broadcastFeed.count()) >= MAX_FEEDS) return { ok: false as const, reason: "full" as const };
    await prisma.broadcastFeed.create({ data: { title: cleanTitle, embedUrl: parsed.embedUrl } });
  } catch {
    return { ok: false as const, reason: "db" as const };
  }
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}

export async function removeBroadcastFeed(id: string) {
  if (!(await readAdminGate())) return { ok: false as const };
  if (typeof id !== "string" || !id || id.length > 64 || id.startsWith("env-")) return { ok: false as const };
  try {
    await prisma.broadcastFeed.delete({ where: { id } });
  } catch {
    return { ok: false as const };
  }
  revalidatePath("/admin/dashboard");
  return { ok: true as const };
}
