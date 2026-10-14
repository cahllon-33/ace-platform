export const leaderboard = {
  meta: {
    title: "Leaderboard",
    description:
      "A.C.E. competitive board. Stored Steam accounts appear first. Empty seats stay showcase rows.",
  },
  hero: {
    kicker: "LEADERBOARD",
    title: "Competitive board",
    note: "Showcase seats fill this board until a Steam account is stored. A stored rating replaces them. Country and lead weapon are samples. The weapon renders are original A.C.E. studio images, not Valve skins. This site does not store kills, so the weapon is not a recorded top-frag gun.",
  },
  facts: {
    seats: "Seats",
    storedAccounts: "Stored accounts",
    killsStored: "Kills stored",
    none: "None",
  },
  empty: "No showcase seat matches that name.",
  podiumLabel: "Top three seats",
  boardLabel: "Competitive board",
  table: {
    rank: "Rank",
    player: "Player",
    country: "Country",
    tier: "Tier",
    leadWeapon: "Lead weapon",
    rating: "Rating",
  },
  tags: {
    stored: "Stored account",
    showcase: "Showcase",
  },
  weapon: {
    sampleRender: "Sample render",
    notStored: "Not stored",
    noKillSaved: "No kill is saved",
    alt: "{name} sample render",
  },
  countries: {
    il: "Israel",
    us: "United States",
    de: "Germany",
    ua: "Ukraine",
    se: "Sweden",
    fr: "France",
    pl: "Poland",
    br: "Brazil",
    jp: "Japan",
    kr: "South Korea",
  },
  search: {
    openLabel: "Open player search",
    srLabel: "Search leaderboard",
    fieldLabel: "Search players",
    placeholder: "Display name",
  },
  seasonPreview: {
    banner: "SEASON 1 LADDER — LAYOUT",
    noteLive:
      "Steam-linked names are stored accounts. Empty seats stay marked showcase. K/D is not stored, so that gauge is a layout.",
    noteSample:
      "Layout sample. 0 live ranked records. These figures are not a season result, and K/D is not stored.",
  },
  playerCard: {
    kicker: "Authenticated card preview · mock figures",
    title: "Operator dossier",
    badge: "Premium",
    note: "Layout only. These numbers are not a live season, live Elo, or a signed-in account. Ranked matchmaking is not active.",
    currentRank: "Current Rank",
    rankValue: "A.C.E. Legend (Division I)",
    competitiveRating: "Competitive Rating",
    seasonRank: "Season Rank",
    seasonTop: "(Top {percent})",
  },
} as const;
