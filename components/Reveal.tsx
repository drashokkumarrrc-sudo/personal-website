"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades/slides children in the first time they scroll into view.
 * Renders visible immediately when the user prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const props = {
    ref: (node: HTMLElement | null) => {
      ref.current = node;
    },
    "data-shown": shown,
    style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    className: `reveal ${className}`,
  };

  return as === "li" ? <li {...props}>{children}</li> : <div {...props}>{children}</div>;
}
