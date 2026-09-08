import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>
          <h1>Kamran Khan</h1>
          <h2>MERN Stack Developer</h2>
          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React, Node.js, Express.js and MongoDB.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary">View Projects</Link>
            <Link to="/contact" className="btn secondary">Contact Me</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-dots"><i></i><i></i><i></i></div>
          <div className="code-box">
            <span>const</span> developer = {"{"}<br />
            &nbsp;&nbsp;name: <b>"Kamran Khan"</b>,<br />
            &nbsp;&nbsp;role: <b>"MERN Developer"</b>,<br />
            &nbsp;&nbsp;skills: <b>["React", "Node"]</b><br />
            {"}"};
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-title">WHAT I DO</p>
        <h2>Build. Learn. Improve.</h2>
        <div className="mini-grid">
          <div className="info-card"><h3>Frontend</h3><p>Responsive interfaces with React, JavaScript, HTML and CSS.</p></div>
          <div className="info-card"><h3>Backend</h3><p>REST APIs and server-side applications with Node and Express.</p></div>
          <div className="info-card"><h3>Database</h3><p>MongoDB and Mongoose for reliable application data.</p></div>
        </div>
      </section>
    </main>
  );
}