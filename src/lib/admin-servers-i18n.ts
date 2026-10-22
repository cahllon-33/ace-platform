/** /admin/servers strings (admin is English/Hebrew only). */
export const SERVERS_EN = {
  nav: "Servers", kicker: "Game servers", title: "CS2 servers", back: "Command center",
  online: "Online", offline: "Offline", booting: "Booting", map: "Map", players: "Players", location: "Location", address: "Address",
  copy: "Copy", copied: "Copied", connect: "Connect", start: "Start", stop: "Stop", restart: "Restart", changeMap: "Change map", apply: "Apply",
  refresh: "Refresh status", working: "Working…", rcon: "RCON console", rconPh: "Type a command, e.g. status", send: "Send", log: "Console output",
  matches: "Recent matches", noMatches: "No DatHost matches recorded yet. Results arrive through the match webhook.",
  score: "Score", rp: "RP applied", yes: "Yes", no: "No", ownerOnly: "Owner Steam session required. Sign in with an ACE_ADMIN_STEAM_IDS account.",
  metamod: "Metamod / CounterStrikeSharp is off on this server; the AceBridge plugin needs it enabled in DatHost settings.",
  confirmStop: "Stop the server? Players on it will be disconnected.", bots: "bots", unknown: "unknown",
} as const;
export type ServersKey = keyof typeof SERVERS_EN;
export const SERVERS_HE: Record<ServersKey, string> = {
  nav: "שרתים", kicker: "שרתי משחק", title: "שרתי CS2", back: "מרכז הפיקוד",
  online: "פעיל", offline: "כבוי", booting: "עולה", map: "מפה", players: "שחקנים", location: "מיקום", address: "כתובת",
  copy: "העתקה", copied: "הועתק", connect: "התחברות", start: "הפעלה", stop: "עצירה", restart: "הפעלה מחדש", changeMap: "החלפת מפה", apply: "החלה",
  refresh: "רענון סטטוס", working: "מבצע…", rcon: "קונסולת RCON", rconPh: "הקלידו פקודה, למשל status", send: "שליחה", log: "פלט קונסולה",
  matches: "משחקים אחרונים", noMatches: "עדיין לא נרשמו משחקי DatHost. התוצאות מגיעות דרך ה-webhook.",
  score: "תוצאה", rp: "RP הוחל", yes: "כן", no: "לא", ownerOnly: "נדרש חיבור Steam של הבעלים. התחברו עם חשבון מ-ACE_ADMIN_STEAM_IDS.",
  metamod: "Metamod / CounterStrikeSharp כבוי בשרת זה; תוסף AceBridge דורש להפעיל אותו בהגדרות DatHost.",
  confirmStop: "לעצור את השרת? שחקנים מחוברים ינותקו.", bots: "בוטים", unknown: "לא ידוע",
};
