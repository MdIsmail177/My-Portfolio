import { motion } from 'framer-motion';

const SOCIALS = [
  {
    id: 'footer-linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mdismail177',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    id: 'footer-github',
    label: 'GitHub',
    href: 'https://github.com/MdIsmail177',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    id: 'footer-email',
    label: 'Email',
    href: 'mailto:apsarshaik2055@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Top divider with glow */}
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
          marginBottom: 40,
          boxShadow: '0 0 10px rgba(0,212,255,0.2)',
        }} />

        <div className="footer-inner">
          {/* Branding */}
          <div>
            <div className="footer-logo">SMI</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#4a6fa5',
              marginTop: 6,
              letterSpacing: '0.05em',
            }}>
              Cybersecurity Student · SOC Analyst in the Making
            </div>
          </div>

          {/* Quick nav */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.77rem',
                  color: '#4a6fa5',
                  letterSpacing: '0.06em',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00d4ff')}
                onMouseLeave={(e) => (e.target.style.color = '#4a6fa5')}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.id}
                id={s.id}
                href={s.href}
                className="footer-social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 32,
          paddingTop: 20,
          borderTop: '1px solid rgba(0,212,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div className="footer-text">
            © {new Date().getFullYear()} S Mohamed Ismail · All rights reserved
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            color: '#2a4470',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', display: 'inline-block', boxShadow: '0 0 6px rgba(0,212,255,0.8)' }} />
            Built with React · Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
