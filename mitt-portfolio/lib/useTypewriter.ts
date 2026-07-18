"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through `phrases`, typing each one out, pausing, erasing it, and
 * moving to the next — a classic rotating "typing effect". Falls back to
 * simply showing the first phrase if reduced motion is requested.
 */
export function useTypewriterLoop(
  phrases: string[],
  options?: { typeSpeed?: number; eraseSpeed?: number; pauseMs?: number }
) {
  const { typeSpeed = 70, eraseSpeed = 40, pauseMs = 1400 } = options ?? {};
  const [text, setText] = useState("");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || phrases.length === 0) {
      setText(phrases[0] ?? "");
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let erasing = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIndex % phrases.length];

      if (!erasing) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          erasing = true;
          timeoutId = setTimeout(tick, pauseMs);
          return;
        }
        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex <= 0) {
          erasing = false;
          phraseIndex += 1;
          timeoutId = setTimeout(tick, 300);
          return;
        }
        timeoutId = setTimeout(tick, eraseSpeed);
      }
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [phrases, typeSpeed, eraseSpeed, pauseMs]);

  return text;
}
