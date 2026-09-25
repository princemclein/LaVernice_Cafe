import "../Css/Hero.css";
import heroImg from "../assets/Home/hero-img.jpg";

const stats = [
  { value: "50+", label: "Menu Items" },
  { value: "20+", label: "Signature Drinks" },
  { value: "2k+", label: "Happy Customers" },
];

export default function Hero() {
  return (
    <div id="home">
      <div className="hero-text">
        <h1>
          A Little LaVernice <br />
          In Every Sip
        </h1>
        <p>
          From creamy frappes to handcrafted coffee, LaVernice is made for slow
          mornings, quick catch-ups, and everything in between.
        </p>

        <div className="hero-actions">
          <a href="/menu" className="btn btn-solid">
            Explore Menu <span className="btn-arrow">→</span>
          </a>
          <a href="#about-teaser" className="btn btn-outline">
            Our Story
          </a>
        </div>

        <div className="stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Two LaVernice frappes held by a barista" />
      </div>
    </div>
  );
}
