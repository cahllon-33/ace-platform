import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Rangs compétitifs",
    description:
      "Dix rangs A.C.E. sur un plateau tournant 3D en CSS à faire pivoter par glisser. Des modèles GLTF de studio pourront remplacer les images fixes une fois livrés.",
  },
  hero: {
    kicker: "CALIBRAGE",
    title: "Rangs compétitifs",
    lede: "De Recruit à A.C.E. Legend, divisions {divisions}. Chaque emblème est une image conceptuelle fixe sur un plateau tournant 3D en CSS (glisser ou touches fléchées). Un fichier GLTF pourra être déposé plus tard dans l'emplacement documenté — aucun fichier de modèle n'est encore dans le dépôt. Les chiffres de cote sont ceux de votre vrai compte une fois connecté, sinon le plancher de calibrage.",
  },
  codexLink: "Ouvrir le Codex de calibrage",
  document: {
    title: "Document de calibrage en dix paliers",
    body: "Les noms du moteur constituent l'échelle officielle. Les alias cristal sont de l'illustration de lobby. Les pastilles de taux de victoire du tableau sont des échantillons de vitrine, pas du matchmaking en direct. Les cosmétiques payants ne font jamais passer un joueur d'un palier à l'autre.",
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
    premium: "PREMIUM",
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
    samplesNote: "Échantillons de mise en page. Pas de télémétrie en direct.",
    progressMockup: "Maquette de progression",
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
