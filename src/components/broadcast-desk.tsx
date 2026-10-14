"use client";

import { useEffect, useState } from "react";
import { useText } from "@/components/text-provider";
import { interpolate } from "@/lib/i18n";

const PLATES = [
  { src: "/images/map-dust.jpg", name: "Dust II" },
  { src: "/images/map-mirage.jpg", name: "Mirage" },
  { src: "/images/map-inferno.jpg", name: "Inferno" },
  { src: "/images/map-nuke.jpg", name: "Nuke" },
  { src: "/images/map-ancient.jpg", name: "Ancient" },
  { src: "/images/map-anubis.jpg", name: "Anubis" },
  { src: "/images/map-train.jpg", name: "Train" },
] as const;

export function BroadcastDesk() {
  const copy = useText().home.broadcast;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PLATES.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  const plate = PLATES[index];

  return (
    <section className="ace-broadcast overflow-x-hidden px-4 py-16 sm:px-6" aria-labelledby="ace-broadcast-title">
      <div className="mx-auto max-w-[76rem]">
        <p className="ace-broadcast-kicker">{copy.kicker}</p>
        <h2 id="ace-broadcast-title" className="ace-broadcast-title">
          {copy.title}
        </h2>
        <p className="ace-broadcast-lede">{copy.lede}</p>
        <div className="ace-broadcast-stage">
          <img className="ace-broadcast-video" src={plate.src} alt="" />
          <p className="ace-broadcast-badge">{interpolate(copy.offAir, { map: plate.name })}</p>
        </div>
        <ul className="ace-broadcast-grid">
          {PLATES.map((item, itemIndex) => (
            <li key={item.name}>
              <button
                type="button"
                className={`ace-broadcast-card${itemIndex === index ? " is-on" : ""}`}
                onClick={() => setIndex(itemIndex)}
              >
                <img src={item.src} alt="" />
                <p className="ace-broadcast-map">{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
