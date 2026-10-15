export const ranks = {
  meta: {
    title: "Competitive Ranks",
    description:
      "Ten A.C.E. ranks with a drag-to-rotate CSS 3D turntable. Studio GLTF models can replace the stills when delivered.",
  },
  hero: {
    kicker: "CALIBRATION",
    title: "Competitive Ranks",
    lede: "Recruit through A.C.E. Legend, divisions {divisions}. Each emblem is a concept still on a CSS 3D turntable (drag or arrow keys). Drop a GLTF into the documented slot later — no model files are in the repo yet. Rating numbers are your real account when signed in, otherwise the calibration floor.",
  },
  codexLink: "Open the Calibration Codex",
  document: {
    title: "Ten-tier calibration document",
    body: "Engine names are the official ladder. Crystal aliases are lobby art. Win-rate chips on the board are showcase samples, not live matchmaking. Paid cosmetics never move a player between these floors.",
    level: "LEVEL {level} · {crystal}",
    detail: "Minimum rating {rating}. Material study: {material}.",
  },
  tiers: {
    1: { tagline: "ENTRY CALIBRATION", material: "Raw Iron / Obsidian plate texture" },
    2: { tagline: "FIELD OPERATIVE", material: "Brushed Bronze crystal core" },
    3: { tagline: "FORWARD EDGE", material: "Rose Gold shards with dark deep red undertones" },
    4: { tagline: "PRECISION CRAFT", material: "Chrome Silver diamond shard block" },
    5: { tagline: "SEASONED CORE", material: "Aged Brass molten core aura" },
    6: { tagline: "GOLD STANDARD", material: "Vibrant Gold shard crystal flare" },
    7: { tagline: "CYAN ASCENT", material: "Cyan Blue Plasma crystal matrix" },
    8: { tagline: "SAPPHIRE STORM", material: "Sapphire Blue hyper-glowing lightning crystal core" },
    9: { tagline: "VOID CROWN", material: "Deep Cosmic Void Purple stellar shard core" },
    10: { tagline: "THE ELITE OF ELITE", material: "Luxury Molten Radiant Gold Crown framework" },
  },
  board: {
    selectEmblem: "Select A.C.E. {name} rank emblem, level {level}",
    emblemAlt: "A.C.E. Custom 3D Crystalline Level {level} {crystal} {name} emblem profile badge",
    emblemAltLegend: "A.C.E. Custom 3D Crystalline Level {level} Emblem Profile Badge",
    premium: "PREMIUM",
  },
  division: {
    label: "Division {division}",
    select: "Select division {division}",
    summary: "{divisions} Divisions Each / {levels} Levels Total",
  },
  card: {
    rank: "Rank {level}",
    targetWinRate: "{winRate} target win-rate",
    calibrationTarget: "Calibration target",
    floor: "Floor",
    samplesNote: "Target figures for each tier.",
    progressMockup: "Progress",
  },
  turntable: {
    stageLabel: "{name} orbital emblem. Drag to rotate.",
    dragToRotate: "DRAG TO ROTATE",
    rankSystem: "RANK SYSTEM",
  },
  emblem: {
    kicker: "Calibration mark",
    rankLabel: "Rank {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} placement marks are filled from stored wins and losses. These nodes do not start a match.",
  },
} as const;
