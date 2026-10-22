import { interpolate } from "@/lib/interpolate";
import { getLocaleId, getUi } from "@/server/locale";
import { readPaddleConfig } from "@/server/paddle";

type U = { subscriptionTier: string; subscriptionStatus: string; subscriptionExpiresAt: Date | null; paddleCustomerId: string | null };

/** R49 account: Paddle subscription state + "Manage subscription" (Paddle customer portal). No fake states. */
export async function MembershipManage({ user }: { user: U }) {
  const [ui, locale] = await Promise.all([getUi(), getLocaleId()]);
  const t = ui.r49;
  const date = user.subscriptionExpiresAt ? user.subscriptionExpiresAt.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" }) : null;
  const status = user.subscriptionStatus;
  const line =
    status === "past_due" ? t.pastDue
      : status === "canceled" || status === "expired" ? t.canceled
        : date && user.subscriptionTier !== "FREE" ? interpolate(t.renews, { date })
          : null;
  const canManage = !!user.paddleCustomerId && !!readPaddleConfig();
  return (
    <section className="ms49" aria-labelledby="ms49-t" data-membership={status || "none"}>
      <h2 id="ms49-t" className="ms49-t">{t.planTitle}</h2>
      {line ? <p className={`ms49-line${status === "past_due" ? " is-warn" : ""}`}>{line}</p> : null}
      {canManage ? (
        <>
          <a className="ms49-btn" href="/api/paddle/portal" rel="nofollow">{t.manage}</a>
          <p className="ms49-note">{t.manageNote}</p>
        </>
      ) : (
        <a className="ms49-btn is-ghost" href="/pricing">{t.seePlans}</a>
      )}
    </section>
  );
}
