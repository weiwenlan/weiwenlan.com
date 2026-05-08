import React from "react";
import BaseCard from "./BaseCard";

interface IntroCardProps {
  index?: number;
}

export default function IntroCard({ index = 0 }: IntroCardProps) {
  return (
    <BaseCard index={index}>
      <div className="reveal-shape absolute top-0 right-0 h-full aspect-square rounded-full bg-[var(--accent-yellow)]" />

      <div className="reveal-text relative z-10 w-full h-full flex flex-col justify-center px-[5.3%] font-sans font-semibold tracking-tight text-[clamp(44px,6.6vw,100px)] leading-[1.06]">
        <div className="ml-0">Wenlan Wei</div>
        <div className="ml-[5.3%] text-[var(--text-muted)]">is a software</div>
        <div className="ml-0">engineer</div>
        <div className="ml-[5.3%] text-[var(--text-muted)]">at Microsoft</div>
        <div className="ml-0">based in Seattle</div>
      </div>
    </BaseCard>
  );
}
