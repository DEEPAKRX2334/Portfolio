export default function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'deepakramasamy74@gmail.com' },
    { label: 'Phone', value: '+91 9629794956' },
    { label: 'Location', value: 'Trippur, Avinashi' }
  ];

  return (
    <section id="contact" className="section bg-bg-dark">
      <div className="container">
        <div className="section-title">
          <span className="tagline">COLLABORATION</span>
          <h2 className="text-gradient">Ready to Innovate?</h2>
        </div>

        <div className="contact-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="grid-2" style={{ gap: '40px' }}>
            
            <div className="contact-text">
              <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Let's build something epic.</h3>
              <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '40px' }}>
                Whether you have a groundbreaking idea or a complex problem to solve, my door is always open for intelligent collaboration. Let's combine design with logic.
              </p>
              
              <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '20px', borderRadius: '16px' }}>
                    <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8B5CF6' }}>{info.label}</p>
                    <p style={{ fontSize: '18px', fontWeight: '700' }}>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <div className="glass-card" style={{ padding: '40px', borderRadius: '32px' }}>
                <form action="https://formsubmit.co/deepakramasamy74@gmail.com" method="POST" className="space-y-8">
                  {/* Honeypot */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  {/* Disable Captcha */}
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Full Name</label>
                    <input type="text" name="name" placeholder="Deepak R" className="form-input" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Email Address</label>
                    <input type="email" name="email" placeholder="deepak@example.com" className="form-input" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '30px' }}>
                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Message</label>
                    <textarea name="message" placeholder="Tell me about your project..." className="form-input" style={{ minHeight: '150px' }} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px' }}>SEND MESSAGE</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
