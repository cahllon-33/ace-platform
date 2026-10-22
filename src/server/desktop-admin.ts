"use server";

import { revalidatePath } from "next/cache";
import { getPrisma } from "@/server/db";
import { readIsSteamOwner } from "@/server/admin-gate";

/** R52 owner-only editors for desktop v2: Contracts (missions), news, Circuit (league seasons), Armory featured deals. Form actions. */
const METRICS = ["matches", "wins", "kills", "mvps", "headshots"] as const;
const STATUSES = ["DRAFT", "UPCOMING", "REGISTRATION", "REGULAR", "PLAYOFFS", "FINISHED"] as const;
const s = (f: FormData, k: string, max = 200) => String(f.get(k) ?? "").trim().slice(0, max);
const d = (f: FormData, k: string) => { const v = s(f, k, 40); if (!v) return null; const t = new Date(v.length === 16 ? v + "Z" : v); return Number.isNaN(t.getTime()) ? null : t; };
async function gate() { if (!(await readIsSteamOwner())) throw new Error("owner-only"); }
const done = () => revalidatePath("/admin/desktop");

export async function saveMission(f: FormData) {
  await gate();
  const metric = s(f, "metric") as (typeof METRICS)[number];
  const target = Math.max(1, Math.min(10000, Number(s(f, "target")) | 0));
  const startsAt = d(f, "startsAt"), endsAt = d(f, "endsAt");
  if (!METRICS.includes(metric) || !s(f, "title") || !startsAt || !endsAt || endsAt <= startsAt) return;
  const data = { title: s(f, "title", 80), description: s(f, "description", 280), metric, target, startsAt, endsAt, rewardItemId: s(f, "rewardItemId", 40) || null, active: f.get("active") === "on" };
  const id = s(f, "id", 40);
  if (id) await getPrisma().mission.update({ where: { id }, data }); else await getPrisma().mission.create({ data });
  done();
}
export async function deleteMission(f: FormData) { await gate(); await getPrisma().mission.delete({ where: { id: s(f, "id", 40) } }).catch(() => null); done(); }

export async function saveNews(f: FormData) {
  await gate();
  const url = s(f, "url", 300);
  if (!s(f, "title") || (url && !/^https:\/\//.test(url))) return;
  const data = { title: s(f, "title", 120), body: s(f, "body", 2000), url, published: f.get("published") === "on" };
  const id = s(f, "id", 40);
  if (id) await getPrisma().newsPost.update({ where: { id }, data }); else await getPrisma().newsPost.create({ data });
  done();
}
export async function deleteNews(f: FormData) { await gate(); await getPrisma().newsPost.delete({ where: { id: s(f, "id", 40) } }).catch(() => null); done(); }

export async function saveSeason(f: FormData) {
  await gate();
  const status = s(f, "status") as (typeof STATUSES)[number];
  if (!s(f, "name") || !STATUSES.includes(status)) return;
  const data = { name: s(f, "name", 80), status, description: s(f, "description", 1000), prizeText: s(f, "prizeText", 120), tournamentId: s(f, "tournamentId", 40) || null,
    registrationOpensAt: d(f, "registrationOpensAt"), registrationClosesAt: d(f, "registrationClosesAt"), regularStartsAt: d(f, "regularStartsAt"), regularEndsAt: d(f, "regularEndsAt"),
    playoffsStartsAt: d(f, "playoffsStartsAt"), finalsAt: d(f, "finalsAt"), nextSeasonAt: d(f, "nextSeasonAt") };
  const id = s(f, "id", 40);
  if (id) await getPrisma().leagueSeason.update({ where: { id }, data }); else await getPrisma().leagueSeason.create({ data });
  done();
}
export async function deleteSeason(f: FormData) { await gate(); await getPrisma().leagueSeason.delete({ where: { id: s(f, "id", 40) } }).catch(() => null); done(); }

export async function toggleFeatured(f: FormData) {
  await gate();
  const id = s(f, "id", 40);
  const it = await getPrisma().cosmeticItem.findUnique({ where: { id }, select: { featured: true } });
  if (it) await getPrisma().cosmeticItem.update({ where: { id }, data: { featured: !it.featured } });
  done();
}
