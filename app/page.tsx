import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Outreach } from "@/components/Outreach";
import { Expertise } from "@/components/Expertise";
import { Leadership } from "@/components/Leadership";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-canvas focus:px-3 focus:py-2 focus:text-sm focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-6">
        <Hero />
        <Highlights />
        <Experience />
        <Research />
        <Outreach />
        <Expertise />
        <Leadership />
        <Awards />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
