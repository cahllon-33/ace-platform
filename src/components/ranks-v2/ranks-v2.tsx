import Image from "next/image";
import { RankOrb } from "@/components/rank-orb";
import { RANK_TIERS, rankFromRating } from "@/lib/ranks";
import { ranks } from "@/server/desktop-r57";
import "./ranks-v2.css";

const REGION_NAMES: Record<string, string> = { all: "All regions", EU: "Europe", NA: "North America", SA: "South America", ME: "Middle East", AS: "Asia", OC: "Oceania", AF: "Africa" };
const n = (v: number) => v.toLocaleString("en-US");

/** RP range of each tier, derived from RANK_TIERS.minRating (the same thresholds rankFromRating uses). */
export function tierRanges() {
  return RANK_TIERS.map((t, i) => {
    const next = RANK_TIERS[i + 1];
    return { ...t, from: t.minRating, to: next ? next.minRating - 1 : null };
  });
}

type Filters = { season?: string; region?: string; country?: string };
type Ladder = Awaited<ReturnType<typeof ranks>>;

export async function RanksV2({ filters, meId, liveRating }: { filters: Filters; meId: string | null; liveRating: number | null }) {
  let data: Ladder | null = null;
  try {
    data = await ranks(filters, meId);
  } catch {
    data = null;
  }
  const me = data?.me?.row ?? null;
  const myRp = me?.rp ?? liveRating;
  const currentLevel = myRp != null ? rankFromRating(myRp).level : null;
  const ranges = tierRanges();
  const filtered = (filters.season && filters.season !== "all") || (filters.region && filters.region !== "all") || (filters.country && filters.country !== "all");

  return (
    <div className="rk2">
      <section className="rk2-hero" aria-labelledby="rk2-title">
        <div className="rk2-hero-scene" aria-hidden="true"><Image src="/images/ranks-hero.webp" alt="" fill priority sizes="(max-width: 1440px) 80vw, 1150px" className="rk2-hero-art" /></div>
        <div className="rk2-hero-shade" aria-hidden="true" />
        <div className="rk2-hero-copy">
          <p className="rk2-kicker">Ranked ladder</p>
          <h1 id="rk2-title" className="rk2-title">Ranks</h1>
          <p className="rk2-motto"><span>Climb</span><i /> <span>Improve</span><i /> <span>Be Elite</span></p>
          <p className="rk2-lede">Every A.C.E player ranked by Rating Points. Wins and losses in ranked matches move your RP; no plan can buy RP.</p>
        </div>
        <div className="rk2-hero-glow" aria-hidden="true" />
        <div className="rk2-hero-badge" aria-hidden="true">
          <Image src="/images/ace-badge.png" alt="" width={260} height={260} />
        </div>
      </section>

      <section className="rk2-card rk2-me" aria-label="Your ranking">
        <p className="rk2-label">Your ranking</p>
        {me ? (
          <div className="rk2-me-row">
            <span className="rk2-me-pos">#{n(me.pos)}</span>
            <span className="rk2-me-id">
              {me.avatarUrl ? <img src={me.avatarUrl} alt="" className="rk2-avatar" width={56} height={56} /> : <RankOrb level={me.level} art={me.art} size={56} label={me.rankName} />}
              <span>
                <b>{me.name}</b>
                <small>{me.rankName} · {n(me.matches)} match{me.matches === 1 ? "" : "es"}</small>
              </span>
            </span>
            <span className="rk2-me-stat"><small>Rank</small><b>{me.rankName}</b></span>
            <span className="rk2-me-stat"><small>Tier</small><b>{me.level} / 10</b></span>
            <span className="rk2-me-stat"><small>RP</small><b className="rk2-gold">{n(me.rp)}</b></span>
            <RankOrb level={me.level} art={me.art} size={84} label={me.rankName} />
          </div>
        ) : (
          <p className="rk2-me-empty">
            {meId
              ? `You are not on this ladder yet${filtered ? " for this filter" : ""}. Play a ranked match to get placed.`
              : "Sign in with Steam and play a ranked match to get placed on the ladder."}
          </p>
        )}
      </section>

      <section className="rk2-card" aria-labelledby="rk2-tiers">
        <div className="rk2-sh">
          <h2 id="rk2-tiers" className="rk2-label">Rank tiers</h2>
          <span className="rk2-sh-note">Higher ranks · greater rewards</span>
        </div>
        <ol className="rk2-tiers">
          {ranges.map((t) => (
            <li key={t.level} data-v3d="rank" data-lv={t.level} data-v3d-var={me?.art ?? "standard"} data-range={t.to == null ? `${n(t.from)}+ RP` : `${n(t.from)} – ${n(t.to)} RP`} title="View in 3D" className={`rk2-tier${t.level === currentLevel ? " is-current" : ""}`} aria-current={t.level === currentLevel ? "true" : undefined}>
              <span className="rk2-tier-lv">{t.level}</span>
              <span className="rk2-tier-badge"><RankOrb level={t.level} art={me?.art ?? "standard"} size={76} label={t.name} /></span>
              <b className="rk2-tier-name">{t.name}</b>
              <span className="rk2-tier-rp">{t.to == null ? `${n(t.from)}+ RP` : `${n(t.from)} – ${n(t.to)} RP`}</span>
              {t.level === currentLevel ? <span className="rk2-tier-you">You</span> : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="rk2-card" aria-labelledby="rk2-ladder">
        <div className="rk2-sh">
          <h2 id="rk2-ladder" className="rk2-label">Leaderboard</h2>
          {data ? (
            <form className="rk2-filters" method="get" action="/ranks">
              <select name="season" defaultValue={filters.season ?? "all"} aria-label="Season">
                <option value="all">Lifetime</option>
                {data.seasons.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
              <select name="region" defaultValue={filters.region ?? "all"} aria-label="Region">
                {["all", ...data.regions].map((r) => <option key={r} value={r}>{REGION_NAMES[r] ?? r}</option>)}
              </select>
              <select name="country" defaultValue={filters.country ?? "all"} aria-label="Country">
                <option value="all">All countries</option>
                {data.countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <button type="submit">Apply</button>
            </form>
          ) : null}
        </div>
        {!data ? (
          <p className="rk2-empty">The ladder is unavailable right now.</p>
        ) : data.rows.length === 0 ? (
          <p className="rk2-empty">No ranked players{filtered ? " for this filter" : ""} yet.</p>
        ) : (
          <>
            <div className="rk2-table" role="table" aria-label="Ranked ladder">
              <div className="rk2-tr rk2-th" role="row">
                <span role="columnheader">#</span><span role="columnheader">Player</span><span role="columnheader">Country</span><span role="columnheader">Rank</span><span role="columnheader">RP</span>
              </div>
              {data.rows.map((r) => (
                <div key={r.id} role="row" className={`rk2-tr${me && r.id === me.id ? " is-me" : ""}`}>
                  <span role="cell" className={`rk2-pos${r.pos <= 3 ? " is-top" : ""}`}>{r.pos}</span>
                  <span role="cell" className="rk2-pl">{r.avatarUrl ? <img src={r.avatarUrl} alt="" width={32} height={32} className="rk2-avatar" /> : null}<b>{r.name}</b></span>
                  <span role="cell">{r.country ? <span className="rk2-cc">{r.country}</span> : <span className="rk2-mut">—</span>}</span>
                  <span role="cell" className="rk2-rank"><RankOrb level={r.level} art={r.art} size={28} label={r.rankName} />{r.rankName}</span>
                  <span role="cell" className="rk2-rp">{n(r.rp)}</span>
                </div>
              ))}
            </div>
            <p className="rk2-foot">{n(data.total)} ranked player{data.total === 1 ? "" : "s"}{data.season ? ` · ${data.season.name}: RP at each player's last rated match of the season` : ""} · Country is the latest sign-in country.</p>
          </>
        )}
      </section>

      <section className="rk2-values" aria-label="A.C.E values">
        {[
          ["shield", "Fair Play", "Anti-cheat on every match"],
          ["target", "Competitive", "Skill-based ranked matches"],
          ["server", "EU Servers", "Low-latency European servers"],
          ["crown", "Elite", "Only the best reach A.C.E Legend"],
        ].map(([icon, title, sub]) => (
          <div key={title} className="rk2-value">
            <ValueIcon kind={icon} />
            <span><b>{title}</b><small>{sub}</small></span>
          </div>
        ))}
        <div className="rk2-value-brand"><b>A.C.E</b><small>Elite matchmaking platform</small></div>
      </section>
    </div>
  );
}

function ValueIcon({ kind }: { kind: string }) {
  const p = { fill: "none", stroke: "url(#rk2g)", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" className="rk2-ico">
      <defs><linearGradient id="rk2g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F6E3A1" /><stop offset=".5" stopColor="#D4AF37" /><stop offset="1" stopColor="#8A6A1E" /></linearGradient></defs>
      {kind === "shield" && <><path {...p} d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" /><path {...p} d="M9 12l2 2 4-4" /></>}
      {kind === "target" && <><circle {...p} cx="12" cy="12" r="8" /><circle {...p} cx="12" cy="12" r="4" /><path {...p} d="M12 2v4M12 18v4M2 12h4M18 12h4" /></>}
      {kind === "server" && <><rect {...p} x="4" y="4" width="16" height="7" rx="1.5" /><rect {...p} x="4" y="13" width="16" height="7" rx="1.5" /><path {...p} d="M8 7.5h.01M8 16.5h.01M12 7.5h5M12 16.5h5" /></>}
      {kind === "crown" && <path {...p} d="M4 18h16M5 15l-1-8 5 4 3-6 3 6 5-4-1 8z" />}
    </svg>
  );
}
