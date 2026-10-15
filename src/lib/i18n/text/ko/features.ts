import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  page: {
    meta: {
      title: "기능",
      description:
        "명세된 A.C.E. 안티치트 커널 아키텍처, 생체 얼굴 스캔 연동, 10단계 실력 캘리브레이션 티어. 이 시스템들은 이 웹사이트에서 작동하지 않습니다.",
    },
    header: {
      kicker: "ACE-FEATURES / 커널 / 얼굴 스캔 / 캘리브레이션",
      title: "플랫폼 기능 명세",
      lede: "이 페이지는 A.C.E.가 계획한 세 가지 시스템, 즉 자율 안티치트 커널, 생체 얼굴 스캔 연동, 10티어 실력 캘리브레이션 래더에 대한 프로덕션 수준의 기술 지도입니다. 이 페이지의 어떤 것도 실제로 작동하는 커널, 실제 카메라 제품, 실시간 랭크 대기열이 아닙니다. Steam OpenID, 5v5 팀, 대진표 레이아웃, Elo 방식 레이팅 계산은 이 저장소에 존재합니다. 전용 CS2 서버, 결제, 상금, 다운로드 가능한 무결성 클라이언트는 존재하지 않습니다.",
    },
    kernel: {
      title: "안티치트 커널 아키텍처",
      paragraphs: [
        "명세된 자율 보안 셸은 하드웨어에 연결된 무결성 클라이언트로, 플레이어 PC에서 Counter-Strike 2와 함께 실행되며 서명된 ALLOW 또는 DENY 상태를 A.C.E. 관리 서버에 보고하도록 설계되어 있습니다. 커널 설계는 실패 시 닫힘 방식입니다. 클라이언트가 없거나, 중지되었거나, 오래되었거나, 위조되었거나, 검증되지 않으면 랭크 입장이 거부됩니다. 브라우저는 결코 자격 판정 기준이 되지 않습니다. 이 웹사이트의 랭크 매치 찾기가 이미 실패 시 닫혀 있는 것도 이 때문입니다.",
        "계획된 커널 계층에는 검증된 64비트 SteamID를 A.C.E. 계정에 묶는 사용자 모드 핸드셰이크, 하드웨어 식별자(HWID) 증명 영역, 알려진 치트 계열에 대한 서명 감시 목록, 공유 비밀키로 보호되는 서버 간 자격 확인 경로가 포함됩니다. 치트 서명 검증, 거부된 무결성 검사, 또는 위조된 기기 식별자는 즉시 계정 상태를 BANNED 또는 PERM_BANNED로 바꾸도록 명시되어 있으며, 결제 상품이 존재하는 경우 선결제된 구독 기간 전체를 몰수하고 환불 책임은 지지 않습니다. 이 웹사이트와 함께 제공되는 그런 클라이언트는 없습니다. 곧 제공 다운로드 카드는 레이아웃일 뿐입니다.",
      ],
      stats: [
        { label: "커널 상태", value: "개발 중" },
        { label: "랭크 대기열", value: "실패 시 닫힘" },
        { label: "HWID 저장", value: "이 사이트에서 수집하지 않음" },
      ],
    },
    faceScan: {
      title: "생체 얼굴 스캔 연동",
      paragraphs: [
        "얼굴 스캔은 명세된 향후 신원 연결 계층이며, 이 웹사이트의 카메라 제품이 아닙니다. 계획된 설계는 명시적 동의와 별도의 법률 검토를 거친 후에만, 라이브니스 검사를 거친 얼굴 템플릿을 서버에서 검증된 SteamID를 이미 보유한 같은 A.C.E. 계정에 연결합니다. 목적은 이전 제재를 피하기 위한 계정 공유를 막는 것입니다. A.C.E.는 현재 얼굴 이미지, 얼굴 임베딩, 이메일 주소, 하드웨어 지문을 수집하지 않습니다. 실제 개인정보 처리 원칙은 여전히 엄격한 필요성 원칙이며, 검증된 64비트 SteamID와 공개 Steam 표시 이름만 처리합니다.",
        "Face Scan이 언젠가 구현되더라도 Steam OpenID를 대체하지 않고, 행동 기반 광고 판매에 사용되지 않으며, 그 자체로 랭크 대기열을 열지 않습니다. 랭크 참가에는 여전히 검증된 Anti-Cheat 절차가 필요합니다. 해당 검토가 완료되기 전까지 로비의 Face Scan 패널은 디자인 미리보기입니다.",
      ],
    },
    calibration: {
      title: "10단계 실력 캘리브레이션 티어",
      intro:
        "Competitive Calibration은 공개된 A.C.E Rating Points 규정(버전 {version}: 스텝 {kFactor}, 스케일 {scale})을 사용합니다. 신규 계정은 랭크 3(Vanguard), FREE 구독, ACTIVE 상태, 경쟁 레이팅 {startingRating}에서 시작합니다. 로비의 크리스털 이름은 시각적 별칭입니다. 유료 치장 아이템으로 레이팅, 쉬운 상대, 128틱 서버, 대기열 우선권을 살 수 없습니다. 판매 중인 활성 128틱 상품은 없습니다.",
      table: {
        level: "레벨",
        engineName: "엔진 이름",
        crystalAlias: "크리스털 별칭",
        minRating: "최소 레이팅",
      },
      divisions: {
        before:
          "로비의 디비전 I, II, III는 쇼케이스 칩입니다. 레이아웃 수치만 바꿉니다. 디비전 기반 실시간 매치메이킹은 존재하지 않습니다. 3D 턴테이블은 ",
        middle: "에서, 구속력 있는 대회 문서는 ",
        after: "에서 확인하세요.",
      },
    },
  },
  loot: {
    kicker: "꾸미기 아이템 · 곧 출시",
    title: "A.C.E. 전리품 아키텍처 — 무기 드롭",
    lede: "상점과 함께 제공될 A.C.E. 오리지널 마감입니다. 꾸미기 아이템은 경쟁에 영향을 주지 않습니다.",
    mockDrop: "곧 출시",
    multiplierLabel: "승률 배수 요건",
    ladderLabel: "주간 래더 드롭",
    multiplierValue: "{multiplier}× 템플릿",
    ladderValue: "주간 슬롯 · 곧 출시",
    checkout: "결제 · 곧 출시",
  },
  communityRail: {
    kicker: "피드 · 곧 출시",
    newsTitle: "최신 래더 소식",
    newsItems: [
      "대진표는 여전히 비어 있습니다 — 100팀 중 0팀.",
      "안티치트가 존재하기 전까지 랭크 매치 찾기는 닫혀 있습니다.",
    ],
    prizesTitle: "일일 스킨 상품",
    prizesBody:
      "보상과 결제는 시즌 1과 함께 열립니다.",
  },
  identityPreview: {
    badge: "미리보기 — 확인되지 않음",
    cards: {
      faceScan: {
        title: "실시간 얼굴 스캔 확인됨",
        copy: "생체 확인은 예정된 제공업체 검사입니다. 현재 생체 정보는 수집하지 않습니다.",
      },
      hardwareId: {
        title: "하드웨어 ID 연결됨",
        copy: "기기 연결은 예정된 무결성 신호입니다. 현재 하드웨어 식별자는 수집하지 않습니다.",
      },
    },
  },
  preview: {
    fallbackTitle: "미리보기",
    kicker: "곧 출시",
    returnHome: "홈으로 돌아가기",
    pages: {
      support: {
        title: "지원",
        body: "공개 고객 지원은 경쟁 베타와 함께 열립니다.",
      },
      "anti-cheat": {
        title: "안티치트 개요",
        body: "A.C.E.에는 작동하는 안티치트 제품이 없습니다. 실제 연동이 생기기 전까지 랭크 매치메이킹은 닫혀 있습니다.",
      },
      "download-client": {
        title: "클라이언트 다운로드",
        body: "다운로드할 수 있는 A.C.E. 데스크톱 클라이언트는 없습니다. 네이티브 클라이언트는 현재 웹 단계에 포함되지 않습니다.",
      },
      "mobile-app": {
        title: "모바일 앱",
        body: "A.C.E. 모바일 앱은 로드맵에 있습니다.",
      },
      news: {
        title: "뉴스",
        body: "A.C.E. 뉴스룸은 곧 열립니다.",
      },
      about: {
        title: "회사 소개",
        body: "A.C.E.는 공개 웹사이트 미리보기 단계에 있는 독립적인 Counter-Strike 2 대회 사이트입니다. Valve와 제휴하지 않습니다.",
      },
      advertising: {
        title: "광고",
        body: "제휴 및 광고 문의는 곧 받을 예정입니다.",
      },
      developers: {
        title: "개발자",
        body: "아직 공개 개발자 프로그램은 없습니다. 이 저장소의 서버 자격 확인 API는 내부 어댑터이며 파트너 SDK가 아닙니다.",
      },
      press: {
        title: "언론",
        body: "보도 자료 키트는 곧 제공됩니다.",
      },
      jobs: {
        title: "채용",
        body: "채용 공고는 여기에 게시됩니다.",
      },
      terms: {
        title: "이용 약관",
        body: "적용되는 이용 약관은 /terms에 게시되어 있습니다. 토너먼트 규정집은 /rules에 있습니다.",
      },
      privacy: {
        title: "개인정보 처리방침",
        body: "개인정보 처리방침은 /privacy에 게시되어 있습니다. Steam OpenID가 유일한 로그인 경로이며, Steam 비밀번호는 절대 수집하지 않습니다.",
      },
      eula: {
        title: "안티치트 EULA",
        body: "안티치트가 작동하지 않으므로 안티치트 EULA도 없습니다. 랭크는 실패 시 닫힌 상태를 유지합니다.",
      },
    },
  },
};
