import type { TextBag } from "../types";

export const pricing: TextBag["pricing"] = {
  "meta": {
    "title": "料金",
    "description": "A.C.E. メンバーシップ:Free {free}、Plus 月額{plus}、Premium 月額{premium}。表示価格は整数で固定。"
  },
  "period": {
    "monthly": "/月"
  },
  "hero": {
    "badge": "メンバーシップ",
    "title": "アクセスプラン",
    "lede": "Free {free}。Plus 月額{plus}。Premium 月額{premium}。これらの金額は整数で固定されています。有料プランでレーティングや弱い対戦相手を買うことはできません。"
  },
  "tiers": {
    "free": {
      "name": "FREE",
      "note": "グラファイト",
      "title": "オープンアクセス",
      "points": [
        "Steam OpenID でサインイン。A.C.E. が Steam のパスワードを求めることは決してありません。",
        "保存されるレーティングは 1,000 から始まります。試合結果で変動したことはまだありません。",
        "すべての公開ページ:プレイ、トーナメント、リーダーボード、チーム、ルール。"
      ]
    },
    "plus": {
      "name": "A.C.E. PLUS",
      "note": "Plus",
      "title": "サンクスレターとサポート",
      "points": [
        "Free のすべての内容。",
        "このサイトでサンクスレターを表示:含まれるもの、含まれないもの、support@ace-platform.gg。",
        "レーティングや弱い対戦相手を買うものではありません。ゴールドのプロフィールバッジは、全プレイヤーの保存済み試合データから付与されます。エリートシールと特別バッジは、保存済みティアが既に Premium の場合にのみ表示されます。"
      ]
    },
    "premium": {
      "name": "A.C.E. PREMIUM",
      "note": "Premium",
      "title": "サンクスレターと5人スクワッド",
      "points": [
        "Free のすべての内容。",
        "このサイトでサンクスレターを表示:含まれるもの、含まれないもの、support@ace-platform.gg。",
        "続いてスクワッドを開きます:Steam でサインインしたキャプテンが5人のクランを保存できます。",
        "賞品、武器、稼働中のキュー、ゲームサーバーはありません。保存したクランは100チームのボードの席ではありません。"
      ]
    }
  },
  "card": {
    "elite": "エリート",
    "stayFree": "Free のままにする",
    "freeNote": "利用可能",
    "choose": "{plan} を選択",
    "chooseAria": "{plan} を月額 {price} で選択"
  },
  "billing": {
    "kicker": "支払いタイムライン",
    "title": "支払い開始後の仕組み",
    "body": "Plus は月額ちょうど {plus}。Premium は月額ちょうど {premium} です。",
    "display": {
      "label": "01 · 表示価格",
      "body": "Free {free}。Plus 月額{plus}。Premium 月額{premium}。有料ティアでレーティングや弱い対戦相手を買うことはできません。"
    },
    "rolling": {
      "label": "02 · 月次更新",
      "body": "支払い開始後は、月単位で自動更新されます。月の途中までの利用分は返金されません。解約すると次の更新が止まり、支払い済みの期間はそのまま利用できます。"
    },
    "today": {
      "label": "03 · 現在"
    }
  },
  "compare": {
    "kicker": "A.C.E. が現在お約束できること",
    "title": "メンバーシップ比較",
    "note": "各行はサイトの現状を反映しています。決済はまもなく開始し、有料プランでキューが開いたり有利になったりすることはありません。",
    "caption": "Free、Plus、Premium を現在のサイト機能で比較",
    "includedToday": "現在含まれるもの",
    "columns": {
      "free": "Free",
      "plus": "Plus",
      "premium": "Premium"
    },
    "rows": {
      "publicSite": {
        "feature": "公開サイト",
        "detail": "ホーム、プレイ、トーナメント、リーダーボード、チーム、ルール、規約。"
      },
      "steamSignIn": {
        "feature": "Steam サインイン",
        "detail": "公式 Steam OpenID。A.C.E. が Steam のパスワードを求めることは決してありません。"
      },
      "startingRating": {
        "feature": "初期レーティング",
        "detail": "記録された試合がない新規アカウントに保存される数値。"
      },
      "recordedMatches": {
        "feature": "記録された試合",
        "detail": "終了した A.C.E. の試合から記録される勝敗。"
      },
      "rankedQueue": {
        "feature": "ランクキュー",
        "detail": "本物のキューができるまで「マッチを探す」は停止中です。"
      },
      "cs2Servers": {
        "feature": "CS2 サーバー",
        "detail": "このサイトはサーバーアドレスや接続リンクを送信しません。"
      },
      "antiCheatClient": {
        "feature": "アンチチート・クライアント",
        "detail": "このサイトからダウンロードされるものはありません。"
      },
      "charge": {
        "feature": "請求",
        "detail": "Plus や Premium を選んでもカードは請求されません。"
      },
      "ratingForSale": {
        "feature": "レーティングの販売",
        "detail": "有料ラベルでレーティングや弱い対戦相手を買うことはできません。"
      },
      "prizeOrWeapon": {
        "feature": "賞品や武器",
        "detail": "スキン、ナイフ、賞金プールは提供されません。"
      },
      "goldEliteSeal": {
        "feature": "エリートシールと特別バッジ",
        "detail": "Premium 限定。サーバーに保存されたティアから読み取ります。外観のみ。決済でこのティアが設定されることはありません。"
      }
    },
    "cells": {
      "open": "利用可",
      "yes": "はい",
      "noneYet": "まだなし",
      "closed": "停止中",
      "notConnected": "まもなく開始",
      "notShipped": "未提供",
      "noCharge": "請求なし",
      "notForSale": "非売品",
      "none": "なし",
      "no": "いいえ",
      "storedTierOnly": "保存済みティアのみ"
    }
  },
  "receipt": {
    "plus": {
      "metaTitle": "Plus レシート",
      "metaDescription": "このサイトに表示される A.C.E. Plus のレター。決済は稼働していないため、請求もメール送信もありません。",
      "planName": "A.C.E. Plus",
      "nextLabel": "A.C.E. を続ける",
      "nextBody": "公開ページは引き続き利用できます。この選択でキューが開いたり、保存済みティアが変わったりすることはありません。"
    },
    "premium": {
      "metaTitle": "Premium レシート",
      "metaDescription": "このサイトに表示される A.C.E. Premium のレター。決済は稼働していないため、請求もメール送信もありません。",
      "planName": "A.C.E. Premium",
      "nextLabel": "スクワッドへ進む",
      "nextBody": "スクワッドへ進みます。5人チームかどうかを確認するページが表示されます。席1はサインイン中の Steam アカウント、席2〜5は他のプレイヤーです。クランを保存してもこの料金は請求されません。"
    }
  },
  "letter": {
    "kicker": "{plan} · 月額 {price}",
    "title": "ご選択ありがとうございます",
    "flag": "このレターはウェブサイト上に表示されるものです。メールは送信されておらず、カードも請求されていません。決済は稼働しておらず、保存済みのメンバーシップティアも変更されていません。",
    "greeting": "プレイヤーの皆さまへ",
    "intro": "{plan} をお選びいただきありがとうございます。このページがレシートです。表示価格、現在の選択に含まれるもの・含まれないもの、このサイトに掲載しているサポート窓口を記載しています。",
    "selected": {
      "title": "選択内容",
      "items": [
        "プラン名:{plan}。",
        "表示価格:月額 {price}。この金額は表示であり、請求ではありません。",
        "支払い:なし。このプランを選んでもカードは請求されません。",
        "メール:なし。A.C.E. はこのレターをメールで送信しません。",
        "保存済みティア:変更なし。特別バッジとエリートシールは、アカウントに既に Premium が保存されている場合にのみ表示されます。",
        "レーティング:非売品。新規アカウントは引き続き 1,000 から始まります。"
      ]
    },
    "today": {
      "title": "現在利用できるもの",
      "items": [
        "公開サイト:ホーム、プレイ、トーナメント、リーダーボード、チーム、ルール、規約。",
        "公式 Steam OpenID による Steam サインイン。A.C.E. が Steam のパスワードを求めることは決してありません。",
        "Free と同じ公開ページ。この料金で別のキューが開くことはありません。"
      ]
    },
    "excluded": {
      "title": "この選択に含まれないもの",
      "items": [
        "稼働中のランクキュー。「マッチを探す」は停止中です。",
        "Counter-Strike 2 サーバー、サーバーアドレス、接続リンク。",
        "アンチチートのダウンロード。A.C.E Shield は開発中です。",
        "賞品、スキン、ナイフ、賞金プール。",
        "100チームボードの席。シーズン開始までボードの登録数は 0 のままです。",
        "弱い対戦相手、購入したレーティング、Free とは異なる公開サイト。"
      ]
    },
    "trouble": {
      "title": "うまくいかない場合",
      "items": [
        "請求や有料ティアの適用を想定していた場合:何も適用されていません。アカウントは元のままです。",
        "このレターがメールで届くと思っていた場合:このページにのみ存在します。",
        "Steam に接続できなかった場合:「プロフィールを連携」を使い、先に規約のチェックボックスに同意してください。A.C.E. に Steam のパスワードを入力しないでください。",
        "ヘルプが必要な場合:下記のサポート窓口を利用するか、このサイトのヘルプページを開いてください。"
      ]
    },
    "support": {
      "title": "サポート",
      "addressBefore": "このサイトに掲載しているサポート窓口:",
      "addressAfter": "。",
      "helpBefore": "サイト内のヘルプ:",
      "supportLink": "サポート",
      "helpAnd": "と",
      "contactLink": "お問い合わせ",
      "rulesBefore": "。ルールは",
      "rulesLink": "ルール",
      "rulesAnd": "と",
      "termsLink": "規約",
      "helpAfter": "をご覧ください。サポートのプロンプトでチケットが作成されることはなく、お問い合わせに入力した内容も送信されません。"
    },
    "next": {
      "title": "次のステップ"
    }
  },
  "telemetry": {
    "kicker": "PLUS / PREMIUM テレメトリ",
    "copy": "ダッシュボードのテレメトリはロック中 — A.C.E. Plus または Premium にアップグレードすると、リアルタイムの統計カーブや武器特化指標を利用できるようになります。",
    "cta": "料金表を開く"
  }
};
