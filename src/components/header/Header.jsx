import { useCallback, useEffect, useRef, useState } from 'react'
import './Header.css'

const SCROLL_GAP = 20
const MOBILE_NAV_BREAKPOINT = 980

function Header({ links }) {
  const headerRef = useRef(null)
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window === 'undefined') {
      return links[0]?.href ?? '#home'
    }

    const currentHash = window.location.hash
    return links.some((link) => link.href === currentHash) ? currentHash : links[0]?.href ?? '#home'
  })

  const updateLayoutVars = useCallback(() => {
    const headerHeight = headerRef.current?.offsetHeight ?? 0
    document.documentElement.style.setProperty('--nav-offset', `${headerHeight + SCROLL_GAP}px`)
    document.documentElement.style.setProperty(
      '--mobile-nav-height',
      window.innerWidth <= MOBILE_NAV_BREAKPOINT ? '92px' : '0px',
    )
  }, [])

  const resolveTargetElement = useCallback((hash) => {
    if (hash === '#contact') {
      return document.querySelector('#contact-form')
    }

    const section = document.querySelector(hash)

    if (!section) {
      return null
    }

    return section.querySelector('.content-width') ?? section
  }, [])

  const scrollToSection = useCallback((hash, behavior = 'smooth') => {
    updateLayoutVars()
    const target = resolveTargetElement(hash)

    if (!target) {
      return
    }

    const headerHeight = headerRef.current?.offsetHeight ?? 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - SCROLL_GAP

    setActiveHash(hash)

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: prefersReducedMotion ? 'auto' : behavior,
    })

    if (hash === '#contact') {
      window.setTimeout(() => {
        target.focus({ preventScroll: true })
      }, prefersReducedMotion ? 0 : 350)
    }

    window.history.replaceState(null, '', hash)
  }, [resolveTargetElement, updateLayoutVars])

  useEffect(() => {
    updateLayoutVars()

    const handleResize = () => {
      updateLayoutVars()
    }

    window.addEventListener('resize', handleResize)

    if (window.location.hash) {
      window.setTimeout(() => {
        scrollToSection(window.location.hash, 'auto')
      }, 0)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollToSection, updateLayoutVars])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const headerHeight = headerRef.current?.offsetHeight ?? 0
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => secondEntry.intersectionRatio - firstEntry.intersectionRatio)[0]

        if (!visibleEntry?.target?.id) {
          return
        }

        setActiveHash(`#${visibleEntry.target.id}`)
      },
      {
        rootMargin: `-${headerHeight + SCROLL_GAP}px 0px -45% 0px`,
        threshold: [0.2, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [links])

  const handleAnchorClick = (hash) => (event) => {
    event.preventDefault()
    scrollToSection(hash)
  }

  const renderNavLinks = (linkClassName) =>
    links.map((link) => (
      <a
        key={link.href}
        className={`${linkClassName} ${activeHash === link.href ? 'is-active' : ''}`}
        href={link.href}
        aria-current={activeHash === link.href ? 'page' : undefined}
        onClick={handleAnchorClick(link.href)}
      >
        {link.label}
      </a>
    ))

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="content-width site-header__inner">
          <a
            className="site-brand"
            href="#home"
            aria-label="Business Gate Circle home"
            onClick={handleAnchorClick('#home')}
          >
            <span className="site-brand__text">Business Gate Circle</span>
          </a>

          <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
            {renderNavLinks('site-nav__link')}
          </nav>

          <a
            className="outline-button site-header__button"
            href="#contact"
            onClick={handleAnchorClick('#contact')}
          >
            Join Now
          </a>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div className="mobile-bottom-nav__inner">{renderNavLinks('mobile-bottom-nav__link')}</div>
      </nav>
    </>
  )
}

export default Header
