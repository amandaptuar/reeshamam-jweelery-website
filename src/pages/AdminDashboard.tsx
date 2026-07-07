import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import './AdminDashboard.css';
import './Products.css';

interface Product {
  id: string;
  title: string;
  image_url: string;
  image_url_2?: string;
  image_url_3?: string;
  category: string;
  quantity_label: string;
  price: string;
  in_stock: boolean;
}

function AdminProductCard({ product, onEdit, onToggleStock, onDelete }: { product: Product, onEdit: (p: Product) => void, onToggleStock: (id: string, current: boolean) => void, onDelete: (id: string, url: string) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product.image_url, product.image_url_2, product.image_url_3].filter(Boolean) as string[];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{product.title}</span>
      </div>
      
      <div className="card-img-wrap" style={{ background: 'none', position: 'relative', overflow: 'hidden' }}>
        <img src={images[currentImageIndex]} alt={product.title} width="400" height="400" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevImage} aria-label="Previous image" style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#000', zIndex: 2 }}>‹</button>
            <button className="carousel-btn next" onClick={nextImage} aria-label="Next image" style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#000', zIndex: 2 }}>›</button>
            <div className="carousel-dots" style={{ position: 'absolute', bottom: '12px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '6px', zIndex: 2 }}>
              {images.map((_, i) => (
                <span key={i} className={`dot ${i === currentImageIndex ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setCurrentImageIndex(i); }} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === currentImageIndex ? 'var(--gold)' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'background 0.3s ease' }} />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="card-info">
        <div className="info-col">
          <div className="info-label">Minimum Quantity</div>
          <div className="info-value">{product.quantity_label}</div>
        </div>
        <div className="info-col">
          <div className="info-label">Price Range</div>
          <div className="info-value">{product.price}</div>
        </div>
        <div className="info-col">
          <div className="info-label">In Stock</div>
          <div className={`info-value ${product.in_stock ? 'in-stock' : ''}`} style={{ color: product.in_stock ? '#000' : '#c62828' }}>
            {product.in_stock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
      </div>
      
      <div className="admin-card-actions-row">
        <button 
          onClick={() => onEdit(product)}
          className="btn-admin-action edit"
        >
          Edit
        </button>
        <button 
          onClick={() => onToggleStock(product.id, product.in_stock)}
          className={`btn-admin-action ${product.in_stock ? 'stock-in' : 'stock-out'}`}
        >
          {product.in_stock ? 'Hide' : 'Show'}
        </button>
        <button onClick={() => onDelete(product.id, product.image_url)} className="btn-admin-action delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('necklace');
  const [quantity, setQuantity] = useState('10+ Pcs');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imageFile3, setImageFile3] = useState<File | null>(null);
  const [currentImage1, setCurrentImage1] = useState<string | null>(null);
  const [currentImage2, setCurrentImage2] = useState<string | null>(null);
  const [currentImage3, setCurrentImage3] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Basic auth check
    if (localStorage.getItem('admin_auth') !== 'true') {
      navigate('/admin');
      return;
    }
    
    fetchProducts();
  }, [navigate]);

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

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin');
  };

  const openAddModal = () => {
    setEditingProductId(null);
    setTitle('');
    setCategory('necklace');
    setPrice('');
    setQuantity('10+ Pcs');
    setInStock(true);
    setImageFile(null);
    setImageFile2(null);
    setImageFile3(null);
    setCurrentImage1(null);
    setCurrentImage2(null);
    setCurrentImage3(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProductId(product.id);
    setTitle(product.title);
    setCategory(product.category);
    setPrice(product.price);
    setQuantity(product.quantity_label);
    setInStock(product.in_stock);
    setImageFile(null); 
    setImageFile2(null);
    setImageFile3(null);
    setCurrentImage1(product.image_url);
    setCurrentImage2(product.image_url_2 || null);
    setCurrentImage3(product.image_url_3 || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProductId(null);
  };

  const handleAddOrUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProductId && !imageFile) {
      alert('Please select an image for the new product.');
      return;
    }

    setUploading(true);

    try {
      let publicUrl = undefined;
      let publicUrl2 = undefined;
      let publicUrl3 = undefined;

      const uploadImage = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `public/${fileName}`;
        const { error } = await supabase.storage.from('product-images').upload(filePath, file);
        if (error) throw error;
        const { data } = supabase.storage.from('product-images').getPublicUrl(filePath);
        return data.publicUrl;
      };

      if (imageFile) publicUrl = await uploadImage(imageFile);
      if (imageFile2) publicUrl2 = await uploadImage(imageFile2);
      if (imageFile3) publicUrl3 = await uploadImage(imageFile3);

      // 2. Insert or Update DB
      if (editingProductId) {
        const updateData: any = {
          title,
          category,
          quantity_label: quantity,
          price,
          in_stock: inStock
        };
        if (publicUrl) updateData.image_url = publicUrl;
        if (publicUrl2) updateData.image_url_2 = publicUrl2;
        if (publicUrl3) updateData.image_url_3 = publicUrl3;

        const { error: updateError } = await supabase
          .from('products')
          .update(updateData)
          .eq('id', editingProductId);

        if (updateError) throw updateError;
        setSuccessMessage('Product updated successfully!');
      } else {
        const { error: insertError } = await supabase
          .from('products')
          .insert([
            {
              title,
              category,
              quantity_label: quantity,
              price,
              in_stock: inStock,
              image_url: publicUrl,
              image_url_2: publicUrl2,
              image_url_3: publicUrl3
            }
          ]);

        if (insertError) throw insertError;
        setSuccessMessage('Product created successfully!');
      }

      closeModal();
      fetchProducts();

    } catch (error: any) {
      alert(`Error saving product: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    
    try {
      // Delete from DB
      const { error: dbError } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
        
      if (dbError) throw dbError;

      // Try to delete image from storage (extract path from URL)
      try {
        const urlObj = new URL(imageUrl);
        const pathSegments = urlObj.pathname.split('/');
        const bucketIndex = pathSegments.indexOf('product-images');
        if (bucketIndex !== -1) {
          const filePath = pathSegments.slice(bucketIndex + 1).join('/');
          await supabase.storage.from('product-images').remove([filePath]);
        }
      } catch (err) {
        console.warn('Could not delete image file, it may be orphaned:', err);
      }

      setProducts(products.filter(p => p.id !== id));
      if (editingProductId === id) {
        closeModal();
      }
    } catch (error: any) {
      alert(`Error deleting product: ${error.message}`);
    }
  };

  const toggleStock = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('products')
        .update({ in_stock: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      setProducts(products.map(p => p.id === id ? { ...p, in_stock: !currentStatus } : p));
    } catch (error: any) {
      alert(`Error updating stock: ${error.message}`);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <span className="crown">♛</span> Admin Dashboard
        </div>
        <button onClick={handleLogout} className="btn-logout">Logout</button>
      </header>

      <main className="dashboard-main">
        <section className="product-list-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ marginBottom: 0 }}>Manage Products</h3>
            <button onClick={openAddModal} className="btn-submit" style={{ width: 'auto', padding: '10px 20px', margin: 0 }}>
              + Add New Product
            </button>
          </div>

          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="products-page" style={{ background: 'transparent', padding: 0 }}>
              <div className="products-grid">
                {products.map(product => (
                  <AdminProductCard 
                    key={product.id} 
                    product={product} 
                    onEdit={handleEdit} 
                    onToggleStock={toggleStock} 
                    onDelete={handleDelete} 
                  />
                ))}
                
                {products.length === 0 && <p className="no-products" style={{ gridColumn: '1 / -1' }}>No products found. Add some above!</p>}
              </div>
            </div>
          )}
        </section>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>✕</button>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '24px', color: '#000' }}>
                {editingProductId ? 'Update Product' : 'Add New Product'}
              </h3>
              
              <form className="add-product-form" onSubmit={handleAddOrUpdateProduct}>
                <div className="form-row">
                  <div className="form-group">
                    <label style={{ color: '#000' }}>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g. Royal Kundan Set" style={{ color: '#000', borderColor: '#000' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ color: '#000' }}>Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} style={{ color: '#000', borderColor: '#000' }}>
                      <option value="necklace">Necklace</option>
                      <option value="earring">Earring</option>
                      <option value="bangle">Bangles</option>
                      <option value="ring">Bridal sets with pasa</option>
                      <option value="bracelet">Hathpan</option>
                      <option value="kaleera">Kaleera</option>
                      <option value="bridal-sets">Bridal Sets</option>
                      <option value="full-bridal-sets">Full Bridal sets</option>
                      <option value="mossonite-sets">Mossonite sets</option>
                      <option value="sabyasachi-sets">Sabyasachi sets</option>
                      <option value="cz-ad-sets">CZ AD sets</option>
                      <option value="party-wear-sets">Party wear sets</option>
                      <option value="potlis">Potlis</option>
                      <option value="tikas">Tikas</option>
                      <option value="usa-orders">USA orders</option>
                      <option value="canada-orders">Canada orders</option>
                      <option value="uk-orders">UK orders</option>
                      <option value="europe-orders">Europe orders</option>
                      <option value="worldwide-shipping">Worldwide shipping</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label style={{ color: '#000' }}>Price Range (e.g. ₹1,850 - ₹2,500)</label>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} required placeholder="e.g. ₹1,850 - ₹2,500" style={{ color: '#000', borderColor: '#000' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ color: '#000' }}>Minimum Quantity (e.g. 10 Pcs)</label>
                    <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} required style={{ color: '#000', borderColor: '#000' }} />
                  </div>
                </div>

                <div className="form-row" style={{ flexWrap: 'wrap' }}>
                  <div className="form-group" style={{ flex: '1 1 100%' }}>
                    <label style={{ color: '#000' }}>Product Image 1 (Main) {editingProductId && '(Leave blank to keep current)'}</label>
                    {currentImage1 && <img src={currentImage1} alt="Preview 1" style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />}
                    <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] || null)} required={!editingProductId} style={{ color: '#000', borderColor: '#000' }} />
                  </div>
                  <div className="form-group" style={{ flex: '1 1 48%' }}>
                    <label style={{ color: '#000' }}>Product Image 2 (Optional) {editingProductId && '(Leave blank to keep current)'}</label>
                    {currentImage2 && <img src={currentImage2} alt="Preview 2" style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />}
                    <input type="file" accept="image/*" onChange={e => setImageFile2(e.target.files?.[0] || null)} style={{ color: '#000', borderColor: '#000' }} />
                  </div>
                  <div className="form-group" style={{ flex: '1 1 48%' }}>
                    <label style={{ color: '#000' }}>Product Image 3 (Optional) {editingProductId && '(Leave blank to keep current)'}</label>
                    {currentImage3 && <img src={currentImage3} alt="Preview 3" style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />}
                    <input type="file" accept="image/*" onChange={e => setImageFile3(e.target.files?.[0] || null)} style={{ color: '#000', borderColor: '#000' }} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group checkbox-group">
                    <label style={{ color: '#000' }}>
                      <input type="checkbox" checked={inStock} onChange={e => setInStock(e.target.checked)} />
                      In Stock
                    </label>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                  <button type="submit" className="btn-submit" disabled={uploading}>
                    {uploading ? 'Saving...' : editingProductId ? 'Save Changes' : 'Add Product'}
                  </button>
                  <button type="button" onClick={closeModal} className="btn-submit" style={{ background: '#777' }}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="modal-overlay" onClick={() => setSuccessMessage(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px', textAlign: 'center' }}>
              <div style={{ marginBottom: '16px', color: 'var(--gold)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '48px', height: '48px', margin: '0 auto' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '16px', color: '#000' }}>Success</h3>
              <p style={{ color: '#333', marginBottom: '24px', fontSize: '16px' }}>{successMessage}</p>
              <button className="btn-submit" onClick={() => setSuccessMessage(null)} style={{ width: '100%' }}>OK</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
