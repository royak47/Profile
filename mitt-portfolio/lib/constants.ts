// ─────────────────────────────────────────────────────────────
// Edit this file to update your info. Nothing else needs touching.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Mitt Ydv",
  handle: "mitt_ydv",
  role: "Developer & Creator",
  // Shown as a rotating typing effect under the hero heading.
  roles: ["Developer", "Creator", "Problem Solver", "Lifelong Learner"],
  tagline:
    "I build things for the internet, and occasionally break them on purpose.",
  location: "India",
  // Format: YYYY-MM-DDTHH:mm:ss (birth time unknown, so midnight is used)
  dob: "1998-10-13T00:00:00",
  about: [
    "I'm Mitt — I write code, ship small projects, and share the process online.",
    "Currently exploring web development, open-source tooling, and whatever breaks my sleep schedule this week. Replace this paragraph with your real bio in lib/constants.ts.",
  ],
  email: "nopaidorganization@gmail.com",
  // GitHub username used to pull the live stats cards below. Change this
  // to your real GitHub username in lib/constants.ts.
  githubUsername: "royak47",
  // Set to your real WhatsApp number in international format, no symbols,
  // e.g. "919876543210" for a +91 number. Leave empty to hide the button.
  whatsappNumber: "919999999999",
  // Drop your real PDF at public/resume.pdf — this button just links there.
  resumeUrl: "/resume.pdf",
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
    label: "github",
    display: "@royak47",
    href: "https://github.com/royak47",
    hint: "code lives here",
  },
  {
    label: "mail",
    display: "nopaidorganization@gmail.com",
    href: "mailto:nopaidorganization@gmail.com",
    hint: "for work & collabs",
  },
];

// Skills shown as animated progress bars. `level` is 0-100.
export const SKILLS = [
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "Node.js / APIs", level: 70 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 75 },
  { name: "UI/UX Design", level: 60 },
];

// Replace with your real projects. `href` can point to a live demo or repo.
export const PROJECTS = [
  {
    title: "Project One",
    description:
      "A short, punchy description of what this project does and why it matters. Swap this out in lib/constants.ts.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    href: "https://github.com/royak47",
  },
  {
    title: "Project Two",
    description:
      "Another project summary — what problem it solves, and the stack behind it.",
    tags: ["React", "Node.js"],
    href: "https://github.com/royak47",
  },
  {
    title: "Project Three",
    description:
      "A third project card. Add as many of these as you like, or trim the array down.",
    tags: ["API", "Automation"],
    href: "https://github.com/royak47",
  },
];

// Visitor counter uses countapi.xyz — a free, key-less counting API.
// No signup needed. If you want a more production-grade counter later,
// swap the implementation in lib/useCounter.ts for counterapi.dev (needs
// a free account) or your own API route backed by a database.
export const COUNTER_NAMESPACE = "mitt-ydv-dev-portfolio-9f2k";
