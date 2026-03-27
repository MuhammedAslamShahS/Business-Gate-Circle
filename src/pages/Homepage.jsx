import heroRight from '../assets/hero-right.png'
import './Homepage.css'

const heroThumbnails = [
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=720&q=80',
    alt: 'Consultant in a lounge meeting with a founder',
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=720&q=80',
    alt: 'Entrepreneur reviewing outreach on a smartphone',
  },
]

const aboutGallery = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Consultants discussing a growth plan with a client',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    alt: 'Business networking roundtable in a bright office',
  },
  {
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80',
    alt: 'Advisors collaborating on investor-ready strategy',
  },
]

const stats = [
  { value: '12+', label: 'Years serving growth-stage companies' },
  { value: '47+', label: 'Investor introductions facilitated' },
  { value: '98%', label: 'Clients reaching deal-readiness targets' },
  { value: '90%', label: 'Long-term client retention rate' },
]

const services = [
  {
    title: 'Business Strategy & Planning',
    description:
      'Clarify your next move with practical growth roadmaps, market positioning, and execution planning.',
  },
  {
    title: 'Financial Advisory',
    description:
      'Build a stronger story for banks, funds, and angels with investor materials, forecasts, and capital planning.',
  },
  {
    title: 'Operational Excellence',
    description:
      'Streamline delivery models, governance, and team structures to scale without friction.',
  },
  {
    title: 'Digital Transformation',
    description:
      'Align your technology and customer experience initiatives with measurable business outcomes.',
  },
  {
    title: 'Market Research & Analysis',
    description:
      'Uncover competitor signals, customer behavior, and sector white space to guide expansion decisions.',
  },
]

function Homepage() {
  const featuredService = services[1]

  return (
    <main className="homepage">
      <section className="hero-section" id="home">
        <div className="content-width hero-grid">
          <div className="hero-copy">
            <div className="hero-copy__top">
              <p className="section-kicker">Business Networking + Consultancy + Investor Connect</p>
              <h1 className="section-heading">Expert Connections Powering Your Business Success.</h1>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Join
                  <span className="arrow-icon">+</span>
                </a>
                <a className="secondary-button" href="#services">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-thumbnails">
              {heroThumbnails.map((image) => (
                <article className="image-card image-card--small" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </article>
              ))}
            </div>
          </div>

          <article className="image-card image-card--hero">
            <img src={heroRight} alt="Two business advisors reviewing plans on a laptop" />
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="content-width">
          <div className="about-intro">
            <div>
              <p className="section-label">About Us</p>
            </div>
            <div className="about-intro__copy">
              <h2 className="section-subheading">Trusted Advisors for Your Business Success</h2>
              <p className="section-copy">
                With decades of combined experience across growth industries, we tailor business
                networking, consulting, and capital-readiness services that turn opportunities into
                measurable traction.
              </p>
            </div>
          </div>

          <div className="about-gallery">
            <div className="about-gallery__stack">
              <article className="image-card image-card--about image-card--tall">
                <img src={aboutGallery[0].src} alt={aboutGallery[0].alt} />
              </article>
              <a className="primary-button about-gallery__button" href="#contact">
                Discover Our Story
              </a>
            </div>

            {aboutGallery.slice(1).map((image) => (
              <article className="image-card image-card--about" key={image.src}>
                <img src={image.src} alt={image.alt} />
              </article>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="content-width">
          <div className="services-panel">
            <div className="services-panel__header">
              <p className="section-kicker">Global Success Stories</p>
              <h2 className="section-subheading">Strategic services designed for business success</h2>
            </div>

            <div className="services-panel__body">
              <div className="services-list">
                {services.map((service, index) => (
                  <article
                    className={`service-row ${index === 1 ? 'service-row--active' : ''}`}
                    key={service.title}
                  >
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>

              <aside className="service-preview" aria-label="Featured service preview">
                <article className="image-card image-card--service">
                  <img
                    src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                    alt="Business leaders shaking hands after a strategy meeting"
                  />
                </article>
                <div className="service-preview__content">
                  <h3>{featuredService.title}</h3>
                  <p>{featuredService.description}</p>
                  <a className="service-preview__link" href="#contact">
                    Start your advisory roadmap
                    <span>+</span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-section" id="membership">
        <div className="content-width membership-shell">
          <article className="membership-card">
            <p className="section-kicker">Membership</p>
            <h2 className="section-subheading">Join a curated circle built for growth-ready businesses</h2>
            <p className="section-copy">
              Membership gives you access to focused networking, founder support, business
              guidance, and investor readiness in one trusted ecosystem.
            </p>
          </article>

          <article className="contact-card" id="contact">
            <p className="section-kicker">Contact</p>
            <h3>Ready to connect with Business Gate Circle?</h3>
            <p>
              Reach out for consultations, partnerships, and membership enquiries. We will help
              you identify the right next step.
            </p>
            <a className="primary-button" href="mailto:hello@businessgatecircle.com">
              hello@businessgatecircle.com
            </a>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Homepage
