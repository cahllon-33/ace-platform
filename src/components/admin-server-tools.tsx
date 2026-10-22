"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { useAdminI18n } from "@/components/admin-locale";
import { SRV48_EN, SRV48_HE, type Srv48Key } from "@/lib/admin-servers-r48-i18n";
import {
  consoleRun, consoleTail, createFolder, deleteFile, listFiles, loadOverview, moveFile, ownerJoinUrl, pluginStatus, power, readTextFile, saveSettings, syncFiles, writeTextFile,
  type Overview, type PluginStatus, type SettingsInput,
} from "@/server/dathost-admin-actions";
import { cancelLobbyAction, createTestLobbyAction, testBotsAction, testLobbiesAction } from "@/server/queue-actions";
import type { FileEntry, SettingsView } from "@/server/dathost";
import type { LobbyView } from "@/server/queue-engine";
import { OpsTab, type OpsTabId } from "@/components/admin-server-ops";
import { useAutoConnect } from "@/components/auto-connect";
import "./admin-server-tools.css";

type Tab = "console" | "settings" | "files" | "plugins" | "usage" | "power" | "test" | OpsTabId;
const TABS: [Tab, Srv48Key][] = [["console", "tabConsole"], ["settings", "tabSettings"], ["files", "tabFiles"], ["plugins", "tabPlugins"], ["usage", "tabUsage"], ["power", "tabPower"], ["test", "tabTest"], ["matches", "tabMatches"], ["moderation", "tabModeration"], ["health", "tabHealth"], ["history", "tabHistory"], ["audit", "tabAudit"]];
const mapLabel = (m: string) => (m === "de_dust2" ? "Dust II" : m.replace(/^de_/, "").replace(/^\w/, (c) => c.toUpperCase()));
const fmtBytes = (n: number) => (n > 1e9 ? `${(n / 1e9).toFixed(2)} GB` : n > 1e6 ? `${(n / 1e6).toFixed(1)} MB` : n > 1e3 ? `${(n / 1e3).toFixed(1)} KB` : `${n} B`);

export function AdminServerTools({ maps, initialTab = "console" }: { maps: string[]; initialTab?: Tab }) {
  const { hebrew, lang } = useAdminI18n();
  const t = useCallback((k: Srv48Key) => (hebrew ? SRV48_HE : SRV48_EN)[k], [hebrew]);
  const [tab, setTab] = useState<Tab>(initialTab);
  const [error, setError] = useState<string | null>(null);
  return (
    <section className="acx-card s48" aria-label="Server control">
      <div className="s48-tabs" role="tablist">
        {TABS.map(([id, k]) => (
          <button key={id} type="button" role="tab" aria-selected={tab === id} className={`s48-tab${tab === id ? " is-on" : ""}`} onClick={() => { setTab(id); setError(null); }} data-tab={id}>{t(k)}</button>
        ))}
      </div>
      {error ? <p className="asv-error" role="alert">{error}</p> : null}
      <div className="s48-body" role="tabpanel">
        {tab === "console" ? <ConsoleTab t={t} maps={maps} onError={setError} /> : null}
        {tab === "settings" ? <SettingsTab t={t} maps={maps} onError={setError} /> : null}
        {tab === "files" ? <FilesTab t={t} onError={setError} /> : null}
        {tab === "plugins" ? <PluginsTab t={t} onError={setError} /> : null}
        {tab === "usage" ? <UsageTab t={t} lang={lang} onError={setError} /> : null}
        {tab === "power" ? <PowerTab t={t} onError={setError} /> : null}
        {tab === "test" ? <TestTab t={t} maps={maps} onError={setError} /> : null}
        {["matches", "moderation", "health", "history", "audit"].includes(tab) ? <OpsTab tab={tab as OpsTabId} t={t} lang={lang} onError={setError} /> : null}
      </div>
    </section>
  );
}

/** Prominent owner "Join server" (overview + console header). Password is fetched server-side on click, never kept. */
export function JoinServerButton({ onError }: { onError?: (e: string | null) => void }) {
  const { hebrew } = useAdminI18n();
  const t = (k: Srv48Key) => (hebrew ? SRV48_HE : SRV48_EN)[k];
  const [url, setUrl] = useState<string | null>(null);
  // Prefetched on mount (owner-only action) so the click is a plain synchronous <a href="steam://..."> navigation.
  useEffect(() => {
    let on = true;
    void ownerJoinUrl().then((r) => { if (!on) return; if (r.ok) setUrl(r.data); else onError?.(r.error); });
    return () => { on = false; };
  }, [onError]);
  return (
    <a className={`acx-btn is-gold s48-joinsrv${url ? "" : " is-wait"}`} href={url ?? undefined} aria-disabled={!url} title={t("joinServerNote")} aria-label={t("joinServerNote")}>
      <span aria-hidden="true">▶</span> {t("joinServer")}
    </a>
  );
}

type P = { t: (k: Srv48Key) => string; onError: (e: string | null) => void };

function ConsoleTab({ t, maps, onError }: P & { maps: string[] }) {
  const [lines, setLines] = useState<string[]>([]);
  const [live, setLive] = useState(true);
  const [cmd, setCmd] = useState("");
  const [map, setMap] = useState(maps[0]);
  const [pending, start] = useTransition();
  const ref = useRef<HTMLPreElement>(null);
  const stick = useRef(true);
  useEffect(() => {
    let on = true;
    const pull = async () => { const r = await consoleTail(300); if (!on) return; if (r.ok) setLines(r.data); else onError(r.error); };
    void pull();
    if (!live) return () => { on = false; };
    const i = setInterval(() => { if (!document.hidden) void pull(); }, 2000);
    return () => { on = false; clearInterval(i); };
  }, [live, onError]);
  useEffect(() => { if (ref.current && stick.current) ref.current.scrollTop = ref.current.scrollHeight; }, [lines]);
  const run = (line: string) => start(async () => { const r = await consoleRun(line); if (r.ok) { setLines(r.data); onError(null); } else onError(r.error); });
  const quick: [Srv48Key, string][] = [["qBotT", "bot_add_t"], ["qBotCt", "bot_add_ct"], ["qKick", "bot_kick"], ["qWarm", "mp_warmup_end"], ["qRestart", "mp_restartgame 1"], ["qPause", "mp_pause_match"], ["qUnpause", "mp_unpause_match"], ["qStatus", "status"]];
  return (
    <div className="s48-console">
      <div className="s48-row">
        <span className={`s48-live${live ? " is-on" : ""}`}><span aria-hidden="true" />{live ? t("live") : t("paused")}</span>
        <button type="button" className="acx-btn" onClick={() => setLive((v) => !v)}>{live ? t("pause") : t("resume")}</button>
        <JoinServerButton onError={onError} />
      </div>
      <pre ref={ref} className="asv-log s48-log" tabIndex={0} onScroll={(e) => { const el = e.currentTarget; stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 40; }}>{lines.join("\n") || "—"}</pre>
      <form className="asv-cmd" onSubmit={(e) => { e.preventDefault(); if (cmd.trim()) { run(cmd); setCmd(""); } }}>
        <span aria-hidden="true">›</span>
        <input value={cmd} onChange={(e) => setCmd(e.target.value)} placeholder={t("cmdPh")} maxLength={500} spellCheck={false} autoComplete="off" aria-label={t("cmdPh")} />
        <button type="submit" className="acx-btn is-gold" disabled={pending || !cmd.trim()}>{t("run")}</button>
      </form>
      <p className="acx-card-title">{t("quick")}</p>
      <div className="s48-quick">
        {quick.map(([k, line]) => <button key={line} type="button" className="acx-btn" disabled={pending} onClick={() => run(line)} title={line}>{t(k)} <code>{line}</code></button>)}
      </div>
      <div className="s48-row">
        <select className="s48-input" value={map} onChange={(e) => setMap(e.target.value)} aria-label={t("qChange")}>{maps.map((m) => <option key={m} value={m}>{mapLabel(m)}</option>)}</select>
        <button type="button" className="acx-btn is-gold" disabled={pending} onClick={() => run(`changelevel ${map}`)}>{t("qChange")} <code>changelevel {map}</code></button>
      </div>
    </div>
  );
}

function SettingsTab({ t, maps, onError }: P & { maps: string[] }) {
  const [s, setS] = useState<SettingsView | null>(null);
  const [draft, setDraft] = useState<SettingsInput>({});
  const [pending, start] = useTransition();
  const [ok, setOk] = useState(false);
  useEffect(() => { void loadOverview().then((r) => (r.ok ? setS(r.data.settings) : onError(r.error))); }, [onError]);
  if (!s) return <p className="acx-muted">…</p>;
  const v = <K extends keyof SettingsInput>(k: K, fallback: SettingsInput[K]) => (draft[k] !== undefined ? draft[k] : fallback);
  const set = (patch: SettingsInput) => { setOk(false); setDraft((d) => ({ ...d, ...patch })); };
  const check = (k: keyof SettingsInput, cur: boolean, label: Srv48Key) => (
    <label className="s48-check"><input type="checkbox" checked={!!v(k, cur as never)} onChange={(e) => set({ [k]: e.target.checked } as SettingsInput)} /> {t(label)}</label>
  );
  const secret = (k: "password" | "rcon" | "gslt", isSet: boolean, label: Srv48Key, clearKey?: "clearPassword" | "clearGslt") => (
    <label className="s48-field">
      <span>{t(label)} <em className={`asv-pill${isSet ? " is-ok" : ""}`}>{isSet ? t("isSet") : t("notSet")}</em></span>
      <input className="s48-input" type="password" autoComplete="new-password" value={(draft[k] as string) ?? ""} onChange={(e) => set({ [k]: e.target.value } as SettingsInput)} />
      {clearKey && isSet ? <label className="s48-check"><input type="checkbox" checked={!!draft[clearKey]} onChange={(e) => set({ [clearKey]: e.target.checked } as SettingsInput)} /> {t("clear")}</label> : null}
    </label>
  );
  const save = () => start(async () => {
    const r = await saveSettings(draft);
    if (r.ok) { setS(r.data); setDraft({}); setOk(true); onError(null); } else onError(r.error);
  });
  return (
    <form className="s48-settings" onSubmit={(e) => { e.preventDefault(); save(); }}>
      <fieldset><legend>{t("general")}</legend>
        <label className="s48-field"><span>{t("name")}</span><input className="s48-input" value={v("name", s.name) ?? ""} onChange={(e) => set({ name: e.target.value })} /></label>
        <label className="s48-field"><span>{t("location")}</span><input className="s48-input" value={s.location} readOnly /></label>
        <label className="s48-field"><span>{t("slots")}</span><input className="s48-input" type="number" min={5} max={64} value={v("slots", s.slots) ?? 0} onChange={(e) => set({ slots: Number(e.target.value) })} /></label>
        <label className="s48-field"><span>{t("gameMode")}</span>
          <select className="s48-input" value={v("gameMode", s.gameMode)} onChange={(e) => set({ gameMode: e.target.value })}>
            {["competitive", "casual", "wingman", "arms_race", "ffa_deathmatch", "retakes", "rush", "custom"].map((m) => <option key={m} value={m}>{m}</option>)}
          </select></label>
      </fieldset>
      <fieldset><legend>{t("maps")}</legend>
        <label className="s48-field"><span>{t("mapsSource")}</span>
          <select className="s48-input" value={v("mapsSource", s.mapsSource)} onChange={(e) => set({ mapsSource: e.target.value })}>
            {["mapgroup", "workshop_collection", "workshop_single_map"].map((m) => <option key={m} value={m}>{m}</option>)}
          </select></label>
        <label className="s48-field"><span>{t("mapgroup")}</span><input className="s48-input" value={v("mapgroup", s.mapgroup) ?? ""} onChange={(e) => set({ mapgroup: e.target.value })} placeholder="mg_active" /></label>
        <label className="s48-field"><span>{t("startMap")}</span>
          <input className="s48-input" list="s48-maps" value={v("startMap", s.startMap) ?? ""} onChange={(e) => set({ startMap: e.target.value })} />
          <datalist id="s48-maps">{maps.map((m) => <option key={m} value={m} />)}</datalist></label>
        <label className="s48-field"><span>{t("wsCollection")}</span><input className="s48-input" inputMode="numeric" value={v("workshopCollectionId", s.workshopCollectionId) ?? ""} onChange={(e) => set({ workshopCollectionId: e.target.value })} /></label>
        <label className="s48-field"><span>{t("wsSingle")}</span><input className="s48-input" inputMode="numeric" value={v("workshopSingleMapId", s.workshopSingleMapId) ?? ""} onChange={(e) => set({ workshopSingleMapId: e.target.value })} /></label>
      </fieldset>
      <fieldset><legend>{t("gameplay")}</legend>
        {check("disableBots", s.disableBots, "disableBots")}{check("gotv", s.gotv, "gotv")}{check("privateServer", s.privateServer, "privateServer")}
        {check("insecure", s.insecure, "insecure")}{check("metamod", s.metamod, "metamod")}
        <p className="acx-muted">{t("tickNote")}</p>
      </fieldset>
      <fieldset><legend>{t("automation")}</legend>
        {check("autostop", s.autostop, "autostop")}
        <label className="s48-field"><span>{t("autostopMin")}</span><input className="s48-input" type="number" min={1} max={1440} value={v("autostopMinutes", s.autostopMinutes) ?? 0} onChange={(e) => set({ autostopMinutes: Number(e.target.value) })} /></label>
        {check("rebootOnCrash", s.rebootOnCrash, "rebootOnCrash")}
      </fieldset>
      <fieldset><legend>{t("secrets")}</legend>
        <p className="acx-muted">{t("secretsNote")}</p>
        {secret("password", s.passwordSet, "password", "clearPassword")}
        {secret("rcon", s.rconSet, "rcon")}
        {secret("gslt", s.gsltSet, "gslt", "clearGslt")}
        <label className="s48-field"><span>{t("gotvPw")}</span><input className="s48-input" type="password" autoComplete="new-password" value={draft.gotvPassword ?? ""} onChange={(e) => set({ gotvPassword: e.target.value })} /></label>
      </fieldset>
      <div className="s48-row"><button type="submit" className="acx-btn is-gold" disabled={pending || Object.keys(draft).length === 0}>{t("save")}</button>{ok ? <span className="asv-pill is-ok">{t("saved")}</span> : null}</div>
    </form>
  );
}

function FilesTab({ t, onError }: P) {
  const [dir, setDir] = useState("");
  const [rows, setRows] = useState<FileEntry[] | null>(null);
  const [editing, setEditing] = useState<{ path: string; text: string } | null>(null);
  const [folder, setFolder] = useState("");
  const [del, setDel] = useState<{ path: string; typed: string } | null>(null);
  const [pending, start] = useTransition();
  const load = useCallback((d: string) => start(async () => { const r = await listFiles(d); if (r.ok) { setRows(r.data); setDir(d); onError(null); } else onError(r.error); }), [onError]);
  useEffect(() => { load(""); }, [load]);
  const rel = (p: string) => p.startsWith(dir) ? p.slice(dir.length) : p;
  const parent = dir.replace(/[^/]+\/$/, "");
  const upload = async (file: File) => {
    const fd = new FormData(); fd.append("dir", dir); fd.append("file", file);
    const res = await fetch("/api/admin/dathost/file", { method: "POST", body: fd });
    const j = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!j.ok) onError(j.error ?? "upload-failed"); else load(dir);
  };
  return (
    <div className="s48-files">
      <div className="s48-row s48-crumbs">
        <button type="button" className="acx-btn" onClick={() => load("")}>{t("root")}</button>
        {dir ? <button type="button" className="acx-btn" onClick={() => load(parent)}>↑ {t("up")}</button> : null}
        <code className="s48-path">/{dir}</code>
        <button type="button" className="acx-btn" disabled={pending} onClick={() => start(async () => { const r = await syncFiles(); if (!r.ok) onError(r.error); else load(dir); })}>{t("sync")}</button>
      </div>
      <div className="s48-row">
        <input className="s48-input" value={folder} placeholder={t("folderPh")} onChange={(e) => setFolder(e.target.value)} aria-label={t("newFolder")} />
        <button type="button" className="acx-btn" disabled={pending || !folder.trim()} onClick={() => start(async () => { const r = await createFolder(dir + folder.trim()); if (r.ok) { setFolder(""); load(dir); } else onError(r.error); })}>{t("newFolder")}</button>
        <label className="acx-btn is-gold s48-upload">{t("upload")}<input type="file" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) void upload(f); e.target.value = ""; }} /></label>
      </div>
      {rows && rows.length === 0 ? <p className="acx-muted">{t("empty")}</p> : null}
      <ul className="s48-list">
        {(rows ?? []).filter((r) => r.path !== dir).map((r) => {
          const isDir = r.path.endsWith("/");
          return (
            <li key={r.path}>
              {isDir ? <button type="button" className="s48-link" onClick={() => load(r.path)}>📁 {rel(r.path)}</button> : <span className="s48-fname">{rel(r.path)}</span>}
              <span className="acx-muted">{isDir ? "" : fmtBytes(r.size)}</span>
              <span className="s48-ops">
                {!isDir ? <button type="button" className="acx-btn" onClick={() => start(async () => { const x = await readTextFile(r.path); if (x.ok) setEditing({ path: r.path, text: x.data }); else onError(x.error); })}>{t("open")}</button> : null}
                {!isDir ? <a className="acx-btn" href={`/api/admin/dathost/file?path=${encodeURIComponent(r.path)}`}>{t("download")}</a> : null}
                <button type="button" className="acx-btn" onClick={() => { const to = window.prompt(t("movePrompt"), r.path); if (to && to !== r.path) start(async () => { const x = await moveFile(r.path, to); if (x.ok) load(dir); else onError(x.error); }); }}>{t("rename")}</button>
                <button type="button" className="acx-btn is-danger" onClick={() => setDel({ path: r.path, typed: "" })}>{t("del")}</button>
              </span>
            </li>
          );
        })}
      </ul>
      {editing ? (
        <div className="s48-editor">
          <p className="acx-card-title"><code>{editing.path}</code></p>
          <textarea className="s48-text" value={editing.text} spellCheck={false} onChange={(e) => setEditing({ ...editing, text: e.target.value })} />
          <div className="s48-row">
            <button type="button" className="acx-btn is-gold" disabled={pending} onClick={() => start(async () => { const x = await writeTextFile(editing.path, editing.text); if (x.ok) { setEditing(null); load(dir); } else onError(x.error); })}>{t("saveFile")}</button>
            <button type="button" className="acx-btn" onClick={() => setEditing(null)}>{t("closeEditor")}</button>
          </div>
        </div>
      ) : null}
      {del ? (
        <div className="s48-modal" role="alertdialog" aria-modal="true" aria-labelledby="s48-del-title">
          <div className="acx-card s48-modal-card">
            <p id="s48-del-title" className="acx-card-title">{t("confirmDelete")}</p>
            <code className="s48-path">{del.path}</code>
            <label className="s48-field"><span>{t("confirmDeleteType")}</span><input className="s48-input" value={del.typed} onChange={(e) => setDel({ ...del, typed: e.target.value })} autoFocus /></label>
            <div className="s48-row">
              <button type="button" className="acx-btn is-danger" disabled={pending || del.typed !== del.path} onClick={() => start(async () => { const x = await deleteFile(del.path, del.typed); setDel(null); if (x.ok) load(dir); else onError(x.error); })}>{t("del")}</button>
              <button type="button" className="acx-btn" onClick={() => setDel(null)}>{t("closeEditor")}</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PluginsTab({ t, onError }: P) {
  const [p, setP] = useState<PluginStatus | null>(null);
  useEffect(() => { void pluginStatus().then((r) => (r.ok ? setP(r.data) : onError(r.error))); }, [onError]);
  if (!p) return <p className="acx-muted">…</p>;
  const row = (k: Srv48Key, v: boolean) => <li><span>{t(k)}</span><span className={`asv-pill${v ? " is-ok" : ""}`}>{v ? t("yes") : t("no")}</span></li>;
  return (
    <div>
      <p className="acx-card-title">{t("pluginsTitle")}</p>
      <ul className="s48-kv">{row("mmEnabled", p.metamodEnabled)}{row("mmFiles", p.metamodFiles)}{row("cssFiles", p.css)}{row("ace", p.aceBridge)}{row("aceCfg", p.aceBridgeConfig)}</ul>
      <p className="acx-card-title">{t("installed")}</p>
      <ul className="s48-tags">{p.plugins.length ? p.plugins.map((x) => <li key={x}><code>{x}</code></li>) : <li className="acx-muted">—</li>}</ul>
    </div>
  );
}

function Spark({ pts, fmt }: { pts: { t: number; v: number }[]; fmt: (n: number) => string }) {
  if (pts.length < 2) return null;
  const max = Math.max(1, ...pts.map((p) => p.v));
  const d = pts.map((p, i) => `${(i / (pts.length - 1)) * 100},${30 - (p.v / max) * 28}`).join(" ");
  return <figure className="s48-spark"><svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><polyline points={d} /></svg><figcaption>max {fmt(max)}</figcaption></figure>;
}

function UsageTab({ t, lang, onError }: P & { lang: string }) {
  const [o, setO] = useState<Overview | null>(null);
  useEffect(() => { void loadOverview().then((r) => (r.ok ? setO(r.data) : onError(r.error))); }, [onError]);
  if (!o) return <p className="acx-muted">…</p>;
  const s = o.settings;
  const date = (u: number | null) => (u ? new Date(u * 1000).toLocaleString(lang) : "—");
  return (
    <div>
      <dl className="asv-stats s48-usage">
        <div><dt>{t("uptime")}</dt><dd>{date(s.createdAt)}</dd></div>
        <div><dt>{t("renews")}</dt><dd>{date(s.renewsAt)}</dd></div>
        <div><dt>{t("subscription")}</dt><dd>{s.subscription || "—"}</dd></div>
        <div><dt>{t("disk")}</dt><dd>{fmtBytes(s.diskUsedBytes)} / {s.diskMaxGb} GB</dd></div>
        <div><dt>{t("cost")}</dt><dd>{s.costPerHour != null ? `€${s.costPerHour.toFixed(3)}` : "—"}</dd></div>
        <div><dt>GOTV</dt><dd>{o.gotvPort ? `:${o.gotvPort}` : "—"}</dd></div>
      </dl>
      {s.maintenance ? <p className="asv-note">{t("maintenance")}</p> : null}
      <p className="acx-card-title">{t("playersGraph")}</p>
      {o.metrics.players.length > 1 ? <Spark pts={o.metrics.players} fmt={(n) => String(n)} /> : <p className="acx-muted">{t("noData")}</p>}
      <p className="acx-card-title">{t("memGraph")}</p>
      {o.metrics.memory.length > 1 ? <Spark pts={o.metrics.memory} fmt={fmtBytes} /> : <p className="acx-muted">{t("noData")}</p>}
    </div>
  );
}

function PowerTab({ t, onError }: P) {
  const [name, setName] = useState("");
  const [pending, start] = useTransition();
  const [o, setO] = useState<Overview | null>(null);
  useEffect(() => { void loadOverview().then((r) => (r.ok ? setO(r.data) : onError(r.error))); }, [onError]);
  const go = (k: "start" | "stop" | "restart" | "reinstall") => start(async () => { const r = await power(k, name); if (!r.ok) onError(r.error); else { onError(null); setName(""); } });
  return (
    <div className="s48-power">
      <fieldset className="s48-danger"><legend>{t("reinstall")}</legend>
        <p className="acx-muted">{t("reinstallNote")}</p>
        <code className="s48-path">{o?.settings.name ?? "…"}</code>
        <div className="s48-row">
          <input className="s48-input" value={name} onChange={(e) => setName(e.target.value)} aria-label={t("reinstall")} />
          <button type="button" className="acx-btn is-danger" disabled={pending || !o || name !== o.settings.name} onClick={() => window.confirm(t("reinstallNote")) && go("reinstall")}>{t("reinstallBtn")}</button>
        </div>
      </fieldset>
      <fieldset><legend>{t("backups")}</legend><p className="acx-muted">{t("backupsNote")}</p></fieldset>
    </div>
  );
}

function TestTab({ t, maps, onError }: P & { maps: string[] }) {
  const [flow, setFlow] = useState<"full" | "direct">("full");
  const [map, setMap] = useState(maps[0]);
  const [extra, setExtra] = useState("");
  const [bots, setBots] = useState(9);
  const [lobbies, setLobbies] = useState<LobbyView[]>([]);
  const [pending, start] = useTransition();
  const mine = lobbies.find((l) => l.isTest && l.state === "LIVE" && l.connectUrl);
  const auto = useAutoConnect(mine?.id ?? null, mine?.connectUrl ?? null);
  const apply = useCallback((r: Awaited<ReturnType<typeof testLobbiesAction>>) => (r.ok ? (setLobbies(r.lobbies), onError(null)) : onError(r.error)), [onError]);
  useEffect(() => {
    void testLobbiesAction().then(apply);
    const i = setInterval(() => void testLobbiesAction().then(apply), 4000);
    return () => clearInterval(i);
  }, [apply]);
  return (
    <div className="s48-test">
      <p className="acx-card-title">{t("testTitle")}</p>
      <p className="acx-muted">{t("testLede")}</p>
      <p className="asv-note">{t("auto")}</p>
      <div className="s48-row" role="radiogroup">
        <label className="s48-check"><input type="radio" checked={flow === "full"} onChange={() => setFlow("full")} /> {t("testFlowFull")}</label>
        <label className="s48-check"><input type="radio" checked={flow === "direct"} onChange={() => setFlow("direct")} /> {t("testFlowDirect")}</label>
        {flow === "direct" ? <select className="s48-input" value={map} onChange={(e) => setMap(e.target.value)}>{maps.map((m) => <option key={m} value={m}>{mapLabel(m)}</option>)}</select> : null}
      </div>
      <label className="s48-field"><span>{t("testExtra")}</span><input className="s48-input" value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="7656119…" /></label>
      <div className="s48-row">
        <button type="button" className="acx-btn is-gold" disabled={pending} onClick={() => start(async () => apply(await createTestLobbyAction({ flow, map, extraSteamIds: extra })))}>{t("testCreate")}</button>
        <a className="acx-btn" href="/play">{t("open2")}</a>
      </div>
      <div className="s48-row">
        <label className="s48-field s48-inline"><span>{t("testBotsN")}</span><input className="s48-input" type="number" min={0} max={9} value={bots} onChange={(e) => setBots(Number(e.target.value))} /></label>
        <button type="button" className="acx-btn" disabled={pending} onClick={() => start(async () => apply(await testBotsAction(bots)))}>{t("testBots")}</button>
      </div>
      {mine?.connectUrl ? (
        <div className="s48-join">
          {auto === "launching" ? <p className="asv-note" role="status">{t("autoConnect")}</p> : null}
          <a className="acx-btn is-gold s48-join-btn" href={mine.connectUrl}>{t("joinMatch")}</a>
          {auto === "hint" ? <p className="acx-muted">{t("autoHint")}</p> : null}
        </div>
      ) : null}
      <p className="acx-card-title">{t("lobbies")}</p>
      {lobbies.length === 0 ? <p className="acx-muted">{t("noLobbies")}</p> : (
        <ul className="s48-list">
          {lobbies.map((l) => (
            <li key={l.id}>
              <span className={`asv-pill${l.state === "LIVE" ? " is-ok" : ""}`}>{l.state}</span>
              <span>{l.isTest ? "TEST" : "RANKED"} · {l.map ? mapLabel(l.map) : "—"} · {l.players.length}p</span>
              <span className="acx-muted">{l.error}</span>
              {["READY", "VETO", "LAUNCHING", "LIVE"].includes(l.state) ? <button type="button" className="acx-btn is-danger" disabled={pending} onClick={() => window.confirm(t("cancelLobby")) && start(async () => apply(await cancelLobbyAction(l.id)))}>{t("cancelLobby")}</button> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
