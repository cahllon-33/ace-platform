import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "A.C.E. 스쿼드 관리",
    description:
      "5v5 스쿼드 작업 공간입니다. 초대에는 인증된 Steam 세션이 필요하며, 안티치트 검사는 A.C.E Shield와 함께 제공됩니다.",
  },
  hero: {
    kicker: "팀",
    title: "스쿼드",
    lede: "한 줄로 놓인 다섯 개의 빈 자리. 클랜은 Steam 로그인과 팀 생성 후에만 저장됩니다.",
  },
  gate: {
    kickerPremium: "플랜 선택 후 클랜 기록",
    kickerDefault: "클랜 기록",
    title: "5인 팀인가요?",
    intro:
      "1번 자리는 Steam으로 로그인한 플레이어입니다. 2번부터 5번 자리는 이미 A.C.E. 계정이 있어야 합니다. 클랜을 저장해도 $7가 청구되지 않고, 이메일이 발송되지 않으며, 클랜이 100팀 보드에 올라가지 않습니다.",
    yes: "예, 5명입니다",
    no: "아니요, 자리를 비워 두기",
    seatsOpen: "다섯 자리는 비어 있습니다. 아무것도 저장되지 않았습니다.",
    connectSteam:
      "먼저 Steam을 연결하세요. 버튼을 누르면 이 페이지로 돌아옵니다. A.C.E.는 Steam 비밀번호를 절대 요구하지 않습니다.",
    alreadyMember: "{name}님은 이미 {team} 소속입니다. 이 양식으로 두 번째 클랜을 만들 수 없습니다.",
    thisAccount: "이 계정",
    acceptTerms: "클랜을 저장하기 전에 약관에 동의하세요.",
    notStored: "클랜이 저장되지 않았습니다.",
    clanName: "클랜 이름",
    captainSeat: "1번 자리, 주장: {name}",
    signedInSteam: "로그인한 Steam 계정",
    seatLabel: "{seat}번 자리 SteamID 또는 A.C.E. 계정 ID",
    submit: "5인 클랜 저장",
    saved:
      "클랜 이름이 저장되었고 초대 4건이 대기 중입니다. 해당 플레이어들은 수락하기 전까지 로스터에 포함되지 않습니다. 이것은 100팀 보드의 자리가 아닙니다. 아무것도 청구되지 않았습니다.",
  },
  squadDesk: {
    kicker: "스쿼드 데스크",
    title: "명문화된 규칙에 대한 질문",
    intro:
      "이 데스크는 이 페이지에 게시된 사실만 읽습니다. 치트를 탐지하거나, 매치를 열거나, 계정을 변경하지 않습니다.",
    questionLabel: "질문",
    placeholder: "다섯 자리, 플랜 또는 지원에 대해 물어보세요",
    ask: "질문하기",
    fallback:
      "이 창구는 이 페이지에 적힌 규칙으로만 답합니다: 플랜, 다섯 자리, Steam OpenID, 지원.",
    facts: {
      email: "이메일은 발송되지 않습니다. 플랜 영수증은 이 웹사이트에 남습니다.",
      charge:
        "Premium은 월 $7입니다. 곧 제공: 아직 결제가 없으므로 아무것도 청구되지 않습니다.",
      board:
        "저장된 클랜은 로스터 기록입니다. 100팀 보드에 올라가지 않습니다. 시즌이 열리기 전까지 그 보드는 계속 등록 0으로 표시됩니다.",
      steam:
        "로그인은 공식 Steam OpenID를 사용합니다. A.C.E.는 Steam 비밀번호를 절대 요구하지 않습니다. 이 페이지에서 로그인하면 Steam이 이곳으로 돌려보냅니다.",
      roster:
        "1번 자리는 로그인한 주장입니다. 2번부터 5번 자리는 이미 A.C.E. 계정이 있어야 합니다. 초대는 각 플레이어가 수락할 때까지 대기 상태로 남습니다.",
      badge:
        "좌석 배지는 안티치트 출시 후 실제 A.C.E Shield 검사가 됩니다.",
      support:
        "이 웹사이트의 지원 또는 문의 페이지를 여세요. 지원 안내는 티켓을 열지 않으며, 문의 페이지에 입력한 내용은 전달되지 않습니다.",
      rating:
        "새 레이팅은 1,000에서 시작합니다. 이 페이지는 레이팅을 판매하지 않고, 대기열을 열지 않으며, CS2 서버에 연결하지 않고, 상금을 지급하지 않습니다.",
    },
  },
  squad: {
    roles: {
      awper: "AWP 저격수",
      entryFragger: "엔트리 프래거",
      lurker: "러커",
      igl: "IGL (인게임 리더)",
      support: "서포터",
    },
    rankLabel: "랭크 {level}",
    noAgents: "아직 저장된 미배정 플레이어가 없습니다.",
    notice:
      "초대는 로그인한 주장만 보낼 수 있습니다. 자리에 있는 배지는 실시간 안티치트 검사가 아닙니다.",
  },
  tournaments: {
    meta: {
      title: "A.C.E. 챔피언십 — 100팀 엘리트 녹아웃",
      description:
        "100팀 녹아웃 토너먼트입니다. 클랜을 클릭하면 로스터와 각 플레이어 프로필이 열립니다. 참가 신청은 곧 열립니다.",
    },
    intro: {
      title: "A.C.E. 챔피언십 — 100팀 엘리트 녹아웃",
      lede: "공개된 대회 형식은 100팀 녹아웃입니다. 아래 그래프가 그 레이아웃입니다. 클랜을 클릭하면 로스터 서랍이 열립니다. 등록은 100팀 중 0팀입니다. 현금 상금은 광고되지 않으며 재원도 없습니다.",
      formatValue: "100팀 대진 매트릭스",
      briefTitle: "100팀 운영 브리프",
      briefBody:
        "하나의 경쟁 구조가 100개 팀 전체를 포괄합니다. 참가 신청이 열리면 먼저 승인된 28개 클랜은 1라운드 부전승으로 2라운드에 진출합니다. 나머지 72개 클랜은 1라운드를 치릅니다. 빈 슬롯의 이름은 클랜이 등록할 때까지의 자리 표시입니다. 전체 규정집은 대진표 아래에 있습니다. 경기 로비는 경쟁 베타와 함께 열리며, 상금은 대회별로 확정됩니다.",
    },
    timeline: {
      ariaLabel: "토너먼트 출범 일정",
      kicker: "챔피언십 로드맵",
      title: "토너먼트 출범 일정",
      stageLabel: "{id}단계",
      stages: {
        registrations: { title: "등록 개시", state: "미리보기 표시" },
        calibration: { title: "지역 캘리브레이션 대진", state: "잠김" },
        quarterFinals: { title: "엘리트 프로 8강", state: "잠김" },
        finals: { title: "그랜드 에이펙스 결승", state: "잠김" },
      },
      disclaimer:
        "참가 신청이 시작되면 스테이지 01이 먼저 열립니다. 이어서 스테이지 02–04가 진행됩니다. 상금은 발표 시 대회 페이지에서 확정됩니다.",
    },
    bracket: {
      kicker: "100팀 녹아웃 · 곧 출시",
      title: "100팀 대진 매트릭스",
      statusUnavailable:
        "참가 신청은 곧 열립니다. 그때까지 대진표에는 미리보기 클랜이 표시됩니다.",
      statusEmpty:
        "참가 신청은 곧 열립니다. 그때까지 대진표에는 미리보기 클랜이 표시됩니다.",
      statusStored:
        "등록된 클랜 {count}개가 먼저 배치됩니다. 남은 슬롯에는 미리보기 클랜이 표시됩니다. 이후 라운드는 경기가 기록되면서 채워집니다.",
      openSlot: "빈 슬롯",
      openCompetitorSlot: "빈 참가 슬롯",
      openRoster: "{name} 로스터 열기",
      bye: "👑 [부전승 - 2라운드 시드]",
      championStage: "챔피언 무대",
      leftWing: "왼쪽 대진",
      rightWing: "오른쪽 대진",
      emptySlotNotice: "이 참가 슬롯은 비어 있습니다. 아직 저장된 클랜이 없습니다.",
      grandFinalNotice: "두 준결승이 모두 기록될 때까지 결승은 비어 있습니다.",
      rounds: {
        r128: "1R",
        r64: "64강",
        r32: "32강",
        r16: "16강",
        qf: "8강",
        sf: "4강",
      },
    },
    profile: {
      closeBackdrop: "팀 프로필 닫기",
      kicker: "챔피언십 프로필 · 미리보기",
      matchesPlayed: "치른 매치",
      winRate: "합산 승률",
      streak: "활성 토너먼트 연속 기록",
      rosterHeading: "5인 로스터 매트릭스",
      openSeat: "{seat}번 빈 자리",
      noPlayer: "저장된 플레이어 없음",
      previous: "이전 클랜",
      count: "클랜 {total}개 중 {index}번째",
      next: "다음 클랜",
      close: "프로필 닫기",
      disclosure:
        "플레이어가 공유를 선택하면 장비와 인벤토리가 여기에 표시됩니다. A.C.E.는 하드웨어 데이터를 수집하지 않습니다.",
    },
    player: {
      level: "레벨 {level} · RP {rating}",
      record: "승–패 {wins}–{losses}",
      kdNotStored: "K/D 저장되지 않음",
      openProfileAria: "{name} 프로필 열기",
      openProfile: "프로필 열기",
      badge: "준비 완료 / 안티치트 준수",
      badgeNote: "A.C.E Shield 검사 · 곧 출시",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "마우스",
        dpi: "DPI",
        keyboard: "키보드",
        monitor: "모니터",
        headset: "헤드셋",
      },
    },
  },
  gearPlaceholder: {
    processor: "CPU · 비공개",
    gpu: "GPU · 비공개",
    mouse: "마우스 · 비공개",
    dpi: "DPI · 비공개",
    keyboard: "비공개",
    monitor: "주사율 · 비공개",
    headset: "비공개",
  },
  profileDisclosure:
    "A.C.E.는 하드웨어 인벤토리를 저장하지 않으며 안티치트 클라이언트를 실행하지 않습니다. 성능 추세 그래프와 전투 매트릭스는 A.C.E. Plus 또는 Premium 세션이 필요합니다. 이 페이지에 입력한 Steam 프로필 링크는 저장되지 않으며 공식 핸들이 아닙니다.",
  errors: {
    signInRequired: "로그인이 필요합니다.",
    nameLength: "팀 이름은 2자 이상 32자 이하여야 합니다.",
    alreadyCaptain: "이 계정은 이미 팀의 주장입니다.",
    nameTaken: "같은 이름의 팀이 이미 있습니다.",
    idRequired: "SteamID 또는 A.C.E. 계정 ID가 필요합니다.",
    noAccountForToken: "해당 SteamID 또는 계정 ID의 A.C.E. 계정이 없습니다.",
    clanNeedsFour: "5인 클랜에는 로그인한 주장과 SteamID 4개가 필요합니다.",
    seatNeedsId: "네 자리 각각에 SteamID 또는 A.C.E. 계정 ID가 필요합니다.",
    seatsDistinct: "각 자리에는 서로 다른 플레이어가 필요합니다.",
    captainHoldsSeat: "주장은 이미 1번 자리를 차지하고 있습니다. 다른 플레이어 4명을 입력하세요.",
    fewerThanFour: "입력한 ID에 해당하는 계정이 4개 미만입니다.",
    selfInvite: "주장은 자신의 계정을 초대할 수 없습니다.",
    captainOnly: "지정된 주장만 초대를 보낼 수 있습니다.",
    rosterLimit: "CS2 로스터는 주장을 포함해 5명입니다.",
    alreadyOnRoster: "해당 플레이어는 이미 로스터에 있습니다.",
    noAccountForId: "해당 ID의 A.C.E. 계정이 없습니다.",
    inviteNotFound: "초대를 찾을 수 없습니다.",
    inviteNotPending: "이 초대는 더 이상 대기 중이 아닙니다.",
    rosterFull: "로스터가 이미 가득 찼습니다.",
    createFailed: "팀을 만들 수 없습니다.",
    inviteFailed: "초대에 실패했습니다.",
    updateInviteFailed: "초대를 업데이트할 수 없습니다.",
  },
};
