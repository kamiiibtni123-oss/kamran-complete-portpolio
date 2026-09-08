export default function Resume() {
  return (
    <main className="page">
      <p className="section-title">MY RESUME</p>
      <h1>Resume</h1>
      <div className="resume-box">
        <h2>Kamran Khan</h2>
        <p className="resume-role">MERN Stack Developer</p>

        <h3>Profile</h3>
        <p>Full Stack Web Developer focused on React, Node.js, Express.js and MongoDB.</p>

        <h3>Technical Skills</h3>
        <p>HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB, Mongoose, REST API, Git and GitHub.</p>

        <h3>Career Goal</h3>
        <p>Seeking a junior developer role or internship where I can contribute and grow professionally.</p>

        <button className="btn primary" onClick={() => window.print()}>Print / Save PDF</button>
      </div>
    </main>
  );
}