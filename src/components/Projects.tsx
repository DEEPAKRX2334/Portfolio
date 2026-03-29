import bookImg from '../assets/Bookmyshowimage.jpg';
import crowdsourceImg from '../assets/CrowdSourceimage.jpg';
import neuroImg from '../assets/NeuroTrackAiimage.png';
import foodImg from '../assets/foodImage.jpg';

export default function Projects() {
  const projects = [
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

  return (
    <section id="projects" className="section bg-bg-dark">
      <div className="container">
        <div className="section-title">
          <span className="tagline">IMPACTFUL WORK</span>
          <h2 className="text-gradient">PROJECTS</h2>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
          {projects.map((project) => (
            <div key={project.title} className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '32px' }}>
              <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              
              <div style={{ padding: '30px' }}>
                <span className="text-gradient" style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{project.category}</span>
                <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '15px' }}>{project.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '16px', marginBottom: '25px' }}>
                  {project.title === "BookMyShow Clone" || project.title === "CrowdOps Source" 
                    ? "I expertly use Figma, Wireframing, and Prototyping to craft high-fidelity designs and seamless user experiences."
                    : project.description
                  }
                </p>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                  {(project.title === "BookMyShow Clone" || project.title === "CrowdOps Source" 
                    ? ["Figma", "Wireframe", "Prototype", "Design"] 
                    : project.tags
                  ).map(tag => (
                    <span key={tag} style={{ padding: '6px 14px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '11px', color: '#94A3B8' }}>#{tag}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary" 
                    style={{ padding: '10px 20px', fontSize: '12px' }}
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
