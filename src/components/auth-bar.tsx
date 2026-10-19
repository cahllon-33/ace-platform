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
  const level = user ? rankLevelFromRp(user.competitiveRating) : null;
  const label = user?.displayName ?? null;
  const initial = user?.displayName?.trim().charAt(0).toUpperCase() ?? "P";

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <AuthToastWatcher name={label} />
      <HubSearch />
      {isOwner ? (
        <Link href="/admin/dashboard" prefetch={false} className="ace-admin-navlink no-underline">
          Admin
        </Link>
      ) : null}
      {hasEliteSeal(user?.subscriptionTier) ? (
        <span className="inline-flex items-center gap-2" title={copy.elite}>
          <EliteSeal className="h-9 w-auto" />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] text-[#FFD700]">{copy.elite}</span>
        </span>
      ) : null}
      <span className="ace-util-frame" title={copy.notificationsTitle} aria-label={copy.notificationsAria}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 16V10a6 6 0 1 1 12 0v6l1.5 2H4.5L6 16Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
        <span className="ace-util-count">0</span>
        <span className="sr-only"><T k="notifications" /></span>
      </span>
      <Link
        href={user ? "/dashboard" : STEAM_AUTH_HREF}
        prefetch={false}
        className="ace-level-chip no-underline"
        title={user && label ? label : copy.connectProfileTitle}
        aria-label={user ? copy.openProfileAria : copy.connectProfileAria}
      >
        <span className="ace-level-ring" aria-hidden="true">
          {initial}
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[0.6rem] uppercase tracking-[0.14em] text-[#D4AF37]">
            {level ? <T k="levelLabel" values={{ level }} /> : <T k="levelEmpty" />}
          </span>
          <span className="max-w-[9rem] truncate text-xs text-[#F5F3EC]">
            {label ?? <T k="connectProfile" />}
          </span>
        </span>
      </Link>
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
