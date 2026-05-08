"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  totalSteps: number;
  currentProgress: number;
}

const TOTAL_LINES = 24;
const LINE_WIDTH = 1;
const LINE_HEIGHT = 18;
const LINE_GAP = 9;
const TRACKER_WIDTH = 30;

export default function ScrollIndicator({ currentProgress }: ScrollIndicatorProps) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setIsScrolling(true);
    const timeout = setTimeout(() => setIsScrolling(false), 1500);
    return () => clearTimeout(timeout);
  }, [currentProgress]);

  const lineSpacing = LINE_WIDTH + LINE_GAP;
  const railWidth = TOTAL_LINES * lineSpacing - LINE_GAP;
  const trackerLeft = currentProgress * (railWidth - TRACKER_WIDTH);

  return (
    <div
      aria-hidden
      className="fixed top-[64px] left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="relative flex items-center" style={{ height: LINE_HEIGHT, gap: `${LINE_GAP}px` }}>
        {Array.from({ length: TOTAL_LINES }, (_, i) => (
          <motion.span
            key={i}
            className="block bg-[var(--text-muted)]"
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
            initial={false}
            animate={{ opacity: isScrolling ? 0.4 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        ))}
        <motion.div
          className="absolute top-0 box-border"
          style={{
            width: TRACKER_WIDTH,
            height: LINE_HEIGHT,
            border: `${LINE_WIDTH}px solid var(--text-muted)`,
            background: "transparent",
          }}
          initial={false}
          animate={{ x: trackerLeft, opacity: isScrolling ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.6 }}
        />
      </div>
    </div>
  );
}
