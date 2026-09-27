import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RotateCcw, Cookie, Monitor } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants } from '../lib/ui';
import { OWNER } from '../lib/site';

const browser = [
  { nome: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647?hl=it' },
  { nome: 'Mozilla Firefox', link: 'https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop' },
  { nome: 'Microsoft Edge', link: 'https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
  { nome: 'Safari (macOS)', link: 'https://support.apple.com/it-it/guide/safari/sfri11471/mac' },
  { nome: 'Safari (iPhone e iPad)', link: 'https://support.apple.com/it-it/105082' },
  { nome: 'Opera', link: 'https://help.opera.com/en/latest/web-preferences/' },
];

function Diritti() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300 flex flex-col";
  const sectionTitle = "text-xl font-medium text-white mb-4 flex items-center gap-3";

  return (
    <>
      <Seo path="/diritti" />

      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl font-semibold mb-4 text-white">I tuoi diritti</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            Puoi esercitare in qualsiasi momento i diritti previsti dal GDPR sui tuoi dati personali, in modo semplice e gratuito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
            <h2 className={sectionTitle}><RotateCcw className="text-neutral-500 shrink-0" size={24} aria-hidden="true" /> Richiesta via email</h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Invia una email a <a href={`mailto:${OWNER.email}?subject=Richiesta%20esercizio%20diritti%20privacy`} className="text-white font-medium underline underline-offset-2">{OWNER.email}</a> indicando nell’oggetto <span className="text-white italic">“Richiesta esercizio diritti privacy”</span> e specificando nel testo una o più delle seguenti richieste:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
              <li className="bg-white/5 p-3 rounded-xl border border-white/5">Opposizione al trattamento dei dati inviati tramite il modulo contatti</li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/5">Cancellazione dei dati personali</li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/5">Accesso o copia dei dati personali</li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/5">Rettifica o limitazione del trattamento</li>
            </ul>
            <p className="text-xs text-neutral-500 leading-relaxed mt-6">
              Riceverai riscontro entro 30 giorni dalla richiesta, come previsto dall’art. 12 del GDPR.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={bentoCard}>
            <h2 className={sectionTitle}><Cookie className="text-neutral-500 shrink-0" size={24} aria-hidden="true" /> Cookie</h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Il sito non utilizza cookie, né propri né di terze parti, quindi non c’è alcun consenso ai cookie da gestire o revocare.
            </p>
            <Link
              to="/privacy"
              className="mt-auto w-full text-sm text-white font-medium bg-white/10 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors text-center"
            >
              Leggi la Cookie Policy
            </Link>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-3`}>
            <h2 className={sectionTitle}><Monitor className="text-neutral-500 shrink-0" size={24} aria-hidden="true" /> Gestire i cookie dal browser</h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-3xl">
              Se vuoi, puoi bloccare o eliminare i cookie di tutti i siti che visiti dalle impostazioni del browser. Le guide ufficiali dei principali browser spiegano come fare passo per passo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {browser.map((b) => (
                <a
                  key={b.nome}
                  href={b.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-neutral-300 hover:text-white transition-colors flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/15"
                >
                  {b.nome} <span className="font-sans" aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </motion.section>

        </div>
      </motion.div>
    </>
  );
}

export default Diritti;
