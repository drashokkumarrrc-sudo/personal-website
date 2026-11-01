import { profile, site } from "@/content/data";

export function Footer() {
  return (
    // Extra bottom padding keeps the floating back-to-top button clear of the text.
    <footer className="mt-10 flex flex-col gap-2 border-t border-line pb-24 pt-10 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.honorific} {profile.name}
      </p>
      <p>Last updated {site.updated}</p>
    </footer>
  );
}
