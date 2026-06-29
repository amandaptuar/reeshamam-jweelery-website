import { useState, useEffect } from 'react';
import './Products.css';
import heroImage from '../assets/product-hero.png';
import { supabase } from '../lib/supabase';

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
];

function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const WHATSAPP_NUMBER = "918310696529";
  const whatsappMessage = `I'm interested in ${product.title}`;

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{product.title}</span>
        <button 
          className="card-heart" 
          aria-label="Wishlist"
          onClick={() => setIsWishlisted(!isWishlisted)}
          style={{ color: isWishlisted ? '#e57373' : '#bbb' }}
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>
      
      <div className="card-img-wrap" style={{ background: 'none' }}>
        <img src={product.image_url} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      
      <div className="card-info">
        <div className="info-col">
          <div className="info-label">Minimum Quantity</div>
          <div className="info-value">{product.quantity_label}</div>
        </div>
        <div className="info-col">
          <div className="info-label">Price Per Pc</div>
          <div className="info-value">{product.price}</div>
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
      >
        <span className="wa-icon">💬</span> Order on WhatsApp
      </a>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    
    // Subscribe to realtime updates
    const channel = supabase
      .channel('public:products')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => {
        fetchProducts(); // Refresh list on any change
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

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
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroImage} alt="Jewellery Collection" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Our Collection</p>
          <h1 className="hero-title">Wholesale Jewellery Collection</h1>
          <div className="hero-ornament">❧</div>
          <p className="hero-desc">Discover our wide range of premium quality jewellery, crafted with precision and available at competitive wholesale prices.</p>
        </div>
      </section>

      {/* ═══════════════════ MOBILE FILTER ═══════════════════ */}
      <div className="mobile-filter-bar">
        <button className="mobile-filter-btn">☰ &nbsp;Filter</button>
        <button className="mobile-sortby-btn">Sort By &nbsp;▾</button>
      </div>

      {/* ═══════════════════ PRODUCTS ═══════════════════ */}
      <section className="products-section">
        {/* Desktop Filter Bar */}
        <div className="filter-bar">
          <div className="categories">
            <span className="cat-label">Categories:</span>
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="sort-wrap">
            <span className="sort-label">Sort By:</span>
            <select className="sort-select">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px' }}>No products found in this category.</p>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
