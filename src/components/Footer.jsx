import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h3>LaVernice Cafe</h3>
          <p>
            Side by side with your coffee ritual, from slow mornings to
            after-dinner conversations.
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
          <h4>Connect</h4>
          <div className="site-footer__social">
            <a
              href="https://www.facebook.com/profile.php?id=100079836871624"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/lavernicecafe_olongapo?fbclid=IwY2xjawUi2xlleHRuA2FlbQIxMABwZG9mBWJyaWQRMWhOZmZRRUxoWmVlV3JXQjVzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeH49nKDJ2_d8bAKwUfk5shi7I_FEw9_gLOXJYLF4sp6Dx8FkJbTb6KAJSYrE_aem_ngFFJ480A5V5r0LvW9Ar1A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@_lavernicegapo_?fbclid=IwY2xjawUi2yxleHRuA2FlbQIxMABwZG9mBWJyaWQRMWhOZmZRRUxoWmVlV3JXQjVzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJfZPrRXvOvm8YPoZxhGIXPgs58j8jOGSEZiN2xshUbH3uOY5-6acL09-VVU_aem_iTcApq-lfGLBp7dtxMdteg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>

          <a
            className="site-footer__email"
            href="mailto:laverniceolongapo@gmail.com"
          >
            laverniceolongapo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
