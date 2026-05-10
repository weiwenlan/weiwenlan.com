import React from "react";
import BaseCard from "./BaseCard";

interface IntroCardProps {
  index?: number;
}

export default function IntroCard({ index = 0 }: IntroCardProps) {
  return (
    <BaseCard index={index}>
      <div className="reveal-shape absolute top-0 -right-[8%] h-full aspect-square rounded-full bg-[var(--accent-yellow)]" />

      <div className="reveal-text relative z-10 w-full h-full flex flex-col justify-center px-[5.3%] font-sans font-semibold tracking-tight text-[clamp(56px,8vw,120px)] leading-[1.1]">
        <div>Wenlan Wei</div>
        <div lang="zh-Hans" className="text-[var(--text-muted)]">魏文澜</div>
        <div>rolls</div>
        <div className="text-[var(--text-muted)]">one boulder</div>
        <div>at a time</div>
      </div>
    </BaseCard>
  );
}
