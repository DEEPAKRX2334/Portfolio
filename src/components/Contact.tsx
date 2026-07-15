import { useState } from 'react';
import { motion } from 'framer-motion';

// ==========================================
// ⚙️ PORTFOLIO FORM CONFIGURATION
// ==========================================
// 1. Enter your email address to receive messages.
const RECIPIENT_EMAIL = "deepakramasamy74@gmail.com";

// 2. FormSubmit.co has shut down as of July 15, 2026.
// To use a free, modern background email service, get an access key from:
// https://web3forms.com/ (It takes 10 seconds, no password required!)
//
// Paste your access key below. If left empty, the form will fall back
// to opening a pre-filled mail app link ("mailto:") which always works.
const WEB3FORMS_ACCESS_KEY: string = "8ae1dd2e-7d17-45b7-b4d8-4f631fa51f08";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const contactInfo = [
    { label: 'Email', value: RECIPIENT_EMAIL },
    { label: 'Phone', value: '+91 9629794956' },
    { label: 'Location', value: 'Trippur, Avinashi' }
  ];

  const detailsVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15
      }
    }
  } as const;

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15
      }
    }
  } as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      setFeedbackMsg('Please fill in all required fields.');
      return;
    }

    // Fallback: If Web3Forms Access Key is not configured, open the user's local email app
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus('success');
      const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=Portfolio Contact Form: ${encodeURIComponent(name)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      window.location.href = mailtoUrl;
      setName('');
      setEmail('');
      setMessage('');
      return;
    }

    setStatus('loading');
    setFeedbackMsg('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: "New Message from Portfolio Form!"
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setFeedbackMsg(data.message || 'Failed to submit the form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setFeedbackMsg('Network error. Please verify your connection and try again.');
    }
  };

  return (
    <section id="contact" className="section bg-bg-dark">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">COLLABORATION</span>
          <h2 className="text-gradient">Ready to Innovate?</h2>
        </motion.div>

        <div className="contact-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div className="grid-2" style={{ gap: '40px' }}>

            <motion.div
              className="contact-text"
              variants={detailsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Let's build something epic.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px' }}>
                Whether you have a groundbreaking idea or a complex problem to solve, my door is always open for intelligent collaboration. Let's combine design with logic.
              </p>

              <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="glass-card hover-glow"
                    style={{ padding: '20px', borderRadius: '16px', cursor: 'default' }}
                  >
                    <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)' }}>{info.label}</p>
                    <p style={{ fontSize: '18px', fontWeight: '700' }}>{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="glass-card hover-glow" style={{ padding: '40px', borderRadius: '32px' }}>
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px auto',
                        border: '2px solid var(--secondary)'
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </motion.div>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>Message Sent!</h3>

                    {(!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") ? (
                      <>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>
                          Opened your local email application to send the message.
                        </p>
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '16px',
                          padding: '16px',
                          marginBottom: '24px',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          textAlign: 'left',
                          lineHeight: '1.5'
                        }}>
                          <strong style={{ color: 'var(--secondary)', display: 'block', marginBottom: '6px' }}>📧 Note:</strong>
                          To send messages automatically in the background (without opening your mail app), register a free Access Key at <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>Web3Forms</a> and paste it into <code>Contact.tsx</code>.
                        </div>
                      </>
                    ) : (
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>
                        Thank you for reaching out! I'll get back to you as soon as possible.
                      </p>
                    )}

                    <button
                      onClick={() => { setStatus('idle'); setFeedbackMsg(''); }}
                      className="btn btn-secondary"
                      style={{ width: '100%', padding: '14px' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {status === 'error' && (
                      <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        marginBottom: '20px',
                        color: '#f87171',
                        fontSize: '14px'
                      }}>
                        ⚠️ {feedbackMsg}
                      </div>
                    )}

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Deepak R"
                        className="form-input"
                        disabled={status === 'loading'}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deepak@example.com"
                        className="form-input"
                        disabled={status === 'loading'}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '30px' }}>
                      <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Message</label>
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project..."
                        className="form-input"
                        style={{ minHeight: '150px' }}
                        disabled={status === 'loading'}
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '18px' }}
                      whileHover={status === 'loading' ? {} : { scale: 1.02 }}
                      whileTap={status === 'loading' ? {} : { scale: 0.98 }}
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
