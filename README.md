# Toman Italiana — Landing page

Sito **statico** (React + Tailwind, compilato con `react-scripts`/CRACO). Nessun backend, nessun database, nessuna API: una volta compilato è solo HTML, CSS, JavaScript, immagini e font, che puoi pubblicare su qualsiasi hosting statico (Cloudflare Pages, Netlify, GitHub Pages, ecc.).

> La cartella `backend/` presente nel repository è un residuo del modello iniziale di Emergent: **non viene usata dal sito** e puoi ignorarla o eliminarla.

## Dove si trova cosa

| Cosa | Percorso |
|---|---|
| Codice del sito | `frontend/` |
| **Link WhatsApp (unico punto di configurazione)** | `frontend/src/config/site.js` |
| Testi delle sezioni | `frontend/src/components/landing/*.jsx` |
| Colori e stile | `frontend/src/App.css` (variabile `--brand: #d21416`, il rosso ricavato dal logo) |
| Logo ufficiale (originale + versioni ottimizzate) | `frontend/public/assets/` |
| Titolo SEO e meta description | `frontend/public/index.html` |
| Font (Archivo, Hanken Grotesk – licenza SIL OFL) | inclusi nel progetto tramite i pacchetti `@fontsource-variable/*`, nessun servizio esterno |

## 1. Esportare il progetto da Emergent tramite GitHub
1. In Emergent, apri questo progetto e clicca sul pulsante **"Save to GitHub"** (o "Push to GitHub").
2. Collega il tuo account GitHub se richiesto, scegli un nome per il repository e conferma.
3. Al termine troverai tutto il codice nel tuo repository GitHub.

## 2. Ottenere tutti i file sorgente
- Dal repository GitHub: pulsante verde **Code → Download ZIP**, oppure da terminale:
  `git clone https://github.com/TUO-UTENTE/NOME-REPOSITORY.git`

## 3. Installare le dipendenze (solo se vuoi lavorare sul tuo computer)
Serve [Node.js](https://nodejs.org) versione 20 o 22 e Yarn (`npm install -g yarn`). Poi:
```
cd frontend
yarn install
```
Per vedere il sito in locale: `yarn start` (si apre su http://localhost:3000).

## 4. Compilare il sito
```
cd frontend
yarn build
```

## 5. Cartella da pubblicare
**`frontend/build`** — contiene i file finali (index.html, CSS, JS, immagini, font).

## 6. Pubblicare su Cloudflare Pages
1. Vai su https://dash.cloudflare.com → **Workers & Pages** → **Create** → scheda **Pages** → **Connect to Git**.
2. Seleziona il repository GitHub del progetto.
3. Imposta esattamente:
   - **Framework preset:** `Create React App` (oppure "None")
   - **Root directory (advanced):** `frontend`
   - **Build command:** `yarn build`
   - **Build output directory:** `build`
   - (Facoltativo) variabile d'ambiente `NODE_VERSION` = `22`
4. Clicca **Save and Deploy**. Dopo un paio di minuti avrai un indirizzo `*.pages.dev`; potrai poi collegare un tuo dominio da **Custom domains**.

In alternativa, senza GitHub: esegui `yarn build` sul tuo computer e trascina la cartella `frontend/build` in **Pages → Upload assets**.

## 7. Modificare il link WhatsApp
Apri `frontend/src/config/site.js` e cambia **solo** il valore tra virgolette:
```js
export const WHATSAPP_URL = "https://chat.whatsapp.com/...";
```
Tutti i 10 pulsanti "ENTRA SUBITO ANCHE TU NELLA TOMAN!" usano automaticamente questo link. Puoi modificare il file anche direttamente da GitHub (icona della matita → "Commit changes").

## 8. Aggiornare il sito dopo la pubblicazione
- Con Cloudflare Pages collegato a GitHub: modifica i file (da GitHub o dal tuo computer con `git push`). Ogni modifica salvata sul ramo principale avvia **automaticamente** una nuova pubblicazione.
- Con caricamento manuale: esegui di nuovo `yarn build` e ricarica la cartella `frontend/build` creando un nuovo deployment.

Il sito non dipende in alcun modo da Emergent: puoi smettere di usarlo senza conseguenze.

## 9. Prima della pubblicazione definitiva
- **Informativa sulla privacy** (`frontend/src/pages/PrivacyPage.jsx`, indirizzo `/privacy`): completa tutte le parti evidenziate `[DA COMPLETARE]` / `[DA VERIFICARE]` e fai verificare il testo. **Se cambi hosting, aggiorna la voce "Fornitore del servizio di hosting" nella sezione 5 dell'informativa.**
- **Dominio definitivo:** in `frontend/public/index.html` togli i commenti dal tag `canonical` e da `og:url` sostituendo `DOMINIO`. Per anteprime social più affidabili, scrivi anche l'indirizzo completo in `og:image` e `twitter:image` (es. `https://DOMINIO/og-image.jpg`).
- **Pagine interne:** Cloudflare Pages serve automaticamente `index.html` anche per `/privacy` (non aggiungere un file `404.html`). Su Netlify aggiungi in `frontend/public` un file `_redirects` con la riga `/* /index.html 200`.
- **Cookie:** dopo la pubblicazione controlla dagli strumenti del browser che l'hosting non imposti cookie; se ne imposta, aggiorna la sezione 13 dell'informativa.
