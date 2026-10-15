import { ComingSoonPlate } from "@/components/coming-soon-plate";
import { ANALYSIS_SAMPLE_MAP, ANALYSIS_SAMPLE_ROUNDS, type MatchAnalysisData } from "@/lib/match-analysis";

export type AnalysisLabels = {
  heatmap: string;
  headshot: string;
  rounds: string;
  noData: string;
  sampleTag: string;
  soon: string;
  soonCaption: string;
};

function Heatmap({ data, label }: { data: MatchAnalysisData | null; label: string }) {
  return (
    <section className="ace-analysis-panel">
      <h2>{label}</h2>
      <div className="ace-analysis-map" style={{ backgroundImage: `url(${data ? `/images/map-${data.map}.jpg` : ANALYSIS_SAMPLE_MAP})` }}>
        {data?.deaths.map((d, i) => (
          <span key={i} className="absolute h-2 w-2 rounded-full bg-red-500/80" style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%` }} />
        ))}
      </div>
    </section>
  );
}

function Headshot({ data, label, empty }: { data: MatchAnalysisData | null; label: string; empty: string }) {
  return (
    <section className="ace-analysis-panel">
      <h2>{label}</h2>
      <div className="ace-analysis-ring">{data ? `${Math.round(data.headshotPct)}%` : empty}</div>
    </section>
  );
}

function Rounds({ data, label }: { data: MatchAnalysisData | null; label: string }) {
  const max = data ? Math.max(1, ...data.rounds.map((r) => r.damage)) : 1;
  const bars = data ? data.rounds : Array.from({ length: ANALYSIS_SAMPLE_ROUNDS }, (_, i) => ({ round: i + 1, damage: 0 }));
  return (
    <section className="ace-analysis-panel ace-analysis-rounds">
      <h2>{label}</h2>
      <div className="ace-analysis-bars">
        {bars.map((r) => (
          <span key={r.round} style={data ? { height: `${(r.damage / max) * 100}%`, background: "rgba(255,215,0,0.6)" } : undefined} />
        ))}
      </div>
    </section>
  );
}

/** Real data renders directly. Without data: an empty, clearly labeled sample layout under the Coming soon plate. */
export function MatchAnalysisView({ data, labels }: { data: MatchAnalysisData | null; labels: AnalysisLabels }) {
  return (
    <div>
      {!data ? <span className="ace-analysis-tag">{labels.sampleTag}</span> : null}
      <div className="relative">
        <div className={data ? "ace-analysis-grid" : "ace-analysis-grid ace-analysis-sample"} aria-hidden={data ? undefined : true}>
          <Heatmap data={data} label={labels.heatmap} />
          <Headshot data={data} label={labels.headshot} empty={labels.noData} />
          <Rounds data={data} label={labels.rounds} />
        </div>
        {!data ? (
          <div className="ace-analysis-overlay">
            <ComingSoonPlate label={labels.soon} caption={labels.soonCaption} size="lg" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
