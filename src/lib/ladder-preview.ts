export type LadderPreviewRow = {
  place: number;
  name: string;
  winRate: string;
  kd: string;
  rp: string;
  live: boolean;
};

const SHOWCASE: LadderPreviewRow[] = [
  { place: 1, name: "Showcase 01", winRate: "74%", kd: "1.58", rp: "4,920 RP", live: false },
  { place: 2, name: "Showcase 02", winRate: "71%", kd: "1.44", rp: "4,610 RP", live: false },
  { place: 3, name: "Showcase 03", winRate: "68%", kd: "1.36", rp: "4,280 RP", live: false },
  { place: 4, name: "Showcase 04", winRate: "65%", kd: "1.29", rp: "4,040 RP", live: false },
  { place: 5, name: "Showcase 05", winRate: "62%", kd: "1.21", rp: "3,870 RP", live: false },
];

export function mergeLadderPreview(liveRows: LadderPreviewRow[]): LadderPreviewRow[] {
  return SHOWCASE.map((slot, index) => liveRows[index] ?? slot);
}
