# Mitt Ydv — Portfolio

A clean, minimal personal site inspired by prasen.dev — a friendly greeting
with your photo, a live decimal age counter woven right into the text, a
toolkit section, and light/dark mode. Built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS.

## What's inside

- **Navbar** — sticky top bar with a Home link, Toolkit/Contact anchor
  links, and the theme toggle (`components/Navbar.tsx`).
- **Light/dark mode** — toggle button, persisted in `localStorage`, respects
  system preference on first visit, no flash-of-wrong-theme on load
  (`components/ThemeToggle.tsx`, script in `app/layout.tsx`).
- **Profile photo** — your photo as a circular avatar in the hero
  (`public/avatar.png`, referenced in `components/Hero.tsx`).
- **Toolkit section** — your tech stack as pills, editable in
  `lib/constants.ts` (`components/Toolkit.tsx`).
- **Live age counter** — a decimal number of years ("27.842918273") that
  ticks continuously in the hero text, plus a detailed years/months/days/
  hours/min/sec breakdown card further down (`lib/useElapsed.ts`).
- **Live visitor counter** — today's count + all-time count, backed by the
  free [countapi.xyz](https://countapi.xyz) API with an automatic local
  fallback if that API is ever unreachable (`lib/useCounter.ts`).
- All personal info (name, bio, socials, email, DOB, toolkit) lives in one
  file: **`lib/constants.ts`**.

## Folder structure

```
mitt-portfolio/
├── app/
│   ├── layout.tsx        # fonts, metadata, theme-init script
│   ├── page.tsx          # assembles all sections
│   └── globals.css       # theme, base + dark mode styles
├── components/
│   ├── Navbar.tsx        # ← sticky nav with Home button + theme toggle
│   ├── ThemeToggle.tsx   # ← light/dark mode switch
│   ├── Hero.tsx          # greeting, photo, live decimal age, bio, socials
│   ├── Toolkit.tsx       # ← tech stack pills
│   ├── Stats.tsx         # wraps the two stat cards below
│   ├── Uptime.tsx        # age breakdown stat card
│   ├── Visitors.tsx      # the live visitor counter
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── constants.ts      # ← edit YOUR info here
│   ├── useElapsed.ts     # age-counting logic (decimal + breakdown)
│   └── useCounter.ts     # visitor-counting logic
├── public/
│   └── avatar.png        # ← your profile photo, replace anytime
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

This project is configured for **static export** (`output: "export"` in
`next.config.mjs`), so it builds to plain HTML/CSS/JS with no server needed.

### Cloudflare Pages
Important: when creating the project in Cloudflare, choose the **"Pages"**
tab (not "Workers") — Workers projects try to run full Next.js via an
adapter and don't need to for a static site like this one.

- **Workers & Pages → Create → Pages → Connect to Git**
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory (advanced): `mitt-portfolio` (only if this folder isn't
  already the repo root)

### Vercel (also zero-config)
Push to GitHub and import the repo on [vercel.com](https://vercel.com).

## Customizing

- **Your info**: edit `lib/constants.ts` — name, role, bio, DOB, email,
  socials, toolkit list.
- **Your photo**: replace `public/avatar.png` with your own image (keep the
  same filename, or update the `src` in `components/Hero.tsx`).
- **Colors**: edit the `colors` block in `tailwind.config.ts`.
- **Fonts**: edit `app/layout.tsx` (currently Plus Jakarta Sans + JetBrains Mono).
