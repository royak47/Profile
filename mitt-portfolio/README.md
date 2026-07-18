# Mitt Ydv — Premium Portfolio

An Apple/Vercel-inspired personal site: motion-driven, minimal, and fast.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Features

- ✨ **Framer Motion animations** — staggered hero entrance, scroll-triggered
  reveals, hover lifts on cards
- 🌌 **Particle background** — quiet canvas particle field, theme-aware
  (`components/ParticleBackground.tsx`)
- 🖱️ **Cursor glow** — soft light that follows the pointer on desktop
  (`components/CursorGlow.tsx`)
- ⌨️ **Typing effect** — rotating role titles under your name
  (`lib/useTypewriter.ts`)
- 👤 **Hero with profile photo** — your photo, live decimal age counter
- 🏠 **Premium sticky navbar** — glassmorphism, scroll-aware, Home button
- 📂 **Projects section** — animated cards, edit in `lib/constants.ts`
- 🛠️ **Skills with progress bars** — animate in on scroll
- 📊 **GitHub stats** — live cards via github-readme-stats
- 📱 **Social dock** — macOS-style dock with hover magnify
- 🌙 **Dark/Light mode** — persisted, no flash on load
- 💬 **WhatsApp floating button**
- 📄 **Resume download** button
- Live visitor counter (today + all-time), backed by countapi.xyz with a
  local fallback if that free API is ever unreachable

All personal info lives in one file: **`lib/constants.ts`**.

## Folder structure

```
mitt-portfolio/
├── app/
│   ├── layout.tsx            # fonts, metadata, theme-init script
│   ├── page.tsx              # assembles every section
│   └── globals.css           # theme, base + dark mode styles
├── components/
│   ├── Navbar.tsx            # sticky glass nav, scroll-aware
│   ├── ThemeToggle.tsx        # light/dark mode switch
│   ├── ParticleBackground.tsx # canvas particle field
│   ├── CursorGlow.tsx         # pointer-follow glow (desktop only)
│   ├── Hero.tsx                # photo, typing effect, live age, CTAs
│   ├── Skills.tsx              # animated progress bars
│   ├── Projects.tsx            # project cards
│   ├── GithubStats.tsx         # live GitHub stat cards
│   ├── Stats.tsx               # wraps age + visitor stat cards
│   ├── Uptime.tsx              # age breakdown card
│   ├── Visitors.tsx            # live visitor counter
│   ├── SocialDock.tsx          # fixed bottom dock
│   ├── WhatsAppButton.tsx      # floating chat button
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── constants.ts       # ← edit YOUR info here (profile, skills, projects...)
│   ├── useElapsed.ts      # age-counting logic (decimal + breakdown)
│   ├── useCounter.ts      # visitor-counting logic
│   └── useTypewriter.ts   # rotating typing-effect logic
├── public/
│   ├── avatar.png         # ← your profile photo
│   └── resume.pdf         # ← add your real resume here (not included)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Configured for **static export** (`output: "export"` in `next.config.mjs`).

### Cloudflare Pages
Choose the **"Pages"** tab when creating the project (not "Workers"):
- **Workers & Pages → Create → Pages → Connect to Git**
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory (advanced): `mitt-portfolio` (if this folder isn't the repo root)

### Vercel (also zero-config)
Push to GitHub and import the repo on [vercel.com](https://vercel.com).

## Customizing

- **Your info, skills, projects**: all in `lib/constants.ts`.
- **GitHub stats**: set `githubUsername` in `lib/constants.ts` to your real
  GitHub handle.
- **WhatsApp button**: set `whatsappNumber` in `lib/constants.ts` (full
  international format, digits only, e.g. `"919876543210"`). Leave it empty
  to hide the button.
- **Resume**: drop your real PDF at `public/resume.pdf` — the button just
  links there, no file is bundled by default.
- **Your photo**: replace `public/avatar.png`.
- **Colors**: `tailwind.config.ts`. **Fonts**: `app/layout.tsx` (Plus
  Jakarta Sans + JetBrains Mono).

## Notes

- All motion respects `prefers-reduced-motion` — particles, cursor glow,
  and typing effects fall back to static/instant if the visitor has that
  setting on.
- The cursor glow only renders on devices with a fine pointer (desktop mice
  / trackpads), never on touchscreens.
