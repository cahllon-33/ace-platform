export const legalDocs = {
  r14: {
    "effective": "Effective date: {date}",
    "contact": "Contact: support@ace-platform.gg",
    "definitionsTitle": "Definitions",
    "definitions": "In these Terms, \"A.C.E\", \"we\" and \"us\" mean the A.C.E operator. \"Site\" means ace-platform.gg. \"Account\" means the A.C.E profile created through Steam sign-in. \"Plan\" means Free, Plus or Premium. \"Rulebook\" means the Competitive Rulebook at /rules. \"Admin\" means a staff member who applies the Rulebook to an event.",
    "suspensionTitle": "Account restrictions and suspension",
    "suspension": "We may warn, restrict, suspend or close an Account that breaks these Terms or the Rulebook, for example for cheating, account sharing, ban evasion, harassment or fraud. A paid Plan never protects an Account from a restriction.",
    "disputesTitle": "Rule decisions and appeals",
    "disputes": "Match disputes and penalties follow sections 15 and 16 of the Rulebook. You may appeal a decision about your Account by emailing support@ace-platform.gg with your SteamID and your evidence. A staff member who did not make the first decision reviews the appeal and tells you the outcome and the reason. This does not limit any right you have under the law of your country.",
    "changesTitle": "Changes to these Terms",
    "changes": "We may update these Terms. Each new version is published on this page with a new effective date. A material change takes effect 7 days after publication and never applies to a payment period that has already started.",
    "languageTitle": "Language",
    "language": "These Terms are written in English. Translations are provided for convenience. If a translation and the English text differ, the English text applies.",
    "retentionTitle": "Data retention",
    "retention": "Account records are kept while your Account exists. A session ends when you sign out or it expires.",
  },
  translationNotice:
    "This page is a translation provided for convenience. If the translation and the English text differ, the English text applies.",
  terms: {
    meta: {
      title: "Terms of Service",
      description:
        "A.C.E website Terms of Service for this Counter-Strike 2 competition site. Ranked, payments, and Anti-Cheat are not live.",
    },
    kicker: "ACE-LEGAL / TERMS OF SERVICE",
    title: "Terms of Service",
    lede: "These Terms govern your use of the A.C.E website and your A.C.E. Account. The Competitive Rulebook at /rules, the Privacy Policy, the Cookie Policy and the Premium terms form part of these Terms.",
    sections: {
      operator: {
        title: "1. Operator and independence",
        paragraphs: [
          "The service is run by the A.C.E operator.. Using the site means you accept these Terms, the Privacy Policy, the Cookie Policy, and the Competitive Rulebook.",
        ],
      },
      eligibility: {
        title: "2. Eligibility and accounts",
        paragraphs: [
          "Accounts are created only through official Steam OpenID sign-in, one Account per person. A.C.E never asks for your Steam password.",
        ],
      },
      notActive: {
        title: "3. What this website is not",
        paragraphs: [
          "Ranked matchmaking, live CS2 game servers, working AI Anti-Cheat, billing, and prizes are not active. Lobby clocks and integrity panels are previews unless a page states otherwise.",
        ],
      },
      subscriptions: {
        title: "Plans, billing and cancellation",
        paragraphs: [
          "Free costs $0, Plus $4 per month and Premium $7 per month. Checkout does not exist yet, so nothing can be bought or charged today. When billing opens, Plans renew monthly; you can cancel at any time in dashboard settings and keep access until the end of the paid month; a partial month is not refunded unless the law of your country requires it. No Plan adds Rating Points, boosts a rating or changes matchmaking. Priority support for Premium, once launched, means Premium requests are handled first; it has no guaranteed response time.",
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
          "To the extent permitted by law, A.C.E is not liable for lost rank, lost cosmetics that were never real items, or third-party Steam / CS2 outages. Mandatory consumer rights in your country are not excluded where they cannot be waived.",
        ],
      },
      copyright: {
        title: "7. Copyright in original site material",
        paragraphs: [
          "Original text, page layout, emblems, and graphics created for this website belong to A.C.E. You may not copy, republish, or scrape that original material for another product without written permission. Where the law allows, A.C.E may enforce that right, including by a claim. This notice does not file a case, does not set damages, and does not guarantee a court result.",
          "Counter-Strike 2, Steam, and the map names Dust II, Mirage, Inferno, Nuke, Ancient, Anubis, and Train belong to Valve. A.C.E does not claim them. Opening this website does not cancel a legal right and does not sign a contract.",
        ],
      },
      contact: {
        title: "8. Contact",
        paragraphs: [
          "support@ace-platform.gg — A.C.E",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Privacy Policy",
      description:
        "A.C.E Privacy Policy: strict-necessity data, Steam OpenID only, no Steam passwords, no behavioral data sales.",
    },
    kicker: "ACE-LEGAL / PRIVACY POLICY",
    title: "Privacy Policy",
    lede: "This Privacy Policy explains what personal data A.C.E stores when you use this website, why, and for how long. If a translation differs from the English text, the English text applies.",
    strictNecessity: {
      title: "Strict Necessity philosophy",
      intro:
        "We collect the minimum account data required to identify a competitive player and stop obvious fraud on our own service. We do not harvest unnecessary logs, do not scrape private Steam inventory, and do not sell third-party behavioral data.",
      storedIntro: "Currently stored after a successful Steam OpenID sign-in:",
      stored: [
        {
          label: "Verified 64-bit SteamID",
          body: "returned by Steam’s official OpenID assertion, checked on the server before an A.C.E account is created or updated.",
        },
        {
          label: "Public Steam display name",
          body: "when a Steam Web API key is configured. This is a persona string, not an email inbox.",
        },
        {
          label: "A.C.E account records",
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
        before: "Steam sign-in leaves A.C.E, authenticates on Steam, and returns to",
        after:
          ". The server verifies the OpenID assertion (including claimed identity and Steam’s signed parameters) before writing a session. Steam’s privacy policy governs data Steam holds. A.C.E only persists the verified SteamID and public persona fields needed to operate the account.",
      },
      footerLinks:
        "External network icons in the footer are directory links to public websites. They are not official A.C.E accounts and do not embed tracking widgets.",
    },
    rights: {
      title: "Your rights",
      before:
        "If you are in a region with personal-data rights, you may request access, correction, or deletion of your A.C.E account data by emailing",
      after:
        ". Deleting a website Account does not change a Steam or VAC decision made by Valve.",
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
      body: "A.C.E. Contact: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Cookie Policy",
      description:
        "A.C.E cookie and telemetry privacy audit. Essential session cookies only unless you opt into reserved optional categories.",
    },
    kicker: "ACE-LEGAL / COOKIE POLICY",
    title: "Cookie Policy",
    lede: "This Cookie Policy lists the cookies this website actually sets, the categories reserved for later, and what is not collected.",
    audit: {
      title: "Trackers on this website",
      body: "A.C.E does not run advertising pixels, Google Analytics, Meta Pixel, fingerprinting SDKs, or other third-party behavioral trackers on this public website. Optional “Analytics Trackers” and “Marketing Trackers” in the consent tray are categories only. Checking them does not load a script today. If a tracker is added later, it will read the stored preference first and stay off unless you opted in.",
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
      body: "Reserved. A.C.E does not sell, rent, or broker behavioral profiles. There is no marketing tag manager on this site.",
    },
    change: {
      title: "How to change your choice",
      body: "Use Cookie Settings in the footer, or clear site data in your browser. Rejecting optional categories never blocks Steam sign-in.",
    },
  },
} as const;
