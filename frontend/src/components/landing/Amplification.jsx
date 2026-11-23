import { Container, CtaButton, Reveal } from "./ui";

const LOST = [
  "Le persone che potresti conoscere.",
  "Le amicizie che potrebbero nascere.",
  "Le fiere e gli eventi a cui vorresti partecipare.",
  "Le esperienze che potresti condividere.",
  "I progetti che vorresti finalmente realizzare.",
];

export const Amplification = () => (
  <section data-testid="amplification-section" className="relative border-t border-black/10 py-12 sm:py-20">
    <Container className="relative">
      <Reveal>
        <h2 data-testid="amplification-title" className="max-w-4xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          Il problema non è la mancanza di passione.
        </h2>
        <p className="mt-6 max-w-3xl font-display text-2xl font-bold leading-snug text-zinc-700 sm:text-3xl">
          È tutto quello che vorresti vivere, ma che continui a perderti.
        </p>
      </Reveal>

      <ul data-testid="lost-list" className="mt-10 border-t border-black/15">
        {LOST.map((l, i) => (
          <Reveal as="li" key={l} delay={i * 0.05} className="lost-row group">
            <span aria-hidden="true" className="slash-mini mt-3 shrink-0 sm:mt-4" />
            <span className="font-display text-xl font-bold leading-snug sm:text-3xl">{l}</span>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 grid gap-6 text-lg leading-relaxed text-zinc-700 lg:grid-cols-2 lg:gap-16">
        <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
          Perché avere una passione è una cosa. Avere le opportunità per viverla davvero è un'altra.
        </p>
        <div className="space-y-5">
          <p>E più tempo passa senza trovare le occasioni giuste, più esperienze rischiano di rimanere soltanto desideri.</p>
          <p className="font-semibold text-ink">Ma a volte basta fare il primo passo per iniziare a cambiare le cose.</p>
        </div>
      </Reveal>

      <div className="mt-10">
        <CtaButton id="amplificazione" />
      </div>
    </Container>
  </section>
);
