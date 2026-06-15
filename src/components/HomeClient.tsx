"use client";

import { useMotionValue } from "framer-motion";
import DollyZoomStage from "@/components/DollyZoomStage";
import IntroCard from "@/components/IntroCard";
import BigTypeCard from "@/components/BigTypeCard";
import ColorBlockCard from "@/components/ColorBlockCard";
import HandwrittenCard from "@/components/HandwrittenCard";
import PixelCard from "@/components/PixelCard";
import ContactCard from "@/components/ContactCard";
import Crosshair from "@/components/Crosshair";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function HomeClient() {
  const progress = useMotionValue(0);

  const cards = [
    <IntroCard key="intro" index={0} />,
    <BigTypeCard key="work" caption="Work" bigText="Work" index={1} href="/work" />,
    <BigTypeCard key="papers" caption="Writing" bigText="Papers" index={2} href="/papers" />,
    <PixelCard key="things" caption="Things I Like" index={3} />,
    <HandwrittenCard key="notes" caption="Field Notes" text="Wenlan's Field Notes" index={4} />,
    <ColorBlockCard key="now" caption="Now" shape="wedge" color="var(--accent-orange)" index={5} />,
    <ContactCard key="contact" caption="Say hi" index={6} />,
  ];

  return (
    <main
      id="content"
      className="min-h-screen bg-[var(--bg)] flex flex-col items-center selection:bg-[var(--accent-yellow)] selection:text-[var(--text)]"
    >
      <Crosshair />
      <ScrollIndicator progress={progress} />
      <DollyZoomStage progress={progress}>{cards}</DollyZoomStage>
    </main>
  );
}
