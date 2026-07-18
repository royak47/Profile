"use client";

import { useCounter } from "@/lib/useCounter";

export default function Visitors() {
  const { today, total, loading, offline } = useCounter();

  return (
    <div className="rounded-2xl border border-border bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-sm font-medium text-muted dark:text-neutral-400">
        Visitors, live
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Stat label="today" value={today} loading={loading} />
        <Stat label="all-time" value={total} loading={loading} />
      </div>
      <p className="mt-4 border-t border-border pt-3 text-xs text-muted dark:border-neutral-800 dark:text-neutral-400">
        {offline
          ? "counting service unreachable — showing a local tally."
          : "counted once per visitor session."}
      </p>
    </div>
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
    <div>
      <div className="font-mono text-3xl font-bold tabular-nums text-ink dark:text-white">
        {loading ? "···" : value?.toLocaleString() ?? "—"}
      </div>
      <div className="mt-0.5 text-xs uppercase tracking-wide text-muted dark:text-neutral-400">
        {label}
      </div>
    </div>
  );
}
