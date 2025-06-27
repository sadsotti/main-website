# Il Mio Sito Web - Lorenzo Sottile

Questo repository contiene il codice sorgente del mio sito web personale, sviluppato come progetto pratico nell'ambito del percorso **HTML & CSS** di **start2impact**.

---

## 🚀 Panoramica del Progetto

Questo progetto rappresenta un sito web personale statico, interamente costruito utilizzando HTML, CSS (con Sass) e il framework Bootstrap 5. L'obiettivo principale è mostrare le mie competenze nello sviluppo web front-end e fornire un punto di contatto professionale.

Il sito include le seguenti sezioni principali:

* **Homepage:** Una pagina di benvenuto e introduzione.
* **CV (Curriculum Vitae):** Una sezione dettagliata del mio percorso professionale e formativo.
* **Contattami:** Un modulo di contatto funzionante per facilitare le comunicazioni.

---

## ✨ Funzionalità Principali

* **Design Responsive:** Layout adattabile e ottimizzato per diverse dimensioni di schermo (desktop, tablet, mobile) grazie all'utilizzo di Bootstrap 5.
* **HTML Semantico:** Struttura del codice HTML chiara, pulita e semanticamente corretta.
* **Stilizzazione Avanzata con Sass:** Gestione efficiente e modulare degli stili CSS attraverso l'uso del preprocessore Sass.
* **Modulo di Contatto Funzionante:** Integrazione lato client con [EmailJS](https://www.emailjs.com/) per l'invio diretto di messaggi senza necessità di un server backend.
* **Icone Professionali:** Utilizzo di Bootstrap Icons per migliorare l'interfaccia utente.
* **Font Personalizzati:** Importazione di font da Google Fonts (`VT323`).

---

## 🛠️ Tecnologie Utilizzate

* **HTML5**
* **CSS3**
* **Sass (SCSS)**
* **Bootstrap 5**
* **JavaScript (Solo per integrazione EmailJS)**
* **EmailJS** (per la gestione del modulo di contatto)

---

## 📧 Configurazione del Modulo di Contatto (EmailJS)

Il modulo di contatto utilizza EmailJS per inviare email direttamente dal browser. Per farlo funzionare correttamente, si deve:

1.  Creare un account su [EmailJS](https://www.emailjs.com/).
2.  Ottenere la **Public Key** dalla sezione "Account" dal menù di sinistra di EmailJS.
3.  Configurare un **Service ID** e un **Template ID**.
4.  Aggiornare il file (nel mio caso) `contattami.html` con la **Public Key EmailJS**:

    ```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script> 
    <script type="text/javascript">
       (function() {
          emailjs.init('LA_KEY_PUBBLICA_FORNITA_DA_EMAILJS'); // attenzione alla source, a EmailJS piace cambiare!
       })();
    </script>
    ```
5.  Aggiornare il file `assets/js/main.js` con il **Service ID** e **Template ID**:
    ```javascript
    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formParams) // ovviamente, sostituire SERVICE_ID e TEMPLATE_ID
    ```

---

## 🔗 Link Utili

* **Visualizza il Progetto:** [https://sadsotti.github.io/personal-website/](https://sadsotti.github.io/personal-website/) }]
* **start2impact:** [https://www.start2impact.it/](https://www.start2impact.it/)
* **EmailJS:** [https://www.emailjs.com/](https://www.emailjs.com/)
