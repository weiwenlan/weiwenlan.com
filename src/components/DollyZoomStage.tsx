"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface DollyZoomStageProps {
  children: ReactNode;
  onProgress?: (progress: number) => void;
}

const SCALE_MAX = 0.88;
const SCALE_MIN = 0.60;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function DollyZoomStage({ children, onProgress }: DollyZoomStageProps) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollX, scrollXProgress } = useScroll({ axis: "x" });
  const shouldReduceMotion = useReducedMotion();

  const translateX = useTransform(scrollX, (v) => -v);
  const scale = useTransform(scrollXProgress, (p) => {
    if (shouldReduceMotion) return 1;
    return SCALE_MAX - (SCALE_MAX - SCALE_MIN) * easeOutCubic(p);
  });

  useEffect(() => {
    if (!onProgress) return;
    const unsubscribe = scrollXProgress.on("change", onProgress);
    return () => unsubscribe();
  }, [scrollXProgress, onProgress]);

  useEffect(() => {
    const updateGhostWidth = () => {
      if (!trackRef.current || !stageRef.current || !ghostRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const stageWidth = stageRef.current.clientWidth;

      // Solve: at maxScrollX with scale=SCALE_MIN, last card's right edge sits
      // at stage's right edge. Transform pivots around stage center (S/2):
      //   stageX(p) = (p - S/2) * scale + S/2 - scrollX
      // Set stageX(W) = S, scale = SCALE_MIN:
      //   maxScrollX = (W - S/2) * SCALE_MIN - S/2
      const halfStage = stageWidth / 2;
      const maxScrollX = Math.max(
        0,
        (trackWidth - halfStage) * SCALE_MIN - halfStage
      );
      ghostRef.current.style.width = `${maxScrollX + window.innerWidth}px`;
    };

    updateGhostWidth();
    const observer = new ResizeObserver(updateGhostWidth);
    if (trackRef.current) observer.observe(trackRef.current);
    if (stageRef.current) observer.observe(stageRef.current);
    window.addEventListener("resize", updateGhostWidth);

    return () => {
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
        const firstCard = trackRef.current.firstElementChild as HTMLElement;
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 1200;
        const gap = 16;
        const move = e.key === "ArrowRight" ? cardWidth + gap : -(cardWidth + gap);
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