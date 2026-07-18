import { BlinkCursor } from "./Hero";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-panelborder pt-6">
      <p className="font-mono text-xs text-muted">
        mitt@dev:~$ <BlinkCursor />
      </p>
      <p className="mt-3 font-mono text-[11px] text-muted">
        © {year} Mitt Ydv. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
