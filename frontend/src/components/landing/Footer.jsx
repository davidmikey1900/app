import { LOGO } from "@/config/site";
import { Container } from "./ui";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-black/10 py-14">
    <Container className="flex flex-col items-center gap-5 text-center">
      <img src={LOGO.small} alt={LOGO.alt} width="112" height="112" loading="lazy" className="h-24 w-24 sm:h-28 sm:w-28" data-testid="footer-logo" />
      <p className="font-display text-xl font-extrabold tracking-tight">Toman Italiana</p>
      <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Toman Italiana</p>
    </Container>
  </footer>
);
