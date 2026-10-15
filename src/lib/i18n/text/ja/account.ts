import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "コマンドデッキ"
    },
    "kicker": "認証済み",
    "title": "コマンドデッキ",
    "lede": "Steam OpenID でサインインしています。セッションは localStorage ではなく HttpOnly Cookie に保存されます。本物のアンチチートが稼働するまで、ランク検索は停止中です。",
    "eliteBadge": "エリート",
    "stats": {
      "accountStatus": "アカウント状態",
      "subscription": "サブスクリプション",
      "rank": "A.C.E. ランク",
      "ratingPoints": "レーティングポイント",
      "wins": "勝利",
      "losses": "敗北",
      "accountId": "内部アカウントID"
    },
    "accountStatuses": {
      "ACTIVE": "有効",
      "SUSPENDED": "停止中",
      "BANNED": "BAN済み",
      "TEMP_BANNED": "一時BAN",
      "PERM_BANNED": "永久BAN",
      "UNDER_REVIEW": "審査中"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "キャプテン",
      "PLAYER": "プレイヤー"
    },
    "settings": {
      "title": "ダッシュボード設定プロフィール",
      "billingNotLive": "決済が実装されるまで、すべてのアカウントはFreeです。",
      "cancelReason": "解約できる有料サブスクリプションはありません。決済は実装されていません。",
      "cancelButton": "サブスクリプションを解約"
    },
    "rankedReason": "検証済みのアンチチート連携ができるまで、ランクマッチングは利用できません。",
    "rankedButton": "ランクマッチを探す",
    "roster": {
      "title": "5v5 ロスター",
      "body": "キャプテン1名、招待4名。キャプテンは他の A.C.E. アカウントIDを招待できます。アカウントIDは Steam ログインの検証後にのみ作成されます。"
    },
    "pendingInvites": "保留中の招待"
  },
  "forms": {
    "requestFailed": "リクエストに失敗しました。",
    "createTeam": {
      "acceptRequired": "続行するには、利用規約、アンチチート EULA、プライバシーポリシーに同意してください。",
      "failed": "チームを作成できませんでした。",
      "nameLabel": "新しい 5v5 チーム名",
      "submitAria": "新しい 5v5 チームを結成",
      "submit": "チームを結成"
    },
    "invite": {
      "failed": "招待に失敗しました。",
      "label": "SteamID または A.C.E. アカウントIDでフリーエージェントを招待",
      "submitAria": "チーム招待を送信",
      "submit": "招待を送信"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "プレイヤープロフィール",
      "title": "{name} · A.C.E. プロフィール",
      "description": "A.C.E. プレイヤー資料。Plus と Premium のセッションではテレメトリの推移グラフが表示されます。"
    },
    "kicker": "プレイヤーID",
    "bannerPlaceholder": "プロフィールバナー · まもなく開始",
    "levelBadge": "レベル {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "ロスターレベル {level}。",
    "trend": {
      "title": "競技レーティングの推移",
      "note": "連続する試合履歴ごとのレーティングポイント。"
    },
    "combat": {
      "title": "詳細な戦闘データ",
      "kills": "総キル数",
      "deaths": "総デス数",
      "kd": "算出 K/D",
      "headshots": "総ヘッドショット数",
      "headshotPct": "ヘッドショット率の範囲",
      "knifeKills": "特殊ナイフキル"
    },
    "weapon": {
      "title": "シグネチャー武器の特化",
      "note": "メインのキャリブレーション武器",
      "accuracy": "命中率評価",
      "kills": "武器別総キル数"
    },
    "gear": {
      "title": "PCスペック",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "モニターのリフレッシュレート(Hz)",
      "mouse": "マウスのモデル",
      "dpi": "現在のDPI設定"
    },
    "networksTitle": "Steam プロフィールのリンク",
    "back": "クランのロスターに戻る"
  },
  "networks": {
    "note": "ここに入力したリンクはこのブラウザ内にのみ残り、保存されません。A.C.E. が Steam のパスワードを求めることは決してありません。",
    "labels": {
      "steam": "Steam プロフィール"
    },
    "open": "{label} を開く >"
  },
  "ratingTrend": {
    "chartAria": "競技レーティングの推移",
    "pointAria": "試合 {match}:レーティング {rating}",
    "axisLabel": "M{match}",
    "idle": "ノードにカーソルを合わせるとレーティング記録を確認できます。",
    "readout": "試合 {match} · レーティング {rating}"
  },
  "loginError": {
    "meta": {
      "title": "サインインエラー"
    },
    "title": "Steam サインインが完了しませんでした",
    "notConfigured": "このサーバーではまだ Steam OpenID が設定されていません。A.C.E. が Steam のパスワードを求めることは決してありません。",
    "unavailable": "Steam が確認リクエストに応答しませんでした。しばらくしてからもう一度お試しください。A.C.E. が Steam のパスワードを求めることは決してありません。",
    "unverified": "サーバーで OpenID のコールバックを検証できませんでした。A.C.E. が Steam のパスワードを求めることは決してありません。",
    "returnHome": "ホームに戻る"
  }
};
