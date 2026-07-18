import { TOOLKIT } from "@/lib/constants";

export default function Toolkit() {
  return (
    <section id="toolkit" className="mt-16 scroll-mt-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted dark:text-neutral-400">
        Toolkit
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {TOOLKIT.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border bg-subtle px-3.5 py-1.5 text-sm font-medium text-ink dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
