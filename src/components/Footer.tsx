export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/DEEPAKRX2334' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/deepak-r-1ab5bb2a3/' },
    { name: 'Instagram', href: 'https://www.instagram.com/pr0fess0r07/' },
    { name: 'LeetCode', href: 'https://leetcode.com/u/DeepakRX/' },
    { name: 'HackerRank', href: 'https://www.hackerrank.com/profile/deepakramasamy74' }
  ];

  return (
    <footer className="footer bg-bg-dark">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          
          <div className="logo" style={{ fontSize: '32px' }}>
            Deepak <span className="text-gradient">R</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
                style={{ fontSize: '12px', letterSpacing: '0.2em' }}
              >
                {social.name}
              </a>
            ))}
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontStyle: 'italic', letterSpacing: '0.1em' }}>
            © 2024 — Deepak R. Built with Intelligence & Vanilla CSS.
          </p>

        </div>
      </div>
    </footer>
  );
}
