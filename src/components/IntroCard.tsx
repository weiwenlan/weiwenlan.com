import React from "react";
import BaseCard from "./BaseCard";

const BAR_HEIGHTS = [4, 8, 5, 10, 6, 12, 7, 4, 9, 5, 11, 4, 7, 5, 9, 6, 4, 8, 5, 10];
const BAR_DELAYS = [0, 120, 240, 80, 360, 60, 200, 300, 140, 40, 280, 180, 100, 320, 220, 160, 260, 20, 340, 380];

interface IntroCardProps {
  index?: number;
}

export default function IntroCard({ index = 0 }: IntroCardProps) {
  return (
    <BaseCard index={index}>
      <div className="card-caption absolute top-4 left-4 z-10 flex items-end gap-[2px] h-3">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="wave-bar w-[2px] bg-current opacity-60"
            style={{
              height: `${h}px`,
              ["--bar-delay" as string]: `${BAR_DELAYS[i]}ms`,
            }}
          />
        ))}
      </div>

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
