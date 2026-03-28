import { useCallback, useEffect, useRef, useState } from 'react'
import './Header.css'

const SCROLL_GAP = 20
const MOBILE_NAV_BREAKPOINT = 980
const MOBILE_NAV_HEIGHT = 104

function MobileNavIcon({ href }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
  }

  switch (href) {
    case '#home':
      return (
        <svg {...commonProps}>
          <path d="M3.5 10.5 12 4l8.5 6.5" />
          <path d="M6.5 9.5V20h11V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      )
    case '#services':
      return (
        <svg {...commonProps}>
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
          <circle cx="8" cy="7" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="10" cy="17" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case '#about':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.25" />
          <path d="M6.5 19.25c1.3-2.7 3.3-4.05 5.5-4.05s4.2 1.35 5.5 4.05" />
        </svg>
      )
    case '#membership':
      return (
        <svg {...commonProps}>
          <path d="M12 4.5 14.2 9l5 .7-3.6 3.5.85 5-4.45-2.35-4.45 2.35.85-5L4.8 9.7l5-.7L12 4.5Z" />
        </svg>
      )
    case '#contact':
      return (
        <svg {...commonProps}>
          <path d="M7.5 5.5h9a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16V8a2.5 2.5 0 0 1 2.5-2.5Z" />
          <path d="m6 8 6 5 6-5" />
        </svg>
      )
    default:
      return null
  }
}

function getMobileNavLabel(link) {
  if (link.href === '#membership') {
    return 'Members'
  }

  return link.label
}

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
      window.innerWidth <= MOBILE_NAV_BREAKPOINT ? `${MOBILE_NAV_HEIGHT}px` : '0px',
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

  const renderNavLinks = (linkClassName, variant = 'desktop') =>
    links.map((link) => (
      <a
        key={link.href}
        className={`${linkClassName} ${activeHash === link.href ? 'is-active' : ''}`}
        href={link.href}
        aria-current={activeHash === link.href ? 'page' : undefined}
        onClick={handleAnchorClick(link.href)}
      >
        {variant === 'mobile' ? (
          <>
            <span className="mobile-bottom-nav__icon">
              <MobileNavIcon href={link.href} />
            </span>
            <span className="mobile-bottom-nav__label">{getMobileNavLabel(link)}</span>
          </>
        ) : (
          link.label
        )}
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
        <div className="mobile-bottom-nav__inner">
          {renderNavLinks('mobile-bottom-nav__link', 'mobile')}
        </div>
      </nav>
    </>
  )
}

export default Header
