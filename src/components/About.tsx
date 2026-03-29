import profileImg from '../assets/profileimage.jpeg';

export default function About() {
  return (
    <section id="about" className="section bg-bg-dark">
      <div className="container">
        <div className="section-title">
          <span className="tagline">ABOUT THE DEVELOPER</span>
          <h2 className="text-gradient">Logic & Design Combined</h2>
        </div>

        <div className="grid-2">
          
          <div className="about-img-container">
            <img 
              src={profileImg} 
              alt="Deepak R Profile" 
              className="about-img" 
            />
          </div>

          <div className="about-text">
            <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '30px' }}>
              I’m <b style={{ color: 'white' }}>Deepak R</b>, a passionate Full Stack Developer and UI/UX Designer who enjoys building clean, user-friendly, and intelligent digital experiences.
            </p>
            <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '30px' }}>
              Currently pursuing my degree in Computer Science and Design, I focus on combining design thinking with development skills to create applications that are not only functional but also intuitive and visually engaging.
            </p>
            
            <div className="strengths-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { label: 'Problem Solving', icon: '🧠' },
                { label: 'UI/UX Strategy', icon: '🎨' },
                { label: 'Scalable Apps', icon: '🚀' },
                { label: 'Full Stack Savvy', icon: '💻' }
              ].map(item => (
                <div key={item.label} className="glass-card" style={{ padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '16px' }}>{item.label}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
