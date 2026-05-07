"use client";

import React, { useRef, useEffect, useState, ReactNode } from "react";

interface HorizontalScrollerProps {
  children: ReactNode;
}

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If we have horizontal delta, let the browser handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    // Use passive: false to allow e.preventDefault()
    container.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

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
    const cardWidth = 360 + 8; // --card-w + --card-gap roughly

    if (e.key === "ArrowRight") {
      containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onKeyDown={handleKeyDown}
      className={`
        flex overflow-x-auto hide-scrollbar w-full scroller-feather
        snap-x snap-proximity
        pt-[80px] pb-[40px] px-[var(--page-padding)]
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