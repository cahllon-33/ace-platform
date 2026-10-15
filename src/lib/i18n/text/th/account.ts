import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  "dashboard": {
    "meta": {
      "title": "Command Deck"
    },
    "kicker": "ยืนยันตัวตนแล้ว",
    "title": "Command Deck",
    "lede": "ลงชื่อเข้าใช้ผ่าน Steam OpenID เซสชันอยู่ในคุกกี้ HttpOnly ไม่ใช่ localStorage การค้นหาจัดอันดับยังปิดอยู่จนกว่าจะมี Anti-Cheat จริง",
    "eliteBadge": "ELITE",
    "stats": {
      "accountStatus": "สถานะบัญชี",
      "subscription": "การสมัครสมาชิก",
      "rank": "อันดับ A.C.E.",
      "ratingPoints": "คะแนนเรตติ้ง",
      "wins": "ชนะ",
      "losses": "แพ้",
      "accountId": "ID บัญชีภายใน"
    },
    "accountStatuses": {
      "ACTIVE": "ใช้งานอยู่",
      "SUSPENDED": "ถูกระงับ",
      "BANNED": "ถูกแบน",
      "TEMP_BANNED": "ถูกแบนชั่วคราว",
      "PERM_BANNED": "ถูกแบนถาวร",
      "UNDER_REVIEW": "อยู่ระหว่างตรวจสอบ"
    },
    "tiers": {
      "FREE": "Free",
      "PLUS": "Plus",
      "PREMIUM": "Premium"
    },
    "roles": {
      "CAPTAIN": "กัปตัน",
      "PLAYER": "ผู้เล่น"
    },
    "settings": {
      "title": "โปรไฟล์การตั้งค่าแดชบอร์ด",
      "billingNotLive": "ทุกบัญชีอยู่ใน Free จนกว่าจะมีระบบชำระเงิน",
      "cancelReason": "ไม่มีการสมัครสมาชิกที่เรียกเก็บเงินให้ยกเลิก ยังไม่มีระบบชำระเงิน",
      "cancelButton": "ยกเลิกการสมัครสมาชิก"
    },
    "rankedReason": "การจับคู่จัดอันดับถูกปฏิเสธจนกว่าจะมีการเชื่อมต่อ Anti-Cheat ที่ยืนยันแล้ว",
    "rankedButton": "หาแมตช์จัดอันดับ",
    "roster": {
      "title": "รายชื่อ 5v5",
      "body": "กัปตันหนึ่งคน คำเชิญสี่รายการ กัปตันเชิญ ID บัญชี A.C.E. อื่น ซึ่งสร้างขึ้นหลังการเข้าสู่ระบบ Steam ที่ยืนยันแล้วเท่านั้น"
    },
    "pendingInvites": "คำเชิญที่รออยู่"
  },
  "forms": {
    "requestFailed": "คำขอล้มเหลว",
    "createTeam": {
      "acceptRequired": "ยอมรับข้อกำหนดการให้บริการ Anti-Cheat EULA และนโยบายความเป็นส่วนตัวเพื่อดำเนินการต่อ",
      "failed": "ไม่สามารถสร้างทีมได้",
      "nameLabel": "ชื่อทีม 5v5 ใหม่",
      "submitAria": "ก่อตั้งทีม 5v5 ใหม่",
      "submit": "ก่อตั้งทีม"
    },
    "invite": {
      "failed": "การเชิญล้มเหลว",
      "label": "เชิญผู้เล่นอิสระผ่าน SteamID หรือ ID บัญชี A.C.E.",
      "submitAria": "ส่งคำเชิญเข้าทีม",
      "submit": "ส่งคำเชิญ"
    }
  },
  "profile": {
    "meta": {
      "notFoundTitle": "โปรไฟล์ผู้เล่น",
      "title": "{name} · โปรไฟล์ A.C.E.",
      "description": "แฟ้มผู้เล่น A.C.E. เซสชัน Plus และ Premium จะปลดล็อกกราฟแนวโน้มเทเลเมทรี"
    },
    "kicker": "ตัวตนผู้เล่น",
    "bannerPlaceholder": "แบนเนอร์โปรไฟล์ · เร็ว ๆ นี้",
    "levelBadge": "ระดับ {level}",
    "premiumBadge": "PREMIUM",
    "rosterLevel": "ระดับรายชื่อ {level}",
    "trend": {
      "title": "แนวโน้มผลงานเรตติ้งการแข่งขัน",
      "note": "คะแนนเรตติ้งตลอดบันทึกประวัติแมตช์ต่อเนื่อง"
    },
    "combat": {
      "title": "เมทริกซ์ข้อมูลการต่อสู้โดยละเอียด",
      "kills": "สังหารทั้งหมด",
      "deaths": "ตายทั้งหมด",
      "kd": "K/D ที่คำนวณ",
      "headshots": "เฮดช็อตทั้งหมด",
      "headshotPct": "ช่วง % เฮดช็อต",
      "knifeKills": "สังหารด้วยมีดพิเศษ"
    },
    "weapon": {
      "title": "ความถนัดอาวุธประจำตัว",
      "note": "แพลตฟอร์มอาวุธหลักที่ปรับแล้ว",
      "accuracy": "คะแนนความแม่นยำ",
      "kills": "สังหารด้วยอาวุธทั้งหมด"
    },
    "gear": {
      "title": "สเปกเดสก์ท็อป",
      "cpu": "CPU",
      "gpu": "GPU",
      "monitor": "อัตรารีเฟรชจอภาพ (Hz)",
      "mouse": "รุ่นเมาส์",
      "dpi": "การตั้งค่า DPI ที่ใช้"
    },
    "networksTitle": "ลิงก์โปรไฟล์ Steam",
    "back": "กลับไปที่รายชื่อแคลน"
  },
  "networks": {
    "note": "ลิงก์ที่พิมพ์ที่นี่อยู่ในเบราว์เซอร์นี้และไม่ถูกบันทึก A.C.E. ไม่เคยขอรหัสผ่าน Steam",
    "labels": {
      "steam": "โปรไฟล์ Steam"
    },
    "open": "เปิด {label} >"
  },
  "ratingTrend": {
    "chartAria": "แนวโน้มผลงานเรตติ้งการแข่งขัน",
    "pointAria": "แมตช์ {match}: เรตติ้ง {rating}",
    "axisLabel": "M{match}",
    "idle": "วางเมาส์บนโหนดเพื่อดูบันทึกเรตติ้ง",
    "readout": "แมตช์ {match} · เรตติ้ง {rating}"
  },
  "loginError": {
    "meta": {
      "title": "ข้อผิดพลาดในการลงชื่อเข้าใช้"
    },
    "title": "การลงชื่อเข้าใช้ Steam ไม่สำเร็จ",
    "notConfigured": "ยังไม่ได้ตั้งค่า Steam OpenID บนเซิร์ฟเวอร์นี้ A.C.E. ไม่เคยขอรหัสผ่าน Steam",
    "unavailable": "Steam ไม่ตอบคำขอยืนยัน ลองอีกครั้งในอีกสักครู่ A.C.E. ไม่เคยขอรหัสผ่าน Steam",
    "unverified": "ไม่สามารถยืนยัน callback ของ OpenID บนเซิร์ฟเวอร์ได้ A.C.E. ไม่เคยขอรหัสผ่าน Steam",
    "returnHome": "กลับหน้าแรก"
  }
};
