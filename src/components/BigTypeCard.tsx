import React from "react";
import BaseCard from "./BaseCard";

interface BigTypeCardProps {
  caption: string;
  bigText: string;
  index?: number;
}

export default function BigTypeCard({ caption, bigText, index }: BigTypeCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="w-full h-full flex flex-col justify-end pb-12 pl-12">
        <h2 className="font-sans font-bold text-[clamp(160px,26vw,420px)] leading-[0.8] tracking-tighter text-[var(--text)] whitespace-nowrap">
          {bigText}
        </h2>
      </div>
    </BaseCard>
  );
}
