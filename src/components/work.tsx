import { useMemo, useState } from "react";
import { categories, projects, type Category } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Work() {
  const [filter, setFilter] = useState<Category>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="work" className="anchor border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            label="Work"
            title="Selected projects"
            lede="Auctions, parking vision, student risk, a storefront, and a research paper. Hover a card — or focus it — to read the note."
          />
          <p className="text-sm text-muted">
            Showing <span className="text-ink">{visible.length}</span> of {projects.length}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((project) => project.categories.includes(category)).length;
            const selected = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(category)}
                className={`press inline-flex h-11 items-center gap-2 border px-4 text-sm ${
                  selected
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink hover:border-ink"
                }`}
              >
                {category}
                <span className={selected ? "text-paper/70" : "text-muted"}>{count}</span>
              </button>
            );
          })}
        </div>

        <ul key={filter} className="shelf-enter mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.id}>
              <article tabIndex={0} className="project-card h-full outline-none">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-5xl leading-none text-ink/20">
                      {project.index}
                    </span>
                    <p className="max-w-40 text-right text-xs font-medium uppercase tracking-widest text-muted">
                      {project.categories.join(" · ")}
                    </p>
                  </div>
                  <h3 className="mt-6 font-serif text-4xl leading-none text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.kicker}</p>
                </div>
                <p className="text-sm text-ink">{project.stack.join(" · ")}</p>
                <div className="project-reveal">
                  <p className="reveal-kicker">Note</p>
                  <p className="project-summary mt-3 text-sm leading-relaxed">{project.summary}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
