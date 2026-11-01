// Prefixes a file from public/ with the GitHub Pages sub-path (empty for <username>.github.io).
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

// "+91 94506 19024" -> "tel:+919450619024"
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
