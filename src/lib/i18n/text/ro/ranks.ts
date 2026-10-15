import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumRanks: {
    kicker: "RANGURI PREMIUM",
    plan: "A.C.E PREMIUM · doar 7 $/lună",
    title: "Grafică de rang Premium",
    lede: "Setul original ilustrat de ranguri A.C.E.: zece embleme de cristal cu diviziile III/II/I, protocolul de rating, cardul de detaliu Legend și vizualizatorul 3D rotit prin tragere. Este grafică de profil pentru membrii Premium. Citește aceeași scară Rating Points ca rangurile standard și nu oferă niciun avantaj competitiv.",
    demo: "Valori demo: progresul, procentul de victorii și diviziile de pe această tablă sunt exemple, nu statistici live. Când ești autentificat, ratingul afișat este ratingul tău stocat.",
    locked: "În curând: checkout-ul nu există încă, deci astăzi niciun cont nu este Premium. Serverul aplică grafica de rang Premium unui profil doar când planul său stocat este Premium.",
    standardKicker: "RANGURI STANDARD",
    standardNote: "Fiecare cont poartă aceste embleme vectoriale 3D.",
    legendTag: "PREMIUM",
    pickerTitle: "Grafica de rang din profilul tău",
    pickerStandard: "Standard",
    pickerPremium: "Premium",
    pickerLocked: "Grafica de rang Premium este pentru A.C.E Premium (7 $/lună). În curând: checkout-ul nu există încă.",
    pickerSaved: "Salvat.",
    pickerFailed: "Nesalvat. Grafica de rang Premium necesită A.C.E Premium.",
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
    "calibrationTarget": "Țintă de calibrare",
    "floor": "Prag",
    "samplesNote": "Cifre țintă pentru fiecare nivel.",
    "progressMockup": "Progres"
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
