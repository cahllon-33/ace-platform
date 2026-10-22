import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Mercado A.C.E",
      description:
        "Cartões de recompensas do campeonato. A loja e as recompensas abrem em breve.",
    },
    heroHonesty:
      "Um primeiro olhar sobre as próximas recompensas do campeonato. A loja abre em breve; hoje nada é cobrado.",
    prizeBanner: "🏆 RECOMPENSAS DO CAMPEONATO · EM BREVE",
    notice:
      "Estas montras são pré-visualizações sem valor monetário. Nada é entregue nem cobrado, e o botão de inspecionar não inicia uma compra.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ DROPS SECRETOS DA CLASSIFICAÇÃO",
        price: "Em breve",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ NÍVEL DE MELHORIA CONFIDENCIAL",
        price: "Apenas exemplo · sem valor monetário",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ DROP ESPECIAL SECRETO",
        price: "Apenas exemplo · sem valor monetário",
      },
      crown: {
        name: "Moldura de avatar Coroa A.C.E.",
        tag: "Destaque de perfil",
        price: "Em breve",
      },
      shimmer: {
        name: "Brilho laser dourado de perfil",
        tag: "Personalização do chat",
        price: "Em breve",
      },
      pass: {
        name: "Passe dourado de torneio",
        tag: "Token de acesso à liga",
        price: "Em breve",
      },
    },
  },
  support: {
    meta: {
      title: "Suporte",
      description:
        "Centro de ajuda A.C.E. O apoio para anti-cheat, classificativas e faturação abre com a beta competitiva.",
    },
  },
  contact: {
    meta: {
      title: "Contacto",
      description:
        "Contactar a A.C.E. O formulário online abre em breve.",
    },
  },
  contactEmail: {
    label: "DEFINIR E-MAIL DE TELEMETRIA VERIFICADO",
    hintSignedIn:
      "Guarda apenas na conta com sessão iniciada. Não é enviada nenhuma mensagem de confirmação, por isso o endereço não fica verificado.",
    hintSignedOut: "Inicie sessão com a Steam para guardar um e-mail de contacto na sua conta.",
    saving: "A GUARDAR",
    save: "GUARDAR E-MAIL DE CONTACTO",
    results: {
      signInFirst: "Inicie sessão com a Steam antes de guardar um e-mail de contacto.",
      invalid: "Introduza um único endereço de e-mail ou deixe o campo vazio para o limpar.",
      failed: "Esse endereço já está guardado noutra conta, ou a base de dados não está disponível.",
      saved: "Endereço de contacto guardado nesta conta. Não foi enviada nenhuma mensagem de confirmação, por isso não está verificado.",
      cleared: "Endereço de contacto limpo.",
    },
  },
};
