"use client";

import { motion, MotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

interface ScrollIndicatorProps {
  progress: MotionValue<number>;
}

const TOTAL_BARS = 20;
const BAR_WIDTH = 1;
const BAR_GAP = 7;
const BAR_HEIGHT = 12;
const TRACKER_WIDTH = 2;
const TRACKER_HEIGHT = 20;
const INDICATOR_WIDTH = TOTAL_BARS * BAR_WIDTH + (TOTAL_BARS - 1) * BAR_GAP;
const INDICATOR_SPRING = { stiffness: 240, damping: 34, mass: 0.5 };

export default function ScrollIndicator({ progress }: ScrollIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();
  const displayProgress = useSpring(progress, shouldReduceMotion ? { duration: 0 } : INDICATOR_SPRING);
  const trackerLeft = useTransform(displayProgress, [0, 1], [0, INDICATOR_WIDTH - TRACKER_WIDTH]);

  return (
    <div
      aria-hidden
      className="fixed top-[64px] left-1/2 -translate-x-1/2 z-[var(--z-overlay)] pointer-events-none"
    >
      <div
        className="relative flex items-center"
        style={{ width: INDICATOR_WIDTH, height: TRACKER_HEIGHT, gap: BAR_GAP }}
      >
        {Array.from({ length: TOTAL_BARS }).map((_, index) => (
          <span
            key={index}
            className="block"
            style={{
              width: BAR_WIDTH,
              height: BAR_HEIGHT,
              background: "rgb(143, 143, 143)",
            }}
          />
        ))}
        <motion.div
          className="absolute top-0"
          initial={false}
          style={{
            width: TRACKER_WIDTH,
            height: TRACKER_HEIGHT,
            background: "rgb(23, 23, 23)",
            x: trackerLeft,
          }}
        />
      </div>
    </div>
  );
}
