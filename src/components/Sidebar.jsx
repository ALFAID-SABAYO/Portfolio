import { useState } from 'react'
import { person } from '../data'
import Icon from './Icon'
const rows = [
  ['mail', 'Email', person.email, `mailto:${person.email}`],
  ['phone', 'Phone', person.phone, `tel:${person.phone.replace(/ /g, '')}`],
  ['pin', 'Location', person.location, null],
  ['book', 'Education', 'SZABIST, Karachi (2027)', null],
]
export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <aside className={'side card' + (open ? ' open' : '')}>
      <div className="s-top">
        <figure className="avatar"><img src="/alfaid.jpg" alt={`Portrait of ${person.name}`} width="170" height="170" /></figure>
        <div>
          <h1 className="name">{person.name}</h1>
          <p className="role">{person.title}</p>
        </div>
        <button className="more" onClick={() => setOpen(!open)} aria-expanded={open}><span>{open ? 'Hide' : 'Show'} contacts</span><Icon n="down" size={16} /></button>
      </div>
      <div className="s-more">
        <hr />
        <ul className="contacts">
          {rows.map(([ic, l, v, href]) => (
            <li key={l}><span className="ibox"><Icon n={ic} size={17} /></span>
              <div><small>{l}</small>{href ? <a href={href}>{v}</a> : <p>{v}</p>}</div></li>
          ))}
        </ul>
        <hr />
        <ul className="social">
          <li><a className="ibox" href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon n="github" size={18} /></a></li>
          <li><a className="ibox" href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon n="linkedin" size={18} /></a></li>
        </ul>
        <div className="side-foot">
          <p className="status">Open to internships and junior roles</p>
          <a className="btn full solid" href="#contact"><Icon n="send" size={18} />Hire me</a>
          <a className="btn full" href="/ALFAID_CV.pdf" download><Icon n="dl" size={18} />Download CV</a>
        </div>
      </div>
    </aside>
  )
}
