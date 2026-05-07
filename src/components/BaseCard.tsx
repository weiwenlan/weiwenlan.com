import React, { ReactNode, CSSProperties } from "react";

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
  const delay = `${index * 60}ms`;
  return (
    <div
      style={{ ...style, ["--delay" as string]: delay }}
      className={`
        card-hoverable stagger-item
        relative shrink-0 snap-center
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
