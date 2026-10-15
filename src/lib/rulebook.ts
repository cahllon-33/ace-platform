/**
 * A.C.E. Competition Rulebook. Original text written for A.C.E.
 * Clauses flagged `pending` depend on systems that are not live yet (match servers, ranked queues,
 * the anti-cheat client, payouts) and apply only once those systems are deployed.
 */
export type RuleClause = { text: string; pending?: boolean };
export type RuleSection = { id: string; title: string; summary?: string; clauses: RuleClause[] };

export const RULEBOOK_VERSION = "1.1";
export const RULEBOOK_EFFECTIVE = "15 October 2026";

export const RULEBOOK: RuleSection[] = [
  {
    id: "s1",
    title: "Scope and definitions",
    clauses: [
      { text: "This rulebook governs every competition that A.C.E. organizes: cups, leagues, ladders, and showmatches. An event page may add event-specific terms; where it conflicts with this rulebook, the event page wins for that event only." },
      { text: "\"Organizer\" means the A.C.E. operations team. \"Admin\" means an organizer member assigned to an event. \"Team\" means a registered roster. \"Captain\" means the player who represents the team. \"Match\" means one or more maps between two teams. \"Series\" means a best-of-one, best-of-three, or best-of-five set of maps." },
      { text: "By registering, every player and team agrees to this rulebook, the Terms of Service, and the Privacy Policy." },
      { text: "Admins may decide situations this rulebook does not cover, guided by fair play and the spirit of these rules. Such decisions are recorded and published with the match result." },
    ],
  },
  {
    id: "s2",
    title: "Eligibility",
    clauses: [
      { text: "Players must be at least 16 years old, or the minimum age set by the event page or local law if higher. Admins may request proof of age before a prize is released." },
      { text: "Players must not be under an active A.C.E. suspension, and must not hold a game ban on the Steam account they use that was issued within the last 2 years." },
      { text: "Organizer staff and admins may not play in an event they administer." },
      { text: "Region or rating limits are set per event and published before registration opens. A player outside the limits may not play, even as a substitute." },
    ],
  },
  {
    id: "s3",
    title: "Accounts and identity",
    clauses: [
      { text: "Each player uses one A.C.E. account linked to one Steam account through Steam sign-in. A.C.E. never asks for a Steam password; anyone who does is not the organizer." },
      { text: "Sharing an account, playing on another person's account, or letting another person play on yours is forbidden. Both accounts are penalized." },
      { text: "Creating a new account to avoid a penalty, a rating, or a restriction is ban evasion and is treated as an integrity offence (section 14)." },
      { text: "Display names and avatars must follow the conduct rules (section 13). Admins may require a change before a match." },
      { text: "Players must keep a reachable contact method on their account during an event. Notices sent to that contact count as delivered." },
    ],
  },
  {
    id: "s4",
    title: "Teams and rosters",
    clauses: [
      { text: "A roster has 5 starters and up to 2 substitutes. A team may also name 1 coach. A player may be on only one roster per event." },
      { text: "Rosters lock at the time stated on the event page. After lock, a team may make at most 1 roster change per event, approved by an admin, and only to replace a player who is unable to continue." },
      { text: "A team must start every map with 5 players from its locked roster. A team with 4 players may start only if the opposing captain agrees in writing in the match chat; otherwise section 12 applies." },
      { text: "Substitutions are allowed between maps of a series, not during a map, except for a disconnect that cannot be resolved (section 11)." },
      { text: "Team names, tags, and logos must not imitate another team, an organizer, or a brand the team does not own." },
    ],
  },
  {
    id: "s5",
    title: "Captains",
    clauses: [
      { text: "Each team names one captain and may name one deputy. Only the captain or deputy may agree to rule-relevant decisions, call pauses, or file disputes." },
      { text: "The captain is responsible for the team being ready on time, for submitting the result, and for keeping screenshots and demos needed for a dispute." },
      { text: "Statements made by the captain in the official match chat bind the team." },
    ],
  },
  {
    id: "s6",
    title: "Map pool and veto",
    clauses: [
      { text: "The active map pool is: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis, and Train. Changes are announced at least 7 days before an event starts." },
      { text: "The higher seed is Team A. If seeds are equal, a coin toss decides. Team A chooses whether to ban first or second." },
      { text: "Best-of-one: teams alternate bans until one map remains (A, B, A, B, A, B). The team that did not ban last picks the starting side." },
      { text: "Best-of-three: A bans, B bans, A picks, B picks, A bans, B bans; the remaining map is the decider. The team that did not pick a map chooses the starting side on it. Side on the decider is chosen by knife round." },
      { text: "Best-of-five: A bans, B bans, then A, B, A, B pick; the remaining map is the decider, with sides as in best-of-three." },
      { text: "Each veto step has 60 seconds. If a captain does not act in time, the admin applies a random ban or pick for that step." },
    ],
  },
  {
    id: "s7",
    title: "Match procedure",
    clauses: [
      { text: "Both teams must be in the match lobby 15 minutes before the scheduled start, with all players checked in." },
      { text: "Matches are played on servers provided by A.C.E. Teams may not move a match to another server without admin approval.", pending: true },
      { text: "A knife round is played only where this rulebook calls for it. Otherwise starting sides follow the veto." },
      { text: "Once a map is live, it is played to completion. Restarts are allowed only under section 9." },
      { text: "Within 15 minutes of the end of a match, both captains confirm the result. The winner uploads a screenshot of the final scoreboard. Demos are kept by the server for at least 14 days.", pending: true },
    ],
  },
  {
    id: "s8",
    title: "Match settings",
    clauses: [
      { text: "Maps are played as MR12: the first team to win 13 rounds wins the map, sides swap after 12 rounds." },
      { text: "A 12-12 tie goes to overtime in blocks of 6 rounds (MR3) with $10,000 start money. The first team to win 4 rounds in a block wins. Overtime repeats until a winner is found." },
      { text: "Other settings (round time, bomb timer, buy time, money, friendly fire) follow the current Counter-Strike 2 competitive defaults unless the event page says otherwise." },
      { text: "Custom configs, scripts, or binds that perform more than one action per key press are not allowed, except jump-throw binds." },
    ],
  },
  {
    id: "s9",
    title: "Server and technical issues",
    clauses: [
      { text: "A server problem that affects both teams (crash, severe lag, wrong settings) must be reported to the admin at once by a captain." },
      { text: "If a server crashes before the first kill of round 1, the map restarts. After that, the map is restored from the last completed round with the same score and money where the server supports it; if it does not, the admin decides a fair restart point.", pending: true },
      { text: "Problems on a player's own side (hardware, internet, game client) are that team's responsibility and are handled through technical pauses and section 11." },
      { text: "Exploiting a server or game bug to gain an advantage is not a technical issue. It is handled under section 14." },
    ],
  },
  {
    id: "s10",
    title: "Pauses",
    clauses: [
      { text: "Each team has 3 tactical pauses of 30 seconds per map, plus 1 extra in overtime. Tactical pauses are taken during freeze time." },
      { text: "Each team has 10 minutes of technical pause per map. The captain states the reason in chat before or as the pause starts." },
      { text: "Players may not leave the server, swap players, or change settings during a pause unless the admin allows it." },
      { text: "Unpausing must be agreed by both captains in chat. Using a pause to delay or disrupt the opponent is a conduct offence." },
    ],
  },
  {
    id: "s11",
    title: "Disconnects",
    clauses: [
      { text: "If a player disconnects, the team may use a technical pause. The round in progress is not replayed." },
      { text: "If the player cannot return within the remaining technical pause time, the team may bring in a roster substitute at the next round, or continue with 4 players." },
      { text: "If a team falls below 4 players and cannot recover within 10 minutes, it forfeits the map." },
    ],
  },
  {
    id: "s12",
    title: "Forfeits and no-shows",
    clauses: [
      { text: "A team not ready 15 minutes after the scheduled start loses the first map by forfeit. At 30 minutes it loses the series." },
      { text: "A forfeited map is recorded as 13-0. A forfeited series is recorded as a loss by the minimum score needed to win it." },
      { text: "Teams that forfeit twice in one event may be removed from it and may lose seeding in the next event." },
      { text: "Agreeing a result without playing, or deliberately losing, is match fixing (section 14), not a forfeit." },
    ],
  },
  {
    id: "s13",
    title: "Conduct",
    clauses: [
      { text: "Players, coaches, and team staff must treat opponents, admins, and casters with respect, in game, in chat, on voice, and on social media." },
      { text: "Harassment, hate speech, threats, slurs, and discrimination on any ground are forbidden and are penalized more severely than other conduct offences." },
      { text: "Spamming chat, deliberately disrupting a lobby, or impersonating staff is forbidden." },
      { text: "Coaches may talk to their team only during freeze time, tactical pauses, technical pauses, and between maps." },
      { text: "Admins' instructions during a match must be followed. Disagreement is raised through a dispute (section 15), not by refusing to play." },
    ],
  },
  {
    id: "s14",
    title: "Cheating and competitive integrity",
    clauses: [
      { text: "Any software, hardware, or method that gives an unfair advantage is forbidden. This includes aim assistance, wall hacks, radar or sound tools, macros, and modified game files." },
      { text: "Ghosting (receiving information from spectators or streams), stream sniping, playing on another person's account, and ban evasion are forbidden." },
      { text: "Match fixing, deliberately losing, and betting on any match involving your team or your event are forbidden." },
      { text: "Using a map or game bug that the admin has listed as banned, or that clearly breaks the game's intended mechanics, is forbidden." },
      { text: "Players must run the A.C.E. anti-cheat client for the whole match when it is required by the event.", pending: true },
      { text: "Admins may request demos or screen recordings for review. Hardware details are requested only once the A.C.E. anti-cheat client exists and the Privacy Policy describes them. Refusing a reasonable request without a valid reason may be taken into account in the decision." },
      { text: "Anyone may report a suspected violation privately to the organizer. Public accusations without a report are a conduct offence." },
    ],
  },
  {
    id: "s15",
    title: "Disputes and appeals",
    clauses: [
      { text: "Only a captain may file a dispute. It must be filed within 30 minutes of the end of the affected map, with evidence (demo tick, screenshot, or clip)." },
      { text: "Continuing to play after a known issue without raising it counts as accepting the situation for the rounds already played." },
      { text: "The admin decides the dispute and publishes the outcome and reason. Teams must keep playing their schedule while a dispute is open, unless the admin says otherwise." },
      { text: "An appeal may be filed within 48 hours of the decision. It is reviewed by an organizer member who did not make the original decision. The appeal decision is final." },
      { text: "Integrity penalties (section 14) may also be issued after an event ends, if evidence is found later." },
      { text: "Outside a live match, a player is told the reason and the evidence before a suspension or ban starts, and may respond within 48 hours. In urgent integrity cases the suspension starts first and the review follows." },
    ],
  },
  {
    id: "s16",
    title: "Penalties",
    summary: "Admins choose a penalty from the range below based on intent, impact, and repetition. Repeat offences move up the range.",
    clauses: [
      { text: "Penalties may be combined. A warning stays on a team's record for the rest of the event; other penalties stay on record for 12 months." },
      { text: "Bans apply to the person and to every account they control." },
    ],
  },
  {
    id: "s17",
    title: "Broadcast",
    clauses: [
      { text: "A.C.E. holds the right to broadcast any match it organizes. Teams may not refuse a broadcast." },
      { text: "Players may stream their own matches only with a delay of at least 2 minutes and only if the event page allows it. Official broadcasts use the delay set by the organizer." },
      { text: "Players must not watch any live broadcast of their own match while it is being played." },
      { text: "Scheduled broadcast matches may be moved by up to 2 hours with 24 hours' notice. Teams must be available for the new time or request an admin decision." },
      { text: "The broadcast screen on the Maps page shows a stream only when one is actually running; otherwise it shows the next scheduled broadcast." },
    ],
  },
  {
    id: "s18",
    title: "Prizes",
    clauses: [
      { text: "A prize exists only when the event page lists it as funded, with its amount or item, the paying party, and the payout date. Preview items shown elsewhere on the site are not prizes." },
      { text: "Funded prizes are paid to the captain or split equally between the 5 starters, as stated on the event page, within 60 days of the event ending, after identity and eligibility checks.", pending: true },
      { text: "Prizes are withheld while an integrity investigation concerning the receiving team is open. A team disqualified under section 14 forfeits its prize, which passes to the next placed team." },
      { text: "Taxes, fees, and currency costs are the responsibility of the receiving player, unless the event page says otherwise." },
    ],
  },
  {
    id: "s19",
    title: "Amendments",
    clauses: [
      { text: "The organizer may amend this rulebook. Changes are published on this page with a new version number and date." },
      { text: "Changes take effect 7 days after publication, or immediately when needed to fix a loophole, a safety issue, or an obvious error. Changes do not apply to a match already in progress." },
      { text: "If a translation of this rulebook differs from the English version, the English version applies." },
    ],
  },
];

export type PenaltyRow = { offence: string; first: string; repeat: string; section: string };

export const PENALTY_TABLE: PenaltyRow[] = [
  { offence: "Late to lobby (under 15 min)", first: "Warning", repeat: "Loss of side choice on next map", section: "7.1" },
  { offence: "No-show (15 / 30 min)", first: "Map forfeit / series forfeit", repeat: "Removal from event", section: "12.1, 12.3" },
  { offence: "Pause abuse", first: "Warning, pause removed", repeat: "Loss of 1 round", section: "10.4" },
  { offence: "Unapproved player or roster change", first: "Map forfeit", repeat: "Series forfeit", section: "4.2, 4.3" },
  { offence: "Unsportsmanlike chat or spam", first: "Warning", repeat: "Loss of 1 round to player suspension (1 match)", section: "13.3" },
  { offence: "Harassment, hate speech, threats", first: "Suspension 2 matches to 6 months", repeat: "Ban up to permanent", section: "13.2" },
  { offence: "Coach talking outside allowed times", first: "Warning", repeat: "Coach removed for the series", section: "13.4" },
  { offence: "Use of a banned bug or exploit", first: "Loss of affected rounds", repeat: "Map forfeit", section: "14.4" },
  { offence: "Ghosting or stream sniping", first: "Series forfeit", repeat: "Removal and 6-month suspension", section: "14.2" },
  { offence: "Account sharing", first: "Series forfeit, 3-month suspension (all accounts)", repeat: "Ban, 1 year", section: "3.2" },
  { offence: "Cheating software or hardware", first: "Disqualification, ban of 2 years to permanent", repeat: "Permanent ban", section: "14.1" },
  { offence: "Match fixing or betting on own matches", first: "Disqualification, permanent ban", repeat: "—", section: "14.3" },
  { offence: "Ban evasion", first: "Original ban doubled, new account banned", repeat: "Permanent ban", section: "3.3" },
];
