import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

type Orb = {
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  phase: number;
};

const ORBS: Orb[] = [
  { baseX: 0.1,  baseY: 0.18, size: 380, color: "oklch(0.65 0.25 340 / 0.28)", speedX: 0.7,  speedY: 0.5,  phase: 0   },
  { baseX: 0.88, baseY: 0.72, size: 460, color: "oklch(0.65 0.2  280 / 0.28)", speedX: -0.6, speedY: 0.8,  phase: 50  },
  { baseX: 0.55, baseY: 0.12, size: 260, color: "oklch(0.65 0.22 310 / 0.22)", speedX: 1.0,  speedY: -0.4, phase: 90  },
  { baseX: 0.18, baseY: 0.82, size: 320, color: "oklch(0.65 0.25 340 / 0.2)",  speedX: -0.9, speedY: -0.7, phase: 130 },
  { baseX: 0.9,  baseY: 0.18, size: 210, color: "oklch(0.65 0.2  280 / 0.18)", speedX: 0.5,  speedY: 1.1,  phase: 170 },
  { baseX: 0.45, baseY: 0.9,  size: 290, color: "oklch(0.65 0.22 300 / 0.2)",  speedX: -1.1, speedY: 0.6,  phase: 210 },
];

type Particle = {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
  isPink: boolean;
};

// Deterministic particle layout using golden angle
const PARTICLES: Particle[] = Array.from({ length: 36 }, (_, i) => ({
  x: (i * 137.508) % 100,
  y: (i * 97.32) % 100,
  size: 1.5 + (i % 3) * 0.8,
  phase: i * 11,
  speed: 0.25 + (i % 6) * 0.12,
  isPink: i % 2 === 0,
}));

const GRID_SIZE = 80;

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "transparent", overflow: "hidden" }}>
      {/* Gradient orbs */}
      {ORBS.map((orb, i) => {
        const t = (frame + orb.phase) / durationInFrames;
        const x = orb.baseX * width  + Math.sin(t * Math.PI * 2 * orb.speedX) * 90;
        const y = orb.baseY * height + Math.cos(t * Math.PI * 2 * orb.speedY) * 70;
        const pulse = 1 + Math.sin(t * Math.PI * 4 + i) * 0.1;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left:   x - (orb.size * pulse) / 2,
              top:    y - (orb.size * pulse) / 2,
              width:  orb.size * pulse,
              height: orb.size * pulse,
              borderRadius: "50%",
              background:   orb.color,
              filter: `blur(${orb.size * 0.33}px)`,
            }}
          />
        );
      })}

      {/* SVG layer: grid + scan lines + particles */}
      <svg
        style={{ position: "absolute", inset: 0 }}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width={GRID_SIZE} height={GRID_SIZE} patternUnits="userSpaceOnUse">
            <circle cx="0"          cy="0"          r="1.5" fill="oklch(0.65 0.25 340 / 0.15)" />
            <circle cx={GRID_SIZE}  cy="0"          r="1.5" fill="oklch(0.65 0.25 340 / 0.15)" />
            <circle cx="0"          cy={GRID_SIZE}  r="1.5" fill="oklch(0.65 0.25 340 / 0.15)" />
            <circle cx={GRID_SIZE}  cy={GRID_SIZE}  r="1.5" fill="oklch(0.65 0.25 340 / 0.15)" />
            <circle cx={GRID_SIZE / 2} cy={GRID_SIZE / 2} r="1" fill="oklch(0.65 0.2 280 / 0.1)" />
          </pattern>

          {/* Radial fade mask so edges are transparent */}
          <radialGradient id="fade-mask" cx="50%" cy="50%" r="55%">
            <stop offset="30%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="center-mask">
            <rect width={width} height={height} fill="url(#fade-mask)" />
          </mask>
        </defs>

        {/* Dot grid */}
        <rect width={width} height={height} fill="url(#dot-grid)" mask="url(#center-mask)" />

        {/* Horizontal neon scan lines */}
        {[0.28, 0.62, 0.85].map((yRatio, i) => {
          const t = ((frame + i * 80) % durationInFrames) / durationInFrames;
          const sweep = t * (width + 600) - 300;
          const color = i % 2 === 0
            ? "oklch(0.65 0.25 340 / 0.5)"
            : "oklch(0.65 0.2  280 / 0.5)";
          return (
            <g key={i}>
              {/* bright leading edge */}
              <line
                x1={sweep}
                y1={yRatio * height}
                x2={sweep + 1}
                y2={yRatio * height}
                stroke={color}
                strokeWidth="2"
              />
              {/* fading trail */}
              <line
                x1={sweep - 120}
                y1={yRatio * height}
                x2={sweep}
                y2={yRatio * height}
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </g>
          );
        })}

        {/* Floating particles */}
        {PARTICLES.map((p, i) => {
          const t = (frame + p.phase) / durationInFrames;
          const px = (p.x / 100) * width  + Math.sin(t * Math.PI * 2 * p.speed) * 28;
          const py = (p.y / 100) * height + Math.cos(t * Math.PI * 2 * p.speed * 0.7) * 22;
          const opacity = 0.35 + Math.sin((t + i * 0.12) * Math.PI * 2) * 0.3;
          const fill = p.isPink
            ? "oklch(0.65 0.25 340)"
            : "oklch(0.65 0.2 280)";

          return (
            <circle
              key={i}
              cx={px}
              cy={py}
              r={p.size}
              fill={fill}
              opacity={opacity}
            />
          );
        })}

        {/* Corner accent lines */}
        {[
          { x1: 0,     y1: 0,      x2: 120,  y2: 0 },
          { x1: 0,     y1: 0,      x2: 0,    y2: 120 },
          { x1: width, y1: 0,      x2: width - 120, y2: 0 },
          { x1: width, y1: 0,      x2: width,       y2: 120 },
          { x1: 0,     y1: height, x2: 120,  y2: height },
          { x1: 0,     y1: height, x2: 0,    y2: height - 120 },
        ].map((line, i) => {
          const t = frame / durationInFrames;
          const opacity = 0.3 + Math.sin((t * Math.PI * 2) + i * 1.05) * 0.2;
          return (
            <line
              key={i}
              x1={line.x1} y1={line.y1}
              x2={line.x2} y2={line.y2}
              stroke="oklch(0.65 0.25 340)"
              strokeWidth="1.5"
              opacity={opacity}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
