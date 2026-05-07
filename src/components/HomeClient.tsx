"use client";

import { useState } from "react";
import HorizontalScroller from "@/components/HorizontalScroller";
import IntroCard from "@/components/IntroCard";
import BigTypeCard from "@/components/BigTypeCard";
import ColorBlockCard from "@/components/ColorBlockCard";
import HandwrittenCard from "@/components/HandwrittenCard";
import PixelCard from "@/components/PixelCard";
import Manifesto from "@/components/Manifesto";
import ScrollIndicator from "@/components/ScrollIndicator";

const TOTAL_CARDS = 6;

export default function HomeClient() {
  const [progress, setProgress] = useState(0);

  return (
    <main className="min-h-screen bg-[var(--bg)] flex flex-col items-center overflow-x-hidden selection:bg-[var(--accent-yellow)] selection:text-[var(--text)]">
      <ScrollIndicator totalSteps={TOTAL_CARDS} currentProgress={progress} />
      <div className="w-full">
        <HorizontalScroller onProgress={setProgress}>
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
