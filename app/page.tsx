import { ArrowRight, HeartPulse, Mail, ShieldCheck, Watch } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    href: '/privacy',
    icon: ShieldCheck,
    eyebrow: 'Your data',
    title: 'Privacy Policy',
    description: 'Learn how RopeJoy handles workout, motion, health, and device data.',
  },
  {
    href: '/support',
    icon: Mail,
    eyebrow: 'Need a hand?',
    title: 'Support',
    description: 'Get help with Apple Watch setup, workout syncing, or jump counting.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
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

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Watch size={15} /> Made for Apple Watch</span>
            <h1>Every jump,<br />beautifully counted.</h1>
            <p>
              RopeJoy turns your Apple Watch into a focused jump-rope companion,
              then brings your workouts, heart rate, and progress to iPhone.
            </p>
            <Link className="primary-link" href="/support">
              Visit support <ArrowRight size={17} />
            </Link>
          </div>

          <div className="metric-card" aria-label="RopeJoy workout preview">
            <div className="metric-topline">
              <span>Today</span>
              <span className="live-dot">Synced</span>
            </div>
            <strong className="jump-count">1,248</strong>
            <span className="jump-label">jumps</span>
            <div className="metric-row">
              <span><HeartPulse size={18} /> 136 bpm</span>
              <span>12:42</span>
              <span>118 kcal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-shell" aria-labelledby="resources-title">
        <div className="section-heading">
          <span className="eyebrow">RopeJoy resources</span>
          <h2 id="resources-title">Clear answers, whenever you need them.</h2>
        </div>
        <div className="resource-grid">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link className="resource-card" href={resource.href} key={resource.href}>
                <span className="resource-icon"><Icon size={22} /></span>
                <span className="resource-eyebrow">{resource.eyebrow}</span>
                <strong>{resource.title}</strong>
                <p>{resource.description}</p>
                <span className="card-link">Read more <ArrowRight size={16} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <footer>
        <span>© 2026 RopeJoy</span>
        <span>Jump lighter. Feel stronger.</span>
      </footer>
    </main>
  );
}
