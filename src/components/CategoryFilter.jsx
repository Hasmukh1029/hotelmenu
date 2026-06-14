import { categories } from '../data/menuData';

function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter menu by category">
      {categories.map((category) => (
        <button key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => onChange(category.id)} aria-pressed={activeCategory === category.id}>
          <span className={`filter-dot ${category.id}`} />{category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
