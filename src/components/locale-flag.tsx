import type { ReactNode } from "react";

function FlagFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      className="ace-lang-flag"
      viewBox="0 0 24 16"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="24" height="16" rx="1.2" fill="#121212" />
      {children}
      <rect
        x="0.35"
        y="0.35"
        width="23.3"
        height="15.3"
        rx="1"
        fill="none"
        stroke="#C9A24A"
        strokeWidth="0.75"
      />
    </svg>
  );
}

export function LocaleFlag({ code }: { code: string }) {
  switch (code) {
    case "il":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#fff" />
          <rect y="2.2" width="24" height="2.2" fill="#0038b8" />
          <rect y="11.6" width="24" height="2.2" fill="#0038b8" />
          <polygon
            points="12,5.1 13.3,8.4 16.8,8.4 13.9,10.4 15,13.6 12,11.6 9,13.6 10.1,10.4 7.2,8.4 10.7,8.4"
            fill="none"
            stroke="#0038b8"
            strokeWidth="0.7"
          />
        </FlagFrame>
      );
    case "us":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#bf0a30" />
          <rect y="1.45" width="24" height="1.45" fill="#fff" />
          <rect y="4.35" width="24" height="1.45" fill="#fff" />
          <rect y="7.25" width="24" height="1.45" fill="#fff" />
          <rect y="10.15" width="24" height="1.45" fill="#fff" />
          <rect y="13.05" width="24" height="1.45" fill="#fff" />
          <rect width="10" height="8.7" fill="#002868" />
        </FlagFrame>
      );
    case "sa":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#006c35" />
          <rect x="5" y="6.2" width="14" height="1.4" fill="#fff" />
          <rect x="10.6" y="8.4" width="2.8" height="4.2" fill="#fff" />
        </FlagFrame>
      );
    case "ru":
      return (
        <FlagFrame>
          <rect width="24" height="5.4" fill="#fff" />
          <rect y="5.4" width="24" height="5.4" fill="#0039a6" />
          <rect y="10.8" width="24" height="5.2" fill="#d52b1e" />
        </FlagFrame>
      );
    case "es":
      return (
        <FlagFrame>
          <rect width="24" height="4" fill="#aa151b" />
          <rect y="4" width="24" height="8" fill="#B8892E" />
          <rect y="12" width="24" height="4" fill="#aa151b" />
        </FlagFrame>
      );
    case "br":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#009b3a" />
          <polygon points="12,2.2 21.4,8 12,13.8 2.6,8" fill="#C9A24A" />
          <circle cx="12" cy="8" r="2.6" fill="#002776" />
        </FlagFrame>
      );
    case "fr":
      return (
        <FlagFrame>
          <rect width="8" height="16" fill="#002395" />
          <rect x="8" width="8" height="16" fill="#fff" />
          <rect x="16" width="8" height="16" fill="#ed2939" />
        </FlagFrame>
      );
    case "cn":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#de2910" />
          <polygon
            points="4.6,3.2 5.4,5.6 8,5.6 5.9,7.1 6.7,9.5 4.6,8 2.5,9.5 3.3,7.1 1.2,5.6 3.8,5.6"
            fill="#C9A24A"
          />
        </FlagFrame>
      );
    case "jp":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#fff" />
          <circle cx="12" cy="8" r="3.6" fill="#bc002d" />
        </FlagFrame>
      );
    case "in":
      return (
        <FlagFrame>
          <rect width="24" height="5.4" fill="#ff9933" />
          <rect y="5.4" width="24" height="5.4" fill="#fff" />
          <rect y="10.8" width="24" height="5.2" fill="#138808" />
          <circle cx="12" cy="8.1" r="1.7" fill="none" stroke="#000080" strokeWidth="0.6" />
        </FlagFrame>
      );
    case "eg":
      return (
        <FlagFrame>
          <rect width="24" height="5.4" fill="#ce1126" />
          <rect y="5.4" width="24" height="5.4" fill="#fff" />
          <rect y="10.8" width="24" height="5.2" fill="#000" />
          <polygon
            points="12,6.4 12.6,8.1 14.4,8.1 12.9,9.1 13.5,10.8 12,9.8 10.5,10.8 11.1,9.1 9.6,8.1 11.4,8.1"
            fill="#8A6A2B"
          />
        </FlagFrame>
      );
    case "se":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#006aa7" />
          <rect x="7" width="3.2" height="16" fill="#C9A24A" />
          <rect y="6.4" width="24" height="3.2" fill="#C9A24A" />
        </FlagFrame>
      );
    case "de":
      return (
        <FlagFrame>
          <rect width="24" height="5.4" fill="#000" />
          <rect y="5.4" width="24" height="5.4" fill="#dd0000" />
          <rect y="10.8" width="24" height="5.2" fill="#C9A24A" />
        </FlagFrame>
      );
    case "ua":
      return (
        <FlagFrame>
          <rect width="24" height="8" fill="#005bbb" />
          <rect y="8" width="24" height="8" fill="#C9A24A" />
        </FlagFrame>
      );
    case "th":
      return (
        <FlagFrame>
          <rect width="24" height="2.6" fill="#a51931" />
          <rect y="2.6" width="24" height="2.6" fill="#fff" />
          <rect y="5.2" width="24" height="5.6" fill="#2d2a4a" />
          <rect y="10.8" width="24" height="2.6" fill="#fff" />
          <rect y="13.4" width="24" height="2.6" fill="#a51931" />
        </FlagFrame>
      );
    case "ro":
      return (
        <FlagFrame>
          <rect width="8" height="16" fill="#002b7f" />
          <rect x="8" width="8" height="16" fill="#C9A24A" />
          <rect x="16" width="8" height="16" fill="#ce1126" />
        </FlagFrame>
      );
    case "tr":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#e30a17" />
          <circle cx="9.2" cy="8" r="3.1" fill="#fff" />
          <circle cx="10.3" cy="8" r="2.4" fill="#e30a17" />
          <polygon
            points="14.6,8 16.4,8.6 15.7,6.8 17.2,5.8 15.3,5.9 14.6,4.2 13.9,5.9 12,5.8 13.5,6.8 12.8,8.6"
            fill="#fff"
          />
        </FlagFrame>
      );
    case "pl":
      return (
        <FlagFrame>
          <rect width="24" height="8" fill="#fff" />
          <rect y="8" width="24" height="8" fill="#dc143c" />
        </FlagFrame>
      );
    case "kr":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#fff" />
          <circle cx="12" cy="8" r="3.1" fill="#cd2e3a" />
          <path d="M12 4.9a3.1 3.1 0 0 1 0 6.2 1.55 1.55 0 0 1 0-3.1 1.55 1.55 0 0 0 0-3.1z" fill="#0047a0" />
        </FlagFrame>
      );
    case "pt":
      return (
        <FlagFrame>
          <rect width="9" height="16" fill="#006600" />
          <rect x="9" width="15" height="16" fill="#ff0000" />
          <circle cx="9" cy="8" r="2.3" fill="#C9A24A" />
        </FlagFrame>
      );
    case "cz":
      return (
        <FlagFrame>
          <rect width="24" height="8" fill="#fff" />
          <rect y="8" width="24" height="8" fill="#d7141a" />
          <polygon points="0,0 11,8 0,16" fill="#11457e" />
        </FlagFrame>
      );
    case "fi":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#fff" />
          <rect x="6.5" width="4" height="16" fill="#003580" />
          <rect y="6" width="24" height="4" fill="#003580" />
        </FlagFrame>
      );
    case "id":
      return (
        <FlagFrame>
          <rect width="24" height="8" fill="#ce1126" />
          <rect y="8" width="24" height="8" fill="#fff" />
        </FlagFrame>
      );
    case "hu":
      return (
        <FlagFrame>
          <rect width="24" height="5.4" fill="#ce2939" />
          <rect y="5.4" width="24" height="5.4" fill="#fff" />
          <rect y="10.8" width="24" height="5.2" fill="#477050" />
        </FlagFrame>
      );
    case "hr":
      return (
        <FlagFrame>
          <rect width="24" height="5.4" fill="#ff0000" />
          <rect y="5.4" width="24" height="5.4" fill="#fff" />
          <rect y="10.8" width="24" height="5.2" fill="#171796" />
          <rect x="8.2" y="5.2" width="7.6" height="5.6" fill="#fff" stroke="#171796" strokeWidth="0.4" />
        </FlagFrame>
      );
    case "mk":
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#d20000" />
          <circle cx="12" cy="8" r="2.1" fill="#C9A24A" />
          <rect x="11.35" y="1.2" width="1.3" height="4.2" fill="#C9A24A" />
          <rect x="11.35" y="10.6" width="1.3" height="4.2" fill="#C9A24A" />
          <rect x="1.4" y="7.35" width="4.4" height="1.3" fill="#C9A24A" />
          <rect x="18.2" y="7.35" width="4.4" height="1.3" fill="#C9A24A" />
        </FlagFrame>
      );
    default:
      return (
        <FlagFrame>
          <rect width="24" height="16" fill="#121212" />
        </FlagFrame>
      );
  }
}
