import "../Css/Testimonials.css";

const REVIEWS = [
  {
    name: "Prince G.",
    stars: 5,
    text: "Sobrang comfortable ng place at affordable. Good drinks and very good staff!",
  },
  {
    name: "Reez D.",
    stars: 4,
    text: "Very friendly and professional staff, and the drinks are super affordable. I also really liked the taste!",
  },
  {
    name: "Gabriela N.",
    stars: 5,
    text: "Really love the cozy atmosphere here. The drinks are good, and the place is perfect for relaxing or hanging out with friends.",
  },
  {
    name: "Kylee M.",
    stars: 5,
    text: "Such a nice place to chill! The drinks are really good, and I love the overall vibe of the cafe.",
  },
  {
    name: "Ralph C.",
    stars: 4,
    text: "Really nice place and the drinks are good. The place is super cold haha, but it makes it even more comfortable to chill!",
  },
];

// Repeat so one group is always wider than the screen.
const GROUP = [...REVIEWS, ...REVIEWS];

function Stars({ count }) {
  return (
    <div
      className="testi__stars"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ opacity: i < count ? 1 : 0.35 }}
        >
          <path
            fill="currentColor"
            d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
          />
        </svg>
      ))}
    </div>
  );
}

function Card({ review }) {
  return (
    <figure className="testi__card">
      <Stars count={review.stars} />
      <blockquote className="testi__text">{review.text}</blockquote>
      <figcaption className="testi__who">
        <span className="testi__avatar" aria-hidden="true">
          {review.name[0]}
        </span>
        <span className="testi__name">{review.name}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="testi" id="testimonials" aria-labelledby="testi-title">
      <div className="testi__head">
        <h2 className="testi__title" id="testi-title">
          Loved by 2k+ customers
        </h2>
        <p className="testi__sub">Here's what people say after a cup or two.</p>
      </div>

      <div className="testi__viewport">
        <div className="testi__track">
          <div className="testi__group">
            {GROUP.map((r, i) => (
              <Card review={r} key={`a-${i}`} />
            ))}
          </div>
          {/* Duplicate group makes the loop seamless */}
          <div className="testi__group" aria-hidden="true">
            {GROUP.map((r, i) => (
              <Card review={r} key={`b-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
