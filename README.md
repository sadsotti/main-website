# My Main Website - Lorenzo Sottile

Questo repository contiene il codice sorgente del mio sito web personale, sono un Developer & IT Consultant specializzato in sviluppo web, software, app, digital advertising, video making e modellazione 3D per immobiliari. Il sito è progettato per mostrare i progetti, servizi, curriculum vitae e fornire un modo per essere contattato.

---

## 🚀 Panoramica del Progetto

Questo progetto rappresenta un sito web personale statico, interamente costruito utilizzando HTML, CSS (con Sass) e il framework Bootstrap 5. L'obiettivo principale è mostrare le mie competenze nello sviluppo web front-end e fornire un punto di contatto professionale per collaborazioni e consulenze.

Il sito include le seguenti sezioni principali:

* **Homepage:** Una pagina di benvenuto e introduzione ai servizi e al portfolio.
* **Chi Sono:** Una sezione dedicata alla mia storia e alla passione per l'informatica, la musica e l'elettronica, che guida il mio lavoro come developer e consulente IT.
* **Portfolio Progetti:** Una galleria dei lavori realizzati, come siti web per "Casa Vacanze Ribocchi" e "Studio Ca'Bella", e progetti di modellazione e render 3D per immobiliari.
* **Curriculum Vitae:** Una sezione dettagliata del mio percorso professionale, inclusi esperienza come IT Consultant e ICT Developer, competenze tecniche, formazione e certificazioni (es. Corso per Programmatori Java Junior, Google Analytics Advanced).
* **Contattami:** Un modulo di contatto per facilitare le comunicazioni e richieste.
* **Privacy Policy & Cookies:** Informazioni sulla gestione della privacy, sull'uso dei cookie e sui collegamenti a siti esterni.

---

## ✨ Funzionalità Principali

* **Design Responsive:** Layout adattabile e ottimizzato per diverse dimensioni di schermo (desktop, tablet, mobile) grazie all'utilizzo di Bootstrap 5.
* **HTML Semantico:** Struttura del codice HTML chiara, pulita e semanticamente corretta.
* **Stilizzazione Avanzata con Sass:** Gestione efficiente e modulare degli stili CSS attraverso l'uso del preprocessore Sass.
* **Modulo di Contatto Semplice:** Il modulo di contatto è gestito lato client e mostra un messaggio di conferma dopo l'invio. È predisposto per un'eventuale futura integrazione con servizi di invio email esterni.
* **Navigazione Intuitiva:** Menu di navigazione chiaro e facile da usare per accedere a tutte le sezioni del sito.
* **Icone Professionali:** Utilizzo di icone per migliorare l'interfaccia utente.

---

## 🛠️ Tecnologie Utilizzate

* **HTML5**
* **CSS3**
* **Sass (SCSS)**
* **Bootstrap 5** (versione 5.3.6)
* **JavaScript** (per funzionalità di base e interazioni UI, inclusa la gestione del modulo di contatto)

---

## 📦 Installazione e Setup

Per configurare e avviare il progetto in locale, segui questi semplici passaggi:

1.  **Clona il repository:**
    ```bash
    git clone [https://github.com/sadsotti/main-website.git](https://github.com/sadsotti/main-website.git)
    ```
2.  **Naviga nella directory del progetto:**
    ```bash
    cd main-website
    ```
3.  **Installa le dipendenze npm:**
    Questo comando installerà Sass e Bootstrap, necessari per il progetto.
    ```bash
    npm install
    ```
4.  **Avvia la compilazione di Sass in modalità "watch":**
    Questo comando monitorerà le modifiche ai tuoi file `.scss` e compilerà automaticamente il CSS, aggiornando `assets/css/style.css`.
    ```bash
    npm run sass:watch
    ```
5.  **Visualizza il sito:**
    Apri il file `index.html` nel tuo browser web preferito per vedere il sito in azione.

---

## 📧 Configurazione del Modulo di Contatto (Opzionale)

Il modulo di contatto in `contattami.html` è attualmente configurato per mostrare un messaggio di "successo" sul lato client quando viene inviato. Se desideri che il modulo invii effettivamente delle email, dovrai integrare un servizio di terze parti (ad esempio, EmailJS, Formspree, Netlify Forms, ecc.).

* **Esempio con EmailJS:**
    Se in futuro decidi di usare EmailJS, dovrai:
    1.  Creare un account su [EmailJS](https://www.emailjs.com/).
    2.  Ottenere la tua **Public Key** dal tuo account EmailJS.
    3.  Configurare un **Service ID** e un **Template ID** nel tuo account.
    4.  Aggiornare il tuo codice JavaScript (probabilmente nello script presente in `contattami.html` o un file `main.js` esterno) con queste credenziali, seguendo la documentazione di EmailJS.

---

## 🔗 Link Utili

* **Visualizza il Progetto Online:** [https://www.lorenzosottile.it/](https://www.lorenzosottile.it/)
* **Il Mio LinkedIn:** [https://www.linkedin.com/in/lorenzo-sottile/](https://www.linkedin.com/in/lorenzo-sottile/)

---

## 📄 Licenza

Questo progetto è rilasciato sotto la [Licenza MIT](https://opensource.org/licenses/MIT).