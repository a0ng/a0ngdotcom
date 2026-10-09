import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Alex Ong home">
          A0NG
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/projects">Projects</Link>
          <a href="#about">About</a>
          <a href="https://github.com/a0ng" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Alex Ong</p>
        <h1 id="hero-title">Just some things I've made.</h1>
        <div className="hero-foot">
          <p></p>
          <Link className="text-link" href="/projects">
            See the work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="signal" aria-hidden="true">
          <span>BUILD</span>
          <span>SHIP</span>
          <span>REPEAT</span>
        </div>
      </section>

      <section
        className="section projects-preview"
        aria-labelledby="projects-title"
      >
        <div className="section-label">
          <span>01</span>
          <h2 id="projects-title">Selected project</h2>
        </div>
        <a
          className="project-card"
          href="https://converter.a0ng.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-number">001</div>
          <div className="project-copy">
            <p className="project-status">Live now</p>
            <h3>Windows Journal → PDF</h3>
            <p>
              Convert old .jnt files into PDFs. Fast, private, and entirely in
              your browser.
            </p>
          </div>
          <div className="project-action">
            Open tool <Arrow />
          </div>
        </a>
        <Link className="all-projects" href="/projects">
          <span>View all projects</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section
        className="section about"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="section-label">
          <span>02</span>
          <h2 id="about-title">About</h2>
        </div>
        <p className="about-statement">
          I’m Alex. I like turning neglected technical problems into simple,
          useful products.
        </p>
        <p className="about-note">
          This site is an evolving index of experiments, utilities, and things I
          wanted to exist.
        </p>
      </section>

      <section className="section contact" aria-labelledby="contact-title">
        <div className="section-label">
          <span>03</span>
          <h2 id="contact-title">Contact</h2>
        </div>
        <a
          className="contact-link"
          href="https://github.com/a0ng"
          target="_blank"
          rel="noreferrer"
        >
          Find me on GitHub <Arrow />
        </a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Alex Ong</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
