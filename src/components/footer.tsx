
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MoveUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { emailDraftHref, languages, profile } from "@/data/portfolio";

const navigation = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Selected work", href: "#work" },
      { label: "Case studies", href: "#case-studies" },
      { label: "Technical skills", href: "#skills" },
      { label: "Curriculum vitae", href: "#cv" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      {
        label: "GitHub",
        href: profile.github,
        external: true,
        icon: Github,
      },
      {
        label: "LinkedIn",
        href: profile.linkedin,
        external: true,
        icon: Linkedin,
      },
      {
        label: "Email",
        href: `mailto:${profile.email}`,
        icon: Mail,
      },
      {
        label: "Phone",
        href: profile.phoneHref,
        icon: Phone,
      },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-line bg-paper-deep text-ink"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Main closing statement */}
        <div className="relative border-b border-line py-16 sm:py-20 md:py-28">

          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="size-2 rounded-full bg-accent" />
            Have something in mind?
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,8vw,6rem)] leading-[0.95] tracking-tight text-ink">
                Let's build
                <br />
                something
                <br />
                <span className="italic text-accent">meaningful.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-muted sm:text-base">
                From thoughtful digital experiences to intelligent
                applications, I'm always interested in exploring good
                ideas and turning them into something real.
              </p>
            </div>

            <a
              href={emailDraftHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="press group flex size-28 shrink-0 flex-col items-center justify-center gap-2 rounded-full border border-accent bg-accent text-paper transition-all duration-300 hover:scale-105 hover:bg-ink hover:border-ink md:size-36"
              aria-label="Start a conversation by email"
            >
              <span className="text-xs font-medium">Say hello</span>
              <MoveUpRight className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Decorative typography */}
          <div
            className="pointer-events-none absolute bottom-5 right-0 hidden select-none font-serif text-[12rem] leading-none text-ink/[0.025] lg:block"
            aria-hidden="true"
          >
            H.
          </div>
        </div>

        {/* Identity and navigation */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:gap-16">

          {/* Personal identity */}
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label="Hridul Anilkumar, back to top"
            >
              <span className="grid size-12 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-serif text-2xl text-accent transition-colors group-hover:bg-accent/20">
                H.
              </span>

              <span className="font-serif text-2xl tracking-tight">
                Hridul{" "}
                <span className="italic text-accent">M Anilkumar</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Building across software, AI and design. Interested in
              the intersection of technology, creativity and practical
              problem-solving.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {navigation.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {column.title}
              </p>

              <ul className="space-y-3">
                {column.links.map((item) => {
                  const Icon = "icon" in item ? item.icon : undefined;

                  return (
                    <li key={item.label}>
                      {item.href.startsWith("#") ? (
                        <Link
                          to="/"
                          hash={item.href.slice(1)}
                          className="group inline-flex min-h-8 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                        >
                          {item.label}
                          <ArrowDownRight className="size-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100" />
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="group inline-flex min-h-8 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                          {...("external" in item && item.external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {Icon && <Icon className="size-4" />}
                          {item.label}

                          {"external" in item && item.external && (
                            <ArrowUpRight className="size-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                          )}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom signature */}
        <div className="flex flex-col gap-5 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-muted">
            © {year} {profile.name}. Made with curiosity and care.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-xs text-muted">
              Based in Kerala, India
            </p>

            <Link
              to="/"
              hash="top"
              className="group inline-flex items-center gap-2 text-xs font-medium text-ink transition-colors hover:text-accent"
            >
              Back to top
              <span className="grid size-7 place-items-center rounded-full border border-line transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                <ArrowUpRight className="size-3.5 -rotate-45" />
              </span>
            </Link>
          </div>
        </div>

        {/* Final signature */}
        <div className="overflow-hidden pb-2">
          <p
            className="select-none whitespace-nowrap text-center font-serif text-[clamp(3.5rem,13vw,10rem)] leading-[0.85] tracking-[-0.07em] text-ink/[0.045]"
            aria-hidden="true"
          >
            Hridul M Anilkumar
          </p>
        </div>
      </div>
    </footer>
  );
}
