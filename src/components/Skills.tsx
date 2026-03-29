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

  return (
    <section id="skills" className="section bg-bg-dark">
      <div className="container">
        <div className="section-title">
          <span className="tagline">EXPERTISE & TOOLS</span>
          <h2 className="text-gradient">Technical Arsenal</h2>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{category.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>{category.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    style={{ 
                      padding: '8px 16px', 
                      backgroundColor: 'rgba(255,255,255,0.05)', 
                      borderRadius: '8px', 
                      fontSize: '12px', 
                      fontWeight: '600',
                      color: '#94A3B8'
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
