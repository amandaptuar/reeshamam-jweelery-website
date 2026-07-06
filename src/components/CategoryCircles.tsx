import { useNavigate } from 'react-router-dom';
import './CategoryCircles.css';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/potli-category.png';
import img5 from '../assets/about-img.png';
import img6 from '../assets/our-story.png';

const CIRCLE_CATEGORIES = [
  { id: 'earring', label: 'Earrings', img: img1 },
  { id: 'ring', label: 'Rings', img: img2 },
  { id: 'necklace', label: 'Neckpieces', img: img3 },
  { id: 'potlis', label: 'Potlis and Clutches', img: img4 },
  { id: 'bangle', label: 'Bracelets / Bangles', img: img5 },
  { id: 'bridal-sets', label: 'Bridal Sets', img: img6 },
];

export default function CategoryCircles() {
  const navigate = useNavigate();

  return (
    <section className="category-circles-section" aria-label="Shop by category">
      <div className="category-circles-container">
        <div className="category-circles-grid">
          {CIRCLE_CATEGORIES.map(cat => (
          <div 
            key={cat.id} 
            className="category-circle-item"
            onClick={() => navigate(`/products?category=${cat.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate(`/products?category=${cat.id}`);
              }
            }}
            aria-label={`Shop ${cat.label}`}
          >
            <div className="category-circle-img-wrap">
              <img src={cat.img} alt={cat.label} loading="lazy" />
            </div>
            <p className="category-circle-label">{cat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
