'use client';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseValue(value: string): { num: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export function AnimatedCounter({ value, className, duration = 1400 }: AnimatedCounterProps) {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !parsed) return;

    let rafId: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(eased * parsed!.num)}${parsed!.suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, duration, parsed?.num, parsed?.suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}