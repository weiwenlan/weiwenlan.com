"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";

interface HorizontalScrollerProps {
  children: ReactNode;
  onProgress?: (progress: number) => void;
}

export default function HorizontalScroller({ children, onProgress }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    const handleScroll = () => {
      if (!onProgress) return;
      const max = container.scrollWidth - container.clientWidth;
      const progress = max > 0 ? container.scrollLeft / max : 0;
      onProgress(Math.min(1, Math.max(0, progress)));
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [onProgress]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!containerRef.current) return;
    const firstCard = containerRef.current.querySelector<HTMLElement>(":scope > *");
    const gap = 16;
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : 1100;

    if (e.key === "ArrowRight") {
      containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      data-scroller
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onKeyDown={handleKeyDown}
      className={`
        flex overflow-x-auto hide-scrollbar w-full scroller-feather
        snap-x snap-mandatory
        pt-[90px] pb-[24px] px-[var(--page-padding)]
        gap-[var(--card-gap)]
        ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        outline-none
      `}
      style={{
        scrollBehavior: isDragging ? "auto" : "smooth",
      }}
    >
      {children}
    </div>
  );
}
