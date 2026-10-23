import { readQueueView } from "@/server/queue-engine";
import { getPlatformStatus } from "@/server/platform-status";
import { QUEUE_SIZE } from "@/lib/queue";
import type { ArenaData } from "@/components/public/play-arena-hero";

/** Real values only; on any failure shows 0 in queue and "Status unavailable" rather than invented numbers. */
export async function readArena(userId: string | null): Promise<ArenaData> {
  const [v, st] = await Promise.all([readQueueView(userId).catch(() => null), getPlatformStatus().catch(() => null)]);
  const l = v?.lobby && !["DONE", "CANCELLED", "FAILED"].includes(v.lobby.state) ? v.lobby : null;
  const sh = st?.rows.find((r) => r.key === "shield");
  return { queued: v?.queued ?? 0, needed: v?.needed ?? QUEUE_SIZE, map: l?.map ?? null, found: l?.state === "READY", shield: sh ? { tone: sh.tone, value: sh.value } : null, region: v?.region ?? null };
}
