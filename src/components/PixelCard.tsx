import React from "react";
import BaseCard from "./BaseCard";

interface PixelCardProps {
  caption: string;
  index?: number;
}

const MOUNTAIN_ROWS = [1, 3, 5, 7, 9, 11, 13];
const THINGS = ["Cameras", "Boulders", "Systems", "Road trips"];

export default function PixelCard({ caption, index }: PixelCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute left-8 bottom-8 z-[var(--z-content)] grid grid-cols-2 gap-x-10 gap-y-3 font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
          {THINGS.map((thing) => (
            <span key={thing}>{thing}</span>
          ))}
        </div>
        <div
          className="reveal-shape absolute right-[9%] top-1/2 -translate-y-1/2 flex flex-col items-center justify-end"
          style={{ "--pixel-color": "var(--accent-blue)", "--pixel": "clamp(14px, 3vw, 42px)" } as React.CSSProperties}
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
