import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "ops": {
    "identityKicker": "CENTRAL DE IDENTIDADE",
    "signedOutTitle": "Entrar com a Steam",
    "signedOutBody": "Conecte-se com o Steam OpenID oficial para ver aqui seu avatar da Steam, seu emblema de rank e seus Rating Points. A A.C.E. nunca pede a senha da Steam.",
    "connect": "Entrar com a Steam",
    "openDeck": "Abrir o Command Deck",
    "avatarAlt": "Avatar da Steam de {name}",
    "emblemAlt": "Emblema de rank {rank}",
    "rp": "Rating Points",
    "wins": "Vitórias",
    "losses": "Derrotas",
    "winRate": "Taxa de vitórias",
    "matches": "Partidas",
    "kd": "K/D",
    "na": "n/d",
    "kdNote": "O K/D mostra n/d porque a A.C.E. ainda não registra abates e mortes.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "EM DESENVOLVIMENTO",
    "shieldTitle": "Estado de integridade",
    "shieldBody": "O A.C.E Shield está em desenvolvimento. Hoje nada é instalado, verificado ou monitorado, então nenhuma conta tem um veredito de integridade.",
    "shieldClient": "Cliente antitrapaça",
    "shieldClientValue": "Não lançado",
    "shieldServer": "Servidores de partida",
    "shieldServerValue": "Não conectados",
    "shieldHardware": "Verificação de hardware",
    "shieldHardwareValue": "Não coletado",
    "shieldLink": "Como o A.C.E Shield vai funcionar",
    "seasonKicker": "TEMPORADA 1",
    "seasonChip": "DATAS NÃO ANUNCIADAS",
    "seasonTitle": "Acompanhamento da Temporada 1",
    "seasonBody": "A Temporada 1 ainda não tem data de início nem de fim, então não há contagem regressiva. As datas serão publicadas neste site antes do início da temporada.",
    "statsKicker": "SUAS ESTATÍSTICAS",
    "statsSignedOut": "Entre com a Steam para ver suas estatísticas.",
    "statsEmpty": "Ainda não há partidas registradas. Vitórias e derrotas aparecem após sua primeira partida A.C.E. registrada.",
    "statsLive": "Vitórias e derrotas vêm da sua conta A.C.E. salva.",
    "statsLink": "Abrir estatísticas de jogador"
  },
  "meta": {
    "title": "A.C.E. — Plataforma competitiva de CS2",
    "description": "A A.C.E. é uma plataforma competitiva de Counter-Strike 2 planejada para identidade de jogadores, calibração, equipes e torneios. Este site público é uma prévia. Pareamento ranqueado, Anti-Cheat, pagamentos e prêmios não estão ativos."
  },
  "opening": {
    "dialogLabel": "Abertura da A.C.E.",
    "line": "A.C.E: Anti-Cheat autônomo, calibração competitiva, jogadores de elite",
    "enter": "Entrar no site"
  },
  "hero": {
    "logoAlt": "A.C.E. Anti-Cheat autônomo, calibração competitiva, jogadores de elite",
    "arenaAlt": "Placa da arena A.C.E. Imagem original de palco, não é arte da Valve. A tela está identificada como televisão das partidas. A transmissão ao vivo está desligada."
  },
  "broadcast": {
    "kicker": "ACOMPANHAMENTO DE TORNEIOS",
    "title": "Mesa de transmissão",
    "lede": "O pool de mapas competitivo fica nesta mesa: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis e Train. São placas originais. Nenhum torneio está no ar, e esta página não reproduz uma partida da Valve.",
    "offAir": "FORA DO AR · {map}"
  },
  "jumpNav": {
    "label": "Categorias do início",
    "play": "Jogar",
    "prizes": "Prêmios",
    "teams": "Equipes",
    "leaderboard": "Classificação",
    "ranks": "Ranks",
    "systems": "Sistemas"
  },
  "charter": {
    "kicker": "ESPAÇO PRINCIPAL DO LOBBY",
    "title": "LOBBY DE PAREAMENTO COMPETITIVO E CENTRAL DE DESPACHO A.C.E.",
    "badge": "SERVIDORES · EM BREVE",
    "lede": "Este lobby não atribui servidor, não inicia um cliente anti-cheat e não paga prêmios.",
    "modules": [
      {
        "kicker": "PARTIDA ENCONTRADA · 5v5",
        "copy": "O quadro 5v5 desta página é uma fila fechada. Ele não atribui servidor.",
        "chips": [
          "SEM SERVIDOR 128-TICK",
          "FILA FECHADA"
        ]
      },
      {
        "kicker": "RANKS 3D FIXOS",
        "copy": "Dez patentes, de Recruit até A.C.E. Legend. Um rating salvo aparece depois do login com a Steam. Esta página não aplica resultados de partidas.",
        "chips": [
          "REGRA DE RATING REGISTRADA",
          "GIRATÓRIO NESTA PÁGINA"
        ]
      },
      {
        "kicker": "RECOMPENSAS DE SKIN",
        "copy": "As recompensas do campeonato são anunciadas a cada evento.",
        "chips": [
          "NENHUM ITEM ENTREGUE",
          "SEM VERIFICAÇÃO DE DROP"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELITE"
  },
  "membership": {
    "compareLink": "Ver a tabela de comparação completa"
  },
  "loot": {
    "wear": {
      "factoryNew": "Nova de Fábrica",
      "minimalWear": "Pouco Usada"
    }
  },
  "serverHub": {
    "badge": "SERVIDORES DE JOGO · EM BREVE",
    "nodes": {
      "fra": "Borda de Frankfurt",
      "sto": "Núcleo de Estocolmo",
      "tlv": "Retransmissor de Tel Aviv"
    },
    "tileAria": "{name}. Servidor em breve.",
    "note": "Servidores regionais de 128 ticks chegam com a beta competitiva."
  },
  "telemetry": {
    "badge": "PRÉVIA · EM BREVE",
    "lines": [
      "A.C.E SHIELD: EM DESENVOLVIMENTO",
      "MATRIZ DE BANIMENTO DE HARDWARE: NENHUM IDENTIFICADOR É COLETADO",
      "LINK DO ESCUDO A.C.E.: NENHUM CLIENTE ESTÁ INSTALADO"
    ],
    "note": "Este site não executa um cliente de kernel, não varre a memória e não aplica banimento de hardware."
  },
  "comingSoon": {
    "badge": "NÃO DISPONÍVEL",
    "body": "O cliente desktop da A.C.E. não está disponível para download. A temporada 1 neste site não instala software nem abre check-in."
  },
  "operative": {
    "kicker": "Visão tática cinematográfica · ambiente original em CSS · não é arte da Valve",
    "title": "Mergulhe fundo no CS2: a plataforma competitiva definitiva",
    "lede": "Partidas mais justas, companheiros melhores. Ranks que importam, recompensas que contam.",
    "note": "Texto de campanha. Filas ranqueadas, servidores ao vivo e prêmios não estão ativos."
  },
  "howStatus": {
    "label": "SUBSISTEMA DE CADASTRO A.C.E. — MOTOR DE CALIBRAÇÃO PRONTO",
    "note": "As filas ranqueadas abrem quando o A.C.E Shield e a calibração estiverem ativos."
  },
  "shell": {
    "primaryNav": "Principal",
    "mobileNav": "Celular",
    "elite": "ELITE",
    "notificationsTitle": "Notificações · em breve",
    "notificationsAria": "Notificações. Nenhuma não lida.",
    "connectProfileTitle": "Conectar perfil",
    "openProfileAria": "Abrir o perfil no Painel de Comando",
    "connectProfileAria": "Conectar perfil pelo Steam OpenID",
    "signOutAria": "Sair da A.C.E."
  },
  "notFound": {
    "kicker": "EXCEÇÃO DA GRADE",
    "title": "ERRO 404 — TELEMETRIA DO RADAR PERDIDA",
    "body": "A coordenada solicitada não existe na nossa grade de servidores ativa.",
    "homeAria": "Voltar ao lobby da página inicial da A.C.E.",
    "cta": "VOLTAR AO LOBBY"
  },
  "error": {
    "kicker": "Erro",
    "title": "Algo deu errado",
    "body": "Esta página pública não pôde ser exibida. Você pode tentar novamente. Nenhum dado de conta foi solicitado neste site de prévia.",
    "retryAria": "Recarregar esta página",
    "retry": "Tentar novamente"
  }
};
