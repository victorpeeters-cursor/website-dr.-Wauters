'use client';

import { useState, useEffect } from 'react';

export function useScrollGate(elementId: string): boolean {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Element has left the viewport going upward = user scrolled past it
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            setHasScrolledPast(true);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementId]);

  return hasScrolledPast;
}
