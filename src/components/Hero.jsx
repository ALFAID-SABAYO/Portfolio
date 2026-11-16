import { useRef } from 'react'
import { person, stack } from '../data'

export function Nav() {
  return (
    <nav className="nav glass" aria-label="Main">
      <b className="disp brand">AS</b>
      <div className="l">
        <a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        <a className="btn p" href={`mailto:${person.email}`}>Hire me</a>
      </div>
    </nav>
  )
}

export function Hero() {
  const ref = useRef(null)
  const move = e => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5) * 2)
    ref.current.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5) * 2)
  }
  return (
    <header className="hero wrap" ref={ref} onMouseMove={move}>
      <div>
        <div className="pill glass">Open to internships and junior roles</div>
        <h1><span><i>ALFAID</i></span><span><i>SABAYO</i></span></h1>
        <p className="lead">Final-year Computer Science student at SZABIST. I build full stack web apps with <b>React, Next.js, Node.js and ASP.NET Core</b>.</p>
        <div className="cta">
          <a className="btn p" href="#work">See my work</a>
          <a className="btn s" href="/ALFAID_CV.pdf" download>Download CV</a>
        </div>
      </div>
      <div className="stage">
        <div className="frame glass"><img src="/alfaid.jpg" alt={`Portrait of ${person.name}`} width="1000" height="1000" /></div>
        <div className="chip glass a" style={{ '--d': 1.4 }}>React</div>
        <div className="chip glass b" style={{ '--d': 2 }}>Next.js</div>
        <div className="chip glass c" style={{ '--d': 1.8 }}>PostgreSQL</div>
        <div className="chip glass d" style={{ '--d': 1.2 }}>Karachi</div>
      </div>
    </header>
  )
}
export function Strip() {
  return <div className="strip" aria-hidden="true"><div>{[...stack, ...stack].map((t, i) => <span key={i}>{t}</span>)}</div></div>
}
