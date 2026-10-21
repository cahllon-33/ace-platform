"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { cleanReason } from "@/lib/rank-override";
import { readAdminActor, readAdminGate } from "@/server/admin-gate";
import { readSessionUser } from "@/server/session";

const STEAM_ID64 = /^\d{17}$/;
const REPORT_REASONS = ["cheating", "abuse", "other"] as const;
const DAILY_LIMIT = 5;

export async function submitPlayerReport(form: FormData) {
  const user = await readSessionUser().catch(() => null);
  if (!user) redirect("/report?error=signin");
  const target = String(form.get("target") ?? "").trim();
  const reason = String(form.get("reason") ?? "");
  const details = String(form.get("details") ?? "").replace(/\s+/g, " ").trim().slice(0, 1000);
  if (!STEAM_ID64.test(target) || !(REPORT_REASONS as readonly string[]).includes(reason) || target === user.steamId) {
    redirect(`/report?error=invalid&target=${encodeURIComponent(target.slice(0, 17))}`);
  }
  const since = new Date(Date.now() - 86_400_000);
  const recent = await prisma.playerReport.count({ where: { reporterId: user.id, createdAt: { gte: since } } });
  if (recent < DAILY_LIMIT) {
    await prisma.$transaction([
      prisma.playerReport.create({ data: { reporterId: user.id, targetSteamId: target, reason, details } }),
      prisma.notification.create({ data: { userId: user.id, kind: "report.received" } }),
    ]);
  }
  // Same answer either way, so the limit can't be probed.
  redirect("/report?sent=1");
}

export async function listPlayerReports(status: "open" | "closed" = "open") {
  if (!(await readAdminGate())) return [];
  return prisma.playerReport.findMany({
    where: { status: status === "open" ? "open" : { not: "open" } },
    orderBy: { createdAt: status === "open" ? "asc" : "desc" },
    take: 100,
    include: { reporter: { select: { displayName: true, steamId: true } } },
  });
}

export async function resolvePlayerReport(id: string, outcome: "actioned" | "dismissed", reasonRaw = "") {
  if (!(await readAdminGate())) return { ok: false as const, error: "denied" };
  const report = await prisma.playerReport.findUnique({ where: { id: String(id) } });
  if (!report || report.status !== "open") return { ok: false as const, error: "nochange" };
  const actor = await readAdminActor();
  await prisma.$transaction([
    prisma.playerReport.update({ where: { id: report.id }, data: { status: outcome, resolvedBy: actor, resolvedAt: new Date() } }),
    prisma.adminAuditLog.create({ data: { actor, action: `report.${outcome}`, targetUserId: null, oldValue: `open · ${report.reason} · ${report.targetSteamId}`, newValue: outcome, reason: cleanReason(reasonRaw) } }),
  ]);
  revalidatePath("/admin/reports");
  return { ok: true as const };
}
