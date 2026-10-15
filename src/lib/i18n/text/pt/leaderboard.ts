import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Classificação",
    description:
      "Quadro competitivo da A.C.E. As contas Steam guardadas aparecem primeiro. Os lugares vazios continuam como linhas de montra.",
  },
  hero: {
    kicker: "CLASSIFICAÇÃO",
    title: "Quadro competitivo",
    note: "Até os jogadores associarem a conta Steam e obterem uma classificação, o quadro mostra lugares de demonstração. O país e a arma em destaque são ilustrativos. As imagens das armas são arte original do estúdio A.C.E., não skins da Valve. As eliminações ainda não são registadas, por isso a arma em destaque não é uma estatística de melhor jogador.",
  },
  facts: {
    seats: "Lugares",
    storedAccounts: "Contas guardadas",
    killsStored: "Abates guardados",
    none: "Nenhum",
  },
  empty: "Nenhum lugar de montra corresponde a esse nome.",
  podiumLabel: "Os três primeiros lugares",
  boardLabel: "Quadro competitivo",
  table: {
    rank: "Rank",
    player: "Jogador",
    country: "País",
    tier: "Patente",
    leadWeapon: "Arma principal",
    rating: "Pontuação",
  },
  tags: {
    stored: "Conta guardada",
    showcase: "Montra",
  },
  weapon: {
    sampleRender: "Arma de assinatura",
    notStored: "Não guardado",
    noKillSaved: "Nenhum abate guardado",
    alt: "{name}",
  },
  countries: {
    il: "Israel",
    us: "Estados Unidos",
    de: "Alemanha",
    ua: "Ucrânia",
    se: "Suécia",
    fr: "França",
    pl: "Polónia",
    br: "Brasil",
    jp: "Japão",
    kr: "Coreia do Sul",
  },
  search: {
    openLabel: "Abrir a pesquisa de jogadores",
    srLabel: "Pesquisar na classificação",
    fieldLabel: "Pesquisar jogadores",
    placeholder: "Nome de apresentação",
  },
  seasonPreview: {
    banner: "CLASSIFICAÇÃO DA TEMPORADA 1",
    noteLive:
      "Os nomes associados à Steam são contas A.C.E. O K/D aparece quando os servidores de jogo registarem eliminações.",
    noteSample:
      "Os registos da Temporada 1 aparecem aqui à medida que forem disputados jogos classificativos.",
  },
  playerCard: {
    kicker: "Pré-visualização do cartão de jogador",
    title: "Dossiê do operador",
    badge: "Premium",
    note: "O seu cartão será preenchido com valores reais quando o matchmaking classificativo abrir.",
    currentRank: "Rank atual",
    rankValue: "A.C.E. Legend (Divisão I)",
    competitiveRating: "Pontuação competitiva",
    seasonRank: "Rank da temporada",
    seasonTop: "(Top {percent})",
  },
};
