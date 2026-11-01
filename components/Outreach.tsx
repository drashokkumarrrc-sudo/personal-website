import type { ComponentType } from "react";
import { outreach, type OutreachIcon } from "@/content/data";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MegaphoneIcon, SchoolIcon, ShieldPlusIcon, StethoscopeIcon, UsersIcon, type IconProps } from "./Icons";

const icons: Record<OutreachIcon, ComponentType<IconProps>> = {
  crowd: UsersIcon,
  shield: ShieldPlusIcon,
  megaphone: MegaphoneIcon,
  stethoscope: StethoscopeIcon,
  school: SchoolIcon,
};

export function Outreach() {
  return (
    <Section id="outreach" title="Public Health & Outreach" kicker="Community impact">
      <ul className="grid gap-4 sm:grid-cols-2">
        {outreach.map((o, i) => {
          const Icon = icons[o.icon];
          return (
            <Reveal as="li" key={o.title} delay={(i % 2) * 70} className={o.featured ? "sm:col-span-2" : ""}>
              <article className="lift group h-full rounded-xl border border-line p-5 hover:border-accent/50">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="font-medium text-ink">{o.title}</h3>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{o.text}</p>
                {o.tags && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {o.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
