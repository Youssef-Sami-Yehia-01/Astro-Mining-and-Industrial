"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parseValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    target: Number(match[1]),
    suffix: match[2] ?? ""
  };
}

export default function AnimatedStatValue({ duration = 1400, value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.55
  });
  const parsedValue = useMemo(() => parseValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(() => {
    if (!parsedValue) {
      return value;
    }

    return `0${parsedValue.suffix}`;
  });

  useEffect(() => {
    if (!parsedValue || !isInView) {
      return undefined;
    }

    let animationFrame = 0;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.round(parsedValue.target * easedProgress);

      setDisplayValue(`${currentValue}${parsedValue.suffix}`);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, isInView, parsedValue]);

  return <strong ref={ref}>{parsedValue ? displayValue : value}</strong>;
}
