export const pricing = {
  meta: {
    title: "Pricing",
    description:
      "A.C.E. membership: Free {free}, Plus {plus}/mo, Premium {premium}/mo. Integer-locked display prices.",
  },
  period: {
    monthly: "/mo",
  },
  hero: {
    badge: "Membership",
    title: "Access strata",
    lede: "Free {free}. Plus {plus}/mo. Premium {premium}/mo. Those figures are integer-locked. Paid plans never buy rating or easier opponents.",
  },
  tiers: {
    free: {
      name: "FREE",
      note: "Graphite",
      title: "Open access today",
      points: [
        "Sign in with Steam OpenID. A.C.E. never asks for a Steam password.",
        "A stored rating starts at 1,000. No match result has changed it.",
        "All public pages: play, tournaments, leaderboard, teams and rules.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Thank-you letter and support",
      points: [
        "Everything in Free. Billing opens soon; nothing is charged today.",
        "Opens a thank-you letter on this site: what is included, what is not, and support@ace-platform.gg.",
        "Does not buy rating or easier opponents. Gold profile badges come from stored match data for every player. The elite seal and special badges show only when the stored tier is already Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Thank-you letter and five-player squad",
      points: [
        "Everything in Free. Billing opens soon; nothing is charged today.",
        "Opens a thank-you letter on this site: what is included, what is not, and support@ace-platform.gg.",
        "Then opens Squads: a captain signed in with Steam can store a five-player clan.",
        "No prize, weapon, live queue, or game server. A stored clan is not a seat on the 100-team board.",
      ],
    },
  },
  card: {
    elite: "ELITE",
    stayFree: "Stay on Free",
    freeNote: "Open now · no checkout",
    choose: "Choose {plan}",
    chooseAria: "Choose {plan} {price} per month",
  },
  billing: {
    kicker: "BILLING TIMELINE MATRIX",
    title: "How billing will work once it exists",
    body: "Plus is exactly {plus}/mo. Premium is exactly {premium}/mo. Checkout is not live on this website. Choosing Plus or Premium opens the receipt on this website. Neither button charges a card or sends email.",
    display: {
      label: "01 · DISPLAY",
      body: "Free {free}. Plus {plus}/mo. Premium {premium}/mo. Paid tiers never buy rating or easier opponents.",
    },
    rolling: {
      label: "02 · ROLLING CYCLE",
      body: "When billing exists, charges renew on a monthly rolling cycle. Partial month usage is non-refundable. Cancellation stops the next cycle and does not erase the current prepaid window.",
    },
    today: {
      label: "03 · TODAY",
    },
  },
  compare: {
    kicker: "What A.C.E. can promise today",
    title: "Membership comparison",
    note: "Every row is true on this website now. Display prices are not a live checkout, and a paid label does not open a queue.",
    caption: "Free, Plus, and Premium compared by what the site does today",
    includedToday: "Included today",
    columns: {
      free: "Free",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Public site",
        detail: "Home, play, tournaments, leaderboard, teams, rules and terms.",
      },
      steamSignIn: {
        feature: "Steam sign-in",
        detail: "Official Steam OpenID. A.C.E. never asks for a Steam password.",
      },
      startingRating: {
        feature: "Starting rating",
        detail: "The number stored on a new account before any recorded match.",
      },
      recordedMatches: {
        feature: "Recorded matches",
        detail: "Wins and losses written from a finished A.C.E. match.",
      },
      rankedQueue: {
        feature: "Ranked queue",
        detail: "FIND MATCH stays closed until a real queue exists.",
      },
      cs2Servers: {
        feature: "CS2 servers",
        detail: "This site does not send a server address or a connect link.",
      },
      antiCheatClient: {
        feature: "Anti-cheat client",
        detail: "Nothing is downloaded from this website.",
      },
      charge: {
        feature: "Charge",
        detail: "Choosing Plus or Premium does not take a card.",
      },
      ratingForSale: {
        feature: "Rating for sale",
        detail: "A paid label never buys rating or easier opponents.",
      },
      prizeOrWeapon: {
        feature: "Prize or weapon",
        detail: "No skin, knife, or prize pool is delivered.",
      },
      goldEliteSeal: {
        feature: "Elite seal & special badges",
        detail:
          "Premium only, read from the stored tier on the server. Cosmetic. Checkout does not set that tier.",
      },
    },
    cells: {
      open: "Open",
      yes: "Yes",
      noneYet: "None yet",
      closed: "Closed",
      notConnected: "Coming soon",
      notShipped: "Not shipped",
      noCharge: "No charge",
      notForSale: "Not for sale",
      none: "None",
      no: "No",
      storedTierOnly: "Stored tier only",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Plus receipt",
      metaDescription:
        "The A.C.E. Plus letter shown on this website. Checkout is not live, so nothing is charged and no email is sent.",
      planName: "A.C.E. Plus",
      nextLabel: "Continue on A.C.E.",
      nextBody:
        "The public pages stay open. This selection does not open a queue and does not change the stored tier.",
    },
    premium: {
      metaTitle: "Premium receipt",
      metaDescription:
        "The A.C.E. Premium letter shown on this website. Checkout is not live, so nothing is charged and no email is sent.",
      planName: "A.C.E. Premium",
      nextLabel: "Continue to Squads",
      nextBody:
        "Continue to Squads. The page will ask whether you are a team of five. Seat 1 is the signed-in Steam account. Seats 2 to 5 are the other players. Saving a clan still does not charge this price.",
    },
  },
  letter: {
    kicker: "{plan} · {price} per month",
    title: "Thank you for your selection",
    flag: "This letter is shown on the website. No email was sent. No card was charged. Checkout is not live, and the stored membership tier was not changed.",
    greeting: "Dear player,",
    intro:
      "Thank you for selecting {plan}. This page is the receipt. It records the display price, what that selection includes today, what it does not include, and the support address published on this website.",
    selected: {
      title: "What was selected",
      items: [
        "Plan name: {plan}.",
        "Display price: {price} per month. The figure is a label, not a charge.",
        "Payment: none. Choosing this plan does not take a card.",
        "Email: none. A.C.E. does not send this letter to an inbox.",
        "Stored tier: unchanged. Special badges and the elite seal appear only when the account already stores Premium.",
        "Rating: not for sale. A new account still starts at 1,000.",
      ],
    },
    today: {
      title: "What you can use today",
      items: [
        "The public site: home, play, tournaments, leaderboard, teams, rules and terms.",
        "Steam sign-in through official Steam OpenID. A.C.E. never asks for a Steam password.",
        "The same public pages as Free. This price does not open a separate queue.",
      ],
    },
    excluded: {
      title: "What this selection does not include",
      items: [
        "A live ranked queue. FIND MATCH stays closed.",
        "A Counter-Strike 2 server, a server address, or a connect link.",
        "An anti-cheat download. A.C.E Shield is in development.",
        "A prize, a skin, a knife, or a prize pool.",
        "A seat on the 100-team board. That board still shows 0 registered until a season opens.",
        "Easier opponents, a bought rating, or a different public site from Free.",
      ],
    },
    trouble: {
      title: "If something does not work",
      items: [
        "You expected a charge or a paid tier. None was applied. The account stays as it was.",
        "You expected this letter in an inbox. It only exists on this page.",
        "Steam did not connect. Use Connect Profile and accept the terms checkbox first. Never type a Steam password into A.C.E.",
        "You need help. Use the support address below, or open the help pages on this website.",
      ],
    },
    support: {
      title: "Support",
      addressBefore: "The support address printed on this website is ",
      addressAfter: ".",
      helpBefore: "Help on the site: ",
      supportLink: "Support",
      helpAnd: " and ",
      contactLink: "Contact",
      rulesBefore: ". The rules are on ",
      rulesLink: "Rules",
      rulesAnd: " and ",
      termsLink: "Terms",
      helpAfter:
        ". A prompt on Support does not open a ticket, and text typed on Contact is not delivered.",
    },
    next: {
      title: "Next step",
    },
  },
  telemetry: {
    kicker: "PLUS / PREMIUM TELEMETRY",
    copy: "DASHBOARD TELEMETRY LOCKED — Upgrade your subscription plan to A.C.E. Plus or Premium to unlock dynamic real-time stat curves and weapon specialty indexes.",
    cta: "Open pricing tables",
  },
} as const;
