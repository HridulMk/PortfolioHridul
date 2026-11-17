import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience/$slug")({
  component: ExperiencePage,
});

function ExperiencePage() {
  const { slug } = Route.useParams();
  const job = experience.find((item) => item.slug === slug);

  if (!job) {
    return (
      <>
        <Header />
        <main className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Not found</p>
          <h1 className="mt-4 font-serif text-title text-ink">That experience doesn’t exist.</h1>
          <Link
            to="/"
            hash="about"
            className="rule-link mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to experience
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="site-atmosphere" aria-hidden="true" />
      <Header />
      <main className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 md:px-8 md:pb-28 md:pt-16">
          <Link
            to="/"
            hash="about"
            className="rule-link inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All experience
          </Link>

          <article className="mt-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {job.dates} · {job.place}
            </p>
            <h1 className="mt-5 font-serif text-display leading-[0.95] text-ink">{job.role}</h1>
            <p className="mt-5 text-lg text-accent/90">{job.org}</p>
            {job.projectUrl ? (
              <section className="mt-8 rounded-2xl border border-line bg-paper-deep/75 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Project resources</p>
                <a
                  href={job.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
                >
                  View project folder
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </section>
            ) : null}
            {job.teamSize || job.focusAreas || job.tools ? (
              <section className="mt-10 grid gap-4 sm:grid-cols-2">
                {job.teamSize ? (
                  <div className="rounded-xl border border-line bg-paper-deep/75 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Team leadership</p>
                    <p className="mt-2 text-lg font-medium text-ink">{job.teamSize}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">Task coordination and daily deliverables</p>
                  </div>
                ) : null}
                {job.focusAreas ? (
                  <div className="rounded-xl border border-line bg-paper-deep/75 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Focus areas</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.focusAreas.map((area) => (
                        <li key={area} className="rounded-full border border-line px-3 py-1.5 text-xs text-ink">
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {job.tools ? (
                  <div className="rounded-xl border border-line bg-paper-deep/75 p-5 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Tools</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <li key={tool} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-accent">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ) : null}
            <section className="mt-12 rounded-2xl border border-line bg-paper-deep/75 p-6 sm:p-8">
              <h2 className="font-serif text-3xl text-ink">Responsibilities & contributions</h2>
              <ul className="mt-6 space-y-4">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
