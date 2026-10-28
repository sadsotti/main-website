# >⩊< Lorenzo Sottile – Main Personal Website (React & Bento Edition)

This repository contains the source code for my professional portfolio, **Lorenzo Sottile | Developer & IT Consultant**.

The website presents my work as a single point of contact for the digital side of a business: **IT Consulting** (including technical direction and security/architecture audits), **Software & Web Development**, **Digital Advertising** and **3D Rendering & Video**. It uses a modern, high-performance **Bento Grid** interface that balances a minimalist aesthetic with subtle interactivity.

> **Note:** The website content is entirely in Italian to serve my primary client base in Italy.

---

## 🚀 Overview & Philosophy

The project is a **Single Page Application (SPA)** built with **React** and **Vite**, designed for maximum speed and SEO efficiency.

### Key Features

- 🍱 **Bento Grid Design**: A modular, responsive layout that organizes information into elegant "cards", with a soft light that follows the pointer on hover.
- 🗺️ **Topographic Background**: Contour lines generated once as a lightweight SVG (`public/topografia.svg`) that slowly "breathe" with a GPU-friendly CSS animation.
- 🎭 **Framer Motion Animations**: Spring-based entrance and scroll-reveal animations that enhance the experience without sacrificing performance.
- 🧩 **Single Source of Truth**: Service names and client projects live in `src/lib/services.js` and `src/lib/projects.js`, shared by Home, Services, Portfolio and Contacts so wording stays consistent everywhere.
- 🤖 **AI Focused**: A dedicated section for the start2impact Master, highlighting 16 projects focused on Full Stack development and AI Agent.
- 🧪 **Personal Projects Lab**: A showcase of personal tools and apps, each with a custom cover, tech stack, GitHub repository and, when available, a link to the live app.
- 🖼️ **Interactive Portfolio**: Filterable by service, with a featured case study, a Lightbox for 3D architectural renderings and web mockups, and deep links to each project (`/portfolio#project-id`).
- 📧 **Professional Contact System**: A form powered by EmailJS with real-time feedback (loading, success, error states), service shortcuts that pre-fill the subject, and GDPR-compliant privacy management.
- 🔍 **Optimized SEO**: Per-route metadata via React Helmet Async, static HTML generated at build time for every route (title, description, canonical, Open Graph), `ProfessionalService` structured data with the service catalog, and a sitemap.
- ⚡ **Performance**: Route-based code splitting with per-route `modulepreload`, preloaded key images, WebP images, lazy loading, zero layout shift and self-hosted fonts with no external requests.
- 🍪 **Privacy by Design**: No cookies, no trackers and no third-party analytics, so no consent banner is needed.
- ♿ **Accessibility**: Keyboard-friendly navigation, ARIA attributes, skip link and full support for `prefers-reduced-motion`.

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
- **Typography** (self-hosted via [Fontsource](https://fontsource.org/)):
  - **Space Grotesk** (Main Sans Font)
  - **Libre Barcode 39 Text** (For specific decorative elements)
- **Hosting & Deployment**: [Netlify](https://www.netlify.com/) (with custom `_redirects` for SPA routing)

---

## 📂 Navigation Structure

The website is organized into the following main sections:

| Page | Description |
|------|-------------|
| **Home** | Hero, key numbers, featured engagement, the four services, selected works and a final call to action. |
| **Portfolio** | Featured case study and professional works (Management Web Apps, Websites, 3D Rendering), filterable by service. |
| **start2impact** | Academic timeline featuring 16 modules from the Full Stack & AI Master. |
| **Progetti Personali** | Personal projects (`/lab`): tools, apps and bots with links to GitHub and, when available, the live app. |
| **Servizi** | IT Consulting (with the Technical Audit and Fractional CTO formulas), Software & Web, Digital Advertising, 3D Rendering & Video, and how I work in four steps. |
| **Chi Sono** | My background, experience, certifications, languages and education. |
| **Contatti** | Contact form with service shortcuts, operating area and social links. |
| **Privacy / I tuoi diritti** | Privacy & Cookie Policy and instructions to exercise GDPR rights. |
| **404** | Custom not-found page, excluded from indexing. |

---

## 📂 Project Structure

```text
main-website/
├── public/                 # Static assets (PDFs, project images, topographic background)
│   ├── _headers            # Netlify security and caching headers
│   └── _redirects          # Netlify routing (static route pages + SPA fallback)
├── src/
│   ├── assets/             # Images
│   ├── components/         # Reusable UI components (Navbar, Footer, Seo, Icons, SpotlightTracker)
│   ├── lib/                # Site data and SEO metadata (site.js), services, projects, shared UI tokens
│   ├── pages/              # Main route components (Home, About, etc.)
│   ├── App.jsx             # Main Router and layout configuration
│   ├── main.jsx            # Entry point & Providers
│   └── index.css           # Tailwind v4 configuration and @theme
├── index.html              # HTML5 template and default metadata
├── vite.config.js          # Vite config and static route plugin (metadata + preloads)
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
