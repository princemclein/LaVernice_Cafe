import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "../Css/Navbar.css";
import Logo from "../assets/Brand/Lv_logo.png";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <img src={Logo} alt="LaVernice Cafe" className="brand-logo" />
          <span className="brand-name">LaVernice Cafe</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      <div className={`nav-overlay ${isMenuOpen ? "nav-overlay--open" : ""}`}>
        <div className="nav-overlay__top">
          <div className="brand">
            <img src={Logo} alt="LaVernice Cafe" className="brand-logo" />
            <span className="brand-name">LaVernice Cafe</span>
          </div>
          <button
            type="button"
            className="nav-overlay__close"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <ul className="nav-overlay__links">
          {LINKS.map((link, i) => (
            <li key={link.to} style={{ transitionDelay: `${i * 40}ms` }}>
              <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-overlay__footer">
          <p>Open daily · 7:00 AM – 9:00 PM</p>
          <div className="nav-overlay__social">
            <a
              href="https://www.facebook.com/profile.php?id=100079836871624"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/lavernicecafe_olongapo?fbclid=IwY2xjawUi2xlleHRuA2FlbQIxMABwZG9mBWJyaWQRMWhOZmZRRUxoWmVlV3JXQjVzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeH49nKDJ2_d8bAKwUfk5shi7I_FEw9_gLOXJYLF4sp6Dx8FkJbTb6KAJSYrE_aem_ngFFJ480A5V5r0LvW9Ar1A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@_lavernicegapo_?fbclid=IwY2xjawUi2yxleHRuA2FlbQIxMABwZG9mBWJyaWQRMWhOZmZRRUxoWmVlV3JXQjVzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJfZPrRXvOvm8YPoZxhGIXPgs58j8jOGSEZiN2xshUbH3uOY5-6acL09-VVU_aem_iTcApq-lfGLBp7dtxMdteg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
