import { Arrow } from "./icons";

export function Tubblys() {
  return (
    <section id="tubblys" className="brand-section tubblys-section">
      <div className="brand-section-mast">
        <div className="brand-mast-left">
          <span className="brand-mast-eyebrow">Sub-brand 01</span>
          <h2 className="brand-mast-name">Tubbly&apos;s</h2>
          <p className="brand-mast-tag">
            Deluxe ice cream bars, dipped on purpose.
          </p>
        </div>
        <div className="brand-mast-right">
          <div className="brand-mast-blob">Tubbly&apos;s</div>
        </div>
      </div>

      <div className="tubblys-feature">
        <div className="tubblys-feature-img">
          <video
            src="/assets/tubblys-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="tubblys-feature-text">
          <span className="feature-eyebrow">Hero of the line</span>
          <h3 className="feature-headline">The Dubai Chocolate Bar.</h3>
          <p className="feature-body">
            A bar that took six months and approximately a thousand pistachios
            to get right. Crackling dark chocolate shell. Pistachio cream and
            crisp kataifi inside. A drizzle on top because we couldn&apos;t help it.
          </p>
          <a href="#" className="btn btn-tubblys">
            See full nutrition <Arrow size={14} />
          </a>
        </div>
      </div>

      <div className="tubblys-strip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/tubblys-lineup.jpeg" alt="Tubbly's lineup" />
      </div>
    </section>
  );
}
