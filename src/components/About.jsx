import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const INFO = [
  { icon: '📍', label: 'Location', value: 'Perambalur, Tamil Nadu' },
  { icon: '🎓', label: 'Degree', value: 'B.E – CSE (Cybersecurity)' },
  { icon: '🎯', label: 'Goal', value: 'SOC Analyst' },
  { icon: '🏅', label: 'Certification', value: 'CEH Certified' },
  { icon: '⌨️', label: 'Coding Hours', value: '600+ Hours' },
  { icon: '🌐', label: 'Status', value: 'Open to Internships' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section">
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          About <span>Me</span>
        </motion.h2>

        <div className="about-inner">
          {/* Image */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="about-image" style={{ position: 'relative' }}>
              <img src="/Cybersecurity professional.png" alt="S Mohamed Ismail" />
              <div className="about-corner tl" />
              <div className="about-corner tr" />
              <div className="about-corner bl" />
              <div className="about-corner br" />
            </div>

            {/* Floating badge */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 20,
                right: -20,
                padding: '12px 16px',
                background: 'rgba(2,8,23,0.92)',
                border: '1px solid rgba(0,212,255,0.35)',
                borderRadius: 12,
                backdropFilter: 'blur(12px)',
                boxShadow: '0 0 20px rgba(0,212,255,0.2)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', color: '#00d4ff', fontWeight: 700 }}>CEH</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4a6fa5' }}>CERTIFIED</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="about-content"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <div className="about-label">// WHO AM I</div>
            <h3 className="about-title">
              Passionate About <span>Cybersecurity</span>
            </h3>
            <p className="about-text">
              I'm a Cybersecurity-focused Computer Science student at Dhanalakshmi Srinivasan
              Engineering College, deeply passionate about securing the digital world. With
              hands-on experience in vulnerability assessment, security monitoring, and threat
              detection, I combine technical depth with a strategic security mindset.
            </p>
            <p className="about-text">
              Proficient with industry tools like Wireshark, Nmap, and Burp Suite, I have
              completed internships in both cybersecurity and AI/ML, and built multiple
              security-focused projects. My goal is to transition into a <strong style={{ color: '#00d4ff' }}>SOC Analyst</strong> role
              where I can actively defend organizations from evolving cyber threats.
            </p>

            <div className="about-info-grid">
              {INFO.map((item) => (
                <div key={item.label} className="about-info-item">
                  <span className="about-info-icon">{item.icon}</span>
                  <div className="about-info-text">
                    <div className="info-label">{item.label}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                id="about-contact-btn"
              >
                Get In Touch
              </button>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                id="about-projects-btn"
              >
                See Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
