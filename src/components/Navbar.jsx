import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "../Css/Navbar.css";
import Logo from "../assets/Lv_logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <img src={Logo} alt="LaVernice Cafe" className="brand-logo" />
        <span className="brand-name">LaVernice Cafe</span>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/promotions">Promotions</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <button className="cart-button" aria-label="Cart">
          <FiShoppingCart />
        </button>
        <Link to="/order" className="order-button">
          Order
        </Link>
      </div>
    </header>
  );
}
