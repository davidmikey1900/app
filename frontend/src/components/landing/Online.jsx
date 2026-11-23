import { MessagesSquare, MapPin, Camera, Scissors } from "lucide-react";
import { Container, CtaButton, Num, Reveal, Slash } from "./ui";

const ITEMS = [
  {
    icon: MessagesSquare,
    t: "Chat generale: tornei, sfide e divertimento!",
    p: [
      "Nella nostra chat generale non ci limitiamo a parlare di anime e manga!",
      "Organizziamo tornei, sfide e votazioni in cui puoi confrontarti con altri appassionati, sostenere i tuoi personaggi preferiti e partecipare alle attività.",
      "Chi è il personaggio più forte? Qual è quello più intelligente? Qual è l'anime preferito della community?",
      "Ogni sfida è un'occasione per divertirti, esprimere le tue opinioni e conoscere nuove persone!",
    ],
  },
  {
    icon: MapPin,
    t: "Gruppi regionali: conosci appassionati vicino a te!",
    p: [
      "Grazie ai nostri gruppi regionali, puoi entrare in contatto con persone della tua città, delle città vicine e di tutta la tua regione.",
      "L'obiettivo non è soltanto fare amicizia online, ma creare legami che possano trasformarsi in amicizie reali!",
    ],
  },
  {
    icon: Camera,
    t: "Gruppo Cosplay: condividi la tua passione!",
    p: [
      "Conosci altri cosplayer, mostra le tue creazioni, confrontati sui personaggi che ami e partecipa ai nostri contest e tornei cosplay, con fantastici premi in palio!",
      "Uno spazio dedicato a chi vuole vivere il cosplay, divertirsi e conoscere persone con gli stessi interessi.",
    ],
  },
  {
    icon: Scissors,
    t: "Aiuto Cosplay: migliora le tue creazioni!",
    p: [
      "Hai difficoltà con parrucche, armature, armi sceniche, make-up o materiali?",
      "Nel nostro gruppo Aiuto Cosplay puoi ricevere consigli concreti su styling delle parrucche, cucito, accessori, trucco e tecniche di realizzazione.",
      "Confrontati con altri appassionati, trova soluzioni ai tuoi problemi e migliora i tuoi cosplay!",
    ],
  },
];

const Card = ({ item, n }) => {
  const Icon = item.icon;
  return (
    <article data-testid={`online-card-${n}`} className="feature-card group h-full">
      <div className="flex items-start justify-between gap-4">
        <Num n={n} className="text-5xl" />
        <span className="icon-chip"><Icon aria-hidden="true" className="h-5 w-5" /></span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight">{n}. {item.t}</h3>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-zinc-700">
        {item.p.map((x) => <p key={x}>{x}</p>)}
      </div>
    </article>
  );
};

export const Online = () => (
  <section data-testid="online-section" className="border-t border-black/10 bg-paper py-20 sm:py-28">
    <Container>
      <Reveal>
        <Slash />
        <h2 data-testid="online-title" className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
          Scopri tutto quello che puoi fare online!
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.t} delay={(i % 2) * 0.08} className="h-full"><Card item={item} n={i + 1} /></Reveal>
        ))}
      </div>
      <Reveal className="mt-14 flex flex-col gap-8 border-t border-black/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-xl font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          E tutto questo puoi farlo direttamente da WhatsApp, ovunque ti trovi!
        </p>
        <CtaButton id="online" />
      </Reveal>
    </Container>
  </section>
);
