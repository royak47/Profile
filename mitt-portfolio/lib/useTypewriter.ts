"use client";

import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time. Instantly reveals the full
 * text if the user has requested reduced motion.
 */
export function useTypewriter(text: string, speedMs = 28, startDelayMs = 0) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs]);

  return { output, done };
}
