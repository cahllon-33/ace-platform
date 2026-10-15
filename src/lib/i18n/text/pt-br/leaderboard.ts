import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  meta: {
    title: "Classificação",
    description:
      "Tabela competitiva da A.C.E. As contas Steam salvas aparecem primeiro. As vagas vazias continuam como linhas de vitrine.",
  },
  hero: {
    kicker: "CLASSIFICAÇÃO",
    title: "Tabela competitiva",
    note: "Até que os jogadores vinculem a Steam e conquistem uma classificação, o quadro mostra vagas de vitrine. O país e a arma em destaque são ilustrativos. As imagens das armas são arte original do estúdio A.C.E., não skins da Valve. As eliminações ainda não são registradas, então a arma em destaque não é uma estatística de top fragger.",
  },
  facts: {
    seats: "Vagas",
    storedAccounts: "Contas salvas",
    killsStored: "Abates salvos",
    none: "Nenhum",
  },
  empty: "Nenhuma vaga de vitrine corresponde a esse nome.",
  podiumLabel: "Três primeiras vagas",
  boardLabel: "Tabela competitiva",
  table: {
    rank: "Rank",
    player: "Jogador",
    country: "País",
    tier: "Patente",
    leadWeapon: "Arma principal",
    rating: "Rating",
  },
  tags: {
    stored: "Conta salva",
    showcase: "Vitrine",
  },
  weapon: {
    sampleRender: "Arma assinatura",
    notStored: "Não salvo",
    noKillSaved: "Nenhum abate salvo",
    alt: "{name}",
  },
  countries: {
    il: "Israel",
    us: "Estados Unidos",
    de: "Alemanha",
    ua: "Ucrânia",
    se: "Suécia",
    fr: "França",
    pl: "Polônia",
    br: "Brasil",
    jp: "Japão",
    kr: "Coreia do Sul",
  },
  search: {
    openLabel: "Abrir busca de jogadores",
    srLabel: "Buscar na classificação",
    fieldLabel: "Buscar jogadores",
    placeholder: "Nome de exibição",
  },
  seasonPreview: {
    banner: "RANKING DA TEMPORADA 1",
    noteLive:
      "Nomes vinculados à Steam são contas A.C.E. O K/D aparece quando os servidores de partida registrarem abates.",
    noteSample:
      "Os resultados da Temporada 1 aparecem aqui conforme as partidas ranqueadas forem jogadas.",
  },
  playerCard: {
    kicker: "Prévia do card de jogador",
    title: "Dossiê do operador",
    badge: "Premium",
    note: "Seu card será preenchido com números reais quando o matchmaking ranqueado abrir.",
    currentRank: "Rank atual",
    rankValue: "A.C.E. Legend (Divisão I)",
    competitiveRating: "Rating competitivo",
    seasonRank: "Posição na temporada",
    seasonTop: "(Top {percent})",
  },
};
