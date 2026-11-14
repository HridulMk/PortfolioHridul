import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { emailDraftHref, profile } from "@/data/portfolio";

const facts = [
  { label: "Focus", value: "AI · Full-stack" },
  { label: "CGPA", value: "8.35" },
  { label: "Base", value: "Kerala, India" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "CRM Systems",
  "AI Integrations",
  "Chatbots",
  "Mobile Apps",
];

export function Hero() {
  return (
    <section id="top" className="anchor relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-cyan-400/10 blur-3xl md:size-96" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-4 sm:px-6 md:px-8 md:pb-24 md:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          <p className="inline-flex items-center gap-2"><span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden="true" /> Portfolio / 2026</p>
          <p>{profile.location}</p>
        </div>

        <div className="mt-5 grid gap-10 md:mt-8 md:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)] md:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium tracking-wide text-accent">
              <Sparkles className="size-3.5" aria-hidden="true" /> AI · Software · Creative problem-solving
            </p>
            <h1 className="font-serif text-display text-ink">
              <span className="block">Hridul</span>
              <span className="block italic text-accent">M Anilkumar</span>
            </h1>
            {/* <h2 className="mt-7 max-w-2xl text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              Creating. Innovating. Building what matters.
            </h2> */}
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              From beautiful websites to intelligent applications, I transform ideas into meaningful digital experiences.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services">
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-paper-deep/80 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-6">
            <div className="mb-5 flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src="/Hridul.jpeg"
                  alt="Portrait of Hridul M Anilkumar"
                  className="size-20 rounded-full border border-accent/50 object-cover shadow-lg shadow-cyan-950/30"
                />
                <span className="absolute bottom-1 right-1 flex size-4 items-center justify-center" role="img" aria-label="Live">
                  <span className="absolute size-full animate-ping rounded-full bg-green-400/70 motion-reduce:animate-none" />
                  <span className="relative size-2.5 rounded-full border border-paper-deep bg-green-400" />
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Currently open to</p>
                <p className="mt-2 text-xl font-medium text-ink">{profile.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              MCA graduate specializing in AI & machine learning, ready to help bring your next digital product to life.
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
          <a href={emailDraftHref()} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white/5 px-5 py-3 text-sm text-ink hover:border-accent/60 hover:bg-accent/5">
            <Mail className="size-4" aria-hidden="true" /> Email me
          </a>
          <a href={profile.whatsappHref} target="_blank" rel="noopener noreferrer" className="press inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white/5 px-5 py-3 text-sm text-ink hover:border-accent/60 hover:bg-accent/5">
            <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp me
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
