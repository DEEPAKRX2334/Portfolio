import { motion } from 'framer-motion';
import nextlevelImg from '../assets/NextLevelcoder.jpeg';
import bookImg from '../assets/Bookmyshowimage.jpg';
import crowdsourceImg from '../assets/CrowdSourceimage.jpg';
import neuroImg from '../assets/NeuroTrackAiimage.png';
import foodImg from '../assets/foodImage.jpg';

export default function Projects() {
  const projects = [
    {
      title: "NextLevelCoder",
      category: "Personal Portfolio",
      description: "My custom portfolio project showcasing my path, expertise, skills, and projects as a software developer.",
      tags: ["React", "TypeScript", "Vite", "CSS3"],
      image: nextlevelImg,
      demoUrl: "https://tender-respect-production.up.railway.app/",
      githubUrl: "https://github.com/DEEPAKRX2334/Portfolio",
      featured: true
    },
    {
      title: "NeuroTrack AI",
      category: "AI & ML Platform",
      description: "An intelligent platform for real-time neuro-activity tracking and predictive analysis, built with high-performance ML models.",
      tags: ["React", "Java", "SpringBoot", "MySQL", "Tailwind"],
      image: neuroImg,
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Eatsly",
      category: "Full Stack E-commerce",
      description: "A complete food delivery solution with real-time tracking, seamless payment integration, and a dedicated admin dash.",
      tags: ["Java", "Spring Boot", "MySQL", "React"],
      image: foodImg,
      demoUrl: "#",
      githubUrl: "https://github.com/DEEPAKRX2334/Food-Order-Application"
    },
    {
      title: "BookMyShow Clone",
      category: "Web Application",
      description: "A high-fidelity clone of the popular booking platform, focusing on complex UI components and real-time seat availability.",
      tags: ["React", "Redux", "Node.js", "CSS3"],
      image: bookImg,
      demoUrl: "#",
      githubUrl: "https://github.com/DEEPAKRX2334/BookMyShow-Clone"
    },
    {
      title: "CrowdOps Source",
      category: "Open Source Platform",
      description: "Platform for collaborative project management and community-driven resource sharing with intelligent tagging.",
      tags: ["Next.js", "Firebase", "TypeScript", "Lucide"],
      image: crowdsourceImg,
      demoUrl: "#",
      githubUrl: "https://github.com/DEEPAKRX2334/Crowd-Source-Management-Design"
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 15
      }
    }
  } as const;

  return (
    <section id="projects" className="section bg-bg-dark">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">IMPACTFUL WORK</span>
          <h2 className="text-gradient">PROJECTS</h2>
        </motion.div>

        <motion.div 
          className="projects-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card project-card hover-glow"
              style={{ cursor: 'default' }}
            >
              <div className="project-img-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                />
              </div>
              
              <div style={{ padding: '30px' }}>
                <span className="text-gradient" style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{project.category}</span>
                <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '15px' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '25px' }}>
                  {project.title === "BookMyShow Clone" || project.title === "CrowdOps Source" 
                    ? "I expertly use Figma, Wireframing, and Prototyping to craft high-fidelity designs and seamless user experiences."
                    : project.description
                  }
                </p>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
                  {(project.title === "BookMyShow Clone" || project.title === "CrowdOps Source" 
                    ? ["Figma", "Wireframe", "Prototype", "Design"] 
                    : project.tags
                  ).map(tag => (
                    <motion.span 
                      key={tag} 
                      className="project-tag"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ cursor: 'pointer' }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary hover-glow" 
                      style={{ padding: '10px 20px', fontSize: '12px' }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      GITHUB
                    </motion.a>
                  )}
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <motion.a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary" 
                      style={{ padding: '10px 20px', fontSize: '12px' }}
                      whileHover={{ scale: 1.06, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      LIVE DEMO
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
