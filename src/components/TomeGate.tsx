'use client';

import { useEffect, useRef, useState } from 'react';

type TomeGateProps = {
  targetSelector: string;
  label?: string;
  onOpen?: () => void;
};

const OPEN_DURATION_MS = 1100;
const SCROLL_DELAY_MS = Math.round(OPEN_DURATION_MS * 0.45);
const CLEANUP_DELAY_MS = OPEN_DURATION_MS + 150;

export default function TomeGate({
  targetSelector,
  label = 'Open the Tome',
  onOpen,
}: TomeGateProps) {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  };

  useEffect(() => clearTimeouts, []);

  const handleOpen = () => {
    onOpen?.();

    const target = document.querySelector(targetSelector);
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !target) {
      target?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
      return;
    }

    clearTimeouts();
    setIsOpen(false);
    setIsActive(true);

    requestAnimationFrame(() => setIsOpen(true));

    const scrollTimeout = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, SCROLL_DELAY_MS);

    const hideTimeout = window.setTimeout(() => {
      setIsActive(false);
      setIsOpen(false);
    }, CLEANUP_DELAY_MS);

    timeoutsRef.current.push(scrollTimeout, hideTimeout);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="inline-flex items-center justify-center border border-[#c9a35c] bg-[#c9a35c] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#15110c] transition-colors hover:bg-[#e0bc7a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a35c]"
      >
        {label}
      </button>

      {isActive && (
        <div aria-hidden="true" className="fixed inset-0 z-50 flex pointer-events-none">
          {/* left gate panel */}
          <div
            className={`relative h-full w-1/2 bg-[#1d1710] transition-transform duration-1100 ease-in-out ${
              isOpen ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <span className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-[#c9a35c] to-transparent" />
            <div className="absolute inset-y-0 right-6 flex flex-col items-center justify-center gap-12 sm:right-10">
              <span className="h-2 w-2 rounded-full bg-[#c9a35c]" />
              <span className="h-2 w-2 rounded-full bg-[#c9a35c]" />
              <span className="h-2 w-2 rounded-full bg-[#c9a35c]" />
            </div>
          </div>

          {/* right gate panel */}
          <div
            className={`relative h-full w-1/2 bg-[#1d1710] transition-transform duration-1100 ease-in-out ${
              isOpen ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            <span className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-[#c9a35c] to-transparent" />
            <div className="absolute inset-y-0 left-6 flex flex-col items-center justify-center gap-12 sm:left-10">
              <span className="h-2 w-2 rounded-full bg-[#c9a35c]" />
              <span className="h-2 w-2 rounded-full bg-[#c9a35c]" />
              <span className="h-2 w-2 rounded-full bg-[#c9a35c]" />
            </div>
          </div>

          {/* center seal, fades as the gate splits */}
          <div
            className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#c9a35c] bg-[#15110c] transition-opacity duration-3000 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="font-serif text-2xl text-[#c9a35c]">Shimleabyte</span>
          </div>
        </div>
      )}
    </>
  );
}