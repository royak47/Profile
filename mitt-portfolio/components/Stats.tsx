import Uptime from "./Uptime";
import Visitors from "./Visitors";

export default function Stats() {
  return (
    <section className="mt-16">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted dark:text-neutral-400">
        A couple of live numbers
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Uptime />
        <Visitors />
      </div>
    </section>
  );
}
