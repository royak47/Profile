import { PROFILE } from "@/lib/constants";
import { Prompt } from "./Hero";

export default function Contact() {
  return (
    <section aria-label="Contact">
      <Prompt cmd={`mail --to ${PROFILE.name.split(" ")[0].toLowerCase()}`} />
      <div className="mt-3 flex flex-col gap-3 pl-5 sm:flex-row sm:items-center">
        <p className="font-sans text-sm text-ink/80">
          Got a project, a question, or just want to say hi?
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex w-fit items-center gap-2 rounded-md border border-amber/40 bg-amber/10 px-4 py-2 font-mono text-sm text-amber transition-colors hover:bg-amber/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          send message →
        </a>
      </div>
    </section>
  );
}
