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
    note: "Lugares de montra preenchem este quadro até ser guardada uma conta Steam. Uma pontuação guardada substitui-os. O país e a arma principal são amostras. As imagens das armas são renderizações originais do estúdio A.C.E., não skins da Valve. Este sítio não guarda abates, por isso a arma não é uma arma de top-frag registada.",
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
    sampleRender: "Renderização de amostra",
    notStored: "Não guardado",
    noKillSaved: "Nenhum abate guardado",
    alt: "Renderização de amostra de {name}",
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
    banner: "ESCADA DA TEMPORADA 1 — LAYOUT",
    noteLive:
      "Os nomes ligados à Steam são contas guardadas. Os lugares vazios continuam marcados como montra. O K/D não é guardado, por isso esse indicador é apenas layout.",
    noteSample:
      "Amostra de layout. 0 registos ranqueados ao vivo. Estes valores não são um resultado de temporada, e o K/D não é guardado.",
  },
  playerCard: {
    kicker: "Pré-visualização de cartão autenticado · valores fictícios",
    title: "Dossiê do operador",
    badge: "Premium",
    note: "Apenas layout. Estes números não são uma temporada ao vivo, nem Elo ao vivo, nem uma conta com sessão iniciada. O matchmaking ranqueado não está ativo.",
    currentRank: "Rank atual",
    rankValue: "A.C.E. Legend (Divisão I)",
    competitiveRating: "Pontuação competitiva",
    seasonRank: "Rank da temporada",
    seasonTop: "(Top {percent})",
  },
};
