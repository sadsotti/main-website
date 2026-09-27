import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCircle, FileText, Scale, Server, Clock, UserCheck, Cookie, Link as LinkIcon, Mail } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants } from '../lib/ui';
import { OWNER } from '../lib/site';

const fornitori = [
  {
    nome: 'Netlify, Inc.',
    ruolo: 'Hosting del sito',
    dettaglio: "Ospita il sito e registra i dati tecnici di navigazione (indirizzo IP, data e ora della richiesta, pagina visitata, browser) necessari al funzionamento e alla sicurezza del servizio.",
    link: 'https://www.netlify.com/privacy/',
  },
  {
    nome: 'EmailJS',
    ruolo: 'Invio del modulo contatti',
    dettaglio: 'Recapita al Titolare, via email, i dati inseriti nel modulo contatti (nome, email, oggetto e messaggio).',
    link: 'https://www.emailjs.com/legal/privacy-policy/',
  },
];

function Privacy() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300 flex flex-col";
  const sectionTitle = "text-xl font-medium text-white mb-4 flex items-center gap-3";
  const iconClass = "text-neutral-500 shrink-0";
  const paragraph = "text-sm text-neutral-400 leading-relaxed";
  const list = "text-sm text-neutral-400 space-y-2 leading-relaxed list-disc pl-5";

  return (
    <>
      <Seo path="/privacy" />

      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl font-semibold mb-4 text-white">Privacy Policy & Cookie</h1>
          <p className="text-neutral-400 max-w-3xl leading-relaxed">
            Informativa resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) a chi visita il sito lorenzosottile.it (di seguito, il “Sito”) o utilizza il modulo contatti.
          </p>
          <p className="text-xs text-neutral-500 mt-3">Ultimo aggiornamento: 27 settembre 2026</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <motion.section variants={itemVariants} className={bentoCard}>
            <h2 className={sectionTitle}><UserCircle className={iconClass} size={24} aria-hidden="true" /> Titolare del trattamento</h2>
            <p className={paragraph}>
              Il Titolare del trattamento è <strong className="text-white font-medium">{OWNER.name}</strong>, con sede in {OWNER.address}{OWNER.vatNumber && <>, P.IVA {OWNER.vatNumber}</>}. Per qualsiasi comunicazione puoi scrivere a <a href={`mailto:${OWNER.email}`} className="text-white underline underline-offset-2">{OWNER.email}</a>.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={bentoCard}>
            <h2 className={sectionTitle}><FileText className={iconClass} size={24} aria-hidden="true" /> Dati trattati</h2>
            <ul className={list}>
              <li><strong className="text-white font-normal">Dati di navigazione:</strong> dati tecnici trasmessi automaticamente dal browser durante la visita (indirizzo IP, data e ora, pagine richieste, tipo di browser e dispositivo).</li>
              <li><strong className="text-white font-normal">Dati forniti volontariamente:</strong> nome, indirizzo email, oggetto e contenuto del messaggio inviati tramite il modulo contatti o via email.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
            <h2 className={sectionTitle}><Scale className={iconClass} size={24} aria-hidden="true" /> Finalità e base giuridica</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Risposta alle richieste di contatto</h3>
                <p className={paragraph}>Gestire le richieste di informazioni, preventivi, consulenze o collaborazioni. Base giuridica: esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Gestione del rapporto professionale</h3>
                <p className={paragraph}>Qualora la richiesta porti a un incarico, gestire il rapporto e i relativi adempimenti amministrativi e fiscali. Base giuridica: esecuzione del contratto e obblighi di legge (art. 6.1.b e 6.1.c GDPR).</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <h3 className="text-white font-medium mb-2 text-sm">Funzionamento e sicurezza del Sito</h3>
                <p className={paragraph}>Erogare il Sito, prevenire abusi e garantirne la sicurezza tramite i dati di navigazione. Base giuridica: legittimo interesse del Titolare (art. 6.1.f GDPR).</p>
              </div>
            </div>
            <p className={`${paragraph} mt-4`}>
              I dati non sono utilizzati per finalità di marketing né per attività di profilazione e non sono oggetto di processi decisionali automatizzati.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
            <h2 className={sectionTitle}><Server className={iconClass} size={24} aria-hidden="true" /> Destinatari e fornitori</h2>
            <p className={`${paragraph} mb-4`}>
              I dati sono trattati dal Titolare e non vengono diffusi. Per il funzionamento del Sito ci si avvale dei seguenti fornitori, che operano in qualità di Responsabili del trattamento:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {fornitori.map((f) => (
                <div key={f.nome} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{f.ruolo}</p>
                  <h3 className="text-white font-medium mb-2 text-sm">{f.nome}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3 grow">{f.dettaglio}</p>
                  <a href={f.link} target="_blank" rel="noreferrer" className="text-xs text-neutral-300 hover:text-white underline underline-offset-2">
                    Informativa privacy <span className="sr-only">di {f.nome}</span>
                  </a>
                </div>
              ))}
            </div>
            <p className={`${paragraph} mb-3`}>
              I dati potranno inoltre essere comunicati a professionisti che assistono il Titolare (ad esempio il commercialista) nei limiti necessari agli adempimenti di legge.
            </p>
            <p className={paragraph}>
              Alcuni fornitori possono trattare dati al di fuori dello Spazio Economico Europeo. In tal caso il trasferimento avviene sulla base di una decisione di adeguatezza della Commissione Europea (ad esempio l’EU-U.S. Data Privacy Framework) o delle Clausole Contrattuali Standard (art. 46 GDPR).
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={bentoCard}>
            <h2 className={sectionTitle}><Clock className={iconClass} size={24} aria-hidden="true" /> Conservazione e conferimento</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                I dati inviati tramite il modulo contatti sono conservati per il tempo necessario a gestire la richiesta e, se non ne deriva alcun rapporto professionale, non oltre 24 mesi. I dati legati a un incarico sono conservati per la durata del rapporto e successivamente per il periodo previsto dalla normativa fiscale e civilistica (di norma 10 anni).
              </p>
              <p className={paragraph}>
                Il conferimento dei dati nel modulo contatti è facoltativo, ma i campi obbligatori sono necessari per poterti rispondere.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className={bentoCard}>
            <h2 className={sectionTitle}><UserCheck className={iconClass} size={24} aria-hidden="true" /> I tuoi diritti</h2>
            <p className={`${paragraph} mb-4`}>In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15-22 del GDPR:</p>
            <ul className={list}>
              <li>accesso ai tuoi dati personali;</li>
              <li>rettifica o cancellazione;</li>
              <li>limitazione del trattamento od opposizione;</li>
              <li>portabilità dei dati;</li>
              <li>revoca del consenso, ove prestato, senza pregiudicare la liceità del trattamento effettuato prima della revoca;</li>
              <li>
                reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white underline underline-offset-2">Garante per la protezione dei dati personali</a>.
              </li>
            </ul>
            <p className={`${paragraph} mt-4`}>
              Per esercitarli scrivi a {OWNER.email}. Maggiori indicazioni nella pagina <Link to="/diritti" className="text-neutral-300 hover:text-white underline underline-offset-2">I tuoi diritti</Link>.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
            <h2 className={sectionTitle}><Cookie className={iconClass} size={24} aria-hidden="true" /> Cookie Policy</h2>
            <p className={`${paragraph} mb-4`}>
              I cookie sono piccoli file di testo che un sito può salvare sul dispositivo dell’utente. Il Sito non utilizza cookie di alcun tipo: né tecnici, né analitici, né di profilazione. Non sono presenti strumenti di analisi statistica, pixel pubblicitari o plugin di social network, e i caratteri tipografici sono serviti direttamente dal Sito, senza collegamenti a servizi esterni.
            </p>
            <p className={`${paragraph} mb-4`}>
              Per questo motivo non viene mostrato alcun banner per la raccolta del consenso. Qualora in futuro venissero introdotti cookie o strumenti che richiedono il consenso, la presente informativa sarà aggiornata e il consenso sarà richiesto prima della loro attivazione.
            </p>
            <p className={paragraph}>
              Puoi comunque bloccare o eliminare i cookie in qualsiasi momento dalle impostazioni del tuo browser, come indicato nella pagina <Link to="/diritti" className="text-neutral-300 hover:text-white underline underline-offset-2">I tuoi diritti</Link>.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
            <h2 className={sectionTitle}><LinkIcon className={iconClass} size={24} aria-hidden="true" /> Collegamenti esterni e modifiche</h2>
            <p className={`${paragraph} mb-4`}>
              Il Sito contiene link verso siti di terzi (ad esempio profili social, repository di codice e siti realizzati per i clienti). Tali siti hanno proprie informative, di cui il Titolare non è responsabile.
            </p>
            <p className={`${paragraph} mb-6`}>
              La presente informativa può essere aggiornata nel tempo. La data dell’ultimo aggiornamento è indicata in cima alla pagina.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Mail className={iconClass} size={20} aria-hidden="true" />
              <p className="text-sm text-neutral-300">
                Per ogni chiarimento sulla presente informativa puoi scrivere a: <a href={`mailto:${OWNER.email}`} className="text-white font-medium underline underline-offset-2">{OWNER.email}</a>
              </p>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </>
  );
}

export default Privacy;
