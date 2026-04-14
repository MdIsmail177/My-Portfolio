import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    side: 'left',
    role: 'Cybersecurity Intern',
    company: 'Corizo (Wipro) – Remote',
    date: 'Oct 2024 – Nov 2024',
    icon: '🛡️',
    points: [
      'Performed web application vulnerability assessments using automated tools and manual testing techniques.',
      'Identified critical vulnerabilities including SQL Injection, XSS, and CSRF using Burp Suite and Nmap.',
      'Conducted fuzz testing to uncover hidden attack surfaces and edge-case vulnerabilities.',
      'Documented all findings with detailed mitigation steps and remediation recommendations.',
    ],
  },
  {
    side: 'right',
    role: 'Artificial Intelligence Intern',
    company: 'Corizo (Wipro) – Remote',
    date: 'Nov 2024 – Dec 2024',
    icon: '🤖',
    points: [
      'Worked on core AI/ML concepts including supervised and unsupervised learning using Python.',
      'Performed data preprocessing, feature engineering, and model evaluation workflows.',
      'Implemented machine learning algorithms and fine-tuned model hyperparameters.',
      'Utilized NumPy, Pandas, and Scikit-learn for end-to-end data analysis pipelines.',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section" style={{ background: 'rgba(5,14,36,0.5)' }}>
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work <span>Experience</span>
        </motion.h2>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role}
              className={`exp-item${exp.side === 'right' ? ' right' : ''}`}
              initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="exp-dot" />
              <div className="exp-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: '1.5rem' }}>{exp.icon}</span>
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                </div>
                <div className="exp-date">📅 {exp.date}</div>
                <ul className="exp-list">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
