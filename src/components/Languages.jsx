import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const LANGUAGES = [
  { flag: '🇮🇳', name: 'Tamil', level: 'Native', dots: 5 },
  { flag: '🇮🇳', name: 'Hindi', level: 'Fluent', dots: 4 },
  { flag: '🇬🇧', name: 'English', level: 'Professional', dots: 4 },
  { flag: '🕌', name: 'Urdu', level: 'Speaking', dots: 3 },
  { flag: '🕌', name: 'Arabic', level: 'Intermediate', dots: 3 },
];

export default function Languages() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="languages" className="section">
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>Languages</span> Spoken
        </motion.h2>

        <div className="languages-grid">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="language-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className="language-flag">{lang.flag}</span>
              <div className="language-name">{lang.name}</div>
              <div className="language-level">{lang.level}</div>
              <div className="language-dots">
                {Array.from({ length: 5 }, (_, j) => (
                  <div
                    key={j}
                    className={`language-dot${j < lang.dots ? ' filled' : ''}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
