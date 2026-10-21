"use client";

import { useCallback, useEffect, useState } from "react";
import { useAdminI18n } from "@/components/admin-locale";
import { listPlayerReports, resolvePlayerReport } from "@/server/player-reports";
import { ADMIN40_EN, ADMIN40_HE, type Admin40Key } from "@/lib/admin-r40-i18n";
import { interpolate } from "@/lib/interpolate";
import { describeRp, resolveOverrideRp, type OverrideArt, type OverrideTarget } from "@/lib/rank-override";
import { RANK_TIERS, type RankDivision } from "@/lib/ranks";
import { RP_RULES } from "@/lib/rp-rules";
import {
  applyRankOverride,
  exportPlayersCsv,
  loadAuditLog,
  loadPlayerOps,
  resetRankOverride,
  saveAdminNote,
  setBanWithReason,
  setPlayerVerified,
  type AuditEntry,
  type PlayerOps,
} from "@/server/admin-ops";

export function useAdmin40() {
  const { hebrew } = useAdminI18n();
  return useCallback((key: Admin40Key, values?: Record<string, string | number>) => interpolate((hebrew ? ADMIN40_HE : ADMIN40_EN)[key], values), [hebrew]);
}

type Pending = { kind: "apply"; target: OverrideTarget | null; art: OverrideArt; to: string } | { kind: "reset"; to: string };

export function AdminPlayerOps({ playerId, name, banned, onChanged }: { playerId: string; name: string; banned: boolean; onChanged: () => void }) {
  const t = useAdmin40();
  const [ops, setOps] = useState<PlayerOps | null>(null);
  const [mode, setMode] = useState<"division" | "rp">("division");
  const [level, setLevel] = useState(3);
  const [division, setDivision] = useState<RankDivision>("III");
  const [rp, setRp] = useState("");
  const [art, setArt] = useState<OverrideArt>("keep");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [banReason, setBanReason] = useState("");
  const [pending, setPending] = useState<Pending | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const reload = useCallback(() => {
    void loadPlayerOps(playerId).then((o) => {
      setOps(o);
      if (o) setNote(o.note);
    });
  }, [playerId]);
  useEffect(reload, [reload]);

  if (!ops) return <p className="ax-muted">{t("loading")}</p>;

  function prepare() {
    let target: OverrideTarget | null = null;
    if (mode === "rp" && rp.trim()) target = { kind: "rp", rp: Number(rp) };
    if (mode === "division") target = { kind: "division", level, division };
    let to = ops ? describeRp(ops.rp) : "";
    try {
      if (target) to = describeRp(resolveOverrideRp(target));
    } catch {
      setMsg(t("failed", { error: `RP ${RP_RULES.floor}–${RP_RULES.ceiling}` }));
      return;
    }
    if (art !== "keep") to += ` · ${art}`;
    setPending({ kind: "apply", target, art, to });
  }

  async function confirm() {
    if (!pending) return;
    setBusy(true);
    const r = pending.kind === "apply" ? await applyRankOverride(playerId, pending.target, pending.art, reason) : await resetRankOverride(playerId, reason);
    setBusy(false);
    setPending(null);
    setMsg(r.ok ? t("done") : t("failed", { error: r.error }));
    if (r.ok) {
      setReason("");
      reload();
      onChanged();
    }
  }

  return (
    <section className="ax-ops" aria-label={t("opsTitle")}>
      <h3 className="ax-h3">{t("overrideTitle")}</h3>
      <p className="ax-muted">{t("overrideLede")}</p>
      <p className={`ax-pill ${ops.overrideActive ? "is-warn" : ""}`}>{ops.overrideActive ? t("active", { base: ops.baseLabel ?? "" }) : t("none")}</p>
      <div className="ax-seg" role="tablist">
        <button type="button" role="tab" aria-selected={mode === "division"} onClick={() => setMode("division")}>{t("modeDivision")}</button>
        <button type="button" role="tab" aria-selected={mode === "rp"} onClick={() => setMode("rp")}>{t("modeRp")}</button>
      </div>
      {mode === "division" ? (
        <div className="ax-grid2">
          <label>{t("tier")}
            <select value={level} onChange={(e) => setLevel(Number(e.target.value))}>
              {RANK_TIERS.map((tier) => <option key={tier.level} value={tier.level}>{tier.level} · {tier.name} ({tier.crystalName})</option>)}
            </select>
          </label>
          <label>{t("division")}
            <select value={division} onChange={(e) => setDivision(e.target.value as RankDivision)}>
              {(["III", "II", "I"] as const).map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </label>
        </div>
      ) : (
        <label>{t("rp")}
          <input type="number" inputMode="numeric" min={RP_RULES.floor} max={RP_RULES.ceiling} step={1} value={rp} placeholder={String(ops.rp)} onChange={(e) => setRp(e.target.value)} />
        </label>
      )}
      <label>{t("art")}
        <select value={art} onChange={(e) => setArt(e.target.value as OverrideArt)}>
          <option value="keep">{t("artKeep")}</option>
          <option value="auto">{t("artAuto")}</option>
          <option value="standard">{t("artStandard")}</option>
          <option value="premium" disabled={!ops.premiumAllowed}>{t("artPremium")}</option>
        </select>
      </label>
      <label>{t("reason")}
        <input type="text" maxLength={300} value={reason} onChange={(e) => setReason(e.target.value)} />
      </label>
      <div className="ax-row">
        <button type="button" className="ax-btn ax-btn-gold" onClick={prepare}>{t("apply")}</button>
        <button type="button" className="ax-btn" disabled={!ops.overrideActive} onClick={() => setPending({ kind: "reset", to: ops.baseLabel ?? "" })}>{t("reset")}</button>
      </div>
      {msg ? <p className="ax-flash" role="status">{msg}</p> : null}

      <h3 className="ax-h3">{t("verifyTitle")}</h3>
      <p className={`ax-pill ${ops.verified ? "" : "is-warn"}`}>{ops.verified ? t("verifyOn") : ops.verifyEligible ? t("verifyOff") : t("verifyIneligible")}</p>
      <button
        type="button"
        className="ax-btn"
        disabled={!ops.verified && !ops.verifyEligible}
        onClick={() => void setPlayerVerified(playerId, !ops.verified, reason).then((r) => { setMsg(r.ok ? t("done") : t("failed", { error: r.error })); reload(); onChanged(); })}
      >
        {ops.verified ? t("revoke") : t("grant")}
      </button>

      <h3 className="ax-h3">{t("note")}</h3>
      <textarea rows={3} maxLength={2000} value={note} onChange={(e) => setNote(e.target.value)} aria-describedby="ax-note-hint" />
      <p id="ax-note-hint" className="ax-muted">{t("noteHint")}</p>
      <button type="button" className="ax-btn" onClick={() => void saveAdminNote(playerId, note).then((r) => { setMsg(r.ok ? t("done") : t("failed", { error: "denied" })); reload(); })}>{t("saveNote")}</button>

      <h3 className="ax-h3">{banned ? t("unban") : t("ban")}</h3>
      <label>{t("banReason")}
        <input type="text" maxLength={300} value={banReason} onChange={(e) => setBanReason(e.target.value)} />
      </label>
      <button type="button" className={`ax-btn ${banned ? "" : "ax-btn-danger"}`} onClick={() => void setBanWithReason(playerId, !banned, banReason).then((r) => { setMsg(r.ok ? t("done") : t("failed", { error: "denied" })); setBanReason(""); reload(); onChanged(); })}>
        {banned ? t("unban") : t("ban")}
      </button>

      <h3 className="ax-h3">{t("audit")}</h3>
      <AuditList entries={ops.audit} compact />

      {pending ? (
        <div className="ax-confirm" role="alertdialog" aria-modal="true" aria-labelledby="ax-confirm-t">
          <div className="ax-confirm-box">
            <p id="ax-confirm-t" className="ax-h3">{t("confirmTitle")}</p>
            <p>{pending.kind === "apply" ? t("confirmBody", { name, from: describeRp(ops.rp), to: pending.to }) : t("confirmReset", { name, to: pending.to })}</p>
            {reason ? <p className="ax-muted">{t("colReason")}: {reason}</p> : null}
            <div className="ax-row">
              <button type="button" className="ax-btn ax-btn-gold" disabled={busy} onClick={() => void confirm()} autoFocus>{t("confirm")}</button>
              <button type="button" className="ax-btn" onClick={() => setPending(null)}>{t("cancel")}</button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function AuditList({ entries, compact = false }: { entries: AuditEntry[]; compact?: boolean }) {
  const t = useAdmin40();
  const { lang } = useAdminI18n();
  const fmt = new Intl.DateTimeFormat(lang, { dateStyle: "short", timeStyle: "short", timeZone: "Asia/Jerusalem" });
  if (entries.length === 0) return <p className="ax-empty">{t("auditEmpty")}</p>;
  return (
    <div className="ax-table-wrap">
      <table className="ax-table">
        <thead>
          <tr>
            <th scope="col">{t("colWhen")}</th>
            <th scope="col">{t("colWho")}</th>
            <th scope="col">{t("colAction")}</th>
            {compact ? null : <th scope="col">{t("colTarget")}</th>}
            <th scope="col">{t("colChange")}</th>
            <th scope="col">{t("colReason")}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id}>
              <td className="ax-nowrap">{fmt.format(new Date(e.at))}</td>
              <td className="ax-mono">{e.actor}</td>
              <td><span className="ax-tag">{e.action}</span></td>
              {compact ? null : <td>{e.targetName ?? "—"}</td>}
              <td>{e.oldValue ? <><s>{e.oldValue}</s> → </> : null}<b>{e.newValue}</b></td>
              <td>{e.reason || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AdminAuditPanel({ refreshKey }: { refreshKey: number }) {
  const t = useAdmin40();
  const [entries, setEntries] = useState<AuditEntry[] | null>(null);
  useEffect(() => {
    void loadAuditLog(50).then(setEntries);
  }, [refreshKey]);
  return (
    <section id="acx-audit" className="acx-card acx-anchor ax-audit" aria-labelledby="ax-audit-t">
      <h2 id="ax-audit-t" className="acx-section-title">{t("audit")}</h2>
      <p className="acx-muted">{t("auditLede")}</p>
      {entries ? <AuditList entries={entries} /> : <div className="ax-skel" aria-hidden="true"><i /><i /><i /></div>}
    </section>
  );
}

type ReportRow = Awaited<ReturnType<typeof listPlayerReports>>[number];

export function AdminPlayerReports({ onChanged }: { onChanged: () => void }) {
  const t = useAdmin40();
  const [rows, setRows] = useState<ReportRow[] | null>(null);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    void listPlayerReports("open").then(setRows);
  }, [tick]);
  const act = (id: string, outcome: "actioned" | "dismissed") =>
    void resolvePlayerReport(id, outcome).then(() => { setTick((n) => n + 1); onChanged(); });
  return (
    <section id="acx-player-reports" className="acx-card acx-anchor ax-audit" aria-labelledby="ax-pr-t">
      <h2 id="ax-pr-t" className="acx-section-title">{t("playerReports")}</h2>
      <p className="acx-muted">{t("playerReportsLede")}</p>
      {!rows ? <div className="ax-skel" aria-hidden="true"><i /><i /></div> : rows.length === 0 ? <p className="acx-muted">{t("reportsEmpty")}</p> : (
        <ul className="ax-reports">
          {rows.map((r) => (
            <li key={r.id}>
              <div>
                <strong dir="ltr">{r.targetSteamId}</strong> · {r.reason}
                <small> · {t("reportFrom", { name: r.reporter.displayName })} · {new Date(r.createdAt).toISOString().slice(0, 16).replace("T", " ")} UTC</small>
                {r.details ? <p>{r.details}</p> : null}
              </div>
              <span className="ax-row-actions">
                <button type="button" className="ax-btn" onClick={() => act(r.id, "actioned")}>{t("actioned")}</button>
                <button type="button" className="ax-btn ax-ghost" onClick={() => act(r.id, "dismissed")}>{t("dismiss")}</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function CsvExportButton() {
  const t = useAdmin40();
  return (
    <button
      type="button"
      className="ax-btn"
      onClick={() =>
        void exportPlayersCsv().then((csv) => {
          if (!csv) return;
          const url = URL.createObjectURL(new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" }));
          const a = document.createElement("a");
          a.href = url;
          a.download = `ace-players-${new Date().toISOString().slice(0, 10)}.csv`;
          a.click();
          URL.revokeObjectURL(url);
        })
      }
    >
      {t("exportCsv")}
    </button>
  );
}
