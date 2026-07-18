"use client";

import { motion } from "framer-motion";
import Uptime from "./Uptime";
import Visitors from "./Visitors";

export default function Stats() {
  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted dark:text-neutral-400">
        A couple of live numbers
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Uptime />
        <Visitors />
      </div>
    </motion.section>
  );
}
