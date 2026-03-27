import { useEffect, useState } from "react";
import heroBanner from "../assets/herobanner.png";
import heroBanner2 from "../assets/herobanner2.png";
import heroBanner3 from "../assets/berobanner3.png";
import "./Homepage.css";

const SERVICES_STACK_BREAKPOINT = 1120;

const aboutImages = [
    {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
        alt: "Business consultants leading a strategy discussion",
    },
    {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
        alt: "Professionals networking during a collaborative meeting",
    },
];

const aboutParagraphs = [
    "Business Gate Circle is an international business network and consultancy platform dedicated to supporting companies, entrepreneurs, and investors through professional guidance, strategic partnerships, and global connections.",
    "We provide integrated business solutions including consultancy, investment facilitation, project management, business development, and corporate services.",
    "Our mission is to create opportunities, support growth, and connect the right people to the right projects.",
    "Business Gate Circle operates as a professional circle that brings together business leaders, consultants, investors, and companies to collaborate, develop new ideas, and build successful ventures.",
    "Through our experience and global network, we help clients transform ideas into real projects and opportunities into long-term success.",
];

const visionText =
    "To become a trusted international business network that connects opportunities, supports innovation, and contributes to sustainable economic growth.";

const missionParagraphs = [
    "Our mission is to provide professional business services and create strong partnerships that help companies and investors achieve their goals with confidence and success.",
    "We believe that collaboration, knowledge, and trust are the keys to building a strong business future.",
];

const values = [
    {
        id: "trust",
        title: "Trust",
        description: "We build long-term relationships based on credibility and professionalism.",
    },
    {
        id: "partnership",
        title: "Partnership",
        description: "We believe in cooperation and teamwork to achieve success.",
    },
    {
        id: "growth",
        title: "Growth",
        description: "We support development, innovation, and new opportunities.",
    },
    {
        id: "integrity",
        title: "Integrity",
        description: "We work with transparency, respect, and responsibility.",
    },
    {
        id: "excellence",
        title: "Excellence",
        description: "We aim to deliver high-quality services in every project.",
    },
];

const networkItems = [
    "Business leaders",
    "Investors",
    "Consultants",
    "Entrepreneurs",
    "Corporate partners",
    "International organizations",
];

const serviceCategories = [
    {
        number: "01",
        title: "Business Solutions",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Business consultants reviewing strategy documents in a meeting",
        summary:
            "Strategic, operational, and setup support for companies, founders, and investors building across the UAE and international markets.",
        items: [
            "Business Consultancy: Strategic advice, planning, and tailored business solutions.",
            "Business Network: Connecting entrepreneurs, companies, investors, and professionals worldwide.",
            "Investment Facilitation: Matching investors with opportunities and supporting project funding.",
            "Project Management: Planning, supervising, and managing projects from idea to execution.",
            "Business Development: Supporting expansion, growth, and market entry.",
            "Corporate Services: Company formation, licensing, PRO services, and legal procedures.",
            "Business Setup: Complete setup support in the UAE and international markets.",
            "Banking & Financial Services Support: Guidance on bank accounts, structure, and documentation.",
            "Feasibility Study & Market Research: Professional analysis before starting projects or investments.",
            "Visibility Study & Project Evaluation: Assessing project strength, market position, and risk.",
        ],
        ctaTitle: "Build a stronger business foundation",
        ctaText:
            "From idea validation to legal setup and financial readiness, we support every stage of structured growth.",
        ctaLabel: "Book a Business Consultation",
    },
    {
        number: "02",
        title: "Business Network & Partnerships",
        image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Professionals networking during a business conversation",
        summary:
            "Curated connections for members, investors, consultants, and companies looking to grow through trusted relationships.",
        items: [
            "Business Gate Circle Membership: A professional network for companies, investors, and consultants.",
            "VIP Business Network: A private circle for investors and selected strategic partners.",
            "Partnerships & Joint Ventures: Connecting the right parties for new projects and collaborations.",
            "International Relations & Global Network: Opening doors to global companies, organizations, and investors.",
            "Business Events & Conferences: Forums, networking meetings, and business delegations.",
        ],
        ctaTitle: "Expand through the right network",
        ctaText: "We focus on high-value introductions, long-term partnerships, and relationship-led growth opportunities.",
        ctaLabel: "Explore Network Access",
    },
    {
        number: "03",
        title: "Investment Facilitation",
        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Advisors discussing investment reports and financial planning",
        summary:
            "Investment guidance and capital support designed for project owners, investors, startups, and SMEs seeking practical deal momentum.",
        items: [
            "Investment Advisory: Guidance for investors and project owners.",
            "Project Financing Support: Helping identify investors, capital partners, and funding routes.",
            "Real Estate Investment Support: Advisory support for property projects and investment opportunities.",
            "Startup Support: Helping new businesses launch, structure, and grow.",
            "SMEs Support: Strategic support for small and medium enterprises.",
        ],
        ctaTitle: "Prepare your project for funding",
        ctaText:
            "We help shape investor conversations, improve project readiness, and connect serious opportunities with capital.",
        ctaLabel: "Discuss an Investment Opportunity",
    },
    {
        number: "04",
        title: "Corporate & Professional Services",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Corporate team collaborating across professional services",
        summary:
            "Professional support services that strengthen operations, reputation, recruitment, compliance, and official processes.",
        items: [
            "HR & Recruitment Support: Hiring support, team building, and HR structure development.",
            "Marketing & Branding: Brand identity, promotion, and visibility strategy.",
            "Media & Public Relations: Press support, interviews, and corporate media presence.",
            "Legal & Documentation Support: Guidance on agreements, contracts, and procedures.",
            "Government Relations Support: Help with approvals, submissions, and official processes.",
        ],
        ctaTitle: "Strengthen the systems behind your growth",
        ctaText:
            "Our support extends beyond strategy to the operational and professional essentials every serious business needs.",
        ctaLabel: "Request Corporate Support",
    },
    {
        number: "05",
        title: "Business Representation & Negotiation",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Executives in a negotiation and representation meeting",
        summary:
            "Representation, business matching, and deal support for organizations entering critical conversations or international opportunities.",
        items: [
            "Business Representation: Representing companies in meetings and negotiations.",
            "Negotiation & Deal Support: Supporting structured, confident deal-making.",
            "Business Matching: Connecting the right partners, clients, and collaborators.",
            "Strategic Planning: Long-term planning for growth, positioning, and partnerships.",
            "International Business Delegations: Organizing visits, meetings, and cross-border relationships.",
        ],
        ctaTitle: "Move into key negotiations with confidence",
        ctaText:
            "We help businesses enter the right rooms, represent their interests clearly, and create momentum around strategic deals.",
        ctaLabel: "Get Representation Support",
    },
];

const heroBanners = [
    { src: heroBanner, alt: "Business advisors discussing growth strategy" },
    { src: heroBanner2, alt: "Professionals reviewing an investment plan together" },
    { src: heroBanner3, alt: "Business leaders in a premium networking conversation" },
];

const membershipIntroParagraphs = [
    "Business Gate Circle Membership is designed for entrepreneurs, investors, professionals, and companies who want to be part of a strong international business network.",
    "Our membership provides access to opportunities, partnerships, projects, and professional support through a trusted circle of business leaders and experts.",
    "By joining Business Gate Circle, you become part of a dynamic community focused on growth, collaboration, and success.",
];

const membershipBenefits = [
    "Access to international business network",
    "Investment opportunities",
    "Professional consultancy support",
    "Participation in projects",
    "Business partnerships",
    "Networking events",
    "Business development support",
    "Visibility and promotion",
    "Access to investors and companies",
];

const membershipCategories = [
    {
        title: "Individual Membership",
        audience: "For professionals, consultants, and entrepreneurs.",
        benefits: ["Access to network", "Invitations to events", "Business support", "Collaboration opportunities"],
    },
    {
        title: "Corporate Membership",
        audience: "For companies and business owners.",
        benefits: [
            "Company promotion",
            "Partnership opportunities",
            "Project participation",
            "Consultancy support",
            "Business development services",
        ],
    },
    {
        title: "Investor Membership",
        audience: "For investors looking for opportunities and projects.",
        benefits: [
            "Access to investment projects",
            "Deal facilitation",
            "Project evaluation",
            "Private meetings",
            "Business matching",
        ],
    },
    {
        title: "VIP Circle Membership",
        audience: "Private circle for selected members and partners.",
        benefits: [
            "Priority access to projects",
            "Private networking",
            "Strategic partnerships",
            "Exclusive meetings",
            "Investment opportunities",
        ],
    },
    {
        title: "Partner Membership",
        audience: "For organizations and strategic partners.",
        benefits: ["Joint projects", "Cooperation agreements", "International collaboration", "Events & conferences"],
    },
];

const servicesSpotlight = {
    image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
    alt: "Business and investment professionals reviewing strategy documents",
    secondaryImage:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80",
    secondaryAlt: "Two business professionals shaking hands after a successful meeting",
};

function getServiceColumns(categories, isStackedLayout) {
    if (isStackedLayout) {
        return [categories];
    }

    const columns = [categories.filter((_, index) => index < 4 && index % 2 === 0), categories.filter((_, index) => index < 4 && index % 2 === 1)];
    const columnWeights = columns.map((column) =>
        column.reduce((total, category) => total + category.items.length, 0),
    );

    categories.slice(4).forEach((category) => {
        const targetColumnIndex = columnWeights[0] <= columnWeights[1] ? 0 : 1;
        columns[targetColumnIndex].push(category);
        columnWeights[targetColumnIndex] += category.items.length;
    });

    return columns.filter((column) => column.length > 0);
}

function Homepage() {
    const heroLead =
        "We connect entrepreneurs, investors, consultants, and decision-makers with the right opportunities, partnerships, and capital support to save time, increase efficiency, and accelerate long-term growth.";
    const [activeHeroBanner, setActiveHeroBanner] = useState(0);
    const [isStackedServiceLayout, setIsStackedServiceLayout] = useState(() => window.innerWidth <= SERVICES_STACK_BREAKPOINT);
    const serviceColumns = getServiceColumns(serviceCategories, isStackedServiceLayout);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveHeroBanner((currentBanner) => (currentBanner + 1) % heroBanners.length);
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const updateServiceLayout = () => {
            setIsStackedServiceLayout(window.innerWidth <= SERVICES_STACK_BREAKPOINT);
        };

        updateServiceLayout();
        window.addEventListener("resize", updateServiceLayout);

        return () => window.removeEventListener("resize", updateServiceLayout);
    }, []);

    return (
        <main className="homepage">
            <section className="hero-section" id="home">
                <div className="content-width">
                    <div className="hero-banner">
                        <div className="hero-banner__slides" aria-hidden="true">
                            {heroBanners.map((banner, index) => (
                                <img
                                    key={banner.src}
                                    className={`hero-banner__image ${index === activeHeroBanner ? "is-active" : ""}`}
                                    src={banner.src}
                                    alt={banner.alt}
                                />
                            ))}
                        </div>
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section" id="services">
                <div className="content-width services-page">
                    <div className="services-page__intro">
                        <h2 className="section-subheading">Integrated business, network, and investment services</h2>
                        <p className="section-copy">
                            Business Gate Circle brings together consultancy, investor connect, partnerships, business
                            setup, and representation support in one coordinated service platform.
                        </p>
                    </div>

                    <div className="service-category-grid">
                        {serviceColumns.map((column, columnIndex) => (
                            <div className="service-category-column" key={`service-column-${columnIndex}`}>
                                {column.map((category) => (
                                    <article className="service-category-card" key={category.title}>
                                        <div className="service-category-card__media">
                                            <img src={category.image} alt={category.imageAlt} loading="lazy" />
                                        </div>

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

                                {!isStackedServiceLayout && columnIndex === 0 ? (
                                    <article className="services-spotlight-card">
                                        <div className="services-spotlight-card__frame">
                                            <img
                                                className="services-spotlight-card__image"
                                                src={servicesSpotlight.image}
                                                alt={servicesSpotlight.alt}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="services-spotlight-card__frame services-spotlight-card__frame--secondary">
                                            <img
                                                className="services-spotlight-card__image"
                                                src={servicesSpotlight.secondaryImage}
                                                alt={servicesSpotlight.secondaryAlt}
                                                loading="lazy"
                                            />
                                        </div>
                                    </article>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-section" id="about">
                <div className="content-width about-page">
                    <div className="about-page__hero">
                        <article className="about-page__content">
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

                        {values.map((value) => (
                            <article className={`about-value-card about-value-card--${value.id}`} key={value.title}>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="about-network-panel">
                        <div className="about-network-panel__content">
                            <p className="section-label">Our Network</p>
                            <h3>Our Network</h3>
                            <p>
                                Business Gate Circle connects professionals, investors, companies, and organizations through
                                a global network that supports business development, investment opportunities, and strategic
                                partnerships.
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
                <div className="content-width membership-page">
                    <div className="membership-page__top">
                        <article className="membership-card">
                            <p className="section-kicker">Business Gate Circle Network</p>
                            <h2 className="section-subheading">Business Gate Circle Membership</h2>
                            <div className="membership-card__narrative">
                                {membershipIntroParagraphs.map((paragraph) => (
                                    <p className="section-copy" key={paragraph}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </article>

                        <article className="membership-benefits-card">
                            <p className="section-label">Why Join Business Gate Circle</p>
                            <ul className="membership-benefits-list">
                                {membershipBenefits.map((benefit) => (
                                    <li key={benefit}>{benefit}</li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="membership-categories-grid">
                        {membershipCategories.map((category) => (
                            <article className="membership-category-card" key={category.title}>
                                <h3>{category.title}</h3>
                                <p className="membership-category-card__audience">{category.audience}</p>
                                <div className="membership-category-card__benefits">
                                    <span>Benefits</span>
                                    <ul>
                                        {category.benefits.map((benefit) => (
                                            <li key={benefit}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>

                    <article className="membership-cta-card">
                        <p className="section-label">Join Business Gate Circle</p>
                        <h3>
                            Become part of a professional business circle connecting opportunities, people, and projects.
                        </h3>
                        <p>Join us and grow with a global network built on trust, partnership, and success.</p>
                        <a className="primary-button" href="#contact">
                            Join Business Gate Circle
                        </a>
                    </article>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="content-width contact-page">
                    <article className="contact-form-card" id="contact-form" tabIndex="-1">
                        <div className="contact-form-card__intro">
                            <h3>Send an enquiry</h3>
                            <p>Complete the form below and our team will respond with the most relevant next step.</p>
                        </div>

                        <form
                            className="contact-form"
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}
                        >
                            <div className="contact-form__grid">
                                <label className="form-field">
                                    <span>Full Name</span>
                                    <input type="text" name="fullName" placeholder="Your full name" />
                                </label>

                                <label className="form-field">
                                    <span>Company</span>
                                    <input type="text" name="company" placeholder="Company or organization" />
                                </label>

                                <label className="form-field">
                                    <span>Email Address</span>
                                    <input type="email" name="email" placeholder="name@company.com" />
                                </label>

                                <label className="form-field">
                                    <span>Phone Number</span>
                                    <input type="tel" name="phone" placeholder="+971 ..." />
                                </label>
                            </div>

                            <label className="form-field form-field--full">
                                <span>Service Interest</span>
                                <select name="serviceInterest" defaultValue="">
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    {serviceCategories.map((category) => (
                                        <option key={category.title} value={category.title}>
                                            {category.title}
                                        </option>
                                    ))}
                                    <option value="Membership">Membership</option>
                                </select>
                            </label>

                            <label className="form-field form-field--full">
                                <span>Your Message</span>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Tell us about your goals, requirements, or opportunity."
                                ></textarea>
                            </label>

                            <div className="contact-form__footer">
                                <p>
                                    By submitting this form, you agree to be contacted by Business Gate Circle regarding
                                    your enquiry.
                                </p>
                                <button className="primary-button" type="submit">
                                    Send Enquiry
                                </button>
                            </div>
                        </form>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Homepage;
