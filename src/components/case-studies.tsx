import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/section-heading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="anchor border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <SectionHeading
          index="03"
          label="Case studies"
          title="The thinking behind the work."
          lede="Explore the problem, implementation, and key takeaways from three projects."
        />

        <ul className="mt-8 grid min-w-0 gap-4 md:grid-cols-3">
          {caseStudies.map(({ caseStudyIndex, slug, project, highlights }) => (
            <li key={slug} className="min-w-0">
              <Link
                to="/case-studies/$slug"
                params={{ slug }}
                className="project-card group h-full outline-none"
                aria-label={`Read the ${project.title} case study`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-accent/25 bg-accent/[0.06] font-mono text-sm text-accent">
                    {caseStudyIndex}
                  </span>
                  <span className="text-right text-xs uppercase tracking-[0.14em] text-muted">
                    {project.categories.join(" / ")}
                  </span>
                </div>

                <div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
                    {project.kicker}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
                </div>

                <div className="mt-auto border-t border-line/80 pt-4">
                  <ul className="flex flex-wrap gap-2" aria-label="Project highlights">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-line bg-black/10 px-2.5 py-1 text-xs text-muted"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read case study
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
