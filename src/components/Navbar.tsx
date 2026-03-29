import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-fixed ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo" style={{ fontSize: '34px', fontWeight: '900' }}>
          Deepak <span className="text-gradient">R</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
          HIRE ME
        </a>
      </div>
    </nav>
  );
}
