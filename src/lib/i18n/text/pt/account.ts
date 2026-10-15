import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  dashboard: {
    meta: {
      title: "Convés de Comando",
    },
    kicker: "Autenticado",
    title: "Convés de Comando",
    lede: "Sessão iniciada através do Steam OpenID. A sessão fica num cookie HttpOnly, não no localStorage. A procura ranqueada continua fechada até o Anti-Cheat ser real.",
    eliteBadge: "ELITE",
    stats: {
      accountStatus: "Estado da conta",
      subscription: "Subscrição",
      rank: "Rank A.C.E.",
      ratingPoints: "Pontos de pontuação",
      wins: "Vitórias",
      losses: "Derrotas",
      accountId: "ID interno da conta",
    },
    accountStatuses: {
      ACTIVE: "Ativa",
      SUSPENDED: "Suspensa",
      BANNED: "Banida",
      TEMP_BANNED: "Banida temporariamente",
      PERM_BANNED: "Banida permanentemente",
      UNDER_REVIEW: "Em análise",
    },
    tiers: {
      FREE: "Gratuito",
      PLUS: "Plus",
      PREMIUM: "Premium",
    },
    roles: {
      CAPTAIN: "Capitão",
      PLAYER: "Jogador",
    },
    settings: {
      title: "PERFIL DE DEFINIÇÕES DO PAINEL",
      billingNotLive: "A faturação abre em breve. Até lá, todas as contas mantêm-se no Grátis.",
      cancelReason: "Não existe nenhuma subscrição faturada para cancelar. O pagamento não está implementado.",
      cancelButton: "Cancelar subscrição",
    },
    rankedReason: "O matchmaking ranqueado é recusado até existir uma integração Anti-Cheat verificada.",
    rankedButton: "Encontrar partida ranqueada",
    roster: {
      title: "Plantel 5v5",
      body: "Um capitão. Quatro convites. Os capitães convidam outros IDs de conta A.C.E., que só são criados após um início de sessão Steam verificado.",
    },
    pendingInvites: "Convites pendentes",
  },
  forms: {
    requestFailed: "O pedido falhou.",
    createTeam: {
      acceptRequired: "Aceite os Termos de Serviço, o EULA do Anti-Cheat e a Política de Privacidade para continuar.",
      failed: "Não foi possível criar a equipa.",
      nameLabel: "Nome da nova equipa 5v5",
      submitAria: "Fundar uma nova equipa 5v5",
      submit: "Fundar equipa",
    },
    invite: {
      failed: "O convite falhou.",
      label: "Convidar jogador livre por SteamID ou ID de conta A.C.E.",
      submitAria: "Enviar convite para a equipa",
      submit: "Enviar convite",
    },
  },
  profile: {
    meta: {
      notFoundTitle: "Perfil do jogador",
      title: "{name} · perfil A.C.E.",
      description: "Dossiê de jogador A.C.E. As sessões Plus e Premium desbloqueiam gráficos de tendência de telemetria.",
    },
    kicker: "Identidade do jogador",
    bannerPlaceholder: "Faixa do perfil · em breve",
    levelBadge: "NÍVEL {level}",
    premiumBadge: "PREMIUM",
    rosterLevel: "Nível no plantel {level}.",
    trend: {
      title: "Tendência de desempenho da pontuação competitiva",
      note: "Pontos de pontuação ao longo de registos consecutivos do histórico de partidas.",
    },
    combat: {
      title: "Matriz detalhada de dados de combate",
      kills: "Total de abates",
      deaths: "Total de mortes",
      kd: "K/D calculado",
      headshots: "Total de headshots",
      headshotPct: "Intervalo de % de headshots",
      knifeKills: "Abates especiais com faca",
    },
    weapon: {
      title: "Especialização em arma de assinatura",
      note: "Plataforma de arma principal calibrada",
      accuracy: "Classificação de precisão",
      kills: "Total de abates com a arma",
    },
    gear: {
      title: "Especificações do computador",
      cpu: "CPU",
      gpu: "GPU",
      monitor: "Taxa de atualização do monitor (Hz)",
      mouse: "Modelo do rato",
      dpi: "Configuração de DPI ativa",
    },
    networksTitle: "Ligação do perfil Steam",
    back: "Voltar ao plantel do clã",
  },
  networks: {
    note: "Uma ligação escrita aqui fica neste navegador e não é guardada. A A.C.E. nunca pede a palavra-passe da Steam.",
    labels: {
      steam: "Perfil Steam",
    },
    open: "Abrir {label} >",
  },
  ratingTrend: {
    chartAria: "Tendência de desempenho da pontuação competitiva",
    pointAria: "Partida {match}: pontuação {rating}",
    axisLabel: "P{match}",
    idle: "Passe o cursor sobre um nó para ver um registo de pontuação.",
    readout: "Partida {match} · pontuação {rating}",
  },
  loginError: {
    meta: {
      title: "Erro de início de sessão",
    },
    title: "O início de sessão na Steam não foi concluído",
    notConfigured: "O Steam OpenID ainda não está configurado neste servidor. A A.C.E. nunca pede a palavra-passe da Steam.",
    unavailable: "A Steam não respondeu ao pedido de verificação. Tente novamente daqui a pouco. A A.C.E. nunca pede a palavra-passe da Steam.",
    unverified: "Não foi possível verificar no servidor a resposta do OpenID. A A.C.E. nunca pede a palavra-passe da Steam.",
    returnHome: "Voltar ao início",
  },
};
