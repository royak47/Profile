import { PROFILE } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-display text-sm font-bold text-ink dark:text-white"
        >
          {PROFILE.name}
        </a>

        <div className="flex items-center gap-4 text-sm font-medium text-muted dark:text-neutral-400 sm:gap-5">
          <a
            href="#top"
            className="transition-colors hover:text-ink dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#toolkit"
            className="transition-colors hover:text-ink dark:hover:text-white"
          >
            Toolkit
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-ink dark:hover:text-white"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
