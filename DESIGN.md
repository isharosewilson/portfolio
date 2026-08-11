# Design System — Isha Rose Wilson Portfolio

## Visual Identity & Aesthetics
Ultra-clean, modern Apple-style developer portfolio website. Minimalist, serene, and spacious — focusing on crisp typography, generous whitespace, soft multi-layer depth, and non-distracting scroll motion.

## Color Palette
- **Light Background**: `#FBFBFD` (Apple Off-White)
- **Dark Background**: `#0A0A0C` (Apple Deep Obsidian)
- **Primary Text**: `#1D1D1F` (Light) / `#F5F5F7` (Dark)
- **Secondary Text**: `#86868B` (Muted Gray)
- **Accent Color**: `#0071E3` (Apple Blue Light) / `#2997FF` (Apple Blue Dark)
- **Borders & Dividers**: `rgba(0, 0, 0, 0.05)` (Light) / `rgba(255, 255, 255, 0.1)` (Dark)

## Typography
- **Primary Font Stack**: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif`
- **Headlines**: Large, confident, medium/semibold weight with tight letter spacing (`tracking-tight`).
- **Body**: Clean 16px/18px with `leading-relaxed` readability.

## Glassmorphism & Depth
- **Navbar**: Translucent frosted-glass (`backdrop-blur-xl bg-white/80 dark:bg-[#0A0A0C]/85`) that shrinks padding on scroll.
- **Cards**: `rounded-2xl` and `rounded-3xl` (16–24px), subtle multi-layered drop shadows (`shadow-sm hover:shadow-xl`), and hover scale lift (`hover:-translate-y-1.5`).

## Components
- `Navbar`: Translucent fixed header, logo, nav links, dark mode toggle, mobile slide-down menu.
- `Hero`: Centered large typography, animated tagline, location badge, primary Apple pill CTA + secondary link.
- `About`: 2-column layout with real portrait image (`/avatar.jpg`), bio text, location/education cards, and stats.
- `Skills`: 4-column responsive grid of Apple-style icon tiles with hover elevation.
- `Projects`: Section title, category filters (`All`, `UI Project`, `Web App`, `TypeScript`), project cards with real GitHub URLs, and quick view detail sheet modal.
- `Contact`: Centered callout, mailto pill CTA, copy-to-clipboard email with toast feedback, GitHub & LinkedIn links.
- `Footer`: Minimal copyright notice & floating back-to-top button.
