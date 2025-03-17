import { CirclePattern, DotsPattern, GridPattern, WavePattern, HexagonPattern } from "./Patterns";

type BackgroundProps = {
  pattern: "circles" | "dots" | "grid" | "waves" | "hexagons";
  color?: string;
  className?: string;
};

export default function Background({ pattern, color = "text-gray-200", className = "" }: BackgroundProps) {
  const patterns = {
    circles: CirclePattern,
    dots: DotsPattern,
    grid: GridPattern,
    waves: WavePattern,
    hexagons: HexagonPattern,
  };

  const Pattern = patterns[pattern];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${color} ${className}`}>
      <Pattern />
    </div>
  );
} 