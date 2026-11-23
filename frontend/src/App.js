import { MotionConfig } from "framer-motion";
import "@/App.css";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Problems } from "@/components/landing/Problems";
import { Amplification } from "@/components/landing/Amplification";
import { Solution } from "@/components/landing/Solution";
import { Online } from "@/components/landing/Online";
import { Live } from "@/components/landing/Live";
import { FreeTime } from "@/components/landing/FreeTime";
import { Projects } from "@/components/landing/Projects";
import { SafeSpace } from "@/components/landing/SafeSpace";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#contenuto" className="skip-link">Vai al contenuto</a>
      <Header />
      <main id="contenuto">
        <Hero />
        <Marquee />
        <Problems />
        <Amplification />
        <Solution />
        <Online />
        <Live />
        <FreeTime />
        <Projects />
        <SafeSpace />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
