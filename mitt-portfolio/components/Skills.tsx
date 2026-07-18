"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="mt-20 scroll-mt-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted dark:text-neutral-400">
        Skills
      </h2>
      <div className="mt-5 space-y-5">
        {SKILLS.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink dark:text-white">
                {skill.name}
              </span>
              <span className="font-mono text-muted dark:text-neutral-400">
                {skill.level}%
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-subtle dark:bg-neutral-800">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
