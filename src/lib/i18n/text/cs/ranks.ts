import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Soutěžní hodnosti",
    description:
      "Deset hodností A.C.E. na 3D otočném stojanu CSS, který lze otáčet tažením. Studiové modely GLTF mohou po dodání nahradit statické obrázky.",
  },
  hero: {
    kicker: "KALIBRACE",
    title: "Soutěžní hodnosti",
    lede: "Od Recruit po A.C.E. Legend, divize {divisions}. Každý emblém je koncepční statický obrázek na 3D otočném stojanu CSS (tažením nebo šipkami). Model GLTF lze později vložit do zdokumentovaného slotu — v repozitáři zatím nejsou žádné soubory modelů. Čísla hodnocení jsou po přihlášení skutečnými hodnotami vašeho účtu, jinak jde o kalibrační dolní hranici.",
  },
  codexLink: "Otevřít kalibrační kodex",
  document: {
    title: "Dokument kalibrace o deseti stupních",
    body: "Názvy z enginu tvoří oficiální žebříček. Krystalové přezdívky jsou grafikou lobby. Štítky úspěšnosti výher na tabuli jsou ukázky z vitríny, ne živé párování. Placená kosmetika nikdy nepřesune hráče mezi těmito stupni.",
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
    premium: "PREMIUM",
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
    samplesNote: "Ukázky rozvržení. Nejde o živou telemetrii.",
    progressMockup: "Maketa postupu",
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
