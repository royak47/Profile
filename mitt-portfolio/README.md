# Mitt Ydv — Portfolio

A clean, minimal personal site inspired by prasen.dev — a friendly greeting,
a live decimal age counter woven right into the text, and clean stat cards
for age + visitors. Built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS.

## What's inside

- **Live age counter** — a decimal number of years ("27.842918273") that
  ticks continuously in the hero text, plus a detailed years/months/days/
  hours/min/sec breakdown card further down (`lib/useElapsed.ts`).
- **Live visitor counter** — today's count + all-time count, backed by the
  free [countapi.xyz](https://countapi.xyz) API with an automatic local
  fallback if that API is ever unreachable (`lib/useCounter.ts`).
- All personal info (name, bio, socials, email, DOB) lives in one file:
  **`lib/constants.ts`**.

## Folder structure

```
mitt-portfolio/
├── app/
│   ├── layout.tsx        # fonts, metadata, root shell
│   ├── page.tsx          # assembles all sections
│   └── globals.css       # theme, base styles
├── components/
│   ├── Hero.tsx          # greeting, live decimal age, bio, social icons
│   ├── Stats.tsx         # wraps the two stat cards below
│   ├── Uptime.tsx        # ← age breakdown stat card
│   ├── Visitors.tsx      # ← the live visitor counter
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── constants.ts      # ← edit YOUR info here
│   ├── useElapsed.ts     # age-counting logic (both decimal + breakdown)
│   └── useCounter.ts     # visitor-counting logic
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

- **Your info**: edit `lib/constants.ts` — name, role, bio, DOB, email, socials.
- **Colors**: edit the `colors` block in `tailwind.config.ts`.
- **Fonts**: edit `app/layout.tsx` (currently Plus Jakarta Sans + JetBrains Mono).
