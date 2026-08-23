import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-left' | 'fade-right'
  staggerIndex = 0,
  staggerStep = 60, // ms per card
  delay = 0,
  className = '',
  as = 'div'
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver is not supported or reduced motion is enabled
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Animate only ONCE
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = as;
  const totalDelay = delay + staggerIndex * staggerStep;

  const animationClass =
    animation === 'fade-left'
      ? 'reveal-fade-left'
      : animation === 'fade-right'
      ? 'reveal-fade-right'
      : 'reveal-fade-up';

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: totalDelay > 0 ? `${totalDelay}ms` : undefined }}
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
