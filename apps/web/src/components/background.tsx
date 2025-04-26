import { cn } from "@/lib/utils";

interface BackgroundProps {
  className?: string;
  gridOpacity?: number;
  orbOpacity?: number;
}

export function Background({
  className,
  gridOpacity = 0.05,
  orbOpacity = 0.1,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0 z-0", className)}>
      {/* Chessboard Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 0h30v30H0V0zm30 30h30v30H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          opacity: gridOpacity,
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-24 h-24 rounded-full bg-teal-400/30 blur-2xl"
          style={{ opacity: orbOpacity }}
        />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-purple-500/30 blur-3xl"
          style={{ opacity: orbOpacity }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-teal-400/20 blur-2xl"
          style={{ opacity: orbOpacity }}
        />
      </div>
    </div>
  );
}
