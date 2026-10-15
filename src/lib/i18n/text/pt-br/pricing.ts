import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  meta: {
    title: "Preços",
    description:
      "Assinatura A.C.E.: Gratuito {free}, Plus {plus}/mês, Premium {premium}/mês. Preços de exibição fixados em valores inteiros.",
  },
  period: {
    monthly: "/mês",
  },
  hero: {
    badge: "Assinatura",
    title: "Níveis de acesso",
    lede: "Gratuito {free}. Plus {plus}/mês. Premium {premium}/mês. Esses valores são fixos e inteiros. Planos pagos nunca compram rating nem adversários mais fáceis.",
  },
  tiers: {
    free: {
      name: "GRATUITO",
      note: "Grafite",
      title: "Acesso aberto",
      points: [
        "Entre com o Steam OpenID. A A.C.E. nunca pede a senha da Steam.",
        "Um rating salvo começa em 1.000. Nenhum resultado de partida o alterou.",
        "Todas as páginas públicas: jogar, torneios, ranking, equipes e regras.",
      ],
    },
    plus: {
      name: "A.C.E. PLUS",
      note: "Plus",
      title: "Carta de agradecimento e suporte",
      points: [
        "Tudo do Grátis.",
        "Em breve: a carta de agradecimento (o que inclui, o que não inclui e support@ace-platform.gg) só abre quando existir pagamento. Hoje o botão está desativado.",
        "Não compra classificação nem adversários mais fáceis. Os emblemas dourados do perfil vêm dos dados de partida salvos de cada jogador. O selo de elite e os emblemas especiais aparecem só quando o nível salvo já é Premium.",
      ],
    },
    premium: {
      name: "A.C.E. PREMIUM",
      note: "Premium",
      title: "Carta de agradecimento e esquadrão de cinco jogadores",
      points: [
        "Tudo do Grátis.",
        "Em breve: a carta de agradecimento (o que inclui, o que não inclui e support@ace-platform.gg) só abre quando existir pagamento. Hoje o botão está desativado.",
        "Em breve: depois do pagamento, a carta leva ao Squads, onde um capitão logado com Steam pode salvar um clã de cinco jogadores.",
        "Sem prêmio, arma, fila ao vivo ou servidor de jogo. Um clã salvo não é uma vaga na chave de 100 equipes.",
      ],
    },
  },
  card: {
    elite: "ELITE",
    stayFree: "Continuar no Gratuito",
    freeNote: "Disponível agora",
    choose: "Escolher {plan}",
    chooseAria: "Escolher {plan} por {price} ao mês",
  },
  billing: {
    kicker: "MATRIZ DO CRONOGRAMA DE COBRANÇA",
    title: "Como a cobrança vai funcionar quando existir",
    body: "O Plus custa exatamente {plus}/mês. O Premium custa exatamente {premium}/mês.",
    display: {
      label: "01 · EXIBIÇÃO",
      body: "Gratuito {free}. Plus {plus}/mês. Premium {premium}/mês. Planos pagos nunca compram rating nem adversários mais fáceis.",
    },
    rolling: {
      label: "02 · CICLO RECORRENTE",
      body: "Quando houver cobrança, ela será renovada em um ciclo mensal recorrente. O uso parcial do mês não é reembolsável. O cancelamento interrompe o próximo ciclo e não apaga o período pré-pago atual.",
    },
    today: {
      label: "03 · HOJE",
    },
  },
  compare: {
    kicker: "O que a A.C.E. pode prometer hoje",
    title: "Comparação de planos",
    note: "Cada linha reflete o site hoje. O pagamento chega em breve, e um plano pago nunca abre uma fila nem compra vantagem.",
    caption: "Gratuito, Plus e Premium comparados pelo que o site faz hoje",
    includedToday: "Incluído hoje",
    columns: {
      free: "Gratuito",
      plus: "Plus",
      premium: "Premium",
    },
    rows: {
      publicSite: {
        feature: "Site público",
        detail: "Início, jogar, torneios, ranking, equipes, regras e termos.",
      },
      steamSignIn: {
        feature: "Login com a Steam",
        detail: "Steam OpenID oficial. A A.C.E. nunca pede a senha da Steam.",
      },
      startingRating: {
        feature: "Rating inicial",
        detail: "O número salvo em uma conta nova antes de qualquer partida registrada.",
      },
      recordedMatches: {
        feature: "Partidas registradas",
        detail: "Vitórias e derrotas gravadas a partir de uma partida A.C.E. concluída.",
      },
      rankedQueue: {
        feature: "Fila ranqueada",
        detail: "ENCONTRAR PARTIDA continua fechado até existir uma fila real.",
      },
      cs2Servers: {
        feature: "Servidores de CS2",
        detail: "Este site não envia endereço de servidor nem link de conexão.",
      },
      antiCheatClient: {
        feature: "Cliente anti-cheat",
        detail: "Nada é baixado deste site.",
      },
      charge: {
        feature: "Cobrança",
        detail: "Escolher Plus ou Premium não usa nenhum cartão.",
      },
      ratingForSale: {
        feature: "Rating à venda",
        detail: "Um rótulo pago nunca compra rating nem adversários mais fáceis.",
      },
      prizeOrWeapon: {
        feature: "Prêmio ou arma",
        detail: "Nenhuma skin, faca ou premiação é entregue.",
      },
      goldEliteSeal: {
        feature: "Selo de elite e emblemas especiais",
        detail:
          "Só Premium, lido do nível salvo no servidor. Cosmético. O pagamento não define esse nível.",
      },
    },
    cells: {
      open: "Aberto",
      yes: "Sim",
      noneYet: "Nenhuma ainda",
      closed: "Fechada",
      notConnected: "Em breve",
      notShipped: "Não lançado",
      noCharge: "Sem cobrança",
      notForSale: "Não está à venda",
      none: "Nenhum",
      no: "Não",
      storedTierOnly: "Só pelo plano salvo",
    },
  },
  receipt: {
    plus: {
      metaTitle: "Recibo do Plus",
      metaDescription:
        "A carta do A.C.E. Plus exibida neste site. O pagamento não está ativo, então nada é cobrado e nenhum e-mail é enviado.",
      planName: "A.C.E. Plus",
      nextLabel: "Continuar na A.C.E.",
      nextBody:
        "As páginas públicas continuam abertas. Esta escolha não abre uma fila e não altera o plano salvo.",
    },
    premium: {
      metaTitle: "Recibo do Premium",
      metaDescription:
        "A carta do A.C.E. Premium exibida neste site. O pagamento não está ativo, então nada é cobrado e nenhum e-mail é enviado.",
      planName: "A.C.E. Premium",
      nextLabel: "Continuar para Esquadrões",
      nextBody:
        "Continue para Esquadrões. A página vai perguntar se vocês são uma equipe de cinco. A vaga 1 é a conta Steam conectada. As vagas 2 a 5 são os outros jogadores. Salvar um clã continua sem cobrar este preço.",
    },
  },
  letter: {
    kicker: "{plan} · {price} por mês",
    title: "Obrigado pela sua escolha",
    flag: "Esta carta é exibida no site. Nenhum e-mail foi enviado. Nenhum cartão foi cobrado. O pagamento não está ativo, e o plano de assinatura salvo não foi alterado.",
    greeting: "Prezado jogador,",
    intro:
      "Obrigado por escolher o {plan}. Esta página é o recibo. Ela registra o preço exibido, o que essa escolha inclui hoje, o que não inclui e o endereço de suporte publicado neste site.",
    selected: {
      title: "O que foi escolhido",
      items: [
        "Nome do plano: {plan}.",
        "Preço exibido: {price} por mês. O valor é um rótulo, não uma cobrança.",
        "Pagamento: nenhum. Escolher este plano não usa nenhum cartão.",
        "E-mail: nenhum. A A.C.E. não envia esta carta para uma caixa de entrada.",
        "Nível salvo: sem alteração. Emblemas especiais e o selo de elite aparecem só quando a conta já tem Premium salvo.",
        "Rating: não está à venda. Uma conta nova continua começando em 1.000.",
      ],
    },
    today: {
      title: "O que você pode usar hoje",
      items: [
        "O site público: início, jogar, torneios, ranking, equipes, regras e termos.",
        "Login com a Steam pelo Steam OpenID oficial. A A.C.E. nunca pede a senha da Steam.",
        "As mesmas páginas públicas do Gratuito. Este preço não abre uma fila separada.",
      ],
    },
    excluded: {
      title: "O que esta escolha não inclui",
      items: [
        "Uma fila ranqueada ao vivo. ENCONTRAR PARTIDA continua fechado.",
        "Um servidor de Counter-Strike 2, um endereço de servidor ou um link de conexão.",
        "Um download de anti-cheat. O A.C.E Shield está em desenvolvimento.",
        "Um prêmio, uma skin, uma faca ou uma premiação.",
        "Uma vaga na chave de 100 equipes. Essa chave continua mostrando 0 inscritas até uma temporada abrir.",
        "Adversários mais fáceis, rating comprado ou um site público diferente do Gratuito.",
      ],
    },
    trouble: {
      title: "Se algo não funcionar",
      items: [
        "Você esperava uma cobrança ou um plano pago. Nada foi aplicado. A conta continua como estava.",
        "Você esperava esta carta em uma caixa de entrada. Ela só existe nesta página.",
        "A Steam não conectou. Use Conectar perfil e marque primeiro a caixa de aceite dos termos. Nunca digite a senha da Steam na A.C.E.",
        "Você precisa de ajuda. Use o endereço de suporte abaixo ou abra as páginas de ajuda deste site.",
      ],
    },
    support: {
      title: "Suporte",
      addressBefore: "O endereço de suporte publicado neste site é ",
      addressAfter: ".",
      helpBefore: "Ajuda no site: ",
      supportLink: "Suporte",
      helpAnd: " e ",
      contactLink: "Contato",
      rulesBefore: ". As regras estão em ",
      rulesLink: "Regras",
      rulesAnd: " e ",
      termsLink: "Termos",
      helpAfter:
        ". Uma solicitação em Suporte não abre um chamado, e o texto digitado em Contato não é entregue.",
    },
    next: {
      title: "Próximo passo",
    },
  },
  telemetry: {
    kicker: "TELEMETRIA PLUS / PREMIUM",
    copy: "TELEMETRIA DO PAINEL BLOQUEADA — Mude sua assinatura para A.C.E. Plus ou Premium para desbloquear curvas de estatísticas dinâmicas em tempo real e índices de especialidade por arma.",
    cta: "Abrir tabelas de preços",
  },
};
