import { useState, useEffect } from 'react';
import './index.css';
import { translations } from './data/translations';

// Icons as SVG components
const Icons = {
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  GraduationCap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Code: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Globe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  ArrowUp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  GitHub: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Heart: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Award: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('th');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const t = translations[lang];

  // Typing effect
  useEffect(() => {
    const fullText = t.hero.subtitle;
    let currentIndex = 0;
    setTypedText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [t.hero.subtitle]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Animate elements on scroll
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });

      // Animate skill bars
      document.querySelectorAll('.skill-progress').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(lang === 'th' ? 'en' : 'th');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const skills = {
    programming: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'C#', level: 65 },
      { name: 'JavaScript', level: 60 },
    ],
    web: [
      { name: 'HTML/CSS', level: 80 },
      { name: 'React', level: 55 },
      { name: 'Bootstrap', level: 75 },
    ],
    database: [
      { name: 'MySQL', level: 65 },
    ],
    tools: [
      { name: 'Git/GitHub', level: 75 },
      { name: 'VS Code', level: 85 },
      { name: 'IntelliJ IDEA', level: 70 },
    ],
  };

  const stats = [
    { number: '12+', label: lang === 'th' ? 'โปรเจกต์' : 'Projects' },
    { number: '3.58', label: 'GPA' },
    { number: '4+', label: lang === 'th' ? 'ภาษาโปรแกรม' : 'Languages' },
    { number: '2', label: lang === 'th' ? 'ปีการศึกษา' : 'Year' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <a href="#" className="logo">ARM.dev</a>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>{t.nav.education}</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a></li>
          </ul>

          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
            </button>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'th' ? 'EN' : 'TH'}
            </button>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          {/* Floating Particles */}
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>

          <div className="hero-content">
            <div className="hero-image fade-in">
              <div className="profile-image-wrapper glow">
                <img
                  src="https://avatars.githubusercontent.com/u/154404689?v=4"
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="hero-text">
              <h1 className="fade-in stagger-1">
                <span className="wave">👋</span> {t.hero.greeting}<br />
                <span className="gradient-text-animated">{t.hero.name}</span>
              </h1>
              <p className="hero-subtitle fade-in stagger-2">
                {typedText}
                {isTyping && <span className="typing-cursor"></span>}
              </p>
              <p className="hero-description fade-in stagger-3">{t.hero.description}</p>

              <div className="hero-badges fade-in stagger-3">
                <span className="badge">
                  <Icons.Star />
                  {t.hero.badges.gpa}
                </span>
                <span className="badge">
                  <Icons.GraduationCap />
                  {t.hero.badges.university}
                </span>
                <span className="badge">
                  <Icons.Calendar />
                  {t.hero.badges.year}
                </span>
              </div>

              <div className="hero-cta fade-in stagger-4">
                <a href="#projects" className="btn btn-primary ripple glow">
                  <Icons.Code />
                  {t.hero.viewProjects}
                </a>
                <a href="mailto:phuriphathem@gmail.com" className="btn btn-secondary ripple">
                  <Icons.Mail />
                  {t.hero.downloadCV}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">{t.about.title} <span>{t.about.titleHighlight}</span></h2>
            <p className="section-description">{t.about.description}</p>
          </div>

          <div className="about-grid">
            <div className="card card-lift fade-in stagger-1">
              <div className="card-icon icon-bounce">
                <Icons.MapPin />
              </div>
              <h3 className="card-title">{t.about.contact.title}</h3>

              <div className="contact-item">
                <div className="contact-icon"><Icons.MapPin /></div>
                <div className="contact-text">{t.about.contact.address}</div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Icons.Phone /></div>
                <div className="contact-text">{t.about.contact.phone}</div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Icons.Mail /></div>
                <div className="contact-text">
                  <a href={`mailto:${t.about.contact.email}`} className="animated-underline">{t.about.contact.email}</a>
                </div>
              </div>
            </div>

            <div className="card card-lift fade-in stagger-2">
              <div className="card-icon icon-bounce">
                <Icons.Heart />
              </div>
              <h3 className="card-title">{t.about.interests.title}</h3>
              <div className="interest-tags">
                {t.about.interests.items.map((item, i) => (
                  <span key={i} className="interest-tag shake-hover">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">{t.education.title} <span>{t.education.titleHighlight}</span></h2>
            <p className="section-description">{t.education.description}</p>
          </div>

          <div className="education-grid">
            <div className="card fade-in stagger-1">
              <div className="card-icon">
                <Icons.GraduationCap />
              </div>
              <span className="edu-period">
                <Icons.Calendar /> {t.education.university.period}
              </span>
              <h3 className="card-title">{t.education.university.degree}</h3>
              <p className="card-subtitle">{t.education.university.name}</p>
              <p className="card-text">{t.education.university.faculty}</p>
              <p className="card-text">{t.education.university.major}</p>
              <div className="edu-gpa">
                <Icons.Award /> {t.education.university.gpa}
              </div>
            </div>

            <div className="card fade-in stagger-2">
              <div className="card-icon">
                <Icons.GraduationCap />
              </div>
              <span className="edu-period">
                <Icons.Calendar /> {t.education.highschool.period}
              </span>
              <h3 className="card-title">{t.education.highschool.degree}</h3>
              <p className="card-subtitle">{t.education.highschool.name}</p>
              <p className="card-text">{t.education.highschool.program}</p>
              <div className="edu-gpa">
                <Icons.Award /> {t.education.highschool.gpa}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">{t.skills.title} <span>{t.skills.titleHighlight}</span></h2>
            <p className="section-description">{t.skills.description}</p>
          </div>

          <div className="skills-grid">
            <div className="card fade-in stagger-1">
              <div className="card-icon">
                <Icons.Globe />
              </div>
              <h3 className="card-title">{t.skills.language.title}</h3>

              <div className="skill-category">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{t.skills.language.english}</span>
                    <span className="skill-level">{t.skills.language.englishLevel}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ '--progress': '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card fade-in stagger-2">
              <div className="card-icon">
                <Icons.Code />
              </div>
              <h3 className="card-title">{t.skills.technical.title}</h3>

              <div className="skill-category">
                <div className="skill-category-title">{t.skills.technical.programming}</div>
                {skills.programming.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ '--progress': `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-category">
                <div className="skill-category-title">{t.skills.technical.web}</div>
                {skills.web.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ '--progress': `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-category">
                <div className="skill-category-title">{t.skills.technical.tools}</div>
                {skills.tools.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ '--progress': `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">{t.projects.title} <span>{t.projects.titleHighlight}</span></h2>
            <p className="section-description">{t.projects.description}</p>
          </div>

          <div className="projects-grid">
            {t.projects.list.map((project, i) => (
              <div key={i} className={`project-card fade-in stagger-${(i % 4) + 1}`}>
                <div
                  className="project-image"
                  style={{
                    background: `linear-gradient(135deg, ${['#0d5c72', '#1a9aa8', '#7eb8b8', '#0d5c72'][i % 4]} 0%, ${['#1a9aa8', '#7eb8b8', '#0d5c72', '#1a9aa8'][i % 4]} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: 'white'
                  }}
                >
                  <Icons.Code />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.projects.viewCode} <Icons.ExternalLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-social">
            <a href="https://github.com/PhuriphatiZAMU" target="_blank" rel="noopener noreferrer" className="social-link">
              <Icons.GitHub />
            </a>
            <a href="mailto:phuriphathem@gmail.com" className="social-link">
              <Icons.Mail />
            </a>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} ภูริพัฒน์ เหมกุล • {t.footer.madeWith}
          </p>
          <a href="#" className="footer-text" onClick={scrollToTop}>
            ↑ {t.footer.backToTop}
          </a>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <Icons.ArrowUp />
      </button>
    </>
  );
}

export default App;
