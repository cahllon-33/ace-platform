"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function updateOwnContactEmail(raw: string): Promise<{ ok: boolean; message: string }> {
  const copy = (await getText()).desk.contactEmail.results;
  const user = await readSessionUser();
  if (!user) {
    return { ok: false, message: copy.signInFirst };
  }

  if (typeof raw !== "string") {
    return { ok: false, message: copy.invalid };
  }
  const email = raw.trim().toLowerCase();
  if (email.length > 254 || (email.length > 0 && !EMAIL_PATTERN.test(email))) {
    return { ok: false, message: copy.invalid };
  }

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { email: email.length > 0 ? email : null },
    });
  } catch {
    return { ok: false, message: copy.failed };
  }

  revalidatePath("/profile", "layout");
  return {
    ok: true,
    message: email ? copy.saved : copy.cleared,
  };
}
