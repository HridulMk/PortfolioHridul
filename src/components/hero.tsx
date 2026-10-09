import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const facts = [
  { label: "Study", value: "MCA · AI & ML" },
  { label: "CGPA", value: "8.35" },
  { label: "Base", value: "Kerala" },
];

export function Hero() {
  return (
    <section id="top" className="anchor">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-widest text-muted">
          <p>Folio 01 — Portfolio</p>
          <p>{profile.location}</p>
        </div>

        <h1 className="mt-8 font-serif text-display text-ink">
          <span className="block">Hridul</span>
          <span className="block italic">
            <span className="not-italic text-accent">M </span>Anilkumar
          </span>
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-ink">
            MCA graduate in artificial intelligence and machine learning. I build full-stack
            products in Python, React, Next.js, and Django — and I stay with a problem until the
            data and the interface agree.
          </p>
          <p className="text-sm leading-relaxed text-muted md:text-right">
            Open to roles in full-stack development and machine learning.
            <span className="mt-2 block text-ink">{profile.role}</span>
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-3 border-y border-line">
          {facts.map((fact) => (
            <div key={fact.label} className="px-3 py-4 first:pl-0 last:pr-0 md:px-6">
              <dt className="text-xs uppercase tracking-widest text-muted">{fact.label}</dt>
              <dd className="mt-1 font-serif text-lg text-ink md:text-2xl">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#work"
            className="press inline-flex h-12 items-center justify-center bg-ink px-5 text-sm text-paper hover:bg-accent"
          >
            See the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="press inline-flex h-12 items-center justify-center border border-ink px-5 text-sm text-ink hover:bg-ink hover:text-paper"
          >
            Email Hridul
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rule-link inline-flex h-12 items-center gap-1 text-sm text-ink"
          >
            GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rule-link inline-flex h-12 items-center gap-1 text-sm text-ink"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
