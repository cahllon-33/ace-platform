import { prestigeBadge, prestigeForRp, prestigeSetFor } from "@/lib/prestige";
import { VerifiedMark } from "@/components/verified-mark";
import { isVerified, verifyTier } from "@/lib/verification";
import { guardDisplayName } from "@/lib/display-name-guard";
import { RankOrb } from "@/components/rank-orb";
import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { AntiCheatTelemetry } from "@/components/anti-cheat-telemetry";
import { ComingSoonShield } from "@/components/coming-soon-shield";
import { CreateTeamForm, InviteForm } from "@/components/dashboard-forms";
import { EliteSeal } from "@/components/elite-seal";
import { IdentityPreview } from "@/components/identity-preview";
import { PlayerBadges } from "@/components/player-badges";
import { PlannedButton } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { RankEmblem } from "@/components/rank-emblem";
import { RankArtPicker } from "@/components/rank-art-picker";
import { canUsePremiumRankArt, effectiveRankArt, isPremiumPlan } from "@/server/rank-art";
import { PremiumProfileCard, premiumCardLabels } from "@/components/premium-profile-card";
import { playerBadges } from "@/lib/badges";
import { hasEliteSeal, telemetryUnlocked } from "@/lib/pricing";
import { formatRankLabelWith, rankArtAsset } from "@/lib/ranks";
import { PlayerCard } from "@/components/player-card";
import { interpolate } from "@/lib/i18n";
import { rankLevelFromRp } from "@/lib/rank-progress";
import { CompetitiveJourney } from "@/components/competitive-journey";
import { getPrisma } from "@/server/db";
import { rankProgress } from "@/lib/rank-progress";
import "./dash40.css";
import { MembershipManage } from "@/components/membership-manage";
import { getLocaleId, getText, getUi } from "@/server/locale";
import { SITE_LOCALES } from "@/lib/languages";
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
  const ui = await getUi();
  // One source: displayed rank is derived from stored RP via the published table (same as the rating engine).
  const rankLevel = rankLevelFromRp(user.competitiveRating);
  const shownName = guardDisplayName(user.displayName, user.steamId);
  const prisma = getPrisma();
  const [memberships, invites, ratingEvents, signIns] = await Promise.all([
    prisma.teamMember.findMany({
      where: { userId: user.id },
      include: { team: { include: { members: { include: { user: true } } } } },
    }),
    prisma.teamInvitation.findMany({
      where: { inviteeId: user.id, status: "PENDING" },
      include: { team: true },
    }),
    prisma.ratingHistory.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" }, take: 6 }),
    prisma.signInEvent.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" }, take: 4 }),
  ]);
  const d = ui.r40.dash;
  const localeId = await getLocaleId();
  const lc = SITE_LOCALES.find((l) => l.id === localeId)?.code ?? "en";
  const prog = rankProgress(user.competitiveRating);
  const games = user.wins + user.losses;
  const fmt = new Intl.DateTimeFormat(lc, { dateStyle: "medium", timeStyle: "short" });
  const activity = [
    ...ratingEvents.map((e) => ({ id: e.id, at: e.createdAt, up: e.ratingAfter >= e.ratingBefore, label: interpolate(d.evRating, { before: e.ratingBefore, after: e.ratingAfter }), kind: "rating" as const })),
    ...signIns.map((e) => ({ id: e.id, at: e.createdAt, up: true, label: d.evSignIn, kind: "signin" as const })),
  ].sort((a, b) => b.at.getTime() - a.at.getTime()).slice(0, 6);

  return (
    <main className="ace-lobby d40 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section className="d40-hero" aria-labelledby="d40-title">
        <div className="d40-hero-id">
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="d40-avatar" src={user.avatarUrl} alt="" width={88} height={88} />
          ) : (
            <span className="d40-avatar d40-avatar-ph" aria-hidden="true">{shownName.slice(0, 1).toUpperCase()}</span>
          )}
          <div className="min-w-0">
            <p className="d40-kicker">{d.kicker}</p>
            <h1 id="d40-title" className="d40-title">{interpolate(d.welcome, { name: shownName })}{isVerified(user) ? <VerifiedMark tier={verifyTier(user.subscriptionTier)} label={ui.r41.vf.tip} size={24} /> : null}</h1>
            <p className="d40-lede">{copy.lede}</p>
          </div>
        </div>
        <span className="d40-hero-emblem"><RankOrb level={rankLevel} art={effectiveRankArt(user)} size={120} label={d.statRank} priority prestige={prestigeBadge(user.competitiveRating, user.subscriptionTier)} />{(() => { const pr = prestigeForRp(user.competitiveRating); if (!pr) return null; return <span className="pr41-milestone">{prestigeSetFor(user.subscriptionTier) ? interpolate(ui.r41c.pr.level, { n: pr.level, name: pr.name }) : `${interpolate(ui.r41c.pr.milestone, { n: pr.level })} · ${pr.name}`}</span>; })()}</span>
      </section>

      <nav className="d40-quick" aria-label={d.quick}>
        {user.steamId ? <Link href={`/player/${user.steamId}`}>{d.qProfile}<span aria-hidden="true">→</span></Link> : null}
        {user.steamId ? <Link href={`/player/${user.steamId}/stats`}>{ui.r41.st.open}<span aria-hidden="true">→</span></Link> : null}
        <Link href="/leaderboard">{d.qBoard}<span aria-hidden="true">→</span></Link>
        <Link href="/ranks">{d.qRanks}<span aria-hidden="true">→</span></Link>
        <Link href="/play">{d.qPlay}<span aria-hidden="true">→</span></Link>
      </nav>

      <section className="d40-stats" aria-label={copy.title}>
        <article className="d40-stat d40-stat-wide">
          <p className="d40-stat-k">{d.statRp}</p>
          <p className="d40-stat-v">{user.competitiveRating.toLocaleString(lc)} <small>RP</small></p>
          <div className="d40-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={prog.percent}><span style={{ width: `${prog.percent}%` }} /></div>
          <p className="d40-stat-s">{prog.next ? interpolate(d.toNext, { rp: prog.rpToNext, next: `${prog.next.tier.name} ${prog.next.division}` }) : d.top}</p>
        </article>
        <article className="d40-stat">
          <p className="d40-stat-k">{d.statRank}</p>
          <p className="d40-stat-v">{prog.tier.name}</p>
          <p className="d40-stat-s">{interpolate(ui.r38.card.division, { division: prog.division })}</p>
        </article>
        <article className="d40-stat">
          <p className="d40-stat-k">{d.statRecord}</p>
          <p className="d40-stat-v">{games ? `${user.wins}–${user.losses}` : "—"}</p>
          <p className="d40-stat-s">{games ? `${d.statWinRate} ${Math.round((user.wins / games) * 100)}%` : d.noRecord}</p>
        </article>
        <article className="d40-stat">
          <p className="d40-stat-k">{d.statPlan}</p>
          <p className="d40-stat-v">{copy.tiers[user.subscriptionTier]}</p>
          <p className="d40-stat-s">{copy.accountStatuses[user.accountStatus]}</p>
        </article>
      </section>

      <section className="d40-activity" aria-labelledby="d40-act">
        <h2 id="d40-act" className="d40-h2">{d.activity}</h2>
        {activity.length === 0 ? (
          <div className="d40-empty"><span aria-hidden="true">◇</span><p>{d.activityEmpty}</p></div>
        ) : (
          <ol className="d40-feed">
            {activity.map((a) => (
              <li key={a.id} className={a.kind === "rating" ? (a.up ? "is-up" : "is-down") : "is-info"}>
                <span className="d40-dot" aria-hidden="true" />
                <span className="d40-feed-l">{a.label}</span>
                <time dateTime={a.at.toISOString()}>{fmt.format(a.at)}</time>
              </li>
            ))}
          </ol>
        )}
      </section>

      <div className="mt-8">
        <CompetitiveJourney rp={user.competitiveRating} ui={ui} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <Panel className="border-ace-gold/35 p-6">
          {hasEliteSeal(user.subscriptionTier) ? (
            <div className="mb-4 flex items-center gap-3">
              <EliteSeal className="h-16 w-auto" />
              <span className="text-sm font-bold tracking-[0.22em] text-[#FFD76A]">{copy.eliteBadge}</span>
            </div>
          ) : null}
          <h2 className="sr-only">{shownName}</h2>
          <PlayerCard
            name={shownName}
            avatarUrl={user.avatarUrl || null}
            rp={user.competitiveRating}
            wins={user.wins}
            losses={user.losses}
            labels={{
              rp: text.home.ops.rp,
              matches: ui.r38.card.matches,
              wl: ui.r38.card.wl,
              noMatches: ui.r38.card.noMatches,
              division: ui.r38.card.division,
              avatarAlt: interpolate(text.home.ops.avatarAlt, { name: shownName }),
            }}
            emblem={
              <RankOrb level={rankLevel} art={effectiveRankArt(user)} size={72} label={d.statRank} prestige={prestigeBadge(user.competitiveRating, user.subscriptionTier)} />
            }
          />
          <PlayerBadges
            badges={playerBadges({
              subscriptionTier: user.subscriptionTier,
              rankLevel: rankLevel,
              wins: user.wins,
              losses: user.losses,
              steamLinked: Boolean(user.steamId),
            })}
          />
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-ace-muted">{copy.stats.accountStatus}</dt>
              <dd className="text-ace-text">{copy.accountStatuses[user.accountStatus]}</dd>
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.subscription}</dt>
              <dd className="text-ace-text">{copy.tiers[user.subscriptionTier]}</dd>
            </div>
            <div className="sm:col-span-2">
              <MembershipManage user={user} />
            </div>
            <div>
              <dt className="text-ace-muted">{copy.stats.rank}</dt>
              <dd className="text-ace-gold-bright">
                {formatRankLabelWith(text.ranks.emblem.rankLabel, rankLevel)}
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
          <div className="mt-6 rounded-2xl border border-[#FFD76A]/25 bg-[#08090D] p-4">
            <h3 className="text-sm font-semibold tracking-[0.12em] text-[#FFD76A]">
              {copy.settings.title}
            </h3>
            <p className="mt-2 text-xs leading-6 text-ace-muted">{text.consent.subscriptionDisclosure}</p>
            <p className="mt-3 text-xs leading-6 text-ace-muted">{copy.settings.billingNotLive}</p>
            <div className="mt-3">
              {user.paddleSubscriptionId ? (
                <a href="/api/paddle/portal" className="inline-flex rounded-full border border-[#FFD76A]/40 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#FFD76A] hover:bg-[#FFD76A]/10">
                  {copy.settings.cancelButton}
                </a>
              ) : (
                <p className="text-xs leading-6 text-ace-muted">{copy.settings.cancelReason}</p>
              )}
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
        <div className="grid gap-4">
          {isPremiumPlan(user.subscriptionTier) ? (
            <PremiumProfileCard
              name={shownName}
              avatarUrl={user.avatarUrl || null}
              level={rankLevel}
              rating={user.competitiveRating}
              labels={premiumCardLabels(await getText())}
            />
          ) : null}
          <Panel className="ace-dash-links p-5">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-[#FFD76A]">{text.account.statsConsole.dashTitle}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link className="ace-codex-entry" href="/stats">
                {text.account.statsConsole.dashStats}
              </Link>
              {isPremiumPlan(user.subscriptionTier) ? (
                <Link className="ace-codex-entry" href="/analysis">
                  {text.account.statsConsole.dashAnalysis}
                </Link>
              ) : null}
            </div>
            {!telemetryUnlocked(user.subscriptionTier) ? (
              <p className="mt-2 text-xs leading-5 text-ace-muted">{text.account.statsConsole.lockedBody}</p>
            ) : null}
          </Panel>
          <RankEmblem level={rankLevel} art={effectiveRankArt(user)} />
          <RankArtPicker current={effectiveRankArt(user)} premiumAllowed={canUsePremiumRankArt(user.subscriptionTier)} />
        </div>
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
                    {guardDisplayName(member.user.displayName, member.user.steamId)} · {copy.roles[member.role]}
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
