import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "GitHub",
  "Paystack",
  "Responsive Design",
];

const projects = [
  {
    title: "GlowBelle Salon Booking Platform",
    description:
      "A complete salon booking website for men, women, and children with services, appointments, backend API, database setup, and payment integration.",
    features: ["Booking system", "Service categories", "MongoDB backend", "Paystack setup"],
  },
  {
    title: "Expense Tracker Website",
    description:
      "A web application that helps users track income, expenses, balance, and spending activity through a clean dashboard.",
    features: ["Add income", "Add expenses", "View balance", "Dashboard UI"],
  },
  {
    title: "Business Landing Page",
    description:
      "A clean and modern landing page for small businesses with strong sections, responsive layout, and clear call-to-action buttons.",
    features: ["Hero section", "Services section", "Contact section", "Mobile responsive"],
  },
];

const services = [
  "Business Websites",
  "Portfolio Websites",
  "Booking Platforms",
  "Expense Tracker Apps",
  "Landing Pages",
  "React Websites",
  "Backend APIs",
  "Website Error Fixing",
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">Daniel Chinonso</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="tag">Web Developer</p>
            <h1>Hi, I’m Daniel Chinonso</h1>
            <p>
              I build modern, responsive, and user-friendly websites and web
              applications for businesses and individuals.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View My Projects</a>
              <a href="#contact" className="btn secondary">Contact Me</a>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="tag">About Me</p>
            <h2>I turn ideas into real websites and applications.</h2>
          </div>
          <p>
            I am a passionate web developer focused on building useful digital
            solutions. I enjoy creating websites that are fast, easy to use,
            mobile-friendly, and visually attractive. I have worked on projects
            such as salon booking platforms, business websites, and web apps
            with clean user interfaces.
          </p>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="tag">Skills</p>
            <h2>Technologies I use</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="tag">Projects</p>
            <h2>My recent work</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-heading">
            <p className="tag">Services</p>
            <h2>What I can build for you</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service}>{service}</div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading">
            <p className="tag">Contact</p>
            <h2>Let’s work together</h2>
          </div>
          <p>Have a project idea or need a website? Contact me and let’s build something great.</p>

          <div className="contact-box">
            <p><strong>Email:</strong> <a href="mailto:chinonsoesumei@gmail.com">chinonsoesumei@gmail.com</a></p>
            <p><strong>Phone/WhatsApp:</strong> <a href="tel:07079644908">07079644908</a></p>
            <p><strong>GitHub:</strong> Coming soon</p>
            <p><strong>Location:</strong> Nigeria</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Daniel Chinonso. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
