import { person, skills } from '../data'
export function About() {
  return (
    <section id="about" style={{ paddingTop: 110 }}>
      <div className="intro">
        <h2 style={{ margin: 0, fontSize: 'clamp(48px,8vw,104px)' }}>Student by degree, builder by habit.</h2>
        <div>
          <p>I am a final-year Computer Science student at SZABIST. I build complete web apps: the interface, the API and the database behind it.</p>
          <p>Right now I am building the frontend of a client's website with Next.js, React and TypeScript as a freelancer.</p>
        </div>
      </div>
    </section>
  )
}
export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">{skills.map(([h, t]) => (
        <div className="glass" key={h}><h3>{h}</h3>
          {h === 'Education' ? <p>{t}</p> : <div className="pills">{t.split(', ').map(x => <span key={x}>{x}</span>)}</div>}
        </div>
      ))}</div>
    </section>
  )
}
export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div className="exp glass">
        <div><h3>Freelance Frontend Developer</h3><p className="when">Remote, June 2026 to present</p></div>
        <ul>
          <li>Building a client's website with Next.js, React and TypeScript.</li>
          <li>Turning client requirements into working pages and reusable UI components.</li>
          <li>Providing updates and maintenance after launch.</li>
        </ul>
      </div>
    </section>
  )
}
export function Footer() {
  return (
    <footer id="contact" className="wrap"><div className="contact">
      <h2>Let's build something.</h2>
      <a className="mail" href={`mailto:${person.email}`}>{person.email}</a>
      <div className="f">
        <a href="https://github.com/ALFAID-SABAYO" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/ALFAID_CV.pdf" download>Download CV</a>
        <span>Karachi, Pakistan</span>
      </div>
    </div></footer>
  )
}
