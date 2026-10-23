"use server";
import { revalidatePath } from "next/cache";
import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import { analyzeMatch, banUserHardware, decideReview } from "@/server/ac-analytics";
import { audit } from "@/server/queue-admin";
import { AC_SETTING } from "@/server/anticheat";
import { writeSetting } from "@/server/server-health";

async function owner() { if (!(await readIsSteamOwner())) throw new Error("forbidden"); return readAdminActor(); }
const s = (f: FormData, k: string, max = 200) => String(f.get(k) ?? "").slice(0, max);

/** Owner decision on a review. Never bans by itself. */
export async function decideReviewAction(f: FormData) {
  const actor = await owner();
  const status = s(f, "status");
  if (status !== "cleared" && status !== "confirmed" && status !== "open") return;
  await decideReview(s(f, "id", 64), status, actor, s(f, "note", 1000));
  await audit(actor, "anticheat.review." + status, s(f, "id", 64)).catch(() => null);
  revalidatePath("/admin/anticheat");
}

/** Explicit owner action: add the user's reported hardware fingerprint(s) to the ban list. */
export async function banHardwareAction(f: FormData) {
  const actor = await owner();
  const userId = s(f, "userId", 64);
  if (!userId || s(f, "confirm") !== "yes") return;
  await banUserHardware(userId, s(f, "reason", 300), actor);
  await audit(actor, "anticheat.hwban", userId, s(f, "reason", 300)).catch(() => null);
  revalidatePath("/admin/anticheat");
}

export async function analyzeMatchAction(f: FormData) {
  await owner();
  const key = s(f, "matchKey", 80).trim();
  if (key) await analyzeMatch(key);
  revalidatePath("/admin/anticheat");
}

/** Admin-editable disallowed programs (hard rule: blocks queueing). One name fragment per line. */
export async function saveBlocklistAction(f: FormData) {
  await owner();
  const list = [...new Set(s(f, "list", 10_000).split(/\r?\n/).map((x) => x.trim().toLowerCase()).filter((x) => x.length >= 3 && x.length <= 64))].slice(0, 200);
  await writeSetting(AC_SETTING.extra, JSON.stringify(list));
  await audit(await readAdminActor(), "anticheat.blocklist", list.join(",")).catch(() => null);
  revalidatePath("/admin/anticheat");
}
