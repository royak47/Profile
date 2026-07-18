"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/constants";

export default function GithubStats() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const update = () =>
      setDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const theme = dark ? "dark" : "default";
  const username = PROFILE.githubUsername;

  return (
    <section id="github" className="mt-20 scroll-mt-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted dark:text-neutral-400">
        GitHub
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=00000000`}
          alt={`${username}'s GitHub stats`}
          loading="lazy"
          className="w-full rounded-2xl border border-border dark:border-neutral-800"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=00000000`}
          alt={`${username}'s GitHub streak`}
          loading="lazy"
          className="w-full rounded-2xl border border-border dark:border-neutral-800"
        />
      </div>
      <p className="mt-3 text-xs text-muted dark:text-neutral-400">
        Live cards from{" "}
        <a
          href="https://github.com/anuraghazra/github-readme-stats"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          github-readme-stats
        </a>
        . Set your real GitHub username in{" "}
        <code className="rounded bg-subtle px-1 py-0.5 dark:bg-neutral-800">
          lib/constants.ts
        </code>
        .
      </p>
    </section>
  );
}
