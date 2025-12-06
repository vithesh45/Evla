import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">About Elva Tech</h2>
      <p className="section-subtitle">
        Elva Tech is committed to delivering innovative digital solutions that
        empower businesses to grow and succeed in a competitive landscape.
        Our team of talented professionals combines creativity, technology, 
        and strategy to transform ideas into reality.
      </p>

      <div className="about-details">
        <div className="about-item">
          <h3>Our Mission</h3>
          <p>
            To provide cutting-edge software solutions that simplify complex
            business challenges while ensuring top-notch quality and user experience.
          </p>
        </div>
        <div className="about-item">
          <h3>Our Vision</h3>
          <p>
            To be recognized as a trusted partner in digital innovation, known
            for creativity, reliability, and technological excellence.
          </p>
        </div>
        <div className="about-item">
          <h3>Our Values</h3>
          <p>
            Integrity, Innovation, Collaboration, and Customer Success are at
            the core of everything we do.
          </p>
        </div>

      </div>
    </div>
  );
}
