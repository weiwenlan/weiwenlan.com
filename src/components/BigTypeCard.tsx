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
        <h2 className="reveal-text font-sans font-normal text-[clamp(280px,50vw,720px)] leading-[0.8] text-[var(--text)] whitespace-nowrap">
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
      className="contents cursor-pointer focus-visible:outline-none [&>*]:focus-visible:outline [&>*]:focus-visible:outline-2 [&>*]:focus-visible:outline-[var(--focus-ring)] [&>*]:focus-visible:outline-offset-[-4px]"
    >
      {card}
    </Link>
  );
}
