import type { Metadata } from "next";
import Link from "next/link";
import { formatConceptDate, getConceptPosts } from "./posts";

export const metadata: Metadata = {
  title: "Concepts",
  description: "Notes, ideas, and works in progress by Alex Ong.",
};

export default function Concepts() {
  const posts = getConceptPosts();

  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Alex Ong home">
          A0NG
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a href="https://github.com/a0ng" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="archive-hero concepts-archive-hero">
        <p className="eyebrow">Index / Ideas</p>
        <h1>Concepts</h1>
        <p>Notes, questions, and ideas worth exploring in public.</p>
      </section>

      <section aria-label="Concept archive" className="archive-list">
        {posts.length === 0 ? (
          <div className="archive-row archive-row--empty">
            <span className="archive-number">001</span>
            <span className="archive-title">First concept coming soon</span>
            <span className="archive-meta">In progress</span>
            <span className="archive-arrow" aria-hidden="true">—</span>
            <span className="archive-description">
              The first post will appear here when it is ready.
            </span>
          </div>
        ) : (
          posts.map((post, index) => (
            <Link className="archive-row" href={`/concepts/${post.slug}`} key={post.slug}>
              <span className="archive-number">{String(index + 1).padStart(3, "0")}</span>
              <span className="archive-title">{post.title}</span>
              <span className="archive-meta">{formatConceptDate(post.publishedAt)}</span>
              <span className="archive-arrow" aria-hidden="true">↗</span>
              <span className="archive-description">“{post.quote}”</span>
            </Link>
          ))
        )}
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Alex Ong</span>
        <Link href="/">Home ←</Link>
      </footer>
    </main>
  );
}
