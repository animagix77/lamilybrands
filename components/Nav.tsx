"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav-logo" aria-label="Lamily, home">
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
      <ul className="nav-links">
        <li><a href="#families">Our Families</a></li>
        <li><a href="#tubblys">Tubbly&apos;s</a></li>
        <li><a href="#blossom">True Blossom</a></li>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#stockists">Stockists</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#stockists" className="nav-cta">
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
