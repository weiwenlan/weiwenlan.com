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
          <IntroCard index={0} />
          <BigTypeCard caption="Work" bigText="Work" index={1} />
          <BigTypeCard caption="Writing" bigText="Papers" index={2} />
          <ColorBlockCard caption="Now" shape="wedge" color="var(--accent-orange)" index={3} />
          <HandwrittenCard caption="Field Notes" text="Wenlan's Field Notes" index={4} />
          <PixelCard caption="Things I Like" index={5} />
        </HorizontalScroller>

        <Manifesto />
      </div>
    </main>
  );
}
