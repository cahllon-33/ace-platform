export const legalDocs = {
  translationNotice:
    "This page is a translation provided for convenience. If the translation and the English text differ, the English text applies.",
  terms: {
    meta: {
      title: "Terms of Service",
      description:
        "A.C.E. website Terms of Service for this Counter-Strike 2 competition site. Ranked, payments, and Anti-Cheat are not live.",
    },
    kicker: "ACE-LEGAL / TERMS OF SERVICE",
    title: "Terms of Service",
    lede: "These Terms govern use of the A.C.E. public website and connected account APIs. Match length, the map pool, roster lock, and protests are detailed in the Competitive Rulebook at /rules, which is incorporated here.",
    sections: {
      operator: {
        title: "1. Operator and independence",
        paragraphs: [
          "The service is operated by A.C.E. Competitions Ltd. (company registration number to be published). Using the site means you accept these Terms, the Privacy Policy, the Cookie Policy, and the Competitive Rulebook.",
        ],
      },
      eligibility: {
        title: "2. Eligibility and accounts",
        paragraphs: [
          "You must be old enough to use Steam in your country. Accounts are created only through official Steam OpenID. You may not share an account to evade a restriction. A.C.E. never asks for a Steam password.",
        ],
      },
      notActive: {
        title: "3. What this website is not",
        paragraphs: [
          "Ranked matchmaking, live CS2 game servers, working AI Anti-Cheat, billing, and prizes are not active. Lobby clocks and integrity panels are previews unless a page states otherwise.",
        ],
      },
      subscriptions: {
        title: "4. Proposed subscriptions",
        paragraphs: [
          "Plus ($4/mo) and Premium ($7/mo) are display prices. There is no checkout on this website yet, and the plan buttons show Coming soon. When billing exists, the cancellation rule on /pricing applies: monthly rolling subscription, cancel in dashboard settings, partial months non-refundable.",
        ],
      },
      antiCheat: {
        title: "5. Anti-cheat client (not shipped)",
        paragraphs: [
          "There is no downloadable anti-cheat client on this website. The competition code at /rules does not collect a hardware identifier and does not ban a device. Account sharing used to evade a restriction is forbidden.",
        ],
      },
      liability: {
        title: "6. Limitation of liability",
        paragraphs: [
          "To the extent permitted by law, A.C.E. is not liable for lost rank, lost cosmetics that were never real items, or third-party Steam / CS2 outages. Mandatory consumer rights in your country are not excluded where they cannot be waived.",
        ],
      },
      copyright: {
        title: "7. Copyright in original site material",
        paragraphs: [
          "Original text, page layout, emblems, and graphics created for this website belong to A.C.E. Competitions Ltd. You may not copy, republish, or scrape that original material for another product without written permission. Where the law allows, A.C.E. may enforce that right, including by a claim. This notice does not file a case, does not set damages, and does not guarantee a court result.",
          "Counter-Strike 2, Steam, and the map names Dust II, Mirage, Inferno, Nuke, Ancient, Anubis, and Train belong to Valve. A.C.E. does not claim them. Opening this website does not cancel a legal right and does not sign a contract.",
        ],
      },
      contact: {
        title: "8. Contact",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Company registration number to be published.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "A.C.E. Privacy Policy: strict-necessity data, Steam OpenID only, no Steam passwords, no behavioral data sales.",
    },
    kicker: "ACE-PRIVACY / GDPR / STRICT NECESSITY",
    title: "Privacy Policy",
    lede: "This Privacy Policy explains what A.C.E. Competitions Ltd. stores when you use this website. Translations are provided for convenience; the English version is the reference text. This is not a claim that every future product surface already exists.",
    strictNecessity: {
      title: "Strict Necessity philosophy",
      intro:
        "We collect the minimum account data required to identify a competitive player and stop obvious fraud on our own service. We do not harvest unnecessary logs, do not scrape private Steam inventory, and do not sell third-party behavioral data.",
      storedIntro: "Currently stored after a successful Steam OpenID sign-in:",
      stored: [
        {
          label: "Verified 64-bit SteamID",
          body: "returned by Steam’s official OpenID assertion, checked on the server before an A.C.E. account is created or updated.",
        },
        {
          label: "Public Steam display name",
          body: "when a Steam Web API key is configured. This is a persona string, not an email inbox.",
        },
        {
          label: "A.C.E. account records",
          body: "such as rank level, rating points, wins/losses, team membership, and session token hashes.",
        },
      ],
      notCollected: {
        before: "Email addresses and encrypted hardware profiles are",
        strong: "not collected on this website today",
        after:
          ". Face-scan and HWID cards in the lobby are design previews. If a future Anti-Cheat client or support channel requires an email or a hardware fingerprint, collection will stay limited to fraud prevention, will be disclosed here first, and will not be sold as advertising data.",
      },
    },
    neverCollect: {
      title: "What we never collect",
      items: [
        "Steam passwords. Sign-in is Steam OpenID / Steam’s official flow only.",
        "Payment card numbers. Checkout is not implemented.",
        "Kernel telemetry. No Anti-Cheat client ships with this website.",
      ],
    },
    steamBoundary: {
      title: "Third-party embed and Steam OpenID boundary",
      callback: {
        before: "Steam sign-in leaves A.C.E., authenticates on Steam, and returns to",
        after:
          ". The server verifies the OpenID assertion (including claimed identity and Steam’s signed parameters) before writing a session. Steam’s privacy policy governs data Steam holds. A.C.E. only persists the verified SteamID and public persona fields needed to operate the account.",
      },
      footerLinks:
        "External network icons in the footer are directory links to public websites. They are not official A.C.E. accounts and do not embed tracking widgets.",
    },
    rights: {
      title: "GDPR-style rights",
      before:
        "If you are in a region with personal-data rights, you may request access, correction, or deletion of your A.C.E. account data by emailing",
      after:
        ". Ranked Anti-Cheat hardware holds are not live; deletion of a website account is not a CS2 VAC appeal.",
    },
    cookies: {
      title: "Cookies",
      before: "See the",
      link: "Cookie Policy",
      after:
        "and the consent tray. Essential session cookies are required after login. Optional categories are unused until a tracker is actually added.",
    },
    controller: {
      title: "Controller",
      body: "A.C.E. Competitions Ltd. Company registration number to be published. Contact: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Cookie Policy",
      description:
        "A.C.E. cookie and telemetry privacy audit. Essential session cookies only unless you opt into reserved optional categories.",
    },
    kicker: "ACE-PRIVACY / COOKIES / TELEMETRY AUDIT",
    title: "Cookie Policy",
    lede: "This page is the telemetry privacy audit for ace-platform.gg. It describes cookies this website actually uses, categories reserved for later, and what is not collected.",
    audit: {
      title: "100% telemetry audit (current build)",
      body: "A.C.E. does not run advertising pixels, Google Analytics, Meta Pixel, fingerprinting SDKs, or other third-party behavioral trackers on this public website. Optional “Analytics Trackers” and “Marketing Trackers” in the consent tray are categories only. Checking them does not load a script today. If a tracker is added later, it will read the stored preference first and stay off unless you opted in.",
    },
    essential: {
      title: "Essential cookies [Required / Locked]",
      session: {
        label: "Session cookie",
        body: "— set only after a verified Steam OpenID callback. HttpOnly, not readable by page JavaScript, used to keep you signed in on A.C.E.",
      },
      necessity:
        "These cookies are strictly necessary to operate an authenticated account. They are not advertising IDs.",
    },
    analytics: {
      title: "Analytics Trackers [Optional]",
      before: "Reserved. No product-analytics vendor is configured. Your choice is stored locally in",
      after: "so a future first-party usage metric can respect it.",
    },
    marketing: {
      title: "Marketing Trackers [Optional]",
      body: "Reserved. A.C.E. does not sell, rent, or broker behavioral profiles. There is no marketing tag manager on this site.",
    },
    change: {
      title: "How to change your choice",
      body: "Use Cookie Settings in the footer, or clear site data in your browser. Rejecting optional categories never blocks Steam sign-in.",
    },
  },
} as const;
