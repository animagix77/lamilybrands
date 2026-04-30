type StarProps = { size?: number; color?: string };

export function Star({ size = 16, color = "currentColor" }: StarProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 0 C12 8 12 8 24 12 C12 16 12 16 12 24 C12 16 12 16 0 12 C12 8 12 8 12 0 Z"
        fill={color}
      />
    </svg>
  );
}

type ArrowProps = { rotate?: number; size?: number };

export function Arrow({ rotate = 0, size = 24 }: ArrowProps) {
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
