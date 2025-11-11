import React, {useState} from "react";
import "../styles/Home.css";

const Home = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Thandi M.",
      text: "Sensational Goodies made my daughter’s birthday magical. The cake was stunning and delicious!",
      rating: 5,
    },
    {
      name: "Jason & Lerato",
      text: "Their styling transformed our wedding into a dream. Every detail was perfect.",
      rating: 5,
    },
  ]);

  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", text: "", rating: 5 });
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? "star filled" : "star"}>★</span>
    ));
  };
  return (
    <main className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: 'url("/assets/birthday-bash.png")' }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Welcome to Sensational Goodies</h1>
          <p>
            Where every celebration becomes a masterpiece. From luxurious cakes to elegant event styling,
            we craft experiences that reflect your story, values, and vision.
          </p>
          <div className="hero-buttons">
            <a href="/pages/Events" className="cta-button">Explore Event Styling →</a>
            <a href="/pages/Cakes" className="cta-button">Explore Our Cakes →</a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <div className="intro-text">
          <h2>Why Choose Us?</h2>
          <p>
            We don’t just decorate—we design experiences. Our work is rooted in elegance, clarity, and legacy.
            Whether it’s a cake, a venue, or a moment, we make it unforgettable.
          </p>
          <ul>
            <li>✨ Elegant, personalized decor for every occasion</li>
            <li>🎂 Custom cakes that taste as good as they look</li>
            <li>💫 Styling that reflects legacy, love, and luxury</li>
          </ul>
          <a href="/pages/Contact" className="cta-button secondary">Start Your Journey →</a>
        </div>
        <div className="intro-image">
          <img src="/assets/hero.jpeg" alt="Elegant cake slice" />
        </div>
      </section>

      {/* Featured Services */}
      <section className="services">
        <h2>Our Signature Offerings</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/assets/birth-mic.png" alt="Custom Cake Design" />
            <h3>Custom Cake Design</h3>
            <p>Handcrafted cakes tailored to your theme, taste, and occasion.</p>
          </div>
          <div className="card">
            <img src="/assets/birthday-bash.png" alt="Event Styling" />
            <h3>Event Styling</h3>
            <p>From intimate gatherings to grand celebrations, we style with elegance and flair.</p>
          </div>
          <div className="card">
            <img src="/assets/appreciation.png" alt="Luxury Gift Boxes" />
            <h3>Luxury Gift Boxes</h3>
            <p>Curated treats and keepsakes that leave a lasting impression.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Client Love</h2>
        <div className="testimonial-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar">
                {review.name.split(" ").map(word => word[0]).join("")}
              </div>
              <p className="testimonial-quote">“{review.text}”</p>
              <div className="testimonial-stars">{renderStars(review.rating)}</div>
              <footer className="testimonial-author">— {review.name}</footer>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <form className="review-form" onSubmit={handleSubmit}>
          <h3>Share Your Experience</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Review"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            required
          />
          <label>Rating:</label>
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r} Stars</option>
            ))}
          </select>
          <button type="submit">Submit Review</button>
        </form>
      </section>

      
    </main>
  );
};

export default Home;
