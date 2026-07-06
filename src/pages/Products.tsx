import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Products.css';
import heroImage from '../assets/product-hero.png';
import { supabase } from '../lib/supabase';
import SEOHead from '../components/SEOHead';
import { BASE_KEYWORDS, PRODUCTS_EXTRA_KEYWORDS, AEO_KEYWORDS } from '../lib/seoKeywords';

const PRODUCTS_TITLE = 'Wholesale Artificial Jewellery Collection — Necklaces, Earrings, Bangles & More | Reshmi Qureshi';
const PRODUCTS_DESC = 'Browse our wholesale artificial jewellery collection. Necklace sets, earrings, bangles, rings & bracelets. Bulk order pricing, premium quality from Mumbai, India.';
const PRODUCTS_KEYWORDS = `${BASE_KEYWORDS}, ${PRODUCTS_EXTRA_KEYWORDS}, ${AEO_KEYWORDS}`;

const PRODUCTS_BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
];

const PRODUCTS_FAQS = [
  { question: 'What jewellery categories are available for wholesale purchase?', answer: 'We offer wholesale artificial jewellery across multiple categories including necklace sets, earrings, bangles, rings, bracelets, and bridal jewellery sets. All available for bulk orders.' },
  { question: 'Can I filter jewellery by category?', answer: 'Yes, you can browse our wholesale jewellery collection by category: All Products, Necklace Sets, Earrings, Bangles, Rings, and Bracelets. Use the filter bar at the top of the products page.' },
  { question: 'How do I place a wholesale order for jewellery?', answer: 'Click the "Order on WhatsApp" button on any product to send an inquiry directly to our team. We will respond with availability, pricing, and minimum order details.' },
  { question: 'Do you have bridal jewellery sets for wholesale?', answer: 'Yes, we manufacture premium quality wholesale artificial bridal jewellery sets including kundan, polki, American diamond, and gold-plated designs suitable for weddings and occasions.' },
];

const PRODUCTS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: PRODUCTS_TITLE,
  description: PRODUCTS_DESC,
  url: 'https://wholesalejewelryressham.online/products',
  isPartOf: { '@type': 'WebSite', url: 'https://wholesalejewelryressham.online' },
  about: { '@type': 'Organization', name: 'Reshmi Qureshi Wholesale Jewellery' },
  provider: {
    '@type': 'Organization',
    name: 'Reshmi Qureshi Wholesale Jewellery',
    url: 'https://wholesalejewelryressham.online',
  },
};

interface Product {
  id: string;
  title: string;
  image_url: string;
  category: string;
  quantity_label: string;
  price: string;
  in_stock: boolean;
}

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'necklace', label: 'Necklace Sets' },
  { id: 'earring', label: 'Earrings' },
  { id: 'bangle', label: 'Bangles' },
  { id: 'ring', label: 'Rings' },
  { id: 'bracelet', label: 'Bracelets' },
  { id: 'kaleera', label: 'Kaleera' },
  { id: 'bridal-sets', label: 'Bridal Sets' },
  { id: 'cz-ad-sets', label: 'CZ AD Sets' },
  { id: 'party-wear-sets', label: 'Party Wear Sets' },
  { id: 'potlis-usa-orders', label: 'Potlis , USA orders' },
  { id: 'canada-orders', label: 'Canada orders' },
  { id: 'uk-orders', label: 'UK orders' },
  { id: 'europe-orders', label: 'Europe orders' },
  { id: 'tikas', label: 'Tikas' },
];

function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const WHATSAPP_NUMBER = "918310696529";
  const whatsappMessage = `I'm interested in ordering:\nProduct: ${product.title}\nID: ${product.id}\nPrice Per Pc: ${product.price}\nImage Link: ${product.image_url}`;

  return (
    <div className="card" itemScope itemType="https://schema.org/Product">
      <meta itemProp="brand" content="Reshmi Qureshi Wholesale Jewellery" />
      <meta itemProp="sku" content={product.id} />
      <meta itemProp="availability" content={product.in_stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'} />
      <div className="card-header">
        <span className="card-title" itemProp="name">{product.title}</span>
        <button
          className="card-heart"
          aria-label={isWishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          style={{ color: isWishlisted ? '#e57373' : '#bbb' }}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>

      <div className="card-img-wrap" style={{ background: 'none' }} itemProp="image">
        <img
          src={product.image_url}
          alt={`${product.title} — wholesale artificial jewellery by Reshmi Qureshi, Mumbai India`}
          title={`${product.title} | Wholesale Artificial Jewellery`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
          decoding="async"
          width="400"
          height="400"
        />
      </div>

      <div className="card-info" itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="priceCurrency" content="INR" />
        <meta itemProp="price" content={product.price} />
        <meta itemProp="availability" content={product.in_stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'} />
        <meta itemProp="seller" content="Reshmi Qureshi Wholesale Jewellery" />
        <div className="info-col">
          <div className="info-label">Minimum Quantity</div>
          <div className="info-value">{product.quantity_label}</div>
        </div>
        <div className="info-col">
          <div className="info-label">Price Per Pc</div>
          <div className="info-value" itemProp="price">{product.price}</div>
        </div>
        <div className="info-col">
          <div className="info-label">In Stock</div>
          <div className={`info-value ${product.in_stock ? 'in-stock' : ''}`}>
            {product.in_stock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
      </div>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
        className="btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Order ${product.title} on WhatsApp`}
      >
        <span className="wa-icon" aria-hidden="true">💬</span> Order on WhatsApp
      </a>
    </div>
  );
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    fetchProducts();
    const channel = supabase
      .channel('public:products')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => {
        fetchProducts();
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      if (data) setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <main className="products-page">
      <SEOHead
        title={PRODUCTS_TITLE}
        description={PRODUCTS_DESC}
        keywords={PRODUCTS_KEYWORDS}
        canonicalPath="/products"
        ogType="website"
        breadcrumbs={PRODUCTS_BREADCRUMBS}
        faqs={PRODUCTS_FAQS}
        jsonLd={PRODUCTS_JSON_LD}
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero" aria-label="Wholesale Artificial Jewellery Collection">
        <div className="hero-bg">
          <img
            src={heroImage}
            alt="Wholesale artificial jewellery collection — necklaces, earrings, bangles by Reshmi Qureshi Mumbai"
            title="Wholesale Artificial Jewellery Collection | Reshmi Qureshi"
            width="1920"
            height="600"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Our Collection</p>
          <h1 className="hero-title">Wholesale Jewellery Collection</h1>
          <div className="hero-ornament" aria-hidden="true">❧</div>
          <p className="hero-desc">Discover our wide range of premium quality artificial jewellery, crafted with precision and available at competitive wholesale prices for bulk orders.</p>
        </div>
      </section>

      {/* ═══════════════════ MOBILE FILTER ═══════════════════ */}
      <div className="mobile-filter-bar" role="toolbar" aria-label="Product filter options">
        <button className="mobile-filter-btn" aria-label="Filter products by category">☰ &nbsp;Filter</button>
        <button className="mobile-sortby-btn" aria-label="Sort products">Sort By &nbsp;▾</button>
      </div>

      {/* ═══════════════════ PRODUCTS ═══════════════════ */}
      <section className="products-section" aria-label="Wholesale jewellery products listing">
        {/* Desktop Filter Bar */}
        <div className="filter-bar" role="toolbar" aria-label="Category filter">
          <div className="categories">
            <span className="cat-label">Categories:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchParams({ category: cat.id });
                }}
                aria-pressed={activeCategory === cat.id}
                aria-label={`Filter by ${cat.label}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="sort-wrap">
            <span className="sort-label">Sort By:</span>
            <select className="sort-select" aria-label="Sort products">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }} aria-live="polite">Loading wholesale jewellery products...</p>
        ) : filteredProducts.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px' }} aria-live="polite">No products found in this category. Please check back soon.</p>
        ) : (
          <div className="products-grid" role="list" aria-label="Wholesale jewellery products">
            {filteredProducts.map((product) => (
              <div role="listitem" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
