import { Container, CtaButton, Reveal } from "./ui";

export const FinalCta = () => (
  <section data-testid="final-section" className="ink-section relative overflow-hidden bg-ink py-24 text-white sm:py-32">
    <Container className="relative text-center">
      <Reveal>
        <span aria-hidden="true" className="slash mx-auto block" />
        <h2 data-testid="final-title" className="mx-auto mt-8 max-w-5xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          La tua prossima amicizia, esperienza o collaborazione potrebbe iniziare proprio da qui.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl font-display text-xl font-bold leading-snug text-zinc-200 sm:text-2xl">
          Oltre 500 appassionati di anime, manga e cosplay. Opportunità online e dal vivo. Una community in continua espansione.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Se anche tu desideri vivere la tua passione per anime, manga e cosplay, conoscere nuove persone e costruire amicizie autentiche in un ambiente sano e organizzato, la Toman Italiana è il posto giusto per te!
        </p>
      </Reveal>
      <div className="mt-12"><CtaButton id="finale" note align="center" dark /></div>
    </Container>
  </section>
);
