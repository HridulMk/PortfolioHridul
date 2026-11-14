import { useMemo, useState } from "react";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { categories, projects, type Category } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Work() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = useMemo(
    () => filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="work" className="anchor border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="02" label="Selected work" title="Built to solve real problems." lede="A mix of AI experiments, computer vision, and full-stack products — each project starts with a practical problem." />
          <div className="flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-muted">
            <Layers3 className="size-4 text-accent" aria-hidden="true" />
            <span><strong className="text-ink">{visible.length}</strong> / {projects.length} projects</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 pb-2" role="group" aria-label="Filter projects">
          {categories.map((category) => {
            const count = category === "All" ? projects.length : projects.filter((project) => project.categories.includes(category)).length;
            const selected = filter === category;
            return (
              <button key={category} type="button" aria-pressed={selected} onClick={() => setFilter(category)}
                className={`press inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm ${selected ? "border-accent/60 bg-accent/10 text-accent" : "border-line bg-white/[0.02] text-muted hover:border-accent/40 hover:text-ink"}`}>
                {category}<span className="text-xs opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <ul key={filter} className="shelf-enter mt-5 grid min-w-0 gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <li key={project.id} className="min-w-0">
              <article tabIndex={0} className="project-card group h-full outline-none">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-accent/25 bg-accent/[0.06] font-mono text-sm text-accent">{project.index}</span>
                  <span className="min-w-0 text-right text-xs uppercase tracking-[0.14em] text-muted">{project.categories.join(" / ")}</span>
                </div>
                <div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">{project.kicker}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">{project.summary}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-line/80 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => <span key={tech} className="rounded-md border border-line bg-black/10 px-2.5 py-1 text-xs text-muted">{tech}</span>)}
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
