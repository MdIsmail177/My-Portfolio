import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const EDUCATION = [
  {
    icon: '🎓',
    year: '2023 – 2027 (Expected)',
    degree: 'B.E – Computer Science Engineering (Cybersecurity)',
    school: 'Dhanalakshmi Srinivasan Engineering College (Autonomous)',
    grade: 'CGPA: 8.6 / 10',
    type: 'University',
    highlight: true,
  },
  {
    icon: '📚',
    year: '2021 – 2023',
    degree: 'Class XII – CBSE',
    school: 'Hans Roever Public School',
    grade: '78%',
    type: 'Higher Secondary',
    highlight: false,
  },
  {
    icon: '📖',
    year: '2019 – 2021',
    degree: 'Class X – CBSE',
    school: 'Hans Roever Public School',
    grade: '84%',
    type: 'Secondary',
    highlight: false,
  },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section" style={{ background: 'rgba(5,14,36,0.5)' }}>
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>Education</span> Background
        </motion.h2>

        <div className="education-grid">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="edu-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={edu.highlight ? { borderColor: 'rgba(0,212,255,0.25)', background: 'rgba(6,24,60,0.75)' } : {}}
            >
              {/* Type badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '3px 10px',
                background: edu.highlight ? 'rgba(0,212,255,0.12)' : 'rgba(59,130,246,0.08)',
                border: `1px solid ${edu.highlight ? 'rgba(0,212,255,0.3)' : 'rgba(59,130,246,0.2)'}`,
                borderRadius: 50,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                color: edu.highlight ? '#00d4ff' : '#3b82f6',
                marginBottom: 14,
                letterSpacing: '0.06em',
              }}>
                <span>{edu.icon}</span> {edu.type}
              </div>

              <div className="edu-year">{edu.year}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-grade">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#00d4ff' }}>
                  <circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
                </svg>
                {edu.grade}
              </div>

              {edu.highlight && (
                <div style={{
                  marginTop: 16,
                  padding: '10px 14px',
                  background: 'rgba(0,212,255,0.06)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  borderRadius: 8,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: '#4a6fa5',
                }}>
                  Specialization: <span style={{ color: '#00d4ff' }}>Cybersecurity</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
