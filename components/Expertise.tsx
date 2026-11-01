import { capacityBuilding, certifications, competencies } from "@/content/data";
import { Section, SubHeading } from "./Section";
import { Reveal } from "./Reveal";
import { CheckIcon, ClipboardCheckIcon } from "./Icons";

export function Expertise() {
  return (
    <Section id="expertise" title="Expertise & Training" kicker="Core competencies">
      <Reveal>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {competencies.map((c) => (
            <li key={c} className="flex items-start gap-2.5 text-ink">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <SubHeading>Quality management & accreditation training</SubHeading>
      <ol className="space-y-4">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 70}>
            <div className="group flex gap-4">
              <span className="logo-card grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-faint group-hover:border-accent group-hover:text-accent">
                <ClipboardCheckIcon className="h-4 w-4" />
              </span>
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 pt-1.5">
                <p className="font-medium text-ink">
                  {c.title}
                  {c.place && <span className="font-normal text-muted">, {c.place}</span>}
                </p>
                <span className="shrink-0 font-mono text-xs text-faint">{c.date}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <SubHeading>Seminars, workshops & capacity building</SubHeading>
      <Reveal>
        <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
          {capacityBuilding.map((t) => (
            <li key={t} className="relative pl-4">
              <span aria-hidden="true" className="absolute left-0 top-[0.65rem] h-1 w-1 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
