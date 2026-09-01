import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <main>
      <section className="legal-shell">
        <nav className="site-nav" aria-label="Primary navigation">
          <Link className="brand" href="/" aria-label="RopeJoy home">
            <span className="brand-mark" aria-hidden="true">RJ</span>
            <span>RopeJoy</span>
          </Link>
          <div className="nav-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/support">Support</Link>
          </div>
        </nav>

        <Link className="back-link" href="/"><ArrowLeft size={16} /> Back to RopeJoy</Link>
        <header className="legal-header">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </header>

        <article className="legal-card">{children}</article>
      </section>

      <footer>
        <span>© 2026 RopeJoy</span>
        <span><a href="mailto:onebooksoftware@outlook.com">onebooksoftware@outlook.com</a></span>
      </footer>
    </main>
  );
}
