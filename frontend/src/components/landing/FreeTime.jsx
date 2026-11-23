import { Container, Num, Reveal } from "./ui";

export const FreeTime = () => (
  <section data-testid="freetime-section" className="border-t border-black/10 bg-paper py-20 sm:py-28">
    <Container>
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <Num n={8} className="text-6xl sm:text-7xl" />
          <h2 data-testid="freetime-title" className="mt-3 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl">
            8. Hai poco tempo libero? Nessun problema!
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg lg:pt-12">
          <p className="font-display text-2xl font-extrabold leading-snug tracking-tight text-ink">
            Nella Toman Italiana non sei obbligato a essere sempre attivo!
          </p>
          <p>Tra scuola, lavoro e impegni personali, non tutti hanno ore da dedicare ogni giorno alle proprie passioni.</p>
          <p>Ma grazie alle numerose attività online e opportunità dal vivo, puoi scegliere quando e come partecipare, in base ai tuoi impegni.</p>
          <p className="font-semibold text-ink">Anche con poco tempo libero puoi divertirti, conoscere nuove persone e vivere la tua passione, senza obblighi di partecipazione continua!</p>
        </div>
      </Reveal>
    </Container>
  </section>
);
