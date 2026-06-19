import TomeGate from '@/components/TomeGate';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#15110c] font-sans text-[#e7dcc3] selection:bg-[#c9a35c] selection:text-[#15110c]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(201,163,92,0.12),transparent)]" />

      <main className="mx-auto flex max-w-3xl flex-col px-6 py-16 sm:px-10 sm:py-24">
        <section aria-label="Pendahuluan">
          <div className="relative border border-[#4a3c26] bg-[#1d1710] px-6 py-12 sm:px-12 sm:py-16">
            <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-[#c9a35c]" />
            <span className="pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-[#c9a35c]" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-[#c9a35c]" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-[#c9a35c]" />

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#c9a35c]">
              Archive No. I — Personal Codex
            </p>
            <h1 className="font-serif text-5xl font-semibold tracking-tight text-[#f1e7cf] sm:text-6xl">
              Mediovolio
            </h1>
            <p className="mt-3 font-serif text-lg italic text-[#c9a35c] sm:text-xl">
              A Tome about a Codecrafter named Shimleabyte.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#b9ac92] sm:text-lg">
              Saya developer yang memperlakukan setiap proyek seperti halaman
              yang layak dijilid — kerja yang tenang dan teliti, dibuat untuk
              bertahan lebih lama dari tren yang mengantarkannya. Arsip ini
              menyimpan apa yang sudah saya pelajari, apa yang sudah saya
              bangun, dan cara menghubungi saya.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TomeGate href="/archive" label="Open the Tome" />
              <a
                href="/archive#projects"
                className="inline-flex items-center justify-center border border-[#4a3c26] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#e7dcc3] transition-colors hover:border-[#c9a35c] hover:text-[#c9a35c]"
              >
                View Quests
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#3a2f1f] px-6 py-8 text-center text-xs uppercase tracking-[0.2em] text-[#5c5238] sm:px-10">
        Bound &amp; sealed · Bookfolio © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
