import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Esta página é uma tradução fornecida por conveniência. Se a tradução e o texto em inglês divergirem, prevalece o texto em inglês.",
  terms: {
    meta: {
      title: "Termos de Serviço",
      description:
        "Termos de Serviço do site da A.C.E. para este site de competição de Counter-Strike 2. Ranqueadas, pagamentos e Anti-Cheat não estão em funcionamento.",
    },
    kicker: "ACE-LEGAL / TERMOS DE SERVIÇO",
    title: "Termos de Serviço",
    lede: "Estes Termos regem o uso do site público da A.C.E. e das APIs de conta conectadas. A duração das partidas, o pool de mapas, o travamento de elenco e os protestos estão detalhados no Regulamento competitivo em /rules, que é incorporado a estes Termos.",
    sections: {
      operator: {
        title: "1. Operador e independência",
        paragraphs: [
          "O serviço é operado pela A.C.E. Competitions Ltd. (ID de registro corporativo provisório: pendente). Usar o site significa que você aceita estes Termos, a Política de Privacidade, a Política de cookies e o Regulamento competitivo.",
        ],
      },
      eligibility: {
        title: "2. Elegibilidade e contas",
        paragraphs: [
          "Você precisa ter idade suficiente para usar a Steam no seu país. As contas são criadas somente pelo Steam OpenID oficial. Você não pode compartilhar uma conta para fugir de uma restrição. A A.C.E. nunca pede a senha da Steam.",
        ],
      },
      notActive: {
        title: "3. O que este site não é",
        paragraphs: [
          "Matchmaking ranqueado, servidores de jogo de CS2 ao vivo, Anti-Cheat de IA funcional, cobrança e prêmios não estão ativos. Relógios de lobby, escadas de recompensa e painéis de integridade são pré-visualizações de layout, salvo indicação em contrário na página.",
        ],
      },
      subscriptions: {
        title: "4. Assinaturas propostas",
        paragraphs: [
          "Plus ($4.00/mês) e Premium ($7.00/mês) são preços de exibição. Não há pagamento neste site. Os botões dos planos abrem um recibo neste site, não uma cobrança, e não enviam e-mail. Quando a cobrança existir, vale a regra de cancelamento em /pricing: assinatura mensal recorrente, cancelamento nas configurações do painel, meses parciais não reembolsáveis.",
        ],
      },
      antiCheat: {
        title: "5. Cliente de anti-cheat (não lançado)",
        paragraphs: [
          "Não há cliente de anti-cheat para download neste site. O código de competição em /rules não coleta identificador de hardware e não bane dispositivos. O compartilhamento de conta usado para fugir de uma restrição é proibido.",
        ],
      },
      liability: {
        title: "6. Limitação de responsabilidade",
        paragraphs: [
          "Na medida permitida por lei, a A.C.E. não responde por rank perdido, por cosméticos perdidos que nunca foram itens reais, nem por indisponibilidade de Steam / CS2 de terceiros. Direitos obrigatórios do consumidor no seu país não são excluídos quando não puderem ser renunciados.",
        ],
      },
      copyright: {
        title: "7. Direitos autorais sobre o material original do site",
        paragraphs: [
          "Textos, layout de página, emblemas e gráficos originais criados para este site pertencem à A.C.E. Competitions Ltd. Você não pode copiar, republicar ou extrair esse material original para outro produto sem permissão por escrito. Onde a lei permitir, a A.C.E. pode fazer valer esse direito, inclusive por meio de uma ação. Este aviso não abre um processo, não fixa indenização e não garante um resultado judicial.",
          "Counter-Strike 2, Steam e os nomes de mapas Dust II, Mirage, Inferno, Nuke, Ancient, Anubis e Train pertencem à Valve. A A.C.E. não os reivindica. Abrir este site não cancela um direito legal e não assina um contrato.",
        ],
      },
      contact: {
        title: "8. Contato",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — ID de registro corporativo provisório: pendente.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Política de Privacidade",
      description:
        "Política de Privacidade da A.C.E.: dados estritamente necessários, somente Steam OpenID, nenhuma senha da Steam, nenhuma venda de dados comportamentais.",
    },
    kicker: "ACE-PRIVACIDADE / GDPR / ESTRITA NECESSIDADE",
    title: "Política de Privacidade",
    lede: "Esta Política de Privacidade explica o que a A.C.E. Competitions Ltd. armazena quando você usa este site. As traduções são fornecidas por conveniência; a versão em inglês é o texto de referência. Isto não afirma que todas as futuras áreas do produto já existem.",
    strictNecessity: {
      title: "Filosofia de estrita necessidade",
      intro:
        "Coletamos o mínimo de dados de conta necessário para identificar um jogador competitivo e impedir fraudes óbvias no nosso próprio serviço. Não acumulamos registros desnecessários, não extraímos inventários privados da Steam e não vendemos dados comportamentais de terceiros.",
      storedIntro: "Armazenado atualmente após um login bem-sucedido pelo Steam OpenID:",
      stored: [
        {
          label: "SteamID de 64 bits verificado",
          body: "retornado pela asserção OpenID oficial da Steam e verificado no servidor antes de uma conta A.C.E. ser criada ou atualizada.",
        },
        {
          label: "Nome de exibição público da Steam",
          body: "quando uma chave da Steam Web API está configurada. É um nome de perfil, não uma caixa de e-mail.",
        },
        {
          label: "Registros da conta A.C.E.",
          body: "como nível de rank, pontos de rating, vitórias/derrotas, participação em equipe e hashes de tokens de sessão.",
        },
      ],
      notCollected: {
        before: "Endereços de e-mail e perfis de hardware criptografados",
        strong: "não são coletados neste site hoje",
        after:
          ". Os cartões de reconhecimento facial e de HWID no lobby são apenas layout. Se um futuro cliente de Anti-Cheat ou canal de suporte exigir um e-mail ou uma impressão digital de hardware, a coleta ficará limitada à prevenção de fraudes, será informada aqui primeiro e não será vendida como dado de publicidade.",
      },
    },
    neverCollect: {
      title: "O que nunca coletamos",
      items: [
        "Senhas da Steam. O login é feito somente pelo Steam OpenID / fluxo oficial da Steam.",
        "Números de cartão de pagamento. O pagamento não está implementado.",
        "Telemetria de kernel. Nenhum cliente de Anti-Cheat acompanha este site.",
      ],
    },
    steamBoundary: {
      title: "Limites de conteúdo incorporado de terceiros e do Steam OpenID",
      callback: {
        before: "O login pela Steam sai da A.C.E., autentica na Steam e retorna para",
        after:
          ". O servidor verifica a asserção OpenID (incluindo a identidade declarada e os parâmetros assinados pela Steam) antes de gravar uma sessão. A política de privacidade da Steam rege os dados que a Steam mantém. A A.C.E. só guarda o SteamID verificado e os campos públicos de perfil necessários para operar a conta.",
      },
      footerLinks:
        "Os ícones de redes externas no rodapé são links de diretório para sites públicos. Não são contas oficiais da A.C.E. e não incorporam widgets de rastreamento.",
    },
    rights: {
      title: "Direitos no estilo GDPR",
      before:
        "Se você estiver em uma região com direitos sobre dados pessoais, pode solicitar acesso, correção ou exclusão dos dados da sua conta A.C.E. enviando um e-mail para",
      after:
        ". Bloqueios de hardware do Anti-Cheat ranqueado não estão em funcionamento; excluir uma conta do site não é um recurso contra VAC no CS2.",
    },
    cookies: {
      title: "Cookies",
      before: "Consulte a",
      link: "Política de cookies",
      after:
        "e a bandeja de consentimento. Cookies de sessão essenciais são obrigatórios após o login. As categorias opcionais ficam sem uso até que um rastreador seja de fato adicionado.",
    },
    controller: {
      title: "Controlador",
      body: "A.C.E. Competitions Ltd. ID de registro corporativo provisório: pendente. Contato: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Política de cookies",
      description:
        "Auditoria de privacidade de cookies e telemetria da A.C.E. Somente cookies de sessão essenciais, a menos que você aceite as categorias opcionais reservadas.",
    },
    kicker: "ACE-PRIVACIDADE / COOKIES / AUDITORIA DE TELEMETRIA",
    title: "Política de cookies",
    lede: "Esta página é a auditoria de privacidade de telemetria de ace-platform.gg. Ela descreve os cookies que este site realmente usa, as categorias reservadas para depois e o que não é coletado.",
    audit: {
      title: "Auditoria de telemetria 100% (versão atual)",
      body: "A A.C.E. não executa pixels de publicidade, Google Analytics, Meta Pixel, SDKs de fingerprinting nem outros rastreadores comportamentais de terceiros neste site público. Os “Rastreadores de análise” e “Rastreadores de marketing” opcionais na bandeja de consentimento são apenas categorias. Marcá-los não carrega nenhum script hoje. Se um rastreador for adicionado depois, ele lerá primeiro a preferência armazenada e ficará desligado, a menos que você tenha aceitado.",
    },
    essential: {
      title: "Cookies essenciais [Obrigatórios / Bloqueados]",
      session: {
        label: "Cookie de sessão",
        body: "— definido somente após um callback verificado do Steam OpenID. HttpOnly, não pode ser lido pelo JavaScript da página, usado para manter você conectado na A.C.E.",
      },
      necessity:
        "Estes cookies são estritamente necessários para operar uma conta autenticada. Não são IDs de publicidade.",
    },
    analytics: {
      title: "Rastreadores de análise [Opcionais]",
      before: "Reservado. Nenhum fornecedor de análise de produto está configurado. Sua escolha é armazenada localmente em",
      after: "para que uma futura métrica de uso própria possa respeitá-la.",
    },
    marketing: {
      title: "Rastreadores de marketing [Opcionais]",
      body: "Reservado. A A.C.E. não vende, aluga nem intermedeia perfis comportamentais. Não há gerenciador de tags de marketing neste site.",
    },
    change: {
      title: "Como alterar sua escolha",
      body: "Use Configurações de cookies no rodapé ou limpe os dados do site no seu navegador. Recusar as categorias opcionais nunca bloqueia o login pela Steam.",
    },
  },
};
