"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  totalSteps: number;
  currentProgress: number;
}

const TOTAL_LINES = 12;
const LINE_WIDTH = 1;
const LINE_HEIGHT = 14;
const LINE_GAP = 6;
const TRACKER_WIDTH = 22;
const HIDE_DELAY_MS = 1500;

export default function ScrollIndicator({ currentProgress }: ScrollIndicatorProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showThenHide = () => {
      setIsScrolling((prev) => (prev ? prev : true));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsScrolling(false), HIDE_DELAY_MS);
    };
    window.addEventListener("scroll", showThenHide, { passive: true });
    window.addEventListener("wheel", showThenHide, { passive: true });
    window.addEventListener("keydown", showThenHide);
    return () => {
      window.removeEventListener("scroll", showThenHide);
      window.removeEventListener("wheel", showThenHide);
      window.removeEventListener("keydown", showThenHide);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const lineSpacing = LINE_WIDTH + LINE_GAP;
  const railWidth = TOTAL_LINES * lineSpacing - LINE_GAP;
  const trackerLeft = currentProgress * (railWidth - TRACKER_WIDTH);

  return (
    <div
      aria-hidden
      className="fixed top-[64px] left-1/2 -translate-x-1/2 z-[var(--z-overlay)] pointer-events-none"
    >
      <div className="relative flex items-center" style={{ height: LINE_HEIGHT, gap: `${LINE_GAP}px` }}>
        {Array.from({ length: TOTAL_LINES }, (_, i) => (
          <motion.span
            key={i}
            className="block bg-[var(--text-muted)]"
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
            initial={false}
            animate={{ opacity: isScrolling ? 0.55 : 0.18 }}
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
          animate={{ x: trackerLeft, opacity: isScrolling ? 1 : 0.35 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.6 }}
        />
      </div>
    </div>
  );
}
