import { Compass, Laptop, TrendingUp, Box } from 'lucide-react';

export const SERVIZI = [
  {
    icon: Compass,
    titolo: "IT Consulting",
    breve: "Analisi e ottimizzazione dei sistemi IT, audit di sicurezza e architettura, direzione tecnica esterna e gestione dei fornitori.",
    voci: [
      "Analisi, assistenza specialistica e ottimizzazione dei sistemi IT",
      "Audit di sicurezza, architettura e qualità del codice, con un piano d'intervento ordinato per rischio e sforzo",
      "Direzione tecnica esterna: roadmap, scelte architetturali e priorità di sviluppo",
      "Gestione dei fornitori e passaggi di consegne tecnici, incluse le pipeline CI/CD",
    ],
  },
  {
    icon: Laptop,
    titolo: "Sviluppo Software & Web",
    breve: "Software su misura, web app gestionali e piattaforme web, dal progetto alla messa in produzione.",
    voci: [
      "Sviluppo di software personalizzati e applicazioni su misura",
      "Web app gestionali (lato client/server)",
      "Progettazione e sviluppo di piattaforme e siti web",
    ],
  },
  {
    icon: TrendingUp,
    titolo: "Digital Advertising",
    breve: "Campagne Google e Meta Ads basate sui dati, con ottimizzazione costante delle conversioni.",
    voci: [
      "Configurazione e gestione campagne Ads su Google e Meta",
      "Analisi costante dei dati per l'ottimizzazione delle conversioni",
      "Strategie di targeting avanzato e monitoraggio delle performance",
    ],
  },
  {
    icon: Box,
    titolo: "Rendering 3D & Video",
    breve: "Rendering fotorealistici, planimetrie 3D e video per valorizzare il settore immobiliare.",
    voci: [
      "Rendering fotorealistici e planimetrie con arredi 3D",
      "Video animazione 3D, video editing e videomontaggio promozionale",
      "Soluzioni specifiche per la valorizzazione del settore immobiliare",
    ],
  },
];

export const linkRichiesta = (titolo) =>
  `/contatti?oggetto=${encodeURIComponent(`Richiesta: ${titolo}`)}`;
