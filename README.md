# Isha Rose Wilson — Apple-Style Personal Portfolio

A modern, minimal, Apple-style developer portfolio website built for **Isha Rose Wilson**, Engineering Student at Government Engineering College Wayanad based in Kozhikode, Kerala.

Designed with Apple's iconic visual principles: generous white space, bold confident typography, translucent frosted-glass surfaces, soft multi-layer depth, smooth scroll-triggered entry motion, and an Apple light/dark mode switch.

---

## ✨ Features

- **Apple Design Language**:
  - System font stack (`SF Pro Display`, `SF Pro Text`, `Inter`)
  - Restrained palette (`#FBFBFD` background, `#1D1D1F` text, Apple Blue `#0071E3` accent)
  - Glassmorphic navbar (`backdrop-blur-xl bg-white/80 dark:bg-[#0A0A0C]/85`) that shrinks and increases opacity on scroll
  - Soft multi-layered card depth and rounded corners (`16–24px`)
- **Apple Light/Dark Mode**: Smooth toggle with persistent state and automatic system theme detection.
- **Scroll & Viewport Animations**: Powered by Framer Motion for scroll-triggered fade-and-rise entry effects and interactive hover micro-states.
- **Responsive Mobile Navigation**: Slide-down translucent panel with smooth hamburger menu toggle.
- **Interactive Project Showcase**:
  - Grid of featured projects with category filtering (`All`, `UI Project`, `Web App`, `TypeScript`).
  - GitHub integration for real projects:
    - **Carzone** (`https://github.com/isharosewilson/carzone`)
    - **Calculator** (`https://github.com/isharosewilson/calculator`)
    - **Fortune Tours** (`https://github.com/isharosewilson/Fortune-tours`)
    - **Vibe Coding** (`https://github.com/isharosewilson/vibe_coding`)
  - Apple-style modal sheet overlay for viewing project highlights, tech tags, and repository links.
- **Interactive Contact Section**:
  - One-click copy email button with Apple toast feedback notification.
  - Quick links to GitHub & LinkedIn.
- **Fully Accessible**: Semantic HTML5 elements (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`), keyboard navigation, visible focus rings, and high contrast.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 + `@tailwindcss/vite`
- **Animations**: Framer Motion
- **Icons**: Lucide React + Inline SVGs
- **Build Output**: Static HTML/CSS/JS (deployable to GitHub Pages, Vercel, Netlify, Cloudflare Pages)

---

## 📁 File & Component Structure

```text
c:\portfolio/
├── index.html                   # HTML entry point with SEO meta tags & Inter font fallback
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Root app layout & dark mode state
│   ├── index.css                # Base Tailwind v4 imports, Apple CSS variables & scrollbar
│   ├── types.ts                 # TypeScript interfaces (Project, Skill, Stat)
│   ├── data/
│   │   └── portfolioData.ts     # Centralized content file (bio, skills, projects, contact info)
│   ├── hooks/
│   │   ├── useDarkMode.ts       # Theme switcher custom hook (localStorage + prefers-color-scheme)
│   │   └── useScrollPosition.ts # Scroll listener hook for navbar & back-to-top button
│   └── components/
│       ├── Navbar.tsx           # Fixed frosted-glass nav with dark mode toggle & mobile menu
│       ├── Hero.tsx             # Full viewport hero headline, tagline, and Apple pill CTAs
│       ├── About.tsx            # Two-column bio layout with stats and avatar photo frame
│       ├── Skills.tsx           # Grid of Apple-style skill cards with subtle hover lift
│       ├── Projects.tsx         # "Selected Work" grid with filters & project modal trigger
│       ├── ProjectModal.tsx     # Apple-style detail modal overlay sheet
│       ├── Contact.tsx          # "Let's build something." callout & copyable email pill
│       ├── SocialIcons.tsx      # Crisp SVG icons for GitHub & LinkedIn
│       ├── Toast.tsx            # Notification toast for clipboard feedback
│       └── Footer.tsx           # Minimalist copyright line & floating back-to-top button
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.

### Production Build

To test or build the static output:

```bash
npm run build
```

The optimized static build files will be placed inside the `dist/` directory.

---

## ✏️ Customizing Your Content

All text, bio details, stats, projects, and contact info are centrally stored in `src/data/portfolioData.ts`:

- **Personal Information**: Edit `PERSONAL_INFO.name`, `PERSONAL_INFO.bio`, `PERSONAL_INFO.email`, `PERSONAL_INFO.github`, `PERSONAL_INFO.linkedin`.
- **Photo Placeholder**: Update `avatarPlaceholderText` or set your avatar image URL inside `src/components/About.tsx`.
- **Projects**: Add or edit projects in the `PROJECTS` array.
- **Skills**: Add or modify skill tiles in the `SKILLS` array.

---

## 🌐 Static Deployment

Since this project builds as a pure static site, you can host it anywhere for free:

### Vercel
1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Framework Preset: **Vite**. Build Command: `npm run build`, Output Directory: `dist`.

### GitHub Pages
1. Install `gh-pages` or use GitHub Actions workflow for static site deployment from the `dist` folder.

---

© 2026 Isha Rose Wilson. Built with care in Kerala, India.
