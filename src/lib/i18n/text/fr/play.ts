import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Jouer",
    description: "Le matchmaking classé 5v5 reste fermé en cas d'échec tant que l'anti-triche n'est pas réel.",
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
          "Utilise la règle de cote A.C.E., sans recherche en direct",
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
    lockKicker: "MISE EN PAGE 5v5",
    lockTitle: "{map} est la carte restante",
    lockBody:
      "L'effectif ci-dessous est une mise en page. Cette page ne charge aucun match compétitif, ne place aucun joueur dans une partie et n'envoie aucune adresse de serveur.",
    close: "Fermer",
  },
  arena: {
    ariaLabel: "Aperçu de mise en page Match trouvé",
    captain: "Capitaine",
    ping: "Ping {ping}",
    mapPlates: "Plaques de cartes",
    selectMap: "Sélectionner la plaque de carte {map}",
    settings: {
      region: "Région",
      mode: "Mode",
      antiCheat: "Anti-triche",
      simulator: "Simulateur",
    },
    chat: {
      title: "CHAT D'ÉQUIPE",
      kicker: "TERMINAL FICTIF · NON CONNECTÉ AU RÉSEAU",
      captainName: "{name} (capitaine)",
      layoutName: "{name} (mise en page)",
      samples: ["gl hf tout le monde", "c'est parti", "dust 2 nous réussit bien", "prêt"],
      inputLabel: "Message de chat de mise en page",
      placeholder: "Message à l'équipe… (mise en page uniquement)",
      send: "Ajouter une ligne de chat de mise en page",
    },
    tiles: {
      map: "Carte",
      server: "Serveur",
      serverValue: "Europe Ouest · {ping} (échantillon)",
      mode: "Mode",
    },
    identity: {
      title: "VÉRIFICATION D'IDENTITÉ",
      kicker: "CONTRÔLES DE MISE EN PAGE · PAS DE PRESTATAIRES EN DIRECT",
      rows: [
        "Code e-mail vérifié (mise en page)",
        "Code SMS du téléphone vérifié (mise en page)",
        "Scan facial en direct vérifié (mise en page)",
      ],
    },
    security: {
      title: "SÉCURITÉ DU MATCH",
      kicker: "SIMULATEUR · IA NON DÉPLOYÉE",
      rows: [
        "Protection anti-triche — pulsation de mise en page",
        "Contrôle d'intégrité du serveur — fictif",
        "Données du match chiffrées — conceptuel",
      ],
    },
    findMatchReason: "TROUVER UN MATCH ne peut pas ouvrir de serveur CS2 en direct. Le classé est fermé en cas d'échec. Population : 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} n'est pas placé dans cet effectif de mise en page.",
    banner: "MISE EN PAGE D'ARÈNE · AUCUN MATCH EN DIRECT",
    mapPlate: "PLAQUE DE CARTE · DUST II · AUCUN SERVEUR 128-TICK",
    rosterNote: "Pseudonymes de mise en page. Pas un effectif connecté.",
    teamA: "ÉQUIPE A · ALLIANCE TACTIQUE",
    teamB: "ÉQUIPE B · SHADOW LEGION",
    clockLabel: "HORLOGE DE MISE EN PAGE",
    clockNote: "Cette horloge tourne en boucle. La file est fermée.",
    chatKicker: "CHAT D'ÉQUIPE",
    chatLines: [
      "On garde la mise en page jusqu'à la réinitialisation de l'horloge.",
      "Dust II est une plaque de carte sur cette page.",
      "Aucun serveur n'est connecté pour cet effectif.",
    ],
    chatField: "Les messages ne sont pas envoyés.",
    identityKicker: "GRILLE D'IDENTITÉ",
    identityRows: [
      "Aucun e-mail de ticket de match n'est envoyé.",
      "Aucun contrôle noyau n'est en cours.",
      "Aucun flux de télémétrie en direct n'est connecté.",
    ],
    findMatch: "TROUVER UN MATCH COMPÉTITIF",
    closedNotice: "Ce bouton n'ouvre aucun serveur. La file classée est fermée. Population : 0.",
  },
};
