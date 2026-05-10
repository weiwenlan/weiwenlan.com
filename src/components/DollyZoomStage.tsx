"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface DollyZoomStageProps {
  children: ReactNode;
  onProgress?: (progress: number) => void;
}

const SCALE_MAX = 0.95;
const SCALE_MIN = 0.62;

const raunoEase = (t: number) => Math.pow(t, 0.85);

export default function DollyZoomStage({ children, onProgress }: DollyZoomStageProps) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollX, scrollXProgress } = useScroll({ axis: "x" });
  const shouldReduceMotion = useReducedMotion();

  const translateX = useTransform(scrollX, (v) => -v);
  const scale = useTransform(scrollXProgress, (p) => {
    if (shouldReduceMotion) return 1;
    return SCALE_MAX - (SCALE_MAX - SCALE_MIN) * raunoEase(p);
  });

  useEffect(() => {
    if (!onProgress) return;
    const unsubscribe = scrollXProgress.on("change", onProgress);
    return () => unsubscribe();
  }, [scrollXProgress, onProgress]);

  useEffect(() => {
    let mounted = true;
    const updateGhostWidth = () => {
      if (!mounted) return;
      const track = trackRef.current;
      const stage = stageRef.current;
      const ghost = ghostRef.current;
      if (!track || !stage || !ghost) return;
      const trackWidth = track.scrollWidth;
      const stageWidth = stage.clientWidth;
      const firstCard = track.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard?.offsetWidth || stageWidth;

      // Track scales around first-card center (origin = cardWidth/2). At end of
      // scroll the last card's right edge should sit at the stage right edge.
      // stageX(p) = (p - O) * s + O - scrollX, want stageX(W) = S, s = SCALE_MIN:
      //   maxScrollX = (W - O) * SCALE_MIN + O - S
      const origin = cardWidth / 2;
      const maxScrollX = Math.max(
        0,
        (trackWidth - origin) * SCALE_MIN + origin - stageWidth
      );
      ghost.style.width = `${maxScrollX + window.innerWidth}px`;
    };

    updateGhostWidth();
    const observer = new ResizeObserver(updateGhostWidth);
    if (trackRef.current) observer.observe(trackRef.current);
    if (stageRef.current) observer.observe(stageRef.current);
    window.addEventListener("resize", updateGhostWidth);

    return () => {
      mounted = false;
      observer.disconnect();
      window.removeEventListener("resize", updateGhostWidth);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaX === 0 && e.deltaY !== 0 && !e.ctrlKey) {
        e.preventDefault();
        window.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!trackRef.current) return;

      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        // Read intrinsic (un-transformed) card geometry from CSS variables so
        // arrow nav steps by one card regardless of current dolly scale.
        const rootStyle = getComputedStyle(document.documentElement);
        const firstCard = trackRef.current.firstElementChild as HTMLElement | null;
        const cardWidth =
          firstCard?.offsetWidth ||
          parseFloat(rootStyle.getPropertyValue("--card-w")) ||
          1200;
        const gap = parseFloat(rootStyle.getPropertyValue("--card-gap")) || 32;
        const step = cardWidth + gap;
        const move = e.key === "ArrowRight" ? step : -step;
        window.scrollBy({ left: move, behavior: shouldReduceMotion ? "auto" : "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldReduceMotion]);

  return (
    <>
      <div ref={ghostRef} className="dolly-ghost" aria-hidden />
      <div ref={stageRef} className="dolly-stage" dir="ltr">
        <motion.div
          ref={trackRef}
          className="dolly-track"
          style={{ x: translateX, scale }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}