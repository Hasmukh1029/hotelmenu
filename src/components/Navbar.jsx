import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/kanana-logo.jpg';

const links = [
  { label: 'Home', category: 'all', target: 'home' },
  { label: 'Veg Menu', category: 'veg', target: 'menu' },
  { label: 'Non-Veg Menu', category: 'non-veg', target: 'menu' },
  { label: 'Beverages', category: 'beverages', target: 'menu' },
];

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (link) => {
    onNavigate(link.category, link.target);
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => handleClick(links[0])} aria-label="Go to home">
          <img src={logo} alt="Kanana logo" />
          <span><strong>Kanana</strong><small>Hill View Homestay</small></span>
        </button>

        <button className="nav-toggle" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isOpen}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {links.map((link) => (
            <button key={link.label} onClick={() => handleClick(link)}>{link.label}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
