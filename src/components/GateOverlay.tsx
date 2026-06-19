type GateOverlayProps = {
  isOpen: boolean;
  durationMs: number;
};

export default function GateOverlay({ isOpen, durationMs }: GateOverlayProps) {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-50 flex pointer-events-none">
      <div
        style={{ transitionDuration: `${durationMs}ms` }}
        className={`relative h-full w-1/2 bg-[#1d1710] transition-transform ease-in-out ${
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

      <div
        style={{ transitionDuration: `${durationMs}ms` }}
        className={`relative h-full w-1/2 bg-[#1d1710] transition-transform ease-in-out ${
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

      <div
        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#c9a35c] bg-[#15110c] shadow-[0_0_24px_rgba(201,163,92,0.15)]">
          <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-[#8a2e2e]" />

          <div className="absolute inset-2 rounded-full border border-[#c9a35c]/40" />

          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <span
              key={angle}
              className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[#c9a35c]/70"
              style={{ transform: `rotate(${angle}deg) translateY(-34px)` }}
            />
          ))}

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative h-8 w-8 text-[#c9a35c]"
          >
            <path d="M12 5.2c-2.1-1.4-4.7-1.9-7.3-1.7v13.5c2.6-.2 5.2.3 7.3 1.7 2.1-1.4 4.7-1.9 7.3-1.7V3.5c-2.6-.2-5.2.3-7.3 1.7Z" />
            <path d="M12 5.2v13.5" />
          </svg>
        </div>

        <p className="max-w-36 text-center font-serif text-[10px] uppercase leading-tight tracking-[0.2em] text-[#c9a35c]">
          Tome of Codedrafting
        </p>
      </div>
    </div>
  );
}