import { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "../Css/Contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const BRANCHES = {
  olongapo: {
    label: "Olongapo City",
    address: "1st Street, 16 Mt. Apo, Olongapo City, 2200 Zambales",
    phone: "09055100048",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.9648225052274!2d120.27811147515658!3d14.827232285686446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339671002f1e835d%3A0xd5c1167ced323b68!2sLa%20Vernice%20Cafe%20-%20Olongapo!5e0!3m2!1sen!2sph!4v1790312679875!5m2!1sen!2sph",
  },
  subic: {
    label: "Subic",
    address:
      "184 RH 5 Subic Baraca National Hwy, Calapandayan, Subic, Zambales",
    phone: "09776128363",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.2662820465143!2d120.23205217515745!3d14.866381385652144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339677001bd9d721%3A0x752964769978f303!2sLa%20Vernice%20Cafe%20-%20Subic!5e0!3m2!1sen!2sph!4v1790312813935!5m2!1sen!2sph",
  },
};

export default function Contact() {
  const [activeBranch, setActiveBranch] = useState("olongapo");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const branch = BRANCHES[activeBranch];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Write a short message.";
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="page-shell contact-page">
      <div className="contact-hero">
        <h1>Get in touch</h1>
        <p>
          Questions about an order, a booking for a group, or just want to say
          hello — send us a message and we'll get back to you.
        </p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            {errors.name && (
              <span className="contact-error">{errors.name}</span>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
            />
            {errors.email && (
              <span className="contact-error">{errors.email}</span>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="">Select a topic</option>
              <option value="order">Order question</option>
              <option value="booking">Group booking / reservation</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what's up"
            />
            {errors.message && (
              <span className="contact-error">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="contact-success">
              Thanks — your message is in. We'll reply within a day or two.
            </p>
          )}
          {status === "error" && (
            <p className="contact-error-msg">
              Something went wrong sending that. Try again, or email us
              directly.
            </p>
          )}
        </form>

        <div className="contact-info">
          <div className="contact-info__block">
            <h3>Hours</h3>
            <p>
              Monday – Friday: 7:00 AM – 9:00 PM
              <br />
              Saturday – Sunday: 7:00 AM – 10:00 PM
            </p>
          </div>

          <div className="contact-info__block">
            <h3>Reach us directly</h3>
            <p>
              <a href="mailto:laverniceolongapo@gmail.com">
                laverniceolongapo@gmail.com
              </a>
              <br />
              <a href={`tel:${branch.phone}`}>{branch.phone}</a>
            </p>
          </div>

          <div className="contact-info__block">
            <h3>Follow along</h3>
            <div className="contact-social">
              <a
                href="https://facebook.com/laverniceolongapo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com/laverniceolongapo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@laverniceolongapo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-location-header">
        <h2>Find us</h2>
        <div className="branch-toggle">
          {Object.entries(BRANCHES).map(([key, b]) => (
            <button
              key={key}
              type="button"
              className={`branch-toggle__btn ${activeBranch === key ? "branch-toggle__btn--active" : ""}`}
              onClick={() => setActiveBranch(key)}
            >
              {b.label}
            </button>
          ))}
        </div>
        <p className="contact-address">{branch.address}</p>
      </div>

      <div className="contact-map">
        <iframe
          key={activeBranch}
          title={`LaVernice Cafe - ${branch.label}`}
          src={branch.mapSrc}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
