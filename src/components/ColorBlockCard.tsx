import React from "react";
import BaseCard from "./BaseCard";

interface ColorBlockCardProps {
  caption: string;
  shape: "circle" | "wedge" | "square";
  color: string;
  index?: number;
}

export default function ColorBlockCard({ caption, shape, color, index }: ColorBlockCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="relative w-full h-full flex items-center justify-center">
        {shape === "circle" && (
          <div
            className="absolute -right-20 -bottom-20 w-[320px] h-[320px] rounded-full"
            style={{ backgroundColor: color }}
          />
        )}
        {shape === "square" && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rotate-12"
            style={{ backgroundColor: color }}
          />
        )}
        {shape === "wedge" && (
          <div
            className="absolute -left-10 bottom-10 w-[280px] h-[280px]"
            style={{
              backgroundColor: color,
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />
        )}
      </div>
    </BaseCard>
  );
}
