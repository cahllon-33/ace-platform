import type { VerifyTier } from "@/lib/verification";
import "./verified-mark.css";

const STOPS: Record<VerifyTier, [string, string, string]> = {
  free: ["#F2F3F5", "#B9BDC4", "#6E737B"],
  plus: ["#FFFFFF", "#CFE3EE", "#7E9BB0"],
  premium: ["#FFF3C4", "#FFD76A", "#9C6F12"],
};

/**
 * Original A.C.E verified mark: a heater shield with a raised "A" apex chevron and a check cut through it.
 * Silver (Free), platinum (Plus), animated gold (Premium). Decorative finish only — verification itself is
 * Steam linked + good standing + operator review (see lib/verification).
 */
export function VerifiedMark({ tier, label, size = 18 }: { tier: VerifyTier; label: string; size?: number }) {
  const [a, b, c] = STOPS[tier];
  const id = `acev-${tier}`;
  return (
    <span className={`acev acev-${tier}`} title={label} role="img" aria-label={label} style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={a} />
            <stop offset="0.5" stopColor={b} />
            <stop offset="1" stopColor={c} />
          </linearGradient>
        </defs>
        <path d="M12 1.6 L20.6 5 V11.2 C20.6 16.6 16.9 20.4 12 22.6 C7.1 20.4 3.4 16.6 3.4 11.2 V5 Z" fill={`url(#${id}-g)`} stroke="rgba(0,0,0,.55)" strokeWidth="0.9" />
        <path d="M8.2 6.9 L12 4.4 L15.8 6.9" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.6 12.4 L10.7 15.4 L16.6 9.2" fill="none" stroke="#08090D" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {tier === "premium" ? <span className="acev-shine" aria-hidden="true" /> : null}
    </span>
  );
}
