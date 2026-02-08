# 📟 Lorenzo Sottile – Main Personal Website (Vanilla JS Edition)

This repository contains the source code for my personal website, **Lorenzo Sottile | Developer & IT Consultant**.

Unlike traditional portfolios, this website is designed as an **interactive Command Line Interface (CLI)** running entirely in the browser. It reflects my passion for technology, coding, and electronics, offering a unique "hacker-style" user experience.

**Note:** The website content is entirely in **Italian** to serve my primary client base in Italy.

---

## 🚀 Overview & Philosophy

The project is a **Single Page Application (SPA)** built entirely from scratch using **Vanilla JavaScript**.

Initially considered using *jQuery Terminal*, I decided to build a **custom CLI engine** to resolve specific styling constraints and mobile usability issues. This decision ensures:

1.  **Total Style Control:** No external library styles interfering with the design. The interface uses a clean, bold **Courier New** typography without unnecessary effects (no text-shadows), aiming for high contrast and readability.
2.  **Native Scroll Behavior:** The custom engine respects the browser's native scrolling, ensuring a smooth experience on touch devices where libraries often "hijack" the scroll.
3.  **Perfect Mobile Compatibility:** By using standard HTML `<input>` elements, the virtual keyboard on smartphones works seamlessly without breaking the layout or hiding the prompt.
4.  **Performance:** Zero dependencies mean the site is incredibly lightweight and loads instantly.

### Key Features
* **💻 Custom CLI Engine:** A lightweight JavaScript core that parses commands, handles history, and renders HTML output directly to the DOM.
* **📱 Responsive ASCII Art:** Automatically detects screen width to serve a full-sized ASCII logo for desktops or a compact version for mobile devices.
* **📧 Smart Contact Form:** The `contatti` command triggers a step-by-step wizard to send emails via **EmailJS**. It includes **real-time email validation** (Regex) to ensure data accuracy before sending.
* **🛡️ Mobile Optimized:** Layout handles the virtual keyboard gracefully, keeping the input line always accessible.
* **🔒 Legal Compliance:** Includes GDPR-compliant consent steps within the contact form and dedicated `privacy` / `revoca` commands.

---

## 🛠️ Tech Stack

* **Core:** HTML5, CSS3, **Vanilla JavaScript (ES6+)**.
* **No Libraries:** jQuery and jQuery Terminal were explicitly removed to optimize performance and UI control.
* **Services:**
    * [EmailJS](https://www.emailjs.com/) (Client-side email handling).
* **Styling:** Pure CSS.
    * Font: **Courier New** (Bold).
    * Design: Minimalist High-Contrast (White text on Black background).
    * Layout: Flexbox for command line alignment.

---

## ⌨️ Available Commands

Here is the list of commands available in the terminal:

### 📂 Main Menu
| Command | Description |
| :--- | :--- |
| **`servizi`** | Details the IT services I offer (Web, 3D, Consulting). |
| **`progetti`** | Lists selected works (Studio Ca'Bella, UP Solutions, etc.) with detailed descriptions. |
| **`chi_sono`** | Displays my bio, background, and philosophy. |
| **`cv`** | Prints my full Curriculum Vitae. |
| **`contatti`** | Launches the interactive contact wizard with **email validation**. |
| **`social`** | Prints clickable links to GitHub and LinkedIn. |

### ⚙️ System & Utility
| Command | Description |
| :--- | :--- |
| **`privacy`** | Displays the Privacy & Cookie Policy. |
| **`revoca`** | Instructions for revoking data consents. |
| **`aiuto`** | Displays the help menu. |
| **`pulisci`** | Clears the screen (keeps the header visible). |

---

## 📂 Project Structure

```text
main-website/
├── assets/
│   ├── css/
│   │   └── style.css       # Custom terminal styling (Bold Courier New, Mobile fixes)
│   ├── js/
│   │   └── main.js         # The custom Vanilla JS engine (Command parser, DOM manipulation, Email validation)
│   └── img/
│       ├── favicon.ico
│       └── og-image-home.png
├── index.html              # Main entry point, SEO meta tags & NoScript fallback
└── README.md
```

---

## 🔗 Useful Links

* **View the Live Project:** [https://www.lorenzosottile.it/](https://www.lorenzosottile.it/)
* **My LinkedIn:** [https://www.linkedin.com/in/lorenzo-sottile/](https://www.linkedin.com/in/lorenzo-sottile/)

---

## 📄 License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).

---
*© 2026 Lorenzo Sottile. Made by Me with ♡.*