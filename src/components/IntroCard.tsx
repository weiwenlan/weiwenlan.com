import React from "react";
import BaseCard from "./BaseCard";

interface IntroCardProps {
  index?: number;
}

export default function IntroCard({ index = 0 }: IntroCardProps) {
  return (
    <BaseCard index={index}>
      <div className="reveal-shape absolute top-[8%] left-[50%] -translate-x-1/2 w-[clamp(360px,42vw,620px)] aspect-square rounded-full bg-[var(--accent-yellow)]" />

      <div className="reveal-text relative z-10 w-full h-full flex flex-col justify-center px-[8%] font-sans font-semibold tracking-tight text-[clamp(40px,5.5vw,84px)] leading-[1.05]">
        <div className="ml-0">Wenlan Wei</div>
        <div className="ml-[8%] text-[var(--text-muted)]">is a software</div>
        <div className="ml-0">engineer</div>
        <div className="ml-[12%] text-[var(--text-muted)]">at Microsoft</div>
        <div className="ml-[4%]">based in Seattle</div>
      </div>
    </BaseCard>
  );
}
