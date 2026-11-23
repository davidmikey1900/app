import { Container, CtaButton, Num, Reveal } from "./ui";

const CREATORS = [
  ["Un cosplayer,", "che vuole migliorare e far conoscere i propri cosplay."],
  ["Il gestore di una community anime e manga,", "che desidera sviluppare il proprio gruppo."],
  ["Un content creator, streamer o YouTuber,", "che vuole far crescere i propri contenuti."],
  ["Un mangaka, disegnatore o illustratore,", "che desidera valorizzare le proprie opere."],
  ["Un grafico, fotografo o video editor,", "che cerca nuove collaborazioni."],
  ["Un doppiatore, cantante o musicista,", "con progetti legati al mondo anime."],
  ["Il gestore di una pagina social,", "che vuole raggiungere nuove persone."],
  ["Un organizzatore di eventi,", "che desidera realizzare nuove iniziative."],
];

const SUPPORT = [
  ["Promozioni settimanali:", "opportunità di presentare i propri progetti nei gruppi della community, alcuni dei quali riuniscono 100, 200 o 300 appassionati."],
  ["Supporto social:", "iniziative di like, commenti, condivisioni e repost per valorizzare i contenuti dei membri."],
  ["Visibilità:", "opportunità di promozione attraverso i profili della Toman Italiana e le collaborazioni con gli altri creativi."],
  ["Collaborazioni:", "possibilità di trovare persone con competenze e interessi complementari per sviluppare nuove iniziative."],
  ["Crescita organizzativa:", "opportunità di candidarti per diventare membro ufficiale della Toman Italiana e contribuire direttamente ai progetti della community."],
];

const Creators = () => (
  <ul data-testid="creators-list" className="mt-5 grid gap-3 sm:grid-cols-2">
    {CREATORS.map(([a, b], i) => (
      <li key={a} data-testid={`creator-${i + 1}`} className="creator-row">
        <span aria-hidden="true" className="slash-mini mt-2 shrink-0" />
        <p className="leading-relaxed text-zinc-700"><strong className="font-bold text-ink">{a}</strong> {b}</p>
      </li>
    ))}
  </ul>
);

const Project9 = () => (
  <Reveal>
    <Num n={9} className="text-6xl sm:text-7xl" />
    <h2 data-testid="projects-title" className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
      Hai un progetto nel mondo anime e manga? Ti aiutiamo a svilupparlo!
    </h2>
    <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
      <p>La Toman Italiana non vuole soltanto riunire appassionati.</p>
      <p className="font-semibold text-ink">Vogliamo anche aiutarti a trasformare le tue passioni, i tuoi talenti e le tue idee in progetti concreti!</p>
      <p className="pt-2 font-display text-xl font-extrabold text-ink">Che tu sia:</p>
    </div>
    <Creators />
    <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
      <p>Oppure abbia qualsiasi altro progetto legato al mondo anime, manga e cosplay.</p>
      <p className="font-semibold text-ink">Nella Toman Italiana puoi trovare una community e una struttura organizzativa con cui sviluppare le tue idee, ottenere visibilità e creare nuove collaborazioni!</p>
    </div>
  </Reveal>
);

const Project10 = () => (
  <Reveal className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
    <div className="lg:sticky lg:top-32 lg:self-start">
      <Num n={10} className="text-6xl sm:text-7xl" />
      <h3 data-testid="visibility-title" className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Dai più visibilità ai tuoi progetti!</h3>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
        <p>Avere una buona idea è soltanto l'inizio. Per farla crescere servono anche visibilità, persone e opportunità.</p>
        <p className="font-semibold text-ink">Per questo vogliamo sostenere i progetti dei nostri membri attraverso:</p>
      </div>
    </div>
    <dl data-testid="support-list" className="border-t border-black">
      {SUPPORT.map(([a, b], i) => (
        <div key={a} data-testid={`support-${i + 1}`} className="support-row">
          <dt className="font-display text-xl font-extrabold tracking-tight">{a}</dt>
          <dd className="mt-2 leading-relaxed text-zinc-700">{b}</dd>
        </div>
      ))}
    </dl>
  </Reveal>
);

export const Projects = () => (
  <section data-testid="projects-section" className="border-t border-black/10 py-14 sm:py-20">
    <Container>
      <Project9 />
      <Project10 />
      <Reveal className="mt-14 rounded-2xl border border-black p-6 sm:p-10">
        <p className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">E non partiamo da zero!</p>
        <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-ink">Già decine di content creator, cosplayer, disegnatori e community indipendenti hanno scelto di entrare nella Toman Italiana per sviluppare i propri progetti!</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg">E vogliamo continuare ad ampliare queste opportunità, coinvolgendo sempre più persone in tutta Italia.</p>
        <div className="mt-7"><CtaButton id="progetti" /></div>
      </Reveal>
    </Container>
  </section>
);
