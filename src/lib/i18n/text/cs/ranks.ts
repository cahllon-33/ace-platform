import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Soutěžní hodnosti",
    description:
      "Deset hodností A.C.E., od Iron Recruit po A.C.E. Legend, s divizemi a spodními hranicemi hodnocení.",
  },
  hero: {
    kicker: "KALIBRACE",
    title: "Soutěžní hodnosti",
    lede: "Deset úrovní od Recruit po A.C.E. Legend, každá s divizemi {divisions}. Přetáhni nebo použij šipky k otočení znaku. Po přihlášení vidíš své hodnocení, jinak spodní hranici každé úrovně.",
  },
  codexLink: "Otevřít kalibrační kodex",
  document: {
    title: "Dokument kalibrace o deseti stupních",
    body: "Názvy enginu tvoří oficiální žebříček. Krystalové přezdívky jsou grafika lobby. Procenta výher na tabuli jsou ukázkové hodnoty do spuštění hodnoceného matchmakingu. Placená kosmetika nikdy nepřesouvá hráče mezi úrovněmi.",
    level: "ÚROVEŇ {level} · {crystal}",
    detail: "Minimální hodnocení {rating}. Materiálová studie: {material}.",
  },
  tiers: {
    1: { tagline: "VSTUPNÍ KALIBRACE", material: "Textura desky ze surového železa / obsidiánu" },
    2: { tagline: "POLNÍ OPERATIVEC", material: "Krystalové jádro z kartáčovaného bronzu" },
    3: { tagline: "PŘEDNÍ LINIE", material: "Střepy růžového zlata s tmavě rudými podtóny" },
    4: { tagline: "PŘESNÉ ŘEMESLO", material: "Blok diamantových střepů z chromového stříbra" },
    5: { tagline: "OSTŘÍLENÉ JÁDRO", material: "Aura roztaveného jádra ze stařené mosazi" },
    6: { tagline: "ZLATÝ STANDARD", material: "Záblesk krystalu ze střepů zářivého zlata" },
    7: { tagline: "AZUROVÝ VZESTUP", material: "Krystalová matice z azurově modré plazmy" },
    8: { tagline: "SAFÍROVÁ BOUŘE", material: "Hyperzářivé bleskové krystalové jádro ze safírové modři" },
    9: { tagline: "KORUNA PRÁZDNOTY", material: "Hvězdné střepové jádro v hluboké kosmické fialové prázdnoty" },
    10: { tagline: "ELITA ELIT", material: "Rámec luxusní koruny z roztaveného zářivého zlata" },
  },
  board: {
    selectEmblem: "Vybrat emblém hodnosti A.C.E. {name}, úroveň {level}",
    emblemAlt: "Profilový odznak A.C.E. — vlastní 3D krystalický emblém úrovně {level} {crystal} {name}",
    emblemAltLegend: "Profilový odznak A.C.E. — vlastní 3D krystalický emblém úrovně {level}",
    premium: "NEJVYŠŠÍ ÚROVEŇ",
  },
  division: {
    label: "Divize {division}",
    select: "Vybrat divizi {division}",
    summary: "{divisions} divize u každého / celkem {levels} úrovní",
  },
  card: {
    rank: "Hodnost {level}",
    targetWinRate: "Cílová úspěšnost výher {winRate}",
    calibrationTarget: "Kalibrační cíl",
    floor: "Dolní hranice",
    samplesNote: "Cílové hodnoty pro každou úroveň.",
    progressMockup: "Postup",
  },
  turntable: {
    stageLabel: "Orbitální emblém {name}. Otáčejte tažením.",
    dragToRotate: "OTÁČEJTE TAŽENÍM",
    rankSystem: "SYSTÉM HODNOSTÍ",
  },
  emblem: {
    kicker: "Kalibrační značka",
    rankLabel: "Hodnost {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} umísťovacích značek je vyplněno z uložených výher a proher. Tyto uzly nespouštějí zápas.",
  },
};
