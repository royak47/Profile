"use client";

import { PROFILE } from "@/lib/constants";
import { useElapsed } from "@/lib/useElapsed";
import { Prompt } from "./Hero";

const UNITS: Array<{ key: keyof ReturnType<typeof useElapsed>; label: string }> = [
  { key: "years", label: "years" },
  { key: "months", label: "months" },
  { key: "days", label: "days" },
  { key: "hours", label: "hours" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
];

export default function Uptime() {
  const elapsed = useElapsed(PROFILE.dob);

  return (
    <section aria-label="Age counter, live">
      <Prompt cmd="uptime --since 1998-10-13" />

      <div className="mt-4 rounded-md border border-panelborder bg-bg/60 p-4 sm:p-6">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {UNITS.map((u) => (
            <div key={u.key} className="text-center">
              <div
                className="font-mono text-2xl font-bold tabular-nums text-amber text-shadow-glow sm:text-3xl"
                aria-live="polite"
              >
                {String(elapsed[u.key]).padStart(2, "0")}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                {u.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 border-t border-panelborder pt-4 font-mono text-xs text-muted">
          load average: curiosity, coffee, unfinished side-projects
          <br />
          born 13 Oct 1998 — this number never stops counting.
        </p>
      </div>
    </section>
  );
}
