import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="aero-page" id="top">
      <section className="aero-hero" aria-labelledby="aero-title">
        <header className="aero-nav-shell">
          <nav className="aero-nav" aria-label="Primary navigation">
            <Link className="aero-wordmark" href="/" aria-label="Alex Ong home">
              <span className="aero-wordmark-orb" aria-hidden="true" />
              a0ng<span className="aero-wordmark-dot">.</span>
            </Link>
            <div className="aero-nav-links">
              <Link href="/projects">Projects</Link>
              <a href="#about">About</a>
              <a href="https://github.com/a0ng" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </div>
            <span className="aero-nav-status">
              <span aria-hidden="true" /> Open to curiosity
            </span>
          </nav>
        </header>

        <div className="aero-hero-inner">
          <div className="aero-hero-card">
            <div className="aero-eyebrow">
              <span className="aero-sparkle" aria-hidden="true">✦</span>
              Alex Ong / Personal index
            </div>
            <h1 id="aero-title">Just some things I&apos;ve made.</h1>
            <p>
              An evolving collection of experiments, utilities, and things I
              wanted to exist.
            </p>
            <div className="aero-hero-actions">
              <Link className="aero-button aero-button-primary" href="/projects">
                Explore projects <span aria-hidden="true">→</span>
              </Link>
              <a className="aero-button aero-button-glass" href="#about">
                A little about me <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="aero-hero-bottom" aria-hidden="true">
          <span>Ideas, made tangible</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <div className="aero-content">
        <section className="aero-feature aero-wrap" aria-labelledby="aero-project-title">
          <div className="aero-section-heading">
            <div>
              <span className="aero-kicker">01 / Selected project</span>
              <h2 id="aero-project-title">One useful thing at a time.</h2>
            </div>
            <Link href="/projects" className="aero-inline-link">
              All projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <a
            className="aero-project-card"
            href="https://converter.a0ng.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="aero-project-glow" aria-hidden="true" />
            <div className="aero-project-topline">
              <span className="aero-card-index">001 / WEB TOOL</span>
              <span className="aero-live"><span aria-hidden="true" /> Live now</span>
            </div>
            <div className="aero-project-body">
              <div>
                <span className="aero-file-pill">.JNT → .PDF</span>
                <h3>Windows Journal<br />to PDF</h3>
                <p>
                  Convert old .jnt files into PDFs. Fast, private, and entirely
                  in your browser.
                </p>
              </div>
              <span className="aero-project-cta">
                Open the converter <Arrow />
              </span>
            </div>
          </a>
        </section>

        <section className="aero-about aero-wrap" id="about" aria-labelledby="aero-about-title">
          <div className="aero-about-header">
            <span className="aero-kicker">02 / About</span>
            <span className="aero-about-star" aria-hidden="true">✳</span>
          </div>
          <div className="aero-about-grid">
            <h2 id="aero-about-title">Hello,<br />I&apos;m Alex.</h2>
            <div className="aero-about-copy">
              <p className="aero-about-statement">
                I like turning neglected technical problems into simple,
                useful products.
              </p>
              <p>
                This site is an evolving index of experiments, utilities, and
                things I wanted to exist.
              </p>
            </div>
          </div>
        </section>

        <section className="aero-contact" aria-labelledby="aero-contact-title">
          <div className="aero-wrap aero-contact-inner">
            <div>
              <span className="aero-kicker">03 / Contact</span>
              <h2 id="aero-contact-title">Say hello<br />out there.</h2>
            </div>
            <a
              className="aero-contact-link"
              href="https://github.com/a0ng"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <Arrow />
            </a>
          </div>
        </section>

        <footer className="aero-footer aero-wrap">
          <span>© {new Date().getFullYear()} Alex Ong</span>
          <span>Made on the internet, for the internet.</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
