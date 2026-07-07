import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroBg from '../assets/hero-bg.png';
import aboutImg from '../assets/about-img.png';
import contactBg from '../assets/contact-bg.png';
import SEOHead from '../components/SEOHead';
import { BASE_KEYWORDS, HOME_EXTRA_KEYWORDS, AEO_KEYWORDS } from '../lib/seoKeywords';
import topProduct1 from '../assets/image.png';
import topProduct2 from '../assets/image copy.png';
import topProduct3 from '../assets/image copy 2.png';
import topProduct4 from '../assets/image copy 3.png';
import CategoryCircles from '../components/CategoryCircles';
import newTopProduct1 from '../assets/top/image.png';
import newTopProduct2 from '../assets/top/image copy.png';
import newTopProduct3 from '../assets/top/image copy 2.png';
import newTopProduct4 from '../assets/top/image copy 3.png';

/* ────────────────────────────────────────────
   HOME PAGE — SEO CONFIGURATION
──────────────────────────────────────────── */
const HOME_TITLE =
  'Reshma Qureshi Artificial Jewellery Manufacturer & Wholesale Supplier';
const HOME_KEYWORDS = `${BASE_KEYWORDS}, ${HOME_EXTRA_KEYWORDS}, ${AEO_KEYWORDS}`;
const HOME_DESC =
  'Reshma Qureshi artificial jewellery manufacturer, exporter & wholesale supplier from Mumbai, India. Premium quality fashion jewellery for bulk orders. Est. 2019.';



const HOME_BREADCRUMBS = [{ name: 'Home', url: '/' }];

const HOME_FAQS = [
  {
    question: 'What is the minimum order quantity for wholesale artificial jewellery?',
    answer:
      'Our minimum order quantity varies by product category. For most items, we accept bulk orders starting from a small minimum quantity. Please contact us on WhatsApp at +91 83106 96529 for specific MOQ details.',
  },
  {
    question: 'Do you export artificial jewellery internationally?',
    answer:
      'Yes, Reshmi Qureshi is an exporter of premium wholesale artificial jewellery and supplies to clients across India and around the world. We handle international shipping and logistics.',
  },
  {
    question: 'What types of artificial jewellery do you manufacture?',
    answer:
      'We manufacture a wide range of artificial jewellery including necklace sets, earrings, bangles, bridal sets with pasa, hathpan, bridal jewellery, oxidised jewellery, gold-plated jewellery, kundan, polki, and American diamond jewellery.',
  },
  {
    question: 'Are you a manufacturer or a reseller of artificial jewellery?',
    answer:
      'We are a direct manufacturer and exporter of wholesale artificial jewellery based in Mumbai, Maharashtra, India. Buying direct from us ensures premium quality at competitive wholesale prices.',
  },
  {
    question: 'How can I place a wholesale order?',
    answer:
      'You can place a wholesale order by contacting us via WhatsApp at +91 83106 96529 or by filling out the inquiry form on our website. Our team will get back to you with pricing and availability.',
  },
  {
    question: 'Is customisation available for bulk jewellery orders?',
    answer:
      'Yes, we offer customisation options for bulk orders. You can request custom designs, finishes, and packaging for your wholesale jewellery order. Contact us for more details.',
  },
];

const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: HOME_TITLE,
  description: HOME_DESC,
  url: 'https://wholesalejewelryressham.online/',
  isPartOf: {
    '@type': 'WebSite',
    url: 'https://wholesalejewelryressham.online',
    name: 'Reshmi Qureshi Wholesale Jewellery',
  },
  about: {
    '@type': 'LocalBusiness',
    name: 'Reshmi Qureshi Wholesale Jewellery',
    url: 'https://wholesalejewelryressham.online',
  },
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Reshmi Qureshi Wholesale Jewellery',
    telephone: '+91-83106-96529',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shanti Nagar',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '401107',
      addressCountry: 'IN',
    },
  },
};

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', requirements: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness Type: ${formData.type}\nRequirements: ${formData.requirements}`;
    const url = `https://wa.me/918310696529?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* ═══ SEO HEAD ═══ */}
      <SEOHead
        title={HOME_TITLE}
        description={HOME_DESC}
        keywords={HOME_KEYWORDS}
        canonicalPath="/"
        ogType="website"
        breadcrumbs={HOME_BREADCRUMBS}
        faqs={HOME_FAQS}
        jsonLd={HOME_JSON_LD}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-label="Hero — Wholesale Artificial Jewellery Manufacturer">
        <img
          className="hero-bg"
          src={heroBg}
          alt="Wholesale artificial jewellery collection by Reshmi Qureshi, Mumbai"
          title="Premium Wholesale Artificial Jewellery Manufacturer — Reshmi Qureshi"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">Wholesale Jewellery</p>
          <h1>Timeless Beauty.<br/>Trusted by Business<span>.</span></h1>

          <div className="hero-divider">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5Z"/></svg>
          </div>

          <p className="hero-desc">Manufacturer, Exporter &amp; Supplier of Premium Quality Fashion Jewellery Crafted with Elegance and Perfection.</p>

          <div className="hero-btns">
            <button className="btn-primary" aria-label="Explore our wholesale jewellery collection" onClick={() => navigate('/products')}>Explore Collection &nbsp;→</button>
            <a href="https://wa.me/918310696529" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="Contact us on WhatsApp for wholesale jewellery inquiry">
              Get In Touch
            </a>
          </div>

          <div className="hero-badges">
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <div className="badge-text">
                <div className="title">Premium</div>
                <div className="sub">Quality</div>
              </div>
            </div>
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div className="badge-text">
                <div className="title">Wholesale</div>
                <div className="sub">Pricing</div>
              </div>
            </div>
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
              </svg>
              <div className="badge-text">
                <div className="title">Global</div>
                <div className="sub">Supply</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SHOP BY CATEGORY ═══ */}
      <div style={{ marginTop: '20px' }}>
        <CategoryCircles />
      </div>

      {/* ═══ ABOUT ═══ */}
      <section className="about" id="about" aria-label="About Reshmi Qureshi Wholesale Jewellery">
        <div className="about-img-wrap">
          <img
            className="about-img"
            src={topProduct4}
            alt="Reshmi Qureshi — Wholesale artificial jewellery manufacturer and exporter, Mumbai India"
            title="About Reshmi Qureshi Wholesale Jewellery — Est. 2019"
            width="600"
            height="600"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-content">
          <p className="section-eyebrow">About Us</p>
          <h2>Crafting Relationships<br/>with Brilliance</h2>
          <p className="about-desc">Established in 2019, we are a trusted name in the wholesale jewellery industry, offering a wide range of designs that blend tradition with modern trends.</p>

          <ul className="about-list" aria-label="Key business details">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0v-3M5 21H3m2 0v-3M9 7h1m4 0h1M9 11h1m4 0h1M9 15h6"/></svg>
              Manufacturer / Exporter / Supplier
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              21 – 50 Employees
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Registered Office: Shanti Nagar, Mumbai, Maharashtra – 401107, India
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Branch Office: Shanti Nagar, Mumbai, Maharashtra – 401107, India
            </li>
          </ul>

          <div className="about-bottom">
            <div className="years-badge">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-8px', left: '-8px', width: '126px', height: '126px', opacity: '.7' }} aria-hidden="true">
                  <path d="M22 55 Q16 45 20 35 Q26 42 22 55Z" fill="#C8973A" opacity=".7"/>
                  <path d="M18 55 Q10 42 16 30 Q24 40 18 55Z" fill="#C8973A" opacity=".6"/>
                  <path d="M20 62 Q12 52 15 40 Q22 50 20 62Z" fill="#C8973A" opacity=".6"/>
                  <path d="M24 68 Q16 60 20 48 Q26 58 24 68Z" fill="#C8973A" opacity=".5"/>
                  <path d="M88 55 Q94 45 90 35 Q84 42 88 55Z" fill="#C8973A" opacity=".7"/>
                  <path d="M92 55 Q100 42 94 30 Q86 40 92 55Z" fill="#C8973A" opacity=".6"/>
                  <path d="M90 62 Q98 52 95 40 Q88 50 90 62Z" fill="#C8973A" opacity=".6"/>
                  <path d="M86 68 Q94 60 90 48 Q84 58 86 68Z" fill="#C8973A" opacity=".5"/>
                  <path d="M48 90 Q55 96 62 90" stroke="#C8973A" strokeWidth="1.5" fill="none" opacity=".8"/>
                </svg>
                <div style={{ width: '110px', height: '110px', border: '1.5px solid #C8973A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#f5f0e8' }}>
                  <div className="number">8<span style={{ fontSize: '22px', verticalAlign: 'super' }}>+</span></div>
                  <div className="label">Years of<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="features" aria-label="Why choose Reshmi Qureshi wholesale jewellery">
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <h3>Exquisite Designs</h3>
          <p>A wide range of unique and trendy jewellery collections crafted with precision.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <h3>Quality Assured</h3>
          <p>Premium quality artificial jewellery products with finest craftsmanship.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
          <h3>Wholesale Supply</h3>
          <p>Competitive wholesale pricing with reliable global delivery for bulk orders.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <h3>Customer Satisfaction</h3>
          <p>Building long-term relationships with our valued wholesale clients.</p>
        </div>
      </section>

      {/* ═══ TOP PRODUCTS ═══ */}
      <section className="top-products" aria-label="Top wholesale jewellery products">
        <div className="top-products-header">
          <p className="section-eyebrow">Discover</p>
          <h2>Our Top Products</h2>
          <div className="hero-divider" style={{ margin: '20px auto 24px' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5Z"/></svg>
          </div>
          <p className="top-products-desc">Explore our handpicked selection of premium wholesale artificial jewellery pieces, carefully crafted for perfection.</p>
        </div>
        
        <div className="products-grid">
          {[
            { img: newTopProduct1, label: 'Wholesale artificial jewellery piece 1 — Reshmi Qureshi', title: 'Exquisite Jewellery Set 1' },
            { img: newTopProduct2, label: 'Wholesale artificial jewellery piece 2 — Reshmi Qureshi', title: 'Exquisite Jewellery Set 2' },
            { img: newTopProduct3, label: 'Wholesale artificial jewellery piece 3 — Reshmi Qureshi', title: 'Exquisite Jewellery Set 3' },
            { img: newTopProduct4, label: 'Wholesale artificial jewellery piece 4 — Reshmi Qureshi', title: 'Exquisite Jewellery Set 4' },
          ].map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-img-wrap">
                <img
                  src={item.img}
                  alt={item.label}
                  title={item.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>Premium Quality Wholesale Jewellery</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="contact" id="contact" aria-label="Contact Reshmi Qureshi for wholesale jewellery inquiry">
        <img
          className="contact-bg"
          src={contactBg}
          alt="Contact Reshmi Qureshi wholesale jewellery manufacturer Mumbai India"
          title="Get in touch with us for wholesale artificial jewellery bulk orders"
          width="1920"
          height="600"
          loading="lazy"
          decoding="async"
        />

        <div className="contact-left">
          <p className="contact-eyebrow">Tell Us What You Are Looking For</p>
          <h2>We Will Call<br/>You Back</h2>
          <div className="contact-divider">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5Z"/></svg>
          </div>
          <p className="contact-desc">Looking for a reliable wholesale artificial jewellery partner? Share your requirements and our team will connect with you shortly.</p>
        </div>

        <form className="contact-form" onSubmit={handleWhatsAppSubmit} aria-label="Wholesale jewellery inquiry form">
          <div className="form-row">
            <input
              className="form-input"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              aria-label="Your full name"
              autoComplete="name"
            />
            <input
              className="form-input"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-label="Your email address"
              autoComplete="email"
            />
          </div>
          <div className="form-row">
            <input
              className="form-input"
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              aria-label="Your phone number"
              autoComplete="tel"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Business Type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              aria-label="Your business type"
              autoComplete="organization-type"
            />
          </div>
          <textarea
            className="form-input"
            placeholder="Your Requirements"
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            required
            aria-label="Describe your wholesale jewellery requirements"
          ></textarea>
          <button type="submit" className="btn-submit" aria-label="Submit wholesale jewellery inquiry via WhatsApp">Submit Now &nbsp; →</button>
        </form>
      </section>
    </>
  );
}
