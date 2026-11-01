import { profile } from "@/content/data";
import { asset } from "@/lib/links";

const frame =
  "h-40 w-40 sm:h-48 sm:w-48 rounded-full ring-2 ring-line shadow-xl transition-transform duration-500 ease-out hover:scale-[1.04] hover:ring-accent";

// The profile photo, or the initials until a photo is added in content/data.ts.
export function Avatar() {
  const alt = `${profile.honorific} ${profile.name}`;

  if (profile.avatar) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={asset(profile.avatar)} alt={alt} className={`${frame} object-cover`} />;
  }

  return (
    <div role="img" aria-label={alt} className={`${frame} relative grid place-items-center overflow-hidden bg-surface`}>
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--color-accent) 32%, transparent), transparent 70%)",
        }}
      />
      <span aria-hidden="true" className="relative text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
        {profile.initials}
      </span>
    </div>
  );
}
