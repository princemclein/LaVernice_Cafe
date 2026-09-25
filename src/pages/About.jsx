import "../Css/About.css";
import storyImg from "../assets/About/aboutImg2.jpg";

export default function About() {
  return (
    <section className="about-page">
      {/* Full-bleed photo hero */}
      <div className="about-hero">
        <img
          src={storyImg}
          alt="Espresso pouring into a cup on a scale at LaVernice"
        />
        <div className="about-hero__caption">
          <span className="about-hero__eyebrow">The Process</span>
          <h1>Every shot, measured.</h1>
        </div>
      </div>

      <div className="page-shell about-page__body">
        {/* Intro line */}
        <p className="about-lead">
          LaVernice is a small café in Olongapo City built on a simple standard:
          if it wouldn't hold up on a table in front of us, it doesn't go on the
          menu.
        </p>

        {/* Process steps, numbered — matches the precision of the photo */}
        <div className="about-process">
          <div className="about-process__step">
            <span className="about-process__num">01</span>
            <div>
              <h3>Weighed, not eyeballed</h3>
              <p>
                Every shot is dosed and timed. Small-batch beans from a local
                roast partner mean the profile shifts through the year — so we
                adjust instead of forcing consistency that isn't there.
              </p>
            </div>
          </div>

          <div className="about-process__step">
            <span className="about-process__num">02</span>
            <div>
              <h3>Made once, made fresh</h3>
              <p>
                Pastries are baked by hand each morning. Whatever doesn't sell
                by close doesn't get served the next day.
              </p>
            </div>
          </div>

          <div className="about-process__step">
            <span className="about-process__num">03</span>
            <div>
              <h3>No rush at the table</h3>
              <p>
                The same care that goes into the cup goes into the room —
                mismatched seating, low music, no pressure to free it up.
              </p>
            </div>
          </div>
        </div>

        {/* Visit CTA */}
        <div className="about-visit">
          <h2>Find us</h2>
          <p>Open daily, 7 AM – 9 PM, in Olongapo City.</p>
          <a href="/menu" className="about-visit__cta">
            See what's on the menu
          </a>
        </div>
      </div>
    </section>
  );
}
