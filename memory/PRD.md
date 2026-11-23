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
- 2026-11-23 (revision 1): all sections white (no black blocks; Raduni card now white with black border), removed duplicated "1." numbering from titles (big outlined numbers kept), tighter vertical spacing, marquee phrases replaced (FAI NUOVE AMICIZIE / VIVI ESPERIENZE INDIMENTICABILI / VAI ALLE FIERE IN COMPAGNIA / REALIZZA I TUOI PROGETTI), compact footer with "Seguici sui nostri social!" Instagram + TikTok (config in site.js SOCIALS).
- 2026-11-23 (revision 2): marquee phrase 3 → "UNA COMMUNITY SANA, DOVE IL RISPETTO CONTA"; footer founder entry "Personal Brand del fondatore della Toman Italiana" → Instagram @david_muccitelli (site.js FOUNDER).
- 2026-11-23 (revision 4): /privacy page (GDPR art. 12-13 draft with [DA COMPLETARE] placeholders, cookie section #cookie, no banner since no cookies/trackers), footer legal links + "© Toman Italiana. Tutti i diritti riservati.", SEO title/description per user, OG/Twitter large image (public/og-image.jpg), favicons, canonical commented until domain, rules list in 2-col lighter layout, text-wrap balance/pretty, hero H1 clamp for 320px, removed unused react-query provider, react-router for /privacy. Backup git tag: backup-pre-ottimizzazione-finale.
- 2026-11-23 (revision 5): privacy titolare = David Muccitelli, Tomanitaliana@gmail.com (no physical address by choice, flagged DA VERIFICARE); compact footer: 3 social chips grouped (founder chip "Profilo del fondatore: @david_muccitelli"), bottom bar with copyright + legal links; less space before footer.
- 2026-11-23 (revision 6): privacy filled: last update 23/11/2026, DPO non nominato, hosting Cloudflare Pages, legal basis logs art. 6.1.f. 9 placeholders remain.
- 2026-11-23 (revision 3, copy edits authorized by user): Raduni 07 condensed (no redundancy, future goal kept); rules list made more concise (same 6 items); safe title → "Una community dove il rispetto viene prima di tutto."; online card 4 title → "Hai bisogno di aiuto con il tuo cosplay?"; tighter mobile spacing, compact creator cards, scroll-padding for sticky header.

## Backlog
- P1: OG image in PNG/JPG 1200x630 for better social previews; sitemap once the domain is known.
- P2: Optional real photo gallery if the user provides authentic photos.
