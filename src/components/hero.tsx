
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Orbit,
  Sparkles,
} from "lucide-react";

import { emailDraftHref, profile } from "@/data/portfolio";


// Services and expertise
const services = [
  "Business Improvement & Automation",
  "Digital Marketing & SEO",
  "Product & UI/UX Design",
  "App Development",
];

// Background stars
const stars = [
  { x: "8%", y: "12%", size: 2 },
  { x: "18%", y: "32%", size: 3 },
  { x: "31%", y: "17%", size: 2 },
  { x: "44%", y: "9%", size: 2 },
  { x: "58%", y: "24%", size: 3 },
  { x: "73%", y: "12%", size: 2 },
  { x: "88%", y: "28%", size: 3 },
  { x: "94%", y: "66%", size: 2 },
  { x: "12%", y: "76%", size: 2 },
  { x: "36%", y: "83%", size: 3 },
  { x: "67%", y: "78%", size: 2 },
  { x: "82%", y: "88%", size: 2 },
  { x: "52%", y: "55%", size: 2 },
  { x: "25%", y: "58%", size: 2 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.5,
  });

  // ----------------------------------------
  // SPACESHIP ANIMATION
  // ----------------------------------------

  const shipX = useTransform(
    progress,
    [0, 1],
    reduceMotion ? ["0vw", "0vw"] : ["-12vw", "115vw"]
  );

  const shipY = useTransform(
    progress,
    [0, 1],
    reduceMotion ? ["0vh", "0vh"] : ["48vh", "-48vh"]
  );

  const shipRotate = useTransform(
    progress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [-12, -5, 12]
  );

  const shipScale = useTransform(
    progress,
    [0, 0.45, 1],
    reduceMotion ? [0.8, 0.8, 0.8] : [0.65, 1, 1.2]
  );

  // Spaceship exits around the same time as the intro heading
  const shipOpacity = useTransform(
    progress,
    [0, 0.08, 0.42, 0.56],
    reduceMotion ? [0, 0, 0, 0] : [0.35, 1, 1, 0]
  );

  // ----------------------------------------
  // INTRODUCTION SCENE
  // ----------------------------------------

  const introOpacity = useTransform(
    progress,
    [0, 0.32, 0.53],
    reduceMotion ? [0, 0, 0] : [1, 1, 0]
  );

  const introY = useTransform(
    progress,
    [0, 0.53],
    reduceMotion ? [0, 0] : [0, -65]
  );

  // ----------------------------------------
  // PROFESSIONAL IDENTITY SCENE
  // ----------------------------------------

  const roleOpacity = useTransform(
    progress,
    [0.42, 0.68],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const roleY = useTransform(
    progress,
    [0.42, 0.68],
    reduceMotion ? [0, 0] : [35, 0]
  );

  // ----------------------------------------
  // BACKGROUND ATMOSPHERE
  // ----------------------------------------

  const atmosphereY = useTransform(
    progress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 180]
  );

  // Scroll indicator opacity
  const scrollHintOpacity = useTransform(
    progress,
    [0, 0.2, 0.35],
    [1, 0.7, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[240svh] overflow-clip bg-[#050914] text-white"
    >
      {/* STICKY CINEMATIC SCENE */}
      <div className="sticky top-0 flex h-[100svh] min-h-[900px] flex-col overflow-hidden sm:min-h-[820px] lg:min-h-[800px]">

        

        {/* BACKGROUND */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {/* Ambient gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(14,116,144,0.19),transparent_48%),radial-gradient(ellipse_at_20%_80%,rgba(79,70,229,0.13),transparent_45%)]" />

          {/* Moving grid */}
          <motion.div
            style={{ y: atmosphereY }}
            className="absolute inset-0 opacity-[0.13]"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)",
                backgroundSize: "75px 75px",
                maskImage:
                  "linear-gradient(to bottom, black, transparent 85%)",
              }}
            />
          </motion.div>

          {/* Stars */}
          {stars.map((star, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: star.x,
                top: star.y,
                width: star.size,
                height: star.size,
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.2, 0.9, 0.2],
                      scale: [0.8, 1.5, 0.8],
                    }
              }
              transition={{
                duration: 3 + (index % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          ))}

          {/* Ambient light */}
          <div className="absolute -left-40 top-1/4 size-[380px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />

          <div className="absolute -right-40 bottom-0 size-[450px] rounded-full bg-indigo-500/[0.09] blur-[140px]" />
        </div>

        {/* HEADER */}
        <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
              <Orbit className="size-5 text-cyan-300" />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide">
                HRIDUL<span className="text-cyan-300">.</span>
              </p>

              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                Digital explorer
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md sm:flex">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300">
              Available for opportunities
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Portfolio / 2026
          </span>
        </header>

        {/* SPACESHIP */}
        <div
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
          aria-hidden="true"
        >
          {/* Flight trail */}
          <motion.div
            style={{
              x: shipX,
              y: shipY,
              rotate: -12,
              opacity: shipOpacity,
            }}
            className="absolute left-0 top-0 h-[2px] w-[65vw] origin-left bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[2px]"
          />

          {/* Spaceship image */}
          <motion.img
            src="/spaceship.png"
            alt=""
            draggable={false}
            style={{
              x: shipX,
              y: shipY,
              rotate: shipRotate,
              scale: shipScale,
              opacity: shipOpacity,
              willChange: "transform",
            }}
            className="absolute left-0 top-0 w-[min(68vw,560px)] object-contain drop-shadow-[0_0_35px_rgba(34,211,238,0.38)]"
          />
        </div>

        {/* MAIN HERO CONTENT */}
        <main className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-32 pt-10 sm:px-8 lg:px-12">

          <div className="w-full max-w-4xl">

            {/* INTRODUCTION AND PROFESSIONAL IDENTITY */}
            <div className="grid">

              {/* SCENE 1: INTRODUCTION */}
              <motion.div
                style={{
                  opacity: introOpacity,
                  y: introY,
                  pointerEvents: "none",
                }}
                className="[grid-area:1/1]"
              >
                {/* Intro label */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8 inline-flex items-center gap-3"
                >
                  <Sparkles className="size-4 text-cyan-300" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                    Curiosity is my launchpad
                  </span>

                  <span className="h-px w-12 bg-cyan-300/50" />
                </motion.div>

                {/* Main heading */}
                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.12 }}
                  className="font-serif text-[clamp(3.7rem,9.5vw,8.5rem)] leading-[0.88] tracking-[-0.065em]"
                >
                  Exploring
                  <br />

                  <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-indigo-400 bg-clip-text italic text-transparent">
                    possibilities.
                  </span>
                </motion.h1>

                {/* Introduction */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-9 max-w-xl"
                >
                  <p className="text-lg font-medium text-white sm:text-2xl">
                    I'm Hridul M Anilkumar.
                  </p>

                  <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                    A developer fascinated by the intersection of technology,
                    design and intelligence. I build digital products that
                    transform ambitious ideas into real-world experiences.
                  </p>
                </motion.div>
              </motion.div>

              {/* SCENE 2: PROFESSIONAL IDENTITY */}
              <motion.div
                style={{
                  opacity: roleOpacity,
                  y: roleY,
                  pointerEvents: "none",
                }}
                className="flex flex-col justify-center [grid-area:1/1]"
              >
                <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  AI & Full-Stack
                  <br />

                  <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    Developer.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                  I build intelligent applications, AI-powered experiences
                  and scalable digital products. From modern web applications
                  to Generative AI, LLM integrations and RAG systems,
                  I turn complex ideas into practical solutions.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "AI Engineering",
                    "Full-Stack Development",
                    "LLMs & RAG",
                    "Computer Vision",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-2 text-[10px] font-medium text-cyan-100 sm:text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* SERVICES - ALWAYS VISIBLE */}
            <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-300/40 hover:text-cyan-200 sm:text-xs"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS - ALWAYS VISIBLE */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="relative z-30 mt-9 flex flex-wrap gap-3"
            >
              {/* Projects */}
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-1 hover:bg-cyan-200"
              >
                Explore my work

                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              {/* Email */}
              <a
                href={emailDraftHref()}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <Mail className="size-4" />

                Let's talk
              </a>

              {/* WhatsApp */}
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <MessageCircle className="size-4" />

                WhatsApp
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <div className="mt-7 flex items-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-200"
              >
                <Github className="size-4" />

                GitHub

                <ArrowUpRight className="size-3" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-200"
              >
                <Linkedin className="size-4" />

                LinkedIn

                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* FOOTER COORDINATES */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/10 pt-4 sm:bottom-7 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Current coordinates
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {profile.location}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Mission
              </p>

              <p className="mt-1 text-xs text-cyan-200">
                Build · Experiment · Explore
              </p>
            </div>
          </div>
        </main>

        {/* SCROLL INDICATOR */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="pointer-events-none absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-slate-500"
        >
          <span>Scroll to launch</span>

          <motion.div
            animate={
              reduceMotion ? undefined : { y: [0, 7, 0] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="size-4 text-cyan-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
