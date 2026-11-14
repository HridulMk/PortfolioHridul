import { ArrowUpRight, Mail } from "lucide-react";
import { languages, profile } from "@/data/portfolio";

const columns = [
  {
    title: "Visit",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Skills", href: "#skills" },
      { label: "CV", href: "#cv" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: profile.github, external: true },
      { label: "LinkedIn", href: profile.linkedin, external: true },
      { label: "Email", href: `mailto:${profile.email}` },
      { label: "Phone", href: profile.phoneHref },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-accent/20 text-ink">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.9fr)] sm:gap-x-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div className="col-span-2 min-w-0 sm:col-span-1">
            <a href="#top" className="group inline-flex items-center gap-3 rounded-lg text-ink focus-visible:outline-offset-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/35 bg-accent/10 font-serif text-xl text-accent transition-colors group-hover:bg-accent/20">
                H.
              </span>
              <span className="font-serif text-[clamp(1.75rem,7vw,2.5rem)] leading-none tracking-tight">
                Hridul <span className="italic text-accent">Anilkumar</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Full-stack software and machine learning, from Kerala. {languages.join(" · ")}.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="press mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 text-sm font-medium text-accent hover:border-accent/60 hover:bg-accent/15"
            >
              <Mail className="size-4" aria-hidden="true" />
              Let’s talk
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{column.title}</p>
              <ul className="mt-3 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rule-link inline-flex min-h-10 items-center gap-1 text-sm text-ink/80"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                      {"external" in link && link.external ? (
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a href="#top" className="rule-link inline-flex min-h-10 items-center text-sm text-ink">
            Back to top
            <ArrowUpRight className="ml-1 size-4 -rotate-45" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
