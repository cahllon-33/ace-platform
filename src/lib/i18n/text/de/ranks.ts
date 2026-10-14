import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Wettkampfränge",
    description:
      "Zehn A.C.E.-Ränge auf einem dreidimensionalen CSS-Drehteller, der sich durch Ziehen drehen lässt. Studio-GLTF-Modelle können die Standbilder ersetzen, sobald sie geliefert sind.",
  },
  hero: {
    kicker: "KALIBRIERUNG",
    title: "Wettkampfränge",
    lede: "Von Recruit bis A.C.E. Legend, Divisionen {divisions}. Jedes Emblem ist ein Konzept-Standbild auf einem dreidimensionalen CSS-Drehteller (ziehen oder Pfeiltasten). Ein GLTF-Modell kann später in den dokumentierten Platz eingesetzt werden — im Repository liegen noch keine Modelldateien. Die Wertungszahlen sind dein echtes Konto, wenn du angemeldet bist, sonst die Kalibrierungsuntergrenze.",
  },
  codexLink: "Kalibrierungs-Codex öffnen",
  document: {
    title: "Kalibrierungsdokument mit zehn Stufen",
    body: "Die Maschinennamen sind die offizielle Leiter. Kristallnamen sind Warteraum-Grafik. Siegquoten-Plaketten auf der Tafel sind Schau-Beispiele, keine laufende Spielersuche. Bezahlte Kosmetik verschiebt niemals einen Spieler zwischen diesen Stufen.",
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
    premium: "PREMIUM",
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
    samplesNote: "Layout-Beispiele. Keine laufende Telemetrie.",
    progressMockup: "Fortschrittsmuster",
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
