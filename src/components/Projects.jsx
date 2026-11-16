import { useState } from 'react'
import { projects, roles } from '../data'
import useInView from '../useInView'

function RoleViewer() {
  const [role, setRole] = useState('Employee')
  return (
    <div className="mock">
      <div className="row" role="tablist" aria-label="SkillForge roles">
        {Object.keys(roles).map(k => (
          <button key={k} role="tab" aria-selected={role === k} onClick={() => setRole(k)}>{k}</button>
        ))}
      </div>
      <div aria-live="polite">
        {roles[role].map(([t, d]) => (
          <div className="tile" key={role + t} style={{ marginBottom: 8 }}><b>{t}</b><small>{d}</small></div>
        ))}
      </div>
    </div>
  )
}
const Soft = ({ children }) => <small className="soft">{children}</small>
const mocks = {
  sf: RoleViewer,
  re: () => (
    <div className="mock">
      <Soft>Best model on 97,910 Karachi and Islamabad listings</Soft>
      <div className="bar"><em style={{ '--w': '90%' }}>Random Forest, R2 0.90</em></div>
      <Soft>3 models trained and compared</Soft>
    </div>
  ),
  co: () => (
    <div className="mock">
      <div className="row"><button aria-selected="true">Admin</button><button>Teacher</button><button>Student</button></div>
      <div className="cert"><Soft>Certificate issued automatically</Soft><div className="disp">Course completed</div></div>
    </div>
  ),
  fm: () => (
    <div className="mock">
      <Soft>Normalized schema, simplified</Soft>
      <div className="schema"><div>Users<small>login</small></div><div>Jobs<small>postings</small></div><div>Bids<small>bidding</small></div></div>
    </div>
  ),
}

function Card({ p, i }) {
  const [ref, seen] = useInView(0.4)
  const Mock = mocks[p.mock]
  return (
    <article ref={ref} className={'card glass' + (seen ? ' seen' : '')} style={{ '--i': i }}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px') }}>
      <div>
        <h3>{p.name}</h3>
        <p className="kind">{p.kind}</p>
        <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>
        <div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
        <div className="actions">
          <a className="btn p" href={p.repo} target="_blank" rel="noopener noreferrer">View code</a>
          {p.live && <a className="btn s" href={p.live} target="_blank" rel="noopener noreferrer">Live demo</a>}
        </div>
      </div>
      <Mock />
    </article>
  )
}
export default function Projects() {
  return (
    <section id="work">
      <h2>Work</h2>
      {projects.map((p, i) => <Card key={p.name} p={p} i={i} />)}
    </section>
  )
}
