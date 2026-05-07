import React from "react";
import HorizontalScroller from "@/components/HorizontalScroller";
import IntroCard from "@/components/IntroCard";
import BigTypeCard from "@/components/BigTypeCard";
import ColorBlockCard from "@/components/ColorBlockCard";
import HandwrittenCard from "@/components/HandwrittenCard";
import PixelCard from "@/components/PixelCard";
import Manifesto from "@/components/Manifesto";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col items-center overflow-x-hidden selection:bg-[var(--accent-yellow)] selection:text-[var(--text)]">
      <div className="w-full">
        <HorizontalScroller>
          <IntroCard />
          <BigTypeCard caption="Work" bigText="Work" />
          <BigTypeCard caption="Writing" bigText="Papers" />
          <ColorBlockCard caption="Now" shape="wedge" color="var(--accent-orange)" />
          <HandwrittenCard caption="Field Notes" text="Wenlan's Field Notes" />
          <PixelCard caption="Things I Like" />
        </HorizontalScroller>
        
        <Manifesto />
      </div>
    </main>
  );
}