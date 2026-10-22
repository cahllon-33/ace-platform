/**
 * R49 legal drafts (English, binding version). Original A.C.E-specific text, not copied from any other platform.
 * Placeholders in [BRACKETS] must be filled by the operator before launch. They are deliberately visible.
 */
export const LEGAL_R49_EFFECTIVE = "[EFFECTIVE DATE]";
export const LEGAL_PLACEHOLDERS = ["[OPERATOR NAME]", "[OPERATOR ADDRESS]", "[CONTACT EMAIL]", "[GOVERNING LAW COUNTRY]", "[EFFECTIVE DATE]", "[DEMO RETENTION PERIOD]"] as const;

export type LegalDoc = { kicker: string; title: string; lede: string; sections: { title: string; body: string[] }[] };

const OP = "[OPERATOR NAME]";
const MAIL = "[CONTACT EMAIL]";

export const TERMS: LegalDoc = {
  kicker: "A.C.E / TERMS OF SERVICE",
  title: "Terms of Service",
  lede: `These Terms are an agreement between you and ${OP} ("A.C.E", "we", "us"), the operator of the A.C.E competitive Counter-Strike 2 platform. By signing in or paying for anything on A.C.E you accept them.`,
  sections: [
    { title: "Who we are", body: [`A.C.E is operated by ${OP}, [OPERATOR ADDRESS]. Contact: ${MAIL}. A.C.E is an independent community platform. It is not affiliated with, endorsed by or sponsored by Valve Corporation. Counter-Strike and Steam are trademarks of Valve Corporation.`] },
    { title: "Your account", body: ["You sign in with your Steam account through Steam OpenID. We never see your Steam password. One person, one A.C.E account: sharing, selling or buying accounts, boosting and using a second account to dodge a restriction are not allowed.", "You must be old enough to use Steam in your country and, if you are under the age of majority where you live, you need a parent or guardian's permission to buy anything."] },
    { title: "Fair play", body: ["Cheats, scripts, exploits, macros that automate play, ghosting, match fixing and harassment are prohibited. The Competitive Rulebook at /rules is part of these Terms. We may warn, restrict, suspend or close an account that breaks these Terms or the Rulebook, and we may void match results and rating changes connected to the violation. A paid plan or purchase never protects an account from enforcement."] },
    { title: "Plans: A.C.E PLUS and A.C.E PREMIUM", body: ["A.C.E PLUS costs US$4 per month and A.C.E PREMIUM costs US$7 per month (local taxes may be added at checkout). Plans renew automatically every month until you cancel. You can cancel at any time from Manage subscription on your account page; your plan stays active until the end of the period you already paid for.", "Plans are cosmetic and convenience features only. No plan, cosmetic or purchase gives any gameplay advantage, changes matchmaking, or adds rating points (RP). Rank names and the ranking system are the same for every player."] },
    { title: "Cosmetics", body: ["Cosmetic items (for example profile frames, banners, rank-card effects and name colours) are one-time purchases that change how your A.C.E profile looks. They have no gameplay effect and no cash value, cannot be transferred, traded or sold, and cannot be exchanged for money. They are a licence to display the item on A.C.E while the service runs and your account is in good standing."] },
    { title: "Tournaments, entry fees and prizes", body: ["Some tournaments may have an optional entry fee set before registration opens. A team is registered only after the payment is confirmed. Only a team captain can register and pay for a team.", "Prizes are never cash. Prizes are limited to non-cash rewards such as cosmetic items or A.C.E subscription time. Entry fees are not pooled, are not paid out to players, and never fund cash prizes. Prizes have no cash value and cannot be exchanged for money.", "If we cancel a paid tournament before it starts, every entry fee for it is refunded. If a team is disqualified for breaking the Rulebook, its entry fee is not refunded."] },
    { title: "Payments and Paddle", body: ["Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns. Your payment, billing details, invoices and sales tax are handled by Paddle under Paddle's Buyer Terms (paddle.com/legal/checkout-buyer-terms). Refunds follow our Refund Policy at /refunds."] },
    { title: "Your content", body: ["You keep the rights to content you add (such as your team name or reports). You give us a licence to display it on A.C.E. Do not post anything unlawful, hateful, or that infringes someone else's rights. We may remove it."] },
    { title: "Match data, demos and GOTV", body: ["Matches on A.C.E servers record statistics and may be recorded as GOTV demos and broadcast live through GOTV to spectators, with a short delay. Your Steam name, team and in-game actions appear in these. See the Privacy Policy for details."] },
    { title: "Availability and changes", body: ["We work to keep A.C.E available but do not promise uninterrupted service. We may change or stop features. If we stop a paid plan, we will not charge you again for it, and any unused paid period is refunded in line with the Refund Policy."] },
    { title: "Liability", body: ["A.C.E is provided as is. To the extent the law allows, we are not liable for indirect or consequential loss, and our total liability to you is limited to the amount you paid us in the 12 months before the claim. Nothing in these Terms limits liability that cannot be limited by law, or your statutory rights as a consumer."] },
    { title: "Ending your account", body: [`You can stop using A.C.E at any time and ask us to delete your account at ${MAIL} (see the Privacy Policy). We may end these Terms if you seriously or repeatedly break them.`] },
    { title: "Changes to these Terms", body: ["We may update these Terms. The new version is published here with a new effective date. A material change takes effect 14 days after publication and never applies to a billing period that has already started."] },
    { title: "Law and disputes", body: [`These Terms are governed by the law of [GOVERNING LAW COUNTRY]. If you are a consumer, you also keep the protection of the mandatory law of the country where you live and may bring a claim there. Please contact ${MAIL} first so we can try to solve the problem.`] },
  ],
};

export const PRIVACY: LegalDoc = {
  kicker: "A.C.E / PRIVACY POLICY",
  title: "Privacy Policy",
  lede: `This policy explains what personal data A.C.E collects, why, and your rights. The controller is ${OP}, [OPERATOR ADDRESS], ${MAIL}.`,
  sections: [
    { title: "Data from Steam sign-in", body: ["When you sign in through Steam OpenID we receive your SteamID64. We then read your public Steam profile (persona name, avatar and profile URL) through the Steam Web API. We never receive your Steam password or payment details. Purpose: creating and securing your account (contract)."] },
    { title: "Account and gameplay data", body: ["We store your A.C.E profile, optional contact email, team memberships, rating points, rank, wins and losses, match statistics (such as kills, deaths, assists, damage and MVPs), queue and ready-check activity, reports you file or that concern you, and moderation records. Purpose: running ranked matches, leaderboards, tournaments and fair-play enforcement (contract and legitimate interest in fair competition)."] },
    { title: "Match servers, demos and GOTV", body: ["Matches are played on game servers hosted by DatHost. The server sees your IP address while you are connected, and server logs may contain it. Matches may be recorded as GOTV demo files (which contain player names, SteamIDs, chat and in-game movement) and may be broadcast through GOTV with a delay. Demos are kept for review of disputes and cheating reports and are deleted when no longer needed, normally within [DEMO RETENTION PERIOD]. Purpose: fair play and dispute resolution (legitimate interest)."] },
    { title: "Payments", body: ["Paddle.com is our Merchant of Record. Paddle collects and processes your payment details, billing address and tax information as an independent controller under its own privacy policy (paddle.com/legal/privacy). We receive from Paddle only what we need to run your plan or order: a customer ID, subscription or transaction ID, plan or item, status, dates and amounts. We never receive your full card number."] },
    { title: "Cookies and local storage", body: ["We use a small number of strictly necessary cookies (sign-in session, language, admin security) and local storage for your cookie choice and interface settings. Details are in the Cookie Policy at /cookies."] },
    { title: "Who we share data with", body: ["Processors that help us run A.C.E: our hosting and database providers (Vercel and Neon), DatHost (game servers), Paddle (payments, as Merchant of Record), and Valve (Steam sign-in and profile data). Public profile, leaderboard and match data are visible to other visitors by design. We do not sell personal data and do not use it for third-party advertising."] },
    { title: "International transfers", body: ["Some providers process data outside your country, including in the United States. Where required, transfers rely on adequacy decisions or the European Commission's Standard Contractual Clauses."] },
    { title: "How long we keep data", body: ["Account data is kept while your account exists. Match results and rating history are kept for the integrity of leaderboards and may be kept in anonymised form after account deletion. Moderation and anti-cheat records are kept as long as needed to enforce bans. Payment records are kept by Paddle and by us for as long as tax and accounting law requires."] },
    { title: "Your rights", body: [`Depending on where you live (including under the GDPR and UK GDPR) you can ask to access, correct, delete or export your data, object to or restrict processing, and withdraw consent. To delete your account and data, email ${MAIL} from your contact email or include your SteamID64; we confirm your identity through Steam sign-in and answer within 30 days. You may also complain to your local data-protection authority.`] },
    { title: "Children", body: ["A.C.E is not directed at children under 13 (or the higher age required in your country). If you believe a child has given us personal data, contact us and we will delete it."] },
    { title: "Changes", body: ["We will publish any change here with a new effective date and, for material changes, tell signed-in users on the site."] },
  ],
};

export const REFUNDS: LegalDoc = {
  kicker: "A.C.E / REFUND POLICY",
  title: "Refund Policy",
  lede: "Paddle.com is the Merchant of Record for A.C.E orders and processes refunds. This policy explains when you can get your money back.",
  sections: [
    { title: "14-day refund window", body: ["You can request a full refund within 14 days of your first payment for A.C.E PLUS or A.C.E PREMIUM, and within 14 days of buying a cosmetic item, for any reason. If you live in the EU or UK, this also covers your statutory 14-day right of withdrawal."] },
    { title: "Renewals", body: ["Monthly renewals can be refunded within 14 days of the renewal payment if you have not used the paid features in that period. You can cancel at any time to stop the next renewal; you keep access until the end of the paid period."] },
    { title: "Tournament entry fees", body: ["Entry fees are refundable until registration closes. If we cancel a paid tournament, every entry fee is refunded automatically. After the tournament starts, or if a team is disqualified for breaking the Rulebook, the entry fee is not refunded."] },
    { title: "Cases we always refund", body: ["Duplicate charges, charges after you cancelled, a purchase that was never delivered to your account, and a paid feature or event we discontinue before you could use it."] },
    { title: "How to request a refund", body: ["Use the receipt email from Paddle (paddle.net) or Manage subscription on your account page, or contact [CONTACT EMAIL] with your order number. Approved refunds go back to the original payment method, normally within 5 to 10 business days. A refunded cosmetic or plan is removed from your account."] },
    { title: "Chargebacks and fraud", body: ["Please contact us before disputing a charge with your bank. We may refuse refunds that show clear abuse (for example repeatedly buying and refunding), and accounts involved in payment fraud may be restricted."] },
    { title: "Your statutory rights", body: ["This policy does not limit any rights you have under the consumer law of your country."] },
  ],
};

export const COOKIES: LegalDoc = {
  kicker: "A.C.E / COOKIE POLICY",
  title: "Cookie Policy",
  lede: "A.C.E uses only the cookies and local storage needed to run the site. We do not use advertising or cross-site tracking cookies.",
  sections: [
    { title: "Strictly necessary cookies", body: ["ace_session: keeps you signed in after Steam sign-in (HTTP-only, up to 14 days).", "ace_locale: remembers the language you chose (1 year).", "ace_admin_gate: security cookie for staff pages only.", "These are required for the service you ask for, so they do not need consent."] },
    { title: "Local storage", body: ["ace-cookie-consent-v1 stores your cookie choice. Other keys store interface preferences, such as sound alerts and whether CS2 was already launched for a match (ace-autoconnect-<lobby>). They stay in your browser and are not sent to us."] },
    { title: "Payment checkout (Paddle)", body: ["When you open the checkout, Paddle loads Paddle.js and may set its own cookies to process the payment securely and prevent fraud. Paddle is responsible for those cookies; see paddle.com/legal/privacy."] },
    { title: "Analytics and marketing", body: ["A.C.E does not currently set analytics or marketing cookies. If that changes, we will ask for your consent first and list them here."] },
    { title: "Your choices", body: ["You can change your choice at any time from Cookie settings in the footer, and you can delete cookies in your browser. Blocking strictly necessary cookies will sign you out."] },
  ],
};
