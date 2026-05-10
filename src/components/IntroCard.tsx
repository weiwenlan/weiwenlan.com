import React from "react";
import BaseCard from "./BaseCard";

interface IntroCardProps {
  index?: number;
}

const LINES: { text: string; muted?: boolean; offset?: boolean; lang?: string }[] = [
  { text: "Wenlan Wei" },
  { text: "魏文澜", muted: true, offset: true, lang: "zh-Hans" },
  { text: "rolls" },
  { text: "one boulder", muted: true, offset: true },
  { text: "at a time" },
];

export default function IntroCard({ index = 0 }: IntroCardProps) {
  return (
    <BaseCard index={index}>
      <div className="reveal-shape absolute top-0 -right-[8%] h-full aspect-square rounded-full bg-[var(--accent-yellow)]" />

      <div className="relative z-[var(--z-content)] w-full h-full flex flex-col justify-center px-[5.3%] font-sans font-semibold tracking-tight text-[clamp(56px,8vw,120px)] leading-[1.1]">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={`${line.muted ? "text-[var(--text-muted)]" : ""} ${line.offset ? "ml-[8%]" : ""}`}
            style={{ margin: 0 }}
          >
            <span
              className="bloom-in"
              style={{ ["--bloom-delay" as string]: `${i * 110}ms` }}
              lang={line.lang}
            >
              {line.text}
            </span>
          </p>
        ))}
      </div>
    </BaseCard>
  );
}
