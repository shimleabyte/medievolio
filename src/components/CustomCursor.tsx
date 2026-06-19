'use client';

import { useEffect, useRef, useState } from 'react';

const EASE = 0.2;
const SPARK_INTERVAL_MS = 90;
const SPARK_MIN_DISTANCE = 6;
const SPARK_POOL_SIZE = 10;
const NIB_OFFSET = { x: 7, y: 25 };
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

export default function CustomCursor() {
  const [isActive, setIsActive] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const sparksContainerRef = useRef<HTMLDivElement>(null);
  const sparkIndexRef = useRef(0);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const lastSparkPos = useRef({ x: 0, y: 0 });
  const lastSparkTime = useRef(0);
  const isHoveringRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const initFrame = requestAnimationFrame(() => {
      setIsActive(true);
      document.documentElement.classList.add('has-custom-cursor');
    });

    const spawnSpark = (x: number, y: number) => {
      const container = sparksContainerRef.current;
      if (!container) return;

      const spark = container.children[
        sparkIndexRef.current % SPARK_POOL_SIZE
      ] as HTMLElement;
      sparkIndexRef.current += 1;

      const jitterX = (Math.random() - 0.5) * 10;
      const jitterY = (Math.random() - 0.5) * 10;
      const base = `translate3d(${x + jitterX}px, ${y + jitterY}px, 0)`;

      spark.style.transform = base;
      spark.animate(
        [
          { opacity: 1, transform: `${base} scale(1)` },
          {
            opacity: 0,
            transform: `${base} translateY(-${10 + Math.random() * 10}px) scale(0.3)`,
          },
        ],
        { duration: 550, easing: 'ease-out' }
      );
    };

    const handlePointerMove = (e: PointerEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as Element | null;
      isHoveringRef.current = Boolean(target?.closest(INTERACTIVE_SELECTOR));

      const dx = e.clientX - lastSparkPos.current.x;
      const dy = e.clientY - lastSparkPos.current.y;
      const distance = Math.hypot(dx, dy);
      const now = performance.now();

      if (
        distance > SPARK_MIN_DISTANCE &&
        now - lastSparkTime.current > SPARK_INTERVAL_MS
      ) {
        spawnSpark(e.clientX, e.clientY);
        lastSparkPos.current = { x: e.clientX, y: e.clientY };
        lastSparkTime.current = now;
      }
    };

    const tick = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * EASE;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * EASE;

      const el = cursorRef.current;
      if (el) {
        const scale = isHoveringRef.current ? 1.4 : 1;
        el.style.transform = `translate3d(${currentPos.current.x - NIB_OFFSET.x}px, ${currentPos.current.y - NIB_OFFSET.y}px, 0) scale(${scale})`;
        el.style.color = isHoveringRef.current ? '#f1e7cf' : '';
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handlePointerMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(initFrame);
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!isActive) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-100 text-[#c9a35c] transition-[color] duration-200 will-change-transform"
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_6px_rgba(201,163,92,0.45)]"
        >
          <path d="M27 5c-7 0-15 4-19 11-2 3.4-3 7-3 10.2 2-.6 4.6-2 6.6-4C15.5 18 19 13.5 23 10l4-5Z" />
          <path d="M9.6 22.2 23 10" />
          <path d="M16 19l3-3" />
          <path d="M12.4 22.6l3-3" />
        </svg>
        <span className="absolute left-1.5 top-6 h-1 w-1 rounded-full bg-[#8a2e2e]" />
      </div>

      <div ref={sparksContainerRef} className="pointer-events-none fixed left-0 top-0 z-99">
        {Array.from({ length: SPARK_POOL_SIZE }).map((_, i) => (
          <span
            key={i}
            className="absolute left-0 top-0 h-1 w-1 rounded-full bg-[#c9a35c] opacity-0"
          />
        ))}
      </div>
    </>
  );
}