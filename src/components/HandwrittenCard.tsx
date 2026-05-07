import React from "react";
import BaseCard from "./BaseCard";

interface HandwrittenCardProps {
  caption: string;
  text: string;
}

export default function HandwrittenCard({ caption, text }: HandwrittenCardProps) {
  return (
    <BaseCard caption={caption}>
      <div className="w-full h-full flex items-center justify-center p-8">
        <p 
          className="text-[var(--accent-red)] text-[42px] leading-tight text-center -rotate-2"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          {text}
        </p>
      </div>
    </BaseCard>
  );
}