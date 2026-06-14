import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import logo from '../assets/kanana-logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Kanana logo" />
          <div><h2>Kanana</h2><p>Hill View Homestay</p></div>
        </div>
        <div className="footer-intro"><p>A peaceful hill-view stay paired with fresh, hearty food made for family tables and unhurried moments.</p></div>
        <address className="contact-list">
          <a href="https://maps.app.goo.gl/zJ42HA9M2g6U1mmr7?g_st=ac" target="_blank" rel="noopener noreferrer">
            <FiMapPin /> View on Google Maps
          </a>
          <p><FiPhone /> +91 93412 12628</p>
          <p><FiClock /> Open daily · 8:00 AM – 10:00 PM</p>
        </address>
      </div>
      <div className="footer-bottom"><div className="container"><p>© {new Date().getFullYear()} Kanana Hill View Homestay. All rights reserved.</p><span>Prices are subjected to be changed according to season.</span></div></div>
    </footer>
  );
}

export default Footer;
