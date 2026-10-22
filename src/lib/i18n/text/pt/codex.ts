import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Códice de Calibração",
    description:
      "Os ranks da A.C.E explicados. Cada pergunta abre uma resposta completa sobre os Pontos de Rating e o código desse rank. O códice não aplica nenhuma partida.",
    articleTitle: "{title} — Códice de Calibração",
  },
  groups: {
    ladder: {
      title: "A escada",
      kicker: "Como se lê um rank",
    },
    points: {
      title: "Pontos de Rating",
      kicker: "O único número guardado",
    },
    ranks: {
      title: "Cada rank",
      kicker: "O código dessa marca",
    },
    desk: {
      title: "O balcão de partidas",
      kicker: "O que o balcão pode e não pode fazer",
    },
  },
  index: {
    title: "Códice de Calibração",
    lede: "Dez ranks. Um número guardado. Abra qualquer pergunta para ver a resposta completa. O balcão de partidas continua nas páginas seguintes.",
    status:
      "Este códice explica a escada escrita. Não aplica nenhuma partida e não altera nenhum rating guardado.",
    searchLabel: "Pesquisar no códice",
    searchPlaceholder: "Experimente 1950, Recruit ou empate",
    empty: "Nenhuma entrada corresponde a essa pesquisa.",
    columnLabel: "Coluna A.C.E {n}",
    pagerLabel: "Páginas do códice",
    first: "Primeira",
    previous: "Anterior",
    next: "Seguinte",
    last: "Última",
    pageOf: "Página {n} de {m}",
  },
  article: {
    breadcrumb: "A.C.E · Códice de Calibração",
    status:
      "Esta página explica a escada escrita. Não aplica nenhuma partida e não altera nenhum rating guardado.",
    emblemAlt: "Emblema de {name}, rank {level}",
    emblemCaption: "Rank {level} · {name} · {crystal}",
    examples: {
      heading: "Exemplos práticos do motor",
      intro:
        "Cada linha chama a mesma função de Pontos de Rating que a escada utiliza. Os valores de entrada são exemplos. Não são guardados em nenhuma conta.",
      columns: {
        yourPoints: "Os seus pontos",
        otherSide: "Outro lado",
        result: "Resultado",
        storedAfter: "Guardado depois",
        change: "Variação",
      },
      results: {
        win: "Vitória",
        loss: "Derrota",
        draw: "Empate",
      },
    },
    turnLabel: "Continuar pelo códice",
    previous: "Anterior",
    next: "Seguinte",
    alsoIn: "Também na A.C.E",
    backToBoard: "Voltar ao quadro de ranks",
  },
  rankArticle: {
    title: "{name} — Rank {level}",
    band: {
      heading: "A faixa",
      range:
        "{name} é o rank {level}. O rótulo de cristal no emblema é {crystal}. Um rating guardado entre {from} e {to} ostenta este rank.",
    },
    code: {
      heading: "Código do rank",
      hold: "Manutenção. A conta ostenta {name} enquanto os seus Pontos de Rating guardados estiverem dentro desta faixa. O rank é lido a partir do número. Não é escolhido num menu.",
      gateNext: "Acesso. O rank seguinte abre aos {next} Pontos de Rating.",
      gateLast: "Acesso. Não existe rank seguinte. A faixa termina nos 3.000 Pontos de Rating.",
      record:
        "Registo. Um rank só muda quando um resultado registado altera os Pontos de Rating. Abrir esta página não regista nenhum resultado.",
      emblem:
        "Emblema. A imagem identifica o rank. Uma compra, uma pré-visualização de skin ou um cosmético não move o piso.",
    },
    emblem: {
      heading: "Para que serve o emblema",
      material:
        "O estudo de material desta marca é: {material}. Essa linha descreve a arte. Não é uma estatística nem um requisito.",
      sample:
        "A percentagem de vitórias apresentada ao lado deste emblema no quadro de ranks é uma etiqueta de exemplo. Não tem de ser atingida para se poder ostentar o rank.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit é a placa de entrada. As contas novas já não começam aqui: começam com 1.200 Rating Points, em Vanguard. Só se chega a Recruit perdendo terreno.",
      detail:
        "O acesso a Operative é aos 1.100. A tabela da escada abre Recruit no 0, mas o motor não guarda um rating abaixo de 100. Entre 100 e 1.099, a conta continua Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative fica logo abaixo do número inicial. Uma conta que desce abaixo de 1.200 chega aqui antes de alcançar Recruit.",
      detail: "A faixa tem cem pontos de largura. Fecha nos 1.199. Vanguard abre aos 1.200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard é onde começa cada conta nova, com 1.200 Rating Points. Subir a partir daqui é o primeiro passo real na escada.",
      detail: "A faixa vai de 1.200 a 1.299. Specialist abre aos 1.300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist é o rank da técnica. O rótulo de cristal do emblema diz GOLD. O nome oficial guardado com a escada é Specialist. Trata-se do mesmo piso.",
      detail: "A faixa vai de 1.300 a 1.399. Veteran abre aos 1.400.",
    },
    "rank-5-veteran": {
      stance: "Veteran é a marca do meio. Há quatro ranks abaixo deste piso e cinco acima.",
      detail:
        "A faixa vai de 1.400 a 1.499. Elite abre aos 1.500. O rótulo de cristal deste emblema é PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite é o nome do motor. DIAMOND é o rótulo de cristal no mesmo emblema. Nenhum dos rótulos é um segundo rating.",
      detail: "A faixa vai de 1.500 a 1.599. Master abre aos 1.600.",
    },
    "rank-7-master": {
      stance:
        "Master é o primeiro rank cujo rótulo de cristal e nome oficial usam a mesma palavra. O piso é 1.600.",
      detail: "A faixa vai de 1.600 a 1.699. Grandmaster abre aos 1.700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster é o degrau de safira. O piso é 1.700, ainda com cem pontos de largura, e Sovereign espera aos 1.800.",
      detail:
        "A faixa vai de 1.700 a 1.799. Nada nesta página gasta uma partida para a atravessar.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign é o degrau largo antes de Legend. O rótulo de cristal é IMMORTAL. O nome oficial é Sovereign.",
      detail:
        "A faixa vai de 1.800 a 1.949. São 150 pontos, não 100. 1.949 continua a ser Sovereign. Legend abre aos 1.950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E Legend é a última marca. O rótulo de cristal é ACE ELITE. O nome oficial é A.C.E Legend.",
      detail:
        "A faixa abre aos 1.950 e termina no teto do motor, 3.000. Não existe um décimo primeiro rank. Um rating guardado não pode subir acima de 3.000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "O que é um rank A.C.E.",
      lede: "Um rank é a marca que contém os seus Pontos de Rating guardados. Dez marcas cobrem toda a escada, de Recruit a A.C.E Legend.",
      sections: [
        {
          heading: "Um número, uma marca",
          paragraphs: [
            "A conta guarda um rating competitivo. A escada lê esse número e devolve o rank mais alto cujo piso o número já atingiu. Não tem dois ranks ao mesmo tempo.",
            "Recruit é o rank 1. A.C.E Legend é o rank 10. O nome oficial é o nome que consta da escada. A palavra mais curta no emblema é o rótulo de cristal do mesmo rank.",
            "Este códice explica a escada escrita. Não aplica nenhuma partida e não altera nenhum rating guardado.",
          ],
        },
        {
          heading: "Como se dispõem os pisos",
          paragraphs: [
            "Recruit cobre o início da escada. Operative abre aos 1.100. De Vanguard a Grandmaster, cada novo piso fica 100 pontos acima: 1.200, 1.300, 1.400, 1.500, 1.600 e depois 1.700.",
            "Sovereign abre aos 1.800 e mantém a conta até aos 1.949. A.C.E Legend abre aos 1.950. O teto do motor é 3.000, pelo que Legend é a faixa mais longa.",
          ],
        },
        {
          heading: "O que um rank não é",
          paragraphs: [
            "Um rank não é um limite de população. Legend é um piso, não uma lista de mil contas.",
            "Um rank não é um prémio, uma skin nem uma fila. O site público pode mostrar a marca. Não executa nenhuma partida que escreva uma nova.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Nome oficial e nome de cristal",
      lede: "Cada rank tem dois rótulos. O nome oficial é o da escada. O nome de cristal é a palavra gravada no emblema.",
      sections: [
        {
          heading: "Porque existem os dois",
          paragraphs: [
            "O motor e o perfil utilizam o nome oficial: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E Legend.",
            "O emblema tem também um rótulo de cristal: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Esse rótulo é arte. Não cria um décimo primeiro rank e não guarda um segundo número.",
          ],
        },
        {
          heading: "Onde divergem",
          paragraphs: [
            "O rótulo de cristal de Specialist é GOLD. O de Veteran é PLATINUM. O de Elite é DIAMOND. O de Sovereign é IMMORTAL. O de A.C.E Legend é ACE ELITE. Em todos os casos, o piso continua a pertencer ao nome oficial.",
            "Master e Grandmaster usam a mesma palavra nos dois sítios.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "As três divisões no quadro",
      lede: "As divisões III, II e I são uma ajuda de leitura pintada sobre a faixa de um rank. A conta não guarda nenhuma divisão.",
      sections: [
        {
          heading: "O que é guardado",
          paragraphs: [
            "Uma conta com sessão iniciada guarda um nível de rank e um rating competitivo. O nível de rank acompanha o rating. Não existe nenhuma coluna de divisão ao lado deles.",
            "No quadro de ranks, a faixa do rank selecionado é dividida em três degraus de visualização para que se veja a base, o meio e o topo desse piso. A divisão III é a parte baixa da faixa. A divisão I é a parte alta.",
          ],
        },
        {
          heading: "O que são as etiquetas",
          paragraphs: [
            "As percentagens de vitórias e as marcas de progresso nessas etiquetas são exemplos. Não são uma segunda escada nem uma meta que tenha de atingir.",
            "Mudar a etiqueta de divisão não altera nenhum rating guardado. Só um resultado registado o pode fazer, e esta página não regista nenhum.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "O que não consegue mover um rank",
      lede: "A marca acompanha os Pontos de Rating guardados. Tudo o resto no site deixa a marca onde está.",
      sections: [
        {
          heading: "Fora do motor",
          paragraphs: [
            "Uma pré-visualização de skin, um cartão da loja, um rótulo de subscrição e um cosmético não acrescentam Pontos de Rating. Pagar um plano não é um rank.",
            "Abrir o quadro de ranks, rodar um emblema ou ler este códice não aplica nenhuma partida.",
            "Uma denúncia, uma nota de suporte e um layout de torneio não reescrevem o rating guardado.",
          ],
        },
        {
          heading: "O único caminho",
          paragraphs: [
            "O caminho escrito é um resultado de partida registado que passa pelo motor de Pontos de Rating. Hoje, nenhuma página pública deste site escreve esse resultado.",
            "Enquanto não existir um resultado, uma conta nova fica no seu rating inicial e uma conta existente mantém o rating já guardado.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "O que são os Pontos de Rating",
      lede: "Os Pontos de Rating são o número competitivo guardado na conta. O rank é apenas a faixa em que esse número se encontra.",
      sections: [
        {
          heading: "O campo guardado",
          paragraphs: [
            "A versão do motor é {version}. Uma conta nova começa com {startingRating} Pontos de Rating. O número guardado não pode descer abaixo de {minRating} nem subir acima de {maxRating}.",
            "Os perfis e o quadro de ranks leem este número quando tem sessão iniciada. Quando não tem sessão iniciada, o quadro mostra o piso de calibração do emblema que selecionou. Esse piso é um exemplo, não a sua conta.",
          ],
        },
        {
          heading: "O que o número mede",
          paragraphs: [
            "O motor compara o seu rating com o rating médio do lado adversário. Não mantém uma pontuação separada para um prémio individual, uma taxa de headshots ou uma linha de utilitários. Esses valores não fazem parte desta versão.",
            "Um número mais alto significa que a escada espera que ganhe mais vezes contra um número mais baixo. Os nomes dos ranks são a leitura pública dessa escala.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Onde começa uma conta nova",
      lede: "O início de sessão com a Steam cria a conta com 1.200 Rating Points, patente 3, Vanguard, sem vitórias nem derrotas.",
      sections: [
        {
          heading: "A marca inicial",
          paragraphs: [
            "1.200 é o piso de Vanguard. Operative e Recruit ficam abaixo, por isso uma conta nova começa a meio da primeira parte da escada e não no fundo.",
            "Voltar a iniciar sessão não reinicia uma pontuação já guardada. As primeiras 10 partidas registadas são de colocação: durante elas a pontuação não pode passar do escalão 5. O códice não inventa um registo de vitórias e derrotas.",
          ],
        },
        {
          heading: "Como o ver",
          paragraphs: [
            "Depois de iniciar sessão com a Steam, o painel e o quadro de ranks podem mostrar o rating guardado. Se a base de dados estiver inacessível, a página indica-o em vez de inventar um número.",
            "A patente inicial continua a ser Vanguard até que um resultado registado tire a pontuação da faixa 1.200–1.299. Este site não escreve hoje nenhum resultado desses.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Como um resultado registado move os Pontos de Rating",
      lede: "Uma vitória ou derrota registada é medida face à pontuação média da outra equipa. Contra uma equipa equilibrada uma vitória vale +20 e uma derrota −20. As regras completas estão na página de Patentes.",
      sections: [
        {
          heading: "O passo",
          paragraphs: [
            "A pontuação esperada é a probabilidade que o motor atribui antes da partida, apenas com base nas duas pontuações. Com pontuações iguais é metade, por isso uma vitória vale 20 Rating Points e uma derrota custa 15.",
            "Contra um rating mais alto, uma vitória vale mais de 20 e uma derrota custa menos. Contra um mais baixo, o contrário. Uma vitória dá sempre de 10 a 30 e uma derrota custa sempre de 10 a 30. Nos escalões 7–9 vitórias e derrotas são multiplicadas por 0,85 e no escalão 10 por 0,75, por isso o topo move-se de forma mais estável. O rating mantém-se entre 100 e 3.000.",
            "Num resultado de equipa, cada jogador é medido face à pontuação média da outra equipa. Está previsto um bónus MVP de partida de 2 RP para quando o servidor registar abates; até lá não é aplicado nenhum bónus pessoal.",
          ],
        },
        {
          heading: "Um empate",
          paragraphs: [
            "Um empate não muda nada: cada jogador mantém o seu rating. Abandonar ou sair de uma partida custa o dobro de uma derrota normal, pelo menos 30 RP, seja qual for o resultado.",
            "A tabela desta página é o motor a trabalhar com valores de exemplo. Essas linhas não são partidas guardadas nem a sua conta.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "O piso, o teto e um rank saltado",
      lede: "O número guardado para nos 100 e nos 3.000. O rank acompanha sempre o número, pelo que nenhum botão permite saltar um rank.",
      sections: [
        {
          heading: "Os limites",
          paragraphs: [
            "Uma derrota com 100 Pontos de Rating fica nos 100. Uma vitória com 3.000 fica nos 3.000. O piso de Recruit na escada está escrito como 0, mas o número guardado nunca usa o intervalo abaixo de 100.",
            "1.949 é Sovereign. 1.950 é A.C.E Legend. Não existe nenhuma marca intermédia.",
          ],
        },
        {
          heading: "Sem saltos",
          paragraphs: [
            "Se um resultado registado fizesse o número saltar de 1.050 para 1.260, a conta passaria a ostentar Vanguard, porque 1.260 está dentro dessa faixa. Os ranks intermédios não ficam em fila como promoções separadas. O número é lido uma única vez.",
            "Nenhuma página deste site executa esse salto. O exemplo mostra apenas como a escada lê um número.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Onde apareceria uma ligação de partida",
      lede: "Uma ligação de partida é o endereço de um servidor de jogo. Este site não emite nenhuma.",
      sections: [
        {
          heading: "O balcão que pode abrir",
          paragraphs: [
            "A página de jogo mostra um layout de dez jogadores e um controlo ENCONTRAR PARTIDA. Esse controlo continua fechado. Não consegue abrir um servidor de Counter-Strike 2 e não entrega nenhum endereço a ninguém.",
            "O número de pessoas no site não é o número de pessoas dentro de um jogo. A população para uma partida é 0.",
          ],
        },
        {
          heading: "Onde ficaria uma ligação mais tarde",
          paragraphs: [
            "Se existisse um servidor de partidas, o endereço e a respetiva palavra-passe seriam mostrados no balcão de partidas depois de os dez jogadores terem aceitado. Um jogador entraria a partir da Steam. Nenhum endereço é guardado neste site e nenhuma palavra-passe é gerada.",
            "O início de sessão com a Steam associa a conta. Não coloca nenhum jogador num mapa.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "O que é o balcão classificativo",
      lede: "O balcão classificativo é o layout da página de jogo para um 5v5. É um balcão fechado, não uma fila aberta.",
      sections: [
        {
          heading: "O que está desenhado",
          paragraphs: [
            "Dois lados, cinco lugares cada um, e um rótulo de capitão no primeiro lugar. A lista de mapas e a linha de chat ao lado fazem parte do mesmo layout.",
            "As linhas de segurança dessa página indicam o respetivo estado. Nenhuma é ainda uma verificação ativa; consulte o roteiro em /anti-cheat.",
          ],
        },
        {
          heading: "O que o balcão não faz",
          paragraphs: [
            "ENCONTRAR PARTIDA não procura adversários. Não altera os Pontos de Rating. O rank de uma conta continua a ser o número guardado, lido pela escada deste códice.",
            "Não existe nenhuma fila de topo separada acima de Legend. A.C.E Legend é a última marca e abre aos 1.950 Pontos de Rating.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Ajuda do balcão de partidas",
      lede: "O suporte neste site é um balcão escrito. Não abre nenhuma linha de voz ao vivo dentro de uma partida.",
      sections: [
        {
          heading: "O que a página de suporte faz",
          paragraphs: [
            "A página de suporte lista os balcões e disponibiliza um controlo de pedidos de suporte. Escolher esse controlo não cria nenhum caso e não contacta ninguém durante uma partida, porque não há nenhuma partida a decorrer.",
            "Uma questão sobre regras pertence ao código de competição em /rules. Uma questão sobre a escada pertence a este códice.",
          ],
        },
        {
          heading: "Um protesto, quando existir uma partida",
          paragraphs: [
            "O código escrito diz que o capitão pode apresentar um protesto antes do início do mapa seguinte, indicando o mapa, a ronda e o artigo. Este site não armazena demos e não opera servidores de jogo, pelo que hoje esse protesto não tem para onde ir.",
            "Um resultado de layout não é uma partida disputada. A organização só escreveria o resultado de uma série depois de uma série real.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "À espera de dez jogadores",
      lede: "Um mapa competitivo precisa de dez titulares. Hoje, o balcão não gere essa espera.",
      sections: [
        {
          heading: "O relógio escrito",
          paragraphs: [
            "Quando uma partida tiver um início publicado, os cinco titulares de cada lado devem estar presentes 15 minutos antes desse início. Essa frase consta do código de competição. O relógio não arranca neste site, porque nenhuma partida está publicada.",
            "Os nomes apresentados na página de jogo são uma pré-visualização. Não são pessoas à espera numa fila.",
          ],
        },
        {
          heading: "O que não acontece enquanto observa",
          paragraphs: [
            "A página não reserva nenhum servidor, não envia notificações e não faz contagem decrescente para uma aceitação. Sair da página não abandona nenhuma partida, porque não estava em nenhuma.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "O capitão no balcão",
      lede: "Um capitão fala por cada lado. As funções do lobby ficam ativas com a beta competitiva.",
      sections: [
        {
          heading: "O que o código atribui",
          paragraphs: [
            "O capitão trata dos vetos, das pausas e de um eventual protesto. Os outros titulares jogam. Um suplente só pode entrar entre mapas.",
            "Num mapa único, os capitães banem um mapa de cada vez até restar um. O pool é Ancient, Anubis, Dust II, Inferno, Mirage, Nuke e Train. O seed mais alto é a equipa A e escolhe se bane primeiro ou segundo; com seeds iguais decide uma moeda. Hoje não há nenhum veto aberto.",
          ],
        },
        {
          heading: "Pausas",
          paragraphs: [
            "As pausas só se aplicam quando existe um servidor de partida. Aqui não existe. O limite escrito por equipa e mapa é de três pausas táticas de 30 segundos, mais uma no prolongamento, e 10 minutos de pausa técnica no total. O texto completo está em /rules.",
            "Na página de equipas, o capitão é também o membro que pode enviar um convite para o plantel. Esse convite é independente de qualquer lobby de partida.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Quando um lado não está pronto",
      lede: "O código de competição descreve uma derrota por falta de comparência para uma partida com início publicado. Este site não atribui essa derrota.",
      sections: [
        {
          heading: "A regra escrita",
          paragraphs: [
            "Os cinco titulares têm de estar prontos 15 minutos antes do início publicado. Um lado que ainda esteja incompleto 15 minutos após o início perde a série por falta de comparência, quando existir uma partida. Se ambos os lados faltarem, ambos são retirados e a organização regista o resultado da vaga.",
            "Um clã que comece um mapa com menos de cinco titulares elegíveis, e não tenha nenhum suplente que possa entrar, perde esse mapa por falta de comparência.",
          ],
        },
        {
          heading: "O que este site não fará",
          paragraphs: [
            "Nada aqui vigia um lobby nem escreve uma derrota por falta de comparência por si só. Um botão na página de jogo não pode entregar um mapa que nunca foi carregado.",
            "Um resultado de layout na árvore do torneio não é uma partida disputada nem uma derrota por falta de comparência.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Entrar na eliminatória de 100 clãs",
      lede: "A página do torneio é uma árvore de 100 clãs. As inscrições estão em 0 de 100. As inscrições não estão abertas.",
      sections: [
        {
          heading: "O que pode abrir",
          paragraphs: [
            "Clique num clã da árvore para ver o plantel e depois abra um jogador. Os nomes nas vagas livres são pré-visualizações, não inscrições aceites.",
            "A árvore não atribui servidores e não envia nenhuma ligação de partida.",
          ],
        },
        {
          heading: "A isenção, quando as inscrições abrirem",
          paragraphs: [
            "A regra escrita, para futuras inscrições, é que os primeiros 28 clãs aceites saltam a ronda 1. Essa isenção não é um prémio e não pode ser reclamada enquanto as inscrições estiverem em 0 de 100.",
            "A duração das séries, o conjunto de mapas e os protestos constam do código de competição em /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Como se forma um plantel",
      lede: "Um capitão convida um jogador que já tenha uma conta A.C.E. Não existe nenhuma ligação pública de partilha, e a palavra-passe da Steam nunca é pedida.",
      sections: [
        {
          heading: "O convite que existe",
          paragraphs: [
            "Na página de equipas, um capitão com sessão iniciada cola um SteamID64 ou um ID de conta A.C.E. A conta tem de estar já associada através do Steam OpenID. O servidor regista um convite pendente quando a base de dados o aceita.",
            "O plantel tem cinco jogadores, incluindo o capitão. Um capitão não pode convidar a sua própria conta. Um jogador que já esteja no plantel é recusado. Se a base de dados estiver em baixo, o convite falha e nenhum convite é guardado.",
          ],
        },
        {
          heading: "O que um convite não é",
          paragraphs: [
            "O convite não envia nenhuma carta, não abre nenhum lobby privado e não gera nenhuma ligação que possa publicar. Não coloca o clã na eliminatória.",
            "O código da eliminatória permite dois suplentes designados quando existir uma inscrição num torneio. As inscrições não estão abertas, pelo que esses lugares não são um passe que possa usar hoje.",
          ],
        },
      ],
    },
  },
};
