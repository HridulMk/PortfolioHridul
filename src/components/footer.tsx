
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { PanInfo } from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { languages, profile } from "@/data/portfolio";

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

const EMAIL = "hridul54@gmail.com";

export function Footer() {
  const year = new Date().getFullYear();

  const [launching, setLaunching] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Open Gmail after the rocket launches.
  useEffect(() => {
    if (!launching) return;

    const timer = window.setTimeout(() => {
      const gmailUrl = new URL("https://mail.google.com/mail/");

      gmailUrl.searchParams.set("view", "cm");
      gmailUrl.searchParams.set("fs", "1");
      gmailUrl.searchParams.set("to", EMAIL);
      gmailUrl.searchParams.set(
        "su",
        "Let's build something meaningful"
      );

      window.location.href = gmailUrl.toString();
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [launching]);

  // Handle rocket drag completion.
  const handleRocketDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    // Launch when dragged sufficiently upwards.
    if (info.offset.y < -75 || info.velocity.y < -500) {
      setLaunching(true);
    }
  };

  return (
    <footer
      id="footer"
      className="relative border-t border-line bg-paper-deep text-ink"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Main closing statement */}
        <div className="relative border-b border-line py-16 sm:py-20 md:py-28">

          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            Have something in mind?
          </div>

          <div className="mt-8 grid gap-12 md:grid-cols-[1fr_280px] md:items-center">

            {/* Closing message */}
            <div>
              <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,8vw,6rem)] leading-[0.95] tracking-tight text-ink">
                Let's build
                <br />
                something
                <br />
                <span className="italic text-accent">
                  meaningful.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-muted sm:text-base">
                From thoughtful digital experiences to intelligent
                applications, I'm always interested in exploring good
                ideas and turning them into something real.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                <Sparkles className="size-4 text-accent" />
                Have an idea? Let's make it happen.
              </div>
            </div>

            {/* Interactive Rocket */}
            <div className="relative mx-auto w-full max-w-[280px]">

              <div className="relative rounded-[2rem] border border-line bg-paper/60 px-5 pb-5 pt-4 text-center">

                {/* Mission status */}
                <div className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  <span
                    className={`size-1.5 rounded-full ${
                      launching
                        ? "bg-orange-500"
                        : "animate-pulse bg-accent"
                    }`}
                  />

                  {launching
                    ? "Mission launched"
                    : isDragging
                      ? "Engine ignition"
                      : "Mission control"}
                </div>

                {/* Rocket environment */}
                <div className="relative mx-auto mt-3 flex h-[240px] items-center justify-center overflow-visible">

                  {/* Decorative stars */}
                  <Sparkles className="absolute left-6 top-8 size-4 text-accent/50" />

                  <Sparkles className="absolute right-7 top-14 size-3 text-accent/40" />

                  <Sparkles className="absolute bottom-12 left-10 size-3 text-accent/30" />

                  <Sparkles className="absolute bottom-8 right-10 size-4 text-accent/40" />

                  {/* Ambient rocket glow */}
                  <motion.div
                    animate={
                      launching
                        ? {
                            opacity: 0,
                            scale: 2.5,
                          }
                        : isDragging
                          ? {
                              opacity: 0.85,
                              scale: 1.6,
                            }
                          : {
                              opacity: 0.2,
                              scale: 1,
                            }
                    }
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute size-32 rounded-full bg-accent/40 blur-3xl"
                  />

                  {/* Engine flame */}
                  {!launching && (
                    <motion.div
                      animate={{
                        scaleY: isDragging
                          ? [1, 1.6, 1]
                          : [0.8, 1.2, 0.8],
                        scaleX: isDragging
                          ? [1, 1.25, 1]
                          : 1,
                        opacity: isDragging
                          ? [0.8, 1, 0.8]
                          : 0.55,
                      }}
                      transition={{
                        duration: 0.25,
                        repeat: Infinity,
                      }}
                      className="pointer-events-none absolute bottom-7 left-1/2 z-0 h-12 w-6 -translate-x-1/2 rounded-full bg-orange-400 blur-md"
                    />
                  )}

                  {/* Rocket launch smoke */}
                  {launching && (
                    <>
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.3,
                          y: 0,
                        }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 2, 4],
                          y: 45,
                        }}
                        transition={{ duration: 1.2 }}
                        className="pointer-events-none absolute bottom-8 size-16 rounded-full bg-accent/30 blur-2xl"
                      />

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.3,
                        }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 2.5, 4],
                        }}
                        transition={{
                          duration: 1.1,
                          delay: 0.1,
                        }}
                        className="pointer-events-none absolute bottom-5 size-20 rounded-full bg-orange-400/30 blur-2xl"
                      />
                    </>
                  )}

                  {/* Draggable rocket */}
                  <motion.img
                    src="/rocket.png"
                    alt="Drag the rocket upwards to contact Hridul"
                    draggable={false}

                    drag={!launching}
                    dragDirectionLock
                    dragConstraints={{
                      top: -220,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                    dragElastic={0.12}
                    dragMomentum={false}

                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleRocketDragEnd}

                    animate={
                      launching
                        ? {
                            y: -700,
                            x: 15,
                            rotate: -12,
                            scale: 1.2,
                            opacity: 0,
                          }
                        : {
                            y: 0,
                          }
                    }

                    transition={
                      launching
                        ? {
                            duration: 1.25,
                            ease: [0.16, 1, 0.3, 1],
                          }
                        : {
                            y: {
                              type: "spring",
                              stiffness: 250,
                              damping: 20,
                            },
                          }
                    }

                    whileHover={{
                      scale: 1.08,
                      filter:
                        "drop-shadow(0 0 12px rgba(255,160,60,0.55))",
                    }}

                    whileDrag={{
                      scale: 1.15,
                      filter:
                        "drop-shadow(0 0 18px rgba(255,150,50,0.95)) drop-shadow(0 0 35px rgba(255,110,30,0.5))",
                    }}

                    className={`relative z-10 h-36 w-36 select-none object-contain ${
                      launching
                        ? "pointer-events-none"
                        : "cursor-grab active:cursor-grabbing"
                    }`}
                  />
                </div>

                {/* Rocket instructions */}
                <div className="mt-2">
                  <motion.p
                    animate={{
                      opacity: isDragging ? 0.6 : 1,
                    }}
                    className="text-sm font-semibold text-accent"
                  >
                    {launching
                      ? "Liftoff! See you in Gmail..."
                      : isDragging
                        ? "Keep going..."
                        : "Drag the rocket upwards"}
                  </motion.p>

                  <p className="mt-1 text-[10px] text-muted">
                    Grab the rocket and pull it towards the sky
                  </p>
                </div>

                {/* Email destination */}
                <p className="mt-4 text-[10px] tracking-wider text-muted">
                  DESTINATION: {EMAIL}
                </p>
              </div>

              {/* Decorative orbital circles */}
              <div className="pointer-events-none absolute -right-3 -top-3 -z-0 size-12 rounded-full border border-accent/20" />

              <div className="pointer-events-none absolute -bottom-3 -left-3 -z-0 size-8 rounded-full border border-accent/20" />
            </div>
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
                <span className="italic text-accent">
                  M Anilkumar
                </span>
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
