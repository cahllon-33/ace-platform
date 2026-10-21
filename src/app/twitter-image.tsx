import { ImageResponse } from "next/og";

export const alt = "A.C.E. — Counter-Strike 2 competition platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Original share card: wordmark + tagline, black and gold. No third-party marks. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", background: "radial-gradient(circle at 20% 20%, #2a2210 0%, #0b0b0c 60%)", color: "#FFD76A", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 34, letterSpacing: 12, color: "#d4af37" }}>COUNTER-STRIKE 2 COMPETITION</div>
        <div style={{ fontSize: 190, fontWeight: 800, letterSpacing: 10, lineHeight: 1.05 }}>A.C.E.</div>
        <div style={{ fontSize: 40, color: "#ece7da", marginTop: 12 }}>Ranked play · ladders · tournaments</div>
        <div style={{ display: "flex", marginTop: 48, height: 6, width: 420, background: "linear-gradient(90deg, #FFE9A3, #d4af37, transparent)" }} />
      </div>
    ),
    size,
  );
}
