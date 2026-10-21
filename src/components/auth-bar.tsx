import { prisma } from "@/lib/db";
import { getUi } from "@/server/locale";
import { VerifiedMark } from "@/components/verified-mark";
import { isVerified, verifyTier } from "@/lib/verification";
import { guardDisplayName } from "@/lib/display-name-guard";
import { AuthToastWatcher } from "@/components/toast-triggers";
import Link from "next/link";
import { connection } from "next/server";
import { HubSearch } from "@/components/hub-search";
import { T } from "@/components/locale-provider";
import { EliteSeal } from "@/components/elite-seal";
import { hasEliteSeal } from "@/lib/pricing";
import { STEAM_AUTH_HREF } from "@/lib/site";
import { getText } from "@/server/locale";
import { readSessionUser } from "@/server/session";
import { isAllowlistedSteamId } from "@/lib/admin-allowlist";
import { rankLevelFromRp } from "@/lib/rank-progress";
import { RANK_TIERS } from "@/lib/ranks";

export async function AuthBar() {
  await connection();
  let user = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }

  // Server-side only: SteamID from the session record, matched against ACE_ADMIN_STEAM_IDS.
  const isOwner = isAllowlistedSteamId(user?.steamId, process.env.ACE_ADMIN_STEAM_IDS);
  const copy = (await getText()).home.shell;
  const unread = user ? await prisma.notification.count({ where: { userId: user.id, readAt: null } }).catch(() => 0) : 0;
  const level = user ? rankLevelFromRp(user.competitiveRating) : null;
  const label = user ? guardDisplayName(user.displayName, user.steamId) : null;
  const initial = label?.trim().charAt(0).toUpperCase() ?? "";
  const tier = level ? RANK_TIERS[level - 1] : null;

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <AuthToastWatcher name={label} />
      {user && isVerified(user) ? <VerifiedMark tier={verifyTier(user.subscriptionTier)} label={(await getUi()).r41.vf.tip} size={18} /> : null}
      <HubSearch />
      {isOwner ? (
        <Link href="/admin/dashboard" prefetch={false} className="ace-admin-navlink no-underline">
          Admin
        </Link>
      ) : null}
      {hasEliteSeal(user?.subscriptionTier) ? (
        <span className="hx-elite inline-flex items-center gap-2" title={copy.elite}>
          <EliteSeal className="h-9 w-auto" />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] text-[#FFD76A]">{copy.elite}</span>
        </span>
      ) : null}
      <Link href="/notifications" prefetch={false} className="ace-util-frame no-underline" title={copy.notificationsTitle} aria-label={copy.notificationsAria}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 16V10a6 6 0 1 1 12 0v6l1.5 2H4.5L6 16Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
        {unread > 0 ? <span className="ace-util-count">{unread > 9 ? "9+" : unread}</span> : null}
      </Link>
      {user ? (
        <Link
          href={user.steamId ? `/player/${user.steamId}` : "/dashboard"}
          prefetch={false}
          className="ace-level-chip no-underline"
          title={label ?? undefined}
          aria-label={copy.openProfileAria}
        >
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.avatarUrl} alt="" width={34} height={34} className="ace-chip-avatar" referrerPolicy="no-referrer" />
          ) : (
            <span className="ace-chip-initial" aria-hidden="true">{initial}</span>
          )}
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="max-w-[9rem] truncate text-xs font-semibold text-[#F5F3EC]">{label}</span>
            <span className="text-[0.62rem] tracking-[0.06em] text-[#D4AF37]">
              {tier?.name} · {user.competitiveRating.toLocaleString("en-US")} RP
            </span>
          </span>
        </Link>
      ) : (
        <a href={STEAM_AUTH_HREF} className="ace-chip-signin" aria-label={copy.connectProfileAria}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></svg>
          <T k="signInSteam" />
        </a>
      )}
      {user ? (
        <form action="/api/auth/logout" method="post">
          <button
            type="submit"
            className="inline-flex min-h-10 items-center rounded-md border border-[#D4AF37]/35 px-3 text-xs uppercase tracking-[0.12em] text-[#A9ABB3]"
            aria-label={copy.signOutAria}
          >
            <T k="signOut" />
          </button>
        </form>
      ) : null}
    </div>
  );
}
