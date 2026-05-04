import { motion } from 'framer-motion';
import { Scale, Database, UserCheck, Cookie, Link as LinkIcon, Mail } from 'lucide-react';

function Privacy() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300 flex flex-col";
  const sectionTitle = "text-xl font-medium text-white mb-4 flex items-center gap-3";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="mb-2">
        <h1 className="text-4xl font-semibold mb-4 text-white">Privacy Policy & Cookies</h1>
        <p className="text-neutral-400 max-w-2xl leading-relaxed">
          Gentile Utente, ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR), ti informo che i dati personali da te forniti o comunque acquisiti nel corso della navigazione sul sito (di seguito, il “Sito”) saranno trattati da Lorenzo Sottile, con sede legale in Via Orsini, 68, 20821 Meda (MB), in qualità di Titolare del trattamento.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <motion.section variants={itemVariants} className={bentoCard}>
          <h2 className={sectionTitle}><Scale className="text-neutral-500" size={24} /> Finalità e Base Giuridica</h2>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">Il trattamento dei tuoi dati personali avviene per le seguenti finalità:</p>
          <ul className="text-sm text-neutral-400 space-y-2 mb-4 leading-relaxed list-disc list-inside">
            <li>Rispondere a richieste inviate tramite il modulo contatti;</li>
            <li>Gestire richieste di consulenza o collaborazione;</li>
            <li>Gestione amministrativa e adempimento di obblighi contrattuali e di legge;</li>
            <li>Inviare comunicazioni informative e, previo tuo consenso, promozionali relative ai servizi offerti;</li>
            <li>Analisi statistiche anonime per migliorare l’esperienza utente.</li>
          </ul>
          <p className="text-sm text-neutral-400 leading-relaxed mt-auto">
            La base giuridica del trattamento è costituita dal tuo consenso, dall’esecuzione di un contratto o di misure precontrattuali, e dagli obblighi legali cui è soggetto il Titolare.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <h2 className={sectionTitle}><Database className="text-neutral-500" size={24} /> Modalità e Conservazione</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-medium mb-2 text-sm">Modalità del trattamento</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Il trattamento è effettuato con strumenti manuali ed elettronici, nel rispetto delle misure di sicurezza previste dalla normativa vigente. I dati saranno trattati unicamente da soggetti autorizzati dal Titolare e non saranno diffusi. Potranno essere comunicati a soggetti terzi (es. commercialista, consulenti IT) nei limiti strettamente necessari alla fornitura del servizio e sempre nel rispetto del principio di minimizzazione.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 text-sm">Conservazione dei dati</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">I dati saranno conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti. Per finalità fiscali, legali o contrattuali, potranno essere conservati anche successivamente alla cessazione del rapporto, secondo i termini di legge.</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 text-sm">Natura del conferimento</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Il conferimento dei dati è facoltativo, ma il rifiuto a fornirli potrebbe comportare l’impossibilità di evadere richieste o fornire i servizi richiesti.</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <h2 className={sectionTitle}><UserCheck className="text-neutral-500" size={24} /> Diritti dell'Interessato</h2>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">In qualsiasi momento potrai esercitare i diritti previsti dagli artt. 15-22 del GDPR, tra cui:</p>
          <ul className="text-sm text-neutral-400 space-y-2 leading-relaxed list-disc list-inside">
            <li>Accesso ai tuoi dati personali;</li>
            <li>Rettifica o cancellazione;</li>
            <li>Limitazione o opposizione al trattamento;</li>
            <li>Portabilità dei dati;</li>
            <li>Revoca del consenso (senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca);</li>
            <li>Reclamo all’Autorità Garante per la Protezione dei Dati Personali.</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <h2 className={sectionTitle}><Cookie className="text-neutral-500" size={24} /> Cookie Policy</h2>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">Il Sito utilizza cookie tecnici e, previo consenso, cookie analitici e di profilazione. I cookie sono piccoli file di testo che il sito invia al dispositivo dell’utente per migliorare l’esperienza di navigazione.</p>
          <h3 className="text-white font-medium mb-2 text-sm">Tipologie di cookie utilizzati:</h3>
          <ul className="text-sm text-neutral-400 space-y-2 mb-4 leading-relaxed list-disc list-inside">
            <li><strong className="text-white font-normal">Cookie tecnici (obbligatori):</strong> necessari al corretto funzionamento del sito;</li>
            <li><strong className="text-white font-normal">Cookie analitici (anonimizzati):</strong> per raccogliere informazioni statistiche aggregate sull’uso del sito;</li>
            <li><strong className="text-white font-normal">Cookie di terze parti:</strong> (es. Google Analytics, social plugin) per finalità statistiche o promozionali, sempre previo consenso.</li>
          </ul>
          <p className="text-sm text-neutral-400 leading-relaxed mt-auto">Puoi gestire le preferenze sui cookie attraverso il banner al primo accesso, oppure modificando le impostazioni del tuo browser.</p>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
          <h2 className={sectionTitle}><LinkIcon className="text-neutral-500" size={24} /> Collegamenti Esterni & Contatti</h2>
          <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
            Il Sito può contenere link verso altri siti web (es. profili social o portfolio esterni). Non sono responsabile delle informative sulla privacy adottate da tali siti terzi, che operano come autonomi Titolari del trattamento.
          </p>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Mail className="text-neutral-500" size={20} />
            <p className="text-sm text-neutral-300">Per ogni chiarimento in merito alla presente informativa, o per qualsiasi richiesta, puoi scrivere a: <strong className="text-white">info@lorenzosottile.it</strong></p>
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
}

export default Privacy;