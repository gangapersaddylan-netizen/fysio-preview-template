"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const tagMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  span: motion.span,
} as const;

type Tag = keyof typeof tagMap;

const textEase = [0.16, 1, 0.3, 1] as const;

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  amount?: number;
};

/** Tekst-reveal: opacity 0 -> 1, y 26 -> 0, cubic-bezier over 0.8s. Scroll-getriggerd. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  amount = 0.15,
  y = 26,
}: BaseProps & { y?: number }) {
  const reduce = useReducedMotion();
  const Comp = tagMap[as] as React.ElementType;
  if (reduce) return <Comp className={className}>{children}</Comp>;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: textEase, delay }}
    >
      {children}
    </Comp>
  );
}

/** Kaart-reveal: opacity 0 -> 1, y 38 -> 0, scale 0.965 -> 1 met spring. Scroll-getriggerd. */
export function RevealCard({
  children,
  className,
  delay = 0,
  as = "div",
  amount = 0.15,
}: BaseProps) {
  const reduce = useReducedMotion();
  const Comp = tagMap[as] as React.ElementType;
  if (reduce) return <Comp className={className}>{children}</Comp>;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 38, scale: 0.965 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ type: "spring", stiffness: 70, damping: 14, delay }}
    >
      {children}
    </Comp>
  );
}
