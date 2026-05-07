import React from "react";
import BaseCard from "./BaseCard";

interface PixelCardProps {
  caption: string;
  index?: number;
}

const MOUNTAIN_ROWS = [10, 30, 50, 70, 90, 110, 130];

export default function PixelCard({ caption, index }: PixelCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="relative w-[120px] h-[100px] flex flex-col items-center justify-end"
          style={{ "--pixel-color": "var(--accent-blue)" } as React.CSSProperties}
        >
          {MOUNTAIN_ROWS.map((width) => (
            <div key={width} className="flex w-full justify-center">
              <div style={{ width, height: 10 }} className="bg-[var(--pixel-color)]" />
            </div>
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
