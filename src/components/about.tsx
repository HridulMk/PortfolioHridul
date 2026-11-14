import { education, experience, languages, study } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="anchor border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="01"
          label="About"
          title="Physics first, then the systems around a model."
          lede="Hands-on with Python, React, Next.js, Django, SQL, and PostgreSQL. The work spans AI products and ordinary full-stack plumbing — auth, APIs, and the bugs in between."
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">Education</h3>
            <ol className="mt-4">
              {education.map((item) => (
                <li key={item.credential} className="border-t border-line py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-serif text-2xl text-ink">{item.year}</p>
                    <p className="text-sm text-accent">{item.detail}</p>
                  </div>
                  <p className="mt-2 text-ink">{item.credential}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 text-xs font-medium uppercase tracking-widest text-muted">
              Languages
            </h3>
            <p className="mt-3 font-serif text-xl leading-relaxed text-ink sm:text-2xl">{languages.join("  ·  ")}</p>

            <h3 className="mt-10 text-xs font-medium uppercase tracking-widest text-muted">
              Also on the desk
            </h3>
            <ul className="mt-4 space-y-3">
              {study.map((item) => (
                <li key={item} className="border-t border-line pt-3 text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">Experience</h3>
            <ol className="mt-4">
              {experience.map((job) => (
                <li key={job.role + job.dates} className="border-t border-line py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="min-w-0 font-serif text-xl text-ink sm:text-2xl">{job.role}</p>
                    <p className="text-sm text-muted">{job.dates}</p>
                  </div>
                  <p className="mt-1 text-sm text-accent">
                    {job.org} · {job.place}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                        <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
