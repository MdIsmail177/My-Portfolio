import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PROJECTS = [
  {
    number: '01',
    icon: '🔐',
    title: 'CYPROTHON',
    subtitle: 'Secure Password Manager',
    tech: ['Python', 'Tkinter', 'Cryptography', 'AES'],
    desc: 'An AES-encrypted password manager that eliminates plaintext credential storage. Features a clean interactive GUI built with Tkinter, ensuring all credentials are secured with industry-standard encryption algorithms.',
    points: [
      'AES-256 encryption for all stored credentials',
      'Interactive Tkinter GUI with secure input handling',
      'Eliminated dangerous plaintext credential storage',
      'Secure encrypted credential retrieval system',
    ],
  },
  {
    number: '02',
    icon: '🦠',
    title: 'VPR Scanner',
    subtitle: 'Cybersecurity Defense Platform',
    tech: ['Python', 'Tkinter', 'Fernet', 'Pattern Analysis'],
    desc: 'A real-time defense platform that detects phishing URLs and ransomware threats using pattern-based analysis and risk scoring. Implements secure file recovery via Fernet encryption.',
    points: [
      'Phishing URL detection with pattern-based risk scoring',
      'Ransomware threat detection and alerting system',
      'Secure file recovery using Fernet encryption',
      'Real-time scanning and detailed threat reporting',
    ],
  },
  {
    number: '03',
    icon: '🌐',
    title: 'HostTrace AI',
    subtitle: 'Infrastructure Intelligence Platform',
    tech: ['Python', 'FastAPI', 'React', 'OSINT', 'DNS'],
    desc: 'A full-stack cybersecurity platform that detects real origin servers behind CDN services like Cloudflare using DNS enumeration, IP analysis, WHOIS, Geo-IP, and ASN intelligence.',
    points: [
      'CDN bypass detection via DNS enumeration & IP analysis',
      'WHOIS, DNS records, Geo-IP, and ASN data integration',
      'Full-stack: FastAPI backend + React frontend',
      'Real-time cyber threat visualization dashboard',
    ],
  },
];

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        transform: hovered
          ? `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(-8px) scale(1.01)`
          : 'perspective(900px) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.25s ease, box-shadow 0.35s ease, border-color 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-glow" />
      <div className="project-number">{project.number}</div>

      <div className="project-icon">{project.icon}</div>
      <h3 className="project-title">{project.title}</h3>
      <div className="project-subtitle">// {project.subtitle}</div>
      <p className="project-desc">{project.desc}</p>

      {/* Feature list */}
      <ul style={{ listStyle: 'none', marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {project.points.map((pt, i) => (
          <li key={i} style={{ fontSize: '0.82rem', color: '#8bafd4', paddingLeft: 16, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#00d4ff', fontSize: '0.7rem' }}>▸</span>
            {pt}
          </li>
        ))}
      </ul>

      <div className="project-tags">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="projects" className="section">
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span>Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.title} project={proj} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
