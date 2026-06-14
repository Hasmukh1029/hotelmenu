import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import MenuCard from '../components/MenuCard';
import Footer from '../components/Footer';
import { menuItems } from '../data/menuData';

function Home() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = !normalizedQuery || `${item.name} ${item.section} ${item.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const selectCategory = (category) => {
    setActiveCategory(category);
  };

  const navigate = (category, target) => {
    selectCategory(category);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  const exploreMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Navbar onNavigate={navigate} />
      <main>
        <Hero onExplore={exploreMenu} />
        <section className="menu-section-wrap" id="menu">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow dark">A little something for everyone</p><h2>Explore our menu</h2></div>
              <p>From crispy starters to comforting rice and house-special chicken, every plate is made to satisfy.</p>
            </div>

            <div className="menu-controls">
              <SearchBar value={query} onChange={setQuery} />
              <CategoryFilter activeCategory={activeCategory} onChange={selectCategory} />
            </div>

            <div className="results-meta" aria-live="polite">
              <p><strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? 'item' : 'items'} found</p>
              {activeCategory !== 'all' && <button onClick={() => setActiveCategory('all')}>View all menu items</button>}
            </div>

            {filteredItems.length > 0 ? (
              <div className="menu-grid">
                {filteredItems.map((item, index) => <MenuCard key={item.id} item={item} index={index} />)}
              </div>
            ) : (
              <div className="empty-state"><FiSearch /><h3>No dishes found</h3><p>Try another search or choose a different category.</p><button className="primary-button" onClick={() => { setQuery(''); setActiveCategory('all'); }}>Reset menu</button></div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
