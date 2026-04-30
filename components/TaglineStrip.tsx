import { Star } from "./icons";

const TAGLINES = [
  "Made for slow evenings",
  "Deluxe by hand",
  "Small batch, big feelings",
  "Two brands, one freezer",
  "Cold-pressed romance",
  "From our family to yours",
];

export function TaglineStrip() {
  return (
    <div className="tagline-strip" aria-hidden>
      <div className="tagline-track">
        {[...TAGLINES, ...TAGLINES].map((t, i) => (
          <span key={i} className="tagline-item">
            <Star size={12} color="var(--accent)" />
            <span>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
