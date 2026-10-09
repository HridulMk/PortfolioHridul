import { ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

const facts = [
  { label: "Focus", value: "AI · Full-stack" },
  { label: "CGPA", value: "8.35" },
  { label: "Base", value: "Kerala, India" },
];

export function Hero() {
  return (
    <section id="top" className="anchor relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-cyan-400/10 blur-3xl md:size-96" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 md:px-8 md:pb-24 md:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          <p className="inline-flex items-center gap-2"><span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden="true" /> Portfolio / 2026</p>
          <p>{profile.location}</p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)] md:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              <Sparkles className="size-3.5" aria-hidden="true" /> AI · Software · Creative problem-solving
            </p>
            <h1 className="font-serif text-display text-ink">
              <span className="block">Hridul</span>
              <span className="block italic text-accent">M Anilkumar</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
              I build thoughtful software at the intersection of AI, computer vision, and full-stack engineering.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-paper-deep/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Currently open to</p>
            <p className="mt-3 text-xl font-medium text-ink">{profile.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              MCA graduate specializing in AI & machine learning, with hands-on experience building APIs, interfaces, and data-driven applications.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "React", "Next.js", "Django", "Computer Vision"].map((skill) => (
                <span key={skill} className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper-deep px-4 py-4 sm:px-5">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">{fact.label}</dt>
              <dd className="mt-1 text-lg font-medium text-ink sm:text-xl">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#work" className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 hover:bg-cyan-200">
            Explore projects <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} className="press inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-white/5 px-5 py-3 text-sm text-ink hover:border-accent/60 hover:bg-accent/5">
            Contact me
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rule-link inline-flex min-h-12 items-center justify-center gap-1 text-sm text-ink">
            GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rule-link inline-flex min-h-12 items-center justify-center gap-1 text-sm text-ink">
            LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
