
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import type { PanInfo } from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Orbit,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import {
  emailDraftHrefForCurrentDevice,
  languages,
  profile,
} from "@/data/portfolio";

const EMAIL = profile.email;
const EMAIL_SUBJECT = "Let's build something meaningful";

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
  const prefersReducedMotion = useReducedMotion();

  const [launching, setLaunching] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Open the appropriate email experience after liftoff.
  useEffect(() => {
    if (!launching) return;

    const timer = window.setTimeout(() => {
      window.location.href = emailDraftHrefForCurrentDevice(EMAIL_SUBJECT);
    }, prefersReducedMotion ? 200 : 1400);

    return () => window.clearTimeout(timer);
  }, [launching, prefersReducedMotion]);

  const handleRocketDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    if (info.offset.y < -75 || info.velocity.y < -500) {
      setLaunching(true);
    }
  };

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-line bg-paper-deep text-ink"
    >
      {/* Ambient background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[420px] rounded-full bg-accent/[0.045] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 size-[360px] rounded-full bg-accent/[0.035] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Main closing statement */}
        <div className="relative border-b border-line py-16 sm:py-20 md:py-28">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent sm:text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for meaningful collaborations
          </div>

          <div className="mt-9 grid gap-14 md:grid-cols-[1fr_300px] md:items-center md:gap-10">

            {/* Closing message */}
            <div className="relative z-10">
              <h2 className="max-w-3xl font-serif text-[clamp(3rem,8vw,6.6rem)] leading-[0.91] tracking-[-0.045em] text-ink">
                Let's build
                <br />
                something
                <br />
                <span className="italic text-accent">
                  meaningful.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                From thoughtful digital experiences to intelligent
                applications, I'm always interested in exploring
                good ideas and turning them into something real.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-paper/50 px-4 py-2.5 text-xs text-muted">
                <Sparkles className="size-4 text-accent" />
                Have an idea? Let's make it happen.
              </div>
            </div>

            {/* Interactive rocket */}
            <div className="relative mx-auto w-full max-w-[300px]">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-accent/[0.035] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-paper/75 p-5 text-center shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-6">

                {/* Mission control header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    <Orbit className="size-3.5 text-accent" />
                    Mission control
                  </div>

                  <span
                    className={`size-2 rounded-full ${
                      launching
                        ? "bg-orange-500"
                        : "animate-pulse bg-accent"
                    }`}
                  />
                </div>

                <div className="mt-2 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted/70">
                  <span>
                    {launching
                      ? "Mission launched"
                      : isDragging
                        ? "Engine ignition"
                        : "Ready for takeoff"}
                  </span>
                </div>

                {/* Rocket environment */}
                <div className="relative mx-auto mt-2 flex h-[245px] items-center justify-center overflow-visible">

                  {/* Background orbit */}
                  <motion.div
                    animate={
                      launching
                        ? { scale: 2, opacity: 0 }
                        : { rotate: 360 }
                    }
                    transition={
                      launching
                        ? { duration: 0.8 }
                        : {
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                          }
                    }
                    className="pointer-events-none absolute size-44 rounded-full border border-dashed border-accent/15"
                  />

                  <div className="pointer-events-none absolute size-32 rounded-full border border-accent/10" />

                  {/* Stars */}
                  <Sparkles className="absolute left-5 top-8 size-4 text-accent/50" />
                  <Sparkles className="absolute right-5 top-12 size-3 text-accent/40" />
                  <Sparkles className="absolute bottom-10 left-8 size-3 text-accent/30" />
                  <Sparkles className="absolute bottom-7 right-8 size-4 text-accent/40" />

                  {/* Ambient glow */}
                  <motion.div
                    animate={
                      launching
                        ? { opacity: 0, scale: 2.5 }
                        : isDragging
                          ? { opacity: 0.9, scale: 1.8 }
                          : { opacity: 0.25, scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute size-32 rounded-full bg-accent/40 blur-3xl"
                  />

                  {/* Engine flame */}
                  {!launching && (
                    <motion.div
                      animate={{
                        scaleY: isDragging
                          ? [1, 1.8, 1]
                          : [0.7, 1.2, 0.7],
                        scaleX: isDragging
                          ? [1, 1.3, 1]
                          : [0.9, 1.1, 0.9],
                        opacity: isDragging
                          ? [0.8, 1, 0.8]
                          : [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: isDragging ? 0.2 : 0.7,
                        repeat: Infinity,
                      }}
                      className="pointer-events-none absolute bottom-6 left-1/2 z-0 h-14 w-7 -translate-x-1/2 rounded-full bg-orange-400 blur-md"
                    />
                  )}

                  {/* Smoke */}
                  {launching && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.3, y: 0 }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 2, 4],
                          y: 55,
                        }}
                        transition={{ duration: 1.2 }}
                        className="pointer-events-none absolute bottom-8 size-16 rounded-full bg-accent/30 blur-2xl"
                      />

                      <motion.div
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 2.5, 4],
                        }}
                        transition={{ duration: 1.1, delay: 0.1 }}
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
                        : { y: 0 }
                    }
                    transition={
                      launching
                        ? {
                            duration: prefersReducedMotion ? 0.2 : 1.25,
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
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: 1.08,
                            filter:
                              "drop-shadow(0 0 12px rgba(255,160,60,0.55))",
                          }
                    }
                    whileDrag={{
                      scale: 1.15,
                      filter:
                        "drop-shadow(0 0 18px rgba(255,150,50,0.95)) drop-shadow(0 0 35px rgba(255,110,30,0.5))",
                    }}
                    className={`relative z-10 h-36 w-36 select-none object-contain touch-none ${
                      launching
                        ? "pointer-events-none"
                        : "cursor-grab active:cursor-grabbing"
                    }`}
                  />
                </div>

                {/* Instructions */}
                <div className="mt-1">
                  <motion.p
                    animate={{
                      opacity: isDragging ? 0.65 : 1,
                    }}
                    className="text-sm font-semibold text-accent"
                  >
                    {launching
                      ? "Liftoff! See you soon..."
                      : isDragging
                        ? "Keep going..."
                        : "Drag the rocket upwards"}
                  </motion.p>

                  <p className="mt-2 text-[10px] leading-5 text-muted">
                    {launching
                      ? "Preparing your email..."
                      : "Grab the rocket and pull it towards the sky"}
                  </p>
                </div>

                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted/60">
                    Destination
                  </p>
                  <p className="mt-1.5 text-[11px] tracking-wide text-muted">
                    {EMAIL}
                  </p>
                </div>
              </div>

              {/* Orbital decorations */}
              <div className="pointer-events-none absolute -right-3 -top-3 -z-10 size-12 rounded-full border border-accent/20" />
              <div className="pointer-events-none absolute -bottom-3 -left-3 -z-10 size-8 rounded-full border border-accent/20" />
            </div>
          </div>

          {/* Background signature */}
          <div
            className="pointer-events-none absolute bottom-5 right-0 hidden select-none font-serif text-[12rem] leading-none text-ink/[0.025] lg:block"
            aria-hidden="true"
          >
            H.
          </div>
        </div>

        {/* Identity and navigation */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:gap-16">

          {/* Identity */}
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label="Hridul Anilkumar, back to top"
            >
              <span className="grid size-12 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-serif text-2xl text-accent transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-accent/20">
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
                  className="rounded-full border border-line bg-paper/30 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {navigation.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                {column.title}
              </p>

              <ul className="space-y-3">
                {column.links.map((item) => {
                  const Icon =
                    "icon" in item ? item.icon : undefined;

                  return (
                    <li key={item.label}>
                      {item.href.startsWith("#") ? (
                        <Link
                          to="/"
                          hash={item.href.slice(1)}
                          className="group inline-flex min-h-8 items-center gap-2 text-sm text-muted transition-colors duration-200 hover:translate-x-1 hover:text-accent"
                        >
                          {item.label}

                          <ArrowDownRight className="size-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100" />
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="group inline-flex min-h-8 items-center gap-2 text-sm text-muted transition-all duration-200 hover:translate-x-1 hover:text-accent"
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

        {/* Large typographic signature */}
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
