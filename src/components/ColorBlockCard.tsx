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
            className="reveal-shape absolute -right-[8%] -bottom-[12%] w-[60%] aspect-square rounded-full"
            style={{ backgroundColor: color }}
          />
        )}
        {shape === "square" && (
          <div
            className="reveal-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-square rotate-12"
            style={{ backgroundColor: color }}
          />
        )}
        {shape === "wedge" && (
          <div
            className="reveal-shape absolute -left-[4%] bottom-[8%] w-[55%] aspect-square"
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
