import { LOGO } from "@/config/site";
import { Container } from "./ui";

export const Header = () => (
  <header data-testid="site-header" className="sticky top-0 z-40 border-b border-black/10 bg-white">
    <Container className="flex h-16 items-center sm:h-20">
      <a href="#top" data-testid="header-logo-link" className="flex items-center gap-3 rounded focus-visible:outline-offset-4">
        <img
          src={LOGO.small}
          alt={LOGO.alt}
          width="56"
          height="56"
          className="h-11 w-11 sm:h-14 sm:w-14"
          data-testid="header-logo"
        />
        <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">Toman Italiana</span>
      </a>
    </Container>
  </header>
);
