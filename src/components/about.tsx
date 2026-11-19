
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import {
  ArrowUpRight,
  Atom,
  BrainCircuit,
  GraduationCap,
  Languages,
  Microscope,
  Orbit,
  Sparkles,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

import {
  education,
  experience,
  languages,
  study,
} from "@/data/portfolio";

const journey = [
  {
    number: "01",
    title: "Understanding the physical world",
    description:
      "My journey started with Physics — learning to question, observe, understand patterns and approach problems analytically.",
    icon: Atom,
  },
  {
    number: "02",
    title: "Building with technology",
    description:
      "That curiosity led me into software development, where I began turning ideas into applications using Python and full-stack technologies.",
    icon: Microscope,
  },
  {
    number: "03",
    title: "Exploring intelligent systems",
    description:
      "Today, I work across AI, machine learning and generative AI, building products that combine engineering with practical problem-solving.",
    icon: BrainCircuit,
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-70px",
  });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={
        reduceMotion ? false : { opacity: 0, y: 28 }
      }
      animate={
        isInView || reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 28 }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="anchor relative overflow-hidden border-t border-line bg-paper"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute right-0 top-20 -z-0 size-[350px] rounded-full bg-accent/[0.035] blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">

        {/* Section introduction */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Orbit className="size-4" />
              01 / The person behind the work
            </div>

            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              A little about my journey
            </span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
              A curious mind.
              <br />
              <span className="italic text-accent">
                An engineer at heart.
              </span>
            </h2>

            <p className="max-w-lg text-sm leading-8 text-muted sm:text-base">
              From studying the laws of Physics to building intelligent
              digital products, my journey has always been driven by
              curiosity. I enjoy understanding how things work — and
              finding ways to make them work better.
            </p>
          </div>
        </Reveal>

        {/* Journey cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} delay={index * 0.12}>
                <article className="group h-full rounded-2xl border border-line bg-paper/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/[0.04] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-accent/50">
                      {item.number}
                    </span>

                    <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-paper-deep text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="mt-8 font-serif text-xl leading-snug text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Education and experience */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Education */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-accent" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Academic background
                </h3>
              </div>

              <div className="mt-7 border-t border-line">
                {education.map((item, index) => (
                  <div
                    key={item.credential}
                    className="border-b border-line py-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-serif text-3xl text-accent">
                        {item.year}
                      </p>

                      <span className="rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-wider text-muted">
                        {item.detail}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-semibold text-ink">
                      {item.credential}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.school}
                    </p>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-10 rounded-2xl border border-line bg-paper-deep/60 p-6">
                <div className="flex items-center gap-3">
                  <Languages className="size-5 text-accent" />
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Languages
                  </h4>
                </div>

                <p className="mt-4 font-serif text-xl leading-relaxed text-ink">
                  {languages.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-accent" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Professional journey
                </h3>
              </div>

              <div className="relative mt-7 border-t border-line">
                {experience.map((job, index) => (
                  <article
                    key={job.slug}
                    className="group relative border-b border-line py-7 pl-5 transition-colors hover:bg-paper-deep/30 sm:pl-7"
                  >
                    {/* Timeline marker */}
                    <span className="absolute left-0 top-9 size-2 rounded-full border-2 border-accent bg-paper ring-4 ring-accent/10" />

                    <Link
                      to="/experience/$slug"
                      params={{ slug: job.slug }}
                      className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={`View ${job.role} experience at ${job.org}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                            Experience {String(index + 1).padStart(2, "0")}
                          </span>

                          <h4 className="mt-2 font-serif text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
                            {job.role}
                          </h4>

                          <p className="mt-2 text-sm text-muted">
                            {job.org} · {job.place}
                          </p>
                        </div>

                        <span className="text-xs text-muted">
                          {job.dates}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-3">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-7 text-muted"
                          >
                            <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-accent/70" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-accent">
                        Explore this experience
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Current interests / learning */}
        <Reveal>
          <div className="mt-20 rounded-3xl border border-line bg-paper-deep/50 p-7 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Beyond the current build
                </span>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  Always learning.
                  <br />
                  Always exploring.
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Technology never stands still. Neither does my curiosity.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {study.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-line bg-paper p-4 text-sm leading-6 text-ink transition-colors hover:border-accent/40"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Closing statement */}
        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-8">
            <p className="max-w-xl font-serif text-xl italic leading-relaxed text-ink sm:text-2xl">
              "The best way to predict what is possible is to start building it."
            </p>

            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-ink"
            >
              Discover what I've built
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
