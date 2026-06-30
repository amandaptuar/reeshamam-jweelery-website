import './AboutUs.css';
import aboutHeroBg from '../assets/about-hero-bg.png';
import ourStoryImg from '../assets/our-story.png';
import SEOHead from '../components/SEOHead';
import { BASE_KEYWORDS, ABOUT_EXTRA_KEYWORDS } from '../lib/seoKeywords';

const ABOUT_TITLE = 'About Reshmi Qureshi — Artificial Jewellery Manufacturer Since 2019 | Mumbai, India';
const ABOUT_DESC = 'Learn about Reshmi Qureshi, a trusted wholesale artificial jewellery manufacturer & exporter based in Mumbai, India since 2019. Premium quality, global supply.';
const ABOUT_KEYWORDS = `${BASE_KEYWORDS}, ${ABOUT_EXTRA_KEYWORDS}`;

const ABOUT_BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about' },
];

const ABOUT_FAQS = [
  { question: 'When was Reshmi Qureshi Wholesale Jewellery established?', answer: 'Reshmi Qureshi Wholesale Jewellery was established in 2019 and has since grown to become a trusted name in the wholesale artificial jewellery industry in India.' },
  { question: 'Where is Reshmi Qureshi Jewellery located?', answer: 'We are based in Shanti Nagar, Mumbai, Maharashtra – 401107, India. We serve clients across India and export globally.' },
  { question: 'Who is the founder of Reshmi Qureshi Jewellery?', answer: 'Reshmi Qureshi Wholesale Jewellery was founded by Reshma Qureshi, who has a passion for creating beautiful artificial jewellery that blends traditional artistry with contemporary design.' },
  { question: 'How many employees does Reshmi Qureshi Jewellery have?', answer: 'Our team consists of 21 to 50 dedicated employees committed to the highest standards of jewellery manufacturing and customer service.' },
];

const ABOUT_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: ABOUT_TITLE,
    description: ABOUT_DESC,
    url: 'https://wholesalejewelryressham.online/about',
    isPartOf: { '@type': 'WebSite', url: 'https://wholesalejewelryressham.online' },
    about: { '@type': 'Organization', name: 'Reshmi Qureshi Wholesale Jewellery' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Reshma Qureshi',
    jobTitle: 'Founder',
    worksFor: { '@type': 'Organization', name: 'Reshmi Qureshi Wholesale Jewellery', url: 'https://wholesalejewelryressham.online' },
    description: 'Reshma Qureshi is the founder of Reshmi Qureshi Wholesale Jewellery, a leading manufacturer and exporter of premium artificial jewellery based in Mumbai, India.',
  },
];

export default function AboutUs() {
  return (
    <>
      <SEOHead
        title={ABOUT_TITLE}
        description={ABOUT_DESC}
        keywords={ABOUT_KEYWORDS}
        canonicalPath="/about"
        ogType="website"
        breadcrumbs={ABOUT_BREADCRUMBS}
        faqs={ABOUT_FAQS}
        jsonLd={ABOUT_JSON_LD}
      />

      {/* ══════════════ ABOUT HERO ══════════════ */}
      <section className="about-hero" aria-label="About Reshmi Qureshi — Artificial Jewellery Manufacturer Mumbai India">
        <img
          className="about-hero-bg"
          src={aboutHeroBg}
          alt="Reshmi Qureshi wholesale artificial jewellery manufacturer Mumbai India"
          title="About Reshmi Qureshi Wholesale Jewellery — Premium Manufacturer Since 2019"
          width="1920"
          height="600"
          fetchPriority="high"
          decoding="async"
        />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="eyebrow-line">About Us</div>
          <h1>Crafting Trust.<br/>Delivering <em>Excellence.</em></h1>
          <p>WholesalejeweleryRessham is a trusted name in the wholesale jewellery industry, known for our commitment to quality, elegance and lasting relationships.</p>
        </div>
      </section>

      {/* ══════════════ OUR STORY ══════════════ */}
      <section className="story" aria-label="Our story — Reshmi Qureshi wholesale artificial jewellery">
        <div className="story-img">
          <img
            className="story-img-src"
            src={ourStoryImg}
            alt="Our story — Reshmi Qureshi wholesale jewellery manufacturing journey since 2019"
            title="Our Story — From Passion to Perfection in Wholesale Artificial Jewellery"
            width="600"
            height="600"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="story-content">
          <p className="story-eyebrow">Our Story</p>
          <h2>From Passion to Perfection</h2>
          <p>Established in 2019, WholesalejeweleryRessham began with a simple vision – to create exquisite jewellery that blends traditional artistry with contemporary design. Today, we proudly serve clients across India and around the world with our wide range of premium wholesale artificial jewellery.</p>

          {/* Desktop stats grid */}
          <div className="stats-grid" aria-label="Company statistics">
            <div className="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <div className="stat-val">2019</div>
              <div className="stat-label">Year of<br/>Establishment</div>
            </div>
            <div className="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div className="stat-val">21–50</div>
              <div className="stat-label">Dedicated<br/>Employees</div>
            </div>
            <div className="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
              <div className="stat-val">Global</div>
              <div className="stat-label">Clients in India<br/>&amp; Worldwide</div>
            </div>
            <div className="stat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <div className="stat-val">Trust</div>
              <div className="stat-label">Built on Quality<br/>&amp; Commitment</div>
            </div>
          </div>

          {/* Mobile stats list */}
          <div className="stats-list">
            <div className="stats-list-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <div><div className="sl-val">2019</div><div className="sl-label">Year of Establishment</div></div>
            </div>
            <div className="stats-list-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div><div className="sl-val">21–50</div><div className="sl-label">Dedicated Employees</div></div>
            </div>
            <div className="stats-list-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
              <div><div className="sl-val">Global</div><div className="sl-label">Clients in India &amp; Worldwide</div></div>
            </div>
            <div className="stats-list-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <div><div className="sl-val">Trust</div><div className="sl-label">Built on Quality &amp; Commitment</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT SETS US APART ══════════════ */}
      <section className="apart" aria-label="What sets Reshmi Qureshi wholesale jewellery apart">
        <div className="apart-header">
          <div className="label">What Sets Us Apart</div>
          <div className="ornament">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }} aria-hidden="true"><path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5Z"/></svg>
          </div>
        </div>
        <div className="apart-grid">
          <div className="apart-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <div><h3>Premium Quality</h3><p>We use the finest materials and follow strict quality standards in every piece of artificial jewellery we manufacture.</p></div>
          </div>
          <div className="apart-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            <div><h3>Exquisite Designs</h3><p>A perfect blend of traditional craftsmanship and modern trends in fashion jewellery design.</p></div>
          </div>
          <div className="apart-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            <div><h3>Wholesale Advantage</h3><p>Competitive wholesale pricing and exclusive designs for our business partners and bulk buyers.</p></div>
          </div>
          <div className="apart-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
            <div><h3>Global Reach</h3><p>Exporting and supplying premium artificial jewellery to clients across the globe from Mumbai, India.</p></div>
          </div>
          <div className="apart-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
            <div><h3>Customer Commitment</h3><p>We believe in long-term relationships built on trust, transparency and respect with every wholesale client.</p></div>
          </div>
        </div>
      </section>

      {/* ══════════════ MISSION / FOUNDER ══════════════ */}
      <section className="mission" aria-label="Mission of Reshmi Qureshi wholesale jewellery">
        <div className="mission-bg-placeholder" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          <strong>Mission Section Background</strong>
          <span>Dark jewellery texture / coins bg<br/>Recommended: 1920×320px</span>
        </div>
        <div className="mission-overlay"></div>
        <div className="mission-quote">
          <span className="big-quote">"</span>
          <blockquote cite="https://wholesalejewelryressham.online/about">
            Our mission is to empower jewellery businesses with designs that inspire, quality that lasts, and service that exceeds expectations.
          </blockquote>
        </div>
        <div className="mission-founder">
          <div className="founder-name">Reshma Qureshi</div>
          <div className="founder-title">Founder</div>
          <div className="founder-company">WholesalejeweleryRessham</div>
        </div>
      </section>
    </>
  );
}
