import React from "react";
import BaseCard from "./BaseCard";

interface BigTypeCardProps {
  caption: string;
  bigText: string;
}

export default function BigTypeCard({ caption, bigText }: BigTypeCardProps) {
  return (
    <BaseCard caption={caption}>
      <div className="w-full h-full flex flex-col justify-end pb-8 pl-6">
        <h2 className="font-sans font-bold text-[160px] leading-[0.8] tracking-tighter text-[var(--text)] whitespace-nowrap">
          {bigText}
        </h2>
      </div>
    </BaseCard>
  );
}