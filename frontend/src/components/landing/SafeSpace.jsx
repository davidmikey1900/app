import { ShieldCheck } from "lucide-react";
import { Container, CtaButton, Reveal } from "./ui";

const RULES = [
  "Ti piace parlare male degli altri alle spalle, alimentare gossip e ostilità o creare fazioni per mettere le persone le une contro le altre.",
  "Insulti o denigri anime e personaggi solo perché non ti piacciono, presentando i tuoi gusti come verità oggettive. Puoi esprimere liberamente le tue preferenze, ma senza sminuire i gusti degli altri o le opere di cui si parla.",
  "Sostieni o promuovi ideologie politiche estremiste o totalitarie, di estrema destra o estrema sinistra, come nazismo, fascismo o comunismo.",
  "Discrimini o offendi qualcuno per orientamento sessuale, religione, etnia, nazionalità, genere, disabilità, squadra di calcio tifata o qualsiasi altra caratteristica, convinzione o appartenenza personale.",
  "Sei insistente o molesto, soprattutto con approcci romantici o sessuali indesiderati, e non rispetti i rifiuti.",
  "Non rispetti regole e confini degli altri o provochi deliberatamente conflitti che compromettono la serenità della community.",
];

export const SafeSpace = () => (
  <section data-testid="safe-section" className="border-t border-black/10 py-12 sm:py-20">
    <Container>
      <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <span className="icon-chip"><ShieldCheck aria-hidden="true" className="h-5 w-5" /></span>
          <h2 data-testid="safe-title" className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
            Una community dove il rispetto viene prima di tutto.
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg lg:pt-14">
          <p>La Toman Italiana nasce per far incontrare persone che condividono le stesse passioni in un ambiente sano, rispettoso e tutelato.</p>
          <p className="font-semibold text-ink">Per questo abbiamo regole scritte, moderazione e procedure di segnalazione, con l'obiettivo di prevenire comportamenti dannosi e intervenire quando si verificano.</p>
        </div>
      </Reveal>

      <Reveal className="mt-10 rounded-2xl border border-black/10 bg-white p-6 sm:p-10">
        <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Non inviare la tua richiesta d'ingresso se:</h3>
        <ul data-testid="rules-list" className="mt-4 divide-y divide-black/10">
          {RULES.map((r, i) => (
            <li key={r} data-testid={`rule-${i + 1}`} className="flex gap-4 py-4 sm:gap-6 sm:py-5">
              <span aria-hidden="true" className="rule-dot mt-1 shrink-0">{i + 1}</span>
              <p className="leading-relaxed text-zinc-700">{r}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-8 max-w-3xl">
        <p className="text-lg font-semibold leading-relaxed text-ink">
          Il nostro obiettivo è costruire una community in cui ogni persona possa sentirsi accolta, rispettata e tutelata, senza dover affrontare comportamenti tossici, discriminazioni o situazioni di disagio.
        </p>
      </Reveal>
      <div className="mt-8"><CtaButton id="ambiente-sano" /></div>
    </Container>
  </section>
);
