import { Container, CtaButton, Num, Reveal, Slash } from "./ui";

const PROBLEMS = [
  {
    t: "Hai una passione enorme, ma nessuno con cui condividerla?",
    p: [
      "Finisci un anime che ti ha emozionato, scopri un manga incredibile o vuoi parlare della tua serie preferita… ma i tuoi amici non condividono i tuoi interessi.",
      "E così ti ritrovi a tenere per te quell'entusiasmo, senza qualcuno con cui discuterne davvero.",
    ],
  },
  {
    t: "Vorresti andare alle fiere, ma non hai compagnia?",
    p: [
      "Aspetti un evento per mesi, immagini tutte le cose che vorresti fare, ma quando arriva il momento di organizzarti non trovi nessuno con cui andarci.",
      "Alla fine partecipi da solo oppure rinunci a un'esperienza che aspettavi da tempo.",
    ],
  },
  {
    t: "Vivi lontano dalle grandi città o hai difficoltà a spostarti?",
    p: [
      "Vorresti conoscere appassionati vicino a casa, ma non sai dove cercarli. E tra distanze, trasporti e organizzazione, anche partecipare alle fiere può diventare complicato.",
      "Il risultato? Le opportunità sembrano sempre troppo lontane.",
    ],
    cta: "problemi-1",
  },
  {
    t: "Tra scuola, lavoro e impegni personali non hai abbastanza tempo?",
    p: [
      "La passione non ti manca. È il tempo per coltivarla che sembra non bastare mai.",
      "Vorresti fare nuove amicizie e vivere più esperienze, ma cercare persone e organizzare tutto da zero richiede energie che spesso non hai.",
      "E così continui a rimandare ciò che ti piacerebbe fare.",
    ],
  },
  {
    t: "Hai un progetto nel mondo anime e manga, ma non sai come farlo crescere?",
    p: [
      "Che tu sia un cosplayer, content creator, grafico, disegnatore, aspirante mangaka o gestisca una community, hai idee e obiettivi che vorresti realizzare.",
      "Ma senza visibilità, collaboratori e persone con cui confrontarti, anche le idee migliori rischiano di rimanere soltanto idee.",
    ],
    cta: "problemi-2",
  },
];

const Problem = ({ item, n }) => (
  <Reveal as="article" className="problem-panel" >
    <div data-testid={`problem-${n}`} className="grid gap-4 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
      <Num n={n} className="text-6xl sm:text-7xl" />
      <div>
        <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          {item.t}
        </h3>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
          {item.p.map((x) => <p key={x}>{x}</p>)}
        </div>
      </div>
    </div>
  </Reveal>
);

export const Problems = () => (
  <section data-testid="problems-section" className="py-14 sm:py-20">
    <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Slash />
        <h2 data-testid="problems-title" className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
          Ti riconosci in almeno una di queste situazioni?
        </h2>
      </div>
      <div className="space-y-4">
        {PROBLEMS.map((item, i) => (
          <div key={item.t} className="space-y-4">
            <Problem item={item} n={i + 1} />
            {item.cta && <div className="py-2"><CtaButton id={item.cta} /></div>}
          </div>
        ))}
      </div>
    </Container>
  </section>
);
