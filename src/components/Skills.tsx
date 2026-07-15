import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
      icon: "🎨"
    },
    {
      title: "Backend Core",
      skills: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "JavaEE"],
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "User Research"],
      icon: "🧠"
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Maven", "Postman", "VS Code", "IntelliJ"],
      icon: "🛠️"
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
    <section id="skills" className="section bg-bg-dark">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline">EXPERTISE & TOOLS</span>
          <h2 className="text-gradient">Technical Arsenal</h2>
        </motion.div>

        <motion.div 
          className="skills-grid" 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-card hover-glow" 
              style={{ padding: '40px', borderRadius: '24px', cursor: 'default' }}
            >
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{category.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>{category.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map((skill) => (
                  <motion.li 
                    key={skill} 
                    className="skill-tag"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
