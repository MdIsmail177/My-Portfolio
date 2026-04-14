import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    icon: '💻',
    title: 'Programming & Querying',
    skills: ['Python', 'C', 'Java', 'HTML', 'CSS', 'SQL', 'DSA', 'Linux'],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity Tools',
    skills: ['Nmap', 'Wireshark', 'Burp Suite', 'SIEM (Basics)'],
  },
  {
    icon: '🔍',
    title: 'Security Domains',
    skills: [
      'Vulnerability Assessment',
      'Penetration Testing (Basics)',
      'Security Monitoring',
      'Threat Detection',
      'Networking Fundamentals',
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section" style={{ background: 'rgba(5,14,36,0.5)' }}>
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical <span>Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool logos bar */}
        <motion.div
          style={{
            marginTop: 50,
            padding: '24px 32px',
            background: 'rgba(6,18,50,0.5)',
            border: '1px solid rgba(0,212,255,0.1)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.73rem', color: '#4a6fa5', letterSpacing: '0.15em' }}>
            PROFICIENCY HIGHLIGHTS
          </div>
          {[
            { label: 'Python', pct: 85 },
            { label: 'Nmap', pct: 80 },
            { label: 'Wireshark', pct: 78 },
            { label: 'Burp Suite', pct: 72 },
            { label: 'Linux', pct: 80 },
            { label: 'SQL', pct: 70 },
          ].map((item) => (
            <div key={item.label} style={{ flex: '1 1 120px', minWidth: 100 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#8bafd4' }}>{item.label}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00d4ff' }}>{item.pct}%</span>
              </div>
              <div style={{ height: 4, background: 'rgba(0,212,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
                <motion.div
                  style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(90deg, #00d4ff, #3b82f6)', boxShadow: '0 0 8px rgba(0,212,255,0.5)' }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.pct}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 + 0.1 * ['Python','Nmap','Wireshark','Burp Suite','Linux','SQL'].indexOf(item.label), ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
