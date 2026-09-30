import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image as ImageIcon, Lock, Info, X, Users, CalendarClock, Target, Megaphone, LayoutDashboard, KeyRound, SearchCheck, FileSpreadsheet, Smartphone } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants } from '../lib/ui';

function Portfolio() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300";
  const badgeStyle = "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-medium text-neutral-300";

  const creaGalleria = (prefisso, nome) =>
    Array.from({ length: 6 }, (_, i) => ({
      src: `/progetti/${prefisso}_${i + 1}.webp`,
      alt: `${nome}, render 3D ${i + 1} di 6`,
    }));

  const gallerie = {
    liberta: creaGalleria('residenza_corso_liberta', 'Residenza Corso Libertà'),
    callas: creaGalleria('callas_attico', "Attico Calla's Immobiliare"),
    nella: creaGalleria('residenza_nella', 'Residenza Nella'),
    parco: creaGalleria('residenza_del_parco', 'Residenza del Parco'),
  };

  const [openGallery, setOpenGallery] = useState(null);
  const [dettagliUps, setDettagliUps] = useState(false);
  const bottoneDettagliRef = useRef(null);
  const bottoneChiudiRef = useRef(null);

  useEffect(() => {
    if (!dettagliUps) return;
    const bottoneOrigine = bottoneDettagliRef.current;
    const onKey = (e) => e.key === 'Escape' && setDettagliUps(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    bottoneChiudiRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      bottoneOrigine?.focus();
    };
  }, [dettagliUps]);

  const funzionalitaUps = [
    { icon: Users, titolo: "Clienti e forniture", testo: "Anagrafiche complete con lo storico delle forniture attive per ogni cliente, i dati tecnici delle utenze e le condizioni contrattuali." },
    { icon: CalendarClock, titolo: "Scadenze e lavorazione", testo: "Monitoraggio delle scadenze contrattuali con livelli di priorità, stati di lavorazione e pianificazione delle azioni successive." },
    { icon: Target, titolo: "Cross-selling", testo: "Individuazione automatica dei servizi non ancora attivi per ciascun cliente, con registro dei contatti effettuati e dei relativi esiti." },
    { icon: Megaphone, titolo: "Campagne e lead", testo: "Gestione delle campagne pubblicitarie su Meta, Google Ads e TikTok con monitoraggio del budget e pipeline dei lead fino alla conversione in cliente." },
    { icon: LayoutDashboard, titolo: "Dashboard e notifiche", testo: "Grafici e indicatori chiave sull'andamento dell'attività e un centro notifiche integrato per scadenze e follow-up." },
    { icon: KeyRound, titolo: "Ruoli e accessi", testo: "Accesso autenticato con profili differenziati: gli amministratori hanno la visione completa, ogni agente consulta il proprio portafoglio clienti." },
    { icon: SearchCheck, titolo: "Qualità dei dati", testo: "Strumenti di controllo per individuare omonimie e utenze duplicate, mantenendo l'archivio ordinato e affidabile." },
    { icon: FileSpreadsheet, titolo: "Backup e importazione", testo: "Esportazione e importazione dei dati in formato Excel e CSV, con storico dei backup effettuati." },
    { icon: Smartphone, titolo: "App installabile", testo: "Progressive Web App installabile su desktop e smartphone, per un utilizzo rapido anche in mobilità." },
  ];

  return (
    <>
      <Seo path="/portfolio" />

      <motion.div
        className="flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl font-semibold mb-4 text-white">Portfolio Progetti</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            Una selezione di progetti recenti: web app gestionali su misura, siti per il settore immobiliare, hospitality e servizi professionali, rendering 3D fotorealistici e video promozionali.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <section className={`${bentoCard} p-0 overflow-hidden relative aspect-video group`}>
              <img
                src="/progetti/mockup-up-solutions-gestionale.webp"
                fetchPriority="high"
                alt="Mockup gestionale Up Solutions"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </section>

            <section className={`${bentoCard} flex flex-col sm:flex-row items-center justify-between gap-4 p-6`}>
              <div>
                <h3 className="text-white font-medium">Scopri il progetto</h3>
                <p className="text-sm text-neutral-400">Funzionalità e moduli della piattaforma.</p>
              </div>
              <button ref={bottoneDettagliRef} type="button" aria-haspopup="dialog" onClick={() => setDettagliUps(true)} className="text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-2">
                <Info size={18} aria-hidden="true" /> Scopri i dettagli
              </button>
            </section>
          </div>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Web App Gestionale & CRM su Misura</div>
            <h2 className="text-2xl font-medium text-white mb-4">Up Solutions</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Piattaforma gestionale web sviluppata su misura per un'agenzia di consulenza multiservizio operante nei settori energia, telefonia, fotovoltaico, termoidraulica e consulenza informatica. Il sistema centralizza clienti, forniture e scadenze contrattuali, individua le opportunità di cross-selling e gestisce campagne pubblicitarie e lead in un'unica piattaforma, accessibile da desktop e smartphone.
              </p>
            </div>

            <div className="mt-auto">
              <div
                aria-disabled="true"
                className="flex items-center justify-center gap-2 text-sm text-neutral-400 font-medium bg-white/5 border border-white/10 px-5 py-3 rounded-xl cursor-not-allowed select-none"
              >
                <Lock size={16} aria-hidden="true" /> Accesso riservato
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <section className={`${bentoCard} p-0 overflow-hidden relative aspect-video group`}>
              <img
                src="/progetti/mockup-corso-liberta.webp"
                loading="lazy"
                decoding="async"
                alt="Mockup Residenza Corso Libertà"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </section>

            <section className={`${bentoCard} flex flex-col sm:flex-row items-center justify-between gap-4 p-6`}>
              <div>
                <h3 className="text-white font-medium">Esplora il progetto 3D</h3>
                <p className="text-sm text-neutral-400">Render interni e planimetrie arredate.</p>
              </div>
              <button type="button" onClick={() => setOpenGallery('liberta')} className="text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-2">
                <ImageIcon size={18} aria-hidden="true" /> Apri Galleria
              </button>
            </section>
          </div>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Web, 3D Rendering & Video</div>
            <h2 className="text-2xl font-medium text-white mb-4">Residenza Corso Libertà</h2>

            <div className="mb-6 space-y-4">
              <div>
                <p className="text-sm text-neutral-400 leading-relaxed">Sviluppo di un sito web vetrina integrato con un'esperienza visiva premium per valorizzare immobili di pregio. Il progetto comprende la modellazione 3D per rendering fotorealistici, la realizzazione di planimetrie arredate e il videomontaggio promozionale.</p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://www.residenzacorsoliberta.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img
              src="/progetti/mockup-stimatech-claims-solutions.webp"
              loading="lazy"
              decoding="async"
              alt="Mockup Stimatech Claims Solutions"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
          </section>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Corporate Website & Lead Generation per Studio Peritale</div>
            <h2 className="text-2xl font-medium text-white mb-4">Stimatech Claims Solutions</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Sito corporate multipagina per uno studio peritale assicurativo indipendente, con hero animata, sezioni dedicate a metodo, competenze e aree operative, contatori statistici animati allo scroll e FAQ interattive. Il modulo contatti è collegato a un backend PHP con protezioni anti-spam (honeypot e controllo temporale) e invio email in HTML, oltre a un sistema completo di consenso cookie con banner, modale delle preferenze e pulsante flottante.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://www.stimatech.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img
              src="/progetti/mockup-studio-cabella.webp"
              loading="lazy"
              decoding="async"
              alt="Mockup Studio Ca'Bella"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
          </section>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Piattaforma Immobiliare & Gestionale Custom</div>
            <h2 className="text-2xl font-medium text-white mb-4">Studio Ca'Bella</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Sviluppo di un ecosistema digitale immobiliare completo. Il progetto integra un sito web WordPress con un gestionale su misura, progettato per permettere agli agenti di aggiornare il portafoglio immobili in tempo reale, garantendo dati precisi e massima autonomia operativa.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://studiocabella.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img
              src="/progetti/mockup-casa-vacanze-ribocchi.webp"
              loading="lazy"
              decoding="async"
              alt="Mockup Casa Vacanze Ribocchi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
          </section>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Portale Hospitality & Booking System</div>
            <h2 className="text-2xl font-medium text-white mb-4">Casa Vacanze Ribocchi</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Realizzazione di un portale turistico per un podere esclusivo in Toscana. Il sito valorizza i servizi e l'esperienza locale e integra il sistema "Quovai" per la gestione diretta e sicura delle prenotazioni online e delle disponibilità.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://www.casavacanzeribocchi.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">3D Architecture Rendering</div>
            <h2 className="text-2xl font-medium text-white mb-4">Calla's Immobiliare</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Realizzazione di rendering fotorealistici per un elegante attico. Lo studio si è concentrato sull'illuminazione naturale, sulle texture dei materiali di pregio e sulla valorizzazione degli spazi abitativi per la promozione commerciale.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <button
                type="button"
                onClick={() => setOpenGallery('callas')}
                className="w-full text-sm text-white font-medium bg-white/10 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <ImageIcon size={18} aria-hidden="true" /> Visualizza i Render
              </button>
            </div>
          </section>

          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img
              src="/progetti/mockup-callas-immobiliare.webp"
              loading="lazy"
              decoding="async"
              alt="Mockup Calla's Immobiliare"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <section className={`${bentoCard} p-0 overflow-hidden relative aspect-video group`}>
              <img
                src="/progetti/mockup-residenza-nella.webp"
                loading="lazy"
                decoding="async"
                alt="Mockup Residenza Nella"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </section>

            <section className={`${bentoCard} flex flex-col sm:flex-row items-center justify-between gap-4 p-6`}>
              <div>
                <h3 className="text-white font-medium">Esplora il progetto 3D</h3>
                <p className="text-sm text-neutral-400">Render fotorealistici degli interni e planimetrie.</p>
              </div>
              <button type="button" onClick={() => setOpenGallery('nella')} className="text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-2">
                <ImageIcon size={18} aria-hidden="true" /> Apri Galleria
              </button>
            </section>
          </div>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Sito Web Custom, 3D & Video</div>
            <h2 className="text-2xl font-medium text-white mb-4">Residenza Nella</h2>

            <div className="mb-6 space-y-4">
              <div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Progettazione e sviluppo di un sito web su misura e ottimizzato, realizzato in puro HTML, CSS e JavaScript per garantire la massima reattività e velocità di caricamento. Il progetto include la realizzazione di rendering d'interni fotorealistici, la creazione di planimetrie dettagliate e il videomontaggio per presentare gli spazi in modo suggestivo e accattivante.
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://www.residenzanella.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img
              src="/progetti/mockup-verde-leonardo.webp"
              loading="lazy"
              decoding="async"
              alt="Mockup Verde Leonardo"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
          </section>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Sito Vetrina Multipagina & Backend PHP</div>
            <h2 className="text-2xl font-medium text-white mb-4">Verde Leonardo</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Sito vetrina multipagina per un'attività di tree climbing e arboricoltura, con un design a griglia bento e un blog le cui anteprime si aprono in un modale dedicato. Il modulo di richiesta preventivo permette di allegare foto direttamente dal form ed è collegato a un backend PHP con invio email via SMTP autenticato, oltre alla gestione completa di banner cookie e preferenze secondo il GDPR.
              </p>
            </div>

            <div className="mt-auto">
              <a href="https://www.verdeleonardo.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <section className={`${bentoCard} p-0 overflow-hidden relative aspect-video group`}>
              <img
                src="/progetti/mockup-residenza-del-parco.webp"
                loading="lazy"
                decoding="async"
                alt="Mockup Residenza del Parco"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </section>

            <section className={`${bentoCard} flex flex-col sm:flex-row items-center justify-between gap-4 p-6`}>
              <div>
                <h3 className="text-white font-medium">Esplora il progetto 3D</h3>
                <p className="text-sm text-neutral-400">Render fotorealistici degli interni e planimetrie.</p>
              </div>
              <button type="button" onClick={() => setOpenGallery('parco')} className="text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-2">
                <ImageIcon size={18} aria-hidden="true" /> Apri Galleria
              </button>
            </section>
          </div>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Sito Web Custom, 3D & Video</div>
            <h2 className="text-2xl font-medium text-white mb-4">Residenza del Parco</h2>

            <div className="mb-6 space-y-4">
              <div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Progettazione e sviluppo di un sito web su misura per un nuovo complesso residenziale, costruito in puro HTML, CSS e JavaScript per garantire prestazioni ottimali e tempi di caricamento minimi. Il progetto comprende la realizzazione di rendering 3D fotorealistici degli interni, planimetrie arredate dettagliate e videomontaggio promozionale per una presentazione immersiva degli spazi.
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://www.residenzadelparcolentate.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img
              src="/progetti/mockup-legnarello-ssm.webp"
              loading="lazy"
              decoding="async"
              alt="Mockup A.S.D. Legnarello SSM"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
          </section>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Sito Web WordPress Custom & Gestione Contenuti</div>
            <h2 className="text-2xl font-medium text-white mb-4">A.S.D. Legnarello SSM</h2>

            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Sito ufficiale di una società calcistica di Legnano, sviluppato come tema WordPress interamente su misura, senza page builder né plugin a pagamento. Un pannello di gestione dedicato permette alla segreteria di aggiornare tutto in autonomia: calendario eventi, schede squadra con classifiche collegate a Tuttocampo, galleria ad album con caricamento multiplo e riordino drag & drop, consiglio direttivo e documenti. Completano il progetto il menu mobile a schermo intero e un'area riservata con login personalizzato.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Up Solutions</span>
              </div>
              <a href="https://www.legnarellocalcio.it/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <Lightbox
          open={openGallery !== null}
          close={() => setOpenGallery(null)}
          slides={openGallery ? gallerie[openGallery] : []}
          labels={{ Previous: 'Immagine precedente', Next: 'Immagine successiva', Close: 'Chiudi galleria', Lightbox: 'Galleria render 3D', Carousel: 'Carosello immagini', Slide: 'Immagine' }}
          styles={{
            slide: { padding: "20px" },
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            root: { "--yarl__slide_image_border_radius": "24px" }
          }}
          render={{
            slide: ({ slide }) => (
              <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
            )
          }}
        />

      </motion.div>

      <AnimatePresence>
        {dettagliUps && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDettagliUps(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ups-titolo"
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#121212] border border-white/10 rounded-3xl p-6 md:p-10"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={bottoneChiudiRef}
                type="button"
                onClick={() => setDettagliUps(false)}
                aria-label="Chiudi i dettagli del progetto"
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Web App Gestionale & CRM su Misura</div>
              <h2 id="ups-titolo" className="text-2xl md:text-3xl font-medium text-white mb-4 pr-10">Up Solutions</h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                Piattaforma gestionale web progettata e sviluppata su misura per un'agenzia di consulenza multiservizio operante nei settori energia, telefonia, fotovoltaico, termoidraulica e consulenza informatica. Il sistema riunisce in un unico ambiente la gestione del portafoglio clienti, il monitoraggio dei contratti e le attività commerciali e di marketing, offrendo al team uno strumento operativo quotidiano, rapido e accessibile da qualsiasi dispositivo.
              </p>

              <h3 className="text-white font-medium mb-4">Funzionalità principali</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {funzionalitaUps.map(({ icon: Icon, titolo, testo }) => (
                  <div key={titolo} className="bg-white/3 border border-white/5 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-neutral-300" aria-hidden="true" />
                      <h4 className="text-sm text-white font-medium">{titolo}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{testo}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Portfolio;
