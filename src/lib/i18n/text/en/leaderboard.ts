export const leaderboard = {
  meta: {
    title: "Leaderboard",
    description:
      "A.C.E. competitive board. Stored Steam accounts appear first. Empty seats stay showcase rows.",
  },
  hero: {
    kicker: "LEADERBOARD",
    title: "Competitive board",
    note: "Showcase seats fill this board until players link Steam and earn a rating. Their country and featured weapon are illustrative. Weapon renders are original A.C.E. studio art, not Valve skins. Kills are not tracked yet, so the featured weapon is not a top-frag stat.",
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
    sampleRender: "Signature weapon",
    notStored: "Not stored",
    noKillSaved: "No kill is saved",
    alt: "{name}",
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
    banner: "SEASON 1 LADDER",
    noteLive:
      "Steam-linked names are A.C.E. accounts. K/D appears once match servers record kills.",
    noteSample:
      "Season 1 records appear here as ranked matches are played.",
  },
  playerCard: {
    kicker: "Player card preview",
    title: "Operator dossier",
    badge: "Premium",
    note: "Your card fills with real figures once ranked matchmaking opens.",
    currentRank: "Current Rank",
    rankValue: "A.C.E. Legend (Division I)",
    competitiveRating: "Competitive Rating",
    seasonRank: "Season Rank",
    seasonTop: "(Top {percent})",
  },
} as const;
