import type { TextBag } from "../types";

export const desk: TextBag["desk"] = {
  shop: {
    meta: {
      title: "Mercado A.C.E.",
      description:
        "Cartões de armas como exemplos de prémios. Não são itens da Valve, não são uma recompensa financiada, e o pagamento não cobra nenhum cartão.",
    },
    heroHonesty:
      "Os cartões de armas são exemplos de prémios. Não são itens da Valve, não estão num inventário, e o pagamento nesta página não cobra nenhum cartão.",
    prizeBanner: "🏆 EXEMPLO DE PRÉMIO DE TORNEIO — MONTRA DE RECOMPENSAS PREMIUM",
    notice:
      "Estas montras não têm valor monetário. Nenhuma skin é entregue, nenhum prémio é financiado, e o botão de inspeção não inicia uma compra.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ DROPS SECRETOS DA CLASSIFICAÇÃO",
        price: "Apenas exemplo · sem valor monetário",
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
        price: "Incluído no plano Premium ou {rp} RP",
      },
      shimmer: {
        name: "Brilho laser dourado de perfil",
        tag: "Personalização do chat",
        price: "Incluído no plano Premium ou {rp} RP",
      },
      pass: {
        name: "Passe dourado de torneio Premium",
        tag: "Token de acesso à liga",
        price: "{rp} RP / Inscrição com prioridade",
      },
    },
  },
  support: {
    meta: {
      title: "Suporte",
      description:
        "Layout do centro de ajuda A.C.E. Os balcões de Anti-Cheat, filas ranqueadas e faturação não estão ativos. Os avisos de pedido não criam casos.",
    },
  },
  contact: {
    meta: {
      title: "Contacto",
      description:
        "Terminal de contacto empresarial da A.C.E. Os envios do formulário são maquetas de teste e não enviam e-mail nem guardam telemetria.",
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
