import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      year: "2023 - 2027",
      degree: "B.E. Computer Science and Design",
      institution: "Erode Sengunthar Engineering College",
      detail: "CGPA: 8.0"
    },
    {
      year: "2021 - 2023",
      degree: "HSC (Higher Secondary)",
      institution: "MS Vidyalaya Hr Sec School",
      detail: "Focus: Computer Science & Mathematics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
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

  return (
    <section id="education" className="section bg-bg-dark">
      <div className="container">
        
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">ACADEMIC JOURNEY</span>
          <h2 className="text-gradient" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            Education
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginTop: '15px' }}>
            Continuous learning through engineering studies and practical projects.
          </p>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            className="glass-card hover-glow" 
            style={{ padding: '40px 50px', borderRadius: '32px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={28} className="text-secondary" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>Education</h3>
            </div>

            <motion.div 
              className="timeline-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {educationList.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-dot" />
                  <span className="timeline-date">{edu.year}</span>
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <p className="timeline-subtitle">{edu.institution}</p>
                  <span className="timeline-grade">{edu.detail}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
