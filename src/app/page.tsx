'use client';

import { useState } from 'react';
import TomeGate from "@/components/TomeGate";

export default function Home() {

  const [isRevealed, setIsRevealed] = useState(false);

  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  const quests = [
    {
      title: "The Merchant's Ledger",
      desc: "Sistem inventaris dan invoicing full-stack untuk guild dagang kecil, dengan pelacakan stok real-time.",
      tags: ["Next.js", "Postgres", "Stripe"],
    },
    {
      title: "Cartographer's Atlas",
      desc: "Alat peta interaktif untuk memetakan rute dan wilayah, dirender dengan custom canvas layers.",
      tags: ["React", "Canvas", "Node.js"],
    },
    {
      title: "The Town Crier",
      desc: "CMS ringan dan mesin newsletter untuk penerbit kecil yang ingin punya percetakan sendiri.",
      tags: ["TypeScript", "Next.js", "Resend"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#15110c] font-sans text-[#e7dcc3] selection:bg-[#c9a35c] selection:text-[#15110c]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(201,163,92,0.12),transparent)]" />

      <main className="mx-auto flex max-w-3xl flex-col gap-20 px-6 py-16 sm:gap-24 sm:px-10 sm:py-24">
        {/* HERO */}
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
              Medievolio
            </h1>
            <p className="mt-3 font-serif text-lg italic text-[#c9a35c] sm:text-xl">
              A tome of my craft, quests, and contact.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#b9ac92] sm:text-lg">
              Personal Portofolio bertema Medieval oleh Shimleabyte
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TomeGate
                targetSelector="#skills"
                onOpen={() => setIsRevealed(true)}
              />
              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-[#4a3c26] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#e7dcc3] transition-colors hover:border-[#c9a35c] hover:text-[#c9a35c]"
              >
                View Quests
              </a>
            </div>
          </div>
        </section>

        {!isRevealed && (
          <p className="text-center font-serif text-sm italic text-[#5c5238]">
            ~ Segel tome di atas untuk membuka chapter berikutnya. ~
          </p>
        )}

        <div
          aria-hidden={!isRevealed}
          className={[
            'flex flex-col gap-20 transition-all duration-700 sm:gap-24',
            isRevealed
              ? 'pointer-events-auto translate-y-0 opacity-100 blur-none'
              : 'pointer-events-none translate-y-3 select-none opacity-0 blur-sm',
          ].join(' ')}
        >
          {/* SKILLS */}
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

          {/* PROJECTS */}
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

          {/* CONTACT */}
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
        </div>
      </main>

      <footer className="border-t border-[#3a2f1f] px-6 py-8 text-center text-xs uppercase tracking-[0.2em] text-[#5c5238] sm:px-10">
        Bound &amp; sealed · Mediovolio © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
