import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  {
    medal: '🥉',
    title: '3rd Place – Debugging Event',
    desc: 'Secured 3rd place in the Debugging event at Suriya Engineering College Symposium, demonstrating strong problem-solving and code analysis skills.',
  },
  {
    medal: '🏆',
    title: 'Overall Trophy Winner',
    desc: 'Won the prestigious Overall Trophy at K. Ramakrishnan College of Engineering, showcasing all-round technical and leadership excellence.',
  },
  {
    medal: '🥇',
    title: '1st Place – Blind Logo (Science Fest)',
    desc: 'Achieved 1st place in Blind Logo, 3rd in Word Building, and 4th in Best Manager at the inter-college Science Fest competition.',
  },
  {
    medal: '💡',
    title: 'Hackathon Participant',
    desc: 'Participated in a hackathon conducted by K. Ramakrishnan College of Engineering, building innovative cybersecurity solutions under pressure.',
  },
  {
    medal: '🔟',
    title: 'Top 10 – HackXtreme\'26',
    desc: 'Secured Top 10 in HackXtreme\'26, shortlisted from 200+ competing teams to the elite Top 35, then advancing to the final Top 10.',
  },
  {
    medal: '🌿',
    title: 'Industry Internship – GreenSoft Technology',
    desc: 'Solved an industry-level problem statement from GreenSoft Technology and earned a prestigious internship opportunity based on solution quality.',
  },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="achievements" className="section" style={{ background: 'rgba(5,14,36,0.5)' }}>
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>Achievements</span> & Awards
        </motion.h2>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.title}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="achievement-medal">{ach.medal}</div>
              <div className="achievement-text">
                <h3 className="achievement-title">{ach.title}</h3>
                <p className="achievement-desc">{ach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
