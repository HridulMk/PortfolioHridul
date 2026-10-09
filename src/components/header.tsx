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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="font-serif text-xl leading-none text-ink">
          <span className="md:hidden">{profile.short}</span>
          <span className="hidden md:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
              className={`inline-flex h-11 items-center px-3 text-sm ${
                active === link.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <span className={active === link.id ? "border-b border-accent pb-0.5" : ""}>
                {link.label}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="press ml-2 inline-flex h-11 items-center bg-ink px-4 text-sm text-paper hover:bg-accent"
          >
            Write
          </a>
        </nav>

        <button
          type="button"
          className="press relative grid size-11 place-items-center border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <Menu
            className={`icon-swap size-5 ${open ? "icon-off" : "icon-on"}`}
            aria-hidden="true"
          />
          <X
            className={`icon-swap absolute size-5 ${open ? "icon-on" : "icon-off"}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div id="mobile-nav" className={`drawer md:hidden ${open ? "open" : ""}`} inert={open ? undefined : true}>
        <div className="drawer-inner">
          <nav className="flex flex-col border-t border-line px-5 py-2" aria-label="Sections">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="inline-flex h-12 items-center border-b border-line text-base text-ink last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
