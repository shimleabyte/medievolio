import { Suspense } from 'react';
import Link from 'next/link';
import ArchiveEntrance from '@/components/ArchiveEntrance';

export default function Archive() {
  const skills = [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
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

        <section id="skills" aria-labelledby="skills-heading" className="space-y-6">
          <header className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter I</span>
            <h2 id="skills-heading" className="font-serif text-2xl text-[#f1e7cf]">
              Tools of the Craft
            </h2>
            <span className="h-px flex-1 bg-[#3a2f1f]" />
          </header>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border border-[#4a3c26] bg-[#1d1710] px-4 py-2 text-sm text-[#d8cba9]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="space-y-6">
          <header className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter II</span>
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
            <span className="font-serif text-sm text-[#8a2e2e]">Chapter III</span>
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