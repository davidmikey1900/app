import { Container, CtaButton, Reveal } from "./ui";

export const FinalCta = () => (
  <section data-testid="final-section" className="relative border-t border-black/10 pb-10 pt-12 sm:pb-16 sm:pt-20">
    <Container className="relative text-center">
      <Reveal>
        <span aria-hidden="true" className="slash mx-auto block" />
        <h2 data-testid="final-title" className="mx-auto mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          La tua prossima amicizia, esperienza o collaborazione potrebbe iniziare proprio da qui.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
          Oltre 500 appassionati di anime, manga e cosplay. Opportunità online e dal vivo. Una community in continua espansione.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
          Se anche tu desideri vivere la tua passione per anime, manga e cosplay, conoscere nuove persone e costruire amicizie autentiche in un ambiente sano e organizzato, la Toman Italiana è il posto giusto per te!
        </p>
      </Reveal>
      <div className="mt-9"><CtaButton id="finale" note align="center" /></div>
    </Container>
  </section>
);
