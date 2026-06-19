'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import GateOverlay from './GateOverlay';

const OPEN_DURATION_MS = 850;
const PAINT_GUARD_MS = 30;
const CLEANUP_MS = OPEN_DURATION_MS + 180;

export default function ArchiveEntrance() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEntering = searchParams.get('entering') === 'true';

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(isEntering);

  useEffect(() => {
    if (!isEntering) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      router.replace('/archive', { scroll: false });
      return;
    }

    const openTimeout = window.setTimeout(() => {
      setIsOpen(true);
    }, PAINT_GUARD_MS);
    const cleanupTimeout = window.setTimeout(() => {
      setIsActive(false);
      router.replace('/archive', { scroll: false });
    }, CLEANUP_MS);

    return () => {
      window.clearTimeout(openTimeout);
      window.clearTimeout(cleanupTimeout);
    };
  }, [isEntering, router]);

  if (!isActive) return null;

  return <GateOverlay isOpen={isOpen} durationMs={OPEN_DURATION_MS} />;
}