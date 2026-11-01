import { profile } from "@/content/data";
import { asset, telHref } from "@/lib/links";
import { Avatar } from "./Avatar";
import { CopyEmail } from "./CopyEmail";
import { DownloadIcon, PhoneIcon, PinIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="relative pb-12 pt-14 sm:pt-20">
      {/* Soft drifting glow, purely decorative. */}
      <div
        aria-hidden="true"
        className="no-print drift pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
      />

      <div className="relative flex flex-col-reverse sm:flex-row sm:items-start sm:gap-8">
        <div className="min-w-0 flex-1">
          <p className="rise mb-4 flex items-center gap-2 text-xs text-faint" style={{ animationDelay: "40ms" }}>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.badge}
          </p>

          <h1
            className="rise text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            style={{ animationDelay: "90ms" }}
          >
            <span className="text-faint">{profile.honorific}</span> {profile.name}
          </h1>
          <p className="rise mt-3 text-lg text-muted" style={{ animationDelay: "150ms" }}>
            {profile.tagline}
          </p>
          <p className="rise mt-2 text-sm leading-relaxed text-faint" style={{ animationDelay: "180ms" }}>
            {profile.organisation} · {profile.parentOrganisation}
          </p>
        </div>

        <div className="rise mb-6 shrink-0 sm:mb-0" style={{ animationDelay: "120ms" }}>
          <Avatar />
        </div>
      </div>

      <div
        className="rise relative mt-7 max-w-2xl space-y-4 leading-relaxed text-muted"
        style={{ animationDelay: "210ms" }}
      >
        {profile.blurb.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div
        className="rise relative mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
        style={{ animationDelay: "270ms" }}
      >
        {profile.cv && (
          <a href={asset(profile.cv)} download className="btn-primary px-3.5 py-1.5">
            <DownloadIcon className="h-3.5 w-3.5" />
            Download CV
          </a>
        )}
        <CopyEmail email={profile.email} />
        {profile.phone && (
          <a
            href={telHref(profile.phone)}
            className="group ulink inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            <PhoneIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            {profile.phone}
          </a>
        )}
        <span className="inline-flex items-center gap-1.5 text-faint">
          <PinIcon className="h-3.5 w-3.5" />
          {profile.location}
        </span>
      </div>

      <ul className="rise relative mt-8 flex flex-wrap gap-2" style={{ animationDelay: "330ms" }}>
        {profile.interests.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
