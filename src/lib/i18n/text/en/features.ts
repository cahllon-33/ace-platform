export const features = {
  page: {
    meta: {
      title: "Features",
      description:
        "Specified A.C.E. Anti-Cheat Kernel architecture, biometric Face Scan linkage, and ten skill calibration tiers. These systems are not live on this website.",
    },
    header: {
      kicker: "ACE-FEATURES / KERNEL / FACE-SCAN / CALIBRATION",
      title: "Platform feature specification",
      lede: "This page is the production-grade technical map for three intended A.C.E. systems: the Autonomous Anti-Cheat Kernel, biometric Face Scan linkage, and the ten-tier skill calibration ladder. Nothing on this page is a live kernel, a live camera product, or a live ranked queue. Steam OpenID, 5v5 teams, bracket layouts, and Elo-style rating math exist in this repository. Dedicated CS2 servers, payments, prizes, and a downloadable integrity client do not.",
    },
    kernel: {
      title: "Anti-Cheat Kernel architecture",
      paragraphs: [
        "The specified Autonomous Secure Shell is a hardware-linked integrity client that would run beside Counter-Strike 2 on a player machine and report a signed ALLOW or DENY state to A.C.E. managed servers. The kernel design is fail-closed: if the client is missing, stopped, outdated, spoofed, or unverified, ranked admission is denied. The browser is never an eligibility oracle. Ranked FIND MATCH on this website already fail-closes for that reason.",
        "Intended kernel layers include a user-mode handshake that binds the verified 64-bit SteamID to the A.C.E. account, a hardware-identifier (HWID) attestation surface, a signature watchlist for known cheat families, and a server-to-server eligibility route protected by a shared secret. A cheat-signature validation, a refused integrity check, or a spoofed device identifier is specified to produce an immediate account status change to BANNED or PERM_BANNED and, when a billing product exists, complete forfeiture of prepaid subscription time with zero refund liability. No such client ships with this website. Coming Soon download cards are layout only.",
      ],
      stats: [
        { label: "KERNEL STATE", value: "Not deployed" },
        { label: "RANKED QUEUE", value: "Fail-closed" },
        { label: "HWID STORE", value: "Not collected on this site" },
      ],
    },
    faceScan: {
      title: "Biometric Face Scan linkage",
      paragraphs: [
        "Face Scan is a specified future identity-binding layer, not a camera product on this website. The intended design would, only after explicit consent and a separate legal review, bind a liveness-checked facial template to the same A.C.E. account that already holds a server-verified SteamID. The purpose is to resist account sharing used to evade a prior restriction. A.C.E. does not collect facial images, facial embeddings, email addresses, or hardware fingerprints today. The live privacy posture remains Strict Necessity: verified 64-bit SteamID and public Steam display name only.",
        "If Face Scan is ever implemented, it will not replace Steam OpenID, will not be used to sell behavioral advertising, and will not unlock ranked queues by itself. Ranked admission still requires a verified Anti-Cheat path. Until that review exists, any Face Scan panel in the lobby is a layout placeholder.",
      ],
    },
    calibration: {
      title: "Ten skill calibration tiers",
      intro:
        "Competitive Calibration uses a documented Elo-style formula (version {version}, K-factor {kFactor}, scale {scale}). New accounts start at Rank 1 (Recruit), FREE subscription, ACTIVE status, and {startingRating} competitive rating. Crystal labels on the lobby are visual aliases. Paid cosmetics never buy rating, easier opponents, 128-tick servers, or queue priority. There is no live 128-tick product for sale.",
      table: {
        level: "Level",
        engineName: "Engine name",
        crystalAlias: "Crystal alias",
        minRating: "Min rating",
      },
      divisions: {
        before:
          "Divisions I, II, and III on the lobby are showcase chips. They change layout metrics only. Live matchmaking by division does not exist. See ",
        middle: " for the 3D turntable and ",
        after: " for the binding competition text.",
      },
    },
  },
  loot: {
    kicker: "Sandbox cosmetics · checkout simulated",
    title: "A.C.E. LOOT ARCHITECTURE — WEAPON DROPS",
    lede: "Original A.C.E. finish names on CS2 weapon types. These are not Valve items, not tradable skins, and not real prizes. Checkouts are simulated.",
    mockDrop: "Mock drop",
    multiplierLabel: "Win Rate Multiplier Requirements",
    ladderLabel: "Weekly Ladder Drops",
    multiplierValue: "{multiplier}× template",
    ladderValue: "Weekly slot · mock",
    checkout: "Checkout simulated",
  },
  communityRail: {
    kicker: "Layout feed · not live",
    newsTitle: "Latest Ladder News",
    newsItems: [
      "Bracket field remains empty — 0 of 100 teams.",
      "Ranked search stays closed until Anti-Cheat exists.",
    ],
    prizesTitle: "Daily Skin Prizes",
    prizesBody:
      "No prizes are issued. Cosmetic cards on this site are sandbox mocks. Checkouts are simulated.",
  },
  identityPreview: {
    badge: "Preview — not confirmed",
    cards: {
      faceScan: {
        title: "Live Face Scan Verified",
        copy: "Identity liveness is a planned provider check. This card is a layout preview. No scan has been performed and no biometric data is stored.",
      },
      hardwareId: {
        title: "Hardware ID Linked",
        copy: "Device binding is a planned integrity signal. This card is a layout preview. No hardware fingerprint has been collected.",
      },
    },
  },
  preview: {
    fallbackTitle: "Preview",
    kicker: "Layout destination · not a live product",
    returnHome: "Return home",
    pages: {
      support: {
        title: "Support",
        body: "A public support desk is not staffed yet. This link is a footer destination placeholder.",
      },
      "anti-cheat": {
        title: "Anti-Cheat Overview",
        body: "A.C.E. does not have a working Anti-Cheat product. Ranked matchmaking stays closed until a real integration exists.",
      },
      "download-client": {
        title: "Download Client",
        body: "There is no A.C.E. desktop client to download. A native client is not in the current web stage.",
      },
      "mobile-app": {
        title: "Mobile App",
        body: "There is no A.C.E. mobile app. This is a footer layout link only.",
      },
      news: {
        title: "News",
        body: "There is no live newsroom. This is a footer layout link only.",
      },
      about: {
        title: "About Us",
        body: "A.C.E. is an independent Counter-Strike 2 competition site in public website preview. It is not affiliated with Valve.",
      },
      advertising: {
        title: "Advertising",
        body: "There is no advertising inventory for sale. This is a footer layout link only.",
      },
      developers: {
        title: "Developers",
        body: "There is no public developer program yet. Server eligibility APIs in this repo are internal adapters, not a partner SDK.",
      },
      press: {
        title: "Press",
        body: "There is no press kit or newsroom. This is a footer layout link only.",
      },
      jobs: {
        title: "Jobs",
        body: "There are no published job listings. This is a footer layout link only.",
      },
      terms: {
        title: "Terms of Service",
        body: "The governing Terms of Service are published at /terms. The tournament rulebook is at /rules.",
      },
      privacy: {
        title: "Privacy Policy",
        body: "The Privacy Policy is published at /privacy. Steam OpenID is the only sign-in path; Steam passwords are never collected.",
      },
      eula: {
        title: "Anti-Cheat EULA",
        body: "There is no Anti-Cheat EULA because Anti-Cheat is not active. Ranked remains fail-closed.",
      },
    },
  },
} as const;
