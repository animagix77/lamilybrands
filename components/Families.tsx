import { Arrow, Star } from "./icons";

export function Families() {
  return (
    <section id="families" className="families">
      <div className="section-head">
        <span className="section-eyebrow">01 — Our Families</span>
        <h2 className="section-title">
          Two sub-brands. <em>Distinct personalities.</em> Same fridge.
        </h2>
        <p className="section-lede">
          We don&apos;t make one ice cream and stretch it across a wall of pints.
          We make two specific things, very carefully, for two specific moods.
        </p>
      </div>

      <div className="family-cards">
        <a href="#tubblys" className="family-card family-tubblys">
          <div className="family-card-tag">
            <Star size={10} color="var(--tubblys-yellow)" />
            <span>Brand One</span>
          </div>
          <div className="family-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tubblys-product.jpeg" alt="Tubbly's Dubai Chocolate" />
          </div>
          <div className="family-card-body">
            <h3 className="family-card-name">Tubbly&apos;s</h3>
            <p className="family-card-tag-line">Deluxe ice cream bars</p>
            <p className="family-card-blurb">
              Thick-shelled, generously dipped, occasionally outrageous. For
              when you want one perfect thing on a stick.
            </p>
            <span className="family-card-link">
              Visit Tubbly&apos;s <Arrow size={14} rotate={-45} />
            </span>
          </div>
        </a>

        <a href="#blossom" className="family-card family-blossom">
          <div className="family-card-tag">
            <Star size={10} color="var(--blossom-pink)" />
            <span>Brand Two</span>
          </div>
          <div className="family-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/blossom-dragonfruit-box.jpeg"
              alt="True Blossom Crimson Dragon Fruit"
            />
          </div>
          <div className="family-card-body">
            <h3 className="family-card-name">True Blossom</h3>
            <p className="family-card-tag-line">Frozen dairy desserts</p>
            <p className="family-card-blurb">
              Sculpted, flower-shaped, almost too pretty to bite. Fruit-forward,
              gently dairy, completely a moment.
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
