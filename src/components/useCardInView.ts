"use client";

import { useEffect, useRef, useState } from "react";

interface InViewState {
  inView: boolean;
  ratio: number;
}

export function useCardInView<T extends HTMLElement = HTMLDivElement>(
  inViewThreshold = 0.2,
) {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<InViewState>({ inView: false, ratio: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState({
          inView: entry.intersectionRatio >= inViewThreshold,
          ratio: entry.intersectionRatio,
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        root: null,
      },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inViewThreshold]);

  return { ref, ...state };
}
