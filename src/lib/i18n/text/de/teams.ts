import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "A.C.E.-Kaderverwaltung",
    description:
      "Dein 5v5-Squad-Arbeitsbereich. Einladungen erfordern eine verifizierte Steam-Sitzung; Anti-Cheat-Prüfungen kommen mit A.C.E Shield.",
  },
  hero: {
    kicker: "MANNSCHAFTEN",
    title: "Kader",
    lede: "Fünf offene Plätze in einer Reihe. Ein Clan wird erst nach der Steam-Anmeldung und dem Anlegen einer Mannschaft gespeichert.",
  },
  gate: {
    kickerPremium: "Clan-Eintrag nach deiner Planwahl",
    kickerDefault: "Clan-Eintrag",
    title: "Seid ihr eine Mannschaft aus fünf Spielern?",
    intro:
      "Platz 1 ist der über Steam angemeldete Spieler. Die Plätze 2 bis 5 müssen bereits A.C.E.-Konten haben. Das Speichern eines Clans berechnet keine $7, sendet keine E-Mail und setzt den Clan nicht auf die Tafel mit 100 Mannschaften.",
    yes: "Ja, fünf Spieler",
    no: "Nein, Plätze offen lassen",
    seatsOpen: "Die fünf Plätze bleiben offen. Es wurde nichts gespeichert.",
    connectSteam:
      "Verbinde zuerst Steam. Die Schaltfläche führt zu dieser Seite zurück. A.C.E. fragt niemals nach einem Steam-Passwort.",
    alreadyMember: "{name} gehört bereits zu {team}. Mit diesem Formular wird kein zweiter Clan angelegt.",
    thisAccount: "Dieses Konto",
    acceptTerms: "Akzeptiere die Bedingungen, bevor du einen Clan speicherst.",
    notStored: "Der Clan wurde nicht gespeichert.",
    clanName: "Clan-Name",
    captainSeat: "Platz 1, Kapitän: {name}",
    signedInSteam: "Angemeldetes Steam-Konto",
    seatLabel: "Platz {seat}: SteamID oder A.C.E.-Kontokennung",
    submit: "Clan mit fünf Spielern speichern",
    saved:
      "Der Clan-Name ist gespeichert, und vier Einladungen stehen aus. Diese Spieler stehen erst in der Aufstellung, wenn sie annehmen. Dies ist kein Platz auf der Tafel mit 100 Mannschaften. Es wurde nichts berechnet.",
  },
  squadDesk: {
    kicker: "Kader-Pult",
    title: "Fragen zu den schriftlichen Regeln",
    intro:
      "Dieses Pult liest nur die auf dieser Seite veröffentlichten Fakten. Es erkennt keine Cheats, öffnet kein Spiel und ändert kein Konto.",
    questionLabel: "Frage",
    placeholder: "Frag nach den fünf Plätzen, den Plänen oder dem Support",
    ask: "Fragen",
    fallback:
      "Dieser Desk antwortet nur anhand der schriftlichen Regeln auf dieser Seite: Pläne, die fünf Plätze, Steam OpenID und Support.",
    facts: {
      email: "Es wird keine E-Mail gesendet. Plan-Belege bleiben auf dieser Website.",
      charge:
        "Premium kostet $7 pro Monat. Demnächst: Es gibt noch keinen Checkout, daher wird nichts berechnet.",
      board:
        "Ein gespeicherter Clan ist ein Kadereintrag. Er wird nicht auf die Tafel mit 100 Mannschaften gesetzt. Diese Tafel zeigt weiterhin 0 registriert, bis eine Saison öffnet.",
      steam:
        "Die Anmeldung nutzt das offizielle Steam OpenID. A.C.E. fragt niemals nach einem Steam-Passwort. Von dieser Seite aus führt Steam hierher zurück.",
      roster:
        "Platz 1 ist der angemeldete Kapitän. Die Plätze 2 bis 5 müssen bereits A.C.E.-Konten haben. Einladungen stehen aus, bis jeder Spieler annimmt.",
      badge:
        "Platzabzeichen werden zu echten A.C.E Shield-Prüfungen, sobald der Anti-Cheat startet.",
      support:
        "Öffne «Hilfe» oder «Kontakt» auf dieser Website. Eine Hilfeaufforderung eröffnet keine Anfrage, und auf der Kontaktseite eingegebener Text wird nicht zugestellt.",
      rating:
        "Eine neue Wertung startet bei 1.200. Diese Seite verkauft keine Wertung, öffnet keine Warteschlange, verbindet keinen CS2-Server und liefert keinen Preis.",
    },
  },
  squad: {
    roles: {
      awper: "AWPer",
      entryFragger: "Entry-Fragger",
      lurker: "Lurker",
      igl: "IGL",
      support: "Support",
    },
    rankLabel: "Rang {level}",
    noAgents: "Es sind noch keine freien Spieler gespeichert.",
    notice:
      "Einladungen werden nur für einen angemeldeten Kapitän gesendet. Das Abzeichen auf einem Platz ist keine laufende Anti-Cheat-Prüfung.",
  },
  tournaments: {
    meta: {
      title: "A.C.E.-Meisterschaft — Elite-K.-o.-Turnier mit 100 Mannschaften",
      description:
        "Das K.-o.-Turnier mit 100 Teams. Klicke auf einen Clan, um sein Roster und dann jedes Spielerprofil zu öffnen. Die Anmeldung öffnet bald.",
    },
    intro: {
      title: "A.C.E.-MEISTERSCHAFT — ELITE-K.-O.-TURNIER MIT 100 MANNSCHAFTEN",
      lede: "Das veröffentlichte Feld ist ein K.-o.-Turnier mit 100 Mannschaften. Die Grafik unten ist dieses Layout. Ein Klick auf einen Clan öffnet die Aufstellungsleiste. Anmeldungen: 0 von 100. Ein Preisgeld wird weder beworben noch finanziert.",
      formatValue: "Turnierbaum-Matrix mit 100 Mannschaften",
      briefTitle: "Einsatzkurzbericht für 100 Mannschaften",
      briefBody:
        "Ein Wettkampfformat deckt das gesamte Feld von 100 Teams ab. Sobald die Anmeldung öffnet, erhalten die ersten 28 angenommenen Clans ein Freilos in Runde 1 und ziehen in Runde 2 ein. Die übrigen 72 Clans spielen Runde 1. Namen auf freien Plätzen sind Platzhalter, bis sich Clans anmelden. Das vollständige Regelwerk steht unter dem Turnierbaum. Match-Lobbys öffnen mit der Wettkampf-Beta, und Preise werden je Event bestätigt.",
    },
    timeline: {
      ariaLabel: "Zeitleiste des Turnierstarts",
      kicker: "MEISTERSCHAFTS-FAHRPLAN",
      title: "ZEITLEISTE DES TURNIERSTARTS",
      stageLabel: "Phase {id}",
      stages: {
        registrations: { title: "Offene Anmeldungen", state: "VORSCHAU-PULS" },
        calibration: { title: "Regionale Kalibrierungsbäume", state: "GESPERRT" },
        quarterFinals: { title: "Elite-Profi-Viertelfinale", state: "GESPERRT" },
        finals: { title: "Großes Apex-Finale", state: "GESPERRT" },
      },
      disclaimer:
        "Stufe 01 öffnet zuerst, wenn die Anmeldung beginnt. Stufen 02–04 folgen. Preispools werden auf der Eventseite bestätigt, sobald sie angekündigt sind.",
    },
    bracket: {
      kicker: "K.-o.-Turnier mit 100 Teams · demnächst",
      title: "Turnierbaum-Matrix mit 100 Mannschaften",
      statusUnavailable:
        "Die Anmeldung öffnet bald. Bis dahin zeigt der Turnierbaum Vorschau-Clans.",
      statusEmpty:
        "Die Anmeldung öffnet bald. Bis dahin zeigt der Turnierbaum Vorschau-Clans.",
      statusStored:
        "{count} angemeldete Clans werden zuerst platziert. Übrige Plätze zeigen Vorschau-Clans. Spätere Runden füllen sich, sobald Matches erfasst werden.",
      openSlot: "Offener Platz",
      openCompetitorSlot: "Offener Teilnehmerplatz",
      openRoster: "Aufstellung von {name} öffnen",
      bye: "👑 [FREILOS - FÜR RUNDE 2 GESETZT]",
      championStage: "MEISTERBÜHNE",
      leftWing: "Linke Seite",
      rightWing: "Rechte Seite",
      emptySlotNotice: "Dieser Teilnehmerplatz ist leer. Es ist noch kein Clan gespeichert.",
      grandFinalNotice: "Das große Finale bleibt offen, bis beide Halbfinals erfasst sind.",
      rounds: {
        r128: "R1",
        r64: "R64",
        r32: "R32",
        r16: "R16",
        qf: "VF",
        sf: "HF",
      },
    },
    profile: {
      closeBackdrop: "Mannschaftsprofil schließen",
      kicker: "Meisterschaftsprofil · Vorschau",
      matchesPlayed: "Gespielte Spiele",
      winRate: "Gemeinsame Siegquote",
      streak: "Laufende Turnierserie",
      rosterHeading: "Aufstellungsmatrix mit 5 Spielern",
      openSeat: "Offener Platz {seat}",
      noPlayer: "Kein Spieler gespeichert",
      previous: "Vorheriger Clan",
      count: "Clan {index} von {total}",
      next: "Nächster Clan",
      close: "Profil schließen",
      disclosure:
        "Setups und Inventare erscheinen hier, sobald Spieler sie teilen möchten. A.C.E. erhebt keine Hardwaredaten.",
    },
    player: {
      level: "STUFE {level} · RP {rating}",
      record: "S–N {wins}–{losses}",
      kdNotStored: "K/D nicht gespeichert",
      openProfileAria: "Profil von {name} öffnen",
      openProfile: "Profil öffnen",
      badge: "BEREIT / ANTI-CHEAT-KONFORM",
      badgeNote: "A.C.E Shield-Prüfung · demnächst",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Maus",
        dpi: "DPI",
        keyboard: "Tastatur",
        monitor: "Monitor",
        headset: "Headset",
      },
    },
  },
  gearPlaceholder: {
    processor: "CPU · nicht geteilt",
    gpu: "GPU · nicht geteilt",
    mouse: "Maus · nicht geteilt",
    dpi: "DPI · nicht geteilt",
    keyboard: "Nicht geteilt",
    monitor: "Bildwiederholrate · nicht geteilt",
    headset: "Nicht geteilt",
  },
  profileDisclosure:
    "A.C.E. speichert keine Hardware-Inventare und führt keinen Anti-Cheat-Client aus. Leistungsverlaufsgrafiken und die Kampfmatrix verlangen eine A.C.E.-Plus- oder Premium-Sitzung. Ein auf dieser Seite eingegebener Steam-Profillink wird nicht gespeichert und ist kein offizieller Name.",
  errors: {
    signInRequired: "Anmeldung erforderlich.",
    nameLength: "Mannschaftsnamen müssen zwischen 2 und 32 Zeichen lang sein.",
    alreadyCaptain: "Dieses Konto ist bereits Kapitän einer Mannschaft.",
    nameTaken: "Eine Mannschaft mit diesem Namen existiert bereits.",
    idRequired: "Eine SteamID oder A.C.E.-Kontokennung ist erforderlich.",
    noAccountForToken: "Für diese SteamID oder Kontokennung existiert kein A.C.E.-Konto.",
    clanNeedsFour: "Ein Clan mit fünf Spielern braucht den angemeldeten Kapitän und vier SteamIDs.",
    seatNeedsId: "Jeder der vier Plätze braucht eine SteamID oder eine A.C.E.-Kontokennung.",
    seatsDistinct: "Jeder Platz braucht einen anderen Spieler.",
    captainHoldsSeat: "Der Kapitän belegt bereits Platz 1. Nutze vier andere Spieler.",
    fewerThanFour: "Diese Kennungen gehören zu weniger als vier Konten.",
    selfInvite: "Ein Kapitän kann sein eigenes Konto nicht einladen.",
    captainOnly: "Nur der bestimmte Kapitän darf Einladungen senden.",
    rosterLimit: "Eine CS2-Aufstellung umfasst fünf Spieler einschließlich des Kapitäns.",
    alreadyOnRoster: "Dieser Spieler steht bereits in der Aufstellung.",
    noAccountForId: "Für diese Kennung existiert kein A.C.E.-Konto.",
    inviteNotFound: "Einladung nicht gefunden.",
    inviteNotPending: "Diese Einladung steht nicht mehr aus.",
    rosterFull: "Die Aufstellung ist bereits voll.",
    createFailed: "Mannschaft konnte nicht angelegt werden.",
    inviteFailed: "Einladung fehlgeschlagen.",
    updateInviteFailed: "Einladung konnte nicht aktualisiert werden.",
  },
};
