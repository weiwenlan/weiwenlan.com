import React from "react";

export default function Manifesto() {
  const lines = [
    "Make it fast.",
    "Make it beautiful.",
    "Make it consistent.",
    "Make it carefully.",
    "Make it timeless.",
    "Make it soulful.",
    "Make it.",
  ];

  return (
    <section className="w-full pt-[80px] pb-[120px] px-[var(--page-padding)] flex justify-center">
      <div className="w-full max-w-[600px] flex flex-col gap-2">
        {lines.map((line, index) => (
          <span 
            key={index} 
            className="text-[20px] leading-[1.6] text-[var(--text-muted)]"
          >
            {line}
          </span>
        ))}
      </div>
    </section>
  );
}