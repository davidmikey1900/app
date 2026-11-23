import { LOGO, SOCIALS } from "@/config/site";
import { Container } from "./ui";

const InstagramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.3 6.3 0 1 0 5.3 6.2V8.6a7.9 7.9 0 0 0 4.4 1.4V6.7a4.5 4.5 0 0 1-4.4-4.7Z" />
  </svg>
);

const ICONS = { instagram: InstagramIcon, tiktok: TikTokIcon };

const Socials = () => (
  <div data-testid="footer-socials" className="flex flex-col items-center gap-3">
    <p className="font-display text-lg font-extrabold tracking-tight">Seguici sui nostri social!</p>
    <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`footer-social-${s.id}`}
              aria-label={`${s.name} ${s.handle} (si apre in una nuova scheda)`}
              className="social-link"
            >
              <Icon />
              <span className="font-semibold">{s.name}</span>
              <span className="text-zinc-600">{s.handle}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-black/10 bg-white py-8 sm:py-10">
    <Container className="flex flex-col items-center gap-5 text-center">
      <div className="flex items-center gap-3">
        <img src={LOGO.small} alt={LOGO.alt} width="64" height="64" loading="lazy" className="h-14 w-14 sm:h-16 sm:w-16" data-testid="footer-logo" />
        <p className="font-display text-xl font-extrabold tracking-tight">Toman Italiana</p>
      </div>
      <Socials />
      <p data-testid="footer-copyright" className="text-sm text-zinc-600">© {new Date().getFullYear()} Toman Italiana</p>
    </Container>
  </footer>
);
