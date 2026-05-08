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
        <div className="ml-[5.3%] text-[var(--text-muted)]">魏文澜</div>
        <div className="ml-0">rolls</div>
        <div className="ml-[5.3%] text-[var(--text-muted)]">one boulder</div>
        <div className="ml-0">at a time</div>
      </div>
    </BaseCard>
  );
}
