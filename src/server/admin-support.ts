import { prisma } from "@/lib/db";
import { readAdminGate } from "@/server/admin-gate";

export type AdminSupportTicket = {
  id: string;
  status: "open" | "closed";
  locale: string;
  subject: string;
  steamId: string | null;
  signedIn: boolean;
  at: string;
  transcript: { role: "user" | "assistant"; content: string }[];
};
export type AdminSupportSnapshot =
  | { status: "ok"; open: number; tickets: AdminSupportTicket[] }
  | { status: "migration" | "down"; open: 0; tickets: [] };

/** Admin-only. Null when the gate is closed. */
export async function loadAdminSupport(): Promise<AdminSupportSnapshot | null> {
  if (!(await readAdminGate())) return null;
  try {
    const [rows, open] = await Promise.all([
      prisma.supportTicket.findMany({ orderBy: [{ status: "desc" }, { createdAt: "desc" }], take: 50 }),
      prisma.supportTicket.count({ where: { status: "open" } }),
    ]);
    return {
      status: "ok",
      open,
      tickets: rows.map((r) => ({
        id: r.id,
        status: r.status === "closed" ? "closed" : "open",
        locale: r.locale,
        subject: r.subject,
        steamId: r.steamId,
        signedIn: Boolean(r.userId),
        at: r.createdAt.toISOString(),
        transcript: Array.isArray(r.transcript) ? (r.transcript as AdminSupportTicket["transcript"]) : [],
      })),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    return { status: /SupportTicket|P2021|does not exist/i.test(message) ? "migration" : "down", open: 0, tickets: [] };
  }
}

export async function setSupportTicketStatus(id: string, status: "open" | "closed"): Promise<boolean> {
  if (!(await readAdminGate())) return false;
  const res = await prisma.supportTicket.updateMany({ where: { id }, data: { status } });
  return res.count === 1;
}
