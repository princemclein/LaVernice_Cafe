import "../Css/Menu.css";
import heroImg from "../assets/Home/hero-img.jpg";

const MENU_ITEMS = [
  {
    id: "signature-espresso",
    category: "Coffee",
    name: "Signature Espresso",
    desc: "A rich, velvety shot with notes of caramel and roasted cocoa.",
    price: 120,
    image: heroImg,
  },
  {
    id: "strawberry-frappe",
    category: "Frappe",
    name: "Strawberry Frappe",
    desc: "Creamy strawberry blend topped with whipped cream and a sweet finish.",
    price: 145,
    image: heroImg,
  },
  {
    id: "choco-fudge-frappe",
    category: "Frappe",
    name: "Choco Fudge Frappe",
    desc: "Deep chocolate flavor with a smooth, indulgent texture.",
    price: 155,
    image: heroImg,
  },
  {
    id: "caramel-macchiato",
    category: "Coffee",
    name: "Caramel Macchiato",
    desc: "Balanced espresso and milk with a gentle caramel sweetness.",
    price: 130,
    image: heroImg,
  },
  {
    id: "matcha-cloud",
    category: "Tea",
    name: "Matcha Cloud",
    desc: "Earthy matcha blended smoothly with creamy milk and a light foam top.",
    price: 150,
    image: heroImg,
  },
  {
    id: "classic-donut",
    category: "Treats",
    name: "Classic Glazed Donut",
    desc: "Soft, airy, and finished with a glossy sugar glaze.",
    price: 55,
    image: heroImg,
  },
];

export default function Menu() {
  return (
    <section className="menu-page">
      <div className="menu-page__intro">
        <p className="eyebrow">Menu</p>
        <h1>Made for slow sips and easy favorites.</h1>
        <p>
          From creamy frappes and espresso pours to buttery pastries and mellow
          teas, every item is designed to feel like a little everyday ritual.
        </p>
      </div>

      <div className="menu-grid">
        {MENU_ITEMS.map((item) => (
          <article className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy" />

            <div className="menu-card__body">
              <div className="menu-card__meta">
                <span className="menu-card__category">{item.category}</span>
                <span className="menu-card__price">₱{item.price}</span>
              </div>

              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
