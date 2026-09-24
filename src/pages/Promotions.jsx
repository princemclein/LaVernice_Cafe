import "../Css/Promotions.css";

const PROMOS = [
  {
    title: "Midweek Brew Treat",
    description: "Buy any signature coffee and get a glazed donut for 50% off.",
  },
  {
    title: "Weekend Matcha Moment",
    description:
      "Enjoy a free upsize on matcha drinks every Saturday and Sunday.",
  },
  {
    title: "Friends & Frappes",
    description:
      "Share a combo of two frappes and get a free add-on syrup shot.",
  },
];

export default function Promotions() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Promotions</p>
        <h1>Small seasonal perks for your next café run.</h1>
      </div>

      <div className="promo-grid">
        {PROMOS.map((promo) => (
          <article className="promo-card" key={promo.title}>
            <p className="promo-label">Limited time</p>
            <h2>{promo.title}</h2>
            <p>{promo.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
