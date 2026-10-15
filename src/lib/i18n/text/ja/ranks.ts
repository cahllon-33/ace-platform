import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  premiumRanks: {
    kicker: "プレミアムランク",
    plan: "A.C.E PREMIUM · 月額$7のみ",
    title: "プレミアムランクアート",
    lede: "オリジナルのイラスト版A.C.E.ランクセット：III/II/Iディビジョン付きの10個のクリスタルエンブレム、レーティングプロトコル、Legend詳細カード、ドラッグで回転する3Dビューア。Premiumメンバー向けのプロフィールアートです。標準ランクと同じRating Pointsのラダーを読み取り、競技上の優位性は一切ありません。",
    demo: "デモ値：このボードの進捗、勝率、ディビジョンはサンプルで、ライブ統計ではありません。サインイン中は、表示されるレーティングが保存済みのレーティングです。",
    locked: "近日公開：決済はまだ存在しないため、現在Premiumのアカウントはありません。サーバーは保存されたプランがPremiumのプロフィールにのみプレミアムランクアートを適用します。",
    standardKicker: "標準ランク",
    standardNote: "すべてのアカウントがこの3Dベクターエンブレムを使います。",
    legendTag: "PREMIUM",
    pickerTitle: "プロフィールのランクアート",
    pickerStandard: "標準",
    pickerPremium: "プレミアム",
    pickerLocked: "プレミアムランクアートはA.C.E Premium（月額$7）向けです。近日公開：決済はまだ存在しません。",
    pickerSaved: "保存しました。",
    pickerFailed: "保存されませんでした。プレミアムランクアートにはA.C.E Premiumが必要です。",
  },
  "meta": {
    "title": "競技ランク",
    "description": "Iron Recruit から A.C.E. Legend までの A.C.E. の10ランク。ディビジョンとレーティング下限付き。"
  },
  "hero": {
    "kicker": "キャリブレーション",
    "title": "競技ランク",
    "lede": "Recruit から A.C.E. Legend までの10ティア。各ティアにディビジョン {divisions} があります。ドラッグするか矢印キーでエンブレムを回転できます。サインイン中は自分のレーティング、それ以外は各ティアの下限が表示されます。"
  },
  "codexLink": "キャリブレーション・コーデックスを開く",
  "document": {
    "title": "10ティアのキャリブレーション資料",
    "body": "エンジン名が公式ラダーです。クリスタル名はロビー用のアートです。ボード上の勝率チップは、ランクマッチング開始まではショーケース用の数値です。有料コスメティックでティアが変わることはありません。",
    "level": "レベル {level} · {crystal}",
    "detail": "最低レーティング {rating}。素材:{material}。"
  },
  "tiers": {
    "1": {
      "tagline": "エントリー・キャリブレーション",
      "material": "ロー・アイアン / オブシディアンのプレート質感"
    },
    "2": {
      "tagline": "フィールド・オペレーティブ",
      "material": "ブラッシュド・ブロンズのクリスタルコア"
    },
    "3": {
      "tagline": "フォワード・エッジ",
      "material": "深い赤みを帯びたローズゴールドの破片"
    },
    "4": {
      "tagline": "プレシジョン・クラフト",
      "material": "クロームシルバーのダイヤモンド結晶ブロック"
    },
    "5": {
      "tagline": "シーズンド・コア",
      "material": "エイジド・ブラスの溶融コアオーラ"
    },
    "6": {
      "tagline": "ゴールド・スタンダード",
      "material": "鮮やかなゴールドの結晶フレア"
    },
    "7": {
      "tagline": "シアン・アセント",
      "material": "シアンブルーのプラズマ結晶マトリクス"
    },
    "8": {
      "tagline": "サファイア・ストーム",
      "material": "強く輝くサファイアブルーの稲妻クリスタルコア"
    },
    "9": {
      "tagline": "ヴォイド・クラウン",
      "material": "深宇宙のヴォイドパープルの星屑コア"
    },
    "10": {
      "tagline": "エリート中のエリート",
      "material": "ラグジュアリーな溶融ゴールドの王冠フレーム"
    }
  },
  "board": {
    "selectEmblem": "A.C.E. {name} ランクエンブレム(レベル {level})を選択",
    "emblemAlt": "A.C.E. カスタム3Dクリスタル レベル {level} {crystal} {name} エンブレム・プロフィールバッジ",
    "emblemAltLegend": "A.C.E. カスタム3Dクリスタル レベル {level} エンブレム・プロフィールバッジ",
    "premium": "最上位ティア"
  },
  "division": {
    "label": "ディビジョン {division}",
    "select": "ディビジョン {division} を選択",
    "summary": "各 {divisions} ディビジョン / 計 {levels} レベル"
  },
  "card": {
    "rank": "ランク {level}",
    "targetWinRate": "目標勝率 {winRate}",
    "calibrationTarget": "キャリブレーション目標",
    "floor": "下限",
    "samplesNote": "各ティアの目標値。",
    "progressMockup": "進行状況"
  },
  "turntable": {
    "stageLabel": "{name} のオービタル・エンブレム。ドラッグで回転。",
    "dragToRotate": "ドラッグで回転",
    "rankSystem": "ランクシステム"
  },
  "emblem": {
    "kicker": "キャリブレーション・マーク",
    "rankLabel": "ランク {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} の配置マークが、保存済みの勝敗から埋まっています。これらのノードで試合が始まることはありません。"
  }
};
