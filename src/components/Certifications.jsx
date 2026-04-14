import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CERTS = [
  {
    icon: '🏆',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'Nativeva',
    color: '#f59e0b',
  },
  {
    icon: '🔒',
    name: 'Cryptography & Network Security',
    issuer: 'NPTEL',
    color: '#00d4ff',
  },
  {
    icon: '📊',
    name: 'Data Structure and Algorithm',
    issuer: 'NPTEL',
    color: '#00d4ff',
  },
  {
    icon: '🐍',
    name: 'The Joy of Computing Using Python',
    issuer: 'NPTEL',
    color: '#00d4ff',
  },
  {
    icon: '🌐',
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
    color: '#34d399',
  },
  {
    icon: '🌉',
    name: 'Network Architecture Fundamentals',
    issuer: 'Cisco',
    color: '#60a5fa',
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="section">
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>Certifications</span> & Credentials
        </motion.h2>

        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="cert-card"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={cert.issuer === 'Nativeva' ? {
                borderColor: 'rgba(245,158,11,0.25)',
                background: 'rgba(30,20,6,0.7)',
              } : {}}
            >
              <div
                className="cert-icon-wrap"
                style={{
                  borderColor: `${cert.color}33`,
                  background: `${cert.color}12`,
                  boxShadow: `0 0 14px ${cert.color}22`,
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{cert.icon}</span>
              </div>

              <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer" style={{ color: cert.color }}>
                  {cert.issuer}
                </div>
              </div>

              {/* Verified badge */}
              <div style={{
                flexShrink: 0,
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: `${cert.color}15`,
                border: `1px solid ${cert.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={cert.color} strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary row */}
        <motion.div
          style={{
            marginTop: 40,
            display: 'flex',
            justifyContent: 'center',
            gap: 40,
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { num: 6, label: 'Certifications' },
            { num: 3, label: 'NPTEL Courses' },
            { num: 1, label: 'Industry Cert (CEH)' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#00d4ff', textShadow: '0 0 15px rgba(0,212,255,0.5)' }}>{s.num}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#4a6fa5', letterSpacing: '0.1em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
