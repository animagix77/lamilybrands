// Convert the polyline path data from `lamily-paths.ts` into smooth cubic
// Bezier curves. The traced PNG produced dense `M/L`-only subpaths, which
// render with visible facets. We apply Catmull-Rom -> cubic Bezier with a
// closed-loop assumption (each subpath ends back at its start point).

type Point = readonly [number, number];

function parseSubpaths(d: string): Point[][] {
  const subpaths: Point[][] = [];
  const tokens = d.trim().split(/\s+/);
  let current: Point[] = [];
  let i = 0;
  while (i < tokens.length) {
    const t = tokens[i];
    if (t === "M" || t === "L") {
      const x = parseFloat(tokens[i + 1]);
      const y = parseFloat(tokens[i + 2]);
      if (t === "M" && current.length > 0) {
        subpaths.push(current);
        current = [];
      }
      current.push([x, y]);
      i += 3;
    } else if (t === "Z" || t === "z") {
      if (current.length > 0) {
        subpaths.push(current);
        current = [];
      }
      i += 1;
    } else {
      i += 1;
    }
  }
  if (current.length > 0) subpaths.push(current);
  return subpaths;
}

function fmt(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(2);
}

// Closed Catmull-Rom uniform spline -> cubic Bezier. Tension 0.5 (standard).
function smoothClosedSubpath(pts: Point[]): string {
  // Drop the duplicate closing vertex if the path explicitly returns to start.
  const points =
    pts.length > 1 &&
    pts[0][0] === pts[pts.length - 1][0] &&
    pts[0][1] === pts[pts.length - 1][1]
      ? pts.slice(0, -1)
      : pts;

  const n = points.length;
  if (n < 3) {
    // Degenerate — emit as a line.
    let d = `M ${fmt(points[0][0])} ${fmt(points[0][1])}`;
    for (let k = 1; k < n; k++) d += ` L ${fmt(points[k][0])} ${fmt(points[k][1])}`;
    return d + " Z";
  }

  let d = `M ${fmt(points[0][0])} ${fmt(points[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${fmt(c1x)} ${fmt(c1y)} ${fmt(c2x)} ${fmt(c2y)} ${fmt(p2[0])} ${fmt(p2[1])}`;
  }
  return d + " Z";
}

export function smoothPolylinePath(d: string): string {
  return parseSubpaths(d).map(smoothClosedSubpath).join(" ");
}
