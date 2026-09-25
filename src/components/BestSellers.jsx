import { Link } from "react-router-dom";
import "../Css/BestSellers.css";
import heroImg from "../assets/Home/hero-img.jpg";

const DRINKS = [
  {
    id: "strawberry-frappe",
    name: "Strawberry Frappe",
    desc: "Creamy strawberry blend topped with whipped cream and drizzle.",
    price: 145,
    image: heroImg,
  },
  {
    id: "choco-frappe",
    name: "Choco Fudge Frappe",
    desc: "Rich chocolate, chocolate syrup, and a cloud of whipped cream.",
    price: 155,
    image: heroImg,
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    desc: "Espresso and milk with a caramel finish. Served iced or hot.",
    price: 130,
    image: heroImg,
  },
  {
    id: "glazed-donut",
    name: "Classic Glazed Donut",
    desc: "Soft, fresh, and glazed. Goes with everything on the menu.",
    price: 55,
    image: heroImg,
  },
];

export default function BestSellers() {
  return (
    <section className="bs" id="best-sellers" aria-labelledby="bs-title">
      <div className="bs__inner">
        <header className="bs__head">
          <div>
            <h2 className="bs__title" id="bs-title">
              Best Sellers
            </h2>
            <p className="bs__sub">
              The drinks our regulars keep coming back for.
            </p>
          </div>
          <Link className="bs__link" to="/menu">
            View Full Menu
          </Link>
        </header>

        <ul className="bs__grid">
          {DRINKS.map((item) => (
            <li className="bs__card" key={item.id}>
              <div className="bs__media">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>

              <div className="bs__body">
                <h3 className="bs__name">{item.name}</h3>
                <p className="bs__desc">{item.desc}</p>

                <div className="bs__foot">
                  <span className="bs__price">₱{item.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
