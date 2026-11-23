import { useEffect } from "react";
import { Container } from "@/components/landing/ui";

const Block = ({ id, title, children }) => (
  <section id={id} data-testid={`privacy-${id}`} className="border-t border-black/10 py-7">
    <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
    <div className="legal-body mt-4">{children}</div>
  </section>
);

export default function PrivacyPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Informativa sulla privacy | Toman Italiana";
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    return () => { document.title = prev; };
  }, []);

  return (
    <main id="contenuto" data-testid="privacy-page" className="py-10 sm:py-16">
      <Container className="max-w-3xl">
        <a href="/" data-testid="privacy-back-home" className="text-sm font-semibold text-zinc-700 underline underline-offset-4 hover:text-ink">← Torna alla home</a>
        <div className="mt-8"><span aria-hidden="true" className="slash" /></div>
        <h1 data-testid="privacy-title" className="mt-6 font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">Informativa sulla privacy</h1>
        <p className="mt-5 text-zinc-700">
          Informativa resa ai sensi degli artt. 12 e 13 del Regolamento (UE) 2016/679 («GDPR») a chi visita questo sito. Ultimo aggiornamento: 23 novembre 2026.
        </p>

        <div className="mt-8">
          <Block id="titolare" title="1. Titolare del trattamento">
            <ul>
              <li>Nome: David Muccitelli</li>
              <li>Email di contatto: <a href="mailto:Tomanitaliana@gmail.com" data-testid="privacy-email-link">Tomanitaliana@gmail.com</a></li>
              <li>Responsabile della protezione dei dati (DPO): non nominato</li>
            </ul>
            <p>Il titolare non pubblica un indirizzo fisico. Per qualsiasi richiesta relativa ai dati personali puoi scrivere a <a href="mailto:Tomanitaliana@gmail.com">Tomanitaliana@gmail.com</a>.</p>
          </Block>

          <Block id="dati" title="2. Quali dati vengono trattati">
            <p>Questo sito è una pagina informativa statica. Non contiene moduli di contatto, registrazioni o account, strumenti di analisi statistica, pixel pubblicitari né contenuti incorporati di terze parti. I caratteri tipografici e le immagini sono ospitati sul sito stesso.</p>
            <p><strong>Dati tecnici di navigazione.</strong> Quando visiti il sito, il servizio di hosting riceve automaticamente alcuni dati tecnici necessari a mostrare le pagine, come indirizzo IP, data e ora della richiesta, pagina richiesta, tipo di browser e sistema operativo. Questi dati possono essere registrati nei log tecnici del fornitore di hosting.</p>
            <p><strong>Richiesta d'ingresso tramite WhatsApp.</strong> I pulsanti «ENTRA SUBITO ANCHE TU NELLA TOMAN!» aprono un link d'invito WhatsApp. Il sito non raccoglie né trasmette dati prima del clic. Se scegli di inviare la richiesta d'ingresso, gli admin della community possono vedere i dati del tuo profilo WhatsApp resi visibili dall'app, come nome del profilo, numero di telefono ed eventuale immagine del profilo. Non vengono richiesti dati ulteriori oltre a quelli del profilo WhatsApp.</p>
            <p><strong>Link ai social.</strong> I collegamenti a Instagram e TikTok portano a servizi esterni. Il sito non trasmette dati a questi servizi prima del clic; dopo il clic si applicano le informative privacy dei rispettivi servizi.</p>
          </Block>

          <Block id="finalita" title="3. Finalità e basi giuridiche">
            <ul>
              <li><strong>Mostrare il sito e garantirne la sicurezza</strong> (dati tecnici di navigazione). Base giuridica: legittimo interesse del titolare a garantire il funzionamento e la sicurezza del sito (art. 6, par. 1, lett. f) GDPR).</li>
              <li><strong>Gestire le richieste d'ingresso nella community</strong> (dati del profilo WhatsApp). Base giuridica: legittimo interesse del titolare a valutare le richieste d'ingresso e a mantenere la community sicura e rispettosa (art. 6, par. 1, lett. f) GDPR).</li>
            </ul>
          </Block>

          <Block id="modalita" title="4. Modalità del trattamento">
            <p>I dati sono trattati con strumenti elettronici, adottando misure tecniche e organizzative adeguate a proteggerli. Possono accedere ai dati solo gli admin autorizzati della community. I dati non vengono venduti né ceduti a terzi.</p>
          </Block>

          <Block id="destinatari" title="5. Destinatari dei dati">
            <ul>
              {/* Se cambi hosting, aggiorna questa voce. */}
              <li>Fornitore del servizio di hosting del sito: Cloudflare Pages, servizio di hosting statico scelto dal titolare per la pubblicazione del sito.</li>
              <li>Admin autorizzati della Toman Italiana, per la gestione delle richieste d'ingresso.</li>
              <li>WhatsApp, che tratta i dati sulla propria piattaforma in autonomia, secondo la propria informativa sulla privacy.</li>
            </ul>
          </Block>

          <Block id="trasferimenti" title="6. Trasferimenti verso Paesi extra UE">
            <p>Cloudflare e WhatsApp possono trattare dati anche al di fuori dello Spazio economico europeo, con garanzie adeguate come le clausole contrattuali standard.</p>
          </Block>

          <Block id="conservazione" title="7. Tempi di conservazione">
            <ul>
              <li>Log tecnici di navigazione: per il tempo strettamente necessario alla sicurezza e al funzionamento del sito, secondo le impostazioni del fornitore di hosting.</li>
              <li>Dati relativi alle richieste d'ingresso: per tutta la durata della partecipazione alla community. Se la richiesta non viene accettata, i dati non vengono conservati oltre 30 giorni.</li>
            </ul>
          </Block>

          <Block id="diritti" title="8. I tuoi diritti">
            <p>Nei limiti previsti dal GDPR puoi chiedere in qualsiasi momento:</p>
            <ul>
              <li>l'accesso ai tuoi dati (art. 15);</li>
              <li>la rettifica dei dati inesatti (art. 16);</li>
              <li>la cancellazione dei dati (art. 17);</li>
              <li>la limitazione del trattamento (art. 18);</li>
              <li>la portabilità dei dati (art. 20);</li>
              <li>di opporti al trattamento (art. 21);</li>
              <li>di revocare il consenso, se il trattamento si basa sul consenso, senza pregiudicare la liceità del trattamento precedente (art. 7, par. 3).</li>
            </ul>
          </Block>

          <Block id="esercizio" title="9. Come esercitare i tuoi diritti">
            <p>Puoi inviare la tua richiesta a: <a href="mailto:Tomanitaliana@gmail.com">Tomanitaliana@gmail.com</a>. Riceverai una risposta senza ingiustificato ritardo e, di norma, entro un mese dal ricevimento della richiesta (art. 12, par. 3 GDPR).</p>
          </Block>

          <Block id="reclamo" title="10. Reclamo all'autorità di controllo">
            <p>Se ritieni che il trattamento dei tuoi dati violi il GDPR, puoi proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" data-testid="privacy-garante-link">www.garanteprivacy.it</a>) oppure all'autorità di controllo dello Stato membro in cui risiedi o lavori (art. 77 GDPR).</p>
          </Block>

          <Block id="conferimento" title="11. Obbligatorietà del conferimento">
            <p>I dati tecnici di navigazione sono necessari per mostrare il sito. L'invio della richiesta d'ingresso è facoltativo: senza i dati del profilo WhatsApp, però, non è possibile valutare la richiesta.</p>
          </Block>

          <Block id="decisioni" title="12. Processi decisionali automatizzati">
            <p>Il sito non effettua processi decisionali automatizzati, compresa la profilazione, ai sensi dell'art. 22 GDPR. Le richieste d'ingresso sono valutate dagli admin.</p>
          </Block>

          <Block id="cookie" title="13. Cookie e tecnologie simili">
            <p>Il sito non utilizza cookie di profilazione né di analisi. Il fornitore di hosting può impostare cookie tecnici di sicurezza, che non richiedono consenso: per questo non viene mostrato un banner per il consenso ai cookie.</p>
            <p>Aprendo i link a WhatsApp, Instagram o TikTok lasci il sito: quei servizi possono utilizzare propri cookie secondo le rispettive informative.</p>
          </Block>

          <Block id="modifiche" title="14. Modifiche all'informativa">
            <p>Questa informativa può essere aggiornata. La versione in vigore è sempre pubblicata su questa pagina, con la data dell'ultimo aggiornamento.</p>
          </Block>
        </div>
      </Container>
    </main>
  );
}
