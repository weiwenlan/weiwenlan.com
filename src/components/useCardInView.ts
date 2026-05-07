"use client";

import { useEffect, useRef, useState } from "react";

export function useCardInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.55,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, root: node.closest<HTMLElement>("[data-scroller]") ?? null },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
