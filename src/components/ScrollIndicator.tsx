"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  totalSteps: number;
  currentProgress: number;
}

const TOTAL_LINES = 20;
const LINE_WIDTH = 1;
const LINE_HEIGHT = 18;
const LINE_GAP = 9;
const TRACKER_WIDTH = 30;

export default function ScrollIndicator({ currentProgress }: ScrollIndicatorProps) {
  const lineSpacing = LINE_WIDTH + LINE_GAP;
  const railWidth = TOTAL_LINES * lineSpacing - LINE_GAP;
  const trackerLeft = currentProgress * (railWidth - TRACKER_WIDTH);

  return (
    <div
      aria-hidden
      className="fixed top-[64px] left-1/2 -translate-x-1/2 z-[var(--z-overlay)] pointer-events-none"
    >
      <div
        className="relative flex items-center"
        style={{ height: LINE_HEIGHT, gap: `${LINE_GAP}px` }}
      >
        {Array.from({ length: TOTAL_LINES }, (_, i) => (
          <span
            key={i}
            className="block"
            style={{
              width: LINE_WIDTH,
              height: LINE_HEIGHT,
              background: "rgb(143, 143, 143)",
            }}
          />
        ))}
        <motion.div
          className="absolute top-0 box-border"
          style={{
            width: TRACKER_WIDTH,
            height: LINE_HEIGHT,
            border: `${LINE_WIDTH}px solid rgb(143, 143, 143)`,
            background: "var(--bg)",
          }}
          initial={false}
          animate={{ x: trackerLeft }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.6 }}
        />
      </div>
    </div>
  );
}
