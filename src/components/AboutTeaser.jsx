import "../Css/AboutTeaser.css";
import AboutTeaseImg from "../assets/Home/lavernice-interior.jpg";

export default function AboutTeaser() {
  return (
    <section className="about" id="about-teaser" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__photo">
          <img src={AboutTeaseImg} alt="Inside LaVernice Cafe" loading="lazy" />
        </div>

        <div className="about__copy">
          <h2 className="about__title" id="about-title">
            A cafe you can take your time in.
          </h2>
          <p>
            LaVernice opened in 2024 as a donut and coffee spot with a simple
            idea: good drinks, made properly, in a place that doesn't rush you.
          </p>
          <p>
            The menu has grown since then to frappes, handcrafted coffee, and a
            few things we couldn't leave off. Same idea, more cups.
          </p>
          <a className="about__btn" href="/about">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
