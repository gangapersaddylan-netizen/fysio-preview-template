import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Volledig ronde knop (radius 999px) in shadcn-stijl.
 * `buttonVariants` is los exporteerbaar zodat ook een echte <a>
 * exact als knop kan worden gestyled (zie Klachtselector / Hero-CTA's).
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95",
        secondary:
          "bg-card text-ink border border-line hover:border-accent hover:text-accent",
        ghost: "text-ink hover:bg-accent-soft",
        light: "bg-white text-ink hover:brightness-95",
        outlineLight:
          "border border-white/30 text-white hover:bg-white/10",
      },
      size: {
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-[52px] px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
