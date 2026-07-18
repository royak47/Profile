import { PROFILE } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-16 scroll-mt-20 border-t border-border pt-10 dark:border-neutral-800"
    >
      <h2 className="font-display text-2xl font-bold text-ink dark:text-white">
        Get in touch
      </h2>
      <p className="mt-2 text-muted dark:text-neutral-400">
        I'd love to hear from you.
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-neutral-950"
      >
        Let's talk →
      </a>
    </section>
  );
}
