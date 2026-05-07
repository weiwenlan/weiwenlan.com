import React from "react";
import BaseCard from "./BaseCard";

export default function IntroCard() {
  const captionNode = (
    <div className="absolute top-4 left-4 z-10 flex items-end gap-[2px] h-3">
      {[4, 8, 5, 10, 6, 12, 7, 4, 9, 5, 11, 4, 7, 5, 9, 6, 4, 8, 5, 10].map((h, i) => (
        <div key={i} className="w-[2px] bg-[var(--text-muted)] opacity-50" style={{ height: `${h}px` }} />
      ))}
    </div>
  );

  return (
    <BaseCard>
      {captionNode}
      
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[var(--accent-yellow)]" />
      
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 font-sans font-semibold tracking-tight text-[32px] leading-[1.1]">
        <div className="ml-0">Wenlan Wei</div>
        <div className="ml-8 text-[var(--text-muted)]">is a software</div>
        <div className="ml-0">engineer</div>
        <div className="ml-12 text-[var(--text-muted)]">at Microsoft</div>
        <div className="ml-4">based in Seattle</div>
      </div>
    </BaseCard>
  );
}