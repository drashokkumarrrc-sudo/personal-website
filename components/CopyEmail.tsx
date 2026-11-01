"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, MailIcon } from "./Icons";

// A mailto link with a small button beside it that copies the address instead.
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <span className="inline-flex items-center gap-1">
      <a
        href={`mailto:${email}`}
        className="group ulink inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
      >
        <MailIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        title={copied ? "Copied" : "Copy email address"}
        className={`rounded p-1 transition-colors hover:bg-surface ${copied ? "text-accent" : "text-faint hover:text-ink"}`}
      >
        {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </span>
  );
}
