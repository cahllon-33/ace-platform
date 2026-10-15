export const play = {
  room: {
    "showcaseTag": "SHOWCASE · Sample players, not a live match. The queue is closed.",
    "showcaseShort": "SHOWCASE",
    "queueClosed": "QUEUE CLOSED",
    "floorRp": "Rank floor {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "{name} avatar",
    "sampleChat": "Sample lines. Not sent, not live.",
    "sampleLine": "SAMPLE",
    "operatorA": "Original A.C.E operator art for Team A: a helmeted tactical operator in charcoal gear with gold accents",
    "operatorB": "Original A.C.E operator art for Team B: a hooded rebel fighter in charcoal gear with gold accents",
    "artNote": "Original A.C.E character art. These are not game models."
  },
  meta: {
    title: "Play",
    description: "Ranked 5v5 matchmaking opens once A.C.E Shield anti-cheat is live.",
  },
  boards: {
    label: "Queue boards",
    title: "Three 5v5 boards",
    note: "The choice stays on this page. Ranked search is closed, and picking a board does not look for opponents.",
    items: {
      open: {
        name: "Open Board",
        rules: [
          "A party of any size, up to five",
          "No rating window",
          "Steam OpenID is the identity check",
          "Written for open practice once a queue exists",
        ],
      },
      calibration: {
        name: "Calibration Board",
        rules: [
          "Solo, duo, or trio",
          "A planned window of {points} rating points",
          "A Steam profile must already be stored",
          "Uses the A.C.E. rating rule · search coming soon",
        ],
      },
      elite: {
        name: "Elite Board",
        rules: [
          "Solo or duo",
          "A planned window of {points} rating points",
          "Stored membership must be Plus or Premium",
          "Stricter written entry. No prize pool is attached",
        ],
      },
    },
  },
  veto: {
    kicker: "MAP VETO",
    title: "Choose the map",
    lede: "Decline maps until one remains. This lobby does not start Counter-Strike 2 and does not open a server.",
    mapSelected: "Map selected: {map}",
    yourBan: "Your ban",
    opponentBan: "Opponent ban",
    selected: "Selected",
    declined: "Declined",
    decline: "Decline",
    reset: "Reset veto",
    declinedToast: "{map} was declined. This page does not open a server.",
    lockKicker: "5v5 MATCH ROOM",
    lockTitle: "{map} is the remaining map",
    lockBody:
      "Your match room. Competitive matches start here once the competitive beta opens.",
    close: "Close",
  },
  arena: {
    ariaLabel: "Match room preview",
    captain: "Captain",
    ping: "Ping {ping}",
    mapPlates: "Map plates",
    selectMap: "Select {map}",
    settings: {
      region: "Region",
      mode: "Mode",
      antiCheat: "Anti-Cheat",
      simulator: "Preview",
    },
    chat: {
      title: "TEAM CHAT",
      kicker: "TEAM CHAT · COMING SOON",
      captainName: "{name} (Captain)",
      layoutName: "{name}",
      samples: ["gl hf", "let's get it", "dust 2 is good for us", "ready"],
      inputLabel: "Team chat message",
      placeholder: "Message team…",
      send: "Send",
    },
    tiles: {
      map: "Map",
      server: "Server",
      serverValue: "EU West · coming soon",
      mode: "Mode",
    },
    identity: {
      title: "IDENTITY VERIFICATION",
      kicker: "IDENTITY CHECKS · COMING SOON",
      rows: [
        "Email verification · coming soon",
        "Phone verification · coming soon",
        "Face check · coming soon",
      ],
    },
    security: {
      title: "MATCH SECURITY",
      kicker: "A.C.E SHIELD · IN DEVELOPMENT",
      rows: [
        "Anti-cheat protection · in development",
        "Server integrity check · in development",
        "Match data encryption · in development",
      ],
    },
    findMatchReason: "Matchmaking opens with the competitive beta. Ranked queues are not running yet.",
  },
} as const;
