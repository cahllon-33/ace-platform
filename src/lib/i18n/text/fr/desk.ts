import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Marché A.C.E.",
      description:
        "Cartes d'armes données à titre d'exemple de prix. Ce ne sont pas des objets Valve, ni une récompense financée, et le paiement ne débite aucune carte.",
    },
    heroHonesty:
      "Les cartes d'armes sont des exemples de prix. Ce ne sont pas des objets Valve, elles ne sont dans aucun inventaire, et le paiement sur cette page ne débite aucune carte.",
    prizeBanner: "🏆 EXEMPLE DE PRIX DE TOURNOI — VITRINE DE RÉCOMPENSES PREMIUM",
    notice:
      "Ces vitrines n'ont aucune valeur monétaire. Aucun skin n'est livré, aucun prix n'est financé, et le bouton d'inspection ne lance aucun achat.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ DROPS SECRETS DU CLASSEMENT",
        price: "Exemple uniquement · aucune valeur monétaire",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ PALIER D'AMÉLIORATION CLASSIFIÉ",
        price: "Exemple uniquement · aucune valeur monétaire",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ DROP SPÉCIAL SECRET",
        price: "Exemple uniquement · aucune valeur monétaire",
      },
      crown: {
        name: "Cadre d'avatar Couronne A.C.E.",
        tag: "Ornement de profil",
        price: "Inclus dans l'offre Premium ou {rp} RP",
      },
      shimmer: {
        name: "Scintillement laser doré du profil",
        tag: "Personnalisation du chat",
        price: "Inclus dans l'offre Premium ou {rp} RP",
      },
      pass: {
        name: "Pass doré de tournoi Premium",
        tag: "Jeton d'accès à la ligue",
        price: "{rp} RP / inscription prioritaire",
      },
    },
  },
  support: {
    meta: {
      title: "Assistance",
      description:
        "Maquette du centre d'aide A.C.E. Les guichets anti-triche, files classées et facturation ne sont pas en ligne. Les invites de ticket ne créent aucun dossier.",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Terminal de contact d'entreprise A.C.E. Les envois du formulaire sont des maquettes d'essai : ils n'envoient pas d'e-mail et n'enregistrent aucune télémétrie.",
    },
  },
  contactEmail: {
    label: "DÉFINIR L'E-MAIL DE TÉLÉMÉTRIE VÉRIFIÉ",
    hintSignedIn:
      "Enregistre uniquement sur le compte connecté. Aucun message de confirmation n'est envoyé, donc l'adresse n'est pas vérifiée.",
    hintSignedOut: "Connectez-vous avec Steam pour enregistrer un e-mail de contact sur votre compte.",
    saving: "ENREGISTREMENT",
    save: "ENREGISTRER L'E-MAIL DE CONTACT",
    results: {
      signInFirst: "Connectez-vous avec Steam avant d'enregistrer un e-mail de contact.",
      invalid: "Saisissez une seule adresse e-mail, ou laissez le champ vide pour l'effacer.",
      failed: "Cette adresse est déjà enregistrée sur un autre compte, ou la base de données est indisponible.",
      saved: "Adresse de contact enregistrée sur ce compte. Aucun message de confirmation n'a été envoyé, elle n'est donc pas vérifiée.",
      cleared: "Adresse de contact effacée.",
    },
  },
};
