"use client";

import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAdminI18n } from "@/components/admin-locale";
import { unlockAdminGate } from "@/server/admin-gate";
import "./admin-command.css";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function AdminGate() {
  const router = useRouter();
  const { t, dir, lang } = useAdminI18n();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [denied, setDenied] = useState(false);
  const [missing, setMissing] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const hydrated = useHydrated();

  const panel = (
    <div className={`ace-admin-gate${unlocking ? " is-unlock" : ""}`} dir={dir} lang={lang}>
      <form
        className="ace-admin-gate-card"
        onSubmit={(event) => {
          event.preventDefault();
          if (unlocking) return;
          setDenied(false);
          setMissing(false);
          void unlockAdminGate(username, password).then((result) => {
            if (result === "ok") {
              setUnlocking(true);
              window.setTimeout(() => router.refresh(), 900);
              return;
            }
            if (result === "unconfigured") {
              setMissing(true);
              return;
            }
            setDenied(true);
          });
        }}
      >
        <p className="ace-admin-kicker">{t("gateKicker")}</p>
        <h1 className="ace-admin-title">{t("gateTitle")}</h1>
        <label className="ace-admin-label" htmlFor="ace-admin-user">
          {t("gateUser")}
        </label>
        <input
          id="ace-admin-user"
          className="ace-admin-input"
          name="username"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          suppressHydrationWarning
          required
        />
        <label className="ace-admin-label" htmlFor="ace-admin-pass">
          {t("gatePass")}
        </label>
        <input
          id="ace-admin-pass"
          className="ace-admin-input"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          suppressHydrationWarning
          required
        />
        <button type="submit" className="ace-admin-gold" disabled={unlocking} suppressHydrationWarning>
          {t("gateSubmit")}
        </button>
        {denied ? <p className="ace-admin-denied">{t("gateDenied")}</p> : null}
        {missing ? <p className="ace-admin-denied">{t("gateMissing")}</p> : null}
      </form>
    </div>
  );

  if (hydrated) return createPortal(panel, document.body);
  return panel;
}
