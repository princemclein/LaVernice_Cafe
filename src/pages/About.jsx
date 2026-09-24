import "../Css/About.css";

export default function About() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">About</p>
        <h1>Built for the kind of café moments that last.</h1>
      </div>

      <div className="story-grid">
        <div className="story-copy">
          <p>
            LaVernice Cafe began with a simple idea: a cozy neighborhood spot
            where the coffee is good, the pastries are fresh, and there is
            always room to linger a little longer.
          </p>
          <p>
            We serve espresso favorites, chilled frappes, and comforting sweet
            bites in a space designed to feel warm, easy, and familiar.
          </p>
        </div>

        <div className="story-panel">
          <h2>Our values</h2>
          <ul>
            <li>Thoughtful ingredients</li>
            <li>Welcoming service</li>
            <li>Freshly made favorites</li>
            <li>Everyday rituals, done well</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
