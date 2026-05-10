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
      <div className="w-full h-full flex flex-col justify-end pb-12 pl-12 overflow-hidden">
        <h2 className="reveal-text font-sans font-normal text-[clamp(180px,28vw,420px)] leading-[0.8] text-[var(--text)] whitespace-nowrap">
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
      className="block cursor-pointer focus-visible:outline-none focus-visible:[&_>div]:outline focus-visible:[&_>div]:outline-2 focus-visible:[&_>div]:outline-[var(--focus-ring)] focus-visible:[&_>div]:outline-offset-[-4px]"
    >
      {card}
    </Link>
  );
}
