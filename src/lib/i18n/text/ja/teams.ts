import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E. スクワッド管理",
    "description": "5v5 スクワッドのワークスペース。招待には検証済みの Steam セッションが必要です。アンチチートのチェックは A.C.E Shield とともに提供されます。"
  },
  "hero": {
    "kicker": "チーム",
    "title": "スクワッド",
    "lede": "5つの空席が並んでいます。クランは Steam サインインとチーム作成の後にのみ保存されます。"
  },
  "gate": {
    "kickerPremium": "プラン選択後のクラン記録",
    "kickerDefault": "クラン記録",
    "title": "5人のチームですか?",
    "intro": "席1は Steam でサインインしたプレイヤーです。席2〜5には既存の A.C.E. アカウントが必要です。クランを保存しても $7 は請求されず、メールも送信されず、100チームボードにも登録されません。",
    "yes": "はい、5人です",
    "no": "いいえ、席は空けておく",
    "seatsOpen": "5つの席は空いたままです。何も保存されていません。",
    "connectSteam": "まず Steam を連携してください。ボタンを押すとこのページに戻ります。A.C.E. が Steam のパスワードを求めることは決してありません。",
    "alreadyMember": "{name} は既に {team} に所属しています。このフォームから2つ目のクランは作成されません。",
    "thisAccount": "このアカウント",
    "acceptTerms": "クランを保存する前に規約に同意してください。",
    "notStored": "クランは保存されませんでした。",
    "clanName": "クラン名",
    "captainSeat": "席1、キャプテン:{name}",
    "signedInSteam": "サインイン中の Steam アカウント",
    "seatLabel": "席{seat}の SteamID または A.C.E. アカウントID",
    "submit": "5人のクランを保存",
    "saved": "クラン名を保存し、4件の招待が保留中です。各プレイヤーは承諾するまでロスターに入りません。これは100チームボードの席ではありません。請求は発生していません。"
  },
  "squadDesk": {
    "kicker": "スクワッド・デスク",
    "title": "ルールに関する質問",
    "intro": "このデスクは、このページに掲載された事実のみを参照します。チートの検出、試合の開始、アカウントの変更は行いません。",
    "questionLabel": "質問",
    "placeholder": "5つの枠、プラン、サポートについて質問",
    "ask": "質問する",
    "fallback": "この窓口はこのページに書かれたルールだけで回答します：プラン、5つの枠、Steam OpenID、サポート。",
    "facts": {
      "email": "メールは送信されません。プランの領収書はこのサイト上に残ります。",
      "charge": "Premiumは月額$7です。近日公開:決済はまだないため、何も請求されません。",
      "board": "保存されたクランはロスターの記録です。100チームボードには登録されません。シーズン開始までボードの登録数は 0 のままです。",
      "steam": "サインインには公式 Steam OpenID を使用します。A.C.E. が Steam のパスワードを求めることは決してありません。このページから Steam に移動すると、ここに戻ります。",
      "roster": "席1はサインイン中のキャプテンです。席2〜5には既存の A.C.E. アカウントが必要です。招待は各プレイヤーが承諾するまで保留されます。",
      "badge": "席のバッジは、アンチチートの開始後に実際の A.C.E Shield チェックになります。",
      "support": "このサイトのサポートまたはお問い合わせを開いてください。サポートのプロンプトでチケットは作成されず、お問い合わせに入力した内容も送信されません。",
      "rating": "新しいレーティングは 1,000 から始まります。このページでレーティングの販売、キューの開始、CS2 サーバーへの接続、賞品の提供は行いません。"
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "エントリーフラッガー",
      "lurker": "ラーカー",
      "igl": "IGL",
      "support": "サポート"
    },
    "rankLabel": "ランク {level}",
    "noAgents": "未所属のプレイヤーはまだ保存されていません。",
    "notice": "招待はサインイン中のキャプテンのみ送信できます。席のバッジは稼働中のアンチチートチェックではありません。"
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E. チャンピオンシップ — 100チーム・エリートノックアウト",
      "description": "100チームのノックアウト。クランをクリックするとロスターが開き、さらに各プレイヤーのプロフィールを開けます。参加登録はまもなく開始します。"
    },
    "intro": {
      "title": "A.C.E. チャンピオンシップ — 100チーム・エリートノックアウト",
      "lede": "公開している大会形式は100チームのノックアウトです。下の図がそのレイアウトです。クランをクリックするとロスターが開きます。登録数は 0 / 100 です。賞金の告知や用意はありません。",
      "formatValue": "100チーム・ブラケット",
      "briefTitle": "100チーム運営概要",
      "briefBody": "1つの競技レイアウトで100チーム全体をカバーします。参加受付開始後に承認された最初の28クランは1回戦免除で2回戦に進み、残りの72クランは1回戦を戦います。空き枠の名前は、クランが登録するまでの仮の表示です。ルールブック全文はブラケットの下にあります。マッチロビーは競技ベータとともに開始し、賞品は大会ごとに確定します。"
    },
    "timeline": {
      "ariaLabel": "大会開始までのタイムライン",
      "kicker": "チャンピオンシップ・ロードマップ",
      "title": "大会開始までのタイムライン",
      "stageLabel": "ステージ {id}",
      "stages": {
        "registrations": {
          "title": "参加登録",
          "state": "プレビュー"
        },
        "calibration": {
          "title": "地域キャリブレーション・ブラケット",
          "state": "ロック中"
        },
        "quarterFinals": {
          "title": "エリート・プロ準々決勝",
          "state": "ロック中"
        },
        "finals": {
          "title": "グランド・アペックス決勝",
          "state": "ロック中"
        }
      },
      "disclaimer": "参加登録が始まるとステージ01が最初に開き、ステージ02〜04が続きます。賞金プールは発表時に大会ページで確定します。"
    },
    "bracket": {
      "kicker": "100チーム・ノックアウト · まもなく開始",
      "title": "100チーム・ブラケット",
      "statusUnavailable": "参加登録はまもなく開始します。それまでブラケットにはプレビュー用のクランが表示されます。",
      "statusEmpty": "参加登録はまもなく開始します。それまでブラケットにはプレビュー用のクランが表示されます。",
      "statusStored": "登録済みの {count} クランが先に配置されます。残りの枠にはプレビュー用のクランが表示されます。以降のラウンドは試合の記録に応じて埋まります。",
      "openSlot": "空き枠",
      "openCompetitorSlot": "空いている参加枠",
      "openRoster": "{name} のロスターを開く",
      "bye": "👑 [シード — 2回戦から]",
      "championStage": "チャンピオン・ステージ",
      "leftWing": "左ブロック",
      "rightWing": "右ブロック",
      "emptySlotNotice": "この参加枠は空いています。クランはまだ保存されていません。",
      "grandFinalNotice": "グランドファイナルは両準決勝が記録されるまで空いたままです。",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "チームプロフィールを閉じる",
      "kicker": "チャンピオンシップ・プロフィール · プレビュー",
      "matchesPlayed": "試合数",
      "winRate": "合計勝率",
      "streak": "大会連勝",
      "rosterHeading": "5人ロスター",
      "openSeat": "空席 {seat}",
      "noPlayer": "保存されたプレイヤーなし",
      "previous": "前のクラン",
      "count": "クラン {index} / {total}",
      "next": "次のクラン",
      "close": "プロフィールを閉じる",
      "disclosure": "プレイヤーが共有を選ぶと、使用機材やインベントリがここに表示されます。A.C.E. はハードウェアデータを収集しません。"
    },
    "player": {
      "level": "LVL {level} · RP {rating}",
      "record": "勝–敗 {wins}–{losses}",
      "kdNotStored": "K/D 未保存",
      "openProfileAria": "{name} のプロフィールを開く",
      "openProfile": "プロフィールを開く",
      "badge": "準備完了 / アンチチート準拠",
      "badgeNote": "A.C.E Shield チェック · まもなく開始",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "マウス",
        "dpi": "DPI",
        "keyboard": "キーボード",
        "monitor": "モニター",
        "headset": "ヘッドセット"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · 非公開",
    "gpu": "GPU · 非公開",
    "mouse": "マウス · 非公開",
    "dpi": "DPI · 非公開",
    "keyboard": "非公開",
    "monitor": "リフレッシュレート · 非公開",
    "headset": "非公開"
  },
  "profileDisclosure": "A.C.E. はハードウェアのインベントリを保存せず、アンチチート・クライアントも実行しません。パフォーマンス推移グラフと戦闘データには A.C.E. Plus または Premium のセッションが必要です。このページに入力した Steam プロフィールのリンクは保存されず、公式のハンドルではありません。",
  "errors": {
    "signInRequired": "サインインが必要です。",
    "nameLength": "チーム名は2〜32文字にしてください。",
    "alreadyCaptain": "このアカウントは既にチームのキャプテンです。",
    "nameTaken": "その名前のチームは既に存在します。",
    "idRequired": "SteamID または A.C.E. アカウントIDが必要です。",
    "noAccountForToken": "その SteamID またはアカウントIDの A.C.E. アカウントは存在しません。",
    "clanNeedsFour": "5人のクランには、サインイン中のキャプテンと4つの SteamID が必要です。",
    "seatNeedsId": "4つの席それぞれに SteamID または A.C.E. アカウントIDが必要です。",
    "seatsDistinct": "各席には異なるプレイヤーが必要です。",
    "captainHoldsSeat": "キャプテンは既に席1にいます。他の4人のプレイヤーを指定してください。",
    "fewerThanFour": "指定したIDに該当するアカウントが4件未満です。",
    "selfInvite": "キャプテンは自分のアカウントを招待できません。",
    "captainOnly": "招待を送信できるのは指定されたキャプテンのみです。",
    "rosterLimit": "CS2 のロスターはキャプテンを含む5人です。",
    "alreadyOnRoster": "そのプレイヤーは既にロスターにいます。",
    "noAccountForId": "そのIDの A.C.E. アカウントは存在しません。",
    "inviteNotFound": "招待が見つかりません。",
    "inviteNotPending": "この招待は既に保留中ではありません。",
    "rosterFull": "ロスターは既に満員です。",
    "createFailed": "チームを作成できませんでした。",
    "inviteFailed": "招待に失敗しました。",
    "updateInviteFailed": "招待を更新できませんでした。"
  }
};
