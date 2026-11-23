import { motion } from "framer-motion";
import { LOGO } from "@/config/site";
import { Container, CtaButton, Reveal, Slash } from "./ui";

const LogoReveal = () => (
  <div className="flex items-center justify-center gap-4 sm:gap-10">
    <motion.span aria-hidden="true" className="h-px flex-1 origin-right bg-black/20" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} />
    <motion.img
      src={LOGO.large}
      alt={LOGO.alt}
      width="800"
      height="800"
      loading="lazy"
      data-testid="solution-big-logo"
      className="h-auto w-60 shrink-0 sm:w-80 lg:w-[26rem]"
      initial={{ scale: 0.86, rotate: -4 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    />
    <motion.span aria-hidden="true" className="h-px flex-1 origin-left bg-black/20" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} />
  </div>
);

const Stat = ({ value, children, testid }) => (
  <div data-testid={testid} className="stat-card">
    <span aria-hidden="true" className="font-display text-6xl font-extrabold leading-none tracking-tight sm:text-7xl">{value}</span>
    <p className="mt-4 text-base font-semibold leading-relaxed sm:text-lg">{children}</p>
  </div>
);

export const Solution = () => (
  <section data-testid="solution-section" className="relative border-t border-black/10 py-14 sm:py-24">
    <Container>
      <LogoReveal />
      <Reveal className="mx-auto mt-10 max-w-4xl text-center sm:mt-14">
        <h2 data-testid="solution-title" className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          E se tutto quello che cerchi fosse in un'unica community?
        </h2>
        <p data-testid="solution-subtitle" className="mt-5 font-display text-2xl font-extrabold text-brand sm:text-3xl">
          Questa è la Toman Italiana!
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal><Stat value="500+" testid="stat-members">Oltre 500 membri attivi, appassionati di anime, manga e cosplay in tutta Italia!</Stat></Reveal>
        <Reveal delay={0.08}><Stat value="20+" testid="stat-admins">Una community con oltre 20 admin, una struttura organizzativa solida e una crescita sempre più rapida!</Stat></Reveal>
      </div>

      <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <Slash />
          <p className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            La nostra ambizione? Diventare il principale punto di riferimento italiano per gli appassionati di anime e manga.
          </p>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
          <p>Vogliamo costruire una realtà in cui ogni appassionato possa fare nuove amicizie, vivere esperienze e trovare opportunità concrete per sviluppare le proprie passioni e i propri progetti.</p>
          <p>Il tutto in un ambiente sano e tutelato, con regole scritte, moderazione e particolare attenzione al rispetto di ogni persona.</p>
          <p className="font-semibold text-ink">E puoi farlo sia online, direttamente da casa, sia dal vivo, incontrando persone che condividono i tuoi stessi interessi!</p>
          <div className="pt-3"><CtaButton id="soluzione" /></div>
        </div>
      </Reveal>
    </Container>
  </section>
);
