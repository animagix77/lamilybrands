"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`}
    >
      <div className="nav-left">
        <button
          type="button"
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-hamburger-bar" />
          <span className="nav-hamburger-bar" />
          <span className="nav-hamburger-bar" />
        </button>
        <a
          href="#top"
          className="nav-logo"
          aria-label="Lamily, home"
          onClick={closeMenu}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lamily-mark"
            src="/assets/lamily-logo-ink.png"
            alt="Lamily"
            width={66}
            height={31}
            style={{ width: 66, height: "auto" }}
          />
        </a>
      </div>
      <ul className="nav-links" id="mobile-menu">
        <li><a href="#families" onClick={closeMenu}>Our Families</a></li>
        <li><a href="#tubblys" onClick={closeMenu}>Tubbly&apos;s</a></li>
        <li><a href="#blossom" onClick={closeMenu}>True Blossom</a></li>
        <li><a href="#story" onClick={closeMenu}>Our Story</a></li>
        <li><a href="#stockists" onClick={closeMenu}>Stockists</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#stockists" className="nav-cta" onClick={closeMenu}>
          <span>Find a Freezer</span>
          <Arrow size={14} rotate={-45} />
        </a>
        <a
          href="https://shopify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta nav-cta-primary"
        >
          <span>Order!</span>
          <Arrow size={14} rotate={-45} />
        </a>
      </div>
    </nav>
  );
}
