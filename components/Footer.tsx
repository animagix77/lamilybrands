"use client";

import { Arrow } from "./icons";
import { LamilyHandwriting } from "./LamilyHandwriting";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mark">
        <LamilyHandwriting
          width="min(35vw, 260px)"
          color="#E85A7A"
          duration={3.4}
          delay={0.1}
        />
      </div>
      <div className="footer-grid">
        <div>
          <h5>Brands</h5>
          <ul>
            <li><a href="#tubblys">Tubbly&apos;s</a></li>
            <li><a href="#blossom">True Blossom</a></li>
            <li><a href="#">Coming soon</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#story">Our story</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5>Find us</h5>
          <ul>
            <li><a href="#stockists">Stockists</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h5>Cold mail, occasionally.</h5>
          <p>New flavors, new freezers, no spam.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="you@home.com" aria-label="Email" />
            <button type="submit" aria-label="Subscribe">
              <Arrow size={14} />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-base">
        <span>© Lamily Co. 2026 · Chicago, IL</span>
        <span>Made cold, kept warm.</span>
      </div>
    </footer>
  );
}
