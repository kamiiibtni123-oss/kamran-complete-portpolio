const projects = [
  
  {
    title: "E-Commerce Website",
    desc: "A responsive online store with products, authentication and backend API integration.",
    tech: "React • Node.js • Express • MongoDB",
    demo: "https://zarlala-brand.vercel.app",
    github: "https://github.com/kamiiibtni123-oss/zarlala-brand"
  },
  {
    title: "Task Management App",
    desc: "A task management application where users can create, update and delete tasks.",
    tech: "React • REST API • Node.js • MongoDB",
    demo: "https://frontend-23ks.vercel.app",
    github: "https://github.com/kamiiibtni123-oss/task-manager-mern"
  },
  {
  title: "School Management System",
  desc: "A school management website with a clean dashboard.",
  tech: "HTML • CSS • JavaScript",
  demo: "https://kamiiibtni123-oss.github.io/school-management-system/",
  github: "https://github.com/kamiiibtni123-oss/school-management-system",
},
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
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button type="button">Live Demo</button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button type="button">GitHub</button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}