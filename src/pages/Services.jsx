import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Laptop, Settings, TrendingUp, Box } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants } from '../lib/ui';

const servizi = [
  {
    icon: Laptop,
    titolo: "Software & Web",
    voci: [
      "Sviluppo di software personalizzati e applicazioni su misura",
      "Web app gestionali (lato client/server)",
      "Progettazione e sviluppo di piattaforme web",
    ],
  },
  {
    icon: Settings,
    titolo: "IT Consulting",
    voci: [
      "Analisi dei sistemi informatici e delle infrastrutture esistenti",
      "Assistenza tecnica specialistica e risoluzione problematiche IT",
      "Ottimizzazione dei processi tecnologici e dell'efficienza sistemistica",
    ],
  },
  {
    icon: TrendingUp,
    titolo: "Digital Advertising",
    voci: [
      "Configurazione e gestione campagne Ads su Google e Meta",
      "Analisi costante dei dati per l'ottimizzazione delle conversioni",
      "Strategie di targeting avanzato e monitoraggio delle performance",
    ],
  },
  {
    icon: Box,
    titolo: "3D & Video Editing",
    voci: [
      "Realizzazione di rendering fotorealistici e planimetrie con arredi 3D",
      "Video animazione 3D e soluzioni specifiche per la valorizzazione del settore immobiliare",
    ],
  },
];

function Services() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-8 hover:bg-[#171717] transition-colors duration-300";

  return (
    <>
      <Seo path="/servizi" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="md:col-span-2 mb-4">
          <h1 className="text-4xl font-semibold mb-4 text-white">Servizi Offerti</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            La mia curiosità mi spinge ad andare oltre la scrittura di codice. Essere curioso significa per me esplorare diversi ambiti: dal design allo sviluppo, dall’editing al rendering 3D, dal social media management al digital advertising.
          </p>
        </motion.div>

        {servizi.map(({ icon: Icon, titolo, voci }) => (
          <motion.section key={titolo} variants={itemVariants} className={bentoCard}>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 mb-6 border border-white/10">
              <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-medium text-white mb-4">{titolo}</h2>
            <ul className="text-neutral-400 text-sm space-y-3">
              {voci.map((voce) => (
                <li key={voce} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{voce}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6`}>
          <div>
            <h2 className="text-2xl font-medium text-white mb-2">Hai un progetto in mente?</h2>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
              Raccontami di cosa hai bisogno: analizziamo insieme obiettivi, tempi e soluzione più adatta.
            </p>
          </div>
          <Link to="/contatti" className="shrink-0 text-sm text-black font-semibold bg-white px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors text-center">
            Richiedi una consulenza <span className="font-sans" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.section>
      </motion.div>
    </>
  );
}

export default Services;
