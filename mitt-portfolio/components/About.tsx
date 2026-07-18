import { PROFILE } from "@/lib/constants";
import { Prompt } from "./Hero";

export default function About() {
  return (
    <section aria-label="About">
      <Prompt cmd="cat about.txt" />
      <div className="mt-3 space-y-3 pl-5 font-sans text-[15px] leading-relaxed text-ink/90">
        {PROFILE.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
