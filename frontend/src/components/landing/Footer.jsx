import { LOGO, SOCIALS, FOUNDER } from "@/config/site";
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

const SocialLink = ({ id, url, label, handle, icon: Icon, caption }) => (
  <li>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`footer-social-${id}`}
      aria-label={`${label} ${handle} (si apre in una nuova scheda)`}
      className="social-link"
    >
      <Icon />
      {caption && <span className="text-zinc-600">{caption}</span>}
      <span className="font-semibold">{handle}</span>
    </a>
  </li>
);

const Socials = () => (
  <div data-testid="footer-socials" className="flex flex-col items-center gap-3">
    <p className="font-display text-lg font-extrabold tracking-tight">Seguici sui nostri social!</p>
    <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      {SOCIALS.map((s) => (
        <SocialLink key={s.id} id={s.id} url={s.url} label={`${s.name} ufficiale Toman Italiana`} handle={s.handle} icon={ICONS[s.id]} />
      ))}
      <SocialLink id="founder" url={FOUNDER.url} label={`${FOUNDER.label}, ${FOUNDER.name}`} handle={FOUNDER.handle} icon={InstagramIcon} caption={`${FOUNDER.label}:`} />
    </ul>
  </div>
);

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-black/10 bg-white pb-6 pt-7 sm:pt-9">
    <Container className="flex flex-col items-center gap-5 text-center">
      <div className="flex items-center gap-3">
        <img src={LOGO.small} alt={LOGO.alt} width="56" height="56" loading="lazy" className="h-12 w-12 sm:h-14 sm:w-14" data-testid="footer-logo" />
        <p className="font-display text-xl font-extrabold tracking-tight">Toman Italiana</p>
      </div>
      <Socials />
      <div className="flex w-full flex-col items-center gap-1 border-t border-black/10 pt-4 text-sm sm:flex-row sm:justify-between">
        <p data-testid="footer-copyright" className="text-zinc-600">© {new Date().getFullYear()} Toman Italiana. Tutti i diritti riservati.</p>
        <nav aria-label="Informazioni legali" data-testid="footer-legal" className="flex items-center gap-x-4">
          <a href="/privacy" data-testid="footer-privacy-link" className="footer-legal-link">Informativa sulla privacy</a>
          <a href="/privacy#cookie" data-testid="footer-cookie-link" className="footer-legal-link">Cookie</a>
        </nav>
      </div>
    </Container>
  </footer>
);
