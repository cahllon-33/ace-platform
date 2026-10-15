import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "rpRules": {
    "kicker": "PRAVIDLA RATING POINTS A.C.E",
    "title": "Jak se mění Rating Points",
    "lede": "Verze pravidel {version}. Každý nový hráč začíná s {start} RP v úrovni 3, {tier}. Žebříček je záměrně pomalý: každá úroveň nad středem vyžaduje více výher než ta předchozí.",
    "tableTitle": "Pravidla",
    "colRule": "Pravidlo",
    "colValue": "Hodnota",
    "rStart": "Počáteční hodnocení",
    "vStart": "{start} RP, úroveň 3 ({tier})",
    "rWin": "Výhra proti vyrovnanému týmu",
    "vWin": "+{win} RP",
    "rLoss": "Prohra proti vyrovnanému týmu",
    "vLoss": "−{loss} RP",
    "rOdds": "Síla soupeře",
    "vOdds": "Tvé hodnocení se porovnává s průměrným hodnocením druhého týmu (škála {scale}). Výhra nad silnějším týmem dává víc a prohra s ním stojí méně; proti slabšímu týmu je to naopak.",
    "rClamp": "Limity za zápas",
    "vClamp": "Výhra dává +{winMin} až +{winMax} RP. Prohra stojí −{lossMin} až −{lossMax} RP.",
    "rTier": "Výhry ve vysokých úrovních",
    "vTier": "Zisky za výhru se v úrovních 7–9 násobí {t7} a v úrovni 10 ({top}) {t10}. Prohry se nikdy nesnižují.",
    "rMvp": "MVP zápasu",
    "vMvp": "Hráč s nejvíce zabitími; při shodě rozhoduje vyšší poškození, pak méně úmrtí. +{mvp} RP při výhře a o {mvp} RP menší ztráta při prohře, nikdy za limity zápasu. Brzy: server zatím nezaznamenává zabití, proto se dnes žádný bonus MVP neuplatňuje.",
    "rPlacement": "Umísťovací zápasy",
    "vPlacement": "Tvých prvních {n} zápasů. Během nich nemůže tvé hodnocení stoupnout nad úroveň {maxTier} ({cap} RP).",
    "rDraw": "Remíza",
    "vDraw": "0 RP pro všechny.",
    "rAbandon": "Opuštění nebo odchod ze zápasu",
    "vAbandon": "−{abandon} RP bez ohledu na výsledek a bez bonusu MVP.",
    "rLimits": "Rozsah hodnocení",
    "vLimits": "{floor} až {ceiling} RP",
    "rDecay": "Neaktivita",
    "vDecay": "Žádný pokles. Tvé hodnocení neklesá, když nehraješ.",
    "rPaid": "Placené plány",
    "vPaid": "Žádný vliv. Hráči Free, Plus a Premium se řídí přesně stejnými pravidly.",
    "tierTableTitle": "Podle úrovně, proti vyrovnanému týmu",
    "colTier": "Úroveň",
    "colFloor": "Od",
    "colWin": "Výhra",
    "colLoss": "Prohra",
    "examplesTitle": "Vzorové příklady",
    "ex1": "Z {start} na {elite} RP ({top}) proti vyrovnaným týmům, jen s výhrami: {w1} výher po +15 do úrovně 6, pak {w2} výher po +{win7} v úrovních 7–9. Celkem {total} výher.",
    "ex2": "Každá prohra po cestě přidá další výhry. V úrovních 7–9 dává výhra +{win7}, ale prohra stále stojí −{loss}, takže musíš vyhrát alespoň {breakEven} % vyrovnaných zápasů, abys dál stoupal.",
    "ex3": "Proti týmu s průměrně o 200 RP vyšším hodnocením dává výhra +{strongWin} a prohra stojí −{strongLoss}.",
    "ex4": "Proti týmu s průměrně o 200 RP nižším hodnocením dává výhra +{weakWin} a prohra stojí −{weakLoss}.",
    "note": "Tato čísla počítá stejný kód, který uplatňuje ověřený výsledek zápasu. Jsou to příklady, ne uložené zápasy."
  },
  "premiumCodex": {
    "kicker": "KODEX PRÉMIOVÝCH RANKŮ",
    "title": "Kodex prémiových ranků",
    "lede": "Deset ilustrovaných krystalových emblémů, jeden pro každý rank. Je to kosmetická grafika profilu na stejném žebříčku Rating Points jako standardní ranky. Nemění rating, matchmaking ani frontu.",
    "cosmetic": "Kosmetická grafika · stejný žebříček RP · pouze A.C.E Premium 7 $/měs.",
    "imgAlt": "Prémiová grafika ranku {name}, úroveň {level}"
  },
  "premiumRanks": {
    "kicker": "PRÉMIOVÉ HODNOSTI",
    "plan": "A.C.E PREMIUM · pouze 7 $/měsíc",
    "title": "Prémiová grafika hodností",
    "lede": "Původní ilustrovaná sada hodností A.C.E.: deset krystalových emblémů s divizemi III/II/I, ratingový protokol, detailní karta Legend a 3D prohlížeč otáčený tažením. Je to grafika profilu pro členy Premium. Čte stejný žebříček Rating Points jako standardní hodnosti a nedává žádnou soutěžní výhodu.",
    "demo": "Ukázkové hodnoty: postup, podíl výher a divize na této tabuli jsou ukázky, ne živé statistiky. Po přihlášení je zobrazený rating tvůj uložený rating.",
    "locked": "Již brzy: platba zatím neexistuje, takže dnes žádný účet není Premium. Server použije prémiovou grafiku hodností na profil jen tehdy, když je jeho uložený plán Premium.",
    "standardKicker": "STANDARDNÍ HODNOSTI",
    "standardNote": "Každý účet nosí tyto 3D vektorové emblémy.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Grafika hodnosti na tvém profilu",
    "pickerStandard": "Standardní",
    "pickerPremium": "Premium",
    "pickerLocked": "Prémiová grafika hodností je pro A.C.E Premium (7 $/měsíc). Již brzy: platba zatím neexistuje.",
    "pickerSaved": "Uloženo.",
    "pickerFailed": "Neuloženo. Prémiová grafika hodností vyžaduje A.C.E Premium."
  },
  "meta": {
    "title": "Soutěžní hodnosti",
    "description": "Deset hodností A.C.E., od Iron Recruit po A.C.E. Legend, s divizemi a spodními hranicemi hodnocení."
  },
  "hero": {
    "kicker": "KALIBRACE",
    "title": "Soutěžní hodnosti",
    "lede": "Deset úrovní od Recruit po A.C.E. Legend, každá s divizemi {divisions}. Přetáhni nebo použij šipky k otočení znaku. Po přihlášení vidíš své hodnocení, jinak spodní hranici každé úrovně."
  },
  "codexLink": "Otevřít kalibrační kodex",
  "document": {
    "title": "Dokument kalibrace o deseti stupních",
    "body": "Názvy enginu tvoří oficiální žebříček. Krystalové přezdívky jsou grafika lobby. Procenta výher na tabuli jsou ukázkové hodnoty do spuštění hodnoceného matchmakingu. Placená kosmetika nikdy nepřesouvá hráče mezi úrovněmi.",
    "level": "ÚROVEŇ {level} · {crystal}",
    "detail": "Minimální hodnocení {rating}. Materiálová studie: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "VSTUPNÍ KALIBRACE",
      "material": "Textura desky ze surového železa / obsidiánu"
    },
    "2": {
      "tagline": "POLNÍ OPERATIVEC",
      "material": "Krystalové jádro z kartáčovaného bronzu"
    },
    "3": {
      "tagline": "PŘEDNÍ LINIE",
      "material": "Střepy růžového zlata s tmavě rudými podtóny"
    },
    "4": {
      "tagline": "PŘESNÉ ŘEMESLO",
      "material": "Blok diamantových střepů z chromového stříbra"
    },
    "5": {
      "tagline": "OSTŘÍLENÉ JÁDRO",
      "material": "Aura roztaveného jádra ze stařené mosazi"
    },
    "6": {
      "tagline": "ZLATÝ STANDARD",
      "material": "Záblesk krystalu ze střepů zářivého zlata"
    },
    "7": {
      "tagline": "AZUROVÝ VZESTUP",
      "material": "Krystalová matice z azurově modré plazmy"
    },
    "8": {
      "tagline": "SAFÍROVÁ BOUŘE",
      "material": "Hyperzářivé bleskové krystalové jádro ze safírové modři"
    },
    "9": {
      "tagline": "KORUNA PRÁZDNOTY",
      "material": "Hvězdné střepové jádro v hluboké kosmické fialové prázdnoty"
    },
    "10": {
      "tagline": "ELITA ELIT",
      "material": "Rámec luxusní koruny z roztaveného zářivého zlata"
    }
  },
  "board": {
    "selectEmblem": "Vybrat emblém hodnosti A.C.E. {name}, úroveň {level}",
    "emblemAlt": "Profilový odznak A.C.E. — vlastní 3D krystalický emblém úrovně {level} {crystal} {name}",
    "emblemAltLegend": "Profilový odznak A.C.E. — vlastní 3D krystalický emblém úrovně {level}",
    "premium": "NEJVYŠŠÍ ÚROVEŇ"
  },
  "division": {
    "label": "Divize {division}",
    "select": "Vybrat divizi {division}",
    "summary": "{divisions} divize u každého / celkem {levels} úrovní"
  },
  "card": {
    "rank": "Hodnost {level}",
    "targetWinRate": "Cílová úspěšnost výher {winRate}",
    "floor": "Dolní hranice"
  },
  "turntable": {
    "stageLabel": "Orbitální emblém {name}. Otáčejte tažením.",
    "dragToRotate": "OTÁČEJTE TAŽENÍM",
    "rankSystem": "SYSTÉM HODNOSTÍ"
  },
  "emblem": {
    "kicker": "Kalibrační značka",
    "rankLabel": "Hodnost {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} umísťovacích značek je vyplněno z uložených výher a proher. Tyto uzly nespouštějí zápas."
  }
};
