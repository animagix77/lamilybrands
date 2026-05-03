"use client";

import { useState } from "react";
import { Arrow } from "./icons";
import { LamilyHandwriting } from "./LamilyHandwriting";

type FormStatus = "idle" | "sending" | "ok" | "error";

export function Footer() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", { method: "POST", body: data });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus("ok");
        setMessage("Thanks — we'll be in touch.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Try again?");
      }
    } catch {
      setStatus("error");
      setMessage("Network hiccup — try again in a moment?");
    }
  }

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
            <li><a href="#">Contact</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h5>Cold mail, occasionally.</h5>
          <p>New flavors, new freezers, no spam.</p>
          <form className="newsletter-form" onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="you@home.com"
              aria-label="Email"
              required
              disabled={status === "sending"}
            />
            <button
              type="submit"
              aria-label="Subscribe"
              disabled={status === "sending"}
            >
              <Arrow size={14} />
            </button>
          </form>
          {message ? (
            <p className={`newsletter-status newsletter-status-${status}`}>
              {message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="footer-base">
        <span>© Lamily Co. 2026 · Chicago, IL</span>
        <span>Made cold, kept warm.</span>
      </div>
    </footer>
  );
}
