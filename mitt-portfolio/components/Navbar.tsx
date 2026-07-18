"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
        scrolled
          ? "border-border bg-white/75 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/75"
          : "border-transparent bg-white/0 dark:bg-neutral-950/0"
      }`}
    >
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-display text-sm font-bold text-ink dark:text-white"
        >
          {PROFILE.name}
        </a>

        <div className="flex items-center gap-4 text-sm font-medium text-muted dark:text-neutral-400 sm:gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-ink dark:hover:text-white sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#top"
            className="transition-colors hover:text-ink dark:hover:text-white sm:hidden"
          >
            Home
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
