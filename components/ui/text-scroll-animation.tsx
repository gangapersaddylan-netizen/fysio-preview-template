"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Eén teken dat vanuit een gespreide positie naar het midden schuift bij scrollen. */
export function AssembleChar({
  char,
  distance,
  progress,
}: {
  char: string;
  distance: number;
  progress: MotionValue<number>;
}) {
  const isSpace = char === " ";
  const x = useTransform(progress, [0, 0.5], [distance * 50, 0]);
  const y = useTransform(progress, [0, 0.5], [Math.abs(distance) * 45, 0]);
  const rotateX = useTransform(progress, [0, 0.5], [distance * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-[0.4em]")}
      style={{ x, y, rotateX }}
    >
      {isSpace ? "\u00A0" : char}
    </motion.span>
  );
}

/** Een blok (bijv. een kaart) dat uitwaaiert en bij scrollen naar het midden convergeert. */
export function AssembleItem({
  children,
  distance,
  progress,
  className,
}: {
  children: ReactNode;
  distance: number;
  progress: MotionValue<number>;
  className?: string;
}) {
  const x = useTransform(progress, [0, 0.5], [distance * 90, 0]);
  const y = useTransform(progress, [0, 0.5], [Math.abs(distance) * 26, 0]);
  const scale = useTransform(progress, [0, 0.5], [0.72, 1]);
  const opacity = useTransform(progress, [0, 0.35], [0, 1]);

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ x, y, scale, opacity, transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
}
