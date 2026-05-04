# >⩊< Lorenzo Sottile – Main Personal Website (React & Bento Edition)

This repository contains the source code for my professional portfolio, **Lorenzo Sottile | Developer & IT Consultant**.

The website has been completely redesigned, moving away from the old CLI terminal to a modern, high-performance **Bento Grid** interface. It balances a minimalist aesthetic with advanced interactivity, showcasing my skills in **Full Stack Development**, **AI integration**, and **3D Rendering**.

> **Note:** The website content is entirely in Italian to serve my primary client base in Italy.

---

## 🚀 Overview & Philosophy

The project is a **Single Page Application (SPA)** built with **React** and **Vite**, designed for maximum speed and SEO efficiency.

### Key Features

- 🍱 **Bento Grid Design**: A modular, responsive layout that organizes information into elegant "cards", providing a clear overview of services and projects.
- 🎭 **Framer Motion Animations**: Smooth, spring-based transitions and stagger animations that enhance the user experience without sacrificing performance.
- 🤖 **AI Focused**: A dedicated section for the start2impact Master, highlighting 16 projects focused on Full Stack development and AI Agent.
- 🖼️ **Interactive 3D Portfolio**: An integrated Lightbox system to showcase 3D architectural renderings and web mockups.
- 📧 **Professional Contact System**: A robust form powered by EmailJS with real-time feedback (loading, success, error states) and GDPR-compliant privacy management.
- 🔍 **Optimized SEO**: Dynamic metadata management via React Helmet Async for each individual route.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (using the new `@theme` engine)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Services**:
  - [EmailJS](https://www.emailjs.com/) (Client-side email handling)
  - [React Helmet Async](https://github.com/staylor/react-helmet-async) (SEO Management)
- **Typography**:
  - **Space Grotesk** (Main Sans Font)
  - **Libre Barcode 39 Text** (For specific decorative elements)
- **Hosting & Deployment**: [Netlify](https://www.netlify.com/) (with custom `_redirects` for SPA routing)
---

## 📂 Navigation Structure

The website is organized into the following main sections:

| Page | Description |
|------|-------------|
| **Home** | Main dashboard with a quick overview of bio, services, and core philosophy. |
| **Portfolio** | Detailed showcase of professional works (Web Platforms, Fintech, 3D Rendering). |
| **start2impact** | Academic timeline featuring 16 modules from the Full Stack & AI Master. |
| **Servizi** | Breakdown of IT offerings: Software, Consulting, Ads, and 3D Video. |
| **Chi Sono** | My background, my hobbies, and the connection between music and coding. |
| **Contatti** | Direct contact form with zone-specific info and social links. |

---

## 📂 Project Structure

```text
main-website/
├── public/                 # Static assets (PDFs, Progetti covers, Logo)
│   └── _redirects          # Netlify SPA routing configuration
├── src/
│   ├── assets/             # Images and global styles
│   ├── components/         # Reusable UI components (Navbar, Footer, Icons)
│   ├── pages/              # Main route components (Home, About, etc.)
│   ├── App.jsx             # Main Router and layout configuration
│   ├── main.jsx            # Entry point & Providers
│   └── index.css           # Tailwind v4 configuration and @theme
├── index.html              # HTML5 template and font imports
└── package.json            # Dependencies and scripts
```

---

## 🔗 Useful Links

- **Live Project**: [https://www.lorenzosottile.it/](https://www.lorenzosottile.it/)
- **LinkedIn**: [https://www.linkedin.com/in/lorenzo-sottile/](https://www.linkedin.com/in/lorenzo-sottile/)

---

## 📄 License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).

---
*© 2026 Lorenzo Sottile. Made by Me with ♡.*
