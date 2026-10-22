import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Kalibrierungs-Kodex",
    description:
      "Die Ränge von A.C.E erklärt. Jede Frage öffnet eine vollständige Antwort zu den Wertungspunkten und zum Kodex des jeweiligen Rangs. Der Kodex wertet kein Spiel.",
    articleTitle: "{title} — Kalibrierungs-Kodex",
  },
  groups: {
    ladder: {
      title: "Die Rangleiter",
      kicker: "Wie ein Rang gelesen wird",
    },
    points: {
      title: "Wertungspunkte",
      kicker: "Die eine gespeicherte Zahl",
    },
    ranks: {
      title: "Jeder Rang",
      kicker: "Der Kodex für dieses Abzeichen",
    },
    desk: {
      title: "Der Spieltisch",
      kicker: "Was der Spieltisch kann und was nicht",
    },
  },
  index: {
    title: "Kalibrierungs-Kodex",
    lede: "Zehn Ränge. Eine gespeicherte Zahl. Öffnen Sie eine beliebige Frage, um die vollständige Antwort zu lesen. Der Spieltisch folgt auf den späteren Seiten.",
    status:
      "Dieser Kodex erklärt die schriftlich festgelegte Rangleiter. Er wertet kein Spiel und ändert keine gespeicherte Wertung.",
    searchLabel: "Kodex durchsuchen",
    searchPlaceholder: "Versuchen Sie 1950, Recruit oder Unentschieden",
    empty: "Kein Eintrag passt zu dieser Suche.",
    columnLabel: "A.C.E-Spalte {n}",
    pagerLabel: "Kodex-Seiten",
    first: "Erste",
    previous: "Zurück",
    next: "Weiter",
    last: "Letzte",
    pageOf: "Seite {n} von {m}",
  },
  article: {
    breadcrumb: "A.C.E · Kalibrierungs-Kodex",
    status:
      "Diese Seite erklärt die schriftlich festgelegte Rangleiter. Sie wertet kein Spiel und ändert keine gespeicherte Wertung.",
    emblemAlt: "Emblem {name}, Rang {level}",
    emblemCaption: "Rang {level} · {name} · {crystal}",
    examples: {
      heading: "Rechenbeispiele aus der Engine",
      intro:
        "Jede Zeile ruft dieselbe Wertungspunkte-Funktion auf, die auch die Rangleiter verwendet. Die Eingaben sind Beispiele. Sie werden nicht in einem Konto gespeichert.",
      columns: {
        yourPoints: "Ihre Punkte",
        otherSide: "Gegenseite",
        result: "Ergebnis",
        storedAfter: "Danach gespeichert",
        change: "Änderung",
      },
      results: {
        win: "Sieg",
        loss: "Niederlage",
        draw: "Unentschieden",
      },
    },
    turnLabel: "Weiter durch den Kodex",
    previous: "Zurück",
    next: "Weiter",
    alsoIn: "Außerdem bei A.C.E",
    backToBoard: "Zurück zur Rangtafel",
  },
  rankArticle: {
    title: "{name} — Rang {level}",
    band: {
      heading: "Der Bereich",
      range:
        "{name} ist Rang {level}. Die Kristallbezeichnung auf dem Emblem lautet {crystal}. Eine gespeicherte Wertung von {from} bis {to} trägt diesen Rang.",
    },
    code: {
      heading: "Rangkodex",
      hold: "Halten. Das Konto trägt den Rang {name}, solange seine gespeicherten Wertungspunkte innerhalb dieses Bereichs liegen. Der Rang wird aus der Zahl abgelesen. Er wird nicht aus einem Menü gewählt.",
      gateNext: "Schwelle. Der nächste Rang beginnt bei {next} Wertungspunkten.",
      gateLast: "Schwelle. Es gibt keinen nächsten Rang. Der Bereich endet bei 3.000 Wertungspunkten.",
      record:
        "Eintrag. Ein Rang ändert sich nur, wenn ein eingetragenes Ergebnis die Wertungspunkte ändert. Das Öffnen dieser Seite trägt kein Ergebnis ein.",
      emblem:
        "Emblem. Das Bild kennzeichnet den Rang. Ein Kauf, eine Skin-Vorschau oder ein kosmetischer Gegenstand verschiebt die Untergrenze nicht.",
    },
    emblem: {
      heading: "Wofür das Emblem da ist",
      material:
        "Die Materialstudie für dieses Abzeichen lautet: {material}. Diese Zeile beschreibt das Kunstwerk. Sie ist weder eine Statistik noch eine Voraussetzung.",
      sample:
        "Die Siegquote, die auf der Rangtafel neben diesem Emblem angezeigt wird, ist ein Beispielwert. Sie muss nicht erreicht werden, bevor der Rang getragen werden kann.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit ist die Einstiegsplatte. Neue Konten starten nicht mehr hier, sondern mit 1.200 Rating Points in Vanguard. Recruit erreicht man nur durch Punktverlust.",
      detail:
        "Die Schwelle zu Operative liegt bei 1.100. Die Tabelle der Rangleiter lässt Recruit bei 0 beginnen, aber die Engine speichert keine Wertung unter 100. Zwischen 100 und 1.099 bleibt das Konto Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative liegt knapp unter dem Startwert. Ein Konto, das unter 1.200 fällt, landet hier, bevor es Recruit erreicht.",
      detail: "Der Bereich ist einhundert Punkte breit. Er endet bei 1.199. Vanguard beginnt bei 1.200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard ist der Startpunkt jedes neuen Kontos, mit 1.200 Rating Points. Der Aufstieg von hier ist der erste echte Schritt die Leiter hinauf.",
      detail: "Der Bereich reicht von 1.200 bis 1.299. Specialist beginnt bei 1.300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist ist der Rang des Handwerks. Die Kristallbezeichnung des Emblems lautet GOLD. Der offizielle Name, der mit der Rangleiter gespeichert wird, ist Specialist. Beide bezeichnen dieselbe Stufe.",
      detail: "Der Bereich reicht von 1.300 bis 1.399. Veteran beginnt bei 1.400.",
    },
    "rank-5-veteran": {
      stance: "Veteran ist das mittlere Abzeichen. Vier Ränge liegen unter dieser Untergrenze, fünf darüber.",
      detail:
        "Der Bereich reicht von 1.400 bis 1.499. Elite beginnt bei 1.500. Die Kristallbezeichnung auf diesem Emblem lautet PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite ist der Name in der Engine. DIAMOND ist die Kristallbezeichnung auf demselben Emblem. Keine der beiden Bezeichnungen ist eine zweite Wertung.",
      detail: "Der Bereich reicht von 1.500 bis 1.599. Master beginnt bei 1.600.",
    },
    "rank-7-master": {
      stance:
        "Master ist der erste Rang, dessen Kristallbezeichnung und offizieller Name dasselbe Wort verwenden. Die Untergrenze liegt bei 1.600.",
      detail: "Der Bereich reicht von 1.600 bis 1.699. Grandmaster beginnt bei 1.700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster ist die Saphirstufe. Die Untergrenze liegt bei 1.700, der Bereich ist weiterhin einhundert Punkte breit, und Sovereign wartet bei 1.800.",
      detail:
        "Der Bereich reicht von 1.700 bis 1.799. Nichts auf dieser Seite verbraucht ein Spiel, um ihn zu überschreiten.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign ist die breite Stufe vor Legend. Die Kristallbezeichnung lautet IMMORTAL. Der offizielle Name ist Sovereign.",
      detail:
        "Der Bereich reicht von 1.800 bis 1.949. Das sind 150 Punkte, nicht 100. 1.949 trägt weiterhin Sovereign. Legend beginnt bei 1.950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E Legend ist das letzte Abzeichen. Die Kristallbezeichnung lautet ACE ELITE. Der offizielle Name ist A.C.E Legend.",
      detail:
        "Der Bereich beginnt bei 1.950 und endet an der Obergrenze der Engine, 3.000. Es gibt keinen elften Rang. Eine gespeicherte Wertung kann nicht über 3.000 steigen.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "Was ein A.C.E-Rang ist",
      lede: "Ein Rang ist das Abzeichen, in dessen Bereich Ihre gespeicherten Wertungspunkte liegen. Zehn Abzeichen decken die gesamte Rangleiter ab, von Recruit bis A.C.E Legend.",
      sections: [
        {
          heading: "Eine Zahl, ein Abzeichen",
          paragraphs: [
            "Das Konto speichert eine Wettkampfwertung. Die Rangleiter liest diese Zahl und gibt den höchsten Rang zurück, dessen Untergrenze die Zahl erreicht hat. Sie tragen nie zwei Ränge gleichzeitig.",
            "Recruit ist Rang 1. A.C.E Legend ist Rang 10. Der offizielle Name ist der Name in der Rangleiter. Das kürzere Wort auf dem Emblem ist die Kristallbezeichnung desselben Rangs.",
            "Dieser Kodex erklärt die schriftlich festgelegte Rangleiter. Er wertet kein Spiel und ändert keine gespeicherte Wertung.",
          ],
        },
        {
          heading: "Wo die Untergrenzen liegen",
          paragraphs: [
            "Recruit deckt den Anfang der Rangleiter ab. Operative beginnt bei 1.100. Von Vanguard bis Grandmaster liegt jede neue Untergrenze 100 Punkte höher: 1.200, 1.300, 1.400, 1.500, 1.600, dann 1.700.",
            "Sovereign beginnt bei 1.800 und hält das Konto bis 1.949. A.C.E Legend beginnt bei 1.950. Die Obergrenze der Engine liegt bei 3.000, daher ist Legend der längste Bereich.",
          ],
        },
        {
          heading: "Was ein Rang nicht ist",
          paragraphs: [
            "Ein Rang ist keine Obergrenze für die Anzahl der Spieler. Legend ist eine Untergrenze, keine Liste von eintausend Konten.",
            "Ein Rang ist weder ein Preis noch ein Skin noch eine Warteschlange. Die öffentliche Website kann das Abzeichen anzeigen. Sie führt kein Spiel durch, das ein neues Abzeichen einträgt.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Offizieller Name und Kristallname",
      lede: "Jeder Rang hat zwei Bezeichnungen. Der offizielle Name ist der in der Rangleiter. Der Kristallname ist das Wort, das in das Emblem geschnitten ist.",
      sections: [
        {
          heading: "Warum es beide gibt",
          paragraphs: [
            "Die Engine und das Profil verwenden den offiziellen Namen: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E Legend.",
            "Das Emblem trägt außerdem eine Kristallbezeichnung: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Diese Bezeichnung ist Gestaltung. Sie schafft keinen elften Rang und speichert keine zweite Zahl.",
          ],
        },
        {
          heading: "Wo sie voneinander abweichen",
          paragraphs: [
            "Die Kristallbezeichnung von Specialist ist GOLD. Die von Veteran ist PLATINUM. Die von Elite ist DIAMOND. Die von Sovereign ist IMMORTAL. Die von A.C.E Legend ist ACE ELITE. In jedem Fall gehört die Untergrenze weiterhin zum offiziellen Namen.",
            "Master und Grandmaster verwenden an beiden Stellen dasselbe Wort.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "Die drei Divisionen auf der Tafel",
      lede: "Division III, II und I sind eine Lesehilfe, die über den Bereich eines Rangs gelegt ist. Das Konto speichert keine Division.",
      sections: [
        {
          heading: "Was gespeichert wird",
          paragraphs: [
            "Ein angemeldetes Konto speichert eine Rangstufe und eine Wettkampfwertung. Die Rangstufe folgt der Wertung. Daneben gibt es keine Spalte für eine Division.",
            "Auf der Rangtafel wird der Bereich des ausgewählten Rangs in drei Anzeigestufen geteilt, damit das Auge unteres Ende, Mitte und oberes Ende dieser Stufe erkennen kann. Division III ist das untere Ende des Bereichs. Division I ist das obere Ende.",
          ],
        },
        {
          heading: "Was die Chips sind",
          paragraphs: [
            "Die Siegquoten in Prozent und die Fortschrittsmarken auf diesen Chips sind Beispiele. Sie sind weder eine zweite Rangleiter noch ein Ziel, das Sie erreichen müssen.",
            "Das Wechseln des Divisions-Chips ändert keine gespeicherte Wertung. Das kann nur ein eingetragenes Ergebnis, und diese Seite trägt keines ein.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "Was einen Rang nicht verändern kann",
      lede: "Das Abzeichen folgt den gespeicherten Wertungspunkten. Alles andere auf der Website lässt das Abzeichen, wo es ist.",
      sections: [
        {
          heading: "Außerhalb der Engine",
          paragraphs: [
            "Eine Skin-Vorschau, eine Ladenkarte, eine Abonnementbezeichnung und ein kosmetischer Gegenstand fügen keine Wertungspunkte hinzu. Für einen Plan zu bezahlen ist kein Rang.",
            "Das Öffnen der Rangtafel, das Drehen eines Emblems oder das Lesen dieses Kodex wertet kein Spiel.",
            "Eine Meldung, eine Supportnotiz und ein Turnierlayout schreiben die gespeicherte Wertung nicht um.",
          ],
        },
        {
          heading: "Der einzige Weg",
          paragraphs: [
            "Der schriftlich festgelegte Weg ist ein eingetragenes Spielergebnis, das durch die Wertungspunkte-Engine verarbeitet wird. Keine öffentliche Seite dieser Website trägt ein solches Ergebnis derzeit ein.",
            "Bis ein Ergebnis existiert, bleibt ein neues Konto bei seiner Startwertung, und ein bestehendes Konto behält die bereits gespeicherte Wertung.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "Was Wertungspunkte sind",
      lede: "Wertungspunkte sind die Wettkampfzahl, die im Konto gespeichert ist. Der Rang ist nur der Bereich, in den diese Zahl fällt.",
      sections: [
        {
          heading: "Das gespeicherte Feld",
          paragraphs: [
            "Die Engine-Version ist {version}. Ein neues Konto beginnt mit {startingRating} Wertungspunkten. Die gespeicherte Zahl kann nicht unter {minRating} fallen und nicht über {maxRating} steigen.",
            "Profile und die Rangtafel lesen diese Zahl, wenn Sie angemeldet sind. Wenn Sie nicht angemeldet sind, zeigt die Tafel die Kalibrierungsuntergrenze des ausgewählten Emblems. Diese Untergrenze ist ein Beispiel, nicht Ihr Konto.",
          ],
        },
        {
          heading: "Was die Zahl misst",
          paragraphs: [
            "Die Engine vergleicht Ihre Wertung mit der durchschnittlichen Wertung der Gegenseite. Sie führt keinen separaten Wert für eine persönliche Auszeichnung, eine Headshot-Quote oder den Einsatz von Hilfsmitteln. Diese Werte sind nicht Teil dieser Version.",
            "Eine höhere Zahl bedeutet, dass die Rangleiter erwartet, dass Sie gegen eine niedrigere Zahl häufiger gewinnen. Die Rangnamen sind die öffentliche Lesart dieser Skala.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Wo ein neues Konto beginnt",
      lede: "Die Steam-Anmeldung legt das Konto mit 1.200 Rating Points an, Rang 3, Vanguard, ohne Siege und ohne Niederlagen.",
      sections: [
        {
          heading: "Das Startabzeichen",
          paragraphs: [
            "1.200 ist die Untergrenze von Vanguard. Operative und Recruit liegen darunter, daher startet ein neues Konto in der Mitte der frühen Leiter und nicht ganz unten.",
            "Eine erneute Anmeldung setzt eine bereits gespeicherte Wertung nicht zurück. Die ersten 10 aufgezeichneten Matches sind Platzierung: In dieser Zeit kann die Wertung nicht über Stufe 5 steigen. Der Codex erfindet keine Sieg-Niederlage-Bilanz.",
          ],
        },
        {
          heading: "Wo Sie sie sehen",
          paragraphs: [
            "Nach der Anmeldung über Steam können das Dashboard und die Rangtafel die gespeicherte Wertung anzeigen. Ist die Datenbank nicht erreichbar, sagt die Seite das, statt eine Zahl zu erfinden.",
            "Der Startrang bleibt Vanguard, bis ein aufgezeichnetes Ergebnis die Wertung aus dem Bereich 1.200–1.299 bewegt. Diese Website schreibt heute kein solches Ergebnis.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Wie ein eingetragenes Ergebnis die Wertungspunkte verändert",
      lede: "Ein aufgezeichneter Sieg oder eine Niederlage wird an der Durchschnittswertung des anderen Teams gemessen. Gegen ein gleich starkes Team bringt ein Sieg +20 und eine Niederlage −20. Die vollständigen Regeln stehen auf der Ranks-Seite.",
      sections: [
        {
          heading: "Der Schritt",
          paragraphs: [
            "Der erwartete Score ist die Chance, die die Engine vor dem Match vergibt, allein aus den beiden Wertungen. Bei gleicher Wertung liegt sie bei der Hälfte, daher bringt ein Sieg 20 Rating Points und eine Niederlage kostet 15.",
            "Gegen eine höhere Wertung bringt ein Sieg mehr als 20 und eine Niederlage kostet weniger. Gegen eine niedrigere Wertung ist es umgekehrt. Ein Sieg bringt immer 10 bis 30, eine Niederlage kostet immer 10 bis 30. In den Stufen 7–9 werden Siege und Niederlagen mit 0,85 und in Stufe 10 mit 0,75 multipliziert, sodass sich die Spitze ruhiger bewegt. Die Wertung bleibt zwischen 100 und 3.000.",
            "Bei einem Teamergebnis wird jeder Spieler an der Durchschnittswertung des anderen Teams gemessen. Ein Match-MVP-Bonus von 2 RP ist geplant, sobald der Server Kills aufzeichnet; bis dahin gibt es keinen persönlichen Bonus.",
          ],
        },
        {
          heading: "Ein Unentschieden",
          paragraphs: [
            "Ein Unentschieden ändert nichts: Jeder Spieler behält seine Wertung. Wer ein Match abbricht oder verlässt, verliert das Doppelte einer normalen Niederlage, mindestens 30 RP, unabhängig vom Ergebnis.",
            "Die Tabelle auf dieser Seite zeigt die Engine bei der Arbeit mit Beispieleingaben. Diese Zeilen sind keine gespeicherten Spiele und nicht Ihr Konto.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "Untergrenze, Obergrenze und ein übersprungener Rang",
      lede: "Die gespeicherte Zahl stoppt bei 100 und bei 3.000. Der Rang folgt immer der Zahl, daher kann ein Rang nicht per Schaltfläche übersprungen werden.",
      sections: [
        {
          heading: "Die Grenzen",
          paragraphs: [
            "Eine Niederlage bei 100 Wertungspunkten bleibt bei 100. Ein Sieg bei 3.000 bleibt bei 3.000. Die Untergrenze von Recruit in der Rangleiter ist als 0 angegeben, doch die gespeicherte Zahl nutzt den Bereich unter 100 nie.",
            "1.949 ist Sovereign. 1.950 ist A.C.E Legend. Dazwischen gibt es kein Abzeichen.",
          ],
        },
        {
          heading: "Kein Überspringen",
          paragraphs: [
            "Würde ein eingetragenes Ergebnis die Zahl von 1.050 auf 1.260 springen lassen, trüge das Konto den Rang Vanguard, weil 1.260 in diesem Bereich liegt. Die Ränge dazwischen werden nicht als einzelne Aufstiege nacheinander vergeben. Die Zahl wird einmal gelesen.",
            "Keine Seite dieser Website führt diesen Sprung aus. Das Beispiel zeigt nur, wie die Rangleiter eine Zahl liest.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Wo ein Spiel-Link erscheinen würde",
      lede: "Ein Spiel-Link ist die Adresse eines Spielservers. Diese Website gibt keinen aus.",
      sections: [
        {
          heading: "Der Spieltisch, den Sie öffnen können",
          paragraphs: [
            "Die Spielseite zeigt ein Layout für zehn Spieler und eine Schaltfläche SPIEL FINDEN. Diese Schaltfläche bleibt geschlossen. Sie kann keinen Counter-Strike 2-Server öffnen und gibt niemandem eine Adresse.",
            "Die Zahl der Personen auf der Website ist keine Zahl der Personen in einem Spiel. Die Spielerzahl für ein Spiel beträgt 0.",
          ],
        },
        {
          heading: "Wo ein Link später stehen würde",
          paragraphs: [
            "Gäbe es einen Spielserver, würden die Adresse und ihr Passwort auf dem Spieltisch angezeigt, nachdem die zehn Spieler angenommen haben. Ein Spieler würde über Steam beitreten. Auf dieser Website wird keine Adresse gespeichert und kein Passwort erzeugt.",
            "Die Anmeldung über Steam verknüpft das Konto. Sie setzt keinen Spieler auf eine Karte.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "Was der Ranglisten-Spieltisch ist",
      lede: "Der Ranglisten-Spieltisch ist das Layout der Spielseite für ein 5v5. Er ist ein geschlossener Spieltisch, keine offene Warteschlange.",
      sections: [
        {
          heading: "Was dargestellt wird",
          paragraphs: [
            "Zwei Seiten mit je fünf Plätzen und eine Kapitänsbezeichnung auf dem ersten Platz. Die Kartenliste und die Chatzeile daneben gehören zum selben Layout.",
            "Die Sicherheitszeilen auf dieser Seite sind mit ihrem Status gekennzeichnet. Keine davon ist bisher eine laufende Prüfung; die Roadmap steht unter /anti-cheat.",
          ],
        },
        {
          heading: "Was der Spieltisch nicht tut",
          paragraphs: [
            "SPIEL FINDEN sucht keine Gegner. Es ändert keine Wertungspunkte. Der Rang eines Kontos ist weiterhin die gespeicherte Zahl, gelesen von der Rangleiter in diesem Kodex.",
            "Es gibt keine separate Spitzenwarteschlange oberhalb von Legend. A.C.E Legend ist das letzte Abzeichen und beginnt bei 1.950 Wertungspunkten.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Hilfe vom Spieltisch",
      lede: "Der Support auf dieser Website ist ein schriftlicher Schalter. Er öffnet keine Live-Sprachverbindung während eines Spiels.",
      sections: [
        {
          heading: "Was die Supportseite tut",
          paragraphs: [
            "Die Supportseite listet die Schalter auf und bietet eine Schaltfläche für Anfragen. Diese Schaltfläche legt keinen Vorgang an und erreicht während eines Spiels keine Person, weil kein Spiel läuft.",
            "Eine Regelfrage gehört zum Wettkampfkodex unter /rules. Eine Frage zur Rangleiter gehört in diesen Kodex.",
          ],
        },
        {
          heading: "Ein Protest, sobald ein Spiel existiert",
          paragraphs: [
            "Der schriftliche Kodex besagt, dass der Kapitän einen Protest einlegen darf, bevor die nächste Karte beginnt, unter Angabe der Karte, der Runde und des Artikels. Diese Website speichert keine Demos und betreibt keine Spielserver, daher kann ein solcher Protest derzeit nirgendwo eingehen.",
            "Ein Layout-Ergebnis ist kein gespieltes Spiel. Die Leitung würde ein Serienergebnis erst nach einer echten Serie eintragen.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "Warten auf zehn Spieler",
      lede: "Eine Wettkampfkarte benötigt zehn Stammspieler. Der Spieltisch verwaltet dieses Warten derzeit nicht.",
      sections: [
        {
          heading: "Die schriftlich festgelegte Uhr",
          paragraphs: [
            "Sobald ein Spiel einen veröffentlichten Beginn hat, müssen fünf Stammspieler einer Seite 15 Minuten vor diesem Beginn bereit sein. Dieser Satz steht im Wettkampfkodex. Die Uhr startet auf dieser Website nicht, weil kein Spiel veröffentlicht ist.",
            "Die auf der Spielseite angezeigten Namen sind eine Vorschau. Es sind keine Personen, die in einer Warteschlange sitzen.",
          ],
        },
        {
          heading: "Was nicht passiert, während Sie zusehen",
          paragraphs: [
            "Die Seite reserviert keinen Server, sendet keine Push-Benachrichtigung und zählt nicht zu einer Annahme herunter. Wenn Sie die Seite verlassen, brechen Sie kein Spiel ab, weil Sie in keinem waren.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "Der Kapitän am Spieltisch",
      lede: "Ein Kapitän spricht für eine Seite. Lobby-Rollen starten mit der Wettkampf-Beta.",
      sections: [
        {
          heading: "Was der Kodex zuweist",
          paragraphs: [
            "Der Kapitän übernimmt das Veto, die Pausen und einen Protest. Die anderen Stammspieler spielen. Ein Ersatzspieler darf nur zwischen den Karten eingewechselt werden.",
            "Auf einer Karte bannen die Captains abwechselnd je eine Karte, bis eine übrig bleibt. Der Pool ist Ancient, Anubis, Dust II, Inferno, Mirage, Nuke und Train. Der höhere Seed ist Team A und wählt, ob es zuerst oder als Zweites bannt; bei gleichem Seed entscheidet ein Münzwurf. Heute ist kein Veto offen.",
          ],
        },
        {
          heading: "Pausen",
          paragraphs: [
            "Pausen gelten erst, wenn ein Matchserver existiert. Hier gibt es keinen. Erlaubt sind pro Team und Karte drei taktische Pausen zu 30 Sekunden, plus eine in der Verlängerung, und insgesamt 10 Minuten technische Pause. Der volle Text steht unter /rules.",
            "Auf der Mannschaftsseite ist der Kapitän außerdem die Mitgliedschaft, die eine Kadereinladung senden darf. Diese Einladung ist von einer Spiel-Lobby getrennt.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Wenn eine Seite nicht bereit ist",
      lede: "Der Wettkampfkodex beschreibt eine kampflose Niederlage für ein Spiel mit veröffentlichtem Beginn. Diese Website spricht eine solche Niederlage nicht aus.",
      sections: [
        {
          heading: "Die schriftliche Regel",
          paragraphs: [
            "Fünf Stammspieler müssen 15 Minuten vor dem veröffentlichten Beginn bereit sein. Eine Seite, der 15 Minuten nach dem Beginn noch Spieler fehlen, verliert die Serie kampflos, sobald ein Spiel existiert. Fehlen beide Seiten, werden beide entfernt, und die Leitung trägt den Platz ein.",
            "Ein Clan, der eine Karte mit weniger als fünf spielberechtigten Stammspielern beginnt und keinen einsatzfähigen Ersatzspieler hat, verliert diese Karte kampflos.",
          ],
        },
        {
          heading: "Was diese Website nicht tun wird",
          paragraphs: [
            "Nichts hier beobachtet eine Lobby und trägt von selbst eine kampflose Niederlage ein. Eine Schaltfläche auf der Spielseite kann keine Karte aufgeben, die nie geladen wurde.",
            "Ein Layout-Ergebnis im Turnierbaum ist kein gespieltes Spiel und keine kampflose Niederlage.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Teilnahme am K.-o.-Turnier mit 100 Clans",
      lede: "Die Turnierseite ist ein Turnierbaum mit 100 Clans. Die Anmeldung steht bei 0 von 100. Die Anmeldung ist nicht geöffnet.",
      sections: [
        {
          heading: "Was Sie öffnen können",
          paragraphs: [
            "Klicke im Turnierbaum auf einen Clan, um sein Roster zu sehen, und öffne dann einen Spieler. Namen auf freien Plätzen sind Vorschauen, keine angenommenen Anmeldungen.",
            "Der Turnierbaum weist keinen Server zu und sendet keinen Spiel-Link.",
          ],
        },
        {
          heading: "Das Freilos, sobald die Anmeldung öffnet",
          paragraphs: [
            "Die schriftliche Regel für eine künftige Anmeldung lautet, dass die ersten 28 angenommenen Clans Runde 1 überspringen. Dieses Freilos ist kein Preis, und es kann nicht beansprucht werden, solange die Anmeldung bei 0 von 100 steht.",
            "Serienlänge, Kartenpool und Proteste stehen im Wettkampfkodex unter /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Wie ein Kader zusammengestellt wird",
      lede: "Ein Kapitän lädt einen Spieler ein, der bereits ein A.C.E-Konto hat. Es gibt keinen öffentlichen Freigabelink, und es wird niemals nach einem Steam-Passwort gefragt.",
      sections: [
        {
          heading: "Die Einladung, die es gibt",
          paragraphs: [
            "Auf der Mannschaftsseite fügt ein angemeldeter Kapitän eine SteamID64 oder eine A.C.E-Kontokennung ein. Das Konto muss bereits über Steam OpenID verknüpft sein. Der Server legt eine ausstehende Einladung an, wenn die Datenbank sie annimmt.",
            "Der Kader umfasst fünf Spieler, einschließlich des Kapitäns. Ein Kapitän kann nicht sein eigenes Konto einladen. Ein Spieler, der bereits im Kader steht, wird abgelehnt. Ist die Datenbank nicht verfügbar, schlägt die Einladung fehl, und es wird keine Einladung gespeichert.",
          ],
        },
        {
          heading: "Was eine Einladung nicht ist",
          paragraphs: [
            "Die Einladung verschickt keinen Brief, öffnet keine private Lobby und erzeugt keinen Link, den Sie veröffentlichen können. Sie setzt den Clan nicht in das K.-o.-Turnier.",
            "Der K.-o.-Kodex erlaubt zwei benannte Ersatzspieler, sobald eine Turnieranmeldung existiert. Die Anmeldung ist nicht geöffnet, daher sind diese Plätze derzeit kein Zugang, den Sie nutzen können.",
          ],
        },
      ],
    },
  },
};
