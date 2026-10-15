import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  rpRules: {
    "kicker": "A.C.E レーティングポイント規定",
    "title": "Rating Points の変動",
    "lede": "規定バージョン {version}。新規プレイヤーは全員、ティア3（{tier}）の {start} RP から始まります。ラダーは意図的にゆっくり進みます。中盤より上のティアは、前のティアより多くの勝利が必要です。",
    "tableTitle": "規定",
    "colRule": "項目",
    "colValue": "値",
    "rStart": "初期レーティング",
    "vStart": "{start} RP、ティア3（{tier}）",
    "rWin": "同格チームへの勝利",
    "vWin": "+{win} RP",
    "rLoss": "同格チームへの敗北",
    "vLoss": "−{loss} RP",
    "rOdds": "相手の強さ",
    "vOdds": "あなたのレーティングは相手チームの平均レーティングと比較されます（スケール {scale}）。格上に勝つと多く得て、負けても失う量は少なくなります。格下が相手なら逆です。",
    "rClamp": "1試合あたりの上限",
    "vClamp": "勝利は +{winMin}〜+{winMax} RP。敗北は −{lossMin}〜−{lossMax} RP。",
    "rTier": "上位ティアでの勝利",
    "vTier": "勝利時の獲得量はティア7〜9で ×{t7}、ティア10（{top}）で ×{t10} になります。敗北時の減少は軽減されません。",
    "rMvp": "試合MVP",
    "vMvp": "キル数が最多のプレイヤー。同数の場合はダメージが多い方、次にデス数が少ない方。勝利時 +{mvp} RP、敗北時は失う量が {mvp} RP 少なくなります。1試合の上限は超えません。近日対応：サーバーはまだキルを記録していないため、現在MVPボーナスは適用されません。",
    "rPlacement": "プレースメント",
    "vPlacement": "最初の {n} 試合。プレースメント中はティア{maxTier}（{cap} RP）を超えて上がりません。",
    "rDraw": "引き分け",
    "vDraw": "全員 0 RP。",
    "rAbandon": "試合の放棄・途中離脱",
    "vAbandon": "結果にかかわらず −{abandon} RP、MVPボーナスなし。",
    "rLimits": "レーティングの範囲",
    "vLimits": "{floor}〜{ceiling} RP",
    "rDecay": "非アクティブ",
    "vDecay": "減衰なし。プレイしていない間にレーティングは下がりません。",
    "rPaid": "有料プラン",
    "vPaid": "影響なし。Free・Plus・Premium のプレイヤーは完全に同じ規定で変動します。",
    "tierTableTitle": "ティア別（同格チーム相手）",
    "colTier": "ティア",
    "colFloor": "開始",
    "colWin": "勝利",
    "colLoss": "敗北",
    "examplesTitle": "計算例",
    "ex1": "同格チーム相手に勝ち続けた場合の {start} → {elite} RP（{top}）：ティア6まで +15 で {w1} 勝、ティア7〜9で +{win7} で {w2} 勝。合計 {total} 勝。",
    "ex2": "途中の敗北ごとに必要な勝利が増えます。ティア7〜9では勝利が +{win7} でも敗北は −{loss} のままなので、上がり続けるには互角の試合で少なくとも {breakEven}% 勝つ必要があります。",
    "ex3": "平均が自分より 200 RP 高いチーム相手では、勝利で +{strongWin}、敗北で −{strongLoss}。",
    "ex4": "平均が自分より 200 RP 低いチーム相手では、勝利で +{weakWin}、敗北で −{weakLoss}。",
    "note": "これらの数値は、検証済みの試合結果を適用するコードと同じコードで計算しています。保存された試合ではなく例です。"
  },
  premiumCodex: {
    "kicker": "プレミアムランク・コーデックス",
    "title": "プレミアムランク・コーデックス",
    "lede": "ランクごとに1つ、計10個のイラストのクリスタルエンブレム。標準ランクと同じRating Pointsラダー上の見た目だけのプロフィールアートです。レーティング、マッチメイキング、キューは変わりません。",
    "cosmetic": "見た目のアート · 同じRPラダー · A.C.E Premium 月額$7のみ",
    "imgAlt": "{name}のPremiumランクアート、レベル{level}"
  },
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
