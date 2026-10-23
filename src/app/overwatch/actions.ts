"use server";
import { redirect } from "next/navigation";
import { readSessionUser } from "@/server/session";
import { castVote } from "@/server/overwatch";

export async function voteAction(f: FormData) {
  const user = await readSessionUser().catch(() => null);
  if (!user) redirect("/overwatch");
  const r = await castVote(user.id, String(f.get("caseId") ?? "").slice(0, 64), String(f.get("verdict") ?? ""));
  redirect(r.ok ? "/overwatch?voted=1" : `/overwatch?error=${r.error}`);
}
