import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Cv } from "@/components/cv";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a href="#content" className="skip">Skip to content</a>
      <div className="site-video" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata" poster="/og.jpg" tabIndex={-1}>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="site-video-overlay" />
      </div>
      <div className="site-atmosphere" aria-hidden="true" />
      <Header />
      <main id="content" className="relative">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
