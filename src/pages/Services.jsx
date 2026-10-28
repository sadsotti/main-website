import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { containerVariants, itemVariants, inView, cardBase, bentoCard, eyebrow, bottonePrimario } from '../lib/ui';
import { PITCH } from '../lib/site';
import { SERVIZI, linkRichiesta } from '../lib/services';

const formuleCto = [
  {
    titolo: "Audit tecnico",
    testo: "Un'analisi completa di sicurezza, architettura e qualità del codice, che si chiude con una roadmap d'intervento ordinata per rischio e sforzo.",
  },
  {
    titolo: "Fractional CTO",
    testo: "Direzione tecnica continuativa: scelte architetturali, priorità di sviluppo, gestione dei fornitori e degli incidenti in produzione.",
  },
];

const metodo = [
  { titolo: "Call conoscitiva", testo: "Una prima chiacchierata per capire obiettivi, contesto e vincoli." },
  { titolo: "Analisi", testo: "Studio la situazione attuale: sistemi, codice, fornitori o materiali già esistenti." },
  { titolo: "Proposta", testo: "Ti presento una soluzione chiara, con priorità, tempi e costi." },
  { titolo: "Realizzazione e supporto", testo: "Porto avanti il lavoro e resto il tuo riferimento anche dopo la consegna." },
];

function Services() {
  const [cto, ...altri] = SERVIZI;

  return (
    <>
      <Seo path="/servizi" />

      <motion.div className="flex flex-col gap-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white tracking-tight">Servizi</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            {PITCH}
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className={`${cardBase} p-8 md:p-12`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 border border-white/10">
                  <cto.icon size={28} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-neutral-600">01</span>
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">{cto.titolo}</h2>
              <ul className="text-neutral-400 text-sm space-y-3 mb-8">
                {cto.voci.map((voce) => (
                  <li key={voce} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{voce}</span>
                  </li>
                ))}
              </ul>
              <Link to={linkRichiesta(cto.titolo)} className="mt-auto text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2 group/link w-fit py-2">
                Richiedi informazioni <span className="transition-transform group-hover/link:translate-x-1 font-sans" aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className={eyebrow}>Due formule</p>
              {formuleCto.map(({ titolo, testo }) => (
                <div key={titolo} className="p-6 rounded-2xl bg-white/3 border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-2">{titolo}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{testo}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {altri.map(({ icon: Icon, titolo, voci }, i) => (
            <motion.section key={titolo} variants={itemVariants} className={`${bentoCard} flex flex-col`}>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 border border-white/10">
                  <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-neutral-600">0{i + 2}</span>
              </div>
              <h2 className="text-2xl font-medium text-white mb-4">{titolo}</h2>
              <ul className="text-neutral-400 text-sm space-y-3 mb-8">
                {voci.map((voce) => (
                  <li key={voce} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{voce}</span>
                  </li>
                ))}
              </ul>
              <Link to={linkRichiesta(titolo)} className="mt-auto text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2 group/link w-fit py-2">
                Richiedi informazioni <span className="transition-transform group-hover/link:translate-x-1 font-sans" aria-hidden="true">&rarr;</span>
              </Link>
            </motion.section>
          ))}
        </div>
      </motion.div>

      <motion.section className="mt-24" variants={containerVariants} {...inView} aria-labelledby="metodo-titolo">
        <motion.div variants={itemVariants} className="mb-8">
          <p className={`${eyebrow} mb-3`}>Come lavoro</p>
          <h2 id="metodo-titolo" className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-xl">
            Come prendiamo in mano il tuo progetto.
          </h2>
        </motion.div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metodo.map(({ titolo, testo }, i) => (
            <motion.li key={titolo} variants={itemVariants} className={bentoCard}>
              <span className="text-4xl font-semibold text-white/15 tracking-tight">0{i + 1}</span>
              <h3 className="text-lg font-medium text-white mt-4 mb-2">{titolo}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{testo}</p>
            </motion.li>
          ))}
        </ol>
      </motion.section>

      <motion.section variants={itemVariants} {...inView} className={`${cardBase} mt-24 p-8 md:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6`}>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Hai un progetto in mente?</h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
            Raccontami di cosa hai bisogno: analizziamo insieme obiettivi, tempi e soluzione più adatta.
          </p>
        </div>
        <Link to="/contatti" className={`${bottonePrimario} shrink-0`}>
          Richiedi una consulenza <span className="font-sans" aria-hidden="true">&rarr;</span>
        </Link>
      </motion.section>
    </>
  );
}

export default Services;
