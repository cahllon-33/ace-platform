"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { RankOrb } from "@/components/rank-orb";
import { useAdmin40 } from "@/components/admin-ops";
import { applyRankOverride } from "@/server/admin-ops";
import { RANK_TIERS, type RankDivision } from "@/lib/ranks";
import { rankProgress } from "@/lib/rank-progress";
import { divisionFloorRp } from "@/lib/rank-override";
import { PRESTIGE_LEVELS, prestigeBadge, prestigeForRp } from "@/lib/prestige";
import { RP_RULES } from "@/lib/rp-rules";
import "./admin-set-rank.css";

const DIVS: RankDivision[] = ["III", "II", "I"];

/**
 * R43 admin "Set Rank & RP" modal. Pick a tier/division or prestige badge (sets RP to its threshold) or type
 * an exact RP; tier, division and prestige are derived live. Saves through applyRankOverride (admin-gated,
 * audited as rank.override; "reset to calculated" in the player drawer restores the engine value).
 */
export function AdminSetRankModal({ player, onClose }: { player: { id: string; name: string; rating: number; plan: "Free" | "Plus" | "Premium" }; onClose: () => void }) {
  const t = useAdmin40();
  const router = useRouter();
  const [rpText, setRpText] = useState(String(player.rating));
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const min = RP_RULES.floor;
  const max = RP_RULES.ceiling;
  const rp = Number(rpText);
  const valid = rpText.trim() !== "" && Number.isInteger(rp) && rp >= min && rp <= max;
  const prog = rankProgress(valid ? rp : player.rating);
  const pr = valid ? prestigeForRp(rp) : null;
  const badge = valid ? prestigeBadge(rp, player.plan.toUpperCase()) : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.documentElement.style.overflow = prev; };
  }, [onClose]);

  const save = async () => {
    if (!valid || busy) return;
    setBusy(true);
    setMsg(null);
    const res = await applyRankOverride(player.id, { kind: "rp", rp }, "keep", reason);
    setBusy(false);
    if (res.ok) { router.refresh(); onClose(); } else setMsg(t("failed", { error: res.error }));
  };

  return createPortal(
    <div className="asr-scrim" onClick={onClose}>
      <div className="asr" role="dialog" aria-modal="true" aria-labelledby="asr-title" onClick={(e) => e.stopPropagation()}>
        <header className="asr-head">
          <div>
            <p className="asr-kicker">{player.name}</p>
            <h2 id="asr-title">{t("srTitle")}</h2>
            <p className="asr-lede">{t("srLede")}</p>
          </div>
          <button type="button" className="asr-x" aria-label={t("cancel")} onClick={onClose}>×</button>
        </header>
        <div className="asr-body">
          <section className="asr-picker" aria-label={t("srPick")}>
            <p className="asr-label">{t("srPick")}</p>
            <ul className="asr-tiers">
              {RANK_TIERS.map((tier) => (
                <li key={tier.level} className={valid && prog.tier.level === tier.level && !pr ? "is-on" : undefined}>
                  <RankOrb level={tier.level} size={40} label={tier.name} />
                  <span className="asr-tname">{tier.name}</span>
                  <span className="asr-divs">
                    {DIVS.map((d) => {
                      const v = divisionFloorRp(tier.level, d);
                      const on = valid && prog.tier.level === tier.level && prog.division === d && !pr;
                      return (
                        <button key={d} type="button" className={on ? "is-on" : undefined} title={t("srFrom", { rp: v })} onClick={() => setRpText(String(v))}>
                          {d}
                        </button>
                      );
                    })}
                  </span>
                </li>
              ))}
            </ul>
            <p className="asr-label">{t("srPrestige")}</p>
            <ul className="asr-prestige">
              {PRESTIGE_LEVELS.map((p) => (
                <li key={p.slug}>
                  <button type="button" className={pr?.level === p.level ? "is-on" : undefined} onClick={() => setRpText(String(p.minRp))}>
                    <RankOrb level={10} size={56} label={p.name} prestige={{ level: p.level, set: player.plan === "Plus" ? "plus" : "premium", name: p.name, slug: p.slug }} />
                    <strong>{p.name.replace("A.C.E. ", "")}</strong>
                    <small>{p.minRp.toLocaleString("en-US")}</small>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <aside className="asr-side">
            <div className="asr-preview">
              <RankOrb level={prog.tier.level} size={128} label={prog.tier.name} prestige={badge} />
            </div>
            <p className="asr-result-label">{t("srResult")}</p>
            <p className="asr-result">{prog.tier.name} {prog.division}</p>
            <p className="asr-result-sub">{pr ? pr.name : t("srNoPrestige")}</p>
            {pr && player.plan === "Free" ? <p className="asr-note">{t("srFreeNote")}</p> : null}
            <label className="asr-field">
              <span>{t("srRp", { min, max: max.toLocaleString("en-US") })}</span>
              <input type="number" inputMode="numeric" min={min} max={max} step={1} value={rpText} onChange={(e) => setRpText(e.target.value)} aria-invalid={!valid} />
            </label>
            {!valid ? <p className="asr-err">{t("srInvalid", { min, max })}</p> : null}
            <label className="asr-field">
              <span>{t("reason")}</span>
              <textarea maxLength={300} value={reason} onChange={(e) => setReason(e.target.value)} rows={2} />
            </label>
            {msg ? <p className="asr-err">{msg}</p> : null}
            <div className="asr-actions">
              <button type="button" className="asr-cancel" onClick={onClose}>{t("cancel")}</button>
              <button type="button" className="asr-save" disabled={!valid || busy || rp === player.rating} onClick={() => void save()}>
                {busy ? t("srSaving") : t("srSave")}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>,
    document.body,
  );
}
