export const consent = {
  valveDisclaimer:
    "A.C.E is an independent Counter-Strike 2 competition site. It is not affiliated with, authorized, or endorsed by Valve Corporation. Steam and Counter-Strike are marks of their owners. The competition code is A.C.E.'s own text for that game.",
  acceptance: {
    label: "I explicitly accept the Terms of Service, Anti-Cheat EULA, and Privacy Policy.",
    readBefore: "Read",
    termsLink: "Terms",
    afterTerms: ",",
    rulesLink: "Rules / EULA",
    afterRules: ", and",
    privacyLink: "Privacy",
    after: ".",
  },
  categories: {
    legend: "Cookie categories",
    essential: "Essential Cookies",
    required: "Required / Locked",
    analytics: "Analytics Trackers",
    marketing: "Marketing Trackers",
    optional: "Optional",
  },
  banner: {
    kicker: "A.C.E SITE NOTICE",
    copy: {
      before:
        "Accept stores this browser's cookie choices. It is not an electronic signature, it does not collect device telemetry, it does not start an anti-cheat client, and it does not open a competitive queue. Read the",
      termsLink: "Terms of Service",
      afterTerms: ",",
      rulesLink: "Rules",
      afterRules: ", and",
      cookiePolicyLink: "Cookie Policy",
      after: "before you continue.",
    },
    acceptLabel: "Accept cookie choices. This does not open a queue or start an anti-cheat client.",
    accept: "ACCEPT COOKIE CHOICES >",
    rejectLabel: "Reject optional analytics and marketing cookies",
    reject: "REJECT OPTIONAL",
  },
  settings: {
    openLabel: "Open cookie settings",
    open: "Cookie Settings",
    title: "Cookie Settings",
    body: "Essential session cookies are required for Steam OpenID. Optional analytics and marketing flags are stored here only. No advertising or analytics scripts run on this website today.",
    cookiePolicyLink: "Cookie Policy",
    saveLabel: "Save cookie preferences",
    save: "Save",
    closeLabel: "Close cookie settings",
    close: "Close",
  },
  subscriptionDisclosure:
    "Coming soon: checkout does not exist yet, so no subscription can start, nothing is charged, and nothing renews. When billing exists, it will be a monthly plan you can cancel in dashboard settings; a month already paid is not refunded.",
  planned: {
    fallbackLabel: "Planned action",
    badge: "Planned — not available",
  },
} as const;
