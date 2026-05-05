import { motion } from 'framer-motion';
import { Laptop, Settings, TrendingUp, Box } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function Services() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-8 hover:bg-[#171717] transition-colors duration-300";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <>
      <Helmet>
        <title>Servizi IT e Digitali | Software, Ads & 3D | Lorenzo Sottile</title>
        <meta name="description" content="Offro consulenza IT a 360°: sviluppo software personalizzato, gestione campagne Digital Advertising (Google/Meta) e rendering 3D per il settore immobiliare." />
        <link rel="canonical" href="https://www.lorenzosottile.it/servizi" />
      </Helmet>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="md:col-span-2 mb-4">
          <h1 className="text-4xl font-semibold mb-4 text-white">Servizi Offerti</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            La mia curiosità mi spinge ad andare oltre la scrittura di codici. Essere curioso significa per me esplorare diversi ambiti: dal design allo sviluppo, dall’editing al rendering 3D, dal social media management al digital advertising.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className={bentoCard}>
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 mb-6 border border-white/10">
            <Laptop size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-medium text-white mb-4">Software & Web</h2>
          <ul className="text-neutral-400 text-sm space-y-3">
            <li>• Sviluppo di software personalizzati e applicazioni su misura</li>
            <li>• Web app gestionali (lato client/server)</li>
            <li>• Progettazione e sviluppo di piattaforme web</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 mb-6 border border-white/10">
            <Settings size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-medium text-white mb-4">IT Consulting</h2>
          <ul className="text-neutral-400 text-sm space-y-3">
            <li>• Analisi dei sistemi informatici e delle infrastrutture esistenti</li>
            <li>• Assistenza tecnica specialistica e risoluzione problematiche IT</li>
            <li>• Ottimizzazione dei processi tecnologici e dell'efficienza sistemistica</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 mb-6 border border-white/10">
            <TrendingUp size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-medium text-white mb-4">Digital Advertising</h2>
          <ul className="text-neutral-400 text-sm space-y-3">
            <li>• Configurazione e gestione campagne Ads su Google e Meta</li>
            <li>• Analisi costante dei dati per l'ottimizzazione delle conversioni</li>
            <li>• Strategie di targeting avanzato e monitoraggio delle performance</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 mb-6 border border-white/10">
            <Box size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-medium text-white mb-4">3D & Video Editing</h2>
          <ul className="text-neutral-400 text-sm space-y-3">
            <li>• Realizzazione di rendering fotorealistici e planimetrie con arredi 3D</li>
            <li>• Video animazione 3D e soluzioni specifiche per la valorizzazione del settore immobiliare</li>
            <li>• Video editing e montaggi</li>
          </ul>
        </motion.section>
      </motion.div>
    </>
  );
}

export default Services;