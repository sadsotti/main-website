import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image as ImageIcon, Lock, Info, X, Users, CalendarClock, Target, Megaphone, LayoutDashboard, KeyRound, SearchCheck, FileSpreadsheet, Smartphone } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants, cardBase, bentoCard, eyebrow, bottonePrimario, bottoneSecondario } from '../lib/ui';
import { CATEGORIE, PROGETTI, SNAPIX } from '../lib/projects';

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

const filtri = [{ id: 'tutti', label: 'Tutti' }, ...Object.entries(CATEGORIE).map(([id, label]) => ({ id, label }))];

const conteggi = {
  tutti: PROGETTI.length + 1,
  ...Object.fromEntries(
    Object.keys(CATEGORIE).map((id) => [id, PROGETTI.filter((p) => p.categorie.includes(id)).length + (id === 'cto' ? 1 : 0)])
  ),
};

function Portfolio() {
  const badgeStyle = "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-medium text-neutral-300";
  const { hash } = useLocation();

  const [filtro, setFiltro] = useState('tutti');
  const [openGallery, setOpenGallery] = useState(null);
  const [dettagliUps, setDettagliUps] = useState(false);
  const bottoneDettagliRef = useRef(null);
  const bottoneChiudiRef = useRef(null);

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

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

  const mostraSnapix = filtro === 'tutti' || filtro === 'cto';
  const progetti = PROGETTI.filter((p) => filtro === 'tutti' || p.categorie.includes(filtro));
  const galleria = PROGETTI.find((p) => p.id === openGallery)?.galleria ?? [];

  return (
    <>
      <Seo path="/portfolio" />

      <motion.div
        className="flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white tracking-tight">Portfolio</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            Incarichi e progetti: direzione tecnica esterna, web app gestionali su misura, siti per il settore immobiliare, hospitality e servizi professionali, rendering 3D fotorealistici e video promozionali.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div role="group" aria-label="Filtra per servizio" className="inline-flex gap-1 p-1 rounded-full bg-[#121212] border border-white/10">
            {filtri.map(({ id, label }) => {
              const attivo = filtro === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={attivo}
                  onClick={(e) => {
                    setFiltro(id);
                    e.currentTarget.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' });
                  }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    attivo ? 'text-black' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {attivo && (
                    <motion.span
                      layoutId="filtro-attivo"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {label}
                    <span className={`ml-2 text-xs tabular-nums ${attivo ? 'text-black/50' : 'text-neutral-600'}`}>{conteggi[id]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout" initial={false}>
          {mostraSnapix && (
            <motion.section
              key="snapix"
              id={SNAPIX.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className={`${cardBase} p-8 md:p-12 scroll-mt-28`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-2">
                  <p className={`${eyebrow} mb-4`}>{SNAPIX.eyebrow}</p>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">{SNAPIX.titolo}</h2>
                  <p className="text-lg text-neutral-300 mb-6">{SNAPIX.ruolo}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{SNAPIX.testo}</p>
                  <span className={badgeStyle}>{CATEGORIE.cto}</span>
                </div>
                <ol className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SNAPIX.fasi.map(({ titolo, testo }, i) => (
                    <li key={titolo} className="p-5 rounded-2xl bg-white/3 border border-white/5">
                      <span className="text-xs font-mono text-neutral-600">0{i + 1}</span>
                      <h3 className="text-white font-medium mt-2 mb-1">{titolo}</h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">{testo}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.section>
          )}

          {progetti.map((p, i) => {
            const conAzione = p.galleria || p.dettagli;
            const invertito = i % 2 === 1;

            return (
              <motion.div
                key={p.id}
                id={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 scroll-mt-28"
              >
                <div className={`lg:col-span-2 flex flex-col gap-4 ${invertito ? 'lg:order-2' : ''}`}>
                  <div className={`${cardBase} overflow-hidden relative group ${conAzione ? 'aspect-video' : 'aspect-16/10 lg:aspect-auto lg:grow'}`}>
                    <img
                      src={p.img}
                      alt={p.alt}
                      {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy', decoding: 'async' })}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" aria-hidden="true" />
                  </div>

                  {p.galleria && (
                    <div className={`${cardBase} flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6`}>
                      <div>
                        <h3 className="text-white font-medium">Esplora il progetto 3D</h3>
                        <p className="text-sm text-neutral-400">{p.galleriaTesto}</p>
                      </div>
                      <button type="button" onClick={() => setOpenGallery(p.id)} className={`${bottoneSecondario} whitespace-nowrap w-full sm:w-auto`}>
                        <ImageIcon size={18} aria-hidden="true" /> Apri Galleria
                      </button>
                    </div>
                  )}

                  {p.dettagli && (
                    <div className={`${cardBase} flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6`}>
                      <div>
                        <h3 className="text-white font-medium">Scopri il progetto</h3>
                        <p className="text-sm text-neutral-400">Funzionalità e moduli della piattaforma.</p>
                      </div>
                      <button ref={bottoneDettagliRef} type="button" aria-haspopup="dialog" onClick={() => setDettagliUps(true)} className={`${bottoneSecondario} whitespace-nowrap w-full sm:w-auto`}>
                        <Info size={18} aria-hidden="true" /> Scopri i dettagli
                      </button>
                    </div>
                  )}
                </div>

                <section aria-labelledby={`${p.id}-titolo`} className={`${bentoCard} flex flex-col ${invertito ? 'lg:order-1' : ''}`}>
                  <div className={`${eyebrow} mb-2`}>{p.eyebrow}</div>
                  <h2 id={`${p.id}-titolo`} className="text-2xl font-medium text-white mb-4">{p.titolo}</h2>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{p.testo}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.categorie.map((c) => (
                        <span key={c} className={badgeStyle}>{CATEGORIE[c]}</span>
                      ))}
                      {p.partner && <span className={badgeStyle}>In collaborazione con {p.partner}</span>}
                    </div>

                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className={`${bottonePrimario} w-full`}>
                        Visita il sito web <span className="font-sans" aria-hidden="true">&rarr;</span>
                      </a>
                    )}

                    {p.riservato && (
                      <div
                        aria-disabled="true"
                        className="flex items-center justify-center gap-2 text-sm text-neutral-400 font-medium bg-white/5 border border-white/10 px-5 py-3 rounded-xl cursor-not-allowed select-none"
                      >
                        <Lock size={16} aria-hidden="true" /> Accesso riservato
                      </div>
                    )}
                  </div>
                </section>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <Lightbox
          open={openGallery !== null}
          close={() => setOpenGallery(null)}
          slides={galleria}
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

      {createPortal(
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
      </AnimatePresence>,
      document.body
      )}
    </>
  );
}

export default Portfolio;
