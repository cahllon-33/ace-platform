export const home = {
  meta: {
    title: "A.C.E. — Competitive CS2 Platform",
    description:
      "A.C.E. is a planned Counter-Strike 2 competitive platform for player identity, calibration, teams, and tournaments. This public website is a preview. Ranked matchmaking, Anti-Cheat, payments, and prizes are not active.",
  },
  opening: {
    dialogLabel: "A.C.E. opening",
    line: "A.C.E: Autonomous Anti-Cheat, Competitive Calibration, Elite Players",
    enter: "Enter the site",
  },
  hero: {
    logoAlt: "A.C.E. Autonomous Anti-Cheat, Competitive Calibration, Elite Players",
    arenaAlt:
      "A.C.E. arena plate. Original stage image, not Valve artwork. The screen is labeled games television. Live broadcast is off.",
  },
  broadcast: {
    kicker: "TOURNAMENT WATCH",
    title: "Broadcast desk",
    lede: "The competitive map pool sits on this desk: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis, and Train. These are original plates. No tournament is on air, and this page does not play a Valve match.",
    offAir: "OFF AIR · {map}",
  },
  jumpNav: {
    label: "Home categories",
    play: "Play",
    prizes: "Prizes",
    teams: "Teams",
    leaderboard: "Leaderboard",
    ranks: "Ranks",
    systems: "Systems",
  },
  charter: {
    kicker: "MASTER LOBBY WORKSPACE",
    title: "A.C.E. COMPETITIVE MATCHMAKING LOBBY AND DISPATCH CENTER",
    badge: "NO LIVE SERVER",
    lede: "This lobby does not assign a server, start an anti-cheat client, or pay a prize.",
    modules: [
      {
        kicker: "MATCH FOUND · 5v5",
        copy: "The 5v5 frame on this page is a closed queue. It does not assign a server.",
        chips: ["NO 128-TICK SERVER", "QUEUE CLOSED"],
      },
      {
        kicker: "FIXED 3D RANKS",
        copy: "Ten tiers from Recruit through A.C.E. Legend. A stored rating appears after Steam sign-in. This page does not apply a match.",
        chips: ["RATING RULE ON FILE", "TURN TABLE ON THIS PAGE"],
      },
      {
        kicker: "SKIN REWARDS",
        copy: "Skin cards are examples. No weapon is delivered and no prize is funded.",
        chips: ["NO ITEM DELIVERED", "NO DROP CHECK"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Player_Profile]",
    notAvailable: "n/a",
    elite: "ELITE",
  },
  membership: {
    compareLink: "See the full comparison table",
  },
  loot: {
    exampleCard: "Example card · not a Valve item",
    wear: {
      factoryNew: "Factory New",
      minimalWear: "Minimal Wear",
    },
  },
  lootLadder: {
    banner: "SYSTEM VAULT — LAYOUT DROP",
    title: "A.C.E. LOOT LADDER",
    itemWithWear: "{item} ({wear})",
    clockLabel: "LAYOUT CLOCK",
    clockFormat: "{h}h {m}m {s}s",
    note: "This clock is a layout. Premium does not enter a drop lottery, and Steam does not verify or deliver an item from this page.",
  },
  ribbon: {
    closeOverlay: "Close overlay",
    close: "Close",
    disclosure:
      "Sandbox mockup: no inventory, no claims, no live mission board, and no checkout. These overlays are layout samples only.",
    rewards: {
      kicker: "Login rewards · layout sample",
      title: "Premium check-in calendar",
      day: "Day {n}",
      featuredReward: "Day {n} Reward: Keycase Drop",
      previewSlot: "Preview slot",
    },
    missions: {
      kicker: "Daily tactical missions · layout sample",
      title: "Active daily challenges",
      names: {
        headshot: "Headshot Specialist",
        utilityEntry: "Utility Entry",
        clutch: "Clutch Protocol",
      },
    },
    shop: {
      kicker: "A.C.E. shop · sandbox mockup",
      title: "Weapon inventory checkout",
      mockBadge: "SANDBOX MOCKUP",
      fullPreview: "Open the full marketplace preview",
      openAria: "Open the A.C.E. shop",
    },
  },
  serverHub: {
    badge: "NO LIVE GAME SERVERS",
    nodes: {
      fra: "Frankfurt Edge",
      sto: "Stockholm Core",
      tlv: "Tel Aviv Relay",
    },
    tileAria: "{name}. Layout tile. No server is connected.",
    tileSample: "Layout sample {sample}. No server is connected.",
    note: "These names and latency samples are a layout. This website has no 128-tick game server and no regional node.",
  },
  telemetry: {
    badge: "NOT A LIVE CLIENT",
    lines: [
      "AC-KERNEL: NOT CONNECTED",
      "HARDWARE BAN MATRIX: NO IDENTIFIER IS COLLECTED",
      "A.C.E. SHIELD LINK: NO CLIENT IS INSTALLED",
    ],
    note: "This website does not run a kernel client, does not scan memory, and does not issue a hardware ban.",
  },
  comingSoon: {
    badge: "NOT AVAILABLE",
    body: "The A.C.E. desktop client is not offered for download. Season 1 on this website does not install software or open a check-in.",
  },
  operative: {
    kicker: "Cinematic tactical viewport · original CSS environment · not Valve art",
    title: "Go Deeper Into CS2: The Ultimate Competitive Platform",
    lede: "Fairer matches, better teammates. Ranks that matter, rewards that count.",
    note: "Campaign copy. Ranked queues, live servers, and prizes are not active.",
    hudLeft: "CT — SITE A",
    hudRight: "T — MID PUSH",
    hudCenter: "SQUAD ENVIRONMENT · LAYOUT",
    plannedReason: "Ranked play stays closed until a real Anti-Cheat integration is implemented and verified.",
  },
  howStatus: {
    label: "A.C.E. REGISTRATION SUBSYSTEM — CALIBRATION ENGINE READY",
    note: "Layout status widget. Ranked queues, Anti-Cheat, and live calibration are not active.",
  },
  shell: {
    primaryNav: "Primary",
    mobileNav: "Mobile",
    elite: "ELITE",
    notificationsTitle: "No live notification feed",
    notificationsAria: "Notifications. Zero unread.",
    connectProfileTitle: "Connect Profile",
    openProfileAria: "Open Command Deck profile",
    connectProfileAria: "Connect Profile through Steam OpenID",
    signOutAria: "Sign out of A.C.E.",
  },
  notFound: {
    kicker: "GRID EXCEPTION",
    title: "ERROR 404 — RADAR TELEMETRY LOST",
    body: "The coordinate you requested does not exist in our active server grid.",
    homeAria: "Return to the A.C.E. homepage lobby",
    cta: "RETURN TO LOBBY",
  },
  error: {
    kicker: "Error",
    title: "Something went wrong",
    body: "This public page could not be displayed. You can try again. No account data was requested on this preview website.",
    retryAria: "Reload this page",
    retry: "Try again",
  },
} as const;
