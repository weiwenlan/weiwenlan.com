import React from "react";
import Link from "next/link";
import BaseCard from "./BaseCard";

interface BigTypeCardProps {
  caption: string;
  bigText: string;
  index?: number;
  href?: string;
}

export default function BigTypeCard({ caption, bigText, index, href }: BigTypeCardProps) {
  const card = (
    <BaseCard caption={caption} index={index}>
      <div className="w-full h-full flex flex-col justify-end pb-12 pl-12">
        <h2 className="reveal-text font-sans font-bold text-[clamp(160px,26vw,420px)] leading-[0.8] tracking-tighter text-[var(--text)] whitespace-nowrap">
          {bigText}
        </h2>
      </div>
    </BaseCard>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      aria-label={caption}
      className="contents cursor-pointer"
    >
      {card}
    </Link>
  );
}
