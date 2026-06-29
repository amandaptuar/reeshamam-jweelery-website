import './Legal.css';
import { useEffect } from 'react';

export default function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-overlay"></div>
        <div className="legal-hero-content">
          <h1>Legal Information</h1>
          <div className="legal-hero-divider">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
          </div>
          <p className="legal-hero-desc">Privacy Policy & Terms of Conditions</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section" id="privacy">
            <h2>Privacy Policy</h2>
            <p className="last-updated">Last Updated: October 2023</p>
            
            <h3>1. Information We Collect</h3>
            <p>At WholesalejeweleryRessham, we collect information that you provide directly to us when making inquiries, subscribing to our newsletter, or contacting us through our platform. This includes your name, email address, phone number, and business details.</p>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you regarding your inquiries, and send you updates or promotional materials if you have opted in to receive them.</p>

            <h3>3. Information Sharing</h3>
            <p>We do not share, sell, or rent your personal information to third parties. We only share information with trusted service providers who assist us in operating our business and strictly under confidentiality agreements.</p>
          </div>

          <hr className="legal-separator" />

          <div className="legal-section" id="terms">
            <h2>Terms of Conditions</h2>
            <p className="last-updated">Last Updated: October 2023</p>
            
            <h3>1. General Terms</h3>
            <p>By accessing or using our platform, you agree to be bound by these Terms of Conditions. If you disagree with any part of the terms, you may not access our services.</p>

            <h3>2. Products and Pricing</h3>
            <p>As a wholesale supplier, our products and pricing are subject to change without prior notice. We strive to accurately display the colors and details of our jewellery; however, we cannot guarantee that your device's display accurately reflects the physical items.</p>

            <h3>3. Intellectual Property</h3>
            <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of WholesalejeweleryRessham and is protected by intellectual property laws.</p>

            <h3>4. Limitation of Liability</h3>
            <p>In no event shall WholesalejeweleryRessham, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services or products.</p>
          </div>
        </div>
      </section>
    </>
  );
}
