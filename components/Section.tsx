import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-14 sm:py-20">
      <Reveal className="mb-8 sm:mb-10">
        {kicker && <div className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">{kicker}</div>}
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

// A smaller heading for a group inside a section, e.g. "Earlier appointments".
export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mb-5 mt-12">
      <h3 className="text-sm font-semibold text-accent">{children}</h3>
    </Reveal>
  );
}
