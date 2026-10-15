import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumCodex: {
    "kicker": "PREMIUM-RANG-CODEX",
    "title": "Premium-Rang-Codex",
    "lede": "Zehn illustrierte Kristallembleme, eines pro Rang. Das ist kosmetische Profil-Art auf derselben Rating-Points-Leiter wie die Standardränge. Sie ändert kein Rating, kein Matchmaking und keine Warteschlange.",
    "cosmetic": "Kosmetische Art · gleiche RP-Leiter · nur A.C.E Premium $7/Monat",
    "imgAlt": "{name} Premium-Rang-Art, Level {level}"
  },
  premiumRanks: {
    kicker: "PREMIUM-RÄNGE",
    plan: "A.C.E PREMIUM · nur 7 $/Monat",
    title: "Premium-Rangkunst",
    lede: "Das originale illustrierte A.C.E.-Rangset: zehn Kristallembleme mit den Divisionen III/II/I, das Rating-Protokoll, die Legend-Detailkarte und der 3D-Viewer zum Drehen per Ziehen. Es ist Profilkunst für Premium-Mitglieder. Es liest dieselbe Rating-Points-Leiter wie die Standardränge und verschafft keinen Wettbewerbsvorteil.",
    demo: "Demowerte: Fortschritt, Siegquote und Divisionswerte auf dieser Tafel sind Beispiele, keine Live-Statistiken. Wenn du angemeldet bist, ist das angezeigte Rating dein gespeichertes Rating.",
    locked: "Demnächst: Einen Checkout gibt es noch nicht, daher ist heute kein Konto Premium. Der Server wendet Premium-Rangkunst nur auf ein Profil an, dessen gespeicherter Plan Premium ist.",
    standardKicker: "STANDARDRÄNGE",
    standardNote: "Jedes Konto trägt diese 3D-Vektorembleme.",
    legendTag: "PREMIUM",
    pickerTitle: "Rangkunst in deinem Profil",
    pickerStandard: "Standard",
    pickerPremium: "Premium",
    pickerLocked: "Premium-Rangkunst ist für A.C.E Premium (7 $/Monat). Demnächst: Einen Checkout gibt es noch nicht.",
    pickerSaved: "Gespeichert.",
    pickerFailed: "Nicht gespeichert. Premium-Rangkunst erfordert A.C.E Premium.",
  },
  meta: {
    title: "Wettkampfränge",
    description:
      "Die zehn A.C.E.-Ränge, von Iron Recruit bis A.C.E. Legend, mit Divisionen und Wertungsuntergrenzen.",
  },
  hero: {
    kicker: "KALIBRIERUNG",
    title: "Wettkampfränge",
    lede: "Zehn Stufen von Recruit bis A.C.E. Legend, jeweils mit den Divisionen {divisions}. Ziehe oder nutze die Pfeiltasten, um ein Emblem zu drehen. Angemeldet siehst du deine eigene Wertung, sonst die Untergrenze jeder Stufe.",
  },
  codexLink: "Kalibrierungs-Codex öffnen",
  document: {
    title: "Kalibrierungsdokument mit zehn Stufen",
    body: "Die Engine-Namen bilden die offizielle Rangleiter. Kristall-Aliasse sind Lobby-Grafik. Siegquoten auf der Tafel sind Schauwerte, bis das Ranglisten-Matchmaking startet. Bezahlte Kosmetik verschiebt einen Spieler nie zwischen diesen Stufen.",
    level: "STUFE {level} · {crystal}",
    detail: "Mindestwertung {rating}. Materialstudie: {material}.",
  },
  tiers: {
    1: { tagline: "EINSTIEGSKALIBRIERUNG", material: "Plattentextur aus Roheisen / Obsidian" },
    2: { tagline: "FELDAGENT", material: "Kristallkern aus gebürsteter Bronze" },
    3: { tagline: "VORDERSTE LINIE", material: "Roségold-Splitter mit dunkelroten Untertönen" },
    4: { tagline: "PRÄZISIONSHANDWERK", material: "Diamantsplitterblock aus Chromsilber" },
    5: { tagline: "ERFAHRENER KERN", material: "Aura eines geschmolzenen Kerns aus gealtertem Messing" },
    6: { tagline: "GOLDSTANDARD", material: "Leuchtender Kristallsplitter aus kräftigem Gold" },
    7: { tagline: "CYAN-AUFSTIEG", material: "Kristallmatrix aus cyanblauem Plasma" },
    8: { tagline: "SAPHIRSTURM", material: "Hell glühender Blitzkristallkern in Saphirblau" },
    9: { tagline: "KRONE DER LEERE", material: "Sternensplitterkern in tiefem kosmischem Leere-Violett" },
    10: { tagline: "DIE ELITE DER ELITE", material: "Kronengerüst aus luxuriösem, strahlend geschmolzenem Gold" },
  },
  board: {
    selectEmblem: "Rangemblem A.C.E. {name} wählen, Stufe {level}",
    emblemAlt: "Eigenes kristallines 3D-Profilabzeichen von A.C.E., Stufe {level}, {crystal}, Emblem {name}",
    emblemAltLegend: "Eigenes kristallines 3D-Profilabzeichen von A.C.E., Emblem der Stufe {level}",
    premium: "HÖCHSTE STUFE",
  },
  division: {
    label: "Division {division}",
    select: "Division {division} wählen",
    summary: "Je {divisions} Divisionen / {levels} Ebenen insgesamt",
  },
  card: {
    rank: "Rang {level}",
    targetWinRate: "{winRate} Ziel-Siegquote",
    calibrationTarget: "Kalibrierungsziel",
    floor: "Untergrenze",
    samplesNote: "Zielwerte für jede Stufe.",
    progressMockup: "Fortschritt",
  },
  turntable: {
    stageLabel: "Umlaufendes Emblem {name}. Zum Drehen ziehen.",
    dragToRotate: "ZUM DREHEN ZIEHEN",
    rankSystem: "RANGSYSTEM",
  },
  emblem: {
    kicker: "Kalibrierungszeichen",
    rankLabel: "Rang {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} Platzierungsmarken sind aus gespeicherten Siegen und Niederlagen gefüllt. Diese Knoten starten kein Spiel.",
  },
};
