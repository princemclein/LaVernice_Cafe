import { Link } from "react-router-dom";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h3>LaVernice Cafe</h3>
          <p>
            Side by side with your coffee ritual, from slow mornings to after-dinner conversations.
          </p>
        </div>

        <div className="site-footer__links">
          <h4>Explore</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/promotions">Promotions</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="site-footer__info">
          <h4>Visit</h4>
          <p>123 Coffee Lane</p>
          <p>Open daily: 7:00 AM – 9:00 PM</p>
          <p>hello@lavernicecafe.com</p>
        </div>
      </div>
    </footer>
  );
}