document.addEventListener("DOMContentLoaded", function() {
    
    const output = document.getElementById("output");
    const input = document.getElementById("cmd");
    const promptSpan = document.getElementById("prompt");
    const terminalContainer = document.getElementById("terminal");

    const defaultPrompt = 'user@lorenzosottile.it:~$ ';
    let isContactMode = false;
    let contactStep = 0;
    let contactData = { name: '', email: '', subject: '', message: '' };

    const logoDesktop = `
<span class="b-white">

                                                        @ @              
                    @@@                                @ @ @@           
                  @@   @@                             @@@  @@           
                 @      @@                            @@   @@           
                 @ @   @ @                            @   @@@           
                 @   @   @    @@@@@@@@@@@@@@          @  @@@@           
                 @   @   @  @@ @        @   @@        @ @  @@           
                 @   @   @ @   @@@@@@@@@      @        @  @ @           
                 @   @   @ @ @  @@      @   @@         @ @              
                 @   @   @ @      @@@@@@@@@@           @@  @            
                 @   @   @  @@   @      @   @          @ @@             
                 @   @   @    @@       @     @@        @@@ @            
                 @   @   @   @@ @       @   @ @        @@  @            
                 @   @   @ @@     @       @@  @        @@@@@            
   @@             @  @ @@   @@   @        @ @@         @ @@             
    @    @@@@@@     @@@      @@@          @@           @                
      @@         @                                     @                
        @@        @                                    @                
         @                                             @                
          @        @                                   @                
           @                   @@@                    @                 
            @                 @     @@@              @                  
             @@              @          @@          @                   
                @           @           @          @                    
                  @@@     @        @@@@@          @                     
                     @       @@  @@ @           @                       
                       @ @@@@@@  @@            @                        
                         @@   @@              @                         
                           @                @                           
                            @              @                            
                              @          @                              
                               @      @@                                
                                                                                                                    
</span>`;

    const logoMobile = `
<span class="b-white">
                              
          @                  @@     
         @  @              @  @     
        @ @@@  @@@@@@@     @ @@     
        @ @ @@@@      @    @ @@     
        @ @ @@@     @@     @@       
        @ @ @ @@@     @    @@@      
        @ @ @ @ @   @  @   @@@      
 @@@@    @@@  @ @    @@    @        
    @                      @        
         @                 @        
               @@@@        @        
       @      @           @         
          @ @   @@@     @           
            @@  @      @            
                                    
               @    @               
                                                                                                                    
</span>`;

    function getHeader() {
        const logo = (window.innerWidth < 768) ? logoMobile : logoDesktop;
        return `
${logo}

LORENZO SOTTILE
Developer & IT Consultant
System Ready.

<span class="b-white">=== MENU PRINCIPALE ===</span>
* <span class="b-white">servizi</span>    : Cosa offro
* <span class="b-white">progetti</span>   : Portfolio Lavori
* <span class="b-white">chi_sono</span>   : La mia storia
* <span class="b-white">cv</span>         : Curriculum Vitae
* <span class="b-white">contatti</span>   : Scrivimi una mail
* <span class="b-white">social</span>     : Link ai profili

<span class="b-white">=== SYSTEM & UTILITY ===</span>
* <span class="b-white">privacy</span>    : Privacy & Cookies
* <span class="b-white">revoca</span>     : Revoca Consensi
* <span class="b-white">aiuto</span>      : Mostra questo menu
* <span class="b-white">pulisci</span>    : Pulisce lo schermo

<span class="i-copyright">© 2026 Lorenzo Sottile.
Tutti i diritti riservati.
Made by Me with ♡.</span>

`;
    }

    const content = {
        chi_sono: `
<span class="b-white">CHI SONO</span>
Sono razionale, preciso e determinato. Amante della musica, ho prestato la mia voce con chitarra d’accompagnamento ad alcune piccole band locali e prodotto tracce musicali, con software appositi, per cantanti emergenti.

Sono appassionato da verdissima età al mondo dell’elettronica e dell'informatica, pratico riparazioni a “perditempo” di dispositivi elettronici.

<span class="b-white">IL MIO IMPEGNO PER L'INNOVAZIONE</span>
Il mondo dell’informatica e della tecnologia è in costante evoluzione, una trasformazione continua che mi appassiona e mi spinge a mettermi sempre in gioco. Per questo, il mio obiettivo primario è l’apprendimento continuo. Voglio rimanere aggiornato sulle ultime tendenze, tecnologie emergenti e migliori pratiche del settore.

<span class="b-white">UN PERCORSO DI FORMAZIONE SENZA FINE</span>
Credo fermamente che nel settore tech l'aggiornamento costante sia la chiave del successo. Per questo motivo, dedico parte del mio tempo all'apprendimento su alcune delle migliori piattaforme di formazione online, ampliando costantemente le mie conoscenze e competenze.

`,

        cv: `
<span class="b-white">CURRICULUM VITAE | LORENZO SOTTILE</span>

<span class="b-white">=== ESPERIENZA ===</span>

* <span class="b-white">Developer & IT Consultant</span> @ Freelance
  <span class="i-gray">mag 2024 - presente</span>
  Implementazione di soluzioni digitali integrate. La mia attività coniuga analisi tecnica, sviluppo e produzione multimediale. Nell'ambito Software & Web mi occupo dello sviluppo di software personalizzati, web app gestionali lato client/server e piattaforme web. La mia consulenza IT comprende l'analisi dei sistemi informatici, l'assistenza tecnica e l'ottimizzazione delle infrastrutture tecnologiche. Per il Digital Advertising gestisco la configurazione e l'ottimizzazione di campagne Ads su Google e Meta basate sull'analisi dei dati. Realizzo inoltre rendering fotorealistici, video animazione 3D e video editing, offrendo soluzioni specifiche per la valorizzazione del settore immobiliare.

* <span class="b-white">ICT Developer</span> @ Office Automation 2000 srl
  <span class="i-gray">marzo 2023 - marzo 2024</span>
  Sviluppo e gestione di software, applicazioni mobile e web app gestionali (lato client e lato server); assistenza hardware e software; sviluppo e cura di siti web ed i relativi servizi di web marketing.

* <span class="b-white">Assistente di funzione</span> @ CRINET
  <span class="i-gray">luglio 2022 - novembre 2022</span>
  Community moderation, social media management, content creation, graphic design e front end web development.

<span class="b-white">=== FORMAZIONE ===</span>

* <span class="b-white">start2impact</span>
  <span class="i-gray">Master professionalizzante | In corso, Full Stack Development e AI</span>
  Percorso formativo intensivo in Full Stack Development & AI focalizzato su AI e Prompt Engineering, HTML e CSS, JavaScript (Basics e Advanced), TypeScript, React, Angular, Vue.js, PHP e MySQL, Node.js, Java, culminando in un Progetto Finale completo.

* <span class="b-white">Università degli Studi di Milano-Bicocca</span>
  <span class="i-gray">Laurea triennale | Studi interrotti, Corso di laurea in Ottica e Optometria</span>
  Corso di Laurea triennale con attività di laboratorio (ottica geometrica e oftalmica, sistemi ottici, optometria, applicazione di lenti a contatto, ottica fisica, strumentazione optometrica avanzata), stage (Terzo Anno) e pratica optometrica, insegnamenti di ottica, fisica, matematica, anatomia, istologia e fisiologia, chimica, psicologia.

* <span class="b-white">Istituto Istruzione Superiore Ettore Majorana - Cesano Maderno (MB)</span>
  <span class="i-gray">Diploma di Maturità Scientifica opzione Scienze Applicate</span>
  Attività di laboratorio, simulazione d'impresa, Educazione Ambientale, Educazione alla Legalità, Meteorologia, Pronto Soccorso e Rianimazione Cardio-Polmonare, accoglienza nei laboratori scientifici per gli studenti delle Scuole Medie.

<span class="b-white">=== CERTIFICAZIONI SELEZIONATE ===</span>
  - Corso per Programmatori Java Junior
  - Certificate of Excellence - JavaScript and jQuery Survival Guide
  - Certificate of Excellence - Modern Web Design
  - Introduction to Cybersecurity
  - Certificate of Excellence – Responsive Web Design Fundamentals
  - Certificate of Excellence – UX Fundamentals
  - Google Analytics Advanced
  - Foundational C# with Microsoft

<span class="b-white">=== LINGUE ===</span>
  - Italiano: Madrelingua
  - Inglese: Livello Professionale Avanzato
  - Spagnolo: Livello Elementare

`,

        servizi: `
<span class="b-white">SERVIZI OFFERTI</span>
La mia curiosità mi spinge ad andare oltre la scrittura di codici. Essere curioso significa per me esplorare diversi ambiti: dal design allo sviluppo, dall’editing al rendering 3D, dal social media management al digital advertising.

1. <span class="b-white">Software & Web</span>
   - Sviluppo di software personalizzati e applicazioni su misura
   - Web app gestionali (lato client/server)
   - Progettazione e sviluppo di piattaforme web

2. <span class="b-white">IT Consulting</span>
   - Analisi dei sistemi informatici e delle infrastrutture esistenti
   - Assistenza tecnica specialistica e risoluzione problematiche IT
   - Ottimizzazione dei processi tecnologici e dell'efficienza sistemistica

3. <span class="b-white">Digital Advertising</span>
   - Configurazione e gestione campagne Ads su Google e Meta
   - Analisi costante dei dati per l'ottimizzazione delle conversioni
   - Strategie di targeting avanzato e monitoraggio delle performance

4. <span class="b-white">3D & Video Editing</span>
   - Realizzazione di rendering fotorealistici e planimetrie con arredi 3D
   - Video animazione 3D e soluzioni specifiche per la valorizzazione del settore immobiliare
   - Video editing e montaggi 
   
`,

        progetti: `
<span class="b-white">PORTFOLIO PROGETTI SELEZIONATI</span>

<span class="b-white">1. STUDIO CA'BELLA</span>
<span class="i-gray">Piattaforma Immobiliare & Gestionale Custom</span>
Sviluppo di un ecosistema digitale immobiliare completo. Il progetto integra un sito web WordPress ad alte prestazioni con un gestionale su misura, progettato per permettere agli agenti di aggiornare il portafoglio immobili in tempo reale, garantendo dati precisi e massima autonomia operativa.
<span class="i-darkgray">(Progetto realizzato in collaborazione con </span><a href="https://www.zerounomedia.com/" class="i-darkgray">Zerouno Media</a><span class="i-darkgray">)</span>

>> Visita il sito: 
<a href="https://studiocabella.it/">https://studiocabella.it/</a>


<span class="b-white">2. CASA VACANZE RIBOCCHI</span>
<span class="i-gray">Portale Hospitality & Booking System</span>
Realizzazione di un portale turistico per un podere esclusivo in Toscana. Il sito valorizza i servizi e l'esperienza locale attraverso un design immersivo e integra il sistema "Quovai" per la gestione diretta e sicura delle prenotazioni online e delle disponibilità.
<span class="i-darkgray">(Progetto realizzato in collaborazione con </span><a href="https://www.zerounomedia.com/" class="i-darkgray">Zerouno Media</a><span class="i-darkgray">)</span>

>> Visita il sito: 
<a href="https://www.casavacanzeribocchi.it/">https://www.casavacanzeribocchi.it/</a>


<span class="b-white">3. UP SOLUTIONS</span>
<span class="i-gray">Corporate Website & System Integration</span>
Progettazione e sviluppo di un sito vetrina responsive "tailor-made" per una realtà IT. Il progetto include integrazioni custom avanzate per estendere le funzionalità della piattaforma, riflettendo l'identità tecnologica del brand e ottimizzando la user experience per il target B2B.

>> Visita il sito: 
<a href="https://www.up-solutions.it/">https://www.up-solutions.it/</a>

`,

        privacy: `
<span class="b-white">PRIVACY POLICY & COOKIES</span>

Gentile Utente,
ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR), ti informo che i dati personali da te forniti o comunque acquisiti nel corso della navigazione sul sito (di seguito, il “Sito”) saranno trattati da Lorenzo Sottile, con sede legale in Via Orsini, 68, 20821 Meda (MB), in qualità di Titolare del trattamento.
Per qualsiasi richiesta o informazione puoi contattarmi via email all’indirizzo: <span class="b-white">info@lorenzosottile.it</span>.

<span class="b-white">FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO</span>
Il trattamento dei tuoi dati personali avviene per le seguenti finalità:
* Rispondere a richieste inviate tramite il modulo contatti;
* Gestire richieste di consulenza o collaborazione;
* Gestione amministrativa e adempimento di obblighi contrattuali e di legge;
* Inviare comunicazioni informative e, previo tuo consenso, promozionali relative ai servizi offerti;
* Analisi statistiche anonime per migliorare l’esperienza utente.

La base giuridica del trattamento è costituita dal tuo consenso, dall’esecuzione di un contratto o di misure precontrattuali, e dagli obblighi legali cui è soggetto il Titolare.

<span class="b-white">MODALITÀ DEL TRATTAMENTO</span>
Il trattamento è effettuato con strumenti manuali ed elettronici, nel rispetto delle misure di sicurezza previste dalla normativa vigente.
I dati saranno trattati unicamente da soggetti autorizzati dal Titolare e non saranno diffusi. Potranno essere comunicati a soggetti terzi (es. commercialista, consulenti IT) nei limiti strettamente necessari alla fornitura del servizio e sempre nel rispetto del principio di minimizzazione.

<span class="b-white">CONSERVAZIONE DEI DATI</span>
I dati saranno conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti. Per finalità fiscali, legali o contrattuali, potranno essere conservati anche successivamente alla cessazione del rapporto, secondo i termini di legge.

<span class="b-white">NATURA DEL CONFERIMENTO</span>
Il conferimento dei dati è facoltativo, ma il rifiuto a fornirli potrebbe comportare l’impossibilità di evadere richieste o fornire i servizi richiesti.

<span class="b-white">DIRITTI DELL’INTERESSATO</span>
In qualsiasi momento potrai esercitare i diritti previsti dagli artt. 15-22 del GDPR, tra cui:
* Accesso ai tuoi dati personali;
* Rettifica o cancellazione;
* Limitazione o opposizione al trattamento;
* Portabilità dei dati;
* Revoca del consenso (senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca);
* Reclamo all’Autorità Garante per la Protezione dei Dati Personali.

<span class="b-white">COOKIE POLICY</span>
Il Sito utilizza cookie tecnici e, previo consenso, cookie analitici e di profilazione. I cookie sono piccoli file di testo che il sito invia al dispositivo dell’utente per migliorare l’esperienza di navigazione.

<span class="b-white">Tipologie di cookie utilizzati:</span>
* <span class="b-white">Cookie tecnici (obbligatori):</span> necessari al corretto funzionamento del sito;
* <span class="b-white">Cookie analitici (anonimizzati):</span> per raccogliere informazioni statistiche aggregate sull’uso del sito;
* <span class="b-white">Cookie di terze parti:</span> (es. Google Analytics, social plugin) per finalità statistiche o promozionali, sempre previo consenso.

Puoi gestire le preferenze sui cookie attraverso il banner al primo accesso, oppure modificando le impostazioni del tuo browser.

<span class="b-white">COLLEGAMENTI ESTERNI</span>
Il Sito può contenere link verso altri siti web (es. profili social o portfolio esterni). Non sono responsabile delle informative sulla privacy adottate da tali siti terzi, che operano come autonomi Titolari del trattamento.

Per ogni chiarimento in merito alla presente informativa, puoi scrivere a: <span class="b-white">info@lorenzosottile.it</span>.

`,

        revoca: `
<span class="b-white">REVOCA CONSENSI</span>

Se desideri revocare dei consensi dati in precedenza, invia una mail al nostro indirizzo di posta elettronica, specificando nell’oggetto “Richiesta revoca consensi” ed inserendo nel testo della mail l’elenco dei consensi che desideri revocare, inserendo una o più voci delle seguenti:

* Revoca Comunicazioni a mezzo mail
* Revoca Comunicazioni marketing terze parti a mezzo mail
* Revoca cookie di profilazione
* Revoca cookie di profilazione marketing di terze parti

Per la gestione consensi cookie esterni, clicca sui seguenti link:
* Servizi di Google: <a href="https://myadcenter.google.com/home">https://myadcenter.google.com/home</a>
* Facebook: <a href="https://www.facebook.com/privacy/policies/cookies/">https://www.facebook.com/privacy/policies/cookies/</a>
* X (Twitter): <a href="https://help.x.com/it/rules-and-policies/x-cookies">https://help.x.com/it/rules-and-policies/x-cookies</a>

<span class="b-white">COME DISABILITARE I COOKIE MEDIANTE CONFIGURAZIONE DEL BROWSER</span>

<span class="b-white">1. Chrome</span>
* Eseguire il Browser Chrome
* Fare click sul menù presente nella barra degli strumenti del browser a fianco della finestra di inserimento url per la navigazione
* Selezionare Impostazioni
* Fare clic su Mostra Impostazioni Avanzate
* Nella sezione “Privacy” fare clic su bottone “Impostazioni contenuti”
* Nella sezione “Cookie” è possibile modificare le seguenti impostazioni relative ai cookie:
  - Consentire il salvataggio dei dati in locale
  - Modificare i dati locali solo fino alla chiusura del browser
  - Impedire ai siti di impostare i cookie
  - Bloccare i cookie di terze parti e i dati dei siti
  - Gestire le eccezioni per alcuni siti internet
  - Eliminazione di uno o tutti i cookie
* Per info: <a href="https://support.google.com/chrome/answer/95647?hl=it">https://support.google.com/chrome/answer/95647?hl=it</a>

<span class="b-white">2. Mozilla Firefox</span>
* Eseguire il Browser Mozilla Firefox
* Fare click sul menù presente nella barra degli strumenti del browser
* Selezionare Opzioni
* Seleziona il pannello Privacy
* Fare clic su Mostra Impostazioni Avanzate
* Nella sezione “Privacy” fare clic su bottone “Impostazioni contenuti“
* Nella sezione “Tracciamento” è possibile modificare:
  - Richiedi ai siti di non effettuare alcun tracciamento
  - Comunica ai siti la disponibilità ad essere tracciato
  - Non comunicare alcuna preferenza relativa al tracciamento
* Dalla sezione “Cronologia” è possibile:
  - Abilitando “Utilizza impostazioni personalizzate” selezionare di accettare i cookie di terze parti
  - Rimuovere i singoli cookie immagazzinati
* Per info: <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie">Link supporto Firefox</a>

<span class="b-white">3. Internet Explorer/Edge</span>
* Eseguire il Browser Internet Explorer/Edge
* Fare click sul pulsante Strumenti e scegliere Opzioni Internet
* Fare click sulla scheda Privacy e nella sezione Impostazioni modificare il dispositivo di scorrimento:
  - Bloccare tutti i cookie
  - Consentire tutti i cookie
  - Selezione dei siti da cui ottenere cookie
* Per info: <a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie">Link supporto Microsoft</a>

<span class="b-white">4. Safari 6</span>
* Eseguire il Browser Safari
* Fare click su Safari, selezionare Preferenze e premere su Privacy
* Nella sezione Blocca Cookie specificare come Safari deve accettare i cookie
* Per visionare quali siti hanno immagazzinato i cookie cliccare su Dettagli
* Per info: <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">Link supporto Apple</a>

<span class="b-white">5. Safari iOS (dispositivi mobile)</span>
* Eseguire il Browser Safari iOS
* Tocca su Impostazioni e poi Safari
* Tocca su Blocca Cookie e scegli tra le varie opzioni
* Per cancellare tutti i cookie, tocca su Impostazioni > Safari > Cancella Cookie e dati
* Per info: <a href="https://support.apple.com/it-it/HT201265">Link supporto iOS</a>

<span class="b-white">6. Opera</span>
* Eseguire il Browser Opera
* Fare click sul Preferenze poi su Avanzate e infine su Cookie
* Selezionare una delle seguenti opzioni:
  - Accetta tutti i cookie
  - Accetta i cookie solo dal sito che si visita
  - Non accettare mai i cookie
* Per info: <a href="https://help.opera.com/en/latest/web-preferences/">https://help.opera.com/en/latest/web-preferences/</a>

`
    };

    const contactQuestions = [
        { field: 'name', prompt: 'Il tuo Nome: ' },
        { field: 'email', prompt: 'La tua Email: ' },
        { field: 'subject', prompt: 'Oggetto: ' },
        { field: 'message', prompt: 'Messaggio: ' },
        { field: 'privacy_check', prompt: '<span class="b-white">Accetti e Invii? (S/N):</span> ' }
    ];

    function print(html) {
        const line = document.createElement("div");
        line.innerHTML = html;
        output.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
    }

    function init() {
        print(getHeader());
    }

    function startContactForm() {
        isContactMode = true;
        contactStep = 0;
        contactData = { name: '', email: '', subject: '', message: '' };
        
        print('<span class="b-white">MODULO CONTATTI</span>');
        print('<span class="i-darkgray">(Digita "annulla" in qualsiasi momento per interrompere)</span><br>');
        
        updatePrompt();
    }

    function updatePrompt() {
        if (contactStep < contactQuestions.length) {
            promptSpan.innerHTML = contactQuestions[contactStep].prompt;
        } else {
            promptSpan.innerText = defaultPrompt;
        }
    }

    function handleContactInput(val) {
        if (val.toLowerCase() === 'exit' || val.toLowerCase() === 'annulla') {
            print('<span class="b-red">> Operazione annullata.</span>');
            exitContactMode();
            return;
        }

        const currentQ = contactQuestions[contactStep];

        if (currentQ.field === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(val)) {
                print('<span class="b-red">> Errore: Indirizzo email non valido. Riprova.</span>');
                return;
            }
        }

        if (currentQ.field === 'privacy_check') {
            if (['s', 'si', 'y'].includes(val.toLowerCase())) {
                submitForm();
            } else if (['n', 'no'].includes(val.toLowerCase())) {
                print('<span class="b-red">> Consenso negato. Invio annullato.</span>');
                exitContactMode();
            } else {
                print('<span class="b-red">> Devi digitare "S" per accettare o "annulla" per uscire.</span>');
            }
        } else {
            contactData[currentQ.field] = val;
            contactStep++;
            
            if (contactStep < contactQuestions.length && contactQuestions[contactStep].field === 'privacy_check') {
                print('<span class="i-darkgray">Premendo il tasto "S" autorizzi il trattamento dei tuoi dati personali</span>');
                print('<span class="i-darkgray">in base al Regolamento UE n. 679/2016 (GDPR).</span><br>');
            }
            
            updatePrompt();
        }
    }

    function submitForm() {
        print('<br>Invio in corso...');
        
        input.disabled = true;
        
        emailjs.send('service_qtd5mzj', 'template_3v60xq9', contactData)
            .then(function() { 
                print('<span class="b-white">✓ Messaggio inviato con successo!</span>'); 
            })
            .catch(function(error) { 
                print('<span class="b-red">ERRORE: ' + JSON.stringify(error) + '</span>'); 
            })
            .finally(function() {
                input.disabled = false;
                exitContactMode();
                input.focus();
            });
    }

    function exitContactMode() {
        isContactMode = false;
        contactStep = 0;
        promptSpan.innerText = defaultPrompt;
    }

    function handleCommand(cmd) {
        if (!cmd) return;

        if (cmd === 'aiuto' || cmd === 'help') {
            print(getHeader());
        } else if (cmd === 'pulisci' || cmd === 'clear') {
            output.innerHTML = '';
            print(getHeader());
        } else if (cmd === 'social') {
             print('GitHub:   <a href="https://github.com/sadsotti">https://github.com/sadsotti</a>');
             print('LinkedIn: <a href="https://www.linkedin.com/in/lorenzo-sottile/">https://www.linkedin.com/in/lorenzo-sottile/</a>');
        } else if (cmd === 'contatti') {
            startContactForm();
        } else if (content[cmd]) {
            print(content[cmd]);
        } else {
            print(`<span class="b-red">Comando non riconosciuto: ${cmd}</span>. Digita <span class="b-white">aiuto</span>.`);
        }
    }

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const val = input.value.trim();
            const rawVal = input.value; 

            const currentPromptText = promptSpan.innerText;
            print(`<span id="prompt">${currentPromptText}</span> ${rawVal}`);

            input.value = '';

            if (isContactMode) {
                handleContactInput(val);
            } else {
                handleCommand(val.toLowerCase());
            }

            setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 10);
        }
    });

    document.addEventListener("click", function(e) {
        if (window.getSelection().toString().length === 0) {
            input.focus();
        }
    });

    init();
});