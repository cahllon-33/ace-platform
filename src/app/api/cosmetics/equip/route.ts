import { NextResponse } from "next/server";
import { getPrisma } from "@/server/db";
import { readSessionUser } from "@/server/session";

/** R49: equip/unequip an owned cosmetic (one equipped item per kind). */
export async function POST(request: Request) {
  const user = await readSessionUser().catch(() => null);
  if (!user) return NextResponse.json({ ok: false, error: "sign-in" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as { itemId?: string; equipped?: boolean } | null;
  if (typeof body?.itemId !== "string") return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  const prisma = getPrisma();
  const own = await prisma.cosmeticOwnership.findUnique({ where: { userId_itemId: { userId: user.id, itemId: body.itemId } }, include: { item: true } });
  if (!own) return NextResponse.json({ ok: false, error: "not-owned" }, { status: 403 });
  await prisma.$transaction([
    ...(body.equipped ? [prisma.cosmeticOwnership.updateMany({ where: { userId: user.id, equipped: true, item: { kind: own.item.kind } }, data: { equipped: false } })] : []),
    prisma.cosmeticOwnership.update({ where: { id: own.id }, data: { equipped: !!body.equipped } }),
  ]);
  return NextResponse.json({ ok: true });
}
