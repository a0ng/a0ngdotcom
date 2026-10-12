import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatConceptDate,
  getConceptBySlug,
  getConceptPosts,
} from "../posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getConceptPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getConceptBySlug((await params).slug);
  return post
    ? { title: post.title, description: post.summary }
    : { title: "Concept not found" };
}

export default async function ConceptArticle({ params }: Props) {
  const post = getConceptBySlug((await params).slug);
  if (!post) notFound();

  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Alex Ong home">
          A0NG
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/concepts">Concepts</Link>
          <a href="https://github.com/a0ng" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <article className="concept-article">
        <Link className="concept-back" href="/concepts">← All concepts</Link>
        <p className="eyebrow">Concept / {formatConceptDate(post.publishedAt)}</p>
        <h1>{post.title}</h1>
        <p className="concept-summary">{post.summary}</p>
        <blockquote>“{post.quote}”</blockquote>
        <div className="concept-prose">
          {post.paragraphs.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>

      <footer>
        <span>© {new Date().getFullYear()} Alex Ong</span>
        <Link href="/concepts">All concepts ←</Link>
      </footer>
    </main>
  );
}
