/* Lamily Brand Site — main app */

const { useState, useEffect, useRef } = React;

// ────────────────────────────────────────────────────────────────────────────
// Reusable bits
// ────────────────────────────────────────────────────────────────────────────

function ScriptLogo({ size = 1, color = "currentColor", className = "" }) {
  // Pick a pre-tinted asset based on requested color. Mask filters are flaky in
  // some embeds so we ship recolored PNGs and select between them.
  const colorMap = {
    "var(--ink)": "assets/lamily-logo-ink.png",
    "var(--blossom-pink)": "assets/lamily-logo-pink.png",
    "white": "assets/lamily-logo-white.png",
    "#fff": "assets/lamily-logo-white.png",
    "#FFFFFF": "assets/lamily-logo-white.png",
    "var(--cream)": "assets/lamily-logo-white.png",
  };
  const src = colorMap[color] || "assets/lamily-logo-ink.png";
  return (
    <img
      className={"lamily-mark " + className}
      src={src}
      style={{
        display: "inline-block",
        width: 120 * size + "px",
        height: "auto",
        verticalAlign: "middle",
      }}
      alt="Lamily"
    />
  );
}

function Marquee({ children, speed = 60, reverse = false }) {
  return (
    <div className="marquee" aria-hidden>
      <div
        className="marquee-track"
        style={{
          animationDuration: speed + "s",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

function Star({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 0 C12 8 12 8 24 12 C12 16 12 16 12 24 C12 16 12 16 0 12 C12 8 12 8 12 0 Z"
        fill={color}
      />
    </svg>
  );
}

function Arrow({ rotate = 0, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)`, transition: "transform 0.3s" }}
      aria-hidden
    >
      <path
        d="M5 12 L19 12 M13 6 L19 12 L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Nav
// ────────────────────────────────────────────────────────────────────────────

function Nav({ tweaks }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"nav " + (scrolled ? "is-scrolled" : "")}>
      <a href="#top" className="nav-logo">
        <ScriptLogo size={0.55} color="var(--ink)" />
      </a>
      <ul className="nav-links">
        <li><a href="#families">Our Families</a></li>
        <li><a href="#tubblys">Tubbly's</a></li>
        <li><a href="#blossom">True Blossom</a></li>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#stockists">Stockists</a></li>
      </ul>
      <a href="#shop" className="nav-cta">
        <span>Find a Freezer</span>
        <Arrow size={14} rotate={-45} />
      </a>
    </nav>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Hero
// ────────────────────────────────────────────────────────────────────────────

function Hero({ tweaks }) {
  const variant = tweaks.heroVariant;

  if (variant === "editorial") {
    return (
      <header className="hero hero-editorial" id="top">
        <div className="hero-meta">
          <span className="meta-tag">EST. 2019 · CHICAGO</span>
          <span className="meta-tag">FROZEN DAIRY · DELUXE</span>
        </div>
        <div className="hero-mark">
          <ScriptLogo size={3.2} color="var(--ink)" />
        </div>
        <h1 className="hero-headline">
          A house of <em>cold,</em> small joys.
        </h1>
        <div className="hero-foot">
          <p className="hero-blurb">
            Lamily is the parent of Tubbly's deluxe ice cream bars and True
            Blossom frozen dairy desserts. Two distinct love languages, one
            very serious devotion to the freezer aisle.
          </p>
          <div className="hero-arrow"><Arrow rotate={90} size={20} /> scroll</div>
        </div>
      </header>
    );
  }

  if (variant === "photo") {
    return (
      <header className="hero hero-photo" id="top">
        <div className="hero-photo-grid">
          <div className="hp-text">
            <div className="hp-eyebrow">
              <Star size={10} color="var(--accent)" />
              <span>The Lamily Co.</span>
              <Star size={10} color="var(--accent)" />
            </div>
            <h1 className="hp-headline">
              Welcome to the <ScriptLogo size={1.6} color="var(--ink)" /> family.
            </h1>
            <p className="hp-blurb">
              Two beloved sub-brands. One house obsessed with the
              quiet ceremony of opening a freezer at 10pm.
            </p>
            <div className="hp-cta-row">
              <a href="#tubblys" className="btn btn-primary">Meet Tubbly's</a>
              <a href="#blossom" className="btn btn-ghost">Meet True Blossom</a>
            </div>
          </div>
          <div className="hp-images">
            <div className="hp-image hp-image-1">
              <img src="assets/tubblys-product.jpeg" alt="Tubbly's Dubai Chocolate" />
              <span className="hp-tag" style={{ background: "var(--tubblys-yellow)", color: "var(--tubblys-brown)" }}>Tubbly's</span>
            </div>
            <div className="hp-image hp-image-2">
              <img src="assets/blossom-dragonfruit-single.jpeg" alt="True Blossom Crimson Dragon Fruit" />
              <span className="hp-tag" style={{ background: "var(--blossom-pink)", color: "white" }}>True Blossom</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // bold (default)
  return (
    <header className="hero hero-bold" id="top">
      <div className="hero-bold-top">
        <span className="meta-tag">DELUXE FROZEN GOODS</span>
        <span className="meta-tag">SINCE 2026</span>
      </div>
      <div className="hero-bold-mark">
        <LamilyHandwriting
          width="min(78vw, 1100px)"
          color="#E85A7A"
          duration={2.8}
          delay={0.3}
          className="hero-wordmark-anim"
        />
      </div>
      <div className="hero-bold-bottom">
        <h1 className="hero-bold-headline">
          One <span className="ink-accent">family.</span><br />
          Two flavors of <em>obsession.</em>
        </h1>
        <div className="hero-bold-side">
          <p>
            Tubbly's makes deluxe ice cream bars for people who treat dessert
            like a small ceremony. True Blossom makes frozen dairy desserts so
            beautiful you'll forget to eat them. Both are us.
          </p>
          <a href="#families" className="btn btn-primary">
            Meet the family <Arrow size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Nav, Hero, ScriptLogo, Marquee, Star, Arrow });
