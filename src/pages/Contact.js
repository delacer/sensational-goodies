import React, { useRef, useState } from "react";
import confetti from "canvas-confetti";
import "../styles/Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/manayygo", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        setSubmitted(true);
        formRef.current.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
    }
  };

  return (
    <main className="contact-container">
      <header className="contact-header">
        <h1 className="contact-title">Let’s Connect</h1>
        <p className="contact-subtitle">
          Whether you're planning a celebration or have a sweet idea to share, we're here to listen.
        </p>
      </header>

      <section className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Reach Us Directly</h2>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon" /> 50 Wheeltree Way, Delft, Cape Town
            </li>
            <li>
              <FaPhoneAlt className="icon" />{" "}
              <a href="tel:+27613292763">+27 61 329 2763</a>
            </li>
            <li>
              <FaEnvelope className="icon" />{" "}
              <a href="mailto:stevepeey@gmail.com">stevepeey@gmail.com</a>
            </li>
            <li>
              <FaWhatsapp className="icon" />{" "}
              <a
                href="https://wa.me/27613292763"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="icon" /> Name
              </label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="icon" /> Email
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="service">
                <FaClipboardList className="icon" /> Service Type
              </label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="custom-cake">Custom Cake</option>
                <option value="event-styling">Event Styling</option>
                <option value="branding">Branding & Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FaEnvelope className="icon" /> Message
              </label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          {submitted && (
            <p className="form-success-message">🎉 Your message has been sent successfully!</p>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Visit Us</h2>
        <div className="map-container">
          <iframe
            title="Sensational Goodies Location"
            src="https://www.google.com/maps?q=50+Wheeltree+Way,+Delft,+Cape+Town&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27613292763"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp /> Chat
      </a>
    </main>
  );
};

export default Contact;
