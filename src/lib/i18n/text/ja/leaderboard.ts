import type { TextBag } from "../types";

export const leaderboard: TextBag["leaderboard"] = {
  "meta": {
    "title": "リーダーボード",
    "description": "A.C.E 競技ボード。保存済みの Steam アカウントが先に表示され、空席はショーケース行のままです。"
  },
  "hero": {
    "kicker": "リーダーボード",
    "title": "競技ボード",
    "note": "プレイヤーが Steam を連携してレーティングを獲得するまで、このボードはショーケース枠で埋められています。国と注目武器は例示です。武器のレンダーは A.C.E スタジオのオリジナルアートで、Valve のスキンではありません。キルはまだ記録されていないため、注目武器はトップフラッグの統計ではありません。"
  },
  "facts": {
    "seats": "席",
    "storedAccounts": "保存済みアカウント",
    "killsStored": "保存済みキル",
    "none": "なし"
  },
  "empty": "その名前に一致するショーケース枠はありません。",
  "podiumLabel": "上位3席",
  "boardLabel": "競技ボード",
  "table": {
    "rank": "順位",
    "player": "プレイヤー",
    "country": "国",
    "tier": "ティア",
    "leadWeapon": "主力武器",
    "rating": "レーティング"
  },
  "tags": {
    "stored": "保存済みアカウント",
    "showcase": "ショーケース"
  },
  "weapon": {
    "sampleRender": "シグネチャー武器",
    "notStored": "未保存",
    "noKillSaved": "キルは保存されていません",
    "alt": "{name}"
  },
  "countries": {
    "il": "イスラエル",
    "us": "アメリカ",
    "de": "ドイツ",
    "ua": "ウクライナ",
    "se": "スウェーデン",
    "fr": "フランス",
    "pl": "ポーランド",
    "br": "ブラジル",
    "jp": "日本",
    "kr": "韓国"
  },
  "search": {
    "openLabel": "プレイヤー検索を開く",
    "srLabel": "リーダーボードを検索",
    "fieldLabel": "プレイヤーを検索",
    "placeholder": "表示名"
  }
};
