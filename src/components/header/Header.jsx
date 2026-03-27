import './Header.css'

function Header({ links }) {
  return (
    <header className="site-header">
      <div className="content-width site-header__inner">
        <a className="site-brand" href="#home" aria-label="Business Gate Circle home">
          
          <span className="site-brand__text">Business Gate Circle</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="outline-button site-header__button" href="#contact">
          Book Now
        </a>
      </div>
    </header>
  )
}

export default Header
