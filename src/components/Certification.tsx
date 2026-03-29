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

  return (
    <section id="certifications" className="section bg-bg-dark">
      <div className="container">
        
        <div className="section-title">
          <span className="tagline">CREDENTIALS</span>
          <h2 className="text-gradient">CERTIFICATIONS</h2>
        </div>

        <div className="certification-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          {certifications.map((cert) => (
            <div key={cert.title} className="glass-card" style={{ padding: '30px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '16px' }}>
                  {cert.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'white' }}>{cert.title}</h4>
                  <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cert.issuer}</p>
                </div>
              </div>
              
              <a 
                href={cert.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '12px', fontSize: '11px', gap: '8px' }}
              >
                VIEW CERTIFICATE <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="section-title" style={{ marginBottom: '40px' }}>
          <span className="tagline">MILESTONES</span>
          <h2 className="text-gradient">ACHIEVEMENTS</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {achievements.map((ach) => (
            <div key={ach.title} className="glass-card" style={{ padding: '40px', borderRadius: '32px', display: 'flex', gap: '30px', alignItems: 'center' }}>
               <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '20px' }}>
                {ach.icon}
               </div>
               <div>
                  <h4 style={{ fontSize: '22px', fontWeight: '900', color: 'white', marginBottom: '8px' }}>{ach.title}</h4>
                  <p style={{ color: '#94A3B8', fontSize: '16px' }}>{ach.detail}</p>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
