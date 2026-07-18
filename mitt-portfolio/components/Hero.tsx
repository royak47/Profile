"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PROFILE, SOCIALS } from "@/lib/constants";
import { useDecimalAge } from "@/lib/useElapsed";
import { useTypewriterLoop } from "@/lib/useTypewriter";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const age = useDecimalAge(PROFILE.dob);
  const firstName = PROFILE.name.split(" ")[0];
  const typedRole = useTypewriterLoop(PROFILE.roles);

  return (
    <motion.section
      id="top"
      className="scroll-mt-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.img
        variants={item}
        src="/avatar.png"
        alt={`${PROFILE.name} profile photo`}
        width={104}
        height={104}
        className="rounded-full object-cover shadow-lg ring-4 ring-white dark:ring-neutral-950"
        style={{ height: 104, width: 104 }}
      />

      <motion.h1
        variants={item}
        className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl"
      >
        hey, {firstName} here
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-2 h-7 font-display text-lg font-medium text-accent"
      >
        {typedRole}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse2 bg-accent align-middle">
          &nbsp;
        </span>
      </motion.p>

      <motion.p
        variants={item}
        className="mt-3 font-mono text-base text-muted dark:text-neutral-400 sm:text-lg"
      >
        been on this planet for{" "}
        <span className="tabular-nums text-ink dark:text-white">{age}</span>{" "}
        years
      </motion.p>

      <motion.div
        variants={item}
        className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-ink/90 dark:text-neutral-200"
      >
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
      </motion.div>

      <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
        <a
          href={PROFILE.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-neutral-950"
        >
          <Download size={16} strokeWidth={2} />
          Download résumé
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-ink transition-colors hover:bg-subtle dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900"
        >
          Get in touch
        </a>
      </motion.div>
    </motion.section>
  );
}
