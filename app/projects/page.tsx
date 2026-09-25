import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A growing archive of tools and experiments by Alex Ong.',
};

export default function Projects() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Alex Ong home">
          A0NG
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <a href="https://github.com/a0ng" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="archive-hero">
        <p className="eyebrow">Index / 2026</p>
        <h1>Projects</h1>
        <p>Tools, utilities, and experiments. Built to be used.</p>
      </section>

      <section aria-label="Project archive" className="archive-list">
        <a
          className="archive-row"
          href="https://converter.a0ng.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="archive-number">001</span>
          <span className="archive-title">Windows Journal → PDF</span>
          <span className="archive-meta">Web tool / 2026</span>
          <span className="archive-arrow" aria-hidden="true">
            ↗
          </span>
          <span className="archive-description">
            A private, browser-based converter for opening legacy Microsoft
            Journal files and exporting compact PDFs.
          </span>
        </a>
        <div
          className="archive-row archive-row--empty"
          aria-label="More projects coming soon"
        >
          <span className="archive-number">002+</span>
          <span className="archive-title">In progress</span>
          <span className="archive-meta">More soon</span>
          <span className="archive-arrow" aria-hidden="true">
            —
          </span>
          <span className="archive-description">
            The archive expands as the work ships.
          </span>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Alex Ong</span>
        <Link href="/">Home ←</Link>
      </footer>
    </main>
  );
}
