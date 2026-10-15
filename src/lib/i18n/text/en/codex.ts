export const codex = {
  meta: {
    title: "Calibration Codex",
    description:
      "A.C.E. ranks explained. Each question opens a full answer on Rating Points and the code for that rank. The codex does not apply a match.",
    articleTitle: "{title} — Calibration Codex",
  },
  groups: {
    ladder: {
      title: "The ladder",
      kicker: "How a rank is read",
    },
    points: {
      title: "Rating Points",
      kicker: "The single stored number",
    },
    ranks: {
      title: "Each rank",
      kicker: "The code for that mark",
    },
    desk: {
      title: "The match desk",
      kicker: "What the desk can and cannot do",
    },
  },
  index: {
    title: "Calibration Codex",
    lede: "Ten ranks. One stored number. Open any question for the full answer. The match desk continues on the later pages.",
    status:
      "This codex explains the written ladder. It does not apply a match, and it does not change a stored rating.",
    searchLabel: "Search the codex",
    searchPlaceholder: "Try 1950, Recruit, or draw",
    empty: "No entry matches that search.",
    columnLabel: "A.C.E. column {n}",
    pagerLabel: "Codex pages",
    first: "First",
    previous: "Previous",
    next: "Next",
    last: "Last",
    pageOf: "Page {n} of {m}",
  },
  article: {
    breadcrumb: "A.C.E. · Calibration Codex",
    status:
      "This page explains the written ladder. It does not apply a match, and it does not change a stored rating.",
    emblemAlt: "{name} emblem, rank {level}",
    emblemCaption: "Rank {level} · {name} · {crystal}",
    examples: {
      heading: "Worked examples from the engine",
      intro:
        "Each row calls the same Rating Point function the ladder uses. The inputs are examples. They are not saved to an account.",
      columns: {
        yourPoints: "Your points",
        otherSide: "Other side",
        result: "Result",
        storedAfter: "Stored after",
        change: "Change",
      },
      results: {
        win: "Win",
        loss: "Loss",
        draw: "Draw",
      },
    },
    turnLabel: "Continue through the codex",
    previous: "Previous",
    next: "Next",
    alsoIn: "Also in A.C.E.",
    backToBoard: "Back to the rank board",
  },
  rankArticle: {
    title: "{name} — Rank {level}",
    band: {
      heading: "The band",
      range:
        "{name} is rank {level}. The crystal label on the emblem is {crystal}. A stored rating from {from} through {to} wears this rank.",
    },
    code: {
      heading: "Rank code",
      hold: "Hold. The account wears {name} while its stored Rating Points sit inside this band. The rank is read from the number. It is not chosen from a menu.",
      gateNext: "Gate. The next rank opens at {next} Rating Points.",
      gateLast: "Gate. There is no next rank. The band ends at 3,000 Rating Points.",
      record:
        "Record. A rank changes only when a recorded result changes Rating Points. Opening this page does not record a result.",
      emblem:
        "Emblem. The picture identifies the rank. A purchase, a skin preview, or a cosmetic does not move the floor.",
    },
    emblem: {
      heading: "What the emblem is for",
      material:
        "The material study for this mark is: {material}. That line describes the artwork. It is not a statistic and it is not a requirement.",
      sample:
        "The win-rate figure shown beside this emblem on the ranks board is a sample chip. It does not have to be reached before the rank can be worn.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit is the entry plate. New accounts no longer start here: they start at 1,200 Rating Points, in Vanguard. Recruit is reached only by losing ground.",
      detail:
        "The Operative gate is 1,100. The ladder table opens Recruit at 0, but the engine will not store a rating under 100. Between 100 and 1,099 the account remains Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative sits just below the starting number. An account that drops under 1,200 lands here before it reaches Recruit.",
      detail: "The band is one hundred points wide. It closes at 1,199. Vanguard opens at 1,200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard is where every new account starts, at 1,200 Rating Points. Climbing from here is the first real step up the ladder.",
      detail: "The band runs from 1,200 through 1,299. Specialist opens at 1,300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist is the craft rank. The emblem’s crystal label reads GOLD. The official name stored with the ladder is Specialist. They are the same floor.",
      detail: "The band runs from 1,300 through 1,399. Veteran opens at 1,400.",
    },
    "rank-5-veteran": {
      stance: "Veteran is the middle mark. Four ranks sit below this floor, and five sit above it.",
      detail:
        "The band runs from 1,400 through 1,499. Elite opens at 1,500. The crystal label on this emblem is PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite is the engine name. DIAMOND is the crystal label on the same emblem. Neither label is a second rating.",
      detail: "The band runs from 1,500 through 1,599. Master opens at 1,600.",
    },
    "rank-7-master": {
      stance:
        "Master is the first rank whose crystal label and official name use the same word. The floor is 1,600.",
      detail: "The band runs from 1,600 through 1,699. Grandmaster opens at 1,700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster is the sapphire step. The floor is 1,700, still one hundred points wide, with Sovereign waiting at 1,800.",
      detail:
        "The band runs from 1,700 through 1,799. Nothing on this page spends a match to cross it.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign is the wide step before Legend. The crystal label is IMMORTAL. The official name is Sovereign.",
      detail:
        "The band runs from 1,800 through 1,949. That is 150 points, not 100. 1,949 still wears Sovereign. Legend opens at 1,950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E. Legend is the last mark. The crystal label is ACE ELITE. The official name is A.C.E. Legend.",
      detail:
        "The band opens at 1,950 and ends at the engine ceiling, 3,000. There is no eleventh rank. A stored rating cannot rise past 3,000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "What an A.C.E. rank is",
      lede: "A rank is the mark that contains your stored Rating Points. Ten marks cover the whole ladder, from Recruit to A.C.E. Legend.",
      sections: [
        {
          heading: "One number, one mark",
          paragraphs: [
            "The account stores a competitive rating. The ladder reads that number and returns the highest rank whose floor the number has reached. You do not hold two ranks at once.",
            "Recruit is rank 1. A.C.E. Legend is rank 10. The official name is the name in the ladder. The shorter word on the emblem is the crystal label for the same rank.",
            "This codex explains the written ladder. It does not apply a match, and it does not change a stored rating.",
          ],
        },
        {
          heading: "How the floors sit",
          paragraphs: [
            "Recruit covers the start of the ladder. Operative opens at 1,100. From Vanguard through Grandmaster, each new floor is 100 points higher: 1,200, 1,300, 1,400, 1,500, 1,600, then 1,700.",
            "Sovereign opens at 1,800 and keeps the account until 1,949. A.C.E. Legend opens at 1,950. The engine ceiling is 3,000, so Legend is the longest band.",
          ],
        },
        {
          heading: "What a rank is not",
          paragraphs: [
            "A rank is not a population cap. Legend is a floor, not a list of one thousand accounts.",
            "A rank is not a prize, a skin, or a queue. The public site can show the mark. It does not run a match that writes a new one.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Official name and crystal name",
      lede: "Every rank has two labels. The official name is the ladder. The crystal name is the word cut into the emblem.",
      sections: [
        {
          heading: "Why both exist",
          paragraphs: [
            "The engine and the profile use the official name: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "The emblem also carries a crystal label: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. That label is artwork. It does not create an eleventh rank and it does not store a second number.",
          ],
        },
        {
          heading: "Where they diverge",
          paragraphs: [
            "Specialist’s crystal label is GOLD. Veteran’s is PLATINUM. Elite’s is DIAMOND. Sovereign’s is IMMORTAL. A.C.E. Legend’s is ACE ELITE. In each case the floor still belongs to the official name.",
            "Master and Grandmaster use the same word in both places.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "The three divisions on the board",
      lede: "Division III, II, and I are a reading aid painted across a rank’s band. The account does not store a division.",
      sections: [
        {
          heading: "What is stored",
          paragraphs: [
            "A signed-in account stores a rank level and a competitive rating. The rank level follows the rating. There is no division column beside them.",
            "On the ranks board, the band of the selected rank is split into three display steps so the eye can see the bottom, the middle, and the top of that floor. Division III is the low end of the band. Division I is the high end.",
          ],
        },
        {
          heading: "What the chips are",
          paragraphs: [
            "The win-rate percentages and the progress marks on those chips are samples. They are not a second ladder, and they are not a target you must clear.",
            "Changing the division chip does not change a stored rating. Only a recorded result can do that, and this page does not record one.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "What cannot move a rank",
      lede: "The mark follows stored Rating Points. Everything else on the site leaves the mark where it is.",
      sections: [
        {
          heading: "Outside the engine",
          paragraphs: [
            "A skin preview, a shop card, a subscription label, and a cosmetic do not add Rating Points. Paying for a plan is not a rank.",
            "Opening the ranks board, rotating an emblem, or reading this codex does not apply a match.",
            "A report, a support note, and a tournament layout do not rewrite the stored rating.",
          ],
        },
        {
          heading: "The only path",
          paragraphs: [
            "The written path is a recorded match result passed through the Rating Point engine. No public page on this site writes that result today.",
            "Until a result exists, a new account stays at its starting rating, and an existing account keeps the rating already stored.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "What Rating Points are",
      lede: "Rating Points are the competitive number stored on the account. The rank is only the band that number falls in.",
      sections: [
        {
          heading: "The stored field",
          paragraphs: [
            "The engine version is {version}. A new account starts at {startingRating} Rating Points. The stored number cannot fall below {minRating} and cannot rise above {maxRating}.",
            "Profiles and the ranks board read this number when you are signed in. When you are not signed in, the board shows the calibration floor of the emblem you selected. That floor is a sample, not your account.",
          ],
        },
        {
          heading: "What the number is measuring",
          paragraphs: [
            "The engine compares your rating with the opposing side’s average rating. It does not keep a separate score for an individual award, a headshot rate, or a utility line. Those figures are not part of this version.",
            "A higher number means the ladder expects you to win more often against a lower number. The rank names are the public reading of that scale.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Where a new account starts",
      lede: "Steam sign-in creates the account at 1,200 Rating Points, rank 3, Vanguard, with no wins and no losses.",
      sections: [
        {
          heading: "The opening mark",
          paragraphs: [
            "1,200 is the floor of Vanguard. Operative and Recruit sit below it, so a new account starts in the middle of the early ladder, not at the bottom.",
            "Signing in again does not reset a rating that is already stored. The first 10 recorded matches are placement: during them the rating cannot rise above tier 5. The codex does not invent a win-loss record.",
          ],
        },
        {
          heading: "How to see it",
          paragraphs: [
            "After Steam sign-in, the dashboard and the ranks board can show the stored rating. If the database is unreachable, the page says so instead of inventing a number.",
            "The starting rank stays Vanguard until a recorded result moves the rating out of the 1,200–1,299 band. No such result is written from this site today.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "How a recorded result moves Rating Points",
      lede: "A recorded win or loss is measured against the other team's average rating. Against an equal team a win is +25 and a loss is −25. The full rules are on the Ranks page.",
      sections: [
        {
          heading: "The step",
          paragraphs: [
            "Expected score is the chance the engine assigns before the match, based only on the two ratings. Against an equal rating that chance is one half, so a win is worth 25 Rating Points and a loss costs 25.",
            "Against a higher rating, a win is worth more than 25 and a loss costs less. Against a lower rating, the opposite. A win always gives 10 to 40 and a loss always costs 10 to 40. In tiers 7–9 win gains are multiplied by 0.8 and in tier 10 by 0.7, so the top of the ladder takes longer. The rating is held between 100 and 3,000.",
            "On a team result, every player is measured against the other team's average rating. A match MVP bonus of 3 RP is planned for when the server records kills; until then no personal bonus is applied.",
          ],
        },
        {
          heading: "A draw",
          paragraphs: [
            "A draw changes nothing: every player keeps the same rating. Abandoning or leaving a match costs 50 RP, whatever the result.",
            "The table on this page is the engine working on example inputs. Those rows are not stored matches, and they are not your account.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "The floor, the ceiling, and a skipped rank",
      lede: "The stored number stops at 100 and at 3,000. The rank always follows the number, so a rank cannot be skipped by a button.",
      sections: [
        {
          heading: "The stops",
          paragraphs: [
            "A loss at 100 Rating Points stays at 100. A win at 3,000 stays at 3,000. Recruit’s ladder floor is written as 0, but the stored number never uses the gap under 100.",
            "1,949 is Sovereign. 1,950 is A.C.E. Legend. There is no in-between mark.",
          ],
        },
        {
          heading: "No skip",
          paragraphs: [
            "If a recorded result jumped the number from 1,050 to 1,260, the account would wear Vanguard, because 1,260 is inside that band. The ranks in between are not queued as separate promotions. The number is read once.",
            "No page on this site performs that jump. The example only shows how the ladder reads a number.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Where a match link would appear",
      lede: "A match link is the address of a game server. This website does not issue one.",
      sections: [
        {
          heading: "The desk you can open",
          paragraphs: [
            "The play page shows a ten-player layout and a FIND MATCH control. That control stays closed. It cannot open a Counter-Strike 2 server, and it does not hand anyone an address.",
            "The count of people on the website is not a count of people inside a game. Population for a match is 0.",
          ],
        },
        {
          heading: "Where a link would sit later",
          paragraphs: [
            "If a match server existed, the address and its password would be shown on the match desk after the ten players had accepted. A player would join from Steam. No address is stored on this site, and no password is generated.",
            "Steam sign-in links the account. It does not drop a player into a map.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "What the ranked desk is",
      lede: "The ranked desk is the play-page layout for a 5v5. It is a closed desk, not an open queue.",
      sections: [
        {
          heading: "What is drawn",
          paragraphs: [
            "Two sides, five seats each, and a captain label on the first seat. The map list and the chat line beside them are part of the same layout.",
            "The security rows on that page are marked with their status. None of them is a running check yet; see /anti-cheat for the roadmap.",
          ],
        },
        {
          heading: "What the desk does not do",
          paragraphs: [
            "FIND MATCH does not search for opponents. It does not change Rating Points. The rank on an account is still the stored number, read by the ladder in this codex.",
            "There is no separate top queue above Legend. A.C.E. Legend is the last mark, and it opens at 1,950 Rating Points.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Help from the match desk",
      lede: "Support on this website is a written desk. It does not open a live voice line inside a match.",
      sections: [
        {
          heading: "What the support page does",
          paragraphs: [
            "The support page lists the desks and offers a ticket control. Choosing that control does not create a case, and it does not reach a person during a match, because no match is running.",
            "A rule question belongs to the competition code at /rules. A ladder question belongs in this codex.",
          ],
        },
        {
          heading: "A protest, once a match exists",
          paragraphs: [
            "The written code says the captain may file a protest before the next map begins, naming the map, the round, and the article. This website does not store demos and does not run game servers, so that filing has nowhere to land today.",
            "A layout score is not a played match. Staff would write a series result only after a real series.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "Waiting for ten players",
      lede: "A competitive map needs ten starters. The desk does not hold that wait today.",
      sections: [
        {
          heading: "The written clock",
          paragraphs: [
            "Once a match has a published start, five starters on a side are due 15 minutes before that start. That sentence is in the competition code. The clock does not start on this website, because no match is published.",
            "Names shown on the play page are previews. They are not people sitting in a queue.",
          ],
        },
        {
          heading: "What does not happen while you watch",
          paragraphs: [
            "The page does not reserve a server, send a push, or count down to an accept. Leaving the page does not abandon a match, because you were not in one.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "The captain on the desk",
      lede: "One captain speaks for a side. Lobby roles go live with the competitive beta.",
      sections: [
        {
          heading: "What the code assigns",
          paragraphs: [
            "The captain handles the veto, the pauses, and a protest. The other starters play. A substitute may sit only between maps.",
            "On one map, the captains ban one map at a time until one map remains. The pool is Ancient, Anubis, Dust II, Inferno, Mirage, Nuke, and Train. The higher seed is Team A and chooses whether to ban first or second; a coin toss settles equal seeds. No veto is open today.",
          ],
        },
        {
          heading: "Pauses",
          paragraphs: [
            "Pauses apply only after a match server exists. None exists here. The written allowance per team on a map is three tactical pauses of 30 seconds, plus one more in overtime, and 10 minutes of technical pause in total. The full text is at /rules.",
            "On the teams page, captain is also the membership that may send a roster invite. That invite is separate from a match lobby.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "When a side is not ready",
      lede: "The competition code describes a forfeit for a match that has a published start. This website does not issue that forfeit.",
      sections: [
        {
          heading: "The written rule",
          paragraphs: [
            "Five starters must be ready 15 minutes before the published start. A side that is still short 15 minutes after the start forfeits the series, once a match exists. If both sides are absent, both are removed and staff write the slot.",
            "A clan that starts a map with fewer than five eligible starters, and has no substitute who can sit, forfeits that map.",
          ],
        },
        {
          heading: "What this site will not do",
          paragraphs: [
            "Nothing here watches a lobby and writes a forfeit by itself. A button on the play page cannot surrender a map that was never loaded.",
            "A layout score on the tournament tree is not a played match and is not a forfeit.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Entering the 100-clan knockout",
      lede: "The tournament page is a 100-clan tree. Registration is 0 of 100. Entry is not open.",
      sections: [
        {
          heading: "What you can open",
          paragraphs: [
            "Click a clan on the tree to read its roster, then open a player. Names on open slots are previews, not accepted entries.",
            "The tree does not seed a server and does not send a match link.",
          ],
        },
        {
          heading: "The bye, when entry opens",
          paragraphs: [
            "The written rule, for a future entry, is that the first 28 accepted clans skip round 1. That bye is not a prize, and it cannot be claimed while registration stays at 0 of 100.",
            "Series length, the map pool, and protests are in the competition code at /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "How a roster is assembled",
      lede: "A captain invites a player who already has an A.C.E. account. There is no public share link, and a Steam password is never asked for.",
      sections: [
        {
          heading: "The invite that exists",
          paragraphs: [
            "On the teams page, a signed-in captain pastes a SteamID64 or an A.C.E. account ID. The account must already be linked through Steam OpenID. The server writes a pending invitation when the database accepts it.",
            "The roster holds five players, including the captain. A captain cannot invite their own account. A player who is already on the roster is refused. If the database is down, the invite fails and no invitation is stored.",
          ],
        },
        {
          heading: "What an invite is not",
          paragraphs: [
            "The invite does not mail a letter, open a private lobby, or generate a link you can post. It does not place the clan in the knockout.",
            "The knockout code allows two named substitutes once a tournament entry exists. Entry is not open, so those seats are not a pass you can use today.",
          ],
        },
      ],
    },
  },
} as const;
