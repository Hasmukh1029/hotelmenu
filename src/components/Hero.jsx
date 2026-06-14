import { FiArrowDown, FiCoffee } from 'react-icons/fi';
import { GiKnifeFork } from 'react-icons/gi';
import logo from '../assets/kanana-logo.jpg';

function Hero({ onExplore }) {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><GiKnifeFork /> Freshly made, warmly served</p>
          <h1>Good food.<br /><span>Great views.</span></h1>
          <p className="hero-description">Welcome to Kanana Hill View Homestay, where comforting local flavours meet the calm of the hills.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={onExplore}>Explore our menu <FiArrowDown /></button>
            <span className="fresh-note"><FiCoffee /> 69 delicious choices</span>
          </div>
        </div>

        <div className="hero-logo-card" aria-label="Kanana Hill View Homestay">
          <div className="logo-glow"><img src={logo} alt="Kanana Hill View Homestay logo" /></div>
          <p>Save nature. Savour the moment.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
