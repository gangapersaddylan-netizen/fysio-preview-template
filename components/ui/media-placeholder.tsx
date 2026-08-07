import { cn } from "@/lib/utils";

/**
 * Tijdelijke fotoplaceholder: donkergroen verloop met een klein label.
 * Vervang door <Image> zodra de echte praktijkfoto's in /public staan.
 */
export function MediaPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden",
        className
      )}
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #31423e 0%, #14201d 55%, #0e1815 100%)",
      }}
      role="img"
      aria-label={label}
    >
      <span className="m-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
