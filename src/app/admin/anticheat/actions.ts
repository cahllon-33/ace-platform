"use server";
import { revalidatePath } from "next/cache";
import { readAdminActor, readIsSteamOwner } from "@/server/admin-gate";
import { analyzeMatch, banUserHardware, decideReview } from "@/server/ac-analytics";
import { audit } from "@/server/queue-admin";
import { AC_SETTING, reverseAutoBan } from "@/server/anticheat";
import { readSetting, writeSetting } from "@/server/server-health";
import { RULES_VERSION_SETTING } from "@/server/ac-rules";
import { trainModel } from "@/server/ac-model";
import { closeOverwatchCase, openOverwatchCase } from "@/server/overwatch";

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
  // R60: bump the signed rules version so desktop clients pick the change up without an app release.
  const v = Number((await readSetting(RULES_VERSION_SETTING).catch(() => null)) ?? "1") || 1;
  await writeSetting(RULES_VERSION_SETTING, String(Math.max(v + 1, Math.floor(Date.now() / 1000))));
  await audit(await readAdminActor(), "anticheat.blocklist", list.join(",")).catch(() => null);
  revalidatePath("/admin/anticheat");
}

/** R60: train a candidate model from owner-decided reviews. Activates only if held-out gates pass. */
export async function trainModelAction() {
  const actor = await owner();
  const r = await trainModel();
  await audit(actor, "anticheat.model.train", r.trained ? `${r.active ? "active" : "rejected"}: ${r.verdict}` : r.readiness.text).catch(() => null);
  revalidatePath("/admin/anticheat");
}

/** R60: send a review to A.C.E Overwatch (anonymised). The owner supplies the demo link. */
export async function openOverwatchAction(f: FormData) {
  const actor = await owner();
  await openOverwatchCase(s(f, "reviewId", 64), s(f, "demoUrl", 500), actor);
  await audit(actor, "overwatch.open", s(f, "reviewId", 64)).catch(() => null);
  revalidatePath("/admin/anticheat");
}

/** R60: owner final decision on an Overwatch case (votes are advice). */
export async function closeOverwatchAction(f: FormData) {
  const actor = await owner();
  const status = s(f, "status");
  if (status !== "cleared" && status !== "confirmed") return;
  await closeOverwatchCase(s(f, "caseId", 64), status, actor, s(f, "note", 1000));
  await audit(actor, "overwatch.close." + status, s(f, "caseId", 64)).catch(() => null);
  revalidatePath("/admin/anticheat");
}

/** Owner only: reverse an automatic permanent ban (false positive). Requires the confirm box. */
export async function reverseAutoBanAction(f: FormData) {
  const actor = await owner();
  const userId = s(f, "userId", 64);
  if (!userId || s(f, "confirm") !== "yes") return;
  await reverseAutoBan(userId, actor);
  await audit(actor, "anticheat.autoban.reverse", userId).catch(() => null);
  revalidatePath("/admin/anticheat");
}
