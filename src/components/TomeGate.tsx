'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import GateOverlay from './GateOverlay';

type TomeGateProps = {
  href: string;
  label?: string;
};

const CLOSE_DURATION_MS = 650;
const HOLD_MS = 180;

export default function TomeGate({
  href,
  label = 'Open the Tome',
}: TomeGateProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  };

  useEffect(() => {
    router.prefetch(`${href}?entering=true`);
  }, [router, href]);

  useEffect(() => {
    return () => clearTimeouts();
  }, []);

  const handleOpen = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      router.push(href);
      return;
    }

    clearTimeouts();
    setIsActive(true);
    setIsClosed(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsClosed(true));
    });

    const navigateTimeout = window.setTimeout(() => {
      router.push(`${href}?entering=true`);
    }, CLOSE_DURATION_MS + HOLD_MS);

    timeoutsRef.current.push(navigateTimeout);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="inline-flex items-center justify-center border border-[#c9a35c] bg-[#c9a35c] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#15110c] transition-colors hover:bg-[#e0bc7a] focus-visible:ring-2 focus-visible:ring-[#c9a35c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15110c]"
      >
        {label}
      </button>

      {isActive && (
        <GateOverlay
          isOpen={!isClosed}
          durationMs={CLOSE_DURATION_MS}
        />
      )}
    </>
  );
}