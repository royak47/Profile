"use client";

import { useEffect, useState } from "react";

export type Elapsed = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Calculates calendar-accurate elapsed time (years/months/days/h/m/s)
 * between a given ISO date string and "now", updating every second.
 *
 * Calendar-accurate means it accounts for different month lengths and
 * leap years correctly, the same way you'd count a person's real age.
 */
export function useElapsed(fromISO: string): Elapsed {
  const [elapsed, setElapsed] = useState<Elapsed>(() => calculate(fromISO));

  useEffect(() => {
    const tick = () => setElapsed(calculate(fromISO));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [fromISO]);

  return elapsed;
}

function calculate(fromISO: string): Elapsed {
  const from = new Date(fromISO);
  const now = new Date();

  let years = now.getFullYear() - from.getFullYear();
  let months = now.getMonth() - from.getMonth();
  let days = now.getDate() - from.getDate();
  let hours = now.getHours() - from.getHours();
  let minutes = now.getMinutes() - from.getMinutes();
  let seconds = now.getSeconds() - from.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    // borrow days from the previous month relative to "now"
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}
