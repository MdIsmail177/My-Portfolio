import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Cybersecurity Student',
  'Aspiring SOC Analyst',
  'Vulnerability Assessor',
  'Python Developer',
  'Ethical Hacker',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero section">
      <div className="grid-overlay" />
      <div className="hero-bg-glow" />

      <div className="container">
        <div className="hero-inner">

          {/* Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="hero-badge">
              <span className="dot" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1 className="hero-name">
              <span className="first">S Mohamed</span>
              <span className="last">Ismail</span>
            </h1>

            <div className="hero-role">
              <span>&gt;_&nbsp;</span>
              {displayed}
              <span className="cursor" />
            </div>

            <p className="hero-desc">
              Cybersecurity-focused Computer Science student with hands-on expertise in
              vulnerability assessment, threat detection, and security monitoring. Skilled in
              Wireshark, Nmap, Burp Suite, and Python. Aspiring to build a high-impact career
              as a&nbsp;<strong style={{ color: '#00d4ff' }}>SOC Analyst</strong>.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="value">600+</span>
                <span className="label">HOURS CODING</span>
              </div>
              <div className="hero-stat">
                <span className="value">CEH</span>
                <span className="label">CERTIFIED</span>
              </div>
              <div className="hero-stat">
                <span className="value">3+</span>
                <span className="label">PROJECTS</span>
              </div>
              <div className="hero-stat">
                <span className="value">2</span>
                <span className="label">INTERNSHIPS</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')} id="hero-view-projects">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('contact')} id="hero-contact-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contact Me
              </button>
              <a
                className="btn btn-outline"
                href="/Mohamed Ismail.resume.pdf"
                download="Mohamed Ismail.resume.pdf"
                id="hero-download-resume"
                style={{ borderColor: 'rgba(139,175,212,0.4)', color: '#8bafd4' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="hero-image-frame">
              <div className="hero-image-ring" />
              <div className="hero-image-ring-2" />
              <div className="hero-image-dots" />
              <div className="hero-image-inner">
                <img src="/Cybersecurity professional.png" alt="S Mohamed Ismail – Cybersecurity Student" />
                <div className="hero-image-scan" />
              </div>
              <div className="hero-image-badge">◉ CEH CERTIFIED</div>
            </div>

            {/* Floating icons */}
            <div className="hero-floating-icons">
              <div className="floating-icon" style={{ top: '10%', left: '-20%', animationDelay: '0s' }} title="Python">🐍</div>
              <div className="floating-icon" style={{ top: '60%', left: '-25%', animationDelay: '1s' }} title="Nmap">🔍</div>
              <div className="floating-icon" style={{ top: '15%', right: '-20%', animationDelay: '0.5s' }} title="Wireshark">🦈</div>
              <div className="floating-icon" style={{ top: '70%', right: '-18%', animationDelay: '1.5s' }} title="Linux">🐧</div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <button
            onClick={() => scrollTo('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4a6fa5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
          >
            SCROLL DOWN
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00d4ff" strokeWidth="2" style={{ animation: 'float 2s ease-in-out infinite' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
