import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants, bentoCard } from '../lib/ui';

function NotFound() {
  return (
    <>
      <Seo notFound />

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants} className={`${bentoCard} flex flex-col items-start gap-6 py-12 md:py-16`}>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-neutral-300">
            <Compass size={28} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Errore 404</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Pagina non trovata</h1>
            <p className="text-neutral-400 max-w-xl leading-relaxed">
              La pagina che stai cercando non esiste o è stata spostata. Controlla l'indirizzo oppure riparti da una delle sezioni principali.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
              Torna alla home <span className="font-sans">&rarr;</span>
            </Link>
            <Link to="/portfolio" className="text-sm text-white font-medium bg-white/10 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/20 transition-colors">
              Vedi il portfolio
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}

export default NotFound;
