import './App.css'
import Header from './components/header/Header'
import Homepage from './pages/Homepage'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="app-shell">
      <Header links={navigationLinks} />
      <Homepage />
    </div>
  )
}

export default App
