import { currentRole, earlierRoles } from "@/content/data";
import { Section, SubHeading } from "./Section";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="Career">
      <Reveal>
        <div className="group flex gap-4">
          <Logo mark={currentRole.mark} src={currentRole.logo} alt={currentRole.org} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                {currentRole.org}
              </h3>
              <span className="shrink-0 font-mono text-xs text-faint">{currentRole.period}</span>
            </div>
            <p className="mt-1 text-sm text-faint">{currentRole.parent}</p>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs text-accent">
                Current post
              </span>
              <span className="font-medium text-ink">{currentRole.post}</span>
            </p>
            <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
              {currentRole.duties.map((d) => (
                <li key={d.title} className="relative pl-4">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.65rem] h-1 w-1 rounded-full bg-faint transition-colors duration-300 group-hover:bg-accent"
                  />
                  <span className="font-medium text-ink">{d.title}:</span> {d.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <SubHeading>Earlier appointments</SubHeading>
      <ol className="space-y-4">
        {earlierRoles.map((r, i) => (
          <Reveal as="li" key={r.org} delay={i * 70}>
            <div className="group flex items-center gap-4">
              <Logo mark={r.mark} alt={r.org} small />
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <p className="text-ink">
                  <span className="font-medium">{r.role}</span>
                  <span className="text-faint"> · </span>
                  <span className="text-muted">
                    {r.org}, {r.place}
                  </span>
                </p>
                <span className="shrink-0 font-mono text-xs text-faint">{r.period}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
