import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    number: '01',
    icon: '🔐',
    title: 'CYPROTHON',
    subtitle: 'Secure Password Manager',
    tech: ['Python', 'Tkinter', 'Cryptography', 'AES-256', 'Fernet'],
    problem: 'Most users store credentials in plaintext files or weak vaults, creating high-risk attack surfaces for credential harvesting and data exfiltration.',
    action: 'Built a local password manager with AES-256 encryption using Python\'s Cryptography library. Designed a secure Tkinter GUI with master-password authentication, ensuring encrypted read/write operations on credential storage. Implemented key derivation and secure memory handling to prevent runtime exposure.',
    outcome: 'Eliminated plaintext credential storage entirely. All credentials encrypted at rest. Reduced credential theft risk to near-zero for local storage. Demonstrates practical application of symmetric encryption in a real tool.',
    mitre: [
      { id: 'T1555', label: 'Credential Access – Credentials from Password Stores' },
      { id: 'T1078', label: 'Defense – Valid Account Protection' },
    ],
  },
  {
    number: '02',
    icon: '🦠',
    title: 'VPR Scanner',
    subtitle: 'Cybersecurity Defense Platform',
    tech: ['Python', 'Tkinter', 'Fernet', 'Pattern Analysis', 'Risk Scoring'],
    problem: 'Phishing URLs and ransomware payloads are increasingly evasive, bypassing basic filters. Organizations lack lightweight real-time tools for endpoint-level threat detection and file recovery.',
    action: 'Developed a dual-mode defense platform using Python. Phishing detection uses regex-based pattern analysis and entropy-driven risk scoring against known malicious URL indicators. Ransomware detection monitors file extension mutations and suspicious process signatures. Integrated Fernet symmetric encryption for secure post-attack file recovery.',
    outcome: 'Achieved real-time scanning with threat classification reports. Ransomware-encrypted files recoverable using the built-in decryption module. Platform significantly reduces detection-to-response time compared to manual analysis.',
    mitre: [
      { id: 'T1566', label: 'Initial Access – Phishing (TA0001)' },
      { id: 'T1486', label: 'Impact – Data Encrypted for Impact (Ransomware)' },
      { id: 'T1083', label: 'Discovery – File and Directory Discovery' },
    ],
  },
  {
    number: '03',
    icon: '🌐',
    title: 'HostTrace AI',
    subtitle: 'Infrastructure Intelligence Platform',
    tech: ['Python', 'FastAPI', 'React', 'OSINT', 'DNS Enumeration', 'ASN', 'WHOIS', 'Geo-IP'],
    problem: 'Attackers and defenders alike struggle to identify the real origin infrastructure behind CDN-protected targets (e.g., Cloudflare). Reconnaissance is slow, fragmented, and requires multiple tools.',
    action: 'Engineered a full-stack OSINT platform with a FastAPI backend and React frontend. The engine performs passive DNS enumeration, historical DNS lookups, BGP/ASN resolution, WHOIS parsing, Geo-IP mapping, and SSL certificate analysis to correlate and expose origin IPs behind CDN layers. All data is aggregated into a unified cyber threat visualization dashboard.',
    outcome: 'Reduced infrastructure reconnaissance time from hours to seconds. Successfully identifies origin servers in CDN-bypass scenarios. Provides a SOC-analyst-ready intelligence report per target with real-time threat context visualization.',
    mitre: [
      { id: 'TA0043', label: 'Reconnaissance – Active Scanning' },
      { id: 'T1596', label: 'Reconnaissance – Search Open Technical Databases (WHOIS/DNS)' },
      { id: 'T1046', label: 'Discovery – Network Service Scanning' },
      { id: 'T1590', label: 'Reconnaissance – Gather Victim Network Info' },
    ],
  },
];

const CASE_LABEL_STYLE = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '0.65rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#00d4ff',
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

const CASE_TEXT_STYLE = {
  fontSize: '0.82rem',
  color: '#8bafd4',
  lineHeight: 1.65,
  marginBottom: 14,
};

function CaseLabel({ icon, text }) {
  return (
    <div style={CASE_LABEL_STYLE}>
      <span>{icon}</span>{text}
    </div>
  );
}

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 10;
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

      {/* Header */}
      <div className="project-icon">{project.icon}</div>
      <h3 className="project-title">{project.title}</h3>
      <div className="project-subtitle">// {project.subtitle}</div>

      {/* Divider */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(0,212,255,0.3), transparent)', margin: '14px 0' }} />

      {/* Problem */}
      <CaseLabel icon="⚠️" text="PROBLEM" />
      <p style={CASE_TEXT_STYLE}>{project.problem}</p>

      {/* Action */}
      <CaseLabel icon="⚙️" text="ACTION" />
      <p style={CASE_TEXT_STYLE}>{project.action}</p>

      {/* Outcome */}
      <CaseLabel icon="📈" text="OUTCOME" />
      <p style={{ ...CASE_TEXT_STYLE, color: '#a8d4b8' }}>{project.outcome}</p>

      {/* MITRE toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'rgba(0,212,255,0.06)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: 6,
          color: '#00d4ff',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          padding: '5px 12px',
          cursor: 'pointer',
          marginBottom: expanded ? 10 : 16,
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        🛡️ MITRE ATT&CK {expanded ? '▲' : '▼'}
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            background: 'rgba(0,212,255,0.04)',
            border: '1px solid rgba(0,212,255,0.12)',
            borderRadius: 8,
            padding: '10px 14px',
            marginBottom: 14,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          {project.mitre.map((m) => (
            <div key={m.id} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: '#00d4ff',
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.25)',
                borderRadius: 4,
                padding: '1px 6px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>{m.id}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#8bafd4', lineHeight: 1.4 }}>{m.label}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Tech tags */}
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

        {/* Case study label */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 40, marginTop: -30 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            color: '#4a6fa5',
            letterSpacing: '0.15em',
            background: 'rgba(0,212,255,0.05)',
            border: '1px solid rgba(0,212,255,0.1)',
            borderRadius: 50,
            padding: '4px 16px',
          }}>
            ◈ PROFESSIONAL CASE STUDIES · MITRE ATT&CK MAPPED
          </span>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.title} project={proj} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
