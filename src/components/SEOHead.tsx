import { Helmet } from 'react-helmet-async';

const SITE_DOMAIN = 'https://wholesalejewelryressham.online';
const SITE_NAME = 'Reshmi Qureshi Wholesale Jewellery';
const DEFAULT_IMAGE = `${SITE_DOMAIN}/og-image.jpg`;
const TWITTER_HANDLE = '@wholesalejewelryressham';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
  jsonLd?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  jsonLd,
  breadcrumbs,
  faqs,
}: SEOHeadProps) {
  const canonicalUrl = `${SITE_DOMAIN}${canonicalPath}`;

  /* ── Build JSON-LD array ── */
  const schemas: object[] = [];

  // Always include WebSite + SearchAction on every page
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'WholesalejeweleryRessham',
    url: SITE_DOMAIN,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_DOMAIN}/products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  });

  // Organization schema — always present
  schemas.push({
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: SITE_NAME,
    alternateName: 'WholesalejeweleryRessham',
    url: SITE_DOMAIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_DOMAIN}/favicon.svg`,
      width: 200,
      height: 60,
    },
    image: ogImage,
    description:
      'Reshmi Qureshi is a trusted wholesale artificial jewellery manufacturer, exporter and supplier based in Mumbai, India. Established in 2019, we offer premium quality fashion jewellery for bulk orders globally.',
    foundingDate: '2019',
    founder: {
      '@type': 'Person',
      name: 'Reshma Qureshi',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shanti Nagar',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '401107',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760',
      longitude: '72.8777',
    },
    telephone: '+91-83106-96529',
    email: 'info@wholesalejewelryressham.online',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/wholesalejewelryressham',
      'https://wa.me/918310696529',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-83106-96529',
        contactType: 'sales',
        areaServed: ['IN', 'WORLDWIDE'],
        availableLanguage: ['English', 'Hindi'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-83106-96529',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI',
    hasMap: 'https://maps.google.com/?q=Shanti+Nagar,Mumbai,Maharashtra,401107,India',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 21,
      maxValue: 50,
    },
    knowsAbout: [
      'Artificial Jewellery',
      'Wholesale Jewellery',
      'Fashion Jewellery',
      'Imitation Jewellery',
      'Bridal Jewellery',
      'Jewellery Manufacturing',
      'Jewellery Export',
    ],
    slogan: 'Timeless Beauty. Trusted by Business.',
    brand: {
      '@type': 'Brand',
      name: 'Reshmi Qureshi',
      slogan: 'Timeless Beauty. Trusted by Business.'
    },
    awards: 'Premium Wholesale Jewellery Manufacturer',
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' }
    ],
  });

  // Breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_DOMAIN}${item.url}`,
      })),
    });
  }

  // FAQ schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // Extra custom schema
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      schemas.push(...jsonLd);
    } else {
      schemas.push(jsonLd);
    }
  }

  return (
    <Helmet>
      {/* ═══ Core ═══ */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content="Reshma Qureshi" />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="copyright" content={`© 2024 ${SITE_NAME}`} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="theme-color" content="#C8973A" />

      {/* ═══ Geo / Local SEO ═══ */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />

      {/* ═══ Canonical ═══ */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ═══ Open Graph ═══ */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} - Premium Wholesale Artificial Jewellery`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* ═══ Twitter Card ═══ */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - Premium Wholesale Artificial Jewellery`} />

      {/* ═══ Verification Placeholders ═══ */}
      <meta name="google-site-verification" content="3GNoT0YOuj7dIPMCq-Cp4ZOQ0SAlkNmcLUy7BFUS5fc" />
      <meta name="msvalidate.01" content="REPLACE_WITH_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="REPLACE_WITH_YANDEX_VERIFICATION_CODE" />

      {/* ═══ Apple / Mobile ═══ */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Reshmi Qureshi Jewellery" />
      <meta name="application-name" content="Reshmi Qureshi Jewellery" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />

      {/* ═══ Security Headers ═══ */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://www.google-analytics.com; frame-ancestors 'none';"
      />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta name="permissions-policy" content="camera=(), microphone=(), geolocation=(), payment=()" />

      {/* ═══ JSON-LD Structured Data ═══ */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}
