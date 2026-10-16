import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "liveStats": {
    "kicker": "ライブ",
    "online": "現在オンライン",
    "registered": "登録プレイヤー",
    "earlyTitle": "アーリーアクセス",
    "earlyBody": "A.C.E.の最初のプレイヤーになろう。コミュニティが成長するとライブ数がここに表示されます。",
    "unavailable": "現在ライブ数を表示できません。",
    "note": "実際の数値、30秒ごとに更新。"
  },
  "ops": {
    "identityKicker": "アイデンティティハブ",
    "signedOutTitle": "Steamでサインイン",
    "signedOutBody": "公式のSteam OpenIDで接続すると、ここにSteamアバター、ランクエンブレム、Rating Pointsが表示されます。A.C.E.がSteamのパスワードを求めることはありません。",
    "connect": "Steamでサインイン",
    "openDeck": "Command Deckを開く",
    "avatarAlt": "{name}のSteamアバター",
    "emblemAlt": "{rank}のランクエンブレム",
    "rp": "Rating Points",
    "wins": "勝利",
    "losses": "敗北",
    "winRate": "勝率",
    "matches": "試合数",
    "kd": "K/D",
    "na": "n/a",
    "kdNote": "A.C.E.はまだキルとデスを記録していないため、K/Dはn/aと表示されます。",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "開発中",
    "shieldTitle": "インテグリティ状況",
    "shieldBody": "A.C.E Shieldは開発中です。現在は何もインストール、スキャン、監視されていないため、どのアカウントにも判定はありません。",
    "shieldClient": "アンチチートクライアント",
    "shieldClientValue": "未リリース",
    "shieldServer": "マッチサーバー",
    "shieldServerValue": "未接続",
    "shieldHardware": "ハードウェアスキャン",
    "shieldHardwareValue": "収集していません",
    "shieldLink": "A.C.E Shieldの仕組み",
    "seasonKicker": "シーズン1",
    "seasonChip": "日程未発表",
    "seasonTitle": "シーズン1トラッカー",
    "seasonBody": "シーズン1にはまだ開始日も終了日もないため、カウントダウンはありません。日程はシーズン開始前にこのサイトで発表します。",
    "statsKicker": "あなたの統計",
    "statsSignedOut": "Steamでサインインすると統計が表示されます。",
    "statsEmpty": "記録された試合はまだありません。最初のA.C.E.の試合が記録されると勝敗が表示されます。",
    "statsLive": "勝敗は保存されたA.C.E.アカウントから取得しています。",
    "statsLink": "プレイヤー統計を開く"
  },
  "meta": {
    "title": "A.C.E. — CS2 競技プラットフォーム",
    "description": "A.C.E. は、プレイヤーID、キャリブレーション、チーム、トーナメントのための Counter-Strike 2 競技プラットフォームとして計画中です。この公開サイトはプレビューです。ランクマッチング、アンチチート、決済、賞品はまだ稼働していません。"
  },
  "opening": {
    "dialogLabel": "A.C.E. オープニング",
    "line": "A.C.E:自律型アンチチート、競技キャリブレーション、エリートプレイヤー",
    "enter": "サイトに入る"
  },
  "hero": {
    "logoAlt": "A.C.E. 自律型アンチチート、競技キャリブレーション、エリートプレイヤー",
    "arenaAlt": "A.C.E. アリーナのイメージ。オリジナルのステージ画像で、Valve のアートではありません。スクリーンには「ゲームテレビ」と表示されています。ライブ配信は現在ありません。"
  },
  "broadcast": {
    "kicker": "トーナメント視聴",
    "title": "配信デスク",
    "lede": "競技マッププールはこちら:Dust II、Mirage、Inferno、Nuke、Ancient、Anubis、Train。いずれもオリジナルのイメージです。現在放送中の大会はなく、このページで Valve の試合は再生されません。",
    "offAir": "放送休止 · {map}"
  },
  "jumpNav": {
    "label": "ホームのカテゴリー",
    "play": "プレイ",
    "prizes": "賞品",
    "teams": "チーム",
    "leaderboard": "リーダーボード",
    "ranks": "ランク",
    "systems": "システム"
  },
  "charter": {
    "kicker": "マスターロビー・ワークスペース",
    "title": "A.C.E. 競技マッチメイキング・ロビー&ディスパッチセンター",
    "badge": "サーバー · まもなく開始",
    "lede": "このロビーはサーバーの割り当て、アンチチート・クライアントの起動、賞品の支払いを行いません。",
    "modules": [
      {
        "kicker": "マッチ成立 · 5v5",
        "copy": "このページの 5v5 フレームは閉じたキューです。サーバーは割り当てられません。",
        "chips": [
          "128ティックサーバーなし",
          "キュー停止中"
        ]
      },
      {
        "kicker": "固定3Dランク",
        "copy": "Recruit から A.C.E. Legend までの10ティア。保存済みレーティングは Steam サインイン後に表示されます。このページで試合結果が反映されることはありません。",
        "chips": [
          "レーティング規則あり",
          "このページのターンテーブル"
        ]
      },
      {
        "kicker": "スキン報酬",
        "copy": "チャンピオンシップ報酬は大会ごとに発表されます。",
        "chips": [
          "アイテムの配送なし",
          "ドロップ判定なし"
        ]
      }
    ]
  },
  "identity": {
    "elite": "エリート"
  },
  "membership": {
    "compareLink": "比較表をすべて見る"
  },
  "loot": {
    "wear": {
      "factoryNew": "Factory New",
      "minimalWear": "Minimal Wear"
    }
  },
  "serverHub": {
    "badge": "ゲームサーバー · まもなく開始",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}。サーバーはまもなく開始。",
    "note": "128ティックの地域サーバーは競技ベータとともに提供されます。"
  },
  "telemetry": {
    "badge": "プレビュー · まもなく開始",
    "lines": [
      "A.C.E SHIELD:開発中",
      "ハードウェアBANマトリクス:識別子は収集しません",
      "A.C.E. SHIELD 連携:クライアントはインストールされていません"
    ],
    "note": "このサイトはカーネル・クライアントを実行せず、メモリをスキャンせず、ハードウェアBANも行いません。"
  },
  "comingSoon": {
    "badge": "利用不可",
    "body": "A.C.E. デスクトップクライアントはダウンロード提供していません。このサイトのシーズン1でソフトウェアのインストールやチェックインは行われません。"
  },
  "operative": {
    "kicker": "シネマティックな戦術ビューポート · オリジナルCSS環境 · Valve のアートではありません",
    "title": "CS2 をもっと深く:究極の競技プラットフォーム",
    "lede": "より公平な試合、より良いチームメイト。意味のあるランク、価値のある報酬。",
    "note": "キャンペーン用のコピーです。ランクキュー、稼働中のサーバー、賞品はまだ提供されていません。"
  },
  "howStatus": {
    "label": "A.C.E. 登録サブシステム — キャリブレーション・エンジン準備完了",
    "note": "ランクキューは A.C.E Shield とキャリブレーションの稼働とともに開始します。"
  },
  "shell": {
    "primaryNav": "メイン",
    "mobileNav": "モバイル",
    "elite": "エリート",
    "notificationsTitle": "通知 · まもなく開始",
    "notificationsAria": "通知。未読 0 件。",
    "connectProfileTitle": "プロフィールを連携",
    "openProfileAria": "コマンドデッキのプロフィールを開く",
    "connectProfileAria": "Steam OpenID でプロフィールを連携",
    "signOutAria": "A.C.E. からサインアウト"
  },
  "notFound": {
    "kicker": "グリッド例外",
    "title": "エラー 404 — レーダーテレメトリ消失",
    "body": "リクエストされた座標は、稼働中のサーバーグリッドに存在しません。",
    "homeAria": "A.C.E. ホームのロビーに戻る",
    "cta": "ロビーに戻る"
  },
  "error": {
    "kicker": "エラー",
    "title": "問題が発生しました",
    "body": "この公開ページを表示できませんでした。もう一度お試しください。このプレビューサイトでアカウントデータは要求されていません。",
    "retryAria": "このページを再読み込み",
    "retry": "再試行"
  }
};
