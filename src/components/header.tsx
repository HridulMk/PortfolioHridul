
import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  emailDraftHref,
  emailDraftHrefForCurrentDevice,
  profile,
} from "@/data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "case-studies", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Track active section
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

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: [0, 0.25, 0.6],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  // Close menu with Escape
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Cursor-following glow
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <header className="floating-header">
      <div
        className={`nav-glass ${open ? "nav-menu-open" : ""}`}
        onPointerMove={handlePointerMove}
      >
        {/* Cursor-following light */}
        <div className="nav-glow" aria-hidden="true" />

        {/* Glass reflections */}
        <div className="nav-fog" aria-hidden="true" />

        <div className="nav-content">
          {/* Brand */}
          <Link
            to="/"
            hash="top"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <div className="brand-image-wrapper">
              <img
                src="/Hridul.jpeg"
                alt="Hridul M Anilkumar"
                className="brand-image"
              />
            </div>

            <span className="brand-text">
              <span className="brand-name">{profile.name}</span>
              <span className="brand-role">
                Full-Stack &amp; AI Developer
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.id}
                to="/"
                hash={link.id}
                aria-current={
                  active === link.id ? "location" : undefined
                }
                className={`nav-link ${
                  active === link.id ? "active" : ""
                }`}
              >
                <span>{link.label}</span>
              </Link>
            ))}

            <a
              href={emailDraftHref()}
              onClick={(event) => {
                event.preventDefault();
                window.location.href = emailDraftHrefForCurrentDevice();
              }}
              className="talk-button"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={15} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`mobile-toggle ${
              open ? "mobile-toggle-open" : ""
            }`}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <Menu
              className={`menu-icon ${open ? "icon-hidden" : ""}`}
              size={20}
              aria-hidden="true"
            />
            <X
              className={`close-icon ${open ? "icon-visible" : ""}`}
              size={20}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-nav"
          className={`mobile-nav ${
            open ? "mobile-nav-open" : ""
          }`}
          inert={open ? undefined : true}
        >
          <nav
            className="mobile-nav-inner"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <Link
                key={link.id}
                to="/"
                hash={link.id}
                aria-current={
                  active === link.id ? "location" : undefined
                }
                className={`mobile-link ${
                  active === link.id ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} />
              </Link>
            ))}

            <a
              href={emailDraftHref()}
              onClick={(event) => {
                event.preventDefault();
                window.location.href = emailDraftHrefForCurrentDevice();
              }}
              className="mobile-talk"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
