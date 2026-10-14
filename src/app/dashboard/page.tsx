import type { Metadata } from "next";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { AntiCheatTelemetry } from "@/components/anti-cheat-telemetry";
import { ComingSoonShield } from "@/components/coming-soon-shield";
import { CreateTeamForm, InviteForm } from "@/components/dashboard-forms";
import { EliteSeal } from "@/components/elite-seal";
import { IdentityPreview } from "@/components/identity-preview";
import { PlannedButton } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { RankEmblem } from "@/components/rank-emblem";
import { hasEliteSeal } from "@/lib/pricing";
import { formatRankLabelWith } from "@/lib/ranks";
import { getPrisma } from "@/server/db";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.account.dashboard.meta.title,
  };
}

export const instant = false;

export default async function DashboardPage() {
  await connection();
  let user = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }
  if (!user) {
    redirect("/");
  }

  const text = await getText();
  const copy = text.account.dashboard;
  const prisma = getPrisma();
  const [memberships, invites] = await Promise.all([
    prisma.teamMember.findMany({
      where: { userId: user.id },
      include: { team: { include: { members: { include: { user: true } } } } },
    }),
    prisma.teamInvitation.findMany({
      where: { inviteeId: user.id, status: "PENDING" },
      include: { team: true },
    }),
  ]);

  return (
    <main className="ace-lobby mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-ace-gold">{copy.kicker}</p>
      <h1 className="gold-text mt-2 text-4xl font-semibold">{copy.title}</h1>
      <p className="mt-3 max-w-2xl text-ace-muted">{copy.lede}</p>

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <Panel className="border-ace-gold/35 p-6">
          {hasEliteSeal(user.subscriptionTier) ? (
            <div className="mb-4 flex items-center gap-3">
              <EliteSeal className="h-16 w-auto" />
              <span className="text-sm font-bold tracking-[0.22em] text-[#FFD700]">{copy.eliteBadge}</span>
            </div>
          ) : null}
          <h2 className="text-xl font-semibold text-white">{user.displayName}</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-ace-muted">{copy.stats.accountStatus}</dt>
              <dd className="text-ace-text">{copy.accountStatuses[user.accountStatus]}</dd>
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.subscription}</dt>
              <dd className="text-ace-text">{copy.tiers[user.subscriptionTier]}</dd>
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.rank}</dt>
              <dd className="text-ace-gold-bright">
                {formatRankLabelWith(text.ranks.emblem.rankLabel, user.rankLevel)}
              </dd>
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.ratingPoints}</dt>
              <dd className="text-ace-text">{user.competitiveRating}</dd>
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.wins}</dt>
              <dd className="text-ace-text">{user.wins}</dd>
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.losses}</dt>
              <dd className="text-ace-text">{user.losses}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-ace-muted">{copy.stats.accountId}</dt>
              <dd className="break-all font-mono text-xs text-ace-text">{user.id}</dd>
            </div>
          </dl>
          <div className="mt-6 rounded-2xl border border-[#FFD700]/25 bg-[#08090D] p-4">
            <h3 className="text-sm font-semibold tracking-[0.12em] text-[#FFD700]">
              {copy.settings.title}
            </h3>
            <p className="mt-2 text-xs leading-6 text-ace-muted">{text.consent.subscriptionDisclosure}</p>
            <p className="mt-2 text-xs text-ace-muted">{copy.settings.billingNotLive}</p>
            <div className="mt-3">
              <PlannedButton reason={copy.settings.cancelReason}>
                {copy.settings.cancelButton}
              </PlannedButton>
            </div>
          </div>
          <div className="mt-6">
            <PlannedButton reason={copy.rankedReason}>
              {copy.rankedButton}
            </PlannedButton>
          </div>
          <div className="mt-6">
            <IdentityPreview />
          </div>
        </Panel>
        <RankEmblem level={user.rankLevel} />
      </div>

      <section className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <Panel className="p-6">
          <h2 className="text-lg font-semibold text-white">{copy.roster.title}</h2>
          <p className="mt-2 text-sm text-ace-muted">{copy.roster.body}</p>
          {memberships.length === 0 ? <div className="mt-4"><CreateTeamForm /></div> : null}
          {memberships.map((membership) => (
            <div key={membership.team.id} className="mt-4 border-t border-ace-line pt-4">
              <p className="font-semibold">{membership.team.name}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-ace-gold">{copy.roles[membership.role]}</p>
              <ul className="mt-2 text-sm text-ace-muted">
                {membership.team.members.map((member) => (
                  <li key={member.userId}>
                    {member.user.displayName} · {copy.roles[member.role]}
                  </li>
                ))}
              </ul>
              {membership.role === "CAPTAIN" ? (
                <InviteForm teamId={membership.team.id} />
              ) : null}
            </div>
          ))}
        </Panel>
        <ComingSoonShield />
        <AntiCheatTelemetry />
      </section>

      {invites.length > 0 ? (
        <Panel className="mt-4 p-6">
          <h2 className="text-lg font-semibold text-white">{copy.pendingInvites}</h2>
          <ul className="mt-3 text-sm text-ace-muted">
            {invites.map((invite) => (
              <li key={invite.id}>{invite.team.name}</li>
            ))}
          </ul>
        </Panel>
      ) : null}
    </main>
  );
}
