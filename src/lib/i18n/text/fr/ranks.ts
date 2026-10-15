import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumCodex: {
    "kicker": "CODEX DES RANGS PREMIUM",
    "title": "Codex des rangs Premium",
    "lede": "Dix emblèmes de cristal illustrés, un par rang. C’est un art de profil cosmétique sur la même échelle de Rating Points que les rangs standard. Il ne change ni le rating, ni le matchmaking, ni la file.",
    "cosmetic": "Art cosmétique · même échelle RP · uniquement A.C.E Premium 7 $/mois",
    "imgAlt": "Art de rang Premium {name}, niveau {level}"
  },
  premiumRanks: {
    kicker: "RANGS PREMIUM",
    plan: "A.C.E PREMIUM · 7 $/mois uniquement",
    title: "Visuels de rang Premium",
    lede: "Le jeu original illustré des rangs A.C.E. : dix emblèmes de cristal avec divisions III/II/I, le protocole de classement, la fiche détaillée Legend et la visionneuse 3D à faire pivoter par glisser. C'est un visuel de profil pour les membres Premium. Il lit la même échelle de Rating Points que les rangs standard et ne donne aucun avantage compétitif.",
    demo: "Valeurs de démonstration : la progression, le taux de victoire et les divisions de ce tableau sont des exemples, pas des statistiques en direct. Une fois connecté, le classement affiché est ton classement enregistré.",
    locked: "Bientôt : le paiement n'existe pas encore, donc aucun compte n'est Premium aujourd'hui. Le serveur n'applique les visuels de rang Premium qu'à un profil dont le forfait enregistré est Premium.",
    standardKicker: "RANGS STANDARD",
    standardNote: "Chaque compte porte ces emblèmes vectoriels 3D.",
    legendTag: "PREMIUM",
    pickerTitle: "Visuel de rang sur ton profil",
    pickerStandard: "Standard",
    pickerPremium: "Premium",
    pickerLocked: "Les visuels de rang Premium sont réservés à A.C.E Premium (7 $/mois). Bientôt : le paiement n'existe pas encore.",
    pickerSaved: "Enregistré.",
    pickerFailed: "Non enregistré. Les visuels de rang Premium nécessitent A.C.E Premium.",
  },
  meta: {
    title: "Rangs compétitifs",
    description:
      "Les dix rangs A.C.E., d'Iron Recruit à A.C.E. Legend, avec divisions et seuils de classement.",
  },
  hero: {
    kicker: "CALIBRAGE",
    title: "Rangs compétitifs",
    lede: "Dix paliers de Recruit à A.C.E. Legend, chacun avec les divisions {divisions}. Faites glisser ou utilisez les flèches pour faire pivoter un emblème. Connecté, vous voyez votre propre classement ; sinon le seuil de chaque palier.",
  },
  codexLink: "Ouvrir le Codex de calibrage",
  document: {
    title: "Document de calibrage en dix paliers",
    body: "Les noms du moteur forment l'échelle officielle. Les alias cristal sont de l'habillage de lobby. Les taux de victoire du tableau sont des chiffres de vitrine jusqu'au lancement du matchmaking classé. Les cosmétiques payants ne font jamais changer un joueur de palier.",
    level: "NIVEAU {level} · {crystal}",
    detail: "Cote minimale {rating}. Étude de matière : {material}.",
  },
  tiers: {
    1: { tagline: "CALIBRAGE D'ENTRÉE", material: "Texture de plaque en fer brut / obsidienne" },
    2: { tagline: "AGENT DE TERRAIN", material: "Noyau de cristal en bronze brossé" },
    3: { tagline: "AVANT-GARDE", material: "Éclats d'or rose aux reflets rouge sombre profond" },
    4: { tagline: "ARTISAN DE PRÉCISION", material: "Bloc d'éclats de diamant argent chromé" },
    5: { tagline: "NOYAU AGUERRI", material: "Aura de noyau en fusion de laiton vieilli" },
    6: { tagline: "ÉTALON OR", material: "Éclat de cristal d'or vif flamboyant" },
    7: { tagline: "ASCENSION CYAN", material: "Matrice de cristal de plasma bleu cyan" },
    8: { tagline: "TEMPÊTE DE SAPHIR", material: "Noyau de cristal-éclair bleu saphir hyperlumineux" },
    9: { tagline: "COURONNE DU VIDE", material: "Noyau d'éclats stellaires violet du vide cosmique profond" },
    10: { tagline: "L'ÉLITE DE L'ÉLITE", material: "Structure de couronne de luxe en or radieux en fusion" },
  },
  board: {
    selectEmblem: "Sélectionner l'emblème du rang A.C.E. {name}, niveau {level}",
    emblemAlt: "Badge de profil A.C.E. : emblème cristallin 3D personnalisé {name} {crystal}, niveau {level}",
    emblemAltLegend: "Badge de profil A.C.E. : emblème cristallin 3D personnalisé, niveau {level}",
    premium: "PALIER SUPRÊME",
  },
  division: {
    label: "Division {division}",
    select: "Sélectionner la division {division}",
    summary: "{divisions} divisions chacun / {levels} niveaux au total",
  },
  card: {
    rank: "Rang {level}",
    targetWinRate: "Objectif de {winRate} de victoires",
    calibrationTarget: "Objectif de calibrage",
    floor: "Plancher",
    samplesNote: "Valeurs cibles pour chaque palier.",
    progressMockup: "Progression",
  },
  turntable: {
    stageLabel: "Emblème orbital {name}. Glissez pour faire pivoter.",
    dragToRotate: "GLISSER POUR PIVOTER",
    rankSystem: "SYSTÈME DE RANGS",
  },
  emblem: {
    kicker: "Marque de calibrage",
    rankLabel: "Rang {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} marques de placement sont remplies à partir des victoires et défaites enregistrées. Ces nœuds ne lancent pas de match.",
  },
};
