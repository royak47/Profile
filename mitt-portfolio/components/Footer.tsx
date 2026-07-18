import { PROFILE, SOCIALS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border pt-8 pb-4 dark:border-neutral-800">
      <p className="font-display text-lg font-bold text-ink dark:text-white">
        {PROFILE.name}
      </p>
      <p className="mt-1 text-sm text-muted dark:text-neutral-400">
        {PROFILE.role} from {PROFILE.location}.
      </p>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize text-muted transition-colors hover:text-ink dark:text-neutral-400 dark:hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted dark:text-neutral-400">
        © {year} {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
