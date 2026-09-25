import "../Css/About.css";
import storyImg from "../assets/About/aboutImg.jpg";

export default function About() {
  return (
    <section className="page-shell about-page">
      <div className="about-hero">
        <h1>The story behind LaVernice.</h1>
        <p className="about-hero__lede">
          A small café in Olongapo built on the idea that a good cup of coffee
          and a place to sit with it shouldn't be hard to find.
        </p>
      </div>

      <div className="about-story">
        <div className="about-story__text">
          <p>
            LaVernice opened with a single espresso machine, four tables, and no
            real plan beyond making coffee worth walking out of the house for.
            There was no investor deck, no brand strategy — just a conviction
            that the neighborhood needed somewhere unhurried.
          </p>
          <p>
            That's mostly still true. The menu has grown — frappes, matcha,
            pastries baked fresh each morning — but the standard hasn't moved.
            If it wouldn't hold up on a table in front of us, it doesn't go on
            the menu.
          </p>
          <p>
            We're not chasing a look or a trend. We're chasing the kind of place
            people come back to without thinking about why.
          </p>
        </div>

        <figure className="about-story__figure">
          <img src={storyImg} alt="Coffee being prepared at LaVernice" />
        </figure>
      </div>

      <div className="about-details">
        <h2>What sets the place apart</h2>
        <p>
          We roast in small batches with a local partner rather than buying bulk
          from a distributor, which means the beans change slightly through the
          year — and we're fine with that. Pastries are made fresh daily by
          hand; whatever doesn't sell by close doesn't get served the next
          morning. And the room itself is built for staying: mismatched seating,
          low music, no pressure to free up the table.
        </p>
      </div>

      <div className="about-visit">
        <h2>Find us</h2>
        <p>
          LaVernice is open daily from 7 AM to 9 PM in Olongapo City.{" "}
          <a href="/menu">See what's on the menu</a> before you stop by, or just
          walk in — there's usually a seat.
        </p>
      </div>
    </section>
  );
}
