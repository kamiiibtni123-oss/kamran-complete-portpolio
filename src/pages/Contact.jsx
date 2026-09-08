import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="page contact-page">
      <p className="section-title">GET IN TOUCH</p>
      <h1>Contact Me</h1>
      <p className="contact-intro">I'm currently looking for a junior developer position or internship opportunity.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button className="btn primary" type="submit">Send Message</button>
        {sent && <p className="success">Message form submitted successfully.</p>}
      </form>

      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:your-email@gmail.com">Email</a>
      </div>
    </main>
  );
}