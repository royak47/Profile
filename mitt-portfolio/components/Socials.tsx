import { SOCIALS } from "@/lib/constants";
import { Prompt } from "./Hero";

export default function Socials() {
  return (
    <section aria-label="Social links">
      <Prompt cmd="ls -la ./socials" />
      <div className="mt-3 divide-y divide-panelborder rounded-md border border-panelborder">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-amber/5 focus-visible:bg-amber/5 focus-visible:outline-none"
          >
            <div>
              <div className="font-mono text-sm text-ink">
                <span className="text-muted">./</span>
                {s.label}
              </div>
              <div className="mt-0.5 font-mono text-xs text-muted">
                {s.hint}
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-amber">
              {s.display}
              <span
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
