# PRD — Landing page Toman Italiana

## Original problem statement
Landing page professionale, moderna, responsive e ottimizzata per le conversioni per la community anime/manga "Toman Italiana". Copy approvato da usare integralmente (messaggio 2 dell'utente, 2026-11-23), logo ufficiale in header / grande e centrato prima di "E se tutto quello che cerchi fosse in un'unica community?" / footer. Palette bianco-nero con rosso del logo. Sito statico, nessun backend/database, esportabile via GitHub e pubblicabile su Cloudflare Pages, nessuna dipendenza da Emergent, README con istruzioni. Tutti i pulsanti "ENTRA SUBITO ANCHE TU NELLA TOMAN!" → https://chat.whatsapp.com/Bi3jTiiDIZOCJrA6ymFWdZ?mode=gi_t (unico punto di configurazione). NON pubblicare/deployare.
Scelte utente: nessuno spazio foto; titoli decisi, moderni, compatti, ispirazione manga ma professionali; paragrafi molto leggibili.

## Architecture
- Static React (CRA/CRACO) in `frontend/`, output `frontend/build`. Backend folder unused.
- Config: `frontend/src/config/site.js` (WHATSAPP_URL, logo paths).
- Sections: `frontend/src/components/landing/*`. Fonts self-hosted via @fontsource (Archivo wdth, Hanken Grotesk).
- Red #D21416 sampled from the logo. Emergent npm packages, PostHog and Emergent script removed.

## Implemented (2026-11-23)
- All copy sections in order, 10 CTA buttons, notes under hero and final CTA, logo x3, SEO title/description/OG, robots.txt, skip link, keyboard focus, reduced-motion support, README for export & Cloudflare Pages.

## Backlog
- P1: OG image in PNG/JPG 1200x630 for better social previews; sitemap once the domain is known.
- P2: Optional real photo gallery if the user provides authentic photos.
