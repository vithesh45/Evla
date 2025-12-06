import React, { useState } from "react";
import "../styles/contact.css";
import '../index.css'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch("https://formspree.io/f/manjkdrz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setSubmitted(true); 
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Try again!");
      });
  };

  return (
    <div className="contact-container">
      <h1 className="section-title">Contact Us</h1>

      <div className="team-contacts">
        <div className="team-member">
          <h2>Sai</h2>
          <p>+91-96111 49957</p>
        </div>
        <div className="team-member">
          <h2>Gopinath</h2>
          <p>+91-99723 04620</p>
        </div>
        <div className="team-member">
          <h2>Kiran</h2>
          <p>+91-88614 32353</p>
        </div>
      </div>

      <h2 className="form-title">Enquire</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p className="thankyou-msg">Thank you! Your message has been sent.</p>
      )}
    </div>
  );
}
