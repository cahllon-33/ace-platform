"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { ComingSoonPlate } from "@/components/coming-soon-plate";
import { useUi } from "@/components/use-ui";

const TAGS = [
  { key: "chipIdentity", status: "statusOpenId", d: "M12 3 4.5 7v5c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V7L12 3Z" },
  { key: "chipAntiCheat", status: "statusNotConnected", d: "M4 12h3l2-5 3 10 2-5h6" },
  { key: "chipCalibration", status: "statusWrittenRule", d: "M4 16V8m5 10V6m5 12V9m5 9V4" },
  { key: "chipLeagues", status: "statusTeamLayout", d: "M6 4h12v4H6V4Zm2 4v4h8V8M8 20h8m-4-8v8" },
  { key: "chipCommunity", status: "statusPublicSite", d: "M8 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19c.8-2 2.6-3 4-3s3.2 1 4 3m4 0c.8-2 2.6-3 4-3s3.2 1 4 3" },
] as const;

const LOBBY_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAAEAAQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALqAA//Z";

export function HeroArena({ actions }: { actions: ReactNode }) {
  const stageRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { t } = useI18n();
  const copy = useText().home.hero;
  const hero = useUi().r38.hero;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const stage = stageRef.current;
    if (!stage) return;
    const root = stage;

    function onMove(event: MouseEvent) {
      const box = root.getBoundingClientRect();
      const nx = (event.clientX - box.left) / box.width - 0.5;
      const ny = (event.clientY - box.top) / box.height - 0.5;
      setTilt({ x: nx, y: ny });
    }

    stage.addEventListener("mousemove", onMove);
    return () => stage.removeEventListener("mousemove", onMove);
  }, []);

  const panelStyle = {
    transform: `perspective(1000px) rotateX(${(tilt.y * -2.5).toFixed(2)}deg) rotateY(${(tilt.x * 2.5).toFixed(2)}deg)`,
  };
  const squadStyle = {
    transform: `rotateY(${tilt.x * 4}deg) rotateX(${tilt.y * -3}deg) translate3d(${tilt.x * -8}px, ${tilt.y * -4}px, 0)`,
  };

  return (
    <section ref={stageRef} className="ace-combat-hero overflow-x-hidden" style={{ background: "transparent" }}>
      <div className="ace-hero-halo" aria-hidden="true" />
      <div className="ace-hero-mesh" aria-hidden="true" />
      <div className="ace-hero-sweep" aria-hidden="true" />
      <div className="ace-hero-layout">
        <div className="ace-hero-brand transform-gpu transition-transform duration-500" style={panelStyle}>
          <p className="ace-hero-kicker" suppressHydrationWarning>
            {t("kicker")}
          </p>
          <h1 className="ace-entrance-title">
            <span className="sr-only">
              A.C.E — {hero.expansion1}, {hero.expansion2}, {hero.expansion3}
            </span>
            <Image
              src="/images/ace-entrance-logo.jpg"
              alt={copy.logoAlt}
              width={1024}
              height={1024}
              priority
              className="ace-entrance-logo"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </h1>
          <ul className="ace-hero-expansion" aria-hidden="true">
            <li>{hero.expansion1}</li>
            <li>{hero.expansion2}</li>
            <li>{hero.expansion3}</li>
          </ul>
          <p className="ace-hero-line">{hero.line}</p>
          <div
            className="ace-hero-actions"
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "stretch",
              width: "100%",
              maxWidth: "none",
              gap: "0.7rem",
            }}
          >
            {actions}
          </div>
        </div>

        <aside className="ace-hero-stage-side">
        <div className="ace-hero-squad" style={squadStyle}>
          <div className="ace-hero-lobby-frame">
            <Image
              src="/images/ace-arena.jpg"
              alt={copy.arenaAlt}
              fill
              priority
              sizes="(min-width: 1024px) 42rem, 100vw"
              className="ace-hero-lobby-photo"
              placeholder="blur"
              blurDataURL={LOBBY_BLUR}
            />
            <p
              className="ace-hero-broadcast"
              style={{
                position: "absolute",
                zIndex: 2,
                left: "50%",
                top: "34%",
                width: "70%",
                margin: 0,
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#FFD76A",
                  fontSize: "clamp(0.72rem, 1.6vw, 1.15rem)",
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                }}
              >
                {t("tvGames")}
              </span>
              <span style={{ display: "block", marginTop: "0.5rem" }}>
                <ComingSoonPlate label={t("shieldServerValue")} size="sm" />
              </span>
            </p>
          </div>
        </div>

        <div className="ace-hero-paths">
          <p className="ace-hero-paths-kicker">{t("pathsKicker")}</p>
          <ul className="ace-hero-chips">
            {TAGS.map((tag) => (
              <li key={tag.key} className="ace-hero-chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={tag.d} />
                </svg>
                <span>
                  <span>{t(tag.key)}</span>
                  <span>{t(tag.status)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        </aside>
      </div>
    </section>
  );
}
