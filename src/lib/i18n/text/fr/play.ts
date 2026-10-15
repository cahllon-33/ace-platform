import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "VITRINE · Joueurs d’exemple, pas un match en direct. La file est fermée.",
    "showcaseShort": "VITRINE",
    "queueClosed": "FILE FERMÉE",
    "floorRp": "Plancher du rang {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar de {name}",
    "sampleChat": "Lignes d’exemple. Non envoyées, pas en direct.",
    "sampleLine": "EXEMPLE",
    "operatorA": "Art d’opérateur A.C.E original pour l’équipe A : un opérateur tactique casqué en équipement anthracite avec des accents dorés",
    "operatorB": "Art d’opérateur A.C.E original pour l’équipe B : un combattant rebelle à capuche en équipement anthracite avec des accents dorés",
    "artNote": "Art de personnage A.C.E original. Ce ne sont pas des modèles du jeu."
  },
  meta: {
    title: "Jouer",
    description: "Le matchmaking classé 5v5 ouvrira dès que l'anti-triche A.C.E Shield sera actif.",
  },
  boards: {
    label: "Tableaux de file",
    title: "Trois tableaux 5v5",
    note: "Le choix reste sur cette page. La recherche classée est fermée, et choisir un tableau ne cherche aucun adversaire.",
    items: {
      open: {
        name: "Tableau ouvert",
        rules: [
          "Un groupe de n'importe quelle taille, jusqu'à cinq",
          "Aucune fourchette de cote",
          "Steam OpenID sert de vérification d'identité",
          "Conçu pour l'entraînement libre une fois qu'une file existera",
        ],
      },
      calibration: {
        name: "Tableau de calibrage",
        rules: [
          "Solo, duo ou trio",
          "Une fourchette prévue de {points} points de cote",
          "Un profil Steam doit déjà être enregistré",
          "Utilise la règle de classement A.C.E. · recherche bientôt",
        ],
      },
      elite: {
        name: "Tableau élite",
        rules: [
          "Solo ou duo",
          "Une fourchette prévue de {points} points de cote",
          "L'abonnement enregistré doit être Plus ou Premium",
          "Conditions d'entrée écrites plus strictes. Aucune cagnotte n'y est associée",
        ],
      },
    },
  },
  veto: {
    kicker: "VETO DE CARTES",
    title: "Choisissez la carte",
    lede: "Écartez des cartes jusqu'à ce qu'il n'en reste qu'une. Ce lobby ne lance pas Counter-Strike 2 et n'ouvre aucun serveur.",
    mapSelected: "Carte sélectionnée : {map}",
    yourBan: "Votre ban",
    opponentBan: "Ban adverse",
    selected: "Sélectionnée",
    declined: "Écartée",
    decline: "Écarter",
    reset: "Réinitialiser le veto",
    declinedToast: "{map} a été écartée. Cette page n'ouvre aucun serveur.",
    lockKicker: "SALLE DE MATCH 5v5",
    lockTitle: "{map} est la carte restante",
    lockBody:
      "Votre salle de match. Les matchs compétitifs commenceront ici à l'ouverture de la bêta compétitive.",
    close: "Fermer",
  },
  arena: {
    ariaLabel: "Aperçu de la salle de match",
    captain: "Capitaine",
    ping: "Ping {ping}",
    mapPlates: "Plaques de cartes",
    selectMap: "Choisir {map}",
    settings: {
      region: "Région",
      mode: "Mode",
      antiCheat: "Anti-triche",
      simulator: "Aperçu",
    },
    chat: {
      title: "CHAT D'ÉQUIPE",
      kicker: "CHAT D'ÉQUIPE · BIENTÔT",
      captainName: "{name} (capitaine)",
      layoutName: "{name}",
      samples: ["gl hf tout le monde", "c'est parti", "dust 2 nous réussit bien", "prêt"],
      inputLabel: "Message du chat d'équipe",
      placeholder: "Message à l'équipe…",
      send: "Envoyer",
    },
    tiles: {
      map: "Carte",
      server: "Serveur",
      serverValue: "EU Ouest · bientôt",
      mode: "Mode",
    },
    identity: {
      title: "VÉRIFICATION D'IDENTITÉ",
      kicker: "VÉRIFICATIONS D'IDENTITÉ · BIENTÔT",
      rows: [
        "Vérification de l'e-mail · bientôt",
        "Vérification du téléphone · bientôt",
        "Vérification faciale · bientôt",
      ],
    },
    security: {
      title: "SÉCURITÉ DU MATCH",
      kicker: "A.C.E SHIELD · EN DÉVELOPPEMENT",
      rows: [
        "Protection anti-triche · en développement",
        "Contrôle d'intégrité du serveur · en développement",
        "Chiffrement des données de match · en développement",
      ],
    },
    findMatchReason: "Le matchmaking ouvrira avec la bêta compétitive. Les files classées ne fonctionnent pas encore.",
  },
};
