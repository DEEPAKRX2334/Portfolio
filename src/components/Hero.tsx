import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Trophy } from 'lucide-react';

const GIPHY_URL = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzVhcWN4amdrOWlkYWVscG1iMTk2N2o4Y3U5Zjh4bHVia2xod3FudiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7FrOU9tPbgAZtxV5mb/giphy.gif";

const ROLES = ["Java Full Stack Developer", "UI/UX Designer", "Problem Solver"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const currentRole = ROLES[index];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentRole) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % ROLES.length);
      }, 200);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  } as const;

  return (
    <section id="home" className="hero-wrapper">
      <div className="container">
        <div className="grid-2">
          
          <motion.div 
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={itemVariants} 
              className="tagline text-glow" 
              style={{ fontSize: '18px', letterSpacing: '0.6em', marginBottom: '30px' }}
            >
              PORTFOLIO
            </motion.span>
            
            <motion.h1 
              variants={itemVariants} 
              style={{ fontSize: 'min(62px, 10vw)', fontWeight: '900', color: 'white', marginBottom: '20px', lineHeight: '1.05' }}
            >
              Design. Develop.<br />
              <span className="text-gradient">Deliver</span> Intelligent<br />
              Experiences.
            </motion.h1>
            
            <motion.div variants={itemVariants} style={{ minHeight: '40px', marginBottom: '30px' }}>
              <h3 className="text-gradient" style={{ fontSize: '28px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--primary)', display: 'inline-block' }} />
                {displayText}
                <span className="cursor-animate" style={{ width: '3px', height: '30px', backgroundColor: 'var(--primary)', marginLeft: '8px', animation: 'blink 1s step-end infinite' }} />
              </h3>
            </motion.div>

            <motion.p 
              variants={itemVariants} 
              style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '550px', marginBottom: '40px', lineHeight: '1.6' }}
            >
              I create high-performance web applications that bridge the gap between design thinking and technological expertise.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', marginBottom: '40px' }}
            >
              <motion.a 
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#contact" 
                className="btn btn-primary" 
                style={{ padding: '16px 36px' }}
              >
                HIRE ME
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="btn btn-secondary" 
                style={{ padding: '16px 30px' }}
              >
                VIEW PROJECTS
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '15px' }}>
               {socialLinks.map((social, i) => (
                 <motion.a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary social-btn hover-glow" 
                  style={{ width: '50px', height: '50px', padding: '0', borderRadius: '14px', position: 'relative' }}
                  title={social.label}
                  whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                 >
                   {social.icon}
                   <span className="tooltip">{social.label}</span>
                 </motion.a>
               ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 60, damping: 15 }}
          >
            <div className="hero-orb animate-glow-orb" />
            <motion.img 
              src={GIPHY_URL} 
              alt="Deepak R Hero Visual" 
              className="hero-img hover-glow" 
              style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--primary)', padding: '12px', background: 'var(--bg-dark)', boxShadow: '0 0 50px rgba(255, 255, 255, 0.15)' }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </motion.div>

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
          background: var(--accent);
          border: 1px solid var(--glass-border);
          color: var(--secondary);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: bold;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }
      `}</style>
    </section>
  );
}
