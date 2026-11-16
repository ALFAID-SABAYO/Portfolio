import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import Icon from './Icon'
import { person, about, doing, education, experience, achievements, skills, filters, projects } from '../data'

const Title = ({ children }) => <h2 className="title">{children}</h2>

export function About() {
  return (
    <article>
      <Title>About me</Title>
      <div className="text">{about.map(t => <p key={t}>{t}</p>)}</div>
      <h3 className="sub">What I do</h3>
      <ul className="doing">
        {doing.map(d => (
          <li className="card" key={d.title}><span className="big-i"><Icon n={d.icon} size={32} /></span>
            <div><h4>{d.title}</h4><p>{d.text}</p></div></li>
        ))}
      </ul>
    </article>
  )
}

function Timeline({ icon, title, items }) {
  return (
    <section className="tl-wrap">
      <div className="tl-head"><span className="ibox"><Icon n={icon} size={18} /></span><h3>{title}</h3></div>
      <ol className="tl">
        {items.map(i => (
          <li key={i.title}><h4>{i.title}</h4>{i.when && <span className="when">{i.when}</span>}{i.text && <p>{i.text}</p>}</li>
        ))}
      </ol>
    </section>
  )
}
export function Resume() {
  return (
    <article>
      <Title>Resume</Title>
      <Timeline icon="book" title="Education" items={education} />
      <Timeline icon="brief" title="Experience" items={experience} />
      <Timeline icon="award" title="Achievements" items={achievements} />
      <h3 className="sub">Skills</h3>
      <div className="skill-grid">
        {skills.map(([h, list]) => (
          <div className="card" key={h}><h4>{h}</h4><div className="pills">{list.map(x => <span key={x}>{x}</span>)}</div></div>
        ))}
      </div>
      <a className="btn" href="/ALFAID_CV.pdf" download><Icon n="dl" size={18} />Download CV</a>
    </article>
  )
}

function Modal({ p, onClose }) {
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', k)
      document.body.style.overflow = prev
    }
  }, [onClose])
  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal card" role="dialog" aria-modal="true" aria-label={p.name} onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close"><Icon n="x" size={18} /></button>
        <Thumb p={p} />
        <h3>{p.name}</h3>
        <p className="muted">{p.kind}. {p.type}.</p>
        <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>
        <div className="pills">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
        <div className="mbtns">
          <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer"><Icon n="github" size={18} />View code</a>
          {p.live && <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer"><Icon n="out" size={18} />Live demo</a>}
        </div>
      </div>
    </div>,
    document.body
  )
}
const Thumb = ({ p }) => p.image
  ? <img className="thumb" src={p.image} alt={`${p.name} screenshot`} />
  : <div className="thumb ph" style={{ '--h': p.hue }}><span>{p.name}</span></div>

export function Portfolio() {
  const [f, setF] = useState('All')
  const [sel, setSel] = useState(null)
  const list = projects.filter(p => f === 'All' || p.cats.includes(f))
  return (
    <article>
      <Title>Portfolio</Title>
      <ul className="filters">{filters.map(x => <li key={x}><button className={f === x ? 'on' : ''} onClick={() => setF(x)}>{x}</button></li>)}</ul>
      <ul className="proj-grid">
        {list.map(p => (
          <li key={p.name}><button className="proj" onClick={() => setSel(p)}>
            <Thumb p={p} /><h4>{p.name}</h4><p className="muted">{p.cats[0]}</p></button></li>
        ))}
      </ul>
      {sel && <Modal p={sel} onClose={() => setSel(null)} />}
    </article>
  )
}

const KEY = (import.meta.env.VITE_WEB3FORMS_KEY || '').trim().replace(/^["']|["']$/g, '')
const KEY_OK = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(KEY)

export function Contact() {
  const [st, setSt] = useState({ s: 'idle', msg: '' })
  const send = async e => {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form))
    if (d.botcheck) return
    if (!KEY_OK) { setSt({ s: 'error', msg: 'Access key missing or invalid. Check VITE_WEB3FORMS_KEY in your .env file.' }); return }
    setSt({ s: 'sending', msg: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, from_name: 'Portfolio', name: d.name, email: d.email,
          subject: d.subject || `Portfolio message from ${d.name}`, message: d.message }),
      })
      const j = await res.json()
      if (j.success) { form.reset(); setSt({ s: 'sent', msg: 'Message sent. I will reply to your email soon.' }) }
      else setSt({ s: 'error', msg: j.message || 'Something went wrong. Try again or email me directly.' })
    } catch { setSt({ s: 'error', msg: 'Network error. Check your connection and try again.' }) }
  }
  const links = [
    ['mail', 'Email', person.email, `mailto:${person.email}`],
    ['phone', 'Phone', person.phone, `tel:${person.phone.replace(/ /g, '')}`],
    ['pin', 'Location', person.location, null],
    ['github', 'GitHub', 'ALFAID-SABAYO', person.github],
    ['linkedin', 'LinkedIn', 'alfaid-sabayo', person.linkedin],
  ]
  return (
    <article>
      <Title>Contact</Title>
      <div className="contact-grid">
        <ul className="c-list">
          {links.map(([i, l, v, href]) => {
            const inner = <><span className="big-i"><Icon n={i} size={26} /></span><div><h4>{l}</h4><p>{v}</p></div>{href && <span className="go"><Icon n="out" size={18} /></span>}</>
            return <li key={l}>{href
              ? <a className="c-card card" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a>
              : <div className="c-card card">{inner}</div>}</li>
          })}
        </ul>
        <div className="form-card card">
          <h3>Send me a message</h3>
          <p className="muted">Fill this in and it lands straight in my inbox.</p>
          <form className="form" onSubmit={send}>
            <div className="row2">
              <label>Your name<input name="name" placeholder="Full name" required autoComplete="name" /></label>
              <label>Your email<input name="email" type="email" placeholder="you@example.com" required autoComplete="email" /></label>
            </div>
            <label>Subject<input name="subject" placeholder="What is this about? (optional)" /></label>
            <label>Message<textarea name="message" placeholder="Write your message here" rows="7" required /></label>
            <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
            <div className="form-foot">
              <p className={'status ' + st.s} role="status" aria-live="polite">{st.s === 'sent' && <Icon n="check" size={16} />}{st.msg}</p>
              <button className="btn" type="submit" disabled={st.s === 'sending'}><Icon n="send" size={18} />{st.s === 'sending' ? 'Sending...' : 'Send message'}</button>
            </div>
          </form>
        </div>
      </div>
    </article>
  )
}
