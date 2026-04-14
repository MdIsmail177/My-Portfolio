import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CONTACT_LINKS = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9944850017',
    href: 'tel:+919944850017',
    id: 'contact-phone',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'apsarshaik2055@gmail.com',
    href: 'mailto:apsarshaik2055@gmail.com',
    id: 'contact-email',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mdismail177',
    href: 'https://linkedin.com/in/mdismail177',
    id: 'contact-linkedin',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/MdIsmail177',
    href: 'https://github.com/MdIsmail177',
    id: 'contact-github',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(5,14,36,0.5)' }}>
      <div className="grid-overlay" />
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span>Touch</span>
        </motion.h2>

        <div className="contact-inner">
          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              background: 'rgba(0,212,255,0.07)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 50,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#00d4ff',
              marginBottom: 20,
              letterSpacing: '0.08em',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00d4ff', display: 'inline-block', animation: 'blink-dot 1.5s ease-in-out infinite', boxShadow: '0 0 8px rgba(0,212,255,0.8)' }} />
              OPEN TO OPPORTUNITIES
            </div>

            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-sub">
              I'm actively seeking cybersecurity internships and SOC Analyst roles. Whether you
              have an opportunity, a project collaboration, or just want to talk security —
              I'd love to hear from you.
            </p>

            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="contact-link-item"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  id={link.id}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-text">
                    <div className="link-label">{link.label}</div>
                    <div className="link-value">{link.value}</div>
                  </div>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(0,212,255,0.4)" strokeWidth="2" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="contact-form">
              {/* Form header */}
              <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid rgba(0,212,255,0.1)' }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                  Send a Message
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#4a6fa5' }}>
                  // fill the form below
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    color: '#00d4ff',
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '0.9rem',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <div>MESSAGE TRANSMITTED</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#4a6fa5', marginTop: 8 }}>
                    I'll get back to you soon.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email-field">Email</label>
                      <input
                        id="contact-email-field"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="Internship Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about the opportunity or project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit" id="contact-submit">
                    TRANSMIT MESSAGE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
