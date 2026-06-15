"use client";

import React, { ReactNode, CSSProperties } from "react";
import { useCardInView } from "./useCardInView";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  caption?: string;
  index?: number;
  style?: CSSProperties;
}

export default function BaseCard({
  children,
  className = "",
  caption,
  index = 0,
  style,
}: BaseCardProps) {
  const { ref, inView } = useCardInView<HTMLDivElement>();
  const delay = `${index * 60}ms`;
  
  return (
    <div
      ref={ref}
      data-in-view={inView ? "true" : "false"}
      style={{
        ...style,
        ["--delay" as string]: delay,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        contain: "layout",
      }}
      className={`
        card-hoverable card stagger-item
        relative shrink-0
        w-[var(--card-w)] h-[var(--card-h)]
        ${className}
      `}
    >
      {caption && (
        <div className="card-caption absolute -top-8 left-0 z-[var(--z-content)] text-[13px] font-mono">
          {caption}
        </div>
      )}
      <div className="relative h-full w-full overflow-hidden bg-[var(--card-bg)] flex flex-col">
        {children}
      </div>
    </div>
  );
}
