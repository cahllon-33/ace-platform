import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — Plateforme CS2 compétitive",
    description:
      "A.C.E. est une plateforme compétitive Counter-Strike 2 prévue pour l'identité des joueurs, le calibrage, les équipes et les tournois. Ce site public est un aperçu. Le matchmaking classé, l'anti-triche, les paiements et les prix ne sont pas actifs.",
  },
  opening: {
    dialogLabel: "Ouverture d'A.C.E.",
    line: "A.C.E : Anti-Cheat autonome, calibrage compétitif, joueurs d'élite",
    enter: "Entrer sur le site",
  },
  hero: {
    logoAlt: "A.C.E. Anti-Cheat autonome, calibrage compétitif, joueurs d'élite",
    arenaAlt:
      "Plaque d'arène A.C.E. Image de scène originale, pas une illustration Valve. L'écran est intitulé télévision des matchs. La diffusion en direct est coupée.",
  },
  broadcast: {
    kicker: "SUIVI DES TOURNOIS",
    title: "Régie de diffusion",
    lede: "Le pool de cartes compétitif est posé sur cette régie : Dust II, Mirage, Inferno, Nuke, Ancient, Anubis et Train. Ce sont des plaques originales. Aucun tournoi n'est à l'antenne, et cette page ne diffuse aucun match Valve.",
    offAir: "HORS ANTENNE · {map}",
  },
  jumpNav: {
    label: "Catégories de l'accueil",
    play: "Jouer",
    prizes: "Prix",
    teams: "Équipes",
    leaderboard: "Classement",
    ranks: "Rangs",
    systems: "Systèmes",
  },
  charter: {
    kicker: "ESPACE PRINCIPAL DU LOBBY",
    title: "LOBBY DE MATCHMAKING COMPÉTITIF ET CENTRE DE RÉPARTITION A.C.E.",
    badge: "AUCUN SERVEUR EN DIRECT",
    lede: "Ce lobby n'attribue aucun serveur, ne lance aucun client anti-triche et ne verse aucun prix.",
    modules: [
      {
        kicker: "MATCH TROUVÉ · 5v5",
        copy: "Le cadre 5v5 de cette page est une file fermée. Il n'attribue aucun serveur.",
        chips: ["AUCUN SERVEUR 128-TICK", "FILE FERMÉE"],
      },
      {
        kicker: "RANGS 3D FIXES",
        copy: "Dix paliers, de Recruit jusqu'à A.C.E. Legend. Une cote enregistrée apparaît après la connexion Steam. Cette page n'applique aucun match.",
        chips: ["RÈGLE DE COTE ÉTABLIE", "PLATEAU TOURNANT SUR CETTE PAGE"],
      },
      {
        kicker: "RÉCOMPENSES DE SKINS",
        copy: "Les cartes de skins sont des exemples. Aucune arme n'est livrée et aucun prix n'est financé.",
        chips: ["AUCUN OBJET LIVRÉ", "AUCUNE VÉRIFICATION DE DROP"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Profil_Joueur]",
    notAvailable: "n.d.",
    elite: "ÉLITE",
  },
  membership: {
    compareLink: "Voir le tableau comparatif complet",
  },
  loot: {
    exampleCard: "Carte d'exemple · pas un objet Valve",
    wear: {
      factoryNew: "Neuve",
      minimalWear: "Très peu usée",
    },
  },
  lootLadder: {
    banner: "COFFRE DU SYSTÈME — DROP DE MISE EN PAGE",
    title: "ÉCHELLE DE BUTIN A.C.E.",
    itemWithWear: "{item} ({wear})",
    clockLabel: "HORLOGE DE MISE EN PAGE",
    clockFormat: "{h} h {m} min {s} s",
    note: "Cette horloge est une mise en page. Premium ne donne accès à aucune loterie de drops, et Steam ne vérifie ni ne livre aucun objet depuis cette page.",
  },
  ribbon: {
    closeOverlay: "Fermer la fenêtre",
    close: "Fermer",
    disclosure:
      "Maquette d'essai : aucun inventaire, aucune réclamation, aucun tableau de missions en direct et aucun paiement. Ces fenêtres ne sont que des échantillons de mise en page.",
    rewards: {
      kicker: "Récompenses de connexion · échantillon de mise en page",
      title: "Calendrier de présence Premium",
      day: "Jour {n}",
      featuredReward: "Récompense du jour {n} : drop de caisse à clé",
      previewSlot: "Emplacement d'aperçu",
    },
    missions: {
      kicker: "Missions tactiques quotidiennes · échantillon de mise en page",
      title: "Défis quotidiens actifs",
      names: {
        headshot: "Spécialiste du headshot",
        utilityEntry: "Entrée aux utilitaires",
        clutch: "Protocole clutch",
      },
    },
    shop: {
      kicker: "Boutique A.C.E. · maquette d'essai",
      title: "Paiement de l'inventaire d'armes",
      mockBadge: "MAQUETTE D'ESSAI",
      fullPreview: "Ouvrir l'aperçu complet du marché",
      openAria: "Ouvrir la boutique A.C.E.",
    },
  },
  serverHub: {
    badge: "AUCUN SERVEUR DE JEU EN DIRECT",
    nodes: {
      fra: "Périphérie de Francfort",
      sto: "Cœur de Stockholm",
      tlv: "Relais de Tel-Aviv",
    },
    tileAria: "{name}. Tuile de mise en page. Aucun serveur n'est connecté.",
    tileSample: "Échantillon de mise en page {sample}. Aucun serveur n'est connecté.",
    note: "Ces noms et échantillons de latence sont une mise en page. Ce site n'a aucun serveur de jeu 128-tick ni aucun nœud régional.",
  },
  telemetry: {
    badge: "PAS UN CLIENT EN DIRECT",
    lines: [
      "AC-KERNEL : NON CONNECTÉ",
      "MATRICE DE BAN MATÉRIEL : AUCUN IDENTIFIANT N'EST COLLECTÉ",
      "LIEN BOUCLIER A.C.E. : AUCUN CLIENT N'EST INSTALLÉ",
    ],
    note: "Ce site n'exécute aucun client noyau, n'analyse pas la mémoire et ne prononce aucun ban matériel.",
  },
  comingSoon: {
    badge: "NON DISPONIBLE",
    body: "Le client de bureau A.C.E. n'est pas proposé au téléchargement. La saison 1 sur ce site n'installe aucun logiciel et n'ouvre aucun enregistrement.",
  },
  operative: {
    kicker: "Vue tactique cinématique · environnement CSS original · pas une illustration Valve",
    title: "Allez plus loin dans CS2 : la plateforme compétitive ultime",
    lede: "Des matchs plus équitables, de meilleurs coéquipiers. Des rangs qui comptent, des récompenses qui comptent.",
    note: "Texte de campagne. Les files classées, les serveurs en direct et les prix ne sont pas actifs.",
    hudLeft: "CT — ZONE A",
    hudRight: "T — POUSSÉE MID",
    hudCenter: "ENVIRONNEMENT D'ESCOUADE · MISE EN PAGE",
    plannedReason: "Le jeu classé reste fermé tant qu'une vraie intégration anti-triche n'est pas mise en œuvre et vérifiée.",
  },
  howStatus: {
    label: "SOUS-SYSTÈME D'INSCRIPTION A.C.E. — MOTEUR DE CALIBRAGE PRÊT",
    note: "Widget d'état de mise en page. Les files classées, l'anti-triche et le calibrage en direct ne sont pas actifs.",
  },
  shell: {
    primaryNav: "Principale",
    mobileNav: "Mobile",
    elite: "ÉLITE",
    notificationsTitle: "Aucun flux de notifications en direct",
    notificationsAria: "Notifications. Zéro non lue.",
    connectProfileTitle: "Connecter le profil",
    openProfileAria: "Ouvrir le profil du poste de commandement",
    connectProfileAria: "Connecter le profil via Steam OpenID",
    signOutAria: "Se déconnecter d'A.C.E.",
  },
  notFound: {
    kicker: "EXCEPTION DE GRILLE",
    title: "ERREUR 404 — TÉLÉMÉTRIE RADAR PERDUE",
    body: "Les coordonnées demandées n'existent pas dans notre grille de serveurs active.",
    homeAria: "Retourner au lobby de l'accueil A.C.E.",
    cta: "RETOUR AU LOBBY",
  },
  error: {
    kicker: "Erreur",
    title: "Un problème est survenu",
    body: "Cette page publique n'a pas pu être affichée. Vous pouvez réessayer. Aucune donnée de compte n'a été demandée sur ce site d'aperçu.",
    retryAria: "Recharger cette page",
    retry: "Réessayer",
  },
};
