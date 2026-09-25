import "../Css/Contact.css";

export default function Contact() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Drop by for a coffee, a catch-up, or a sweet pause.</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Visit us</h2>
          <p>123 Coffee Lane, Downtown</p>
          <p>LaVernice Cafe, Philippines</p>
        </div>

        <div className="contact-card">
          <h2>Hours</h2>
          <p>Monday – Friday: 7:00 AM – 9:00 PM</p>
          <p>Saturday – Sunday: 8:00 AM – 10:00 PM</p>
        </div>

        <div className="contact-card">
          <h2>Get in touch</h2>
          <p>laverniceolongapo@gmail.com</p>
          <p>0977 612 8363</p>
        </div>
      </div>
    </section>
  );
}
