import React, { ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  caption?: string;
}

export default function BaseCard({ children, className = "", caption }: BaseCardProps) {
  return (
    <div
      className={`
        relative shrink-0 snap-start
        w-[var(--card-w)] h-[var(--card-h)]
        bg-[var(--card-bg)]
        border border-[var(--border)]
        overflow-hidden
        flex flex-col
        ${className}
      `}
    >
      {caption && (
        <div className="absolute top-4 left-4 z-10 text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest">
          {caption}
        </div>
      )}
      {children}
    </div>
  );
}