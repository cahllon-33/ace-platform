import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Wettkampfregelwerk",
    description:
      "Wettkampfkodex von A.C.E. für einen Counter-Strike 2-Turnierbaum mit 100 Clans. MR12, Verlängerung, Geld, Pausen und das Freilos in Runde 1. Die Anmeldung ist geschlossen. Es ist kein Preisgeld finanziert.",
  },
  document: {
    header: {
      kicker: "WETTKAMPFKODEX VON A.C.E.",
      title: "Wettkampfregelwerk",
      lede: "Spiellänge, Geld, Uhr und Pausen folgen den öffentlichen Wettkampfeinstellungen von Counter-Strike 2. Der Turnierbaum mit 100 Clans, das Freilos in Runde 1 und die Veto-Reihenfolge sind A.C.E.-Regeln für dieses Layout. Der Kodex gilt für einen Clan erst, nachdem dieser Clan angenommen wurde. Die Anmeldung ist geschlossen.",
      notice:
        "A.C.E. betreibt keinen Counter-Strike 2-Server. Die Anmeldung über Steam erfolgt ausschließlich über Steam OpenID. Diese Seite vergibt keinen Preis und ändert keine Wertung.",
    },
    articleLabel: "ARTIKEL {code}",
    articles: [
      {
        title: "Geltungsbereich",
        paragraphs: [
          "Dies ist der Wettkampfkodex von A.C.E. Er gilt für einen Clan erst, nachdem A.C.E. diesen Clan zu einem Turnier zugelassen hat. Die Anmeldung ist geschlossen: 0 von 100. Ranglisten-Warteschlangen, Spielserver, Zahlungen, Preise und ein herunterladbarer Anti-Cheat-Client sind nicht aktiv. Ein Klick im Browser ist kein Rundensieg, und ein Screenshot ist kein Ergebnis.",
        ],
      },
      {
        title: "Die Karte",
        paragraphs: [
          "Ein Spiel wird fünf gegen fünf gespielt. Die reguläre Spielzeit umfasst höchstens 24 Runden. Die erste Seite, die 13 Runden gewinnt, gewinnt die Karte, und die Karte endet in diesem Moment. Nach 12 Runden werden die Seiten gewechselt. In der ersten Runde der neuen Halbzeit startet jeder Spieler mit $800.",
        ],
      },
      {
        title: "Die Uhr",
        paragraphs: [
          "Eine Runde dauert 1 Minute 55 Sekunden. Der Bomben-Timer beträgt 40 Sekunden. Eine Entschärfung dauert 10 Sekunden, mit Entschärfungskit 5 Sekunden. Das Kaufmenü bleibt ab Rundenbeginn 20 Sekunden geöffnet, und gekauft werden darf nur in der Spawnzone. Offizielle Wettkampfspiele frieren die Runde zu Beginn für 20 Sekunden ein. Das Aufwärmen dauert 2 Minuten oder 15 Sekunden, sobald alle zehn Spieler verbunden sind.",
        ],
      },
      {
        title: "Geld",
        paragraphs: [
          "Ein Spieler kann nicht mehr als $16.000 besitzen. Auf einer Bombenkarte erhält das Team $3.250 für einen Sieg durch Eliminierung oder Zeitablauf, $3.500 für einen Sieg durch Detonation und $3.500 für einen Sieg durch Entschärfung. Wer die Bombe legt, erhält $300. Wer sie entschärft, erhält $300. Eine unterlegene Seite, die die Bombe gelegt hat, erhält zusätzlich $600.",
          "Eine verlorene Runde bringt $1.400 plus $500 für jede Niederlage, die bereits in der Niederlagenserie dieser Seite steht. Die Wettkampfeinstellung beginnt die Serie bei 1, daher bringt die erste verlorene Runde $1.900. Der Bonus steigt dann über $2.400 und $2.900 bis zu einer Obergrenze von $3.400. Eine gewonnene Runde setzt die Serie zurück. Ein Kill bringt die für die jeweilige Waffe festgelegte Belohnung. Legt die Waffe keine besondere Belohnung fest, bringt der Kill $300. Friendly Fire ist aktiv, und ein Geschoss, das einen Mitspieler trifft, verursacht 33 Prozent seines Schadens.",
        ],
      },
      {
        title: "Verlängerung",
        paragraphs: [
          "Eine Karte, die 12–12 steht, geht in die Verlängerung. Ein Block umfasst sechs Runden. Nach drei Runden werden die Seiten gewechselt. Die erste Seite, die im Block vier Runden gewinnt, gewinnt die Karte. Ein Block, der 3–3 endet, startet einen weiteren Block, und die Blöcke werden fortgesetzt, bis eine Seite einen davon gewinnt. Jeder Spieler startet jede Verlängerungshalbzeit mit $10.000. Das offizielle Wettkampf-Matchmaking kann nach einem Block enden und ein Unentschieden werten. Dieser Turnierbaum wertet kein Unentschieden.",
        ],
      },
      {
        title: "Pausen",
        paragraphs: [
          "Diese Pausen gelten erst, wenn ein Spielserver existiert. Auf dieser Website existiert keiner. Jede Seite darf pro Karte drei taktische Pausen von je 30 Sekunden nehmen und darf keine während der Pause der anderen Seite nehmen. Zu Beginn des ersten Verlängerungsblocks steht eine taktische Pause zur Verfügung. Jede Seite darf außerdem pro Karte eine technische Pause von 120 Sekunden nehmen. Verliert ein Spieler die Verbindung, darf der Kapitän diese technische Pause innerhalb von 30 Sekunden nach dem Verbindungsabbruch nutzen, damit der Spieler sich erneut verbinden kann. Ist der Spieler bei Ende der Pause nicht zurück, wird die Karte fortgesetzt. Eine Pause zu nehmen, um eine verlorene Runde zu verzögern, ist ein Verhaltensverstoß.",
        ],
      },
      {
        title: "Das Teilnehmerfeld und das Freilos in Runde 1",
        paragraphs: [
          "Das Meisterschaftslayout ist ein K.-o.-Turnierbaum für 100 Clans. Ein Clan, der eine Serie verliert, scheidet aus. Namen auf offenen Plätzen sind Layout-Beispiele, keine angenommenen Clans.",
          "Sobald die Anmeldung öffnet, werden die Clans in der Reihenfolge nummeriert, in der A.C.E. sie annimmt. Die ersten 28 angenommenen Clans erhalten ein Freilos. Das Freilos überspringt nur Runde 1 und setzt den Clan in Runde 2. Es ist ein Durchgang im Turnierbaum. Es ist kein bezahltes Ticket und kein Preis. Die Clans 29 bis 100 spielen Runde 1. Teilen sich zwei Annahmen denselben Zeitstempel, wird der Clan zuerst eingeordnet, dessen Kader aus fünf Stammspielern früher vollständig war. Ein Clan, der sich vor der Kader-Sperre zurückzieht, verliert das Freilos, und der nächste angenommene Clan in der Reihenfolge übernimmt es.",
        ],
      },
      {
        title: "Serienlänge",
        paragraphs: [
          "Runde 1, die Runde der letzten 64 und die Runde der letzten 32 werden auf einer Karte gespielt. Das Achtelfinale, die Viertelfinals und beide Halbfinals werden im Best-of-Three gespielt. Das große Finale wird im Best-of-Five gespielt.",
        ],
      },
      {
        title: "Karten und das Veto",
        paragraphs: [
          "Der Kartenpool ist die öffentliche Wettkampfliste: Ancient, Anubis, Cache, Dust II, Inferno, Mirage und Nuke. Ändert sich diese öffentliche Liste, bevor die Anmeldung öffnet, wird die Ersatzliste vor dem ersten Veto auf dieser Seite veröffentlicht.",
          "Bei einer Karte sperren die Kapitäne abwechselnd jeweils eine Karte, bis eine Karte übrig bleibt. Die niedrigere Anmeldenummer sperrt zuerst. Im Best-of-Three sperrt jeder Kapitän einmal, dann wählt jeder eine Karte, dann sperrt jeder noch einmal, und die letzte Karte ist die Entscheidungskarte. Die niedrigere Anmeldenummer sperrt zuerst, und der andere Kapitän wählt zuerst. Im Best-of-Five sperrt jeder Kapitän einmal, dann wählen sie abwechselnd, bis vier Karten gewählt sind, und die verbleibende Karte ist die Entscheidungskarte. Die niedrigere Anmeldenummer sperrt zuerst und wählt als Dritte. Auf einer Karte, die ein Kapitän gewählt hat, wählt der andere Kapitän die Startseite. Auf der letzten verbleibenden Karte wählt die niedrigere Anmeldenummer die Startseite. Ein Kapitän, der nach Öffnung des Vetos zehn Minuten lang nicht reagiert, gibt die nächste Sperre oder Wahl an den Gegner ab. Heute ist kein Veto geöffnet.",
        ],
      },
      {
        title: "Kader",
        paragraphs: [
          "Ein Clan meldet fünf Stammspieler und darf zwei Ersatzspieler benennen. Jeder Stammspieler benötigt ein A.C.E.-Konto, das über Steam OpenID verknüpft ist. A.C.E. fragt niemals nach einem Steam-Passwort. Ein Kapitän spricht für das Veto, die Pausen und Proteste. Ein Ersatzspieler darf nur zwischen den Karten eingewechselt werden. Kontoteilung, ein geliehenes Konto und derselbe Spieler in zwei Clans desselben Turnierbaums sind verboten. Diese Website erfasst keine Hardware-Kennungen und führt keinen Anti-Cheat-Client aus.",
        ],
      },
      {
        title: "Spielbereitschaft",
        paragraphs: [
          "Diese Zeiten gelten erst, wenn ein Spiel existiert. Fünf Stammspieler müssen 15 Minuten vor dem veröffentlichten Beginn bereit sein. Eine Seite, die 15 Minuten nach dem veröffentlichten Beginn nicht bereit ist, verliert die Serie kampflos. Fehlen beide Seiten, werden beide entfernt, und die Leitung trägt den Platz ein. Ein Clan, der eine Karte mit weniger als fünf spielberechtigten Stammspielern beginnt und keinen einsatzfähigen Ersatzspieler hat, verliert diese Karte kampflos. Nichts auf dieser Website spricht automatisch eine kampflose Niederlage aus.",
        ],
      },
      {
        title: "Verhalten",
        paragraphs: [
          "Belästigung, Hassrede, Spielmanipulation, Wetten auf die eigene Serie, Ghosting und absichtliche Verzögerung sind Verstöße. Ein nachgewiesener Verstoß kann zum Ausschluss des Clans aus dem Turnierbaum führen. Diese Seite überprüft keinen Spieler und erklärt keinen Spieler für unbedenklich.",
        ],
      },
      {
        title: "Das eingetragene Ergebnis",
        paragraphs: [
          "Der Kapitän darf einen Protest einlegen, bevor die nächste Karte beginnt. Der Protest nennt die Karte, die Runde und den Artikel. Diese Website speichert keine Demos und betreibt keine Spielserver. Die Leitung trägt das Serienergebnis in den Turnierbaum ein. Dieses eingetragene Ergebnis ist der Spielstand, den A.C.E. anzeigt. Es ist kein Verzicht auf irgendein gesetzliches Recht. Ein Layout-Ergebnis ist kein gespieltes Spiel.",
        ],
      },
      {
        title: "Was nicht in Betrieb ist",
        paragraphs: [
          "Die Anmeldung ist geschlossen. Es laufen kein Spielserver, keine Übertragung, kein E-Mail-Versand und kein Preisgeldtopf. Von dieser Seite werden weder Bargeld noch Skins noch Token vergeben. Die Ergebnisse im Turnierbaum bleiben bei 0, bis eine echte Serie eingetragen wird.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Fahrplan der Meisterschaft",
      title: "Zeitplan für den Turnierstart",
      stageLabel: "Phase {n}",
      stages: [
        {
          title: "Offene Anmeldung",
          status: "GESCHLOSSEN · 0 VON 100",
          body: "Die ersten 28 Clans, die bei Öffnung der Anmeldung angenommen werden, erhalten ein Freilos für Runde 1 und ziehen in Runde 2 ein. Die anderen 72 spielen Runde 1. Von dieser Website wird keine Anmelde-E-Mail versendet.",
        },
        {
          title: "Regionale Kalibrierungsbäume",
          status: "GESPERRT",
          body: "Von der Runde der letzten 64 bis zum Achtelfinale. Bis zum Achtelfinale wird auf einer Karte gespielt, danach im Best-of-Three. Es läuft kein Übertragungsplan.",
        },
        {
          title: "Elite-Pro-Viertelfinals",
          status: "GESPERRT",
          body: "Viertelfinals und Halbfinals werden im Best-of-Three mit dem Karten-Veto aus dem Kodex unten gespielt. Es läuft keine Live-Übertragung.",
        },
        {
          title: "Großes Apex-Finale",
          status: "GESPERRT",
          body: "Das große Finale wird im Best-of-Five gespielt. Es ist kein Preis in Form von Bargeld, Skins oder Token finanziert.",
        },
      ],
    },
    code: {
      kicker: "Wettkampfkodex",
      title: "K.-o.-Kodex für 100 Clans",
      lede: "Schriftliche Regeln für den Turnierbaum mit 100 Clans. Eigenständig von A.C.E. verfasst. Die Anmeldung ist geschlossen, es wird kein Spiel ausgetragen, und es ist kein Preisgeld finanziert. Eine Regel zu Lobby, Pause oder kampfloser Niederlage gilt erst, wenn eine echte Serie existiert.",
      articleLabel: "Artikel {id}",
      articles: [
        {
          title: "Teilnehmerfeld",
          body: "Die Meisterschaft ist ein K.-o.-Turnierbaum für 100 Clans. Jeder Clan tritt auf einer Seite des zweiflügeligen Baums an. Ein Clan, der eine Serie verliert, scheidet aus. Der Turnierbaum bleibt ein Layout, bis A.C.E. die Anmeldung öffnet und echte Ergebnisse einträgt. Platzhalternamen auf offenen Plätzen sind keine angenommenen Clans.",
        },
        {
          title: "Anmeldereihenfolge und das Freilos in Runde 1",
          body: "Die Anmeldung ist geschlossen: 0 von 100. Sobald die Anmeldung öffnet, werden die Clans in der Reihenfolge nummeriert, in der A.C.E. sie annimmt. Die ersten 28 angenommenen Clans erhalten ein Freilos. Dieses Freilos überspringt nur Runde 1 und setzt den Clan in Runde 2. Es ist ein Durchgang im Turnierbaum, kein bezahltes Ticket und kein Preis. Die Clans 29 bis 100 spielen Runde 1. Teilen sich zwei Annahmen denselben Zeitstempel, wird der Clan zuerst eingeordnet, dessen Kader aus fünf Stammspielern früher vollständig war. Ein Clan, der sich vor der Kader-Sperre zurückzieht, verliert das Freilos, und der nächste angenommene Clan in der Reihenfolge übernimmt es.",
        },
        {
          title: "Kader",
          body: "Ein Clan meldet fünf Stammspieler und darf zwei Ersatzspieler benennen. Jeder Stammspieler benötigt ein A.C.E.-Konto, das über Steam OpenID verknüpft ist. Ein Kapitän spricht für Vetos, Pausen und Proteste. Ersatzspieler dürfen nur zwischen den Karten eingewechselt werden. Kontoteilung, geliehene Konten und ein Spieler in zwei Clans desselben Turnierbaums sind verboten. Diese Website erfasst keine Hardware-Kennungen und führt keinen Anti-Cheat-Client aus.",
        },
        {
          title: "Serienlänge",
          body: "Runde 1, die Runde der letzten 64 und die Runde der letzten 32 werden auf einer Karte gespielt. Das Achtelfinale, die Viertelfinals und beide Halbfinals werden im Best-of-Three gespielt. Das große Finale wird im Best-of-Five gespielt. Eine Karte gewinnt die Seite, die zuerst 13 Runden erreicht. Bei 12–12 geht die Karte in die Verlängerung: Wer zuerst 4 Runden gewinnt, siegt, nach 3 Runden werden die Seiten gewechselt, und jede Seite startet die Verlängerung mit 10.000 Geld. Eine unentschiedene Verlängerung wird nach derselben Regel erneut gespielt.",
        },
        {
          title: "Kartenpool und Veto",
          body: "Der Kartenpool besteht aus Ancient, Anubis, Cache, Dust II, Inferno, Mirage und Nuke. Bei einer Karte sperren die Kapitäne abwechselnd jeweils eine Karte, bis eine Karte übrig bleibt, und die niedrigere Anmeldenummer sperrt zuerst. Im Best-of-Three sperrt jeder Kapitän einmal, dann wählt jeder eine Karte, dann sperrt jeder noch einmal, und die letzte Karte ist die Entscheidungskarte. Die niedrigere Anmeldenummer sperrt zuerst, und der andere Kapitän wählt zuerst. Im Best-of-Five sperrt jeder Kapitän einmal, dann wählen sie abwechselnd, bis vier Karten gewählt sind, und die verbleibende Karte ist die Entscheidungskarte. Die niedrigere Anmeldenummer sperrt zuerst und wählt als Dritte. Auf einer gewählten Karte wählt der andere Kapitän die Startseite. Auf der letzten verbleibenden Karte wählt die niedrigere Anmeldenummer die Startseite. Ein Kapitän, der nach Öffnung des Vetos zehn Minuten lang nicht reagiert, gibt die nächste Sperre oder Wahl an den Gegner ab. Der vollständige Spielkodex steht unter /rules.",
        },
        {
          title: "Start, Pause und Verbindungsabbruch",
          body: "Diese Zeiten gelten erst, wenn ein Spiel existiert. Auf dieser Website laufen sie nicht, und es ist keine Lobby geöffnet. Fünf Stammspieler müssen 15 Minuten vor dem veröffentlichten Beginn bereit sein. Jede Seite darf pro Karte drei taktische Pausen von je 30 Sekunden und eine technische Pause von 120 Sekunden nehmen. Zu Beginn des ersten Verlängerungsblocks steht eine taktische Pause zur Verfügung. Ein Spieler, der die Verbindung verloren hat, darf sich während einer technischen Pause erneut verbinden, die innerhalb von 30 Sekunden nach dem Verbindungsabbruch genommen wurde. Ist der Spieler bei Ende dieser Pause nicht zurück, wird die Karte ohne ihn fortgesetzt. Nichts auf dieser Website spricht automatisch eine kampflose Niederlage aus. Der vollständige Spielkodex steht unter /rules.",
        },
        {
          title: "Abwesenheit",
          body: "Eine Seite, die 15 Minuten nach dem veröffentlichten Beginn nicht bereit ist, verliert die Serie kampflos. Fehlen beide Seiten, werden beide entfernt, und der nächste Platz bleibt offen, bis die Leitung ein Ergebnis einträgt. Ein Clan, der zu Beginn weniger als fünf spielberechtigte Stammspieler stellt und keinen einsatzfähigen Ersatzspieler hat, verliert diese Karte kampflos.",
        },
        {
          title: "Verhalten",
          body: "Belästigung, Hassrede, Spielmanipulation, Wetten auf die eigene Serie und absichtliche Verzögerung sind Verstöße. Ein nachgewiesener Verstoß führt zum Ausschluss des Clans aus dem Turnierbaum. Der Chat während einer laufenden Serie bleibt, sobald Spiele existieren, auf Aufstellung, Pausen und Spielstand beschränkt. Diese Seite überprüft keine Spieler und behauptet nicht, dass ein Spieler unbedenklich ist.",
        },
        {
          title: "Proteste",
          body: "Der Kapitän legt den Protest im Spielkanal ein, bevor die nächste Karte beginnt. Der Protest nennt die Karte, die Runde und den Regelartikel. Die Leitung kann beide Kapitäne um eine von den Spielern gespeicherte Demo bitten. Diese Website speichert keine Demos und betreibt keine Spielserver. Die Hauptschiedsrichterin oder der Hauptschiedsrichter trägt das Serienergebnis in den Turnierbaum ein. Dieses eingetragene Ergebnis ist der Spielstand, den A.C.E. anzeigt. Es ist kein Verzicht auf irgendein gesetzliches Recht, und es macht ein Layout-Ergebnis nicht zu einem gespielten Spiel.",
        },
        {
          title: "Was diese Seite nicht tut",
          body: "Die Anmeldung ist geschlossen. Es laufen kein Spielserver, keine Übertragung, kein E-Mail-Versand und kein Preisgeldtopf. Von dieser Seite werden weder Bargeld noch Skins noch Token vergeben. Die Ergebnisse im Turnierbaum bleiben bei 0, bis eine echte Serie eingetragen wird. Der obige Kodex ist die schriftliche Regel für das Layout mit 100 Clans. Er gilt für einen Clan erst, nachdem dieser Clan tatsächlich angenommen wurde.",
        },
      ],
    },
  },
};
