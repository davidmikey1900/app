import { Container, CtaButton, Num, Reveal, Slash } from "./ui";

const ITEMS = [
  {
    t: "Fiere e Comics: trova compagnia per i tuoi eventi preferiti!",
    p: [
      "Non hai nessuno con cui andare alla prossima fiera? Oppure hai già degli amici, ma vorresti conoscerne altri?",
      "Attraverso i gruppi regionali Comics e fiere, puoi trovare altri appassionati con cui organizzarti autonomamente per partecipare agli eventi.",
      "E se hai già compagnia, puoi comunque conoscere nuove persone e allargare il tuo gruppo di amici!",
      "Vogliamo che nessuno debba rinunciare a una fiera soltanto perché non ha qualcuno con cui andarci.",
    ],
  },
  {
    t: "Uscite settimanali: trasforma le conoscenze in amicizie vere!",
    p: [
      "Conoscere nuove persone è importante. Ma per costruire amicizie profonde serve anche trascorrere del tempo insieme.",
      "Per questo vogliamo sviluppare uscite settimanali nei gruppi regionali, una volta raggiunto un numero sufficiente di partecipanti.",
      "Un giro in centro, una cena sushi, un pomeriggio al parco, una visita alla fumetteria preferita o qualsiasi altra attività da condividere.",
      "Anche le esperienze più semplici possono diventare occasioni per creare legami autentici e duraturi!",
    ],
  },
];

const Item = ({ item, n }) => (
  <Reveal as="article" className="timeline-item">
    <div data-testid={`live-item-${n}`}>
      <Num n={n} className="text-5xl sm:text-6xl" />
      <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{item.t}</h3>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
        {item.p.map((x) => <p key={x}>{x}</p>)}
      </div>
    </div>
  </Reveal>
);

const Raduni = () => (
  <Reveal as="article" className="raduni-panel mt-8">
    <div data-testid="live-item-7">
      <Num n={7} className="text-5xl sm:text-6xl" />
      <h3 className="mt-3 max-w-3xl font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        Raduni Toman: non semplici eventi, ma occasioni per creare amicizie!
      </h3>
      <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-ink">
        Immagina un evento in cui l'obiettivo principale non sia soltanto visitare degli stand, ma conoscere davvero nuove persone!
      </p>
      <div className="mt-6 grid gap-6 border-t border-black/10 pt-6 text-base leading-relaxed text-zinc-700 md:grid-cols-2 md:gap-10 sm:text-lg">
        <div className="space-y-4">
          <p>Nelle fiere tradizionali puoi esplorare gli stand, acquistare prodotti e scattare foto con i cosplayer. Ma non sempre è facile instaurare nuove amicizie.</p>
          <p>Per questo vogliamo organizzare raduni ufficiali Toman al di fuori delle fiere e dei Comics, anche in collaborazione con locali.</p>
        </div>
        <div className="space-y-4 md:border-l md:border-brand md:pl-10">
          <p>Eventi con attività pensate appositamente per favorire la socializzazione, rompere il ghiaccio e creare legami con persone della tua città e delle zone vicine.</p>
          <p>Il tutto in un ambiente organizzato, con regole precise e attenzione alla tutela dei partecipanti.</p>
        </div>
      </div>
      <p className="mt-6 font-display text-xl font-extrabold leading-snug text-ink sm:text-2xl">
        Il nostro obiettivo? Portare questi raduni nelle principali province di ogni regione italiana!
      </p>
    </div>
  </Reveal>
);

export const Live = () => (
  <section data-testid="live-section" className="border-t border-black/10 py-14 sm:py-20">
    <Container>
      <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Slash />
          <h2 data-testid="live-title" className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            E dal vivo? Le opportunità non mancano!
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg lg:pt-10">
          <p className="font-semibold text-ink">Dalle fiere alle uscite settimanali con persone della tua città, fino ai raduni ufficiali Toman!</p>
          <p>Vogliamo creare sempre più occasioni per trasformare le conoscenze online in amicizie vere ed esperienze da vivere insieme.</p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {ITEMS.map((item, i) => <Item key={item.t} item={item} n={i + 5} />)}
      </div>
      <Raduni />
      <div className="mt-10"><CtaButton id="dal-vivo" /></div>
    </Container>
  </section>
);
