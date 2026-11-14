import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#cv", id: "cv", label: "CV" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const nodes = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => node !== null);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.25, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/85 backdrop-blur-xl">
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 md:px-8">
        <a href="#top" className="group inline-flex items-center gap-2 font-semibold tracking-tight text-ink">
          <span className="grid size-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-sm text-accent transition-colors group-hover:bg-accent/20">H.</span>
          <span><span className="block text-sm leading-tight">{profile.name}</span><span className="hidden text-[10px] font-normal uppercase tracking-[0.18em] text-muted sm:block">AI & Full-stack Developer</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.id} href={link.href} aria-current={active === link.id ? "location" : undefined} className={`inline-flex h-10 items-center rounded-lg px-3 text-sm transition-colors hover:text-accent ${active === link.id ? "bg-accent/10 text-accent" : "text-muted"}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="press ml-2 inline-flex h-10 items-center justify-center rounded-lg bg-accent px-4 text-sm font-semibold text-slate-950 hover:bg-cyan-200">Let’s talk</a>
        </nav>

        <button type="button" className="press relative grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-white/5 text-ink hover:border-accent/60 md:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>
          <Menu className={`icon-swap size-5 ${open ? "icon-off" : "icon-on"}`} aria-hidden="true" />
          <X className={`icon-swap absolute size-5 ${open ? "icon-on" : "icon-off"}`} aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-nav" className={`drawer md:hidden ${open ? "open" : ""}`} inert={open ? undefined : true}>
        <div className="drawer-inner">
          <nav className="flex flex-col border-t border-line px-5 py-2 sm:px-6" aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link.id} href={link.href} aria-current={active === link.id ? "location" : undefined} className="inline-flex min-h-12 items-center border-b border-line/70 text-base text-ink transition-colors hover:text-accent last:border-b-0" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
