const WORDS = ["Anime", "Manga", "Cosplay", "Toman Italiana"];

const Row = () => (
  <div className="marquee-row" aria-hidden="true">
    {[...WORDS, ...WORDS].map((w, i) => (
      <span key={i} className="flex items-center gap-8 pr-8">
        <span className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{w}</span>
        <span className="slash-mini" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div data-testid="marquee" className="marquee border-y border-black py-5 sm:py-6">
    <div className="marquee-track">
      <Row />
      <Row />
    </div>
  </div>
);
