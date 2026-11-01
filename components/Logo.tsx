import { asset } from "@/lib/links";

// An organisation's logo image, or a square with its initials when no image is set.
export function Logo({ mark, src, alt, small = false }: { mark: string; src?: string; alt: string; small?: boolean }) {
  const size = small ? "h-10 w-10 rounded-md text-[0.6rem]" : "h-16 w-16 rounded-lg text-sm sm:h-20 sm:w-20";

  if (src) {
    return (
      <span
        className={`logo-card inline-flex shrink-0 items-center justify-center overflow-hidden bg-transparent p-2 dark:bg-white dark:ring-1 dark:ring-line ${size}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(src)} alt={alt} className="max-h-full max-w-full object-contain" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`logo-card inline-flex shrink-0 items-center justify-center border border-line bg-surface font-semibold tracking-wide text-muted group-hover:border-accent group-hover:text-accent ${size}`}
    >
      {mark}
    </span>
  );
}
