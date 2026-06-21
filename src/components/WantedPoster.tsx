import Image from "next/image";

export default function WantedPoster() {
  return (
    <div className="relative w-56 shrink-0 sm:w-64">
      <span className="absolute -left-1.5 -top-1.5 z-10 h-3 w-3 rounded-full border border-[#8a2e2e] bg-[#c9a35c]" />
      <span className="absolute -right-1.5 -top-1.5 z-10 h-3 w-3 rounded-full border border-[#8a2e2e] bg-[#c9a35c]" />
      <span className="absolute -bottom-1.5 -left-1.5 z-10 h-3 w-3 rounded-full border border-[#8a2e2e] bg-[#c9a35c]" />
      <span className="absolute -bottom-1.5 -right-1.5 z-10 h-3 w-3 rounded-full border border-[#8a2e2e] bg-[#c9a35c]" />

      <div className="-rotate-2 overflow-hidden border-2 border-[#15110c] shadow-[0_12px_36px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:rotate-0">
        <Image
          src="/wanted-poster.png"
          alt="Wanted poster — Full-Stack Software Engineer, self-taught, battle-tested stack"
          width={1024}
          height={1536}
          className="block h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}