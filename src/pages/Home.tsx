import { useState } from 'react';
import './Home.css';
import heroBg from '../assets/hero-bg.png';
import aboutImg from '../assets/about-img.png';
import contactBg from '../assets/contact-bg.png';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', type: '', requirements: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness Type: ${formData.type}\nRequirements: ${formData.requirements}`;
    const url = `https://wa.me/918310696529?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <img className="hero-bg" src={heroBg} alt="" />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">Wholesale Jewellery</p>
          <h1>Timeless Beauty.<br/>Trusted by Business<span>.</span></h1>

          <div className="hero-divider">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5Z"/></svg>
          </div>

          <p className="hero-desc">Manufacturer, Exporter &amp; Supplier of Premium Quality Fashion Jewellery Crafted with Elegance and Perfection.</p>

          <div className="hero-btns">
            <button className="btn-primary">Explore Collection &nbsp;→</button>
            <a href="https://wa.me/918310696529" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-badges">
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <div className="badge-text">
                <div className="title">Premium</div>
                <div className="sub">Quality</div>
              </div>
            </div>
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div className="badge-text">
                <div className="title">Wholesale</div>
                <div className="sub">Pricing</div>
              </div>
            </div>
            <div className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

      {/* ═══ ABOUT ═══ */}
      <section className="about" id="about">
        <div className="about-img-wrap">
          <img className="about-img" src={aboutImg} alt="About Us" />
        </div>
        <div className="about-content">
          <p className="section-eyebrow">About Us</p>
          <h2>Crafting Relationships<br/>with Brilliance</h2>
          <p className="about-desc">Established in 2019, we are a trusted name in the wholesale jewellery industry, offering a wide range of designs that blend tradition with modern trends.</p>

          <ul className="about-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0v-3M5 21H3m2 0v-3M9 7h1m4 0h1M9 11h1m4 0h1M9 15h6"/></svg>
              Manufacturer / Exporter / Supplier
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              21 – 50 Employees
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Registered Office: Shanti Nagar, Mumbai, Maharashtra – 401107, India
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Branch Office: Shanti Nagar, Mumbai, Maharashtra – 401107, India
            </li>
          </ul>

          <div className="about-bottom">
            <div className="years-badge">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '-8px', left: '-8px', width: '126px', height: '126px', opacity: '.7' }}>
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
                  <div className="number">5<span style={{ fontSize: '22px', verticalAlign: 'super' }}>+</span></div>
                  <div className="label">Years of<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="features">
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <h3>Exquisite Designs</h3>
          <p>A wide range of unique and trendy jewellery collections.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <h3>Quality Assured</h3>
          <p>Premium quality products with finest craftsmanship.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
          <h3>Wholesale Supply</h3>
          <p>Competitive pricing with reliable global delivery.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <h3>Customer Satisfaction</h3>
          <p>Building long-term relationships with our valued clients.</p>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="contact" id="contact">
        <img className="contact-bg" src={contactBg} alt="" />

        <div className="contact-left">
          <p className="contact-eyebrow">Tell Us What You Are Looking For</p>
          <h2>We Will Call<br/>You Back</h2>
          <div className="contact-divider">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 11.1l-3.75 2.6 1.5-4.5L6 6.5h4.5Z"/></svg>
          </div>
          <p className="contact-desc">Looking for a reliable jewellery wholesale partner? Share your requirements and our team will connect with you shortly.</p>
        </div>

        <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
          <div className="form-row">
            <input className="form-input" type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <input className="form-input" type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="form-row">
            <input className="form-input" type="tel" placeholder="Your Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            <input className="form-input" type="text" placeholder="Business Type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} />
          </div>
          <textarea className="form-input" placeholder="Your Requirements" value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })} required></textarea>
          <button type="submit" className="btn-submit">Submit Now &nbsp; →</button>
        </form>
      </section>
    </>
  );
}
