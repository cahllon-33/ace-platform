import type { TextBag } from "../types";

export const consent: TextBag["consent"] = {
  "valveDisclaimer": "A.C.E は独立した Counter-Strike 2 の競技サイトです。Valve Corporation とは提携しておらず、承認や推奨も受けていません。Steam および Counter-Strike は各権利者の商標です。競技規約は A.C.E が同ゲーム向けに独自に作成したものです。",
  "acceptance": {
    "label": "利用規約、アンチチート EULA、プライバシーポリシーに明示的に同意します。",
    "readBefore": "確認:",
    "termsLink": "利用規約",
    "afterTerms": "、",
    "rulesLink": "ルール / EULA",
    "afterRules": "、",
    "privacyLink": "プライバシー",
    "after": "。"
  },
  "categories": {
    "legend": "Cookie の種類",
    "essential": "必須 Cookie",
    "required": "必須 / 固定",
    "analytics": "分析トラッカー",
    "marketing": "マーケティング・トラッカー",
    "optional": "任意"
  },
  "banner": {
    "kicker": "A.C.E サイトのお知らせ",
    "copy": {
      "before": "「同意」を押すと、このブラウザの Cookie 設定が保存されます。電子署名ではなく、端末のテレメトリを収集せず、アンチチート・クライアントを起動せず、競技キューも開きません。続行する前に",
      "termsLink": "利用規約",
      "afterTerms": "、",
      "rulesLink": "ルール",
      "afterRules": "、",
      "cookiePolicyLink": "Cookie ポリシー",
      "after": "をお読みください。"
    },
    "acceptLabel": "Cookie 設定に同意します。キューが開いたり、アンチチート・クライアントが起動したりすることはありません。",
    "accept": "Cookie 設定に同意 >",
    "rejectLabel": "任意の分析・マーケティング Cookie を拒否",
    "reject": "任意を拒否"
  },
  "settings": {
    "openLabel": "Cookie 設定を開く",
    "open": "Cookie 設定",
    "title": "Cookie 設定",
    "body": "Steam OpenID には必須のセッション Cookie が必要です。任意の分析・マーケティング設定はここにのみ保存されます。現在このサイトで広告や分析のスクリプトは動作していません。",
    "cookiePolicyLink": "Cookie ポリシー",
    "saveLabel": "Cookie 設定を保存",
    "save": "保存",
    "closeLabel": "Cookie 設定を閉じる",
    "close": "閉じる"
  },
  "subscriptionDisclosure": "サブスクリプションは解約するまでPaddle決済の月額プランとして続きます。「サブスクリプション管理」からいつでも解約でき、返金は返金ポリシー（14日）に従います。決済が未設定の間、決済ボタンには「近日公開」と表示されます。",
  "planned": {
    "fallbackLabel": "予定中の機能",
    "badge": "予定 — まだ利用できません"
  }
};
