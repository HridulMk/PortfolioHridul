import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";
import { getCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <>
        <Header />
        <main className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Not found</p>
          <h1 className="mt-4 font-serif text-title text-ink">That case study doesn’t exist.</h1>
          <Link
            to="/"
            hash="case-studies"
            className="rule-link mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to case studies
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const { project } = study;

  return (
    <>
      <div className="site-atmosphere" aria-hidden="true" />
      <Header />
      <main className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pb-28 md:pt-16">
          <Link
            to="/"
            hash="case-studies"
            className="rule-link inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All case studies
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Case study {study.caseStudyIndex} · {project.categories.join(" / ")}
            </p>
            <h1 className="mt-5 font-serif text-display leading-[0.95] text-ink">{project.title}</h1>
            <p className="mt-5 text-lg text-accent/90">{project.kicker}</p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
              >
                Visit live project
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <section className="rounded-2xl border border-line bg-paper-deep/75 p-6 sm:p-8">
              <SectionHeading
                index="01"
                label="The challenge"
                title="The problem to solve."
                lede={study.challenge}
              />
            </section>

            <section className="rounded-2xl border border-line bg-paper-deep/75 p-6 sm:p-8">
              <SectionHeading index="02" label="The approach" title="How it came together." />
              <ul className="mt-6 space-y-4">
                {study.approach.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-5 rounded-2xl border border-line bg-paper-deep/75 p-6 sm:p-8">
            <SectionHeading index="03" label="Highlights" title="What this project brings together." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {study.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl border border-line bg-white/[0.03] p-4 text-sm leading-relaxed text-ink"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10 border-t border-line pt-6">
            <Link
              to="/"
              hash="case-studies"
              className="rule-link inline-flex min-h-11 items-center gap-2 text-sm text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Explore more case studies
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
