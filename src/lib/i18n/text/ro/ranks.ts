import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Nivel de rang {n}",
    "chip": "Premium",
    "artAlt": "Grafică de rang Premium {rank}"
  },
  "rpRules": {
    "kicker": "REGULILE RATING POINTS A.C.E",
    "title": "Cum se modifică Rating Points",
    "lede": "Versiunea regulilor {version}. Fiecare jucător nou începe cu {start} RP la nivelul 3, {tier}. Clasamentul este lent intenționat: fiecare nivel de peste mijloc cere mai multe victorii decât cel dinainte.",
    "tableTitle": "Regulile",
    "colRule": "Regulă",
    "colValue": "Valoare",
    "rStart": "Rating de start",
    "vStart": "{start} RP, nivelul 3 ({tier})",
    "rWin": "Victorie cu o echipă egală",
    "vWin": "+{win} RP",
    "rLoss": "Înfrângere cu o echipă egală",
    "vLoss": "−{loss} RP",
    "rOdds": "Puterea adversarului",
    "vOdds": "Ratingul tău este comparat cu ratingul mediu al celeilalte echipe (scara {scale}). O victorie cu o echipă mai puternică aduce mai mult, iar o înfrângere cu ea costă mai puțin; cu o echipă mai slabă este invers.",
    "rClamp": "Limite pe meci",
    "vClamp": "O victorie aduce între +{winMin} și +{winMax} RP. O înfrângere costă între −{lossMin} și −{lossMax} RP.",
    "rTier": "Victorii la niveluri înalte",
    "vTier": "Câștigurile din victorii se înmulțesc cu {t7} la nivelurile 7–9 și cu {t10} la nivelul 10 ({top}). Înfrângerile nu sunt reduse niciodată.",
    "rMvp": "MVP-ul meciului",
    "vMvp": "Jucătorul cu cele mai multe eliminări; la egalitate contează mai mult damage, apoi mai puține morți. +{mvp} RP la victorie și cu {mvp} RP mai puțin pierdut la înfrângere, niciodată peste limitele pe meci. În curând: serverul nu înregistrează încă eliminările, așa că astăzi nu se aplică niciun bonus MVP.",
    "rPlacement": "Plasament",
    "vPlacement": "Primele tale {n} meciuri. În timpul plasamentului ratingul nu poate urca peste nivelul {maxTier} ({cap} RP).",
    "rDraw": "Egal",
    "vDraw": "0 RP pentru toți.",
    "rAbandon": "Abandonarea sau părăsirea unui meci",
    "vAbandon": "−{abandon} RP indiferent de rezultat și fără bonus MVP.",
    "rLimits": "Interval de rating",
    "vLimits": "De la {floor} la {ceiling} RP",
    "rDecay": "Inactivitate",
    "vDecay": "Fără scădere. Ratingul nu scade cât timp lipsești.",
    "rPaid": "Planuri plătite",
    "vPaid": "Niciun efect. Jucătorii Free, Plus și Premium urmează exact aceleași reguli.",
    "tierTableTitle": "Pe nivel, împotriva unei echipe egale",
    "colTier": "Nivel",
    "colFloor": "De la",
    "colWin": "Victorie",
    "colLoss": "Înfrângere",
    "examplesTitle": "Exemple calculate",
    "ex1": "De la {start} la {elite} RP ({top}) împotriva unor echipe egale, doar cu victorii: {w1} victorii a câte +15 până la nivelul 6, apoi {w2} victorii a câte +{win7} la nivelurile 7–9. În total {total} victorii.",
    "ex2": "Fiecare înfrângere pe drum adaugă victorii. La nivelurile 7–9 o victorie aduce +{win7}, dar o înfrângere costă în continuare −{loss}, așa că trebuie să câștigi cel puțin {breakEven}% din meciurile echilibrate ca să urci în continuare.",
    "ex3": "Împotriva unei echipe cu în medie 200 RP mai mult decât tine, o victorie aduce +{strongWin}, iar o înfrângere costă −{strongLoss}.",
    "ex4": "Împotriva unei echipe cu în medie 200 RP mai puțin decât tine, o victorie aduce +{weakWin}, iar o înfrângere costă −{weakLoss}.",
    "note": "Aceste cifre sunt calculate de același cod care aplică un rezultat de meci verificat. Sunt exemple, nu meciuri salvate."
  },
  "premiumCodex": {
    "kicker": "CODEXUL RANGURILOR PREMIUM",
    "title": "Codexul rangurilor Premium",
    "lede": "Zece embleme de cristal ilustrate, câte una pentru fiecare rang. Este artă de profil cosmetică pe aceeași scară Rating Points ca rangurile standard. Nu schimbă ratingul, matchmakingul sau coada.",
    "cosmetic": "Artă cosmetică · aceeași scară RP · doar A.C.E Premium 7 $/lună",
    "imgAlt": "Arta de rang Premium {name}, nivelul {level}"
  },
  "premiumRanks": {
    "kicker": "RANGURI PREMIUM",
    "plan": "A.C.E PREMIUM · doar 7 $/lună",
    "title": "Grafică de rang Premium",
    "lede": "Setul original ilustrat de ranguri A.C.E.: zece embleme de cristal cu diviziile III/II/I, protocolul de rating, cardul de detaliu Legend și vizualizatorul 3D rotit prin tragere. Este grafică de profil pentru membrii Premium. Citește aceeași scară Rating Points ca rangurile standard și nu oferă niciun avantaj competitiv.",
    "demo": "Valori demo: progresul, procentul de victorii și diviziile de pe această tablă sunt exemple, nu statistici live. Când ești autentificat, ratingul afișat este ratingul tău stocat.",
    "locked": "În curând: checkout-ul nu există încă, deci astăzi niciun cont nu este Premium. Serverul aplică grafica de rang Premium unui profil doar când planul său stocat este Premium.",
    "standardKicker": "RANGURI STANDARD",
    "standardNote": "Fiecare cont poartă aceste embleme vectoriale 3D.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Grafica de rang din profilul tău",
    "pickerStandard": "Standard",
    "pickerPremium": "Premium",
    "pickerLocked": "Grafica de rang Premium este pentru A.C.E Premium (7 $/lună). În curând: checkout-ul nu există încă.",
    "pickerSaved": "Salvat.",
    "pickerFailed": "Nesalvat. Grafica de rang Premium necesită A.C.E Premium."
  },
  "meta": {
    "title": "Ranguri competitive",
    "description": "Cele zece ranguri A.C.E., de la Iron Recruit la A.C.E. Legend, cu divizii și praguri de rating."
  },
  "hero": {
    "kicker": "CALIBRARE",
    "title": "Ranguri competitive",
    "lede": "Zece niveluri de la Recruit la A.C.E. Legend, fiecare cu diviziile {divisions}. Trage sau folosește săgețile pentru a roti emblema. Autentificat, îți vezi propriul rating; altfel pragul fiecărui nivel."
  },
  "codexLink": "Deschide Codexul de calibrare",
  "document": {
    "title": "Document de calibrare pe zece niveluri",
    "body": "Numele din motor sunt scara oficială. Aliasurile de cristal sunt artă de lobby. Etichetele cu rata de victorii de pe tablă sunt cifre de prezentare până la lansarea matchmakingului ranked. Cosmeticele plătite nu mută niciodată un jucător între aceste praguri.",
    "level": "NIVEL {level} · {crystal}",
    "detail": "Rating minim {rating}. Studiu de material: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "CALIBRARE DE INTRARE",
      "material": "Textură de placă din fier brut / obsidian"
    },
    "2": {
      "tagline": "OPERATIV DE TEREN",
      "material": "Nucleu de cristal din bronz periat"
    },
    "3": {
      "tagline": "MUCHIA DIN FAȚĂ",
      "material": "Cioburi de aur roz cu nuanțe roșu închis"
    },
    "4": {
      "tagline": "MEȘTEȘUG DE PRECIZIE",
      "material": "Bloc de cioburi de diamant argint-crom"
    },
    "5": {
      "tagline": "NUCLEU EXPERIMENTAT",
      "material": "Aură de nucleu topit din alamă veche"
    },
    "6": {
      "tagline": "STANDARDUL DE AUR",
      "material": "Strălucire de cristal din cioburi de aur viu"
    },
    "7": {
      "tagline": "ASCENSIUNE CYAN",
      "material": "Matrice de cristal de plasmă albastru-cyan"
    },
    "8": {
      "tagline": "FURTUNA DE SAFIR",
      "material": "Nucleu de cristal fulger albastru-safir incandescent"
    },
    "9": {
      "tagline": "COROANA VIDULUI",
      "material": "Nucleu de cioburi stelare violet cosmic profund"
    },
    "10": {
      "tagline": "ELITA ELITEI",
      "material": "Cadru de coroană de lux din aur topit radiant"
    }
  },
  "board": {
    "selectEmblem": "Selectează emblema de rang A.C.E. {name}, nivelul {level}",
    "emblemAlt": "Insignă de profil cu emblemă A.C.E. cristalină 3D personalizată nivel {level} {crystal} {name}",
    "emblemAltLegend": "Insignă de profil cu emblemă A.C.E. cristalină 3D personalizată nivel {level}",
    "premium": "NIVEL DE TOP"
  },
  "division": {
    "label": "Divizia {division}",
    "select": "Selectează divizia {division}",
    "summary": "Câte {divisions} divizii / {levels} niveluri în total"
  },
  "card": {
    "rank": "Rang {level}",
    "targetWinRate": "Rată țintă de victorii {winRate}",
    "floor": "Prag"
  },
  "turntable": {
    "stageLabel": "Emblema orbitală {name}. Trage pentru a roti.",
    "dragToRotate": "TRAGE PENTRU A ROTI",
    "rankSystem": "SISTEM DE RANGURI"
  },
  "emblem": {
    "kicker": "Marcaj de calibrare",
    "rankLabel": "Rang {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} marcaje de plasare completate din victoriile și înfrângerile stocate. Aceste noduri nu pornesc un meci."
  }
};
