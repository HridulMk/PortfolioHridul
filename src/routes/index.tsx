import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Cv } from "@/components/cv";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <Header />
      <main id="content">
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
