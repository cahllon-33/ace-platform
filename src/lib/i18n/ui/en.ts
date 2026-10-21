/** Shared interface copy for navigation, status, CTA, coming-soon and the newer pages. */
export const UI_EN = {
  nav: {
    home: "Home",
    play: "Play",
    ranks: "Ranks",
    tournaments: "Tournaments",
    leaderboard: "Leaderboard",
    teams: "Teams",
    getPremium: "Get Premium",
    maps: "Maps",
    prizes: "Prizes",
    shop: "Shop",
    rules: "Rules",
    antiCheat: "Anti-Cheat",
    features: "Features",
    pricing: "Pricing",
    compete: "Compete",
    explore: "Explore",
  },
  footer: {
    platform: "Platform",
    competition: "Competition",
    company: "Company",
    legal: "Legal",
    tagline: "Competitive Counter-Strike 2 ladders, built around fair play.",
    follow: "Follow A.C.E.",
    rights: "All rights reserved.",
    legalLine: "© 2026 A.C.E. Competitions Ltd. Independent platform, not affiliated with Valve. Counter-Strike and CS2 are trademarks of Valve Corporation.",
  },
  soon: {
    label: "Coming soon",
  },
  cta: {
    kicker: "Season 1",
    title: "Ready to compete?",
    body: "Connect Steam, calibrate and climb.",
    play: "Play A.C.E",
    ranks: "Explore the ranks",
  },
  status: {
    title: "Platform status",
    steam: "Steam OpenID sign-in",
    shield: "A.C.E Shield · deployment phase",
    servers: "Competitive servers · competitive beta",
    billing: "Billing integration",
    available: "Available",
    inDevelopment: "In development",
    comingSoon: "Coming soon",
    designed: "Designed",
  },
  ranksTabs: {
    label: "Ranks section",
    tiers: "Tiers & divisions",
    codex: "Calibration Codex",
  },
  maps: {
    kicker: "Competitive map pool",
    title: "Maps & Broadcast",
    lede: "Seven maps make up the A.C.E. competitive pool. Teams ban and pick from this list during the map veto set out in the rulebook. Tournament broadcasts appear on the screen below.",
    rulebook: "Read the veto rules",
    screen: "Broadcast screen",
    offAir: "Off air",
    noBroadcast: "No broadcast is on right now.",
    nextLabel: "Next broadcast",
    notScheduled: "announced here soon",
    embeddedFrom: "Streaming from {provider}.",
    pool: "Active map pool",
    poolMeta: "{count} maps · BO1 / BO3 veto",
    mapLabel: "Map {n}",
    settings: {
      dust: "Desert town",
      mirage: "Market district",
      inferno: "Old village",
      nuke: "Industrial plant",
      ancient: "Jungle ruins",
      anubis: "Canal temple",
      train: "Rail yard",
    },
    notes: {
      dust: "Long sightlines on A, tight mid doors.",
      mirage: "Mid control decides most rounds.",
      inferno: "Narrow chokes and utility-heavy executes.",
      nuke: "Stacked sites and fast vertical rotations.",
      ancient: "Mid-to-B pressure shapes the half.",
      anubis: "Water mid and open B attacks.",
      train: "Train-car cover and long A lanes.",
    },
  },
  prizes: {
    kicker: "Championship prizes",
    title: "Prizes",
    lede: "The championship reward line-up we are preparing for Season 1. Prize pools are confirmed on each event page once announced, under section 18 of the rulebook.",
    rulebook: "Prize rules",
    cardKicker: "Legendary reward",
    slots: { first: "1st place · per player", second: "2nd place · per player", mvp: "MVP award" },
    facts: { pool: "Prize pool", items: "Reward items", delivery: "Delivery", season: "Season" },
    factValues: { season: "Season 1" },
  },
  rules: {
    kicker: "A.C.E. competition rulebook",
    title: "Competition rules",
    version: "Version {version} · effective {date}",
    intro: "The rules every A.C.E. competition is played under. Clauses marked “Applies once deployed” take effect when the system they depend on launches.",
    pending: "Applies once deployed",
    contents: "Contents",
    penalties: { offence: "Offence", first: "First offence", repeat: "Repeat offence", rule: "Rule" },
    englishNote: "",
    sections: [
      "Scope and definitions",
      "Eligibility",
      "Accounts and identity",
      "Teams and rosters",
      "Captains",
      "Map pool and veto",
      "Match procedure",
      "Match settings",
      "Server and technical issues",
      "Pauses",
      "Disconnects",
      "Forfeits and no-shows",
      "Conduct",
      "Cheating and competitive integrity",
      "Disputes and appeals",
      "Penalties",
      "Broadcast",
      "Prizes",
      "Rating Points",
      "Amendments",
    ],
  },
  antiCheat: {
    kicker: "A.C.E Shield",
    title: "Anti-Cheat",
    lede: "A.C.E Shield is the integrity system being built for every A.C.E. match: client, server, match and behaviour checks working together, designed with privacy first.",
    statusLabel: "Deployment phase",
    pillarsTitle: "Architecture pillars",
    pillars: {
      client: { title: "Client integrity", body: "A lightweight client verifies the game environment during a match and reports tampering signals." },
      server: { title: "Server integrity", body: "Match servers run locked configurations, signed plugins and tamper-evident logs." },
      match: { title: "Match integrity", body: "Every round is recorded with demos and event logs so any result can be reviewed." },
      behaviour: { title: "Behaviour analysis", body: "Statistical models flag outlier aim, reaction and information patterns for human review." },
      identity: { title: "Identity", body: "Steam OpenID accounts, one player per account, with ban-evasion checks." },
    },
    roadmapTitle: "Roadmap",
    phases: {
      p1: { title: "Phase 1 · Architecture", body: "Threat model, data flows and privacy design." },
      p2: { title: "Phase 2 · Server & match integrity", body: "Locked server configs, demo capture, tamper-evident logs." },
      p3: { title: "Phase 3 · Behaviour analysis", body: "Review tooling and first statistical models." },
      p4: { title: "Phase 4 · Client integrity", body: "Shield client beta with a public security review." },
      p5: { title: "Phase 5 · Competitive beta", body: "Shield required for ranked matches and tournaments." },
    },
    privacyTitle: "Privacy principles",
    privacy: [
      "We collect only what is needed to protect a match, and say exactly what it is.",
      "No hardware identifiers are collected until a documented, independently reviewed, secure implementation exists.",
      "Match data is kept for a fixed period and then deleted.",
      "Every penalty can be appealed and reviewed by a person.",
    ],
    faqTitle: "Questions",
    faq: [
      { q: "Is A.C.E Shield active today?", a: "Not yet. It is in development. Each phase above shows its current status." },
      { q: "Will it need kernel access?", a: "The design starts with user-mode checks plus server-side analysis. Any deeper access would be documented and reviewed publicly first." },
      { q: "Does Premium affect anti-cheat?", a: "No. Integrity rules are identical for every player. Paid plans never buy competitive advantage." },
      { q: "How do I report a cheater?", a: "Use the contact page. Reports are reviewed under section 14 of the rulebook." },
    ],
  },
  r38: {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Build your competitive identity. Calibrate your skill. Climb the A.C.E. ranks.",
      "connectSteam": "Connect Steam",
      "openDashboard": "Open dashboard",
      "exploreRanks": "Explore ranks"
    },
    "status": {
      "title": "Platform status",
      "steam": "Steam sign-in",
      "shield": "A.C.E. Shield",
      "servers": "Competitive servers",
      "tournaments": "Tournaments",
      "billing": "Billing",
      "available": "Available",
      "inDevelopment": "In development",
      "comingSoon": "Coming soon",
      "preparing": "Preparing",
      "billingOff": "Not live · no payments taken"
    },
    "card": {
      "matches": "Matches",
      "wl": "W/L",
      "kd": "K/D",
      "noMatches": "No recorded matches",
      "division": "Division {division}"
    },
    "journey": {
      "title": "Your competitive journey",
      "currentRp": "Current RP",
      "current": "Current",
      "next": "Next",
      "toGo": "{rp} RP to the next division",
      "top": "Highest division reached",
      "basis": "Calculated from your stored RP and the published rank table."
    },
    "board": {
      "emptyTitle": "No ranked matches yet",
      "emptyBody": "Players appear here after their first recorded ranked match. Nothing on this board is invented.",
      "previewTag": "PREVIEW",
      "lobbyTitle": "Lobby",
      "matchFoundTitle": "Match found",
      "previewNote": "Layout preview only: no queue or server is running, and the names are placeholders.",
      "accept": "Accept",
      "waiting": "Waiting for players",
      "note": "Real accounts with at least one recorded ranked match, ordered by stored RP. No showcase or invented rows."
    },
    "toast": {
      "region": "Notifications",
      "dismiss": "Dismiss notification",
      "signedIn": "Signed in as {name}",
      "signedOut": "You have signed out.",
      "authFailed": "Steam sign-in did not complete. Please try again."
    },
    "sound": {
      "on": "UI sounds: on",
      "off": "UI sounds: off"
    },
    "chat": {
      "open": "Open support chat",
      "close": "Close support chat",
      "title": "A.C.E. Support",
      "greeting": "Hi! I'm the A.C.E. support assistant. Ask me about ranks, plans, rules or your account.",
      "placeholder": "Type your question…",
      "send": "Send",
      "unavailable": "Support chat is not available yet.",
      "disclaimer": "Automated answers can be wrong. Bans and account decisions are made only by the administration.",
      "escalate": "Send to the team",
      "escalated": "Saved as a support ticket. The administration will review it.",
      "error": "Something went wrong. Please try again.",
      "rateLimited": "Too many messages. Please wait a moment.",
      "thinking": "Typing…",
      "tooLong": "Message is too long (max {max} characters)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Competitive platform",
      "h1a": "Compete.",
      "h1b": "Calibrate.",
      "h1c": "Rise.",
      "sub": "Ranked CS2 with Steam sign-in, a public RP ladder and plans that never buy an advantage.",
      "trust1": "CS2 only",
      "trust2": "Steam OpenID sign-in",
      "trust3": "$0 · $4 · $7 — no pay-to-win",
      "trust4": "10 ranks · start at 1,200 RP",
      "stepsKicker": "How it works",
      "stepsTitle": "Three steps to your first rank",
      "step1t": "Connect Steam",
      "step1b": "Sign in with Steam OpenID. A.C.E. never sees your Steam password.",
      "step2t": "Calibrate",
      "step2b": "You start at tier 3 with 1,200 RP. Every recorded match moves your RP by published rules.",
      "step3t": "Climb",
      "step3b": "A win gives up to +30 RP (+32 as top fragger); a loss costs up to −30. Your rank always follows your RP.",
      "ranksTitle": "Ten ranks. One public table.",
      "ranksBody": "Badge colors are fixed per tier, and your rank is always calculated from your stored RP.",
      "ranksCta": "See every rank",
      "plansTitle": "Plans that never buy wins",
      "plansBody": "Paid plans are cosmetic and convenience only. Checkout is not live yet, so everyone is on Free today.",
      "plansCta": "Compare plans",
      "free": "Free",
      "perMonth": "/month",
      "signedInKicker": "Welcome back"
    },
    "profile": {
      "kicker": "PLAYER",
      "notFound": "Player not found",
      "notFoundBody": "No A.C.E. account uses this Steam ID, or the profile is not public.",
      "rating": "Rating",
      "rank": "Rank",
      "record": "Record",
      "memberSince": "Member since {date}",
      "steamProfile": "Steam profile",
      "yourProfile": "This is your profile",
      "backToBoard": "Back to the leaderboard"
    },
    "board": {
      "podium": "Top players",
      "viewProfile": "View profile"
    },
    "chat": {
      "sources": "Sources",
      "noMatch": "I couldn't find this in the A.C.E. site content. You can send your question to the team as a ticket.",
      "s1": "How much does Premium cost?",
      "s2": "How do I gain RP?",
      "s3": "How do I report a cheater?",
      "kbNote": "Answers are taken from the A.C.E. site content."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Command center",
      "welcome": "Welcome back, {name}",
      "quick": "Quick actions",
      "qProfile": "Public profile",
      "qBoard": "Leaderboard",
      "qRanks": "Rank table",
      "qPlay": "Play",
      "statRp": "Rating",
      "statRank": "Rank",
      "statRecord": "Record",
      "statWinRate": "Win rate",
      "statPlan": "Plan",
      "toNext": "{rp} RP to {next}",
      "top": "Top of the ladder",
      "activity": "Recent activity",
      "activityEmpty": "No recorded activity yet. Matches and sign-ins appear here as they happen.",
      "evSignIn": "Signed in with Steam",
      "evRating": "Rating {before} → {after}",
      "noRecord": "No matches yet",
      "account": "Account"
    },
    "nf": {
      "code": "Error 404",
      "title": "This page is off the map",
      "body": "The link may be old or mistyped. Every part of A.C.E. is one click away from here.",
      "home": "Back to home",
      "ranks": "View ranks"
    },
    "err": {
      "code": "Something broke",
      "title": "We hit an unexpected error",
      "body": "Nothing was charged and your account is safe. Try again or head back home.",
      "retry": "Try again"
    }
  },
  "r41": {
    "vf": {
      "label": "Verified player",
      "tip": "Verified: Steam linked, account in good standing, reviewed by A.C.E."
    },
    "st": {
      "kicker": "Performance",
      "title": "Player stats",
      "lede": "Every figure comes from recorded A.C.E. matches. Nothing is estimated.",
      "empty": "No recorded matches yet. Stats appear here after the first ranked match.",
      "winRate": "Win rate",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "Clutches won",
      "entry": "Entry success",
      "utility": "Utility damage",
      "heatmap": "Activity",
      "heatmapEmpty": "No match days yet",
      "rpChart": "RP progress",
      "rpEmpty": "No rating changes yet",
      "maps": "Maps",
      "weapons": "Weapons",
      "multi": "Multi-kills",
      "totals": "Totals",
      "matches": "Matches",
      "kills": "Kills",
      "deaths": "Deaths",
      "open": "View stats",
      "less": "Less",
      "more": "More",
      "none": "—"
    },
    "ab": {
      "title": "About A.C.E.",
      "lede": "A Counter-Strike 2 competition platform built around one public rank table and plans that never buy an advantage.",
      "b1": "A.C.E. runs ranked play, ladders and tournaments for CS2. Sign-in is Steam OpenID; we never see your Steam password.",
      "b2": "Your rank is calculated only from recorded results using published rules. Paid plans are cosmetic and convenience only.",
      "b3": "A.C.E. is an independent platform and is not affiliated with Valve."
    },
    "ss": {
      "title": "Server status",
      "lede": "Live checks from this server at the moment you opened the page. Nothing here is estimated.",
      "web": "Website",
      "db": "Database",
      "match": "Match servers",
      "ok": "Operational",
      "down": "Unavailable",
      "notLive": "Not live yet",
      "checked": "Checked {time}"
    },
    "rp": {
      "title": "Report a player",
      "lede": "Tell the operators what happened. Every report is reviewed by a person.",
      "target": "Player SteamID64",
      "reason": "Reason",
      "rCheat": "Cheating",
      "rToxic": "Abusive behaviour",
      "rOther": "Other",
      "details": "Details (optional)",
      "submit": "Send report",
      "signIn": "Sign in with Steam to send a report.",
      "sent": "Report received. Operators review every report.",
      "invalid": "Enter a valid SteamID64 (17 digits).",
      "open": "Report a player"
    },
    "nt": {
      "title": "Notifications",
      "empty": "You're all caught up.",
      "markRead": "Mark all read"
    },
    "se": {
      "title": "Seasons",
      "lede": "Seasons will reset placement and award end-of-season badges.",
      "none": "No season has started yet. The first season is announced here when it opens."
    }
  },
  "r41b": {
    "lv": {
      "nav": "Live",
      "title": "Live broadcasts",
      "lede": "Official A.C.E. tournament streams. A broadcast shows here only while operators have it on air.",
      "none": "No live broadcast right now",
      "noneBody": "When an official stream goes on air it appears here. Meanwhile, see the tournaments below.",
      "schedule": "Upcoming tournaments",
      "noSchedule": "No tournaments scheduled yet.",
      "onAir": "On air",
      "watch": "Watch live"
    }
  },
  "r44": {
    "kicker": "Your rank",
    "next": "Next",
    "winRate": "Win rate",
    "noMatches": "No ranked matches yet. Your first result will show up here.",
    "finishPlus": "Plus · platinum finish",
    "finishPremium": "Premium · gold fire finish",
    "progressAria": "Progress to {name}",
    "matches": "Matches"
  },
  "r42": {
    "playTitle": "Play Now",
    "playSub": "Find a ranked CS2 match and start climbing",
    "newPill": "NEW",
    "shopAria": "Open the shop"
  },
  "r41c": {
    "v5": {
      "vTier": "Wins and losses are both multiplied by {t7} in tiers 7–9 and by {t10} in tier 10 ({top}), so a 50% record holds your rank at every level.",
      "vPlacement": "Your first {n} matches move {pk}× faster so you find your level quickly. During placement your rating cannot rise above tier {maxTier} ({cap} RP).",
      "vAbandon": "Counts as a double loss, at least −{abandon} RP, whatever the result, and no MVP bonus.",
      "ex2": "Every loss along the way adds wins back. In tiers 7–9 a win gives +{win7} and a loss costs −{loss7}, so winning more than {breakEven}% of equal matches keeps you climbing."
    },
    "pr": {
      "kicker": "Prestige",
      "title": "Badge rules",
      "lede": "How every A.C.E. badge is earned. Badges are cosmetic: they never change matchmaking, RP or any rule.",
      "ranks": "Rank badges (tiers 1–10) follow your RP. Every player sees the same rank and the same fixed tier color.",
      "prestige": "Prestige badges are five long-term goals above {elite} RP: one every 200 RP from 2,150 to 2,950.",
      "free": "Free: your badge stays A.C.E. Legend and your prestige level is shown as a text milestone. Your RP is never capped.",
      "plus": "Plus: the platinum prestige set.",
      "premium": "Premium: the animated gold prestige set.",
      "lose": "Drop below a prestige threshold and the badge follows your RP back down; reach it again and it returns.",
      "level": "Prestige {n} · {name}",
      "from": "From {rp} RP",
      "milestone": "Prestige {n} reached",
      "perk": "Prestige badge set (2,150–3,000 RP), earned by RP",
      "open": "Badge rules",
      "wins": "About {n} even-match wins after the previous step"
    }
  }
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Ui = Widen<typeof UI_EN>;
