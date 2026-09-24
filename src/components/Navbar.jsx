import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../Css/Navbar.css";
import Logo from "../assets/Brand/Lv_logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand-section">
          <div className="brand">
            <img src={Logo} alt="LaVernice Cafe" className="brand-logo" />
            <span className="brand-name">LaVernice Cafe</span>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav
          className={`nav-links ${isMenuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/promotions" onClick={() => setIsMenuOpen(false)}>
                Promotions
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
