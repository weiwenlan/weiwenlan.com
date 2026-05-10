import React from "react";
import BaseCard from "./BaseCard";

interface HandwrittenCardProps {
  caption: string;
  text: string;
  index?: number;
}

export default function HandwrittenCard({ caption, text, index }: HandwrittenCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="w-full h-full flex items-start justify-start pt-[12%] pl-[8%] pr-[8%]">
        <p
          className="reveal-text text-[var(--accent-red)] text-[clamp(48px,7.5vw,108px)] leading-[0.95] -rotate-2 break-words"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          {text}
        </p>
      </div>
    </BaseCard>
  );
}
