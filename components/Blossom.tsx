import { Star } from "./icons";

const BLOOMING_SOON = [
  "Yuzu Petal",
  "White Peach Sakura",
  "Lychee Rose",
  "Cassis Camellia",
  "Mystic Mangosteen",
];

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
              into a soft violet bloom. Tastes like a Sunday afternoon you wish
              would never end.
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

      <div className="blossom-coming">
        <h4>Blooming soon —</h4>
        <ul>
          {BLOOMING_SOON.map((flavor) => (
            <li key={flavor}>{flavor}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
