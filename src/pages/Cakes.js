import React, { useState } from "react";
import "../styles/Cakes.css";

const cakeData = [
  {
    title: "Baby Shower Cakes",
    image: "/assets/babyshower.png",
    alt: "Baby Shower Cake",
    description:
      "Welcome new beginnings with a cake that’s soft, sweet, and full of charm. Whether it’s a gender reveal or a celebration of motherhood, we create delicate designs that honor the moment with warmth and beauty.",
    cta: "→ Book your baby shower cake and let joy rise in every layer",
  },
  {
    title: "Birthday Cakes",
    image: "/assets/birth-mic.png",
    alt: "Birthday Cake",
    description:
      "Celebrate life with a cake that’s as unique as you are. Whether it’s playful, elegant, or themed to your passions—sports, art, entertainment—we design custom birthday cakes that turn your vision into edible luxury.",
    cta: "→ Book your birthday cake and let your celebration taste extraordinary",
  },
  {
    title: "Wedding Cakes",
    image: "/assets/wedding.png",
    alt: "Wedding Cake",
    description:
      "Your love story deserves a masterpiece. Our wedding cakes are crafted with sophistication, tailored to your theme, and finished with exquisite detail.",
    cta: "→ Reserve your wedding cake and let elegance be the final touch to your vows",
  },
  {
    title: "Graduation Cakes",
    image: "/assets/custom.jpg",
    alt: "Graduation Cake",
    description:
      "Celebrate achievement with bold, inspiring designs. Our graduation cakes reflect pride, ambition, and the joy of new beginnings—customized to your field, colors, or future dreams.",
    cta: "→ Book your graduation cake and honor success with style",
  },
  {
    title: "Appreciation & Giving Cakes",
    image: "/assets/appreciation.png",
    alt: "Appreciation Cake",
    description:
      "Whether you're thanking someone special or hosting a community event, we design cakes that express gratitude with elegance.",
    cta: "→ Book your appreciation cake and let kindness be beautifully served",
  },
  {
    title: "Mother’s Day Cakes",
    image: "/assets/mothers-day.png",
    alt: "Mother’s Day Cake",
    description:
      "Honor the queens in your life with cakes that are graceful, heartfelt, and luxurious. From floral elegance to personalized messages, we create designs that celebrate motherhood with warmth and sophistication.",
    cta: "→ Book your Mother’s Day cake and let love bloom in every detail",
  },
  {
    title: "Anniversary Cakes",
    image: "/assets/ann.png",
    alt: "Anniversary Cake",
    description:
      "Mark your milestones with a cake that tells your story. Romantic, refined, and personalized to your journey—we craft anniversary cakes that celebrate love, commitment, and cherished memories.",
    cta: "→ Order your anniversary cake and relive the magic in every bite",
  },
  {
    title: "Engagement Cakes",
    image: "/assets/engaged.png",
    alt: "Engagement Cake",
    description:
      "Capture the excitement of your promise with a cake that’s romantic and radiant. We design engagement cakes that reflect your love, your style, and the anticipation of what’s to come.",
    cta: "→ Reserve your engagement cake and let the celebration begin beautifully",
  },
  {
    title: "Lobola Cakes",
    image: "/assets/lobola.png",
    alt: "Lobola Cake",
    description:
      "From spontaneous gatherings to planned parties, we create cakes that spark joy and connection. Fun, stylish, and personalized to your vibe.",
    cta: "→ Order your celebration cake and make memories sweeter together",
  },
];

const featuredCakes = cakeData.slice(0, 4); // first 4 featured

const Cakes = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

 
  return (
    <main className="cakes">
      <header className="cakes-header">
        <h1>🍰 Signature Cakes for Every Occasion</h1>
        <p>
          From elegant weddings to joyful birthdays, our cakes are handcrafted to elevate every celebration.
        </p>
      </header>

      {/* Carousel */}
      <section className="cake-carousel">
        {featuredCakes.map((cake, index) => (
          <div key={index} className="carousel-item" onClick={() => setLightboxIndex(index)}>
            <img src={cake.image} alt={cake.alt} />
            <h3>{cake.title}</h3>
          </div>
        ))}
      </section>
      {/* Design Prompt Section */}
<section className="cake-design-prompt">
  <div className="design-content">
    <h2>Design Your Dream Cake</h2>
    <p>
      Have a vision in mind? Whether it’s a theme, color palette, or a unique idea,
      we’d love to bring it to life. Upload your inspiration or reach out to start crafting your custom creation.
    </p>
    <a href="/pages/Contact" className="cta-button">Start Your Custom Order →</a>
  </div>
  <div className="design-image">
    <img src="/assets/ann.png" alt="Custom cake design inspiration" />
  </div>
</section>



      {/* Cake Grid */}
      <section className="cake-grid">
        {cakeData.map((cake, index) => (
          <div key={index} className="cake-card">
            <div className="cake-image" onClick={() => setLightboxIndex(index)}>
              <img src={cake.image} alt={cake.alt} />
            </div>
            <div className="cake-content">
              <h2>{cake.title}</h2>
              <button
                className="toggle-button"
                onClick={() => toggleDescription(index)}
              >
                {visibleIndex === index ? "Hide Details" : "Show Details"}
              </button>
              <div className={`cake-description ${visibleIndex === index ? "visible" : ""}`}>
                <p>{cake.description}</p>
                <a href="/pages/Contact" className="cake-cta">{cake.cta}</a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={cakeData[lightboxIndex].image} alt={cakeData[lightboxIndex].alt} />
            <h2>{cakeData[lightboxIndex].title}</h2>
            <p>{cakeData[lightboxIndex].description}</p>
            <a href="/contact" className="cake-cta">{cakeData[lightboxIndex].cta}</a>
            <button className="close-lightbox" onClick={() => setLightboxIndex(null)}>✕</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cakes;
