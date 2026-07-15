import { motion } from 'framer-motion';
import profileImg from '../assets/profileimage.jpeg';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    })
  };

  return (
    <section id="about" className="section bg-bg-dark">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">ABOUT THE DEVELOPER</span>
          <h2 className="text-gradient">Logic & Design Combined</h2>
        </motion.div>

        <div className="grid-2">
          
          <motion.div 
            className="about-img-container hover-glow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
          >
            <img 
              src={profileImg} 
              alt="Deepak R Profile" 
              className="about-img" 
            />
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
              I’m <b style={{ color: 'white' }}>Deepak R</b>, a passionate Full Stack Developer and UI/UX Designer who enjoys building clean, user-friendly, and intelligent digital experiences.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
              Currently pursuing my degree in Computer Science and Design, I focus on combining design thinking with development skills to create applications that are not only functional but also intuitive and visually engaging.
            </p>
            
            <div className="strengths-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { label: 'Problem Solving', icon: '🧠' },
                { label: 'UI/UX Strategy', icon: '🎨' },
                { label: 'Scalable Apps', icon: '🚀' },
                { label: 'Full Stack Savvy', icon: '💻' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.label} 
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card hover-glow" 
                  style={{ padding: '20px', borderRadius: '16px', cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '16px' }}>{item.label}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
