import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Code2, Trophy } from 'lucide-react';

const GIPHY_URL = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzVhcWN4amdrOWlkYWVscG1iMTk2N2o4Y3U5Zjh4bHVia2xod3FudiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7FrOU9tPbgAZtxV5mb/giphy.gif";

export default function Hero() {
  const roles = ["Java Full Stack Developer", "UI/UX Designer", "Problem Solver"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const currentRole = roles[index];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentRole) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    } else {
      const nextText = isDeleting 
        ? currentRole.substring(0, displayText.length - 1)
        : currentRole.substring(0, displayText.length + 1);
      
      timeoutId = setTimeout(() => setDisplayText(nextText), speed);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, index]);

  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:deepakramasamy74@gmail.com", label: "Email" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/deepak-r-1ab5bb2a3/", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/DEEPAKRX2334", label: "GitHub" },
    { icon: <Code2 size={20} />, href: "https://leetcode.com/u/DeepakRX/", label: "LeetCode" },
    { icon: <Trophy size={20} />, href: "https://www.hackerrank.com/profile/deepakramasamy74", label: "HackerRank" }
  ];

  return (
    <section id="home" className="hero-wrapper">
      <div className="container">
        <div className="grid-2">
          
          <div className="hero-text">
            <span className="tagline" style={{ fontSize: '18px', letterSpacing: '0.6em', marginBottom: '30px' }}>PORTFOLIO</span>
            
            <h1 style={{ fontSize: 'min(62px, 10vw)', fontWeight: '900', color: 'white', marginBottom: '20px', lineHeight: '1.05' }}>
              Design. Develop.<br />
              <span className="text-gradient">Deliver</span> Intelligent<br />
              Experiences.
            </h1>
            
            <div style={{ minHeight: '40px', marginBottom: '30px' }}>
              <h3 className="text-gradient" style={{ fontSize: '28px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--primary)', display: 'inline-block' }} />
                {displayText}
                <span className="cursor-animate" style={{ width: '3px', height: '30px', backgroundColor: 'var(--primary)', marginLeft: '8px', animation: 'blink 1s step-end infinite' }} />
              </h3>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '18px', maxWidth: '550px', marginBottom: '40px', lineHeight: '1.6' }}>
              I create high-performance web applications that bridge the gap between design thinking and technological expertise.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '16px 36px' }}>HIRE ME</a>
              <a href="#projects" className="btn btn-secondary" style={{ padding: '16px 30px' }}>VIEW PROJECTS</a>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
               {socialLinks.map((social, i) => (
                 <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary social-btn" 
                  style={{ width: '50px', height: '50px', padding: '0', borderRadius: '14px', position: 'relative' }}
                  title={social.label}
                 >
                   {social.icon}
                   <span className="tooltip">{social.label}</span>
                 </a>
               ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb" />
            <img 
              src={GIPHY_URL} 
              alt="Deepak R Hero Visual" 
              className="hero-img" 
              style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '50%', border: '2px solid var(--primary)', padding: '12px', background: 'var(--bg-dark)', boxShadow: '0 0 50px rgba(139,92,246,0.3)' }}
            />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
        .social-btn:hover .tooltip {
          opacity: 1;
          transform: translateY(-8px);
        }
        .tooltip {
          position: absolute;
          top: -35px;
          background: var(--primary);
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: bold;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
