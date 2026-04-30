// ─────────────────────────────────────────────────────────────────
// Lamily handwriting animation — letter-by-letter elegant build
// ─────────────────────────────────────────────────────────────────
// The Lamily wordmark, traced from assets/lamily-logo.png as 6
// connected components (L+swoosh, a, m, i body, i dot, l+y).
//
// Sequence: each letter draws as a thin pink outline, then fills in
// solid, before the next letter begins. No gradient, no sweep — just
// elegant, sequential, ink-on-paper.
//
// Depends on lamily-paths.js, which sets window.LAMILY_PATH_DATA.
// ─────────────────────────────────────────────────────────────────

// Per-letter timings (start-second, duration-second) on a unit
// timeline. The whole sequence is normalized to `duration` prop.
// Each letter: outline reveal (most of its slice) → fill fade (last
// 0.25 of its slice). Letters are mostly sequential with a small
// kiss of overlap so it feels written, not stamped.
const LAMILY_LETTERS = [
  // [name, outlineStart, outlineEnd, fillStart, fillEnd]
  { name: "L",  oS: 0.00, oE: 0.30, fS: 0.22, fE: 0.34 }, // capital L + swoosh — biggest
  { name: "a",  oS: 0.30, oE: 0.45, fS: 0.40, fE: 0.49 },
  { name: "m",  oS: 0.45, oE: 0.62, fS: 0.56, fE: 0.66 },
  { name: "i",  oS: 0.60, oE: 0.70, fS: 0.66, fE: 0.74 }, // i body
  { name: "·",  oS: 0.74, oE: 0.78, fS: 0.74, fE: 0.78 }, // i dot — pops in
  { name: "ly", oS: 0.62, oE: 0.95, fS: 0.85, fE: 1.00 }, // l + y descender flourish — long
];

function LamilyHandwriting({
  width = 760,
  color = "#E85A7A",
  duration = 3.4,
  delay = 0.2,
  className = "",
}) {
  const data = window.LAMILY_PATH_DATA;
  if (!data) return null;
  const components = data.components;

  return (
    <div
      className={"lamily-handwriting is-playing " + className}
      style={{
        width,
        aspectRatio: "1001 / 452",
        ["--lamily-color"]: color,
        ["--lamily-duration"]: duration + "s",
        ["--lamily-delay"]: delay + "s",
      }}
      role="img"
      aria-label="Lamily"
    >
      <svg
        viewBox={data.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="lamily-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outline strokes draw in sequence */}
        <g className="lamily-stroke-layer">
          {components.map((c, i) => {
            const t = LAMILY_LETTERS[i];
            const oStart = t.oS * duration + delay;
            const oDur = (t.oE - t.oS) * duration;
            // Stroke fades out as the fill fades in (no overlap of styles)
            const fadeStart = t.fS * duration + delay;
            return (
              <path
                key={"stroke-" + i}
                className="lamily-stroke-path"
                d={c.d}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  ["--stroke-start"]: oStart + "s",
                  ["--stroke-dur"]: oDur + "s",
                  ["--stroke-fade-start"]: fadeStart + "s",
                }}
              />
            );
          })}
        </g>

        {/* Each letter's solid fill fades in once its outline is done */}
        <g className="lamily-fill-layer">
          {components.map((c, i) => {
            const t = LAMILY_LETTERS[i];
            const fStart = t.fS * duration + delay;
            const fDur = (t.fE - t.fS) * duration;
            return (
              <path
                key={"fill-" + i}
                className="lamily-fill-path"
                d={c.d}
                fill={color}
                fillRule="evenodd"
                style={{
                  ["--fill-start"]: fStart + "s",
                  ["--fill-dur"]: Math.max(0.2, fDur) + "s",
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

window.LamilyHandwriting = LamilyHandwriting;
