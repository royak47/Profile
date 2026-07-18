"use client";

import { PROFILE } from "@/lib/constants";
import { useTypewriter } from "@/lib/useTypewriter";

export default function Hero() {
  const line1 = useTypewriter("whoami", 55, 200);
  const line2 = useTypewriter(
    `${PROFILE.name} — ${PROFILE.role}, ${PROFILE.location}`,
    18,
    900
  );
  const line3 = useTypewriter("status", 55, 1600);
  const line4 = useTypewriter(PROFILE.tagline, 16, 2300);

  return (
    <section aria-label="Introduction">
      <Prompt cmd={line1.output} showCursor={!line1.done} />
      {line1.done && (
        <p className="mt-1 pl-5 font-mono text-2xl font-bold text-ink sm:text-3xl">
          {line2.output}
          {!line2.done && <BlinkCursor />}
        </p>
      )}

      {line2.done && (
        <div className="mt-6">
          <Prompt cmd={line3.output} showCursor={!line3.done} />
        </div>
      )}
      {line3.done && (
        <p className="mt-1 flex items-center gap-2 pl-5 font-mono text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_2px_rgba(255,179,0,0.6)]" />
          <span>
            online — {line4.output}
            {!line4.done && <BlinkCursor />}
          </span>
        </p>
      )}
    </section>
  );
}

export function Prompt({
  cmd,
  showCursor = false,
}: {
  cmd: string;
  showCursor?: boolean;
}) {
  return (
    <p className="font-mono text-sm text-amber">
      <span className="text-muted">mitt@dev:~$</span> {cmd}
      {showCursor && <BlinkCursor />}
    </p>
  );
}

export function BlinkCursor() {
  return (
    <span
      className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-amber align-middle"
      aria-hidden="true"
    />
  );
}
