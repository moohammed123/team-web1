import React from 'react';

export default function Helloo({ title, description, imageUrl, imageAlt }) {
  return (
    <div>
      <section className="intro">
        <div className="container">
          {/* Dynamic Title */}
          <h2>{title}</h2>

          {/* Dynamic Description */}
          <p>{description}</p>

          {/* Dynamic Image */}
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </section>
    </div>
  );
}
