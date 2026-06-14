import { FiCoffee } from 'react-icons/fi';
import { GiChickenLeg, GiForkKnifeSpoon } from 'react-icons/gi';

const categoryLabels = { veg: 'Veg', 'non-veg': 'Non-Veg', beverages: 'Beverage' };

function MenuCard({ item, index }) {
  const Icon = item.category === 'beverages' ? FiCoffee : item.category === 'non-veg' ? GiChickenLeg : GiForkKnifeSpoon;

  return (
    <article className={`menu-card ${item.category}`} style={{ '--delay': `${Math.min(index, 12) * 35}ms` }}>
      <div className="menu-card-icon"><Icon aria-hidden="true" /></div>
      <div className="menu-card-content">
        <span className="menu-section">{item.section}</span>
        <h3>{item.name}</h3>
        <span className={`category-badge ${item.category}`}><i />{categoryLabels[item.category]}</span>
      </div>
      <p className="price" aria-label={`Price ${item.price} rupees`}><small>₹</small>{item.price}</p>
    </article>
  );
}

export default MenuCard;
