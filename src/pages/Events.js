import React, { useState } from "react";
import "../styles/Events.css";

const eventsData = [
  {
    image: "/assets/baby-shower.png",
    alt: "Baby shower decorations",
    title: "Baby Shower",
    description:
      "Welcome new life with decor that’s soft, elegant, and full of joy. Whether you're celebrating a mom-to-be or hosting a gender reveal, we create dreamy setups with delicate florals, plush textures, and personalized touches.",
    link: "/pages/Contact",
    linkText: "→ Book your baby shower decor and let the celebration bloom with grace",
  },
  {
    image: "/assets/birthday-bash.png",
    alt: "Birthday Bash decorations",
    title: "Birthday Bash",
    description:
      "Make every birthday a masterpiece. We craft themed decor—from whimsical to sophisticated—tailored to your personality, age, and vision.",
    link: "/pages/Contact",
    linkText: "→ Let us style your birthday bash with flair and finesse.",
  },
  {
    image: "/assets/wedding-decor.png",
    alt: "Marriage Ceremonies decorations",
    title: "Marriage Ceremonies",
    description:
      "From intimate vows to lavish weddings, our decor captures the essence of your union. We blend tradition, elegance, and personal touches to create a sacred and stunning atmosphere.",
    link: "/pages/Contact",
    linkText: "→ Begin your forever with decor that speaks your love language.",
  },
  {
    image: "/assets/aniversary.png",
    alt: "Anniversary decorations",
    title: "Anniversary Decorations",
    description:
      "Celebrate enduring love with decor that reflects your journey. Whether it’s a romantic dinner or a grand celebration, we design elegant setups that honor your story and create unforgettable moments.",
    link: "/pages/Contact",
    linkText: "→ Book your anniversary decor today and let love lead the design",
  },
  {
    image: "/assets/picnic.png",
    alt: "Picnic decorations",
    title: "Picnic Styling",
    description:
      "Transform outdoor gatherings into luxurious escapes. From boho-chic to garden glam, we curate scenic picnic setups with plush seating, curated props, and ambient touches.",
    link: "/pages/Contact",
    linkText: "→ Reserve your styled picnic and elevate your alfresco experience.",
  },
  {
    image: "/assets/engagement.png",
    alt: "Engagement parties decorations",
    title: "Engagement Parties",
    description:
      "Celebrate your promise with decor that radiates romance and anticipation. We design dreamy setups that mark the beginning of your journey together.",
    link: "/pages/Contact",
    linkText: "→ Secure your engagement decor and let the magic unfold.",
  },
  {
    image: "/assets/graduation.png",
    alt: "Graduation Party decorations",
    title: "Graduation Party",
    description:
      "Honor achievement with a setup that reflects pride, ambition, and celebration. From bold backdrops to refined table styling, we design decor that elevates the graduate’s moment and sets the stage for new beginnings.",
    link: "/pages/Contact",
    linkText: "→ Reserve your graduation decor and celebrate success in style.",
  },
  {
    image: "/assets/custom.png",
    alt: "Acts of kindness and giving decorations",
    title: "Acts of Kindness & Giving",
    description:
      "Planning a charity event or community gathering? We offer warm, dignified decor that reflects compassion and purpose.",
    link: "/pages/Contact",
    linkText: "→ Book decor that uplifts and inspires through every detail.",
  },
  {
    image: "/assets/friends.png",
    alt: "Celebration with friends decorations",
    title: "Celebrations with Friends",
    description:
      "Whether it’s a brunch, reunion, or spontaneous get-together, we create cozy, stylish environments that spark joy and connection.",
    link: "/pages/Contact",
    linkText: "→ Book decor that turns moments with friends into cherished memories.",
  },
];


const categories = [
  "All",
  "Baby Shower",
  "Birthday Bash",
  "Marriage Ceremonies",
  "Anniversary",
  "Picnic",
  "Engagement",
  "Graduation",
  "Kindness",
  "Friends",
];

const EventCard = ({ image, alt, title, description, link, linkText, onImageClick }) => (
  <div className="event-card">
    <div className="event-image-wrapper" onClick={() => onImageClick(image)}>
      <img src={image} alt={alt} className="event-image" />
    </div>
    <div className="event-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="event-cta">{linkText}</a>
    </div>
  </div>
);

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" ||
      event.title.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="events-container">
      <header className="events-header">
        <h1>✨ Events Decor Services</h1>
        <p>
          From intimate gatherings to grand celebrations, our decor transforms spaces into unforgettable experiences.
        </p>

        <div className="events-controls">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="events-search"
          />
          <div className="events-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-button ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="events-grid">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} onImageClick={openLightbox} />
        ))}
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={lightboxImage} alt="Event preview" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Events;
