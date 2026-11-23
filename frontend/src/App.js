import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import PrivacyPage from "@/pages/PrivacyPage";

const Landing = () => (
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
);

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <a href="#contenuto" className="skip-link">Vai al contenuto</a>
        <Header />
        <Routes>
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <Footer />
      </MotionConfig>
    </BrowserRouter>
  );
}
