import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
// Change theme here: 'gold' | 'mint' | 'sky'
document.documentElement.dataset.theme = 'gold'
createRoot(document.getElementById('root')).render(<App />)
