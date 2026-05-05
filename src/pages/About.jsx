import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Lightbulb, BookOpen, Briefcase, Award, Globe, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function About() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300";

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
        <title>Chi Sono | Lorenzo Sottile | Developer & IT Consultant</title>
        <meta name="description" content="Scopri la mia storia: un percorso tra musica, elettronica e sviluppo software. Leggi il mio CV completo e la mia filosofia di apprendimento continuo nel tech." />
        <link rel="canonical" href="https://www.lorenzosottile.it/about" />
      </Helmet>

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl font-semibold mb-4 text-white">Chi Sono</h1>
          <p className="text-neutral-400 max-w-2xl">
            Un tuffo nel mio percorso personale, professionale e accademico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.section variants={itemVariants} className={`${bentoCard} flex flex-col`}>
            <Music className="text-neutral-400 mb-6" size={32} strokeWidth={1.5} />
            <h2 className="font-medium text-white mb-3 uppercase tracking-wider text-xs">Chi Sono</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Sono razionale, preciso e determinato. Amante della musica, ho prestato la mia voce con chitarra d’accompagnamento ad alcune piccole band locali e prodotto tracce musicali, con software appositi, per cantanti emergenti.<br/><br/>
              Sono appassionato da verdissima età al mondo dell’elettronica e dell'informatica, pratico riparazioni a “perditempo” di dispositivi elettronici.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} flex flex-col`}>
            <Lightbulb className="text-neutral-400 mb-6" size={32} strokeWidth={1.5} />
            <h2 className="font-medium text-white mb-3 uppercase tracking-wider text-xs">Il mio impegno per l'innovazione</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Il mondo dell’informatica e della tecnologia è in costante evoluzione, una trasformazione continua che mi appassiona e mi spinge a mettermi sempre in gioco. Per questo, il mio obiettivo primario è l’apprendimento continuo. Voglio rimanere aggiornato sulle ultime tendenze, tecnologie emergenti e migliori pratiche del settore.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} flex flex-col`}>
            <BookOpen className="text-neutral-400 mb-6" size={32} strokeWidth={1.5} />
            <h2 className="font-medium text-white mb-3 uppercase tracking-wider text-xs">Un percorso di formazione senza fine</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Credo fermamente che nel settore tech l'aggiornamento costante sia la chiave del successo. Per questo motivo, dedico parte del mio tempo all'apprendimento su alcune delle migliori piattaforme di formazione online, ampliando costantemente le mie conoscenze e competenze.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2 flex flex-col`}>
            <h2 className="text-2xl font-medium text-white mb-8 flex items-center gap-3">
              <Briefcase size={24} className="text-neutral-400" /> Esperienza
            </h2>
            
            <div className="space-y-10">
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-white rounded-full left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                <h3 className="text-xl font-medium text-white mb-1">Developer & IT Consultant</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">Freelance</span>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded text-neutral-400">mag 2024 - presente</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Implementazione di soluzioni digitali integrate. La mia attività coniuga analisi tecnica, sviluppo e produzione multimediale. Nell'ambito Software & Web mi occupo dello sviluppo di software personalizzati, web app gestionali lato client/server e piattaforme web. La mia consulenza IT comprende l'analisi dei sistemi informatici, l'assistenza tecnica e l'ottimizzazione delle infrastrutture tecnologiche. Per il Digital Advertising gestisco la configurazione e l'ottimizzazione di campagne Ads su Google e Meta basate sull'analisi dei dati. Realizzo inoltre rendering fotorealistici, video animazione 3D e video editing, offrendo soluzioni specifiche per la valorizzazione del settore immobiliare.
                </p>
              </div>

              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-neutral-700 rounded-full left-[-6.5px] top-1.5"></div>
                <h3 className="text-xl font-medium text-white mb-1">ICT Developer</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">Office Automation 2000 srl</span>
                  <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-neutral-500">dicembre 2022 - marzo 2024</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Sviluppo e gestione di software, applicazioni mobile e web app gestionali (lato client e lato server); assistenza hardware e software; sviluppo e cura di siti web ed i relativi servizi di web marketing.
                </p>
              </div>

              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-neutral-700 rounded-full left-[-6.5px] top-1.5"></div>
                <h3 className="text-xl font-medium text-white mb-1">Assistente di funzione</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">CRINET</span>
                  <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-neutral-500">luglio 2022 - novembre 2022</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Community moderation, social media management, content creation, graphic design e front end web development.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col gap-6">
            <section className={`${bentoCard} grow`}>
              <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                <Award size={24} className="text-neutral-400" /> Certificazioni Selezionate
              </h2>
              <ul className="text-sm text-neutral-400 space-y-3 leading-relaxed">
                <li>• Corso per Programmatori Java Junior</li>
                <li>• Certificate of Excellence - JavaScript and jQuery Survival Guide</li>
                <li>• Certificate of Excellence - Modern Web Design</li>
                <li>• Introduction to Cybersecurity</li>
                <li>• Certificate of Excellence – Responsive Web Design Fundamentals</li>
                <li>• Certificate of Excellence – UX Fundamentals</li>
                <li>• Google Analytics Advanced</li>
                <li>• Foundational C# with Microsoft</li>
                <li>• CS107: C++ Programming</li>
              </ul>
            </section>

            <section className={bentoCard}>
              <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                <Globe size={24} className="text-neutral-400" /> Lingue
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-sm text-white">Italiano</span>
                  <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">Madrelingua</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-sm text-white">Inglese</span>
                  <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">Livello Professionale Avanzato</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-sm text-white">Spagnolo</span>
                  <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">Livello Elementare</span>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-3 flex flex-col`}>
            <h2 className="text-2xl font-medium text-white mb-8 flex items-center gap-3">
              <GraduationCap size={28} className="text-neutral-400" /> Formazione
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#171717] p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col">
                <h3 className="text-xl font-medium text-white mb-1">start2impact</h3>
                <p className="text-xs text-neutral-500 font-medium mb-4 uppercase tracking-wider">Master professionalizzante</p>
                <p className="text-base text-neutral-200 font-medium mb-4">Full Stack Development e Agenti AI</p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  Percorso formativo intensivo focalizzato su AI e Prompt Engineering, HTML, CSS, JavaScript (Basics e Advanced), TypeScript, React, Angular, Vue.js, PHP e MySQL, Node.js e Java.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                  Include la progettazione di Agenti AI no-code per la produttività e Agenti AI avanzati per lo sviluppo, con la realizzazione di un chatbot AI-based che integra front-end, back-end e modelli di intelligenza artificiale, culminando infine in un Progetto Finale completo che sintetizza le competenze acquisite.
                </p>
                
                <div className="mt-auto">
                  <Link to="/start2impact" className="inline-flex items-center gap-2 text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors w-fit">
                    Vedi i progetti del Master <span className="font-sans">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#171717] p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-1">Università degli Studi di Milano-Bicocca</h3>
                  <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">Laurea triennale | Studi interrotti</p>
                  <p className="text-sm text-neutral-200 font-medium mb-3">Corso di laurea in Ottica e Optometria</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Corso di Laurea triennale con attività di laboratorio (ottica geometrica e oftalmica, sistemi ottici, optometria, applicazione di lenti a contatto, ottica fisica, strumentazione optometrica avanzata), stage (Terzo Anno) e pratica optometrica, insegnamenti di ottica, fisica, matematica, anatomia, istologia e fisiologia, chimica, psicologia.
                  </p>
                </div>

                <div className="bg-[#171717] p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-1">Istituto Istruzione Superiore Ettore Majorana - Cesano Maderno (MB)</h3>
                  <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">Diploma di Maturità Scientifica opzione Scienze Applicate</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Attività di laboratorio, simulazione d'impresa, Educazione Ambientale, Educazione alla Legalità, Meteorologia, Pronto Soccorso e Rianimazione Cardio-Polmonare, accoglienza nei laboratori scientifici per gli studenti delle Scuole Medie.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}

export default About;