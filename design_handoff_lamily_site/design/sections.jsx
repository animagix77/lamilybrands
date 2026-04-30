/* Lamily Brand Site — section components */

const { useState: useStateS, useEffect: useEffectS } = React;

// ────────────────────────────────────────────────────────────────────────────
// Marquee tagline strip
// ────────────────────────────────────────────────────────────────────────────

function TaglineStrip() {
  const items = [
    "Made for slow evenings",
    "Deluxe by hand",
    "Small batch, big feelings",
    "Two brands, one freezer",
    "Cold-pressed romance",
    "From our family to yours",
  ];
  return (
    <div className="tagline-strip">
      <div className="tagline-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="tagline-item">
            <Star size={12} color="var(--accent)" />
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Families intro — two brand cards side by side
// ────────────────────────────────────────────────────────────────────────────

function Families() {
  return (
    <section id="families" className="families">
      <div className="section-head">
        <span className="section-eyebrow">01 — Our Families</span>
        <h2 className="section-title">
          Two sub-brands. <em>Distinct personalities.</em> Same fridge.
        </h2>
        <p className="section-lede">
          We don't make one ice cream and stretch it across a wall of pints.
          We make two specific things, very carefully, for two specific moods.
        </p>
      </div>

      <div className="family-cards">
        <a href="#tubblys" className="family-card family-tubblys">
          <div className="family-card-tag">
            <Star size={10} color="var(--tubblys-yellow)" />
            <span>BRAND ONE</span>
          </div>
          <div className="family-card-image">
            <img src="assets/tubblys-product.jpeg" alt="Tubbly's Dubai Chocolate" />
          </div>
          <div className="family-card-body">
            <h3 className="family-card-name">Tubbly's</h3>
            <p className="family-card-tag-line">Deluxe ice cream bars</p>
            <p className="family-card-blurb">
              Thick-shelled, generously dipped, occasionally outrageous.
              For when you want one perfect thing on a stick.
            </p>
            <span className="family-card-link">
              Visit Tubbly's <Arrow size={14} rotate={-45} />
            </span>
          </div>
        </a>

        <a href="#blossom" className="family-card family-blossom">
          <div className="family-card-tag">
            <Star size={10} color="var(--blossom-pink)" />
            <span>BRAND TWO</span>
          </div>
          <div className="family-card-image">
            <img src="assets/blossom-dragonfruit-box.jpeg" alt="True Blossom Crimson Dragon Fruit" />
          </div>
          <div className="family-card-body">
            <h3 className="family-card-name">True Blossom</h3>
            <p className="family-card-tag-line">Frozen dairy desserts</p>
            <p className="family-card-blurb">
              Sculpted, flower-shaped, almost too pretty to bite.
              Fruit-forward, gently dairy, completely a moment.
            </p>
            <span className="family-card-link">
              Visit True Blossom <Arrow size={14} rotate={-45} />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Tubbly's section
// ────────────────────────────────────────────────────────────────────────────

function Tubblys() {
  const flavors = [
    { name: "Dubai Chocolate", note: "Pistachio · kataifi · dark cacao", color: "#D4E04A" },
    { name: "Burnt Honey", note: "Caramelized clover · sea salt", color: "#E8B84A" },
    { name: "Strawberry Negroni", note: "Bitter · bright · adults only-ish", color: "#E85A5A" },
    { name: "Espresso Crunch", note: "Cold brew · cocoa nibs", color: "#6B4423" },
  ];

  return (
    <section id="tubblys" className="brand-section tubblys-section">
      <div className="brand-section-mast">
        <div className="brand-mast-left">
          <span className="brand-mast-eyebrow">Sub-brand 01</span>
          <h2 className="brand-mast-name">Tubbly's</h2>
          <p className="brand-mast-tag">Deluxe ice cream bars, dipped on purpose.</p>
        </div>
        <div className="brand-mast-right">
          <div className="brand-mast-blob">Tubbly's</div>
        </div>
      </div>

      <div className="tubblys-feature">
        <div className="tubblys-feature-img">
          <video
            src="assets/tubblys-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="tubblys-feature-text">
          <span className="feature-eyebrow">Hero of the line</span>
          <h3 className="feature-headline">
            The Dubai Chocolate Bar.
          </h3>
          <p className="feature-body">
            A bar that took six months and approximately a thousand pistachios
            to get right. Crackling dark chocolate shell. Pistachio cream and
            crisp kataifi inside. A drizzle on top because we couldn't help it.
          </p>
          <a href="#" className="btn btn-tubblys">
            See full nutrition <Arrow size={14} />
          </a>
        </div>
      </div>

      <div className="tubblys-strip">
        <img src="assets/tubblys-lineup.jpeg" alt="Tubbly's lineup" />
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// True Blossom section
// ────────────────────────────────────────────────────────────────────────────

function Blossom() {
  return (
    <section id="blossom" className="brand-section blossom-section">
      <div className="blossom-mast">
        <div className="blossom-mast-eyebrow">
          <Star size={10} color="var(--blossom-pink)" />
          <span>SUB-BRAND 02</span>
          <Star size={10} color="var(--blossom-pink)" />
        </div>
        <h2 className="blossom-name">True Blossom</h2>
        <p className="blossom-tag">
          Frozen dairy desserts, sculpted to look like the flower they taste of.
        </p>
      </div>

      <div className="blossom-flavors">
        <article className="blossom-flavor blossom-pink">
          <div className="bf-image">
            <img src="assets/blossom-dragonfruit-single.jpeg" alt="Crimson Dragon Fruit" />
          </div>
          <div className="bf-text">
            <span className="bf-num">№ 01</span>
            <h3>Crimson Dragon Fruit</h3>
            <p>
              Pink as a confession. Dragonfruit pulp folded into cream and
              frozen into the shape of a closed bud. Tastes like the prettiest
              part of summer.
            </p>
          </div>
        </article>

        <article className="blossom-flavor blossom-violet">
          <div className="bf-text">
            <span className="bf-num">№ 02</span>
            <h3>Blueberry Bliss</h3>
            <p>
              Quieter, dustier, dreamier. Blueberry compote and milk swirled
              into a soft violet bloom. Tastes like a Sunday afternoon you
              wish would never end.
            </p>
          </div>
          <div className="bf-image">
            <img src="assets/blossom-blueberry-single.jpeg" alt="Blueberry Bliss" />
          </div>
        </article>
      </div>

      <div className="blossom-coming">
        <h4>Blooming soon —</h4>
        <ul>
          <li>Yuzu Petal</li>
          <li>White Peach Sakura</li>
          <li>Lychee Rose</li>
          <li>Cassis Camellia</li>
          <li>Mystic Mangosteen</li>
        </ul>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Story
// ────────────────────────────────────────────────────────────────────────────

function Story() {
  return (
    <section id="story" className="story">
      <div className="story-grid">
        <div className="story-text">
          <span className="section-eyebrow">02 — Our Story</span>
          <h2 className="section-title">
            Lamily is named after a typo.
          </h2>
          <p>
            In 2018, our founder Mei was texting her sister about starting a
            family ice cream business. Autocorrect turned "family" into
            "Lamily." She kept it. It felt right — a little lopsided, a little
            handmade, very ours.
          </p>
          <p>
            Today Lamily is two sub-brands and one very small team working out
            of a converted dairy in Chicago. We don't do thirty flavors. We do
            a handful, and we do them until they're unembarrassing.
          </p>
          <div className="story-numbers">
            <div><span>2026</span><small>Founded</small></div>
            <div><span>2</span><small>Sub-brands</small></div>
            <div><span>11</span><small>People</small></div>
            <div><span>1</span><small>Very loved freezer</small></div>
          </div>
        </div>
        <div className="story-image">
          <img src="assets/tubblys-handheld.jpeg" alt="A Tubbly's bar in hand" />
          <div className="story-caption">
            <em>"It's just dessert. It's also kind of everything."</em>
            <span>— Mei, founder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Stockists / locator
// ────────────────────────────────────────────────────────────────────────────

function Stockists() {
  const stockists = [
    { name: "Foxtrot Market", region: "Chicago, IL", note: "Tubbly's" },
    { name: "Eataly", region: "NY · Chicago · LA", note: "Both lines" },
    { name: "Erewhon", region: "Los Angeles, CA", note: "True Blossom" },
    { name: "Bristol Farms", region: "Southern California", note: "Both lines" },
    { name: "Whole Foods Midwest", region: "Selected stores", note: "Tubbly's" },
    { name: "H Mart", region: "Nationwide", note: "True Blossom" },
    { name: "The Goods Mart", region: "Los Angeles, CA", note: "Tubbly's" },
    { name: "Zabar's", region: "New York, NY", note: "Both lines" },
    { name: "Teso Life", region: "Flushing, NY", note: "True Blossom" },
  ];
  return (
    <section id="stockists" className="stockists">
      <div className="section-head">
        <span className="section-eyebrow">03 — Find Us</span>
        <h2 className="section-title">Stockists, in alphabetical order.</h2>
        <p className="section-lede">
          We're in roughly two hundred freezers across the country. Here are
          a few of our favorites.
        </p>
      </div>
      <ul className="stockist-list">
        {stockists.map((s, i) => (
          <li key={i} className="stockist-row">
            <span className="stockist-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="stockist-name">{s.name}</span>
            <span className="stockist-region">{s.region}</span>
            <span className="stockist-note">{s.note}</span>
            <span className="stockist-arrow"><Arrow size={16} rotate={-45} /></span>
          </li>
        ))}
      </ul>
      <div className="stockist-cta">
        <p>Don't see your local market?</p>
        <a href="#" className="btn btn-primary">Request Lamily near you <Arrow size={14} /></a>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Footer
// ────────────────────────────────────────────────────────────────────────────

function Footer() {
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
            <li><a href="#tubblys">Tubbly's</a></li>
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
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@home.com" />
            <button type="submit"><Arrow size={14} /></button>
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

Object.assign(window, { TaglineStrip, Families, Tubblys, Blossom, Story, Stockists, Footer });
