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
      }}
      className={`
        card-hoverable card stagger-item
        relative shrink-0
        w-[var(--card-w)] h-[var(--card-h)]
        bg-[var(--card-bg)]
        border border-[var(--border)]
        overflow-hidden
        flex flex-col
        ${className}
      `}
    >
      {caption && (
        <div className="card-caption absolute top-6 left-6 z-10 text-[12px] font-mono uppercase tracking-widest">
          {caption}
        </div>
      )}
      {children}
    </div>
  );
}
