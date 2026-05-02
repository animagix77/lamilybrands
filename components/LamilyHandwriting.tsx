import type { CSSProperties } from "react";
import { LAMILY_LETTERS, LAMILY_PATH_DATA, LAMILY_SMOOTHED_COMPONENTS } from "./lamily-paths";

type Props = {
  width?: string | number;
  color?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

type AnimVars = CSSProperties & {
  ["--lamily-color"]?: string;
  ["--lamily-duration"]?: string;
  ["--lamily-delay"]?: string;
  ["--stroke-start"]?: string;
  ["--stroke-dur"]?: string;
  ["--stroke-fade-start"]?: string;
  ["--fill-start"]?: string;
  ["--fill-dur"]?: string;
};

export function LamilyHandwriting({
  width = 760,
  color = "#E85A7A",
  duration = 3.4,
  delay = 0.2,
  className = "",
}: Props) {
  const data = LAMILY_PATH_DATA;
  const components = LAMILY_SMOOTHED_COMPONENTS;

  const containerStyle: AnimVars = {
    width,
    aspectRatio: "1001 / 452",
    "--lamily-color": color,
    "--lamily-duration": `${duration}s`,
    "--lamily-delay": `${delay}s`,
  };

  return (
    <div
      className={`lamily-handwriting is-playing ${className}`.trim()}
      style={containerStyle}
      role="img"
      aria-label="Lamily"
    >
      <svg
        viewBox={data.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="lamily-svg"
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="geometricPrecision"
      >
        <g className="lamily-stroke-layer">
          {components.map((c, i) => {
            const t = LAMILY_LETTERS[i];
            const oStart = t.oS * duration + delay;
            const oDur = (t.oE - t.oS) * duration;
            const fadeStart = t.fS * duration + delay;
            const style: AnimVars = {
              "--stroke-start": `${oStart}s`,
              "--stroke-dur": `${oDur}s`,
              "--stroke-fade-start": `${fadeStart}s`,
            };
            return (
              <path
                key={`stroke-${i}`}
                className="lamily-stroke-path"
                d={c.d}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={style}
              />
            );
          })}
        </g>

        <g className="lamily-fill-layer">
          {components.map((c, i) => {
            const t = LAMILY_LETTERS[i];
            const fStart = t.fS * duration + delay;
            const fDur = (t.fE - t.fS) * duration;
            const style: AnimVars = {
              "--fill-start": `${fStart}s`,
              "--fill-dur": `${Math.max(0.2, fDur)}s`,
            };
            return (
              <path
                key={`fill-${i}`}
                className="lamily-fill-path"
                d={c.d}
                fill={color}
                fillRule="evenodd"
                style={style}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
