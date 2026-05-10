import React from "react";
import BaseCard from "./BaseCard";

interface PixelCardProps {
  caption: string;
  index?: number;
}

const MOUNTAIN_ROWS = [1, 3, 5, 7, 9, 11, 13];

export default function PixelCard({ caption, index }: PixelCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="reveal-shape relative flex flex-col items-center justify-end"
          style={{ "--pixel-color": "var(--accent-blue)", "--pixel": "clamp(16px, 3.5vw, 48px)" } as React.CSSProperties}
        >
          {MOUNTAIN_ROWS.map((multiplier) => (
            <div key={multiplier} className="flex w-full justify-center">
              <div
                className="bg-[var(--pixel-color)]"
                style={{
                  width: `calc(var(--pixel) * ${multiplier})`,
                  height: "var(--pixel)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
