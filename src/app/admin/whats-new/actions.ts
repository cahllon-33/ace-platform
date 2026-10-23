"use server";
import { revalidatePath } from "next/cache";
import { addWhatsNew, setWhatsNewPublished } from "@/server/whats-new";

export async function addEntryAction(_prev: { error?: string; ok?: boolean } | null, fd: FormData) {
  const r = await addWhatsNew({ title: String(fd.get("title") ?? ""), body: String(fd.get("body") ?? ""), href: String(fd.get("href") ?? "").trim() });
  revalidatePath("/admin/whats-new"); revalidatePath("/whats-new");
  return r.ok ? { ok: true } : { error: r.error };
}

export async function togglePublishedAction(fd: FormData) {
  await setWhatsNewPublished(String(fd.get("id") ?? ""), fd.get("published") === "1");
  revalidatePath("/admin/whats-new"); revalidatePath("/whats-new");
}
