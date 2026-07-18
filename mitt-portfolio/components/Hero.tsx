"use client";

import { PROFILE, SOCIALS } from "@/lib/constants";
import { useDecimalAge } from "@/lib/useElapsed";
import { Instagram, Send, Mail } from "lucide-react";

const ICONS = { instagram: Instagram, telegram: Send, mail: Mail };

export default function Hero() {
  const age = useDecimalAge(PROFILE.dob);
  const firstName = PROFILE.name.split(" ")[0];

  return (
    <section id="top" className="scroll-mt-20 animate-fadein">
      <img
        src="/avatar.png"
        alt={`${PROFILE.name} profile photo`}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-neutral-950"
      />

      <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl">
        hey, {firstName} here
      </h1>

      <p className="mt-3 font-mono text-base text-muted dark:text-neutral-400 sm:text-lg">
        been on this planet for{" "}
        <span className="tabular-nums text-ink dark:text-white">{age}</span>{" "}
        years
      </p>

      <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-ink/90 dark:text-neutral-200">
        <p>
          I'm {firstName} — {PROFILE.role.toLowerCase()} based in{" "}
          {PROFILE.location}. {PROFILE.tagline}
        </p>
        <p>
          You can find me on{" "}
          <a
            className="inline-link"
            href={SOCIALS[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , message me on{" "}
          <a
            className="inline-link"
            href={SOCIALS[1].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          , or just{" "}
          <a className="inline-link" href={`mailto:${PROFILE.email}`}>
            send an email
          </a>
          .
        </p>
      </div>

      {/* social icon row */}
      <div className="mt-7 flex items-center gap-4">
        {SOCIALS.map((s) => {
          const Icon = ICONS[s.label as keyof typeof ICONS];
          return (
            <a
              key={s.label}
              href={s.href}
              target={s.label === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-accent hover:bg-accentSoft hover:text-accent dark:border-neutral-800 dark:text-white dark:hover:border-accent dark:hover:bg-neutral-800"
            >
              <Icon size={18} strokeWidth={1.8} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
