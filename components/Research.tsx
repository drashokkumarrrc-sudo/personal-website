import { publications, research } from "@/content/data";
import { Section, SubHeading } from "./Section";
import { Reveal } from "./Reveal";
import { MicroscopeIcon } from "./Icons";

export function Research() {
  return (
    <Section id="research" title="Research & Publications" kicker="Research leadership">
      <Reveal>
        <article className="lift rounded-xl border border-line p-5 hover:border-accent/50 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <MicroscopeIcon className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.14em] text-faint">{research.role}</p>
              <h3 className="mt-1 text-lg font-medium text-ink">{research.programme}</h3>
            </div>
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{research.summary}</p>
          <p className="mt-5 text-xs text-faint">Studies include</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {research.studies.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      <SubHeading>Publications & editorial</SubHeading>
      <ul className="space-y-4">
        {publications.map((p, i) => (
          <Reveal as="li" key={p.venue} delay={i * 70}>
            <div className="grid grid-cols-[4.5rem_1fr] gap-4 sm:grid-cols-[5.5rem_1fr]">
              <span className="pt-1 font-mono text-xs text-faint">{p.year}</span>
              <p className="leading-relaxed text-muted">
                {p.text} <cite className="text-ink">{p.venue}</cite>
                {p.note && <> ({p.note})</>}.
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
