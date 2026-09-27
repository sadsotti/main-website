import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop, Settings, TrendingUp, Box } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants } from '../lib/ui';
import mioLogoSfondo from '../assets/logo.png';
import mioAvatar from '../assets/mia-foto.jpg';

const competenze = [
  {
    icon: Laptop,
    title: "Software & Web",
    desc: "Sviluppo di software personalizzati, app desktop, web app gestionali e piattaforme web."
  },
  {
    icon: Settings,
    title: "IT Consulting",
    desc: "Analisi, assistenza specialistica e ottimizzazione sistemi IT."
  },
  {
    icon: TrendingUp,
    title: "Digital Advertising",
    desc: "Creazione e gestione campagne Google/Meta e ottimizzazione conversioni."
  },
  {
    icon: Box,
    title: "3D & Video Editing",
    desc: "Rendering fotorealistici, planimetrie 3D immobiliari e video animazione."
  },
];

function Home() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-[#171717] transition-colors duration-300 relative overflow-hidden group";

  return (
    <>
      <Seo path="/" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[minmax(300px,auto)_minmax(250px,auto)] gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-2`}>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center overflow-hidden p-12" aria-hidden="true">
            <img
              src={mioLogoSfondo}
              alt=""
              className="w-full h-full object-contain object-center scale-150"
            />
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full w-full">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full text-xs font-semibold text-neutral-400 tracking-wider bg-[#121212]">
                <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
                Benvenuto!
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight text-white">
                Lorenzo Sottile
              </h1>
              <p className="text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
                Developer & IT Consultant. Costruisco soluzioni digitali moderne, unendo codice pulito, design e performance.
              </p>
            </div>

            <div className="mt-8 flex items-start">
              <div className="rainbow-container">
                <Link to="/contatti" className="w-full h-full bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-neutral-800 transition-all inline-flex items-center gap-2 group-hover:pl-8 duration-300">
                  Iniziamo un progetto <span className="text-lg font-sans" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-1 justify-center items-center text-center`}>
          <motion.div
            className="w-24 h-24 bg-neutral-800 rounded-full mb-6 flex items-center justify-center border border-white/10 relative z-10 overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img
              src={mioAvatar}
              alt="Foto di Lorenzo Sottile"
              width="96"
              height="96"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl font-medium text-white mb-2">Freelance</h2>
            <p className="text-neutral-500">Milano, Monza e Brianza & Remote</p>
            <Link to="/about" className="mt-6 text-sm text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">
              La mia storia
            </Link>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-1`}>
          <div className="relative z-10">
            <h2 className="text-2xl font-medium text-white mb-4">La mia filosofia</h2>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Razionale, preciso e determinato. Nel settore tech l'aggiornamento costante è fondamentale. Dedico il mio tempo all'apprendimento continuo per rimanere al passo.
            </p>
          </div>
          <Link to="/about" className="mt-6 text-sm text-neutral-300 hover:text-white flex justify-between items-center group/link relative z-10">
            Scopri di più <span className="transform group-hover/link:translate-x-1 transition-transform font-sans" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-2`}>
          <div className="relative z-10">
            <h2 className="text-2xl font-medium text-white mb-6">Aree di competenza</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competenze.map((comp) => (
                <motion.div key={comp.title} whileHover={{ y: -5 }} className="p-4 rounded-2xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10 flex flex-col">
                  <comp.icon className="text-neutral-400 mb-2" size={24} aria-hidden="true" />
                  <h3 className="text-white font-medium mb-1 text-sm">{comp.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{comp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <Link to="/servizi" className="mt-6 pt-5 border-t border-white/5 text-sm text-neutral-300 hover:text-white flex justify-between items-center group/link relative z-10">
            Scopri i dettagli di tutti i servizi offerti <span className="transform group-hover/link:translate-x-1 transition-transform font-sans" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.section>
      </motion.div>
    </>
  );
}

export default Home;
