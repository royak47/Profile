// ─────────────────────────────────────────────────────────────
// Edit this file to update your info. Nothing else needs touching.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Mitt Ydv",
  handle: "mitt_ydv",
  role: "Developer & Creator",
  tagline: "I build things for the internet, and occasionally break them on purpose.",
  location: "India",
  // Format: YYYY-MM-DDTHH:mm:ss (birth time unknown, so midnight is used)
  dob: "1998-10-13T00:00:00",
  about: [
    "I'm Mitt — I write code, ship small projects, and share the process online. This site doubles as my terminal: everything below is a live command, not a static page.",
    "Currently exploring web development, open-source tooling, and whatever breaks my sleep schedule this week. Replace this paragraph with your real bio in lib/constants.ts.",
  ],
  email: "nopaidorganization@gmail.com",
};

export const SOCIALS = [
  {
    label: "instagram",
    display: "@mitt_ydv",
    href: "https://instagram.com/mitt_ydv",
    hint: "photos, reels, occasional chaos",
  },
  {
    label: "telegram",
    display: "@mitt_ydv",
    href: "https://t.me/mitt_ydv",
    hint: "fastest way to reach me",
  },
  {
    label: "mail",
    display: "nopaidorganization@gmail.com",
    href: "mailto:nopaidorganization@gmail.com",
    hint: "for work & collabs",
  },
];

export const TOOLKIT = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
];

// Visitor counter uses countapi.xyz — a free, key-less counting API.
// No signup needed. If you want a more production-grade counter later,
// swap the implementation in lib/useCounter.ts for counterapi.dev (needs
// a free account) or your own API route backed by a database.
export const COUNTER_NAMESPACE = "mitt-ydv-dev-portfolio-9f2k";
