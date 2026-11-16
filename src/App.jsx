import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { About, Resume, Portfolio, Contact } from './components/Pages'
const pages = { About, Resume, Portfolio, Contact }
const tabs = Object.keys(pages)
export default function App() {
  const [tab, setTab] = useState(() => tabs.find(t => '#' + t.toLowerCase() === location.hash) || 'About')
  useEffect(() => { history.replaceState(null, '', '#' + tab.toLowerCase()); window.scrollTo({ top: 0 }) }, [tab])
  useEffect(() => {
    const h = () => { const t = tabs.find(x => '#' + x.toLowerCase() === location.hash); if (t) setTab(t) }
    window.addEventListener('hashchange', h)
    return () => window.removeEventListener('hashchange', h)
  }, [])
  const Page = pages[tab]
  return (
    <div className="app">
      <a className="skip" href="#content">Skip to content</a>
      <Sidebar />
      <main className="main card" id="content">
        <nav className="top-nav" aria-label="Sections">
          <ul>{tabs.map(t => <li key={t}><button className={tab === t ? 'on' : ''} aria-current={tab === t ? 'page' : undefined} onClick={() => setTab(t)}>{t}</button></li>)}</ul>
        </nav>
        <div className="page" key={tab}><Page /></div>
      </main>
    </div>
  )
}
