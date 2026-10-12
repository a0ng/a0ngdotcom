export type ConceptPost = {
  slug: string;
  title: string;
  publishedAt: string; // YYYY-MM-DD
  summary: string;
  quote: string; // A short excerpt, without surrounding quotation marks.
  paragraphs: string[];
};

// Add published concepts here. The newest date appears on the homepage.
export const conceptPosts: ConceptPost[] = [];

export function getConceptPosts(): ConceptPost[] {
  return [...conceptPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function getLatestConcept(): ConceptPost | undefined {
  return getConceptPosts()[0];
}

export function getConceptBySlug(slug: string): ConceptPost | undefined {
  return conceptPosts.find((post) => post.slug === slug);
}

export function formatConceptDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
