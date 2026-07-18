"use client";

import { PROFILE } from "@/lib/constants";
import { useElapsed } from "@/lib/useElapsed";

const UNITS: Array<{ key: keyof ReturnType<typeof useElapsed>; label: string }> = [
  { key: "years", label: "yrs" },
  { key: "months", label: "mo" },
  { key: "days", label: "days" },
  { key: "hours", label: "hrs" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
];

export default function Uptime() {
  const elapsed = useElapsed(PROFILE.dob);

  return (
    <div className="rounded-2xl border border-border bg-white p-6">
      <p className="text-sm font-medium text-muted">Age, live</p>
      <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-4">
        {UNITS.map((u) => (
          <div key={u.key}>
            <div
              className="font-mono text-2xl font-bold tabular-nums text-ink"
              aria-live="polite"
            >
              {String(elapsed[u.key]).padStart(2, "0")}
            </div>
            <div className="mt-0.5 text-xs uppercase tracking-wide text-muted">
              {u.label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 border-t border-border pt-3 text-xs text-muted">
        born 13 Oct 1998 — ticking every second.
      </p>
    </div>
  );
}
