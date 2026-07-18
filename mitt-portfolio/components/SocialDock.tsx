"use client";

import { motion } from "framer-motion";
import { Instagram, Send, Mail, Github } from "lucide-react";
import { SOCIALS } from "@/lib/constants";

const ICONS = { instagram: Instagram, telegram: Send, mail: Mail, github: Github };

export default function SocialDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex items-end gap-1.5 rounded-2xl border border-border bg-white/80 px-3 py-2.5 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80"
      >
        {SOCIALS.map((s) => {
          const Icon = ICONS[s.label as keyof typeof ICONS];
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -6, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-accentSoft hover:text-accent dark:text-white dark:hover:bg-neutral-800"
            >
              <Icon size={20} strokeWidth={1.8} />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
