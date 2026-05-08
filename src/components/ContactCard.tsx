import React from "react";
import BaseCard from "./BaseCard";

interface ContactCardProps {
  caption?: string;
  index?: number;
}

interface ContactLine {
  href: string;
  label: string;
  muted?: boolean;
  indent?: boolean;
}

const LINES: ContactLine[] = [
  { href: "mailto:weiwenlan1999@gmail.com", label: "Email", muted: false, indent: false },
  { href: "https://www.linkedin.com/in/wenlanwei/", label: "LinkedIn", muted: true, indent: true },
  { href: "https://github.com/weiwenlan", label: "GitHub", muted: false, indent: false },
  { href: "https://scholar.google.com/citations?user=fa7O7DAAAAAJ", label: "Scholar", muted: true, indent: true },
];

export default function ContactCard({ caption = "Say hi", index }: ContactCardProps) {
  return (
    <BaseCard caption={caption} index={index}>
      <div className="reveal-text relative z-10 w-full h-full flex flex-col justify-center px-[5.3%] font-sans font-semibold tracking-tight text-[clamp(44px,6.6vw,100px)] leading-[1.25]">
        {LINES.map((line) => {
          const external = line.href.startsWith("http");
          return (
            <a
              key={line.label}
              href={line.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={`group flex items-baseline gap-[0.3em] transition-colors duration-150 hover:text-[var(--accent-red)] ${
                line.indent ? "ml-[5.3%]" : "ml-0"
              } ${line.muted ? "text-[var(--text-muted)]" : ""}`}
            >
              <span>{line.label}</span>
              <span
                aria-hidden
                className="text-[0.4em] font-mono font-medium tracking-normal opacity-0 -translate-x-2 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0"
              >
                →
              </span>
            </a>
          );
        })}
      </div>
    </BaseCard>
  );
}
