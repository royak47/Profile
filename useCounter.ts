"use client";

import { useEffect, useState } from "react";
import { COUNTER_NAMESPACE } from "./constants";

type CounterState = {
  today: number | null;
  total: number | null;
  loading: boolean;
  offline: boolean;
};

const API = "https://api.countapi.xyz";

function todayKey() {
  const d = new Date();
  return `visits-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

async function hit(key: string): Promise<number | null> {
  try {
    const res = await fetch(`${API}/hit/${COUNTER_NAMESPACE}/${key}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("counter api unavailable");
    const data = await res.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

async function get(key: string): Promise<number | null> {
  try {
    const res = await fetch(`${API}/get/${COUNTER_NAMESPACE}/${key}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("counter api unavailable");
    const data = await res.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

// Local fallback so the UI never shows a broken counter if the free
// API is rate-limited or down — increments a browser-local tally instead.
function localFallback(scope: "today" | "total"): number {
  if (typeof window === "undefined") return 0;
  const key = scope === "today" ? `local-${todayKey()}` : "local-total";
  const guardKey = `${key}-counted`;
  const already = window.localStorage.getItem(guardKey);
  let value = Number(window.localStorage.getItem(key) || "0");
  if (!already) {
    value += 1;
    window.localStorage.setItem(key, String(value));
    window.localStorage.setItem(guardKey, "1");
  }
  return value;
}

/**
 * Tracks a "today" counter (resets to 0 at midnight, one key per day)
 * and a "total" counter (all-time), incrementing once per browser
 * session so repeat page views in the same tab don't inflate the count.
 */
export function useCounter(): CounterState {
  const [state, setState] = useState<CounterState>({
    today: null,
    total: null,
    loading: true,
    offline: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const alreadyThisSession = window.sessionStorage.getItem(
        "counted-this-session"
      );

      const [todayVal, totalVal] = alreadyThisSession
        ? await Promise.all([get(todayKey()), get("visits-total")])
        : await Promise.all([hit(todayKey()), hit("visits-total")]);

      if (!alreadyThisSession) {
        window.sessionStorage.setItem("counted-this-session", "1");
      }

      const apiFailed = todayVal === null && totalVal === null;

      if (cancelled) return;

      if (apiFailed) {
        setState({
          today: localFallback("today"),
          total: localFallback("total"),
          loading: false,
          offline: true,
        });
      } else {
        setState({
          today: todayVal,
          total: totalVal,
          loading: false,
          offline: false,
        });
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
