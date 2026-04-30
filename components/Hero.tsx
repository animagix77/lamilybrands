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
          One <span className="ink-accent">family.</span>
          <br />
          Two flavors of <em>obsession.</em>
        </h1>
        <div className="hero-bold-side">
          <p>
            Tubbly&apos;s makes deluxe ice cream bars for people who treat dessert
            like a small ceremony. True Blossom makes frozen dairy desserts so
            beautiful you&apos;ll forget to eat them. Both are us.
          </p>
          <a href="#families" className="btn btn-primary">
            Meet the family <Arrow size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
