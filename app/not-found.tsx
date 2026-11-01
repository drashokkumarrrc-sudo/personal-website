import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center px-6">
      <p className="font-mono text-xs text-faint">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-3 text-muted">The page you were looking for does not exist.</p>
      <Link href="/" className="btn-primary mt-6">
        Back to the home page
      </Link>
    </main>
  );
}
