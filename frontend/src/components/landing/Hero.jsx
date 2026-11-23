import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, CtaButton } from "./ui";

const LINES = ["Ami gli anime,", "i manga", "e il cosplay?"];
const EASE = [0.16, 1, 0.3, 1];

const StackWords = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const ys = [y1, y2, y3];
  return (
    <div ref={ref} aria-hidden="true" className="hero-stack pointer-events-none hidden select-none lg:block">
      {["ANIME", "MANGA", "COSPLAY"].map((w, i) => (
        <motion.span key={w} style={{ y: ys[i] }} className={`block font-display ${i === 1 ? "text-ink" : "outline-text"}`}>
          {w}
        </motion.span>
      ))}
    </div>
  );
};

export const Hero = () => (
  <section id="top" data-testid="hero-section" className="hero-bg relative overflow-hidden">
    <Container className="relative grid gap-10 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:pb-28 lg:pt-28">
      <div>
        <h1 data-testid="hero-title" className="font-display text-[3.4rem] font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-[6.25rem]">
          {LINES.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.span
          aria-hidden="true"
          className="slash mt-7 block origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        />
        <p data-testid="hero-subtitle" className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-700 sm:text-xl">
          Vorresti conoscere nuove persone, vivere esperienze indimenticabili o realizzare i tuoi progetti, ma non sai da dove cominciare?
        </p>
        <div className="mt-9">
          <CtaButton id="hero" note />
        </div>
      </div>
      <StackWords />
    </Container>
  </section>
);
