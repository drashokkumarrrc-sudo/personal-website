"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

// Section ids on the page. Secondary ones only appear in the mobile menu, to keep the desktop bar short.
const items = [
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "outreach", label: "Outreach" },
  { id: "expertise", label: "Expertise", secondary: true },
  { id: "leadership", label: "Leadership", secondary: true },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Shared deep links such as /#awards: bring the section into view once the page has hydrated.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const onScroll = () => {
      // The section whose top has most recently passed under the sticky nav;
      // at the very bottom, the last section, which may be too short to get there.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const line = window.scrollY + 120;
      let current: string | null = null;
      for (const s of sections) {
        if (s.offsetTop <= line) current = s.id;
      }
      setActive(atBottom ? sections[sections.length - 1].id : current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile menu on Escape or on a tap outside the header.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!(e.target instanceof Element) || !e.target.closest("header")) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <>
      <ul className="hidden items-center gap-1 text-sm text-muted md:flex">
        {items
          .filter((it) => !it.secondary)
          .map((it) => {
            const on = active === it.id;
            return (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`relative rounded-md px-3 py-1.5 transition-colors duration-200 ${
                    on ? "text-accent" : "hover:bg-surface hover:text-ink"
                  }`}
                >
                  {it.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                      on ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="rounded-md p-2 text-faint transition-colors hover:bg-surface hover:text-ink md:hidden"
      >
        {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
      </button>

      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute inset-x-0 top-full border-b border-line bg-canvas shadow-lg transition-[opacity,transform] duration-200 md:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-3xl px-4 py-2">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2.5 transition-colors ${
                  active === it.id ? "text-accent" : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
