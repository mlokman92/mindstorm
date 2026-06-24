"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Travel distance in px (default 16). */
  y?: number;
  className?: string;
  as?: "div" | "li" | "span";
};

/**
 * Scroll-into-view fade + rise.
 *
 * Uses a SINGLE motion element (no conditional element swap, which previously
 * left content stuck at opacity:0 for reduced-motion users). When the user
 * prefers reduced motion we disable the hidden initial state entirely, so
 * content always renders fully visible. See DESIGN.md §7.
 */
export function Reveal({ children, delay = 0, y = 16, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }
      }
    >
      {children}
    </MotionTag>
  );
}
