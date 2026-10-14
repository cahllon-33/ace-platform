import Link from "next/link";
import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

const LETTER_CSS = `
.ace-letter { max-width: 46rem; margin: 0 auto; color: #f5f3ec; }
.ace-letter-kicker { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #d4af37; }
.ace-letter h1 { margin-top: 0.4rem; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 750; color: #ffd700; }
.ace-letter-flag { margin-top: 1rem; border: 1px solid rgba(212,175,55,0.45); border-radius: 0.9rem; background: #121214; padding: 0.9rem 1rem; color: #f5f3ec; line-height: 1.55; }
.ace-letter article { margin-top: 1.2rem; border: 1px solid rgba(212,175,55,0.35); border-radius: 1.1rem; background: linear-gradient(180deg, #141416, #0c0c0e); padding: 1.4rem 1.2rem 1.5rem; box-shadow: 0 18px 40px rgba(0,0,0,0.35); }
.ace-letter h2 { margin-top: 1.35rem; font-size: 1.05rem; color: #ffd700; }
.ace-letter p, .ace-letter li { color: #e7e2d6; line-height: 1.65; }
.ace-letter ul, .ace-letter ol { margin-top: 0.55rem; padding-inline-start: 1.15rem; }
.ace-letter li + li { margin-top: 0.4rem; }
.ace-letter a { color: #ffd700; text-decoration: underline; text-underline-offset: 0.15em; }
.ace-letter-go { display: inline-flex; margin-top: 1.3rem; min-height: 3rem; align-items: center; justify-content: center; border-radius: 999px; border: 1px solid #d4af37; background: #0b0b0c; color: #ffd700; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; padding: 0 1.3rem; text-shadow: 0 0 8px rgba(255, 215, 0, 0.9), 0 0 18px rgba(255, 215, 0, 0.45); box-shadow: inset 0 0 16px rgba(255, 215, 0, 0.28), 0 0 14px rgba(212, 175, 55, 0.22); }
`;

export async function MembershipLetter({
  planName,
  price,
  nextHref,
  nextLabel,
  nextBody,
}: {
  planName: string;
  price: string;
  nextHref: string;
  nextLabel: string;
  nextBody: string;
}) {
  const letter = (await getText()).pricing.letter;
  const values = { plan: planName, price };

  return (
    <main className="ace-letter px-4 py-14">
      <style>{LETTER_CSS}</style>
      <p className="ace-letter-kicker">{interpolate(letter.kicker, values)}</p>
      <h1>{letter.title}</h1>
      <p className="ace-letter-flag">{letter.flag}</p>
      <article>
        <p>{letter.greeting}</p>
        <p style={{ marginTop: "0.8rem" }}>{interpolate(letter.intro, values)}</p>

        <h2>{letter.selected.title}</h2>
        <ul>
          {letter.selected.items.map((item) => (
            <li key={item}>{interpolate(item, values)}</li>
          ))}
        </ul>

        <h2>{letter.today.title}</h2>
        <ul>
          {letter.today.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{letter.excluded.title}</h2>
        <ul>
          {letter.excluded.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{letter.trouble.title}</h2>
        <ol>
          {letter.trouble.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <h2>{letter.support.title}</h2>
        <p>
          {letter.support.addressBefore}
          <a href="mailto:support@ace-platform.gg">support@ace-platform.gg</a>
          {letter.support.addressAfter}
        </p>
        <p>
          {letter.support.helpBefore}
          <Link href="/support">{letter.support.supportLink}</Link>
          {letter.support.helpAnd}
          <Link href="/contact">{letter.support.contactLink}</Link>
          {letter.support.rulesBefore}
          <Link href="/rules">{letter.support.rulesLink}</Link>
          {letter.support.rulesAnd}
          <Link href="/terms">{letter.support.termsLink}</Link>
          {letter.support.helpAfter}
        </p>

        <h2>{letter.next.title}</h2>
        <p>{nextBody}</p>
        <Link className="ace-letter-go" href={nextHref}>
          {nextLabel}
        </Link>
      </article>
    </main>
  );
}
