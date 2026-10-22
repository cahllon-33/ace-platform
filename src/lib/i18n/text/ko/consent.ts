import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  valveDisclaimer:
    "A.C.E는 독립적인 Counter-Strike 2 대회 사이트입니다. Valve Corporation과 제휴하지 않았으며, Valve의 승인이나 보증을 받지 않았습니다. Steam과 Counter-Strike는 각 소유자의 상표입니다. 대회 규정은 해당 게임을 위해 A.C.E가 직접 작성한 문서입니다.",
  acceptance: {
    label: "본인은 이용 약관, 안티치트 EULA, 개인정보 처리방침에 명시적으로 동의합니다.",
    readBefore: "자세한 내용은",
    termsLink: "약관",
    afterTerms: ",",
    rulesLink: "규칙 / EULA",
    afterRules: " 및",
    privacyLink: "개인정보 처리방침",
    after: "에서 확인하세요.",
  },
  categories: {
    legend: "쿠키 분류",
    essential: "필수 쿠키",
    required: "필수 / 잠김",
    analytics: "분석 트래커",
    marketing: "마케팅 트래커",
    optional: "선택",
  },
  banner: {
    kicker: "A.C.E 사이트 고지",
    copy: {
      before:
        "동의를 누르면 이 브라우저의 쿠키 선택이 저장됩니다. 이는 전자 서명이 아니며, 기기 텔레메트리를 수집하지 않고, 안티치트 클라이언트를 시작하지 않으며, 경쟁 대기열을 열지 않습니다. 계속하기 전에",
      termsLink: "이용 약관",
      afterTerms: ",",
      rulesLink: "규칙",
      afterRules: " 및",
      cookiePolicyLink: "쿠키 정책",
      after: "문서를 읽어 주세요.",
    },
    acceptLabel: "쿠키 선택에 동의합니다. 이 동작은 대기열을 열거나 안티치트 클라이언트를 시작하지 않습니다.",
    accept: "쿠키 선택 동의 >",
    rejectLabel: "선택 사항인 분석 및 마케팅 쿠키 거부",
    reject: "선택 항목 거부",
  },
  settings: {
    openLabel: "쿠키 설정 열기",
    open: "쿠키 설정",
    title: "쿠키 설정",
    body: "Steam OpenID에는 필수 세션 쿠키가 필요합니다. 선택 사항인 분석 및 마케팅 설정은 여기에만 저장됩니다. 현재 이 웹사이트에서는 광고 또는 분석 스크립트가 실행되지 않습니다.",
    cookiePolicyLink: "쿠키 정책",
    saveLabel: "쿠키 환경설정 저장",
    save: "저장",
    closeLabel: "쿠키 설정 닫기",
    close: "닫기",
  },
  subscriptionDisclosure:
    "곧 제공: 아직 결제가 없으므로 구독이 시작되지 않고, 청구되지 않으며, 갱신되지 않습니다. 결제가 생기면 대시보드 설정에서 해지할 수 있는 월간 플랜이 되며, 이미 결제한 달은 환불되지 않습니다.",
  planned: {
    fallbackLabel: "예정된 기능",
    badge: "예정 — 아직 이용할 수 없음",
  },
};
