/**
 * Flat charcoal field behind every page.
 * The entrance mark stays inside the hero card. It is not painted behind scrolling content.
 */
export function ChampionshipAtmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{ background: "#0A0A0C" }}
    />
  );
}
