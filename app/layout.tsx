import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { awards, competencies, memberships, profile, site } from "@/content/data";

const fullName = `${profile.honorific} ${profile.name}`;
const title = `${fullName} — ${site.title}`;
const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");

export const metadata: Metadata = {
  title,
  description: site.description,
  authors: [{ name: fullName }],
  openGraph: {
    title,
    description: site.description,
    type: "profile",
    firstName,
    lastName,
    ...(site.url ? { url: site.url } : {}),
  },
  twitter: { card: "summary", title, description: site.description },
  robots: { index: true, follow: true },
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: "/" } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Structured data so search engines can show a proper profile card.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  honorificPrefix: profile.honorific,
  givenName: firstName,
  familyName: lastName,
  jobTitle: profile.tagline.replace(" · ", ", "),
  worksFor: {
    "@type": "Organization",
    name: profile.organisation,
    parentOrganization: { "@type": "GovernmentOrganization", name: profile.parentOrganisation },
  },
  email: `mailto:${profile.email}`,
  ...(profile.phone ? { telephone: profile.phone } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  memberOf: [...new Set(memberships.map((m) => m.org))].map((name) => ({ "@type": "Organization", name })),
  knowsAbout: competencies,
  award: awards.map((a) => a.title),
  ...(site.url ? { url: site.url } : {}),
};

// Applies the stored (or system) theme before first paint so there is no flash.
const noFlash = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        {/* Without JavaScript, show everything instead of waiting for the scroll reveal. */}
        <noscript
          dangerouslySetInnerHTML={{ __html: "<style>.reveal{opacity:1!important;transform:none!important}</style>" }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
