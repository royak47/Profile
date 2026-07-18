"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted dark:text-neutral-400">
        Projects
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent dark:text-neutral-400"
              />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-subtle px-2.5 py-1 text-xs font-medium text-ink dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
