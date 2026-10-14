import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Gestion d'escouade A.C.E.",
    description:
      "Espace conceptuel d'escouade 5v5. Les effectifs, les agents libres et les badges anti-triche sont des maquettes d'aperçu. Les invitations en direct exigent une session Steam vérifiée.",
  },
  hero: {
    kicker: "ÉQUIPES",
    title: "Escouades",
    lede: "Cinq places libres alignées. Un clan n'est enregistré qu'après la connexion Steam et la création d'une équipe.",
  },
  gate: {
    kickerPremium: "Après la lettre Premium",
    kickerDefault: "Fiche de clan",
    title: "Formez-vous une équipe de cinq ?",
    intro:
      "La place 1 est le joueur connecté avec Steam. Les places 2 à 5 doivent déjà avoir un compte A.C.E. Enregistrer un clan ne facture pas $7, n'envoie pas d'e-mail et ne place pas le clan sur le tableau de 100 équipes.",
    yes: "Oui, cinq joueurs",
    no: "Non, laisser les places libres",
    seatsOpen: "Les cinq places restent libres. Rien n'a été enregistré.",
    connectSteam:
      "Connectez d'abord Steam. Le bouton revient sur cette page. A.C.E. ne demande jamais un mot de passe Steam.",
    alreadyMember: "{name} appartient déjà à {team}. Ce formulaire ne crée pas de second clan.",
    thisAccount: "Ce compte",
    acceptTerms: "Acceptez les conditions avant d'enregistrer un clan.",
    notStored: "Le clan n'a pas été enregistré.",
    clanName: "Nom du clan",
    captainSeat: "Place 1, capitaine : {name}",
    signedInSteam: "Compte Steam connecté",
    seatLabel: "SteamID ou ID de compte A.C.E. de la place {seat}",
    submit: "Enregistrer le clan de cinq joueurs",
    saved:
      "Le nom du clan est enregistré et quatre invitations sont en attente. Ces joueurs ne font pas partie de l'effectif tant qu'ils n'ont pas accepté. Ce n'est pas une place sur le tableau de 100 équipes. Rien n'a été facturé.",
  },
  squadDesk: {
    kicker: "Bureau d'escouade",
    title: "Questions sur les règles écrites",
    intro:
      "Ce bureau ne lit que les faits publiés sur cette page. Il ne détecte pas de triche, n'ouvre aucun match et ne modifie aucun compte.",
    questionLabel: "Question",
    placeholder: "Posez une question sur les cinq places, la lettre à $7 ou l'assistance",
    ask: "Demander",
    fallback:
      "Ce bureau ne répond qu'à partir des règles écrites de cette page : la lettre Premium, les cinq places, Steam OpenID et l'assistance.",
    facts: {
      email: "Aucun e-mail n'est envoyé. La lettre Premium reste sur /premium/receipt.",
      charge:
        "Rien n'est facturé. Premium à $7 par mois est un prix d'affichage. Le paiement n'est pas en ligne, et le palier enregistré ne change pas.",
      board:
        "Un clan enregistré est une fiche d'effectif. Il n'est pas placé sur le tableau de 100 équipes. Ce tableau affiche toujours 0 inscrite tant qu'aucune saison n'est ouverte.",
      steam:
        "La connexion utilise le Steam OpenID officiel. A.C.E. ne demande jamais un mot de passe Steam. Depuis cette page, Steam vous ramène ici.",
      roster:
        "La place 1 est le capitaine connecté. Les places 2 à 5 doivent déjà avoir un compte A.C.E. Les invitations restent en attente jusqu'à ce que chaque joueur accepte.",
      badge:
        "Le badge sur une place est un échantillon de mise en page. Ce n'est pas un contrôle anti-triche en direct, et rien n'est téléchargé.",
      support:
        "Ouvrez Assistance ou Contact sur ce site. Une invite d'assistance n'ouvre pas de ticket, et le texte saisi dans Contact n'est pas transmis.",
      rating:
        "Une nouvelle cote démarre à 1 000. Cette page ne vend pas de cote, n'ouvre aucune file, ne connecte aucun serveur CS2 et ne livre aucun prix.",
    },
  },
  squad: {
    roles: {
      awper: "AWPer",
      entryFragger: "Entry fragger",
      lurker: "Lurker",
      igl: "IGL",
      support: "Soutien",
    },
    rankLabel: "Rang {level}",
    noAgents: "Aucun joueur sans équipe n'est encore enregistré.",
    notice:
      "Les invitations ne partent que pour un capitaine connecté. Le badge sur une place n'est pas un contrôle anti-triche en direct.",
  },
  tournaments: {
    meta: {
      title: "Championnat A.C.E. — élimination directe élite à 100 équipes",
      description:
        "Maquette d'élimination directe à 100 équipes. Cliquez sur un clan pour ouvrir son effectif, puis ouvrez chaque profil de joueur. Inscriptions : 0 sur 100.",
    },
    intro: {
      title: "CHAMPIONNAT A.C.E. — ÉLIMINATION DIRECTE ÉLITE À 100 ÉQUIPES",
      lede: "Le plateau publié est une élimination directe à 100 équipes. Le graphique ci-dessous en est la maquette. Cliquer sur un clan ouvre le panneau d'effectif. Inscriptions : 0 sur 100. Aucun prix en argent n'est annoncé ni financé.",
      formatValue: "Matrice de tableau à 100 équipes",
      briefTitle: "Brief opérationnel à 100 équipes",
      briefBody:
        "Une seule maquette compétitive couvre l'ensemble des 100 équipes. À l'ouverture des inscriptions, les 28 premiers clans acceptés sont exemptés du premier tour et passent directement au deuxième. Les 72 autres clans jouent le premier tour. Les noms sur les places non pourvues sont des étiquettes provisoires, pas des inscrits. Le règlement complet se trouve sous l'arbre. Aucun lobby de match n'est ouvert et aucune cagnotte n'est financée.",
    },
    timeline: {
      ariaLabel: "Calendrier de lancement du tournoi",
      kicker: "FEUILLE DE ROUTE DU CHAMPIONNAT",
      title: "CALENDRIER DE LANCEMENT DU TOURNOI",
      stageLabel: "Étape {id}",
      stages: {
        registrations: { title: "Ouverture des inscriptions", state: "APERÇU ANIMÉ" },
        calibration: { title: "Tableaux de calibrage régionaux", state: "VERROUILLÉ" },
        quarterFinals: { title: "Quarts de finale Elite Pro", state: "VERROUILLÉ" },
        finals: { title: "Grande finale Apex", state: "VERROUILLÉ" },
      },
      disclaimer:
        "L'étape 01 s'anime à titre d'aperçu de mise en page. Les inscriptions ne sont pas ouvertes (0 sur 100). Les étapes 02 à 04 sont verrouillées. La Grande finale Apex n'affiche qu'un montant conceptuel de $50,000 — aucune cagnotte n'est financée.",
    },
    bracket: {
      kicker: "Élimination directe à 100 équipes · aperçu de mise en page",
      title: "Matrice de tableau à 100 équipes",
      statusUnavailable:
        "PostgreSQL n'est pas connecté. Les 100 places de concurrents utilisent des noms de clans provisoires, pas des équipes inscrites. Les scores des séries restent à 0.",
      statusEmpty:
        "Aucun clan n'est encore enregistré. Les 100 noms de concurrents sont une maquette provisoire. Ce ne sont pas des participants enregistrés.",
      statusStored:
        "{count} clans de la base de données sont placés en premier. Les places de concurrents restantes utilisent des noms provisoires. Les tours suivants restent ouverts jusqu'à l'enregistrement des matchs.",
      openSlot: "Place libre",
      openCompetitorSlot: "Place de concurrent libre",
      openRoster: "Ouvrir l'effectif de {name}",
      bye: "👑 [EXEMPTÉ - TÊTE DE SÉRIE AU TOUR 2]",
      championStage: "SCÈNE DU CHAMPION",
      leftWing: "Aile gauche",
      rightWing: "Aile droite",
      emptySlotNotice: "Cette place de concurrent est vide. Aucun clan n'est encore enregistré.",
      grandFinalNotice: "La grande finale reste ouverte jusqu'à l'enregistrement des deux demi-finales.",
      rounds: {
        r128: "T1",
        r64: "1/32",
        r32: "1/16",
        r16: "1/8",
        qf: "1/4",
        sf: "1/2",
      },
    },
    profile: {
      closeBackdrop: "Fermer le profil de l'équipe",
      kicker: "Profil principal du championnat · échantillon de mise en page",
      matchesPlayed: "Matchs joués",
      winRate: "Taux de victoire combiné",
      streak: "Série de tournoi active",
      rosterHeading: "Matrice d'effectif de 5 joueurs",
      openSeat: "Place libre {seat}",
      noPlayer: "Aucun joueur enregistré",
      previous: "Clan précédent",
      count: "Clan {index} sur {total}",
      next: "Clan suivant",
      close: "Fermer le profil",
      disclosure:
        "Maquette d'essai : toutes les configurations, inventaires de joueurs et variables de base de données de ce profil sont des échantillons conceptuels de mise en page de préinscription. Aucun client anti-triche ne tourne, aucun matériel n'est enregistré, et ces chiffres ne sont pas des résultats de matchs.",
    },
    player: {
      level: "NIV. {level} · RP {rating}",
      record: "V–D {wins}–{losses}",
      kdNotStored: "K/D non enregistré",
      openProfileAria: "Ouvrir le profil de {name}",
      openProfile: "Ouvrir le profil",
      badge: "PRÊT / CONFORME ANTI-TRICHE",
      badgeNote: "Échantillon de mise en page · pas un contrôle en direct",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Souris",
        dpi: "DPI",
        keyboard: "Clavier",
        monitor: "Écran",
        headset: "Casque",
      },
    },
  },
  gearPlaceholder: {
    processor: "Emplacement · CPU non collecté",
    gpu: "Emplacement · GPU non collecté",
    mouse: "Emplacement · modèle de souris non collecté",
    dpi: "Emplacement · DPI non collecté",
    keyboard: "Emplacement · non collecté",
    monitor: "Emplacement · Hz non collecté",
    headset: "Emplacement · non collecté",
  },
  profileDisclosure:
    "A.C.E. n'enregistre pas d'inventaires matériels et n'exécute aucun client anti-triche. Les graphiques de tendance de performance et la matrice de combat exigent une session A.C.E. Plus ou Premium. Un lien de profil Steam saisi sur cette page n'est pas enregistré et n'est pas un identifiant officiel.",
  errors: {
    signInRequired: "Connexion requise.",
    nameLength: "Les noms d'équipe doivent comporter entre 2 et 32 caractères.",
    alreadyCaptain: "Ce compte est déjà capitaine d'une équipe.",
    nameTaken: "Une équipe portant ce nom existe déjà.",
    idRequired: "Un SteamID ou un ID de compte A.C.E. est requis.",
    noAccountForToken: "Aucun compte A.C.E. n'existe pour ce SteamID ou cet ID de compte.",
    clanNeedsFour: "Un clan de cinq joueurs nécessite le capitaine connecté plus quatre SteamID.",
    seatNeedsId: "Chacune des quatre places nécessite un SteamID ou un ID de compte A.C.E.",
    seatsDistinct: "Chaque place nécessite un joueur différent.",
    captainHoldsSeat: "Le capitaine occupe déjà la place 1. Utilisez quatre autres joueurs.",
    fewerThanFour: "Ces ID correspondent à moins de quatre comptes.",
    selfInvite: "Un capitaine ne peut pas inviter son propre compte.",
    captainOnly: "Seul le capitaine désigné peut envoyer des invitations.",
    rosterLimit: "Un effectif CS2 compte cinq joueurs, capitaine compris.",
    alreadyOnRoster: "Ce joueur fait déjà partie de l'effectif.",
    noAccountForId: "Aucun compte A.C.E. n'existe pour cet ID.",
    inviteNotFound: "Invitation introuvable.",
    inviteNotPending: "Cette invitation n'est plus en attente.",
    rosterFull: "L'effectif est déjà complet.",
    createFailed: "Impossible de créer l'équipe.",
    inviteFailed: "L'invitation a échoué.",
    updateInviteFailed: "Impossible de mettre à jour l'invitation.",
  },
};
