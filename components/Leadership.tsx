import { memberships } from "@/content/data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <Section id="leadership" title="Memberships & Leadership" kicker="Professional bodies">
      <ol className="ml-1 border-l border-line">
        {memberships.map((m, i) => (
          <Reveal as="li" key={m.role + m.org} delay={i * 60} className="pb-7 last:pb-0">
            <div className="group relative pl-6">
              <span
                aria-hidden="true"
                className="absolute -left-[5.5px] top-[0.45rem] h-2.5 w-2.5 rounded-full border-2 border-canvas bg-faint transition-colors duration-300 group-hover:bg-accent"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <p className="min-w-0 font-medium text-ink">
                  {m.role}
                  <span className="font-normal text-faint"> · </span>
                  <span className="font-normal text-muted">{m.org}</span>
                </p>
                {m.period && <span className="shrink-0 font-mono text-xs text-faint">{m.period}</span>}
              </div>
              {m.note && <p className="mt-1 text-sm leading-relaxed text-faint">{m.note}</p>}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
