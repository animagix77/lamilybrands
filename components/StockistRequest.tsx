"use client";

import { useState } from "react";
import { Arrow } from "./icons";

type Status = "idle" | "sending" | "ok" | "error";

export function StockistRequest() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/request-stockist", {
        method: "POST",
        body: data,
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && json.ok) {
        setStatus("ok");
        const storeName = String(data.get("storeName") || "").trim();
        setMessage(
          storeName
            ? `Thanks — we'll reach out about ${storeName}.`
            : "Thanks — we got your request.",
        );
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
    <div className={`stockist-request ${open ? "is-open" : ""}`}>
      <div className="stockist-cta">
        <p>Don&apos;t see your local market?</p>
        {!open ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setOpen(true)}
          >
            Request Lamily near you <Arrow size={14} />
          </button>
        ) : (
          <button
            type="button"
            className="stockist-request-cancel"
            onClick={() => {
              setOpen(false);
              setStatus("idle");
              setMessage("");
            }}
          >
            Cancel
          </button>
        )}
      </div>

      {open ? (
        <form className="stockist-request-form" onSubmit={onSubmit}>
          <div className="stockist-request-grid">
            <label className="field">
              <span>Where would you like to find us?</span>
              <input
                type="text"
                name="storeName"
                required
                placeholder="e.g. Whole Foods Brooklyn"
                disabled={status === "sending" || status === "ok"}
              />
            </label>
            <label className="field">
              <span>City &amp; state, or zip</span>
              <input
                type="text"
                name="location"
                required
                placeholder="Brooklyn, NY"
                disabled={status === "sending" || status === "ok"}
              />
            </label>
            <label className="field">
              <span>Your email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@home.com"
                disabled={status === "sending" || status === "ok"}
              />
            </label>
            <label className="field">
              <span>First name (optional)</span>
              <input
                type="text"
                name="firstName"
                placeholder="Mei"
                disabled={status === "sending" || status === "ok"}
              />
            </label>
          </div>

          <div className="stockist-request-foot">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending" || status === "ok"}
            >
              {status === "sending" ? "Sending…" : "Send request"}
              {status !== "sending" && status !== "ok" ? (
                <Arrow size={14} />
              ) : null}
            </button>
            {message ? (
              <p
                className={`stockist-request-status stockist-request-status-${status}`}
              >
                {message}
              </p>
            ) : null}
          </div>
        </form>
      ) : null}
    </div>
  );
}
