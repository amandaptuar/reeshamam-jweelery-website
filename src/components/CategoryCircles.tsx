import { useNavigate } from 'react-router-dom';
import './CategoryCircles.css';
import bridalSetIcon from '../assets/bridaslseticon.png';
import neckpieceImg from '../assets/top/image copy 3.png';
import img4 from '../assets/potli-category.png';
import img5 from '../assets/about-img.png';
import bridalSetImg from '../assets/top/image copy.png';
import kaleeraIcon from '../assets/kaleeraicon.png';

const CIRCLE_CATEGORIES = [
  { id: 'ring', label: 'Bridal sets with pasa', img: bridalSetIcon },
  { id: 'necklace', label: 'Neckpieces', img: neckpieceImg },
  { id: 'potlis', label: 'Potlis and Clutches', img: img4 },
  { id: 'bracelet', label: 'Hathpan', img: img5 },
  { id: 'bridal-sets', label: 'Bridal Sets', img: bridalSetImg },
  { id: 'kaleera', label: 'Kaleera', img: kaleeraIcon },
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
