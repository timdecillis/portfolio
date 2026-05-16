# Portfolio Site - Tim DeCillis

## Project Overview
Personal portfolio site for Tim DeCillis — software engineer, musician, and music teacher. Replacing an existing Squarespace site. Built with Next.js 16, React 19, Tailwind CSS 4, TypeScript.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (using `@import "tailwindcss"` syntax)
- **Fonts**: Space Grotesk (via next/font/google)
- **Language**: TypeScript
- **Package manager**: npm

## Project Structure
- `app/` — Next.js App Router pages (layout, page, about/, work/, music/, teaching/)
- `components/` — Shared React components (header, footer, about, work, page.component)
- `public/` — Static assets (images)

## Design System
- **Background**: Muted steel blue (`#92b9d4`)
- **Foreground/text**: Dark navy (`#213c4e`)
- **Footer background**: Dark navy (`#1e2d3d` approx)
- **Accent text (hero)**: Warm cream/off-white for hero heading text
- **Font**: Space Grotesk throughout
- **Layout**: Horizontal padding `px-16` on body, consistent spacing

## Pages & Routes
- `/` — Home: Hero section with rotating background images (cymbal/drums) and rotating tagline ("software engineer" / "musician" / "cat dad"), plus Projects section (deferred)
- `/about` — Bio text (left) + headshot photo (right), two-column layout
- `/work` — Experience section (two-column: title left, entries right) + Skills/Tech section (same layout)
- `/music` — Bio blurb (left) + photo, Recent Projects list with links (right)
- `/teaching` — Teaching philosophy blurb (left), Teaching Experience list + YouTube embed (right)

## Conventions
- Page route files (`app/*/page.tsx`) are thin wrappers that import from `components/`
- Component files in `components/` contain the actual page content
- Use Tailwind utility classes for all styling (no separate CSS modules)
- No dark mode toggle — the site uses a single color scheme (the steel blue theme) regardless of system preference

## Key Behaviors
- Header: "Tim DeCillis" logo + nav links (About, Work, Music, Teaching), active page underlined
- Footer: "Hit me up!" heading with Gmail, GitHub, LinkedIn links on dark navy background
- Home hero: Background images crossfade/rotate with text that cycles through identities
