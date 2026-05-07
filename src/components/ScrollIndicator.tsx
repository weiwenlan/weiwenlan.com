"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  totalSteps: number;
  currentProgress: number;
}

export default function ScrollIndicator({ totalSteps, currentProgress }: ScrollIndicatorProps) {
  const activeIndex = Math.min(
    totalSteps - 1,
    Math.max(0, Math.round(currentProgress * (totalSteps - 1))),
  );

  return (
    <div
      aria-hidden
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-[8px] pointer-events-none"
    >
      {Array.from({ length: totalSteps }, (_, i) => (
        <motion.span
          key={i}
          className="block h-[2px] w-[24px] bg-[var(--text)] rounded-full"
          initial={false}
          animate={{ opacity: i === activeIndex ? 1 : 0.2 }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.6 }}
        />
      ))}
    </div>
  );
}
