import { motion } from 'framer-motion';
import { FileText, Code, Terminal, Globe, Cpu, Layers, Database, Server, Coffee, Bot, Brain, Trophy, ShieldCheck } from 'lucide-react';
import { GithubIcon, CodepenIcon } from '../components/Icons';
import { Helmet } from 'react-helmet-async';

function Start2Impact() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 hover:bg-[#171717] transition-all duration-300 flex flex-col group";
  const badgeStyle = "px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-medium text-neutral-400";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const s2iProjects = [
    { 
      id: 1, icon: Code, titolo: "Fondamenti di Sviluppo", 
      stack: ["Flowchart", "Tavole di Verità", "Pseudocodice"], 
      desc: "Progettazione logica di un sistema di pubblicazione tramite diagrammi di flusso, tavole di verità e algoritmi condizionali.",
      cover: "/progetti/cover_fondamenti.webp", pdf: "/pdf/Progetto_Fondamenti_di_Sviluppo_di_Lorenzo_Sottile.pdf", linkCode: "", tipoCode: ""
    },
    { 
      id: 2, icon: Globe, titolo: "HTML e CSS", 
      stack: ["Bootstrap 5", "SASS", "Pixel Art"], 
      desc: "Sviluppo di un portfolio digitale responsive in stile pixel art, con integrazione Bootstrap e form EmailJS.",
      cover: "/progetti/cover_html_css.webp", pdf: "/pdf/Progetto_HTML_e_CSS_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/personal-website", tipoCode: "github" 
    },
    { 
      id: 3, icon: Terminal, titolo: "JavaScript", 
      stack: ["Vanilla JS", "DOM", "Netlify"], 
      desc: "Creazione di un contatore dinamico da zero senza framework, focalizzato sulla logica e la manipolazione del DOM.",
      cover: "/progetti/cover_javascript.webp", pdf: "/pdf/Progetto_JavaScript_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/counter-js", tipoCode: "github" 
    },
    { 
      id: 4, icon: Cpu, titolo: "JavaScript Advanced", 
      stack: ["API REST", "Webpack", "LESS"], 
      desc: "SPA per la ricerca di libri con integrazione Open Library API, validazione dati tramite Lodash e bundling con Webpack.",
      cover: "/progetti/cover_javascript_advanced.webp", pdf: "/pdf/Progetto_JavaScript_Advanced_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/owly-book-search", tipoCode: "github" 
    },
    { 
      id: 5, icon: ShieldCheck, titolo: "TypeScript", 
      stack: ["OOP", "Interfaces", "Modellazione Dati"], 
      desc: "Simulazione di un sistema di micromobilità urbana in OOP, strutturato con interfacce e tipizzazione forte.",
      cover: "/progetti/cover_typescript.webp", pdf: "/pdf/Progetto_TypeScript_di_Lorenzo_Sottile.pdf", linkCode: "https://codepen.io/sadsotti/pen/gbardBj", tipoCode: "codepen" 
    },
    { 
      id: 6, icon: Layers, titolo: "React", 
      stack: ["Context API", "Axios", "React Router"], 
      desc: "SPA per la ricerca di ricette vegetariane con navigazione dinamica, stato globale tramite Context API e chiamate Axios.",
      cover: "/progetti/cover_react.webp", pdf: "/pdf/Progetto_React_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/veggieverse", tipoCode: "github" 
    },
    { 
      id: 7, icon: Layers, titolo: "Angular 1", 
      stack: ["Angular Material", "Lazy Loading", "RxJS"], 
      desc: "Dashboard urbana ad alte prestazioni con architettura modulare, protezione delle rotte e autenticazione token-based.",
      cover: "/progetti/cover_angular_1.webp", pdf: "/pdf/Progetto_Angular_1_per_NTT_DATA_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/ntt4cities", tipoCode: "github" 
    },
    { 
      id: 8, icon: Layers, titolo: "Angular 2", 
      stack: ["Standalone Components", "RxJS (forkJoin)", "REST API"], 
      desc: "Client per Hacker News ottimizzato per prevenire il problema N+1 tramite chiamate parallele asincrone e UI resiliente.",
      cover: "/progetti/cover_angular_2.webp", pdf: "/pdf/Progetto_Angular_2_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/hacker-news-hub", tipoCode: "github" 
    },
    { 
      id: 9, icon: Layers, titolo: "Vue.js 1", 
      stack: ["Composition API", "Vite", "Theme Toggle"], 
      desc: "Sviluppo del gioco Tic Tac Toe con interattività reattiva, struttura a componenti modulare e cambio tema integrato.",
      cover: "/progetti/cover_vue_1.webp", pdf: "/pdf/Progetto_Vue.js_1_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/tictacvue", tipoCode: "github" 
    },
    { 
      id: 10, icon: Layers, titolo: "Vue.js 2", 
      stack: ["Reactive Store", "Dynamic Routing", "CSS 3D"], 
      desc: "Configuratore 3D di borracce con rendering interamente in CSS, store globale reattivo e routing dinamico.",
      cover: "/progetti/cover_vue_2.webp", pdf: "/pdf/Progetto_Vue.js_2_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/sunnee-kids", tipoCode: "github" 
    },
    { 
      id: 11, icon: Database, titolo: "PHP e MySQL", 
      stack: ["PDO", "RESTful API", "DB Relazionale"], 
      desc: "Architettura server-side RESTful per il calcolo dell'impatto ambientale, query sicure con PDO e filtri combinabili.",
      cover: "/progetti/cover_php_mysql.webp", pdf: "/pdf/Progetto_PHP_e_MySQL_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/refresh-food", tipoCode: "github" 
    },
    { 
      id: 12, icon: Server, titolo: "Node.js", 
      stack: ["Express.js", "MVC", "Mocha & Sinon"], 
      desc: "Sviluppo di un'API RESTful sicura con architettura MVC, gestione CRUD complessa e test automatici Unit ed E2E.",
      cover: "/progetti/cover_node.js.webp", pdf: "/pdf/Progetto_Node.js_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/tongue-api", tipoCode: "github" 
    },
    { 
      id: 13, icon: Coffee, titolo: "Java", 
      stack: ["Java 17", "Stream API", "Maven"], 
      desc: "Applicazione backend per e-commerce bio, con elaborazione dati tramite Stream API e persistenza su file CSV.",
      cover: "/progetti/cover_java.webp", pdf: "/pdf/Progetto_Java_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/pof-system", tipoCode: "github" 
    },
    { 
      id: 14, icon: Bot, titolo: "Agenti AI", 
      stack: ["n8n Workflow", "OpenAI API", "Airtable"], 
      desc: "Assistente virtuale su Telegram per l'automazione della produttività, capace di gestire email e calendari in totale autonomia.",
      cover: "/progetti/cover_agenti_ai.webp", pdf: "/pdf/Progetto_Agenti_AI_di_Lorenzo_Sottile.pdf", linkCode: "", tipoCode: "" 
    },
    { 
      id: 15, icon: Brain, titolo: "Agenti AI per Sviluppo", 
      stack: ["Gemini Vision API", "Prompt Engineering", "Serverless"], 
      desc: "Web app intelligente che sfrutta la Computer Vision per valutare capi d'abbigliamento, suggerire prezzi e generare JSON strutturati.",
      cover: "/progetti/cover_agenti_ai_sviluppo.webp", pdf: "/pdf/Progetto_Agenti_AI_per_Sviluppo_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/lookbook", tipoCode: "github" 
    },
    { 
      id: 16, icon: Trophy, titolo: "Progetto Finale", 
      stack: ["React & Node.js", "MySQL", "JWT Auth"], 
      desc: "RootLoop: Hub centralizzato per sviluppatori con chat sicura, archiviazione di snippet e database relazionale scalabile.",
      cover: "/progetti/cover_progetto_finale.webp", pdf: "/pdf/Progetto_Finale_Full_Stack_di_Lorenzo_Sottile.pdf", linkCode: "https://github.com/sadsotti/rootloop", tipoCode: "github" 
    },
  ];

  return (
    <>
      <Helmet>
        <title>Percorso Full Stack Development & AI | start2impact | Lorenzo Sottile</title>
        <meta name="description" content="Scopri il mio percorso nel Master in Full Stack Development e Agenti AI di start2impact. 16 progetti pratici, da React e Node.js fino all'integrazione di Intelligenza Artificiale." />
        <link rel="canonical" href="https://www.lorenzosottile.it/start2impact" />
        <meta property="og:title" content="Percorso Full Stack & AI | start2impact | Lorenzo Sottile" />
        <meta property="og:description" content="16 progetti pratici affrontati durante il Master in Full Stack Development e Agenti AI. Dai un'occhiata al mio codice e alle architetture realizzate." />
        <meta property="og:url" content="https://www.lorenzosottile.it/start2impact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div className="flex flex-col gap-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-neutral-400 tracking-widest mb-4 uppercase">
            Full Stack Development e Agenti AI
          </div>
          <h1 className="text-4xl font-semibold mb-4 text-white">Percorso start2impact</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            I progetti pratici e i moduli affrontati durante il Master. Ogni card rappresenta una mattoncino di questa esperienza formativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {s2iProjects.map((p) => (
            <motion.section key={p.id} variants={itemVariants} className={bentoCard}>
              <div className="aspect-video bg-neutral-900 rounded-2xl mb-5 overflow-hidden border border-white/5 relative group-hover:border-white/10 transition-colors">
                {p.cover ? (
                  <img 
                    src={p.cover} 
                    alt={`Copertina ${p.titolo}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity text-neutral-600">
                    <p className="text-[10px] font-mono uppercase tracking-widest italic">Preview Image</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <p.icon size={18} className="text-neutral-300" />
                  </div>
                  <h2 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">{p.titolo}</h2>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed mb-4 grow">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map((s, idx) => (
                    <span key={idx} className={badgeStyle}>{s}</span>
                  ))}
                </div>

                <div className={`grid ${p.linkCode ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mt-auto pt-4 border-t border-white/5`}>
                  <a 
                    href={p.pdf} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 py-2 bg-white text-black rounded-xl text-xs font-bold hover:bg-neutral-200 transition-colors"
                  >
                    <FileText size={14} /> PDF
                  </a>
                  
                  {p.linkCode && p.tipoCode === "github" && (
                    <a 
                      href={p.linkCode} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                  )}

                  {p.linkCode && p.tipoCode === "codepen" && (
                    <a 
                      href={p.linkCode} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                      <CodepenIcon size={14} /> CodePen
                    </a>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Start2Impact;