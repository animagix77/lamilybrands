import { Arrow } from "./icons";

const STOCKISTS = [
  { name: "Bristol Farms", region: "Southern California", note: "Both lines" },
  { name: "Eataly", region: "NY · Chicago · LA", note: "Both lines" },
  { name: "Erewhon", region: "Los Angeles, CA", note: "True Blossom" },
  { name: "Foxtrot Market", region: "Chicago, IL", note: "Tubbly's" },
  { name: "H Mart", region: "Nationwide", note: "True Blossom" },
  { name: "Teso Life", region: "Flushing, NY", note: "True Blossom" },
  { name: "The Goods Mart", region: "Los Angeles, CA", note: "Tubbly's" },
  { name: "Whole Foods Midwest", region: "Selected stores", note: "Tubbly's" },
  { name: "Zabar's", region: "New York, NY", note: "Both lines" },
];

export function Stockists() {
  return (
    <section id="stockists" className="stockists">
      <div className="section-head">
        <span className="section-eyebrow">03 — Find Us</span>
        <h2 className="section-title">Stockists, in alphabetical order.</h2>
        <p className="section-lede">
          We&apos;re in roughly two hundred freezers across the country. Here
          are a few of our favorites.
        </p>
      </div>
      <ul className="stockist-list">
        {STOCKISTS.map((s, i) => (
          <li key={s.name} className="stockist-row">
            <span className="stockist-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="stockist-name">{s.name}</span>
            <span className="stockist-region">{s.region}</span>
            <span className="stockist-note">{s.note}</span>
            <span className="stockist-arrow">
              <Arrow size={16} rotate={-45} />
            </span>
          </li>
        ))}
      </ul>
      <div className="stockist-cta">
        <p>Don&apos;t see your local market?</p>
        <a href="#" className="btn btn-primary">
          Request Lamily near you <Arrow size={14} />
        </a>
      </div>
    </section>
  );
}
