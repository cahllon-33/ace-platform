import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  translationNotice:
    "Esta página é uma tradução disponibilizada por conveniência. Se a tradução e o texto em inglês divergirem, prevalece o texto em inglês.",
  terms: {
    meta: {
      title: "Termos de Serviço",
      description:
        "Termos de Serviço do site A.C.E., um site de competições de Counter-Strike 2. O modo classificativo, os pagamentos e o Anti-Cheat não estão ativos.",
    },
    kicker: "ACE-LEGAL / TERMOS DE SERVIÇO",
    title: "Termos de Serviço",
    lede: "Estes Termos regem a utilização do site público da A.C.E. e das APIs de conta associadas. A duração das partidas, o conjunto de mapas, o bloqueio do plantel e os protestos estão detalhados no Regulamento Competitivo em /rules, que faz parte integrante destes Termos.",
    sections: {
      operator: {
        title: "1. Operador e independência",
        paragraphs: [
          "O serviço é operado pela A.C.E. Competitions Ltd. (ID provisório de registo comercial: Pendente). Ao utilizar o site, aceita estes Termos, a Política de Privacidade, a Política de Cookies e o Regulamento Competitivo.",
        ],
      },
      eligibility: {
        title: "2. Elegibilidade e contas",
        paragraphs: [
          "Tem de ter idade suficiente para utilizar a Steam no seu país. As contas são criadas exclusivamente através do Steam OpenID oficial. Não pode partilhar uma conta para contornar uma restrição. A A.C.E. nunca pede a palavra-passe da Steam.",
        ],
      },
      notActive: {
        title: "3. O que este site não é",
        paragraphs: [
          "O matchmaking classificativo, os servidores de jogo de CS2 ao vivo, um Anti-Cheat com IA funcional, a faturação e os prémios não estão ativos. Os relógios do lobby, as escadas de recompensas e os painéis de integridade são pré-visualizações de layout, salvo indicação em contrário na própria página.",
        ],
      },
      subscriptions: {
        title: "4. Subscrições propostas",
        paragraphs: [
          "Plus ($4.00/mês) e Premium ($7.00/mês) são preços apenas apresentados. Não existe checkout neste site. Os botões dos planos abrem um recibo neste site, não uma cobrança, e não enviam e-mail. Quando existir faturação, aplica-se a regra de cancelamento de /pricing: subscrição mensal renovável, cancelamento nas definições do painel, meses parciais não reembolsáveis.",
        ],
      },
      antiCheat: {
        title: "5. Cliente anti-cheat (não disponibilizado)",
        paragraphs: [
          "Não existe nenhum cliente anti-cheat para transferir neste site. O código de competição em /rules não recolhe um identificador de hardware e não bane nenhum dispositivo. É proibido partilhar a conta para contornar uma restrição.",
        ],
      },
      liability: {
        title: "6. Limitação de responsabilidade",
        paragraphs: [
          "Na medida permitida por lei, a A.C.E. não é responsável por rank perdido, por cosméticos perdidos que nunca foram itens reais, nem por interrupções de serviços de terceiros como a Steam / CS2. Os direitos obrigatórios do consumidor no seu país não são excluídos quando não possam ser renunciados.",
        ],
      },
      copyright: {
        title: "7. Direitos de autor sobre o material original do site",
        paragraphs: [
          "O texto original, o layout das páginas, os emblemas e os gráficos criados para este site pertencem à A.C.E. Competitions Ltd. Não pode copiar, republicar nem extrair automaticamente esse material original para outro produto sem autorização escrita. Quando a lei o permita, a A.C.E. pode fazer valer esse direito, incluindo através de uma ação judicial. Este aviso não instaura nenhum processo, não fixa indemnizações e não garante nenhum resultado em tribunal.",
          "Counter-Strike 2, Steam e os nomes dos mapas Dust II, Mirage, Inferno, Nuke, Ancient, Anubis e Train pertencem à Valve. A A.C.E. não os reivindica. Abrir este site não anula nenhum direito legal e não constitui a assinatura de um contrato.",
        ],
      },
      contact: {
        title: "8. Contacto",
        paragraphs: [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — ID provisório de registo comercial: Pendente.",
        ],
      },
    },
  },
  privacy: {
    meta: {
      title: "Política de Privacidade",
      description:
        "Política de Privacidade da A.C.E.: apenas dados estritamente necessários, apenas Steam OpenID, nenhuma palavra-passe da Steam, nenhuma venda de dados comportamentais.",
    },
    kicker: "ACE-PRIVACIDADE / RGPD / ESTRITA NECESSIDADE",
    title: "Política de Privacidade",
    lede: "Esta Política de Privacidade explica o que a A.C.E. Competitions Ltd. armazena quando utiliza este site. As traduções são disponibilizadas por conveniência; a versão em inglês é o texto de referência. Isto não significa que todas as futuras áreas do produto já existam.",
    strictNecessity: {
      title: "Filosofia de estrita necessidade",
      intro:
        "Recolhemos o mínimo de dados de conta necessários para identificar um jogador competitivo e travar fraudes evidentes no nosso próprio serviço. Não acumulamos registos desnecessários, não extraímos o inventário privado da Steam e não vendemos dados comportamentais a terceiros.",
      storedIntro: "Atualmente armazenado após um início de sessão bem-sucedido com Steam OpenID:",
      stored: [
        {
          label: "SteamID de 64 bits verificado",
          body: "devolvido pela asserção OpenID oficial da Steam e verificado no servidor antes de uma conta A.C.E. ser criada ou atualizada.",
        },
        {
          label: "Nome de apresentação público da Steam",
          body: "quando está configurada uma chave da Steam Web API. Trata-se de um nome de perfil, não de uma caixa de correio eletrónico.",
        },
        {
          label: "Registos da conta A.C.E.",
          body: "como o nível de rank, os pontos de rating, as vitórias/derrotas, a pertença a uma equipa e os hashes dos tokens de sessão.",
        },
      ],
      notCollected: {
        before: "Os endereços de e-mail e os perfis de hardware encriptados",
        strong: "não são recolhidos neste site atualmente",
        after:
          ". Os cartões de leitura facial e de HWID no lobby são apenas layout. Se um futuro cliente Anti-Cheat ou canal de suporte exigir um e-mail ou uma impressão digital de hardware, a recolha ficará limitada à prevenção de fraude, será divulgada primeiro aqui e não será vendida como dados publicitários.",
      },
    },
    neverCollect: {
      title: "O que nunca recolhemos",
      items: [
        "Palavras-passe da Steam. O início de sessão é feito apenas com Steam OpenID / o fluxo oficial da Steam.",
        "Números de cartões de pagamento. O checkout não está implementado.",
        "Telemetria de kernel. Nenhum cliente Anti-Cheat é disponibilizado com este site.",
      ],
    },
    steamBoundary: {
      title: "Conteúdos de terceiros e limites do Steam OpenID",
      callback: {
        before: "O início de sessão com a Steam sai da A.C.E., autentica-se na Steam e regressa a",
        after:
          ". O servidor verifica a asserção OpenID (incluindo a identidade reivindicada e os parâmetros assinados pela Steam) antes de criar uma sessão. A política de privacidade da Steam rege os dados que a Steam detém. A A.C.E. guarda apenas o SteamID verificado e os campos públicos de perfil necessários para operar a conta.",
      },
      footerLinks:
        "Os ícones de redes externas no rodapé são ligações de diretório para sites públicos. Não são contas oficiais da A.C.E. e não incorporam widgets de rastreamento.",
    },
    rights: {
      title: "Direitos ao estilo do RGPD",
      before:
        "Se estiver numa região com direitos sobre dados pessoais, pode pedir o acesso, a retificação ou a eliminação dos dados da sua conta A.C.E. enviando um e-mail para",
      after:
        ". As retenções de hardware do Anti-Cheat classificativo não estão ativas; a eliminação de uma conta do site não é um recurso de VAC do CS2.",
    },
    cookies: {
      title: "Cookies",
      before: "Consulte a",
      link: "Política de Cookies",
      after:
        "e o painel de consentimento. Os cookies de sessão essenciais são obrigatórios após o início de sessão. As categorias opcionais não são utilizadas até que seja efetivamente adicionado um rastreador.",
    },
    controller: {
      title: "Responsável pelo tratamento",
      body: "A.C.E. Competitions Ltd. ID provisório de registo comercial: Pendente. Contacto: support@ace-platform.gg.",
    },
  },
  cookiePolicy: {
    meta: {
      title: "Política de Cookies",
      description:
        "Auditoria de privacidade de cookies e telemetria da A.C.E. Apenas cookies de sessão essenciais, salvo se optar pelas categorias opcionais reservadas.",
    },
    kicker: "ACE-PRIVACIDADE / COOKIES / AUDITORIA DE TELEMETRIA",
    title: "Política de Cookies",
    lede: "Esta página é a auditoria de privacidade da telemetria de ace-platform.gg. Descreve os cookies que este site utiliza realmente, as categorias reservadas para mais tarde e o que não é recolhido.",
    audit: {
      title: "Auditoria de telemetria a 100% (versão atual)",
      body: "A A.C.E. não utiliza píxeis publicitários, Google Analytics, Meta Pixel, SDKs de fingerprinting nem outros rastreadores comportamentais de terceiros neste site público. Os «Rastreadores de análise» e os «Rastreadores de marketing» opcionais no painel de consentimento são apenas categorias. Ativá-los não carrega nenhum script atualmente. Se um rastreador for adicionado mais tarde, lerá primeiro a preferência guardada e permanecerá desativado, a menos que tenha dado o seu consentimento.",
    },
    essential: {
      title: "Cookies essenciais [Obrigatórios / Bloqueados]",
      session: {
        label: "Cookie de sessão",
        body: "— definido apenas após um retorno verificado do Steam OpenID. HttpOnly, não legível pelo JavaScript da página, utilizado para manter a sua sessão iniciada na A.C.E.",
      },
      necessity:
        "Estes cookies são estritamente necessários para operar uma conta autenticada. Não são identificadores publicitários.",
    },
    analytics: {
      title: "Rastreadores de análise [Opcional]",
      before: "Reservado. Não está configurado nenhum fornecedor de análise de produto. A sua escolha é guardada localmente em",
      after: "para que uma futura métrica de utilização própria a possa respeitar.",
    },
    marketing: {
      title: "Rastreadores de marketing [Opcional]",
      body: "Reservado. A A.C.E. não vende, não aluga nem intermedeia perfis comportamentais. Não existe nenhum gestor de etiquetas de marketing neste site.",
    },
    change: {
      title: "Como alterar a sua escolha",
      body: "Utilize as Definições de cookies no rodapé ou limpe os dados do site no seu navegador. Recusar as categorias opcionais nunca impede o início de sessão com a Steam.",
    },
  },
};
