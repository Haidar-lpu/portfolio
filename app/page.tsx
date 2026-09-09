'use client'

import { useEffect, useState } from 'react'

const navItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'SQL'],
  'Frameworks & libraries': ['Spring Boot', 'React JS', 'Node JS', 'Express JS'],
  'Tools & platforms': ['PostgreSQL', 'Git', 'GitHub', 'Jira', 'VS Code'],
  'Core strengths': ['Data Structures & Algorithms', 'OOP', 'Full-stack development'],
}

const projects = [
  {
    number: '01',
    title: 'AI-Powered Multi-Disease Clinical Decision Support System',
    description:
      'A scalable clinical decision support platform combining deep learning inference with a Spring Boot and React experience. Designed to screen for brain stroke, tuberculosis, and heart disease with confidence-based predictions.',
    tags: ['Java', 'Spring Boot', 'React', 'VGG16', 'AlexNet', 'ResNet50'],
    meta: 'Jul 2025 — Aug 2026',
  },
  {
    number: '02',
    title: 'Hodee Interior',
    description:
      'A full-stack digital platform for an interior design startup, with a responsive portfolio, project gallery, secure admin panel, enquiry management, and database-driven content workflows.',
    tags: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    meta: 'Feb 2024 — May 2024',
  },
]

const experience = [
  {
    role: 'CTO & Founding Engineer',
    org: 'Hodee Interior · Self-employed',
    date: 'May 2025 — Present',
    detail:
      'Spearheaded the end-to-end technology strategy for a home interior startup. Architected backend infrastructure and workflow systems, automated customer lifecycle operations, and built reliable systems handling 100+ customer records and project pipelines.',
    tech: 'HTML · CSS · JavaScript · Node.js · Express.js · PostgreSQL',
  },
  {
    role: 'Technical Team Lead',
    org: 'CodingBlocks, LPU · Part-time',
    date: 'Feb 2026 — Present',
    detail:
      'Mentor peers in programming fundamentals and problem-solving, organize coding events and workshops, and contribute to technical discussions and community learning initiatives.',
  },
  {
    role: 'Researcher — AI in Healthcare',
    org: 'Aligarh Muslim University',
    date: 'Jul 2024 — Jan 2025',
    detail:
      'Conducted a year of research on an AI-powered multi-disease clinical decision support system. Developed VGG16 and AlexNet models, then integrated them with a Spring Boot backend for real-world clinical usability.',
  },
  {
    role: 'Coordinator, Training & Placement Office',
    org: 'University Polytechnic, AMU',
    date: 'Aug 2024 — May 2025',
    detail:
      'Coordinated placement drives, supported recruiters, and managed student communication to ensure smooth execution of campus recruitment activities.',
  },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-20% 0px -65% 0px' },
    )
    navItems.forEach(([id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('haidarali843119@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Haidar Ali home">
          <span className="brand-mark">HA</span>
          <span>Haidar Ali</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-resume" href="mailto:haidarali843119@gmail.com?subject=Resume%20request">Resume ↗</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(value => !value)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
            {dark ? '☼' : '◐'}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(value => !value)} aria-label="Toggle navigation menu">{menuOpen ? '×' : '☰'}</button>
        </div>
      </header>

      <section id="top" className="hero page-shell">
        <div className="hero-copy">
          <p className="status"><span className="status-dot" /> Available for meaningful opportunities</p>
          <h1>Building systems<br /><em>worth relying on.</em></h1>
          <p className="hero-intro">Software developer and founding engineer focused on thoughtful full-stack products, applied AI, and dependable systems that make complex work feel simple.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View selected work <span>↗</span></a>
            <button className="button button-quiet" onClick={copyEmail}>{copied ? 'Email copied' : 'Copy email'} <span>⧉</span></button>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="hero-coordinate">25.56° N<br />84.98° E</div>
          <div className="hero-line" />
          <p>Based in Bihar, India<br />Working across the stack</p>
        </aside>
      </section>

      <div className="page-shell availability-bar"><span>Currently</span><strong>CTO & Founding Engineer at Hodee Interior</strong><span className="availability-location">India · IST</span></div>

      <section id="about" className="page-shell content-section about-section">
        <SectionHeading eyebrow="01 / Profile" title="A builder with a bias for clarity." />
        <div className="about-grid">
          <div className="about-lead"><p>I enjoy working at the intersection of <strong>product thinking, software engineering, and emerging technology.</strong> My work spans early-stage ownership, AI research, and building the systems that keep growing teams moving.</p><p>Whether I am shaping an architecture, untangling a hard problem, or mentoring a teammate, I care about the details that make software useful, understandable, and resilient.</p></div>
          <div className="fact-list"><div><span>01</span><strong>Full-stack developer</strong><p>From data models to considered interfaces.</p></div><div><span>02</span><strong>Applied AI researcher</strong><p>Turning models into practical tools.</p></div><div><span>03</span><strong>Technical mentor</strong><p>Making difficult concepts approachable.</p></div></div>
        </div>
      </section>

      <section id="skills" className="page-shell content-section">
        <SectionHeading eyebrow="02 / Capabilities" title="Tools I use to do the work." />
        <div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><p className="skill-label">{group}</p><div className="tag-list">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section id="projects" className="page-shell content-section">
        <SectionHeading eyebrow="03 / Selected work" title="Projects with a point of view." />
        <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-body"><div className="project-top"><p className="project-meta">{project.meta}</p><span className="arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section id="experience" className="page-shell content-section">
        <SectionHeading eyebrow="04 / Experience" title="Learning by owning the outcome." />
        <div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker">0{index + 1}</div><div className="timeline-content"><div className="timeline-head"><div><h3>{item.role}</h3><p className="org">{item.org}</p></div><time>{item.date}</time></div><p>{item.detail}</p>{item.tech && <p className="tech-line">{item.tech}</p>}</div></article>)}</div>
      </section>

      <section id="education" className="page-shell content-section split-section">
        <div><SectionHeading eyebrow="05 / Education" title="Grounded in fundamentals." /><div className="education-list"><div><h3>B.Tech in Computer Science & Engineering</h3><p>Lovely Professional University · 2025 — Present</p><strong>CGPA 8.18</strong></div><div><h3>Diploma in Computer Science</h3><p>Aligarh Muslim University · 2022 — 2025</p><strong>CGPA 9.4</strong></div><div><h3>10th with Science</h3><p>Aquleema High School · 2021 — 2022</p><strong>88.8%</strong></div></div></div>
        <div className="credentials"><p className="skill-label">Training & certificates</p><ul><li>Full Stack Web Development — Apna College</li><li>Java with DSA — Apna College</li><li>DSA for Placements — Coursera</li><li>Object Oriented Programming — iamneo</li><li>Java Programming — iamneo</li><li>Data Structures and Algorithms — iamneo</li></ul></div>
      </section>

      <section className="page-shell content-section achievement-section"><div className="achievement-mark">02</div><div><p className="eyebrow">06 / Recognition</p><h2>Rank 2 in LPU at ICPC.</h2><p>Represented Lovely Professional University in the International Collegiate Programming Contest, competing on algorithmic problem-solving and coding efficiency.</p></div><div className="patent-note"><p className="skill-label">Patent filed</p><strong>Temporal Coupling of Emotional and Physiological Signals for Health Prediction</strong></div></section>

      <section id="contact" className="page-shell content-section contact-section"><div><SectionHeading eyebrow="07 / Contact" title="Let's build something useful." /><p className="contact-copy">Have a problem worth solving, a team that values ownership, or a project that needs a thoughtful technical partner? I would love to hear about it.</p></div><div className="contact-actions"><a className="contact-email" href="mailto:haidarali843119@gmail.com">haidarali843119@gmail.com <span>↗</span></a><button className="button button-primary" onClick={copyEmail}>{copied ? 'Email copied' : 'Start a conversation'} <span>↗</span></button><div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Bihar, India</span></div></div></section>

      <footer className="page-shell footer"><span>© 2026 Haidar Ali</span><span>Designed & built with intent.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer>
    </main>
  )
}
