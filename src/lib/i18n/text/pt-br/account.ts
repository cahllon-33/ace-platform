import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  dashboard: {
    meta: {
      title: "Painel de Comando",
    },
    kicker: "Autenticado",
    title: "Painel de Comando",
    lede: "Conectado pelo Steam OpenID. A sessão fica em um cookie HttpOnly, não no localStorage. A busca ranqueada continua fechada até o Anti-Cheat ser real.",
    eliteBadge: "ELITE",
    stats: {
      accountStatus: "Status da conta",
      subscription: "Assinatura",
      rank: "Rank A.C.E.",
      ratingPoints: "Pontos de rating",
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
      title: "PERFIL DE CONFIGURAÇÕES DO PAINEL",
      billingNotLive: "Todas as contas ficam no Free até existir pagamento.",
      cancelReason: "Não existe assinatura cobrada para cancelar. O pagamento não está implementado.",
      cancelButton: "Cancelar assinatura",
    },
    rankedReason: "O pareamento ranqueado é negado até existir uma integração de Anti-Cheat verificada.",
    rankedButton: "Encontrar partida ranqueada",
    roster: {
      title: "Elenco 5v5",
      body: "Um capitão. Quatro convites. Os capitães convidam outros IDs de conta A.C.E., que só são criados depois de um login verificado na Steam.",
    },
    pendingInvites: "Convites pendentes",
  },
  forms: {
    requestFailed: "A solicitação falhou.",
    createTeam: {
      acceptRequired: "Aceite os Termos de Serviço, o EULA do Anti-Cheat e a Política de Privacidade para continuar.",
      failed: "Não foi possível criar a equipe.",
      nameLabel: "Nome da nova equipe 5v5",
      submitAria: "Fundar uma nova equipe 5v5",
      submit: "Fundar equipe",
    },
    invite: {
      failed: "O convite falhou.",
      label: "Convidar agente livre por SteamID ou ID de conta A.C.E.",
      submitAria: "Enviar convite para a equipe",
      submit: "Enviar convite",
    },
  },
  profile: {
    meta: {
      notFoundTitle: "Perfil do jogador",
      title: "{name} · perfil A.C.E.",
      description: "Dossiê de jogador A.C.E. Sessões Plus e Premium desbloqueiam gráficos de tendência de telemetria.",
    },
    kicker: "Identidade do jogador",
    bannerPlaceholder: "Banner do perfil · em breve",
    levelBadge: "NÍVEL {level}",
    premiumBadge: "PREMIUM",
    rosterLevel: "Nível no elenco {level}.",
    trend: {
      title: "Tendência de desempenho do rating competitivo",
      note: "Pontos de rating ao longo de registros consecutivos do histórico de partidas.",
    },
    combat: {
      title: "Matriz detalhada de dados de combate",
      kills: "Total de abates",
      deaths: "Total de mortes",
      kd: "K/D calculado",
      headshots: "Total de headshots",
      headshotPct: "Faixa de % de headshots",
      knifeKills: "Abates especiais com faca",
    },
    weapon: {
      title: "Especialização em arma característica",
      note: "Plataforma de arma principal calibrada",
      accuracy: "Índice de precisão",
      kills: "Total de abates com a arma",
    },
    gear: {
      title: "Especificações do computador",
      cpu: "CPU",
      gpu: "GPU",
      monitor: "Taxa de atualização do monitor (Hz)",
      mouse: "Modelo do mouse",
      dpi: "Configuração de DPI ativa",
    },
    networksTitle: "Link do perfil Steam",
    back: "Voltar ao elenco do clã",
  },
  networks: {
    note: "Um link digitado aqui fica neste navegador e não é salvo. A A.C.E. nunca pede a senha da Steam.",
    labels: {
      steam: "Perfil Steam",
    },
    open: "Abrir {label} >",
  },
  ratingTrend: {
    chartAria: "Tendência de desempenho do rating competitivo",
    pointAria: "Partida {match}: rating {rating}",
    axisLabel: "P{match}",
    idle: "Passe o mouse sobre um nó para ver um registro de rating.",
    readout: "Partida {match} · rating {rating}",
  },
  loginError: {
    meta: {
      title: "Erro de login",
    },
    title: "O login com a Steam não foi concluído",
    notConfigured: "O Steam OpenID ainda não está configurado neste servidor. A A.C.E. nunca pede a senha da Steam.",
    unavailable: "A Steam não respondeu à solicitação de verificação. Tente novamente em instantes. A A.C.E. nunca pede a senha da Steam.",
    unverified: "O retorno do OpenID não pôde ser verificado no servidor. A A.C.E. nunca pede a senha da Steam.",
    returnHome: "Voltar ao início",
  },
};
