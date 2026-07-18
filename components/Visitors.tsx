"use client";

import { useCounter } from "@/lib/useCounter";
import { Prompt } from "./Hero";

export default function Visitors() {
  const { today, total, loading, offline } = useCounter();

  return (
    <section aria-label="Visitor counter">
      <Prompt cmd="visitors --live" />
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Stat label="today" value={today} loading={loading} />
        <Stat label="all-time" value={total} loading={loading} />
      </div>
      {offline && (
        <p className="mt-2 font-mono text-[11px] text-muted">
          counting API unreachable — showing a local, browser-only tally.
        </p>
      )}
    </section>
  );
}

function Stat({
  label,
  value,
  loading,
}: {
  label: string;
  value: number | null;
  loading: boolean;
}) {
  return (
    <div className="rounded-md border border-panelborder bg-bg/60 p-4 text-center">
      <div className="font-mono text-2xl font-bold tabular-nums text-amber">
        {loading ? "···" : value?.toLocaleString() ?? "—"}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
        {label}
      </div>
    </div>
  );
}
