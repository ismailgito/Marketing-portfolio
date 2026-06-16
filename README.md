# Mohamed Ismail - Performance Marketing Portfolio

A premium, single-page React portfolio application built on Next.js, customized with a tactile, editorial **Warm Linen** theme. This project showcases performance marketing audits, data-driven acquisition tools, professional certifications, and internship credentials.

---

## 🎨 Theme & Typography (Warm Linen)
This application implements the Warm Linen design system, shifting the interface away from generic, plain colors to a highly tactile editorial palette:
* **Backgrounds (Cream)**: `#f5f2ed` (`--cream`)
* **Accents (Terracotta & Sage)**: `#b85c38` (`--terracotta`) and `#6b7c68` (`--sage`)
* **Typography (Charcoal)**: `#2d2a27` (`--charcoal`) for body, `#1a1714` (`--warm-dark`) for headings.
* **Fonts**:
  * **Headings**: `DM Serif Display` (loaded with a refined `400` weight).
  * **Body & UI**: `Inter` (loaded with weights `400`, `500`, `600`, `700` for labels).

---

## 🚀 Key Features

### 1. Dynamic Single-Page Navigation
* Native browser `scroll-behavior: smooth` is used for fluid transitions between page sections.
* A client-side scroll observer inside `Navbar.jsx` tracks section offsets and automatically updates the active navigation link indicator on scroll.
* Auto-collapses the mobile navigation menu on selection for responsive user flows.

### 2. Interactive Growth Stack Ticker
* Located in `Marketing-tools.jsx`, this component features a smooth marquee track displaying tool logos (Google Ads, Meta Ads, GA4, GTM, CRO).
* The ticker pauses scrolling on hover (`animation-play-state: paused`) and uses a grayscale transition to reveal full-color logos when hovered.
* Includes a rendering fallback to gracefully hide missing images and display clean text labels.

### 3. Professional Internship Showcase
* Located in `Internship.jsx`, this section presents Sales & Marketing internship credentials.
* Features an **Interactive Image Preview Modal** rendering the completion certificate (`public/certificates/internship-certificate.jpg`) and a direct PDF download link.

---

## 📁 Workspace Directory Structure

* `/src/app/` — Contains global Next.js page routing configuration and metadata.
  * `layout.js` — Global HTML layout, font preconnections, and stylesheets imports.
  * `page.js` — Core page template organizing sections in order.
* `/src/components/` — Individual React layout components.
  * `Navbar.jsx` — Header, main navigation, and animated hero banner.
  * `About.jsx` — Professional overview.
  * `Marketing-tools.jsx` — Auto-scrolling stack integration ticker.
  * `Skillset.jsx` — Core marketing services.
  * `Portfolio.jsx` — Case studies and metrics.
  * `Projects.jsx` — Live tool demonstrations and assets.
  * `Resume.jsx` — Resume download prompt.
  * `Certficates.jsx` — Professional certifications.
  * `Internship.jsx` — Internship details and certificate viewer.
  * `Contact.jsx` — Web3Forms-integrated contact email form.
  * `Footer.jsx` — Bottom site footer and direct email details.
* `/src/styles/` — Global styling sheets.
  * `style.css` — Core template CSS overridden with the custom Warm Linen colors, dot-grid animations, and component styling.
* `/public/` — Static assets folder served at the root.

---

## 📥 Static Download Asset Guide
All downloadable files and image references are served out of the `/public` root directory. Store files in the following folder structure:

* **Resume PDF**: `public/resume.pdf`
* **Internship PDF**: `public/Internship.pdf`
* **Internship JPG Preview**: `public/certificates/internship-certificate.jpg`
* **Marketing Stack Logos**:
  * `public/img/google-ads.png`
  * `public/img/meta-ads.png`
  * `public/img/ga4.png`
  * `public/img/gtm.png`
  * `public/img/cro.png`
* **Project Attachments**:
  * `public/projects/Landing_page_optimization/Landing_page_UTM_tracking.pdf`
  * `public/projects/Landing_page_optimization/Optimizing_Performance_and_Attribution.pptx`
  * `public/projects/multi-channel-attribution-tracker/Multi-channel-tracker.pdf`
  * `public/projects/multi-channel-attribution-tracker/The_Growth_Prism.pptx`
  * `public/projects/Claude-Token-optimization/Claude-Token-Optimization.pdf`
  * `public/projects/Claude-Token-optimization/Claude-Token-Optimization.pptx`

---

## ⚙️ Development Scripts

Run scripts using your package manager from the root directory:

* **Start Dev Server**:
  ```bash
  npm run dev
  ```
* **Build Production Server**:
  ```bash
  npm run build
  ```
* **Start Production Server**:
  ```bash
  npm run start
  ```
