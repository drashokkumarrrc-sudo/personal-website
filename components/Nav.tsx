import { profile } from "@/content/data";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium text-ink">
          <span className="text-accent">/</span> {profile.honorific} {profile.name}
        </a>
        <div className="flex items-center">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
