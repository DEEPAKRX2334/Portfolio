import { motion } from 'framer-motion';
import { Award, Shield, Cpu, MessageSquare, Trophy, ExternalLink } from 'lucide-react';

export default function Certification() {
  const certifications = [
    {
      title: "Cyber Security",
      issuer: "NPTEL",
      icon: <Shield size={24} className="text-primary" />,
      pdfUrl: "/certificates/Cyber Security and Privacy NPTEL.pdf"
    },
    {
      title: "Full Stack Development",
      issuer: "Novitech Pvt Ltd",
      icon: <Cpu size={24} className="text-secondary" />,
      pdfUrl: "/certificates/fullsttack.pdf"
    },
    {
      title: "Communication Certificate",
      issuer: "tcsION",
      icon: <MessageSquare size={24} className="text-accent" />,
      pdfUrl: "/certificates/communication.pdf"
    },
    {
      title: "UI/UX Design",
      issuer: "Novitech Pvt Ltd",
      icon: <Award size={24} className="text-primary" />,
      pdfUrl: "/certificates/uiux.pdf"
    }
  ];

  const achievements = [
    {
      title: "Basketball Zonal Level Winner",
      detail: "Achieved winner status at the zonal level in 10th grade.",
      icon: <Trophy size={24} className="text-secondary" />
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15
      }
    }
  } as const;

  return (
    <section id="certifications" className="section bg-bg-dark">
      <div className="container">
        
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">CREDENTIALS</span>
          <h2 className="text-gradient">CERTIFICATIONS</h2>
        </motion.div>

        <motion.div 
          className="certification-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.title} 
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card hover-glow" 
              style={{ padding: '30px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px', cursor: 'default' }}
            >
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div className="cert-icon-container">
                  {cert.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'white' }}>{cert.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cert.issuer}</p>
                </div>
              </div>
              
              <motion.a 
                href={cert.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary hover-glow" 
                style={{ width: '100%', padding: '12px', fontSize: '11px', gap: '8px' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                VIEW CERTIFICATE <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="section-title" 
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">MILESTONES</span>
          <h2 className="text-gradient">ACHIEVEMENTS</h2>
        </motion.div>

        <motion.div 
          style={{ maxWidth: '800px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          {achievements.map((ach) => (
            <motion.div 
              key={ach.title} 
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card hover-glow" 
              style={{ padding: '40px', borderRadius: '32px', display: 'flex', gap: '30px', alignItems: 'center' }}
            >
               <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '20px' }}>
                {ach.icon}
               </div>
               <div>
                  <h4 style={{ fontSize: '22px', fontWeight: '900', color: 'white', marginBottom: '8px' }}>{ach.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>{ach.detail}</p>
               </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
