
import { Download, ExternalLink, FileText, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const contents = [
  {
    number: "01",
    label: "Profile & technical skills",
    detail:
      "Full-stack development, Python, Django, FastAPI, React, Next.js, AI/ML, LLMs and RAG",
  },
  {
    number: "02",
    label: "Professional experience",
    detail:
      "Progressive Cybernetics · Inmakes Infotech · Web application development",
  },
  {
    number: "03",
    label: "Selected projects",
    detail:
      "ParkAI · CM Kerala · KnowBase AI · Oction Mart · Student Dropout Prediction",
  },
  {
    number: "04",
    label: "Education & research",
    detail:
      "MCA – AI & Machine Learning · CGPA 8.35 · B.Sc Physics · ICAISM Research Paper",
  },
];

const href = "/HRIDUL_M_ANILKUMAR%20ai.pdf";
const downloadName = "Hridul_M_Anilkumar_CV.pdf";

export function Cv() {
  return (
    <section
      id="cv"
      className="anchor border-t border-line bg-paper-deep"
      aria-labelledby="cv-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:gap-14 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">

        {/* Section introduction */}
        <div>
          <SectionHeading
            index="05"
            label="CURRICULUM VITAE"
            title="A closer look at my work."
            lede="A concise overview of my education, technical experience, selected projects, and research — all in one document."
          />

          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            Interested in working together or exploring my technical
            background? My CV provides a more detailed look at the
            skills and projects behind this portfolio.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <span className="flex size-9 items-center justify-center rounded-full border border-line">
              <FileText className="size-4" />
            </span>
            <span>Updated November 2026</span>
          </div>
        </div>

        {/* CV preview card */}
        <div className="min-w-0 border border-line bg-paper p-5 sm:p-7 md:p-8">

          {/* Document header */}
          <div className="flex items-start justify-between gap-4 border-b border-line pb-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                Professional profile
              </div>

              <h3 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
                Hridul M Anilkumar
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Full-Stack Developer · AI & Machine Learning
              </p>
            </div>

            <div
              className="shrink-0 font-serif text-4xl leading-none text-ink/15 sm:text-5xl"
              aria-hidden="true"
            >
              CV
            </div>
          </div>

          {/* Document contents */}
          <div className="mt-3">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted">
              Inside the document
            </p>

            <ol>
              {contents.map((item) => (
                <li
                  key={item.number}
                  className="group flex gap-4 border-b border-line py-4 last:border-b-0"
                >
                  <span className="shrink-0 pt-0.5 font-mono text-xs text-accent">
                    {item.number}
                  </span>

                  <div className="min-w-0">
                    <h4 className="text-sm font-medium text-ink">
                      {item.label}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Document metadata */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="size-3.5" />
              PDF Document
            </span>

            <span>Professional CV</span>

            <span>Two-page overview</span>
          </div>

          {/* Actions */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={href}
              download={downloadName}
              className="press inline-flex h-12 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-12 items-center justify-center gap-2 border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              View CV
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <p className="text-xs text-muted">
              More than skills. A record of things built.
            </p>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent transition-opacity hover:opacity-70"
            >
              Get in touch
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
