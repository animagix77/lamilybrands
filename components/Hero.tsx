import { Arrow } from "./icons";
import { LamilyHandwriting } from "./LamilyHandwriting";

export function Hero() {
  return (
    <header className="hero hero-bold" id="top">
      <div className="hero-bold-top">
        <span className="meta-tag">Deluxe Frozen Goods</span>
        <span className="meta-tag">Since 2026</span>
      </div>
      <div className="hero-bold-mark">
        <LamilyHandwriting
          width="min(78vw, 1100px)"
          color="#E85A7A"
          duration={2.8}
          delay={0.3}
        />
      </div>
      <div className="hero-bold-bottom">
        <h1 className="hero-bold-headline">
          Good <em>desserts.</em>
          <br />
          Done <em>right.</em>
        </h1>
        <div className="hero-bold-side">
          <p>
            This isn&apos;t your everyday dessert.
            <br />
            We focus on texture, detail and the kind of indulgence you actually
            notice.
          </p>
          <a href="#families" className="btn btn-primary">
            Meet the family <Arrow size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
