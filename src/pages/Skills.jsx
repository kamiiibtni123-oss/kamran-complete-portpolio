const skills = [
  ["HTML", "Structure and semantic web pages"],
  ["CSS", "Responsive layouts and modern styling"],
  ["Bootstrap", "Fast responsive UI development"],
  ["JavaScript", "Modern ES6+ web programming"],
  ["React.js", "Components, hooks and frontend apps"],
  ["Node.js", "JavaScript runtime for backend"],
  ["Express.js", "REST API and backend development"],
  ["MongoDB", "NoSQL database"],
  ["Mongoose", "MongoDB modeling with Node"],
  ["REST API", "GET, POST, PUT and DELETE"],
  ["Git", "Version control"],
  ["GitHub", "Code hosting and collaboration"]
];

export default function Skills() {
  return (
    <main className="page wide">
      <p className="section-title">MY SKILLS</p>
      <h1>Technologies I Use</h1>
      <div className="skills-grid">
        {skills.map(([name, desc]) => (
          <div className="skill-card" key={name}>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}