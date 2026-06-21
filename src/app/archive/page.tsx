import { Suspense } from 'react';
import Link from 'next/link';
import ArchiveEntrance from '@/components/ArchiveEntrance';
import WantedPoster from '@/components/WantedPoster';

export default function Archive() {
  const skillCategories = [
    {
      label: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Go'],
    },
    {
      label: 'ORM',
      items: ['Prisma'],
    },
    {
      label: 'Authentication',
      items: ['JWT', 'Session'],
    },
    {
      label: 'Deployment',
      items: ['Vercel', 'Railway'],
    },
    {
      label: 'Tooling',
      items: ['Bruno', 'Beekeeper Studio'],
    },
  ];

  const quests = [
    {
      title: "The Merchant's Ledger",
      desc: 'Sistem inventaris dan invoicing full-stack untuk guild dagang kecil, dengan pelacakan stok real-time.',
      tags: ['Next.js', 'Postgres', 'Stripe'],
    },
    {
      title: "Cartographer's Atlas",
      desc: 'Alat peta interaktif untuk memetakan rute dan wilayah, dirender dengan custom canvas layers.',
      tags: ['React', 'Canvas', 'Node.js'],
    },
    {
      title: 'The Town Crier',
      desc: 'CMS ringan dan mesin newsletter untuk penerbit kecil yang ingin punya percetakan sendiri.',
      tags: ['TypeScript', 'Next.js', 'Resend'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#15110c] font-sans text-[#e7dcc3] selection:bg-[#c9a35c] selection:text-[#15110c]">
      <Suspense fallback={null}>
        <ArchiveEntrance />
      </Suspense>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(201,163,92,0.12),transparent)]" />

      <main className="mx-auto flex max-w-3xl flex-col gap-20 px-6 py-16 sm:gap-24 sm:px-10 sm:py-24">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-wide text-[#8a8169] transition-colors hover:text-[#c9a35c]"
        >
          ← Close the Tome
        </Link>

        <section id="about" aria-labelledby="about-heading" className="space-y-8">
          <header className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter I</span>
            <h2 id="about-heading" className="font-serif text-2xl text-[#f1e7cf]">
              The Wanted One
            </h2>
            <span className="h-px flex-1 bg-[#3a2f1f]" />
          </header>

          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <WantedPoster />

            <div className="max-w-md space-y-4 text-sm leading-relaxed text-[#b9ac92] sm:text-base">
              <p>
                Karena gua <span className="text-[#c9a35c]">self-taught</span>,
                fokus cari kerja, dan kerja modal{' '}
                <span className="text-[#c9a35c]">laptop kentang</span> —
              </p>
              <p>
                Maka gua pegang stack yang ringan, battle-tested, dan cukup
                buat bikin aplikasi yang benar-benar dipakai orang. Gak
                neko-neko, gak ngejar yang lagi tren doang.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="space-y-6">
          <header className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter II</span>
            <h2 id="skills-heading" className="font-serif text-2xl text-[#f1e7cf]">
              Tools of the Craft
            </h2>
            <span className="h-px flex-1 bg-[#3a2f1f]" />
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="border border-[#4a3c26] bg-[#1d1710] p-4">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a2e2e]">
                  {cat.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="border border-[#4a3c26] px-3 py-1 text-sm text-[#d8cba9]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="space-y-6">
          <header className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter III</span>
            <h2 id="projects-heading" className="font-serif text-2xl text-[#f1e7cf]">
              Quests Completed
            </h2>
            <span className="h-px flex-1 bg-[#3a2f1f]" />
          </header>
          <div className="grid gap-5 sm:grid-cols-2">
            {quests.map((q) => (
              <article key={q.title} className="border border-[#4a3c26] bg-[#1d1710] p-5">
                <h3 className="font-serif text-lg text-[#f1e7cf]">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b9ac92]">{q.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {q.tags.map((t) => (
                    <li key={t} className="text-xs uppercase tracking-wide text-[#c9a35c]">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="space-y-6">
          <header className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter IV</span>
            <h2 id="contact-heading" className="font-serif text-2xl text-[#f1e7cf]">
              Send a Raven
            </h2>
            <span className="h-px flex-1 bg-[#3a2f1f]" />
          </header>
          <p className="max-w-md text-sm leading-relaxed text-[#b9ac92]">
            Untuk kolaborasi, komisi, atau pertanyaan seputar arsip ini, pesan
            selalu menemukan jalannya.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block border-b border-[#c9a35c] text-[#c9a35c] transition-colors hover:text-[#e0bc7a]"
          >
            hello@example.com
          </a>
        </section>
      </main>

      <footer className="border-t border-[#3a2f1f] px-6 py-8 text-center text-xs uppercase tracking-[0.2em] text-[#5c5238] sm:px-10">
        Bound &amp; sealed · Bookfolio © {new Date().getFullYear()}
      </footer>
    </div>
  );
}