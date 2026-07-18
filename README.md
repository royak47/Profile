# Mitt Ydv — Portfolio

A single-page developer portfolio styled as a live terminal session. Built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## What's inside

- **Live age counter** — a real `uptime`-style block that ticks every second,
  calculated from your date of birth (`components/Uptime.tsx`, `lib/useElapsed.ts`).
- **Live visitor counter** — today's count + all-time count, backed by the
  free [countapi.xyz](https://countapi.xyz) API with an automatic local
  fallback if that API is ever unreachable (`lib/useCounter.ts`).
- **Boot-sequence hero** — types itself out on load, then settles.
- All personal info (name, bio, socials, email, DOB) lives in one file:
  **`lib/constants.ts`**.

## Folder structure

```
mitt-portfolio/
├── app/
│   ├── layout.tsx        # fonts, metadata, root shell
│   ├── page.tsx          # assembles all sections
│   └── globals.css       # theme, scanline overlay, base styles
├── components/
│   ├── TerminalWindow.tsx
│   ├── Hero.tsx
│   ├── Uptime.tsx        # ← the live age counter
│   ├── About.tsx
│   ├── Socials.tsx
│   ├── Visitors.tsx      # ← the live visitor counter
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── constants.ts      # ← edit YOUR info here
│   ├── useElapsed.ts     # age-counting logic
│   ├── useCounter.ts     # visitor-counting logic
│   └── useTypewriter.ts  # boot animation logic
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

Push to GitHub and import the repo on [vercel.com](https://vercel.com) — zero
config needed, it's a standard Next.js app.

## Notes on the visitor counter

`countapi.xyz` is free and needs no API key, which is why it's used here, but
it's a small community-run service — treat the count as "approximately how
many visits" rather than analytics-grade accuracy. If it's ever down, the
site automatically falls back to a browser-local tally so the UI never
breaks. For a more permanent/production setup later, consider:

- [counterapi.dev](https://counterapi.dev) (free tier, needs a quick signup), or
- your own Next.js API route backed by Vercel KV / Upstash Redis / a database.

## Customizing

- **Your info**: edit `lib/constants.ts` — name, role, bio, DOB, email, socials.
- **Colors**: edit the `colors` block in `tailwind.config.ts`.
- **Fonts**: edit `app/layout.tsx` (currently JetBrains Mono + Inter).
