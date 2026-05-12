import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image as ImageIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function Portfolio() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300";
  const badgeStyle = "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-medium text-neutral-300";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  const gallerie = {
    liberta: [
      { src: "/progetti/residenza_corso_liberta_1.webp" },
      { src: "/progetti/residenza_corso_liberta_2.webp" },
      { src: "/progetti/residenza_corso_liberta_3.webp" },
      { src: "/progetti/residenza_corso_liberta_4.webp" },
      { src: "/progetti/residenza_corso_liberta_5.webp" },
      { src: "/progetti/residenza_corso_liberta_6.webp" }
    ],
    callas: [
      { src: "/progetti/callas_attico_1.webp" },
      { src: "/progetti/callas_attico_2.webp" },
      { src: "/progetti/callas_attico_3.webp" },
      { src: "/progetti/callas_attico_4.webp" },
      { src: "/progetti/callas_attico_5.webp" },
      { src: "/progetti/callas_attico_6.webp" },
    ],
    nella: [
      { src: "/progetti/residenza_nella_1.webp" },
      { src: "/progetti/residenza_nella_2.webp" },
      { src: "/progetti/residenza_nella_3.webp" },
      { src: "/progetti/residenza_nella_4.webp" },
      { src: "/progetti/residenza_nella_5.webp" },
      { src: "/progetti/residenza_nella_6.webp" }
    ]
  };

  const [openGallery, setOpenGallery] = useState(null);

  return (
    <>
      <Helmet>
        <title>Portfolio Progetti | Sviluppo Web e 3D | Lorenzo Sottile</title>
        <meta name="description" content="Esplora i miei progetti: dallo sviluppo di piattaforme web immobiliari e portali booking, fino alla realizzazione di rendering 3D fotorealistici di pregio." />
        <link rel="canonical" href="https://www.lorenzosottile.it/portfolio" />
      </Helmet>

      <motion.div 
        className="flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl font-semibold mb-4 text-white">Portfolio Progetti</h1>
          <p className="text-neutral-400 max-w-2xl">
            Selezione di progetti recenti.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <section className={`${bentoCard} p-0 overflow-hidden relative aspect-video group`}>
              <img 
                src="/progetti/mockup-corso-liberta.webp" 
                alt="Mockup Residenza Corso Libertà" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </section>
            
            <section className={`${bentoCard} flex flex-col sm:flex-row items-center justify-between gap-4 p-6`}>
              <div>
                <h3 className="text-white font-medium">Esplora il progetto 3D</h3>
                <p className="text-sm text-neutral-400">Render interni e planimetrie arredate.</p>
              </div>
              <button onClick={() => setOpenGallery('liberta')} className="text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-2">
                <ImageIcon size={18} /> Apri Galleria
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
                Visita il sito web <span className="font-sans">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img 
              src="/progetti/mockup-studio-cabella.webp" 
              alt="Mockup Studio Ca'Bella" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
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
                Visita il sito web <span className="font-sans">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img 
              src="/progetti/mockup-casa-vacanze-ribocchi.webp" 
              alt="Mockup Casa Vacanze Ribocchi" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
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
                Visita il sito web <span className="font-sans">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img 
              src="/progetti/mockup-easy-change-italia.webp" 
              alt="Mockup Easy Change Italia" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </section>

          <section className={`${bentoCard} lg:col-span-1 flex flex-col`}>
            <div className="text-xs font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Fintech & Currency Exchange Booking System</div>
            <h2 className="text-2xl font-medium text-white mb-4">Easy Change Italia</h2>
            
            <div className="mb-6">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Sviluppo di una piattaforma finanziaria specializzata per un ufficio di cambio valuta nel cuore di Milano. Il progetto integra la gestione automatizzata dei tassi in tempo reale tramite API finanziarie, con algoritmi personalizzati per il calcolo dello spread. Include un avanzato motore di prenotazione che consente agli utenti di riservare valuta fisica, supportato da un'architettura di notifiche e promemoria automatici per l'ottimizzazione dei flussi operativi aziendali.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={badgeStyle}>In collaborazione con Zerouno Media</span>
              </div>
              <a href="https://www.easychangeitalia.com/" target="_blank" rel="noreferrer" className="block text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
                Visita il sito web <span className="font-sans">&rarr;</span>
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
                onClick={() => setOpenGallery('callas')} 
                className="w-full text-sm text-white font-medium bg-white/10 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <ImageIcon size={18} /> Visualizza i Render
              </button>
            </div>
          </section>

          <section className={`${bentoCard} lg:col-span-2 p-0 overflow-hidden relative aspect-16/10 lg:aspect-auto group`}>
            <img 
              src="/progetti/mockup-callas-immobiliare.webp" 
              alt="Mockup Calla's Immobiliare" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <section className={`${bentoCard} p-0 overflow-hidden relative aspect-video group`}>
              <img 
                src="/progetti/mockup-residenza-nella.webp" 
                alt="Mockup Residenza Nella" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </section>
            
            <section className={`${bentoCard} flex flex-col sm:flex-row items-center justify-between gap-4 p-6`}>
              <div>
                <h3 className="text-white font-medium">Esplora il progetto 3D</h3>
                <p className="text-sm text-neutral-400">Render fotorealistici degli interni e planimetrie.</p>
              </div>
              <button onClick={() => setOpenGallery('nella')} className="text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors whitespace-nowrap flex items-center gap-2">
                <ImageIcon size={18} /> Apri Galleria
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
                Visita il sito web <span className="font-sans">&rarr;</span>
              </a>
            </div>
          </section>
        </motion.div>

        <Lightbox
          open={openGallery !== null}
          close={() => setOpenGallery(null)}
          slides={openGallery ? gallerie[openGallery] : []}
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
                  alt="Render 3D" 
                  className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
            )
          }}
        />
        
      </motion.div>
    </>
  );
}

export default Portfolio;