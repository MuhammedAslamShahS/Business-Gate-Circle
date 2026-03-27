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

const aboutImages = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Business consultants leading a strategy discussion',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    alt: 'Professionals networking during a collaborative meeting',
  },
]

const aboutParagraphs = [
  'Business Gate Circle is an international business network and consultancy platform dedicated to supporting companies, entrepreneurs, and investors through professional guidance, strategic partnerships, and global connections.',
  'We provide integrated business solutions including consultancy, investment facilitation, project management, business development, and corporate services.',
  'Our mission is to create opportunities, support growth, and connect the right people to the right projects.',
  'Business Gate Circle operates as a professional circle that brings together business leaders, consultants, investors, and companies to collaborate, develop new ideas, and build successful ventures.',
  'Through our experience and global network, we help clients transform ideas into real projects and opportunities into long-term success.',
]

const visionText =
  'To become a trusted international business network that connects opportunities, supports innovation, and contributes to sustainable economic growth.'

const missionParagraphs = [
  'Our mission is to provide professional business services and create strong partnerships that help companies and investors achieve their goals with confidence and success.',
  'We believe that collaboration, knowledge, and trust are the keys to building a strong business future.',
]

const values = [
  {
    title: 'Trust',
    description: 'We build long-term relationships based on credibility and professionalism.',
  },
  {
    title: 'Partnership',
    description: 'We believe in cooperation and teamwork to achieve success.',
  },
  {
    title: 'Growth',
    description: 'We support development, innovation, and new opportunities.',
  },
  {
    title: 'Integrity',
    description: 'We work with transparency, respect, and responsibility.',
  },
  {
    title: 'Excellence',
    description: 'We aim to deliver high-quality services in every project.',
  },
]

const networkItems = [
  'Business leaders',
  'Investors',
  'Consultants',
  'Entrepreneurs',
  'Corporate partners',
  'International organizations',
]

const serviceCategories = [
  {
    number: '01',
    title: 'Business Solutions',
    summary:
      'Strategic, operational, and setup support for companies, founders, and investors building across the UAE and international markets.',
    items: [
      'Business Consultancy: Strategic advice, planning, and tailored business solutions.',
      'Business Network: Connecting entrepreneurs, companies, investors, and professionals worldwide.',
      'Investment Facilitation: Matching investors with opportunities and supporting project funding.',
      'Project Management: Planning, supervising, and managing projects from idea to execution.',
      'Business Development: Supporting expansion, growth, and market entry.',
      'Corporate Services: Company formation, licensing, PRO services, and legal procedures.',
      'Business Setup: Complete setup support in the UAE and international markets.',
      'Banking & Financial Services Support: Guidance on bank accounts, structure, and documentation.',
      'Feasibility Study & Market Research: Professional analysis before starting projects or investments.',
      'Visibility Study & Project Evaluation: Assessing project strength, market position, and risk.',
    ],
    ctaTitle: 'Build a stronger business foundation',
    ctaText:
      'From idea validation to legal setup and financial readiness, we support every stage of structured growth.',
    ctaLabel: 'Book a Business Consultation',
  },
  {
    number: '02',
    title: 'Business Network & Partnerships',
    summary:
      'Curated connections for members, investors, consultants, and companies looking to grow through trusted relationships.',
    items: [
      'Business Gate Circle Membership: A professional network for companies, investors, and consultants.',
      'VIP Business Network: A private circle for investors and selected strategic partners.',
      'Partnerships & Joint Ventures: Connecting the right parties for new projects and collaborations.',
      'International Relations & Global Network: Opening doors to global companies, organizations, and investors.',
      'Business Events & Conferences: Forums, networking meetings, and business delegations.',
    ],
    ctaTitle: 'Expand through the right network',
    ctaText:
      'We focus on high-value introductions, long-term partnerships, and relationship-led growth opportunities.',
    ctaLabel: 'Explore Network Access',
  },
  {
    number: '03',
    title: 'Investment Facilitation',
    summary:
      'Investment guidance and capital support designed for project owners, investors, startups, and SMEs seeking practical deal momentum.',
    items: [
      'Investment Advisory: Guidance for investors and project owners.',
      'Project Financing Support: Helping identify investors, capital partners, and funding routes.',
      'Real Estate Investment Support: Advisory support for property projects and investment opportunities.',
      'Startup Support: Helping new businesses launch, structure, and grow.',
      'SMEs Support: Strategic support for small and medium enterprises.',
    ],
    ctaTitle: 'Prepare your project for funding',
    ctaText:
      'We help shape investor conversations, improve project readiness, and connect serious opportunities with capital.',
    ctaLabel: 'Discuss an Investment Opportunity',
  },
  {
    number: '04',
    title: 'Corporate & Professional Services',
    summary:
      'Professional support services that strengthen operations, reputation, recruitment, compliance, and official processes.',
    items: [
      'HR & Recruitment Support: Hiring support, team building, and HR structure development.',
      'Marketing & Branding: Brand identity, promotion, and visibility strategy.',
      'Media & Public Relations: Press support, interviews, and corporate media presence.',
      'Legal & Documentation Support: Guidance on agreements, contracts, and procedures.',
      'Government Relations Support: Help with approvals, submissions, and official processes.',
    ],
    ctaTitle: 'Strengthen the systems behind your growth',
    ctaText:
      'Our support extends beyond strategy to the operational and professional essentials every serious business needs.',
    ctaLabel: 'Request Corporate Support',
  },
  {
    number: '05',
    title: 'Business Representation & Negotiation',
    summary:
      'Representation, business matching, and deal support for organizations entering critical conversations or international opportunities.',
    items: [
      'Business Representation: Representing companies in meetings and negotiations.',
      'Negotiation & Deal Support: Supporting structured, confident deal-making.',
      'Business Matching: Connecting the right partners, clients, and collaborators.',
      'Strategic Planning: Long-term planning for growth, positioning, and partnerships.',
      'International Business Delegations: Organizing visits, meetings, and cross-border relationships.',
    ],
    ctaTitle: 'Move into key negotiations with confidence',
    ctaText:
      'We help businesses enter the right rooms, represent their interests clearly, and create momentum around strategic deals.',
    ctaLabel: 'Get Representation Support',
  },
]

function Homepage() {
  const heroLead =
    'We connect entrepreneurs, investors, consultants, and decision-makers with the right opportunities, partnerships, and capital support to save time, increase efficiency, and accelerate long-term growth.'

  return (
    <main className="homepage">
      <section className="hero-section" id="home">
        <div className="content-width hero-grid">
          <div className="hero-copy">
            <div className="hero-copy__top">
              <p className="section-kicker">Growth, Capital Raises, and Strategic Connections</p>
              <h1 className="section-heading">We Always Focus on Your Growth.</h1>
              <p className="section-copy hero-copy__lead">{heroLead}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Join the Circle
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

      <section className="services-section" id="services">
        <div className="content-width services-page">
          <div className="services-page__intro">
            <p className="section-kicker">Services</p>
            <h2 className="section-subheading">Integrated business, network, and investment services</h2>
            <p className="section-copy">
              Business Gate Circle brings together consultancy, investor connect, partnerships,
              business setup, and representation support in one coordinated service platform.
            </p>
          </div>

          <div className="service-category-grid">
            {serviceCategories.map((category) => (
              <article className="service-category-card" key={category.title}>
                <div className="service-category-card__header">
                  <span className="service-category-card__number">{category.number}</span>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.summary}</p>
                  </div>
                </div>

                <ul className="service-category-card__list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="service-category-card__cta">
                  <div>
                    <h4>{category.ctaTitle}</h4>
                    <p>{category.ctaText}</p>
                  </div>
                  <a className="primary-button" href="#contact">
                    {category.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="content-width about-page">
          <div className="about-page__hero">
            <article className="about-page__content">
              <p className="section-kicker">About</p>
              <h2 className="section-subheading">Business Gate Circle</h2>
              <div className="about-page__narrative">
                {aboutParagraphs.map((paragraph) => (
                  <p className="section-copy" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <div className="about-page__media">
              <article className="image-card image-card--about-hero">
                <img src={aboutImages[0].src} alt={aboutImages[0].alt} />
              </article>
              <article className="image-card image-card--about-secondary">
                <img src={aboutImages[1].src} alt={aboutImages[1].alt} />
              </article>
            </div>
          </div>

          <div className="about-focus-grid">
            <article className="about-focus-card">
              <p className="section-label">Our Vision</p>
              <h3>Our Vision</h3>
              <p>{visionText}</p>
            </article>

            <article className="about-focus-card">
              <p className="section-label">Our Mission</p>
              <h3>Our Mission</h3>
              {missionParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </div>

          <div className="about-values-shell">
            <div className="about-values-shell__intro">
              <p className="section-label">Our Values</p>
              <h3>Our Values</h3>
              <p>Trust, partnership, growth, integrity, and excellence guide every project we deliver.</p>
            </div>

            <div className="about-values-grid">
              {values.map((value) => (
                <article className="about-value-card" key={value.title}>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-network-panel">
            <div className="about-network-panel__content">
              <p className="section-label">Our Network</p>
              <h3>Our Network</h3>
              <p>
                Business Gate Circle connects professionals, investors, companies, and organizations
                through a global network that supports business development, investment
                opportunities, and strategic partnerships.
              </p>
            </div>

            <ul className="about-network-list">
              {networkItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="content-width contact-shell">
          <article className="contact-card">
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
