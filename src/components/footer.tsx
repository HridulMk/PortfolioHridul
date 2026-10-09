import { ArrowUpRight } from "lucide-react";
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
    title: "Elsewhere",
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
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="font-serif text-4xl leading-none md:text-5xl">
              Hridul
              <span className="italic"> Anilkumar</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-line">
              Full-stack software and machine learning, from Kerala. {languages.join(" · ")}.
            </p>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-xs font-medium uppercase tracking-widest text-line">{column.title}</p>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rule-link inline-flex h-11 items-center gap-1 text-sm text-paper"
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

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/20 pt-6 text-sm text-line sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="rule-link inline-flex h-11 items-center text-paper">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
