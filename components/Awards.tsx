import { awards } from "@/content/data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { AwardIcon } from "./Icons";

export function Awards() {
  return (
    <Section id="awards" title="Awards & Honours" kicker="Recognition">
      <ul className="divide-y divide-line border-y border-line">
        {awards.map((a, i) => (
          <Reveal as="li" key={a.title + (a.year ?? "")} delay={i * 50}>
            <div className="group flex gap-4 py-4">
              <AwardIcon className="mt-0.5 h-5 w-5 shrink-0 text-faint transition-colors duration-300 group-hover:text-accent" />
              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <p className="font-medium text-ink">{a.title}</p>
                  {a.from && <p className="mt-0.5 text-sm text-muted">{a.from}</p>}
                </div>
                {a.year && (
                  <p className="shrink-0 font-mono text-xs text-faint sm:max-w-[13rem] sm:text-right">{a.year}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
