import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Rangstufe {n}",
    "chip": "Premium",
    "artAlt": "Premium-Rangmotiv {rank}"
  },
  "rpRules": {
    "kicker": "A.C.E RATING-POINTS-REGELN",
    "title": "So bewegen sich Rating Points",
    "lede": "Regelversion {version}. Jeder neue Spieler startet mit {start} RP in Stufe 3, {tier}. Die Leiter ist bewusst langsam: Jede Stufe oberhalb der Mitte braucht mehr Siege als die vorherige.",
    "tableTitle": "Die Regeln",
    "colRule": "Regel",
    "colValue": "Wert",
    "rStart": "Startwertung",
    "vStart": "{start} RP, Stufe 3 ({tier})",
    "rWin": "Sieg gegen ein gleich starkes Team",
    "vWin": "+{win} RP",
    "rLoss": "Niederlage gegen ein gleich starkes Team",
    "vLoss": "−{loss} RP",
    "rOdds": "Gegnerstärke",
    "vOdds": "Deine Wertung wird mit der Durchschnittswertung des anderen Teams verglichen (Skala {scale}). Ein Sieg gegen ein stärkeres Team bringt mehr, eine Niederlage kostet weniger; gegen ein schwächeres Team ist es umgekehrt.",
    "rClamp": "Grenzen pro Match",
    "vClamp": "Ein Sieg bringt +{winMin} bis +{winMax} RP. Eine Niederlage kostet −{lossMin} bis −{lossMax} RP.",
    "rTier": "Siege in hohen Stufen",
    "vTier": "Siegpunkte werden in den Stufen 7–9 mit {t7} und in Stufe 10 ({top}) mit {t10} multipliziert. Niederlagen werden nie reduziert.",
    "rMvp": "Match-MVP",
    "vMvp": "Der Spieler mit den meisten Kills; bei Gleichstand zählt mehr Schaden, dann weniger Tode. +{mvp} RP bei einem Sieg, {mvp} RP weniger Verlust bei einer Niederlage, nie über die Grenzen pro Match hinaus. Demnächst: Der Server zeichnet noch keine Kills auf, daher wird heute kein MVP-Bonus angewendet.",
    "rPlacement": "Platzierung",
    "vPlacement": "Deine ersten {n} Matches. Während der Platzierung kann deine Wertung nicht über Stufe {maxTier} ({cap} RP) steigen.",
    "rDraw": "Unentschieden",
    "vDraw": "0 RP für alle.",
    "rAbandon": "Ein Match abbrechen oder verlassen",
    "vAbandon": "−{abandon} RP, unabhängig vom Ergebnis, und kein MVP-Bonus.",
    "rLimits": "Wertungsbereich",
    "vLimits": "{floor} bis {ceiling} RP",
    "rDecay": "Inaktivität",
    "vDecay": "Kein Verfall. Deine Wertung sinkt nicht, während du weg bist.",
    "rPaid": "Bezahlte Pläne",
    "vPaid": "Keine Wirkung. Free-, Plus- und Premium-Spieler bewegen sich nach genau denselben Regeln.",
    "tierTableTitle": "Pro Stufe, gegen ein gleich starkes Team",
    "colTier": "Stufe",
    "colFloor": "Ab",
    "colWin": "Sieg",
    "colLoss": "Niederlage",
    "examplesTitle": "Rechenbeispiele",
    "ex1": "Von {start} auf {elite} RP ({top}) gegen gleich starke Teams, nur mit Siegen: {w1} Siege mit +{win} bis einschließlich Stufe 6, dann {w2} Siege mit +{win7} durch die Stufen 7–9. Insgesamt {total} Siege.",
    "ex2": "Jede Niederlage unterwegs kostet zusätzliche Siege. In den Stufen 7–9 bringt ein Sieg +{win7}, eine Niederlage kostet aber weiter −{loss}, daher musst du mindestens {breakEven} % der ausgeglichenen Matches gewinnen, um weiter aufzusteigen.",
    "ex3": "Gegen ein Team mit 200 RP mehr im Schnitt bringt ein Sieg +{strongWin} und eine Niederlage kostet −{strongLoss}.",
    "ex4": "Gegen ein Team mit 200 RP weniger im Schnitt bringt ein Sieg +{weakWin} und eine Niederlage kostet −{weakLoss}.",
    "note": "Diese Zahlen berechnet derselbe Code, der ein bestätigtes Matchergebnis anwendet. Es sind Beispiele, keine gespeicherten Matches."
  },
  "premiumCodex": {
    "kicker": "PREMIUM-RANG-CODEX",
    "title": "Premium-Rang-Codex",
    "lede": "Zehn illustrierte Kristallembleme, eines pro Rang. Das ist kosmetische Profil-Art auf derselben Rating-Points-Leiter wie die Standardränge. Sie ändert kein Rating, kein Matchmaking und keine Warteschlange.",
    "cosmetic": "Kosmetische Art · gleiche RP-Leiter · nur A.C.E Premium $7/Monat",
    "imgAlt": "{name} Premium-Rang-Art, Level {level}"
  },
  "premiumRanks": {
    "kicker": "PREMIUM-RÄNGE",
    "plan": "A.C.E PREMIUM · nur 7 $/Monat",
    "title": "Premium-Rangkunst",
    "lede": "Das originale illustrierte A.C.E-Rangset: zehn Kristallembleme mit den Divisionen III/II/I, das Rating-Protokoll, die Legend-Detailkarte und der 3D-Viewer zum Drehen per Ziehen. Es ist Profilkunst für Premium-Mitglieder. Es liest dieselbe Rating-Points-Leiter wie die Standardränge und verschafft keinen Wettbewerbsvorteil.",
    "demo": "Demowerte: Fortschritt, Siegquote und Divisionswerte auf dieser Tafel sind Beispiele, keine Live-Statistiken. Wenn du angemeldet bist, ist das angezeigte Rating dein gespeichertes Rating.",
    "locked": "Demnächst: Einen Checkout gibt es noch nicht, daher ist heute kein Konto Premium. Der Server wendet Premium-Rangkunst nur auf ein Profil an, dessen gespeicherter Plan Premium ist.",
    "standardKicker": "STANDARDRÄNGE",
    "standardNote": "Jedes Konto trägt diese 3D-Vektorembleme.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Rangkunst in deinem Profil",
    "pickerStandard": "Standard",
    "pickerPremium": "Premium",
    "pickerLocked": "Premium-Rangkunst ist für A.C.E Premium (7 $/Monat). Demnächst: Einen Checkout gibt es noch nicht.",
    "pickerSaved": "Gespeichert.",
    "pickerFailed": "Nicht gespeichert. Premium-Rangkunst erfordert A.C.E Premium."
  },
  "meta": {
    "title": "Wettkampfränge",
    "description": "Die zehn A.C.E-Ränge, von Iron Recruit bis A.C.E Legend, mit Divisionen und Wertungsuntergrenzen."
  },
  "hero": {
    "kicker": "KALIBRIERUNG",
    "title": "Wettkampfränge",
    "lede": "Zehn Stufen von Recruit bis A.C.E Legend, jeweils mit den Divisionen {divisions}. Ziehe oder nutze die Pfeiltasten, um ein Emblem zu drehen. Angemeldet siehst du deine eigene Wertung, sonst die Untergrenze jeder Stufe."
  },
  "codexLink": "Kalibrierungs-Codex öffnen",
  "document": {
    "title": "Kalibrierungsdokument mit zehn Stufen",
    "body": "Die Engine-Namen bilden die offizielle Rangleiter. Kristall-Aliasse sind Lobby-Grafik. Siegquoten auf der Tafel sind Schauwerte, bis das Ranglisten-Matchmaking startet. Bezahlte Kosmetik verschiebt einen Spieler nie zwischen diesen Stufen.",
    "level": "STUFE {level} · {crystal}",
    "detail": "Mindestwertung {rating}. Materialstudie: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "EINSTIEGSKALIBRIERUNG",
      "material": "Plattentextur aus Roheisen / Obsidian"
    },
    "2": {
      "tagline": "FELDAGENT",
      "material": "Kristallkern aus gebürsteter Bronze"
    },
    "3": {
      "tagline": "VORDERSTE LINIE",
      "material": "Roségold-Splitter mit dunkelroten Untertönen"
    },
    "4": {
      "tagline": "PRÄZISIONSHANDWERK",
      "material": "Diamantsplitterblock aus Chromsilber"
    },
    "5": {
      "tagline": "ERFAHRENER KERN",
      "material": "Aura eines geschmolzenen Kerns aus gealtertem Messing"
    },
    "6": {
      "tagline": "GOLDSTANDARD",
      "material": "Leuchtender Kristallsplitter aus kräftigem Gold"
    },
    "7": {
      "tagline": "CYAN-AUFSTIEG",
      "material": "Kristallmatrix aus cyanblauem Plasma"
    },
    "8": {
      "tagline": "SAPHIRSTURM",
      "material": "Hell glühender Blitzkristallkern in Saphirblau"
    },
    "9": {
      "tagline": "KRONE DER LEERE",
      "material": "Sternensplitterkern in tiefem kosmischem Leere-Violett"
    },
    "10": {
      "tagline": "DIE ELITE DER ELITE",
      "material": "Kronengerüst aus luxuriösem, strahlend geschmolzenem Gold"
    }
  },
  "board": {
    "selectEmblem": "Rangemblem A.C.E {name} wählen, Stufe {level}",
    "emblemAlt": "Eigenes kristallines 3D-Profilabzeichen von A.C.E, Stufe {level}, {crystal}, Emblem {name}",
    "emblemAltLegend": "Eigenes kristallines 3D-Profilabzeichen von A.C.E, Emblem der Stufe {level}",
    "premium": "HÖCHSTE STUFE"
  },
  "division": {
    "label": "Division {division}",
    "select": "Division {division} wählen",
    "summary": "Je {divisions} Divisionen / {levels} Ebenen insgesamt"
  },
  "card": {
    "rank": "Rang {level}",
    "targetWinRate": "{winRate} Ziel-Siegquote",
    "floor": "Untergrenze"
  },
  "turntable": {
    "stageLabel": "Umlaufendes Emblem {name}. Zum Drehen ziehen.",
    "dragToRotate": "ZUM DREHEN ZIEHEN",
    "rankSystem": "RANGSYSTEM"
  },
  "emblem": {
    "kicker": "Kalibrierungszeichen",
    "rankLabel": "Rang {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} Platzierungsmarken sind aus gespeicherten Siegen und Niederlagen gefüllt. Diese Knoten starten kein Spiel."
  }
};
