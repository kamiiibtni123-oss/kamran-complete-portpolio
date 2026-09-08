const projects = [
  {
    title: "School Management System",
    desc: "A full-stack school management application with authentication and different user roles.",
    tech: "React • Node.js • Express • MongoDB"
  },
  {
    title: "E-Commerce Website",
    desc: "A responsive online store with products, authentication and backend API integration.",
    tech: "React • Node.js • Express • MongoDB"
  },
  {
    title: "Task Management App",
    desc: "A task management application where users can create, update and delete tasks.",
    tech: "React • REST API • Node.js • MongoDB"
  }
];

export default function Projects() {
  return (
    <main className="page wide">
      <p className="section-title">MY WORK</p>
      <h1>Featured Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-icon">&lt;/&gt;</div>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <div className="tech">{project.tech}</div>
            <div className="project-buttons">
              <button type="button">Live Demo</button>
              <button type="button">GitHub</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}