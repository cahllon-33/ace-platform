import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { StatsConsole } from "@/components/stats-console";
import { getText } from "@/server/locale";
import { loadRatingMovement, statsAccess } from "@/server/player-stats";
import { readSessionUser } from "@/server/session";

/** Dynamic route: opt out of instant navigation prerender (reads request data). */
export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const copy = (await getText()).account.statsConsole;
  return { title: copy.metaTitle, description: copy.lede };
}

export default async function StatsPage() {
  await connection();
  const text = await getText();
  const copy = text.account.statsConsole;
  let user: Awaited<ReturnType<typeof readSessionUser>> = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }
  const access = statsAccess(user);
  const points = access === "unlocked" ? await loadRatingMovement(user) : null;
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD700]">{copy.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{copy.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.lede}</p>
      {access !== "unlocked" ? (
        <div className="ace-s3d-gate" role="status">
          <p className="font-semibold text-[#F5F3EC]">{access === "locked" ? copy.lockedTitle : copy.signIn}</p>
          {access === "locked" ? <p className="mt-1">{copy.lockedBody}</p> : null}
          <Link className="ace-codex-entry" href="/pricing">
            {copy.plansLink}
          </Link>
        </div>
      ) : null}
      <StatsConsole
        text={text}
        data={access === "unlocked" && user && points ? { mode: "live", points, current: user.competitiveRating } : { mode: "sample" }}
      />
    </main>
  );
}
