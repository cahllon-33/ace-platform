/** Parses the most recent CS2 `status` block from DatHost console lines (map, humans, bots). Pure. */
export type Cs2Status = { map: string | null; humans: number | null; bots: number | null; hostname: string | null };

export function parseStatusLog(lines: readonly string[]): Cs2Status {
  const strip = (l: string) => l.replace(/^[A-Z][a-z]{2} \d{1,2} \d\d:\d\d:\d\d:\s*/, "");
  let start = -1;
  for (let i = lines.length - 1; i >= 0; i--) if (/-{3,}\s*Status\s*-{3,}/.test(lines[i])) { start = i; break; }
  const out: Cs2Status = { map: null, humans: null, bots: null, hostname: null };
  if (start < 0) return out;
  for (const raw of lines.slice(start)) {
    const l = strip(raw);
    if (l.startsWith("#end")) break;
    const host = /^hostname\s*:\s*(.+)$/.exec(l);
    if (host) out.hostname = host[1].trim();
    const pl = /^players\s*:\s*(\d+)\s+humans?,\s*(\d+)\s+bots?/.exec(l);
    if (pl) { out.humans = Number(pl[1]); out.bots = Number(pl[2]); }
    const sg = /spawngroup\(\s*1\)\s*:\s*SV:\s*\[1:\s*([a-z0-9_]+)\s*\|/i.exec(l);
    if (sg && !out.map) out.map = sg[1];
  }
  return out;
}
