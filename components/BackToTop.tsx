"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`no-print fixed bottom-5 right-5 z-40 grid h-10 w-10 place-items-center rounded-full border border-line bg-canvas/90 text-muted shadow-lg backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </a>
  );
}
