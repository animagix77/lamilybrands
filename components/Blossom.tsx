import { Star } from "./icons";

export function Blossom() {
  return (
    <section id="blossom" className="brand-section blossom-section">
      <div className="blossom-mast">
        <div className="blossom-mast-eyebrow">
          <Star size={10} color="var(--blossom-pink)" />
          <span>Sub-brand 02</span>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/blossom-dragonfruit-single.jpeg"
              alt="Crimson Dragon Fruit"
            />
          </div>
          <div className="bf-text">
            <span className="bf-num">№ 01</span>
            <h3>Crimson Dragon Fruit</h3>
            <p>
              Blush pink and quietly indulgent. Dragon fruit essence folded
              into a silky frozen dairy dessert. A delicate taste of summer.
            </p>
          </div>
        </article>

        <article className="blossom-flavor blossom-violet">
          <div className="bf-text">
            <span className="bf-num">№ 02</span>
            <h3>Blueberry Bliss</h3>
            <p>
              Soft, muted, and indulgent. Blueberry notes blended into a creamy
              frozen dairy dessert, finished in a gentle violet hue. A Sunday
              afternoon that lingers.
            </p>
          </div>
          <div className="bf-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/blossom-blueberry-single.jpeg"
              alt="Blueberry Bliss"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
