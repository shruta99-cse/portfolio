import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 900 }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse target value and formatting (e.g., "8.60", "3+", "100%", "89.03%")
    const numericMatch = String(value).match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numericMatch[0]);
    const isDecimal = numericMatch[0].includes('.');
    const decimalPlaces = isDecimal ? numericMatch[0].split('.')[1].length : 0;
    const prefix = String(value).substring(0, numericMatch.index);
    const suffix = String(value).substring(numericMatch.index + numericMatch[0].length);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = easedProgress * targetNumber;

            setDisplayValue(
              `${prefix}${currentNum.toFixed(decimalPlaces)}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
