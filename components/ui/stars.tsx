import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Vijf sterren; amber is uitsluitend voor sterren gereserveerd. */
export function Stars({
  value = 5,
  className,
}: {
  value?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex gap-0.5", className)}
      aria-label={`${value} van 5 sterren`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          strokeWidth={1.5}
          style={{
            color: i < value ? "var(--color-amber)" : "var(--color-line)",
            fill: i < value ? "var(--color-amber)" : "transparent",
          }}
        />
      ))}
    </span>
  );
}
