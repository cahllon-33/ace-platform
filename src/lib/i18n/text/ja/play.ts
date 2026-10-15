import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "meta": {
    "title": "プレイ",
    "description": "ランク 5v5 マッチメイキングは A.C.E Shield アンチチートの稼働後に開始します。"
  },
  "boards": {
    "label": "キューボード",
    "title": "3つの 5v5 ボード",
    "note": "選択はこのページ内に留まります。ランク検索は停止中で、ボードを選んでも対戦相手は探されません。",
    "items": {
      "open": {
        "name": "オープンボード",
        "rules": [
          "最大5人までの任意の人数のパーティー",
          "レーティング幅なし",
          "本人確認は Steam OpenID",
          "キュー開始後のオープン練習向け"
        ]
      },
      "calibration": {
        "name": "キャリブレーション・ボード",
        "rules": [
          "ソロ、デュオ、トリオ",
          "予定レーティング幅 {points} ポイント",
          "Steam プロフィールの保存が必要",
          "A.C.E. レーティング規則を使用 · 検索はまもなく開始"
        ]
      },
      "elite": {
        "name": "エリート・ボード",
        "rules": [
          "ソロまたはデュオ",
          "予定レーティング幅 {points} ポイント",
          "保存済みメンバーシップが Plus または Premium であること",
          "より厳格な参加条件。賞金プールはありません"
        ]
      }
    }
  },
  "veto": {
    "kicker": "マップ拒否",
    "title": "マップを選択",
    "lede": "マップが1つ残るまで拒否してください。このロビーで Counter-Strike 2 が起動したり、サーバーが開いたりすることはありません。",
    "mapSelected": "選択されたマップ:{map}",
    "yourBan": "あなたのBAN",
    "opponentBan": "相手のBAN",
    "selected": "選択済み",
    "declined": "拒否済み",
    "decline": "拒否",
    "reset": "拒否をリセット",
    "declinedToast": "{map} は拒否されました。このページでサーバーは開きません。",
    "lockKicker": "5v5 マッチルーム",
    "lockTitle": "残ったマップは {map} です",
    "lockBody": "あなたのマッチルーム。競技ベータが始まると、ここで競技試合が始まります。",
    "close": "閉じる"
  },
  "arena": {
    "ariaLabel": "マッチルームのプレビュー",
    "captain": "キャプテン",
    "ping": "Ping {ping}",
    "mapPlates": "マップイメージ",
    "selectMap": "{map} を選択",
    "settings": {
      "region": "地域",
      "mode": "モード",
      "antiCheat": "アンチチート",
      "simulator": "プレビュー"
    },
    "chat": {
      "title": "チームチャット",
      "kicker": "チームチャット · まもなく開始",
      "captainName": "{name}(キャプテン)",
      "layoutName": "{name}",
      "samples": [
        "gl hf",
        "いくぞ",
        "ダスト2 はうちに合ってる",
        "準備OK"
      ],
      "inputLabel": "チームチャットのメッセージ",
      "placeholder": "チームにメッセージ…",
      "send": "送信"
    },
    "tiles": {
      "map": "マップ",
      "server": "サーバー",
      "serverValue": "EU West · まもなく開始",
      "mode": "モード"
    },
    "identity": {
      "title": "本人確認",
      "kicker": "本人確認 · まもなく開始",
      "rows": [
        "メール認証 · まもなく開始",
        "電話認証 · まもなく開始",
        "顔認証 · まもなく開始"
      ]
    },
    "security": {
      "title": "試合のセキュリティ",
      "kicker": "A.C.E SHIELD · 開発中",
      "rows": [
        "アンチチート保護 · 開発中",
        "サーバー整合性チェック · 開発中",
        "試合データの暗号化 · 開発中"
      ]
    },
    "findMatchReason": "マッチメイキングは競技ベータとともに開始します。ランクキューはまだ稼働していません。"
  },
  "matchFound": {
    "ariaSignedIn": "{title}。{name} は試合開始後にロスターに加わります。",
    "banner": "アリーナ · 競技ベータ まもなく開始",
    "mapPlate": "マップイメージ · DUST II · 128ティックサーバーなし",
    "rosterNote": "プレビュー用のコールサイン。",
    "teamA": "チームA · タクティカル・アライアンス",
    "teamB": "チームB · シャドウ・レギオン",
    "clockLabel": "試合クロック",
    "clockNote": "このクロックはループ表示です。キューは停止中です。",
    "chatKicker": "チームチャット",
    "chatLines": [
      "クロックのリセットまで待機中。",
      "このページの Dust II はマップイメージです。",
      "このロスターに接続されたサーバーはありません。"
    ],
    "chatField": "メッセージは送信されません。",
    "identityKicker": "IDグリッド",
    "identityRows": [
      "試合チケットのメールは送信されません。",
      "カーネルチェックは実行されていません。",
      "ライブ・テレメトリは競技ベータとともに提供されます。"
    ],
    "findMatch": "競技マッチを探す",
    "closedNotice": "マッチメイキングは競技ベータとともに開始します。ランクキューはまだ稼働していません。"
  }
};
