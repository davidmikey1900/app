const PHRASES = [
  "FAI NUOVE AMICIZIE",
  "VIVI ESPERIENZE INDIMENTICABILI",
  "UNA COMMUNITY SANA, DOVE IL RISPETTO CONTA",
  "REALIZZA I TUOI PROGETTI",
];

const Row = ({ hidden }) => (
  <ul className="marquee-row" aria-hidden={hidden || undefined}>
    {[...PHRASES, ...PHRASES].map((w, i) => (
      <li key={i} className="flex items-center gap-7 pr-7 sm:gap-10 sm:pr-10">
        <span className="whitespace-nowrap font-display text-2xl font-extrabold tracking-tight sm:text-4xl">{w}</span>
        <span aria-hidden="true" className="slash-mini" />
      </li>
    ))}
  </ul>
);

export const Marquee = () => (
  <div data-testid="marquee" className="marquee border-y border-black py-4 sm:py-5">
    <div className="marquee-track">
      <Row hidden />
      <Row hidden />
    </div>
  </div>
);
