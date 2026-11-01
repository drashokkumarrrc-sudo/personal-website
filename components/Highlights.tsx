import { highlights } from "@/content/data";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section aria-labelledby="glance-title" className="pb-14 sm:pb-16">
      <Reveal>
        <h2 id="glance-title" className="mb-5 text-xs uppercase tracking-[0.2em] text-accent">
          At a glance
        </h2>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col-reverse justify-end gap-1.5 bg-canvas p-4 sm:p-5">
              <dt className="text-xs leading-snug text-muted">{h.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-ink">{h.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
