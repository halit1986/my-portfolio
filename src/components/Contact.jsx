import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h1>Contact</h1>
      <p>You can reach me via email</p>
      <ul>
        <li>
          <strong>Email:</strong> dkshlt47@gmail.com
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/halit-doksal"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/halit1986"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
