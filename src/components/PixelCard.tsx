import React from "react";
import BaseCard from "./BaseCard";

interface PixelCardProps {
  caption: string;
}

export default function PixelCard({ caption }: PixelCardProps) {
  return (
    <BaseCard caption={caption}>
      <div className="w-full h-full flex items-center justify-center">
        {/* CSS Pixel Art Mountain */}
        <div className="relative w-[120px] h-[100px] flex flex-col items-center justify-end" style={{ "--pixel-color": "var(--accent-blue)" } as React.CSSProperties}>
          <div className="flex w-full justify-center">
            <div className="w-[10px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[30px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[50px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[70px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[90px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[110px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[130px] h-[10px] bg-[var(--pixel-color)]" />
          </div>
        </div>
      </div>
    </BaseCard>
  );
}