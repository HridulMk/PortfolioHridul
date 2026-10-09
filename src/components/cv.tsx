import { Download } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const contents = [
  { label: "Profile & skills", detail: "Python, React, Next.js, Django, machine learning" },
  { label: "Experience", detail: "Adz4Needz, Progressive Cybernetics, Inmakes Infotech" },
  { label: "Projects", detail: "Oction Mart, ParkAI, dropout risk, storefront" },
  { label: "Education & research", detail: "MCA 8.35 · ICAISM paper, April 2025" },
];

const href = "/Hridul-M-Anilkumar-CV.pdf";

export function Cv() {
  return (
    <section id="cv" className="anchor border-t border-line bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <SectionHeading
          index="04"
          label="CV"
          title="The same record, as a PDF."
          lede="Two pages: profile, skills, internships, projects, education, and the ICAISM paper. It is the file behind this site."
        />

        <div className="border border-line bg-paper p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">File</p>
              <p className="mt-2 font-serif text-2xl text-ink">Hridul M Anilkumar</p>
              <p className="mt-1 text-sm text-muted">PDF · 2 pages · 128 KB</p>
            </div>
            <p className="font-serif text-4xl leading-none text-ink/20" aria-hidden="true">
              CV
            </p>
          </div>

          <ol className="mt-2">
            {contents.map((item, index) => (
              <li
                key={item.label}
                className="flex gap-4 border-b border-line py-3 last:border-b-0"
              >
                <span className="w-6 shrink-0 text-sm text-accent">0{index + 1}</span>
                <span>
                  <span className="block text-ink">{item.label}</span>
                  <span className="mt-0.5 block text-sm text-muted">{item.detail}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={href}
              download="Hridul-M-Anilkumar-CV.pdf"
              className="press inline-flex h-12 items-center justify-center gap-2 bg-ink px-5 text-sm text-paper hover:bg-accent"
            >
              <Download className="size-4" aria-hidden="true" />
              Download PDF
            </a>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-12 items-center justify-center border border-ink px-5 text-sm text-ink hover:bg-ink hover:text-paper"
            >
              Open in a tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
