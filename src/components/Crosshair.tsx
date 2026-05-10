"use client";

import { useEffect, useRef } from "react";

export default function Crosshair() {
  const ref = useRef<SVGSVGElement>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      el.style.opacity = "1";
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        el.style.opacity = "0";
      }, 1500);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fixed top-0 left-0 z-[var(--z-cursor)] pointer-events-none opacity-0 transition-opacity duration-300 ease-out"
    >
      <line x1="14.75" y1="0" x2="14.75" y2="30" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" />
      <line y1="14.25" x2="30" y2="14.25" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" />
    </svg>
  );
}
